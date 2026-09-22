<template>
  <section>
    <h2>Leadership Orientation</h2>
    <div class="badge-row">
      <span class="orientation-badge">Task-Oriented Focus</span>
      <span class="pill-badge">Execution & Mastery</span>
    </div>

    <div class="orientation-grid">
      <div class="orientation-card">
        <div class="card-header">
          <span class="card-tag">Approach</span>
          <h3>Core Orientation Principles</h3>
        </div>
        <ul class="bullet-list">
          <li>
            <strong>Competency & Standards:</strong>
            Focused on measurable progress, technical precision, and ensuring zero compromise on safety protocols.
          </li>
          <li>
            <strong>Active Barrier Removal:</strong>
            Identifying where processes or individuals stall and intervening directly to resolve roadblocks.
          </li>
          <li>
            <strong>Accountability Through Support:</strong>
            Setting high performance expectations while providing the necessary tools and coaching to meet them.
          </li>
        </ul>
      </div>

      <div class="orientation-card">
        <div class="card-header">
          <span class="card-tag">Evidence</span>
          <h3>Case in Point: Targeted Intervention</h3>
        </div>
        <ul class="bullet-list">
          <li>
            <strong>Challenge:</strong>
            A student with excellent theoretical marks was struggling with a specific physical skill and falling behind the class.
          </li>
          <li>
            <strong>Directive Action:</strong>
            Coordinated with co-instructor to advance the cohort while providing dedicated, intensive 1-on-1 coaching.
          </li>
          <li>
            <strong>Outcome:</strong>
            The student mastered the technique, caught up to peers, and passed certification with flying colors.
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

.orientation-badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(58, 86, 131, 0.12);
  border: 1px solid rgba(58, 86, 131, 0.25);
  color: var(--dusk-blue);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
}

.pill-badge {
  display: inline-block;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  background: rgba(107, 39, 55, 0.08);
  border: 1px solid rgba(107, 39, 55, 0.2);
  color: var(--wine-plum);
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 600;
}

.orientation-grid {
  display: grid;
  gap: 1rem;
}

.orientation-card {
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

.orientation-card h3 {
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
