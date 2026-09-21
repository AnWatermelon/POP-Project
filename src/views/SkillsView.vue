<template>
  <section>
    <h2>Personal Skills</h2>
    <div v-for="group in skillGroups" :key="group.category" class="skill-group">
      <h3>{{ group.category }}</h3>
      <ul class="skill-list">
        <li v-for="skill in group.items" :key="skill.name">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-context">{{ skill.context }}</span>
          <p>{{ skill.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const skillGroups = [
  {
    category: 'Administrative',
    items: [
      {
        name: 'Scheduling',
        context: 'Bent Tree',
        description: 'Balancing the individual preferences and needs of many employees into a larger whole.',
      },
      {
        name: 'Attention to Detail',
        context: 'All',
        description: 'Thorough, and committed to seeing work done right.',
      },
    ],
  },
  {
    category: 'Interpersonal',
    items: [
      {
        name: 'Leadership',
        context: 'Oak Point',
        description: 'Practical leadership experience, gained on the job.',
      },
      {
        name: 'Mentoring',
        context: 'Oak Point',
        description: 'Able to empathize with and understand the people I work with.',
      },
    ],
  },
  {
    category: 'Conceptual',
    items: [
      {
        name: 'Problem-Solving',
        context: 'All',
        description: 'Ability to work through problems as they come up.',
      },
      {
        name: 'Fast Learning',
        context: 'All',
        description: 'Able to pick up new material and situations quickly.',
      },
    ],
  },
]
</script>

<style scoped>
.skill-group {
  margin-bottom: 1.5rem;
}
.skill-group:last-child {
  margin-bottom: 0;
}
.skill-group h3 {
  font-family: var(--font-display);
  color: var(--wine-plum);
  font-size: 0.95rem;
  margin: 0 0 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.skill-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}
.skill-list li {
  padding: 0.85rem 1rem;
  border-radius: 8px;
  background: rgba(58, 86, 131, 0.05);
  border: 1px solid rgba(58, 86, 131, 0.1);
}
.skill-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
}
.skill-context {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  margin-left: 0.5rem;
}
.skill-list p {
  margin: 0.3rem 0 0;
}
</style>
