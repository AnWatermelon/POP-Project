<template>
  <div class="app-shell">
    <header
      class="app-header"
      :class="{ 'app-header--hidden': route.name === 'opening' }"
      :aria-hidden="route.name === 'opening'"
    >
      <h1 class="app-title">Max Hilton</h1>
    </header>

    <div class="app-body">
      <RotaryDial class="app-dial" />

      <main class="app-content" :class="{ 'app-content--centered': route.name === 'opening' }">
        <router-view v-slot="{ Component, route: currentRoute }">
          <transition name="spin-page" mode="out-in">
            <component :is="Component" :key="currentRoute.path" class="view-page" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import RotaryDial from './components/RotaryDial.vue'

const route = useRoute()
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  padding: clamp(1.5rem, 4vmin, 3rem);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vmin, 3rem);
}

.app-header {
  text-align: center;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.app-header--hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.app-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vmin, 2.5rem);
  letter-spacing: 0.03em;
  margin: 0;
  color: var(--color-brand);
}

.app-tagline {
  color: var(--color-text-muted);
  margin: 0.35rem 0 0;
  font-size: 0.95rem;
}

.app-body {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(280px, 420px) 1fr;
  gap: clamp(1.5rem, 4vmin, 3rem);
  align-items: start;
  align-content: start;
}

.app-dial {
  position: sticky;
  top: 2rem;
}

.app-content {
  min-height: 50vh;
}

@media (min-width: 861px) {
  .app-content--centered {
    align-self: center;
    min-height: unset;
  }
}

@media (max-width: 860px) {
  .app-body {
    grid-template-columns: 1fr;
  }
  .app-dial {
    position: static;
  }
}
</style>
