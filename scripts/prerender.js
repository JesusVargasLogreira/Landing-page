import { createElement, StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const markup = renderToString(createElement(StrictMode, null, createElement(App)))
  const htmlPath = resolve('dist/index.html')
  const template = await readFile(htmlPath, 'utf8')
  const rootPlaceholder = '<div id="root"></div>'

  if (!template.includes(rootPlaceholder)) {
    throw new Error('Could not find the React root placeholder in dist/index.html')
  }

  await writeFile(htmlPath, template.replace(rootPlaceholder, `<div id="root">${markup}</div>`))
  console.log('Prerendered landing page content into dist/index.html')
} finally {
  await server.close()
}
