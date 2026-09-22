<template>
  <section>
    <div class="opening-header">
      <img
        :src="profilePhoto"
        alt="Max Hilton"
        class="avatar"
      />
      <div class="opening-intro">
        <h2>Max Hilton</h2>
        <p class="trait">
          Top leadership trait: <strong>Conscientious</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import profilePhoto from '../assets/maxfhilton52gmail.com-1-4.jpg'
</script>

<style scoped>
.opening-header {
  display: flex;
  align-items: center;
  gap: 1.75rem;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.avatar-placeholder {
  flex-shrink: 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #873648, #461622 80%);
  box-shadow:
    inset 0 0 14px rgba(0, 0, 0, 0.4),
    0 0 0 3px var(--dusk-blue);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder span {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--bright-snow);
}

.avatar {
  flex-shrink: 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  box-shadow:
    0 0 0 3px var(--dusk-blue),
    0 8px 24px rgba(0, 0, 0, 0.15);
}

.opening-intro h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  color: var(--wine-plum);
  margin: 0 0 0.5rem;
  line-height: 1.1;
  letter-spacing: 0.02em;
}
</style>
