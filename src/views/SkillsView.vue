<template>
  <section>
    <h2>Skills</h2>
    <ul class="skill-tags">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script setup>
const skills = ['Vue', 'JavaScript', 'CSS', 'Node.js', 'Git', 'Add your own']
</script>

<style scoped>
.skill-tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.skill-tags li {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(201, 162, 39, 0.15);
  color: var(--color-accent);
  font-size: 0.9rem;
}
</style>
