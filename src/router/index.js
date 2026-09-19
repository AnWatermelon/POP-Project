import { createRouter, createWebHistory } from 'vue-router'
import { entries } from '../config/entries'

const routes = entries.map((entry) => ({
  path: entry.path,
  name: entry.id,
  component: entry.component,
}))

const router = createRouter({
  // Swap for createWebHashHistory() if you deploy to a static host that
  // can't rewrite unknown paths back to index.html (e.g. plain GitHub Pages).
  history: createWebHistory(),
  routes,
})

export default router
