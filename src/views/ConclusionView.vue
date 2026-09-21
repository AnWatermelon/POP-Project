<template>
  <section>
    <h2>Conclusion</h2>
    <blockquote class="quote">
      "[Add a quote that inspires you here.]"
      <footer>— [Attribution]</footer>
    </blockquote>
    <p class="quote-note">
      <!-- TODO: the quote doesn't have to be about leadership specifically — if
           it isn't, add a sentence here on how you connect it to leadership. -->
      Add a sentence here on why this quote resonates with you, and how it
      connects to how you lead.
    </p>
  </section>
</template>

<style scoped>
.quote {
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  border-left: 3px solid var(--color-accent);
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-accent);
  max-width: 55ch;
}
.quote footer {
  margin-top: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
</style>
