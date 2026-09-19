<template>
  <div class="app-shell">
    <header class="app-header">
      <h1 class="app-title">Your Name</h1>
      <p class="app-tagline">Turn the dial to explore.</p>
    </header>

    <div class="app-body">
      <RotaryDial class="app-dial" />

      <main class="app-content">
        <router-view v-slot="{ Component, route }">
          <transition name="spin-page" mode="out-in">
            <component :is="Component" :key="route.path" class="view-page" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import RotaryDial from './components/RotaryDial.vue'
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
}

.app-title {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vmin, 2.5rem);
  letter-spacing: 0.03em;
  margin: 0;
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
}

.app-dial {
  position: sticky;
  top: 2rem;
}

.app-content {
  min-height: 50vh;
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
