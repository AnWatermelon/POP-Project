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
  { id: 'opening', label: 'Opening', path: '/', component: () => import('../views/OpeningView.vue') },
  { id: 'philosophy', label: 'Philosophy', path: '/philosophy', component: () => import('../views/PhilosophyView.vue') },
  { id: 'orientation', label: 'Orientation', path: '/orientation', component: () => import('../views/OrientationView.vue') },
  { id: 'skills', label: 'Skills', path: '/skills', component: () => import('../views/SkillsView.vue') },
  { id: 'strengths', label: 'Strengths', path: '/strengths', component: () => import('../views/StrengthsView.vue') },
  { id: 'vision', label: 'Vision', path: '/vision', component: () => import('../views/VisionView.vue') },
  { id: 'conclusion', label: 'Conclusion', path: '/conclusion', component: () => import('../views/ConclusionView.vue') },
]
