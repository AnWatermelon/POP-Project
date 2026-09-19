// Every dial entry lives here. The dial reads this array's length to work
// out the angle between buttons, so adding a 7th (or 12th) entry just means
// adding an object below - nothing about the existing entries needs to
// change, and no angle is hard-coded anywhere else in the app.
//
//   id        - must match the route `name` below, and be unique
//   label     - shown on the dial button and in the centre readout
//   path      - URL path for this page
//   component - lazy-loaded view component

export const entries = [
  { id: 'home', label: 'Home', path: '/', component: () => import('../views/HomeView.vue') },
  { id: 'about', label: 'About', path: '/about', component: () => import('../views/AboutView.vue') },
  { id: 'projects', label: 'Projects', path: '/projects', component: () => import('../views/ProjectsView.vue') },
  { id: 'skills', label: 'Skills', path: '/skills', component: () => import('../views/SkillsView.vue') },
  { id: 'experience', label: 'Experience', path: '/experience', component: () => import('../views/ExperienceView.vue') },
  { id: 'contact', label: 'Contact', path: '/contact', component: () => import('../views/ContactView.vue') },
]
