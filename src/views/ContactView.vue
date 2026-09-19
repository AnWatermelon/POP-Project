<template>
  <section>
    <h2>Contact</h2>
    <p>The best ways to reach me:</p>
    <ul class="contact-list">
      <li><a href="mailto:you@example.com">you@example.com</a></li>
      <li>
        <a href="https://github.com/yourhandle" target="_blank" rel="noopener">GitHub</a>
      </li>
      <li>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener">LinkedIn</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.contact-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}
.contact-list a {
  text-decoration: none;
}
.contact-list a:hover {
  text-decoration: underline;
}
</style>
