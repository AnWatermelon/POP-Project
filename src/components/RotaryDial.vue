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
          <span class="rotary__digit">
            {{ i + 1 }}
          </span>
          <span class="rotary__label">
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
// Counter-rotates by -rotation so the button and its contents (number on top,
// title on bottom) stay upright as the dial rotates.
function holeStyle(i) {
  const angle = -90 + i * step
  const rad = (angle * Math.PI) / 180
  const radius = 38 // percent of the dial's diameter
  const x = 50 + radius * Math.cos(rad)
  const y = 50 + radius * Math.sin(rad)
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) rotate(${-rotation.value}deg)`,
  }
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
  background: radial-gradient(circle at 35% 30%, #873648, var(--wine-plum) 45%, #461622 80%);
  box-shadow:
    0 0 0 6px #3b111b,
    0 20px 40px rgba(58, 86, 131, 0.22),
    0 10px 24px rgba(107, 39, 55, 0.25),
    inset 0 0 25px rgba(35, 9, 16, 0.7);
}

.rotary__face {
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #ffffff, var(--bright-snow) 60%, #eee8df 85%);
  box-shadow:
    inset 0 0 15px rgba(58, 86, 131, 0.15),
    inset 0 2px 4px rgba(255, 255, 255, 0.85);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.rotary__hole {
  position: absolute;
  width: 17%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: none;
  background: radial-gradient(circle at 40% 35%, #3515b5, #1c0576 80%);
  color: var(--bright-snow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  cursor: pointer;
  box-shadow:
    inset 0 0 7px rgba(10, 2, 45, 0.8),
    0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.rotary__hole:hover {
  background: radial-gradient(circle at 40% 35%, #441ecc, var(--navy-electric) 80%);
}

.rotary__hole:focus-visible {
  outline: 3px solid var(--seagrass);
  outline-offset: 3px;
}

.rotary__hole--active {
  box-shadow:
    inset 0 0 6px rgba(10, 2, 45, 0.8),
    0 0 0 3.5px var(--seagrass);
}

.rotary__digit {
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 2.4vmin, 1.4rem);
  line-height: 1;
  color: var(--bright-snow);
}

.rotary__label {
  font-family: var(--font-body);
  font-size: clamp(0.5rem, 1.1vmin, 0.7rem);
  letter-spacing: 0.02em;
  color: var(--bright-snow);
  opacity: 0.95;
}

.rotary__stop {
  position: absolute;
  top: 4%;
  left: 50%;
  width: 6%;
  height: 10%;
  background: #3b111b;
  border-radius: 3px;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.rotary__hub {
  position: absolute;
  inset: 38%;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #4e1826, #2d0b14 85%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 0 4px #3b111b,
    inset 0 0 12px rgba(20, 4, 8, 0.7);
  pointer-events: none;
}

.rotary__hub-label {
  font-family: var(--font-display);
  color: var(--seagrass);
  font-size: clamp(0.75rem, 1.8vmin, 1.1rem);
  text-align: center;
  padding: 0 10%;
  font-weight: 600;
  letter-spacing: 0.02em;
}

@media (prefers-reduced-motion: reduce) {
  .rotary__face,
  .rotary__hole {
    transition: none;
  }
}
</style>
