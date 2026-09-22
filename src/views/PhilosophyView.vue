<template>
  <section>
    <h2>Leadership Philosophy</h2>
    <div class="badge-row">
      <span class="pill-badge">Blended Style</span>
      <span class="pill-badge">Theory X</span>
    </div>

    <div class="philosophy-grid">
      <div class="philosophy-card">
        <div class="card-header">
          <span class="card-tag">Foundation</span>
          <h3>Democratic Leadership</h3>
        </div>
        <ul class="bullet-list">
          <li>
            <strong>Approachability & Trust:</strong>
            Ensuring team members feel supported, valued, and comfortable asking questions or seeking guidance.
          </li>
          <li>
            <strong>Balanced Interests:</strong>
            Harmonizing individual needs and personal growth with the collective success of the group.
          </li>
          <li>
            <strong>Empowerment:</strong>
            Encouraging collaboration and mutual respect across day-to-day interactions.
          </li>
        </ul>
      </div>

      <div class="philosophy-card">
        <div class="card-header">
          <span class="card-tag">Execution</span>
          <h3>Directive & Theory X Balance</h3>
        </div>
        <ul class="bullet-list">
          <li>
            <strong>Firm Authority & Standards:</strong>
            Maintaining clear expectations and discipline when safety, compliance, or deadlines are non-negotiable.
          </li>
          <li>
            <strong>Theory X Context:</strong>
            Working with high schoolers and novice trainees demands both a structured, deterministic approach and the flexibility to work with a group's particular needs.
          </li>
          <li>
            <strong>Decisive Direction:</strong>
            Stepping in with firm, explicit guidance to keep teams aligned and prevent critical errors.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.pill-badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(58, 86, 131, 0.1);
  border: 1px solid rgba(58, 86, 131, 0.22);
  color: var(--dusk-blue);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.philosophy-grid {
  display: grid;
  gap: 1rem;
}

.philosophy-card {
  padding: 1rem 1.25rem;
  border-radius: 8px;
  background: rgba(58, 86, 131, 0.05);
  border: 1px solid rgba(58, 86, 131, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.card-tag {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(107, 39, 55, 0.1);
  color: var(--wine-plum);
  font-weight: 600;
}

.philosophy-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.05rem;
  color: var(--wine-plum);
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
}

.bullet-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--color-text);
}

.bullet-list li::before {
  content: '•';
  position: absolute;
  left: 0.3rem;
  top: 0;
  color: var(--dusk-blue);
  font-size: 1.1rem;
  line-height: 1.4;
}

.bullet-list strong {
  color: var(--color-accent);
}
</style>
