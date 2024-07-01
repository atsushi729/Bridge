import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import { flatRoutes } from 'remix-flat-routes'
import { remixDevTools } from 'remix-development-tools'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  build: {
    target: 'ES2022',
  },
  plugins: [
    remixDevTools(),
    mdx({
      remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'attributes' }]],
    }),
    remix({
      serverModuleFormat: 'esm',
      ignoredRouteFiles: ['**/.*'],
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes)
      },
    }),
    tsconfigPaths(),
  ],
})
