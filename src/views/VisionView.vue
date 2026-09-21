<template>
  <section>
    <h2>Career Vision Statement</h2>
    <p class="vision-statement">
      "[Your one-sentence career vision statement goes here.]"
    </p>

    <h3>Values that should shape it</h3>
    <ul class="values-list">
      <li>
        Motivated most by work with a tangible, positive impact on my life —
        especially things that make me more independent.
      </li>
      <li>
        Believe people in general are motivated by a higher purpose, or by
        feeling part of something greater than themselves.
      </li>
      <li>
        Demotivated by work that feels insurmountable, or that's just long hours
        of grinding without a clear end.
      </li>
    </ul>
  </section>
</template>

<style scoped>
.vision-statement {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-accent);
  max-width: 55ch;
}
.values-list {
  padding-left: 1.2rem;
  display: grid;
  gap: 0.5rem;
  max-width: 60ch;
}
.values-list li {
  line-height: 1.6;
}
</style>
