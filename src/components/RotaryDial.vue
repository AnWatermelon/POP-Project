<template>
  <div class="rotary">
    <div class="rotary__frame">
      <div class="rotary__face" :style="{ transform: `rotate(${rotation}deg)` }">
        <button
          v-for="(entry, i) in entries"
          :key="entry.id"
          type="button"
          class="rotary__hole"
          :class="{ 'rotary__hole--active': i === activeIndex }"
          :style="holeStyle(i)"
          :aria-current="i === activeIndex ? 'page' : undefined"
          @click="select(i)"
        >
          <span class="rotary__digit" :style="{ transform: `rotate(${-rotation}deg)` }">
            {{ i + 1 }}
          </span>
          <span class="rotary__label" :style="{ transform: `rotate(${-rotation}deg)` }">
            {{ entry.label }}
          </span>
        </button>
      </div>

      <div class="rotary__stop" aria-hidden="true"></div>

      <div class="rotary__hub">
        <span class="rotary__hub-label">{{ activeEntry?.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { entries } from '../config/entries'

const route = useRoute()
const router = useRouter()

// The angle between neighbouring buttons - purely a function of how many
// entries exist, so it recalculates automatically as entries are added
// or removed. Nothing else in this file references the count "6".
const step = 360 / entries.length

const activeIndex = computed(() => {
  const i = entries.findIndex((e) => e.id === route.name)
  return i === -1 ? 0 : i
})

const activeEntry = computed(() => entries[activeIndex.value])

// Rotating the whole face by -activeIndex * step always brings the active
// button to the top (-90deg, where the finger stop sits), regardless of
// how many entries there are or which one is currently selected.
const rotation = computed(() => -activeIndex.value * step)

// Base position of button i, before the face's own rotation is applied.
// Evenly spaced around the circle, starting at the top.
function holeStyle(i) {
  const angle = -90 + i * step
  const rad = (angle * Math.PI) / 180
  const radius = 38 // percent of the dial's diameter
  const x = 50 + radius * Math.cos(rad)
  const y = 50 + radius * Math.sin(rad)
  return { left: `${x}%`, top: `${y}%` }
}

function select(i) {
  const entry = entries[i]
  if (entry.id !== route.name) router.push(entry.path)
}
</script>

<style scoped>
.rotary {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.rotary__frame {
  position: relative;
  width: min(70vmin, 480px);
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #3a2c22, #17110c 70%);
  box-shadow:
    0 0 0 6px #0d0906,
    0 20px 40px rgba(0, 0, 0, 0.5),
    inset 0 0 30px rgba(0, 0, 0, 0.6);
}

.rotary__face {
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #f5ecd8, #e4d5b0 75%);
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.35);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.rotary__hole {
  position: absolute;
  width: 17%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  background: radial-gradient(circle at 40% 35%, #2a1e16, #120c08 80%);
  color: var(--color-cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
}

.rotary__hole:hover {
  background: radial-gradient(circle at 40% 35%, #3a291d, #1a120c 80%);
}

.rotary__hole:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
}

.rotary__hole--active {
  box-shadow:
    inset 0 0 6px rgba(0, 0, 0, 0.6),
    0 0 0 3px var(--color-accent);
}

.rotary__digit {
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 2.4vmin, 1.4rem);
  line-height: 1;
}

.rotary__label {
  font-family: var(--font-body);
  font-size: clamp(0.5rem, 1.1vmin, 0.7rem);
  letter-spacing: 0.02em;
  opacity: 0.85;
}

.rotary__stop {
  position: absolute;
  top: 4%;
  left: 50%;
  width: 6%;
  height: 10%;
  background: #0d0906;
  border-radius: 3px;
  transform: translateX(-50%);
}

.rotary__hub {
  position: absolute;
  inset: 38%;
  border-radius: 50%;
  background: #17110c;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 0 4px #0d0906,
    inset 0 0 10px rgba(0, 0, 0, 0.6);
  pointer-events: none;
}

.rotary__hub-label {
  font-family: var(--font-display);
  color: var(--color-accent);
  font-size: clamp(0.75rem, 1.8vmin, 1.1rem);
  text-align: center;
  padding: 0 10%;
}

@media (prefers-reduced-motion: reduce) {
  .rotary__face {
    transition: none;
  }
}
</style>
