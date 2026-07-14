import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: ['..', '.']
    }
  },
  build: {
    // Disable minification: the rolldown minifier is emitting a syntax error
    // that crashes Safari's parser ("Unexpected token '{'. Expected ')' to
    // end a compound expression"), which breaks the whole app on load, no
    // images, no navigation. Unminified output is bigger but safe.
    minify: false,
    target: 'es2020',
  },
})