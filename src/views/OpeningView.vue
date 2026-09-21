<template>
  <section>
    <div class="opening-header">
      <div class="avatar-placeholder" aria-hidden="true">
        <span>Photo</span>
      </div>
      <div class="opening-intro">
        <h2>Hi, I'm [Your Name].</h2>
        <p class="trait">
          Top leadership trait: <strong>Confidence</strong>
        </p>
      </div>
    </div>

    <p>
      Add a short line here about who you are and what you're studying or working
      toward — this is the first thing a visitor sees, so keep it brief.
    </p>

    <p class="trait-note">
      <!-- TODO: replace with your own self-assessment result from Vantage (Ch 2)
           if it points somewhere else. Confidence is used here because it comes
           up directly in your notes — projecting it as a lifeguard instructor
           is part of what makes you effective at helping students improve. -->
      Confidence shows up for me most clearly as a lifeguard instructor — projecting
      it helps my students feel confident too, which is a big part of what makes
      me effective at teaching them.
    </p>
  </section>
</template>

<style scoped>
.opening-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
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
