<template>
  <section>
    <h2>Conclusion</h2>

    <blockquote class="quote">
      "A leader is one who knows the way, goes the way, and shows the way."
      <footer>— John C. Maxwell</footer>
    </blockquote>

    <div class="connection-section">
      <div class="section-header">
        <span class="card-tag">Synthesis</span>
        <h3>Connection to Personal Leadership</h3>
      </div>

      <div class="connection-grid">
        <div class="connection-card">
          <span class="step-num">01</span>
          <div class="card-body">
            <h4>"Knows the Way"</h4>
            <p><strong>Strategic & Conceptual:</strong> Grounded in thorough analytical preparation, understanding root causes, and mastering the necessary technical skills.</p>
          </div>
        </div>

        <div class="connection-card">
          <span class="step-num">02</span>
          <div class="card-body">
            <h4>"Goes the Way"</h4>
            <p><strong>Conscientious & Disciplined:</strong> Leading by example, maintaining personal accountability, and embodying the standards expected of the team.</p>
          </div>
        </div>

        <div class="connection-card">
          <span class="step-num">03</span>
          <div class="card-body">
            <h4>"Shows the Way"</h4>
            <p><strong>Task & Mentorship:</strong> Guiding others through clear expectations, directive coaching, and dedicated support to elevate individual capability.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote {
  margin: 0 0 1.5rem;
  padding: 0.85rem 1.25rem;
  border-left: 3px solid var(--wine-plum);
  background: rgba(107, 39, 55, 0.04);
  border-radius: 0 8px 8px 0;
  font-family: var(--font-display);
  font-size: 1.1rem;
  line-height: 1.55;
  color: var(--wine-plum);
}

.quote footer {
  margin-top: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
}

.connection-section {
  display: grid;
  gap: 0.75rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.card-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(58, 86, 131, 0.1);
  color: var(--dusk-blue);
  font-weight: 600;
}

.section-header h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--color-accent);
}

.connection-grid {
  display: grid;
  gap: 0.65rem;
}

.connection-card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(58, 86, 131, 0.05);
  border: 1px solid rgba(58, 86, 131, 0.1);
}

.step-num {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--dusk-blue);
  line-height: 1.2;
}

.card-body h4 {
  margin: 0 0 0.2rem;
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--wine-plum);
}

.card-body p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: var(--color-text);
}

.card-body strong {
  color: var(--color-accent);
}
</style>
