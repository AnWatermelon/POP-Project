<template>
  <section>
    <h2>Projects</h2>
    <ul class="project-list">
      <li v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project One',
    description: 'A short description of what it does and what you built it with.',
  },
  {
    title: 'Project Two',
    description: 'Another short description — swap these for your real projects.',
  },
  {
    title: 'Project Three',
    description: 'Add as many as you like; this is just a placeholder list.',
  },
]
</script>

<style scoped>
.project-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}
.project-list li {
  padding: 1rem;
  border-radius: 8px;
  background: rgba(245, 236, 216, 0.04);
}
.project-list h3 {
  margin: 0 0 0.25rem;
  font-family: var(--font-display);
  font-size: 1rem;
}
</style>
