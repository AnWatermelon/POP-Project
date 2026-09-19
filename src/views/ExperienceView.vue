<template>
  <section>
    <h2>Experience</h2>
    <ol class="timeline">
      <li v-for="job in jobs" :key="job.role">
        <h3>{{ job.role }} — {{ job.place }}</h3>
        <p class="timeline-date">{{ job.dates }}</p>
        <p>{{ job.summary }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup>
const jobs = [
  {
    role: 'Role',
    place: 'Company',
    dates: '2024 — Present',
    summary: 'What you did there. Replace with your real experience.',
  },
]
</script>

<style scoped>
.timeline {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}
.timeline h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1rem;
}
.timeline-date {
  margin: 0.15rem 0 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}
</style>
