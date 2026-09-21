<template>
  <section>
    <h2>Personal Strengths</h2>
    <ul class="strength-list">
      <li v-for="strength in strengths" :key="strength.name" :class="{ 'is-placeholder': strength.placeholder }">
        <h3>{{ strength.name }}</h3>
        <p>{{ strength.description }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const strengths = [
  {
    name: 'Confidence',
    description:
      "I've personally seen the benefit of projecting confidence as a lifeguard instructor. I'm considered one of the best instructors at my job — not because I'm the most skillful or the best at explaining things, but because projecting confidence helps my students feel confident too, which helps them become the best they can be.",
  },
  {
    name: '[Add a second strength]',
    description:
      'A free assessment like High5 or VIA can help surface this one — swap in the result along with a sentence on how it shows up for you.',
    placeholder: true,
  },
  {
    name: '[Add a third strength]',
    description: 'Same as above — at least three strengths are required for this section.',
    placeholder: true,
  },
]
</script>

<style scoped>
.strength-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}
.strength-list h3 {
  margin: 0 0 0.35rem;
  font-family: var(--font-display);
  font-size: 1rem;
  color: var(--color-accent);
}
.strength-list p {
  margin: 0;
  max-width: 60ch;
  line-height: 1.6;
}
.is-placeholder h3,
.is-placeholder p {
  color: var(--color-text-muted);
  font-style: italic;
}
</style>
