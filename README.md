# Rotary Portfolio

A portfolio site styled as a rotary phone dial. Click a number and the dial
spins the selected entry to the top while the page content spins in behind it.

## Getting set up

**With Nix + direnv** (recommended):

```sh
direnv allow      # trusts .envrc, which loads flake.nix
npm install
npm run dev
```

**Without Nix**, as long as you have Node 20+ installed:

```sh
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

`npm run build` produces a static production build in `dist/`.

## How the parametric part works

Everything about the dial — how many buttons there are, the angle between
them, and which one rotates to the top — is derived from a single array in
`src/config/entries.js`:

```js
export const entries = [
  { id: 'home', label: 'Home', path: '/', component: () => import('../views/HomeView.vue') },
  // ...
]
```

`src/router/index.js` turns that array into routes, and
`src/components/RotaryDial.vue` computes each button's position as
`360 / entries.length` degrees apart — it never hard-codes "6" anywhere.

**To add a 7th page:**

1. Create `src/views/YourNewView.vue`.
2. Append one object to the `entries` array:
   ```js
   { id: 'writing', label: 'Writing', path: '/writing', component: () => import('../views/WritingView.vue') }
   ```

That's it — all seven buttons reflow to even 360/7 spacing automatically,
the route is registered, and the existing six don't need to move or be
renumbered by hand. The same works in reverse if you remove an entry.

## Structure

```
src/
  App.vue                 layout shell + page-spin transition
  components/
    RotaryDial.vue         the dial: positioning, rotation, click handling
  config/
    entries.js              <- edit this to add/remove/reorder pages
  router/
    index.js                routes generated from entries.js
  views/
    HomeView.vue, AboutView.vue, ...   one placeholder per entry
  styles/
    main.css                 design tokens (colors/fonts) + global styles
```

## Notes

- Deploying to a static host that can't rewrite unknown paths to
  `index.html` (e.g. plain GitHub Pages)? Swap `createWebHistory()` for
  `createWebHashHistory()` in `src/router/index.js`.
- Colors, fonts, and spacing live as CSS custom properties at the top of
  `src/styles/main.css` if you want to reskin it.
