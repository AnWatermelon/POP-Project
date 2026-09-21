<template>
  <section>
    <div class="opening-header">
      <div class="avatar-placeholder" aria-hidden="true">
        <span>Photo</span>
      </div>
      <div class="opening-intro">
        <h2>Max Hilton</h2>
        <p class="trait">
          Top leadership trait: <strong>Conscientious</strong>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.opening-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.avatar-placeholder {
  flex-shrink: 0;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #3a2c22, #17110c 80%);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.6), 0 0 0 3px rgba(201, 162, 39, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder span {
  font-family: var(--font-display);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

/* Swap the placeholder above for a real headshot, e.g.:
   <img src="../assets/headshot.jpg" alt="[Your Name]" class="avatar" />
   with .avatar { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; } */

.opening-intro h2 {
  margin-bottom: 0.35rem;
}

.trait {
  margin: 0;
  color: var(--color-text-muted);
}

.trait strong {
  color: var(--color-accent);
}

.trait-note {
  max-width: 60ch;
}
</style>
