import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// fixed top-level menu order: Learning, Experience, Design. Everything else
// (subfolders, files) falls back to the default folders-first, alphabetical sort.
//
// IMPORTANT: Explorer serializes sortFn with `.toString()` and re-runs it
// standalone in the browser, so it cannot close over any outer variable
// (like a top-level `const topLevelOrder`). Everything the function needs
// must be declared inside the function body itself.
const explorerOptions = {
  sortFn: (a: any, b: any) => {
    const topLevelOrder = ["learning", "experience", "design"]

    // Explorer calls sortFn once per folder level, comparing siblings only, so
    // this naturally only fires the fixed order for the three root sections.
    const aIsTop = a.isFolder && topLevelOrder.includes(a.displayName.toLowerCase())
    const bIsTop = b.isFolder && topLevelOrder.includes(b.displayName.toLowerCase())

    if (aIsTop && bIsTop) {
      return (
        topLevelOrder.indexOf(a.displayName.toLowerCase()) -
        topLevelOrder.indexOf(b.displayName.toLowerCase())
      )
    }
    if (aIsTop && !bIsTop) return -1
    if (!aIsTop && bIsTop) return 1

    // default Quartz behaviour: folders first, then alphabetical
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    return !a.isFolder && b.isFolder ? 1 : -1
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}
