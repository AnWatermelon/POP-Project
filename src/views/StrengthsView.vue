<template>
  <section>
    <h2>Personal Strengths</h2>
    <div class="strengths-grid">
      <div v-for="strength in strengths" :key="strength.name" class="strength-card">
        <div class="card-header">
          <h3>{{ strength.name }}</h3>
          <span class="card-tag">{{ strength.tag }}</span>
        </div>
        <ul class="bullet-list">
          <li v-for="(point, idx) in strength.points" :key="idx">
            <strong>{{ point.label }}:</strong> {{ point.text }}
          </li>
        </ul>
      </div>
      <blockquote class="quote">
        "He finished a side project we had setup for him in a few days and then contributed to the Dynos like a normal software engineer.  He was delivering at the Assoc Software engineer or even Software engineer level for nearly his entire internship."
      <footer>— Former Manager (Internship)</footer>
      </blockquote>
    </div>
  </section>
</template>

<script setup>
const strengths = [
  {
    name: 'Confidence',
    tag: 'Lifeguard Instructor & Manager',
    points: [
      {
        label: 'Composure Under Pressure',
        text: 'Projecting calm assurance so team members and students feel grounded during stressful situations.',
      },
      {
        label: 'Empowering Learners',
        text: 'Helping students overcome self-doubt and build self-efficacy to master challenging skills.',
      }
    ],
  },
  {
    name: 'Thinker',
    tag: 'Reflective Inquiry',
    points: [
      {
        label: 'Root-Cause Mindset',
        text: 'Constantly analyzing the underlying "why" behind everything.',
      },
      {
        label: 'Critical Reflection',
        text: 'Evaluating assumptions and alternatives before finalizing decisions.',
      },
    ],
  },
  {
    name: 'Strategist',
    tag: 'Planning & Execution',
    points: [
      {
        label: 'Deliberate Preparation',
        text: 'Thoroughly planning sequences, contingencies, and resource needs before taking action.',
      },
      {
        label: 'Outcome Alignment',
        text: 'Connecting immediate procedural steps with overarching long-term objectives.',
      },
    ],
  },
]
</script>

<style scoped>
.strengths-grid {
  display: grid;
  gap: 1rem;
}

.strength-card {
  padding: 0.95rem 1.2rem;
  border-radius: 8px;
  background: rgba(58, 86, 131, 0.05);
  border: 1px solid rgba(58, 86, 131, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.card-tag {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background: rgba(107, 39, 55, 0.1);
  color: var(--wine-plum);
  font-weight: 600;
}

.strength-card h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--wine-plum);
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.45rem;
}

.bullet-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.45;
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
</style>
