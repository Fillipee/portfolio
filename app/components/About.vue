<script setup lang="ts">
interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Vue"],
  },
  {
    category: "Backend",
    items: ["PHP", "Symfony", "NestJS"],
  },
  {
    category: "Full-stack",
    items: ["Next.js"],
  },
];
</script>

<template>
  <section id="o-mne" class="pb-32">
    <h2
      class="font-mono text-xs tracking-widest uppercase border-b border-border pb-4 mb-8"
    >
      O mně
    </h2>
    <div class="grid md:grid-cols-2 gap-16">
      <div>
        <p class="text-xl md:text-2xl font-light leading-relaxed pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          tellus eget dolor convallis imperdiet.
        </p>
        <p class="leading-relaxed text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
          tellus eget dolor convallis imperdiet.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed ultrices tellus eget dolor convallis
          imperdiet.
        </p>
      </div>
      <div>
        <h3
          class="font-mono text-xs text-muted tracking-widest uppercase mb-4 mt-2 leading-relaxed"
        >
          Technologie
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(skill, index) in skills" :key="index">
            <h4 class="font-mono text-xs tracking-widest uppercase">
              {{ skill.category }}
            </h4>
            <ul class="mt-4 flex flex-col gap-2">
              <li
                v-for="(item, itemIndex) in skill.items"
                :key="`${index}-${itemIndex}`"
                class="font-mono text-sm text-muted"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
