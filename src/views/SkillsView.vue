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
    category: 'Conceptual',
    items: [
      {
        name: 'Fast Learning',
        context: 'General',
        description: 'Able to pick up new material and situations quickly.',
      },
      {
        name: 'Attention to Detail',
        context: 'Internship',
        description: 'Thorough, and committed to seeing work done right. At my internship I worked on an extremely intricate codebase that required hours of research to make a change.',
      },
    ],
  },
  {
    category: 'Administrative',
    items: [
      {
        name: 'Managing People',
        context: 'Lifeguarding',
        description: 'Practical management experience from managing 10+ lifeguards at a time.',
      },
    ],
  },
  {
    category: 'Interpersonal',
    items: [
      {
        name: 'Mentoring',
        context: 'Teaching',
        description: 'I have taught over 150 students over the course of my teaching career.',
      },
      {
        name: 'Perspective Taking',
        context: 'General',
        description: "It is easy for me to see things from other's perspectives and play devil's advocate.",
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
