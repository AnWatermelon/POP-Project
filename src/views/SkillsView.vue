<template>
  <section>
    <h2>Personal Skills</h2>
    <div class="skills-container">
      <div v-for="group in skillGroups" :key="group.category" class="skill-group">
        <h3>{{ group.category }}</h3>
        <ul class="skill-list">
          <li v-for="skill in group.items" :key="skill.name" class="skill-item">
            <div class="skill-icon-box">
              <img :src="skill.image" :alt="skill.name" class="skill-icon" />
            </div>
            <div class="skill-info">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-context">{{ skill.context }}</span>
              </div>
              <p>{{ skill.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import fastLearningImg from '../assets/fast-learning.png'
import attentionToDetailImg from '../assets/attention-to-detail.png'
import managingPeopleImg from '../assets/managing-people.jpg'
import operationalCoordinationImg from '../assets/operational-coordination.jpg'
import mentoringImg from '../assets/mentoring.png'
import perspectiveTakingImg from '../assets/perspective-taking.png'

const skillGroups = [
  {
    category: 'Conceptual',
    items: [
      {
        name: 'Fast Learning',
        context: 'Internship',
        description: 'Rapidly absorbing new technical frameworks, concepts, and dynamic environments. Wrote code that made it to production websites within two weeks of starting past two internships.',
        image: fastLearningImg,
      },
      {
        name: 'Attention to Detail',
        context: 'Internship',
        description: 'Dedicated to precision and code quality; worked on codebase that requires hours of research to make even simple changes',
        image: attentionToDetailImg,
      },
    ],
  },
  {
    category: 'Administrative',
    items: [
      {
        name: 'Managing People',
        context: 'Lifeguarding',
        description: 'Direct managerial experience supervising and coordinating active shifts of 10+ lifeguards.',
        image: managingPeopleImg,
      },
      {
        name: 'Operational Coordination',
        context: 'Lifeguarding',
        description: 'Scheduling rotations, managing surveillance zones, and maintaining emergency protocol readiness.',
        image: operationalCoordinationImg,
      },
    ],
  },
  {
    category: 'Interpersonal',
    items: [
      {
        name: 'Mentoring',
        context: 'Teaching',
        description: 'Guided and instructed over 150 students through individualized and group coaching to achieve Red Cross certification.',
        image: mentoringImg,
      },
      {
        name: 'Perspective Taking',
        context: 'General',
        description: 'Empathetic listening and evaluating multiple viewpoints to build consensus and address team concerns.',
        image: perspectiveTakingImg,
      },
    ],
  },
]
</script>

<style scoped>
.skills-container {
  display: grid;
  gap: 1.25rem;
}

.skill-group h3 {
  font-family: var(--font-display);
  color: var(--wine-plum);
  font-size: 0.95rem;
  margin: 0 0 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.65rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(58, 86, 131, 0.05);
  border: 1px solid rgba(58, 86, 131, 0.1);
}

.skill-icon-box {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid rgba(58, 86, 131, 0.12);
  box-shadow: 0 1px 3px rgba(58, 86, 131, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}

.skill-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.skill-info {
  flex: 1;
  min-width: 0;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.skill-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-accent);
}

.skill-context {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: rgba(58, 86, 131, 0.1);
  color: var(--dusk-blue);
  font-weight: 500;
}

.skill-info p {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  line-height: 1.45;
  color: var(--color-text);
}
</style>
