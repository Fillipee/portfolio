<script setup lang="ts">
interface TimelineItem {
  title: string;
  subTitle?: string;
  from: string;
  to?: string;
}

const educationItems: TimelineItem[] = [
  {
    title: "Univerzita Palackého v Olomouci",
    subTitle: "Bc. Informatika",
    from: "2021",
    to: "2024",
  },
  {
    title: "Univerzita Palackého v Olomouci",
    subTitle: "Mgr. Aplikovaná informatika - specializace Vývoj software",
    from: "2024",
  },
];

const workItems: TimelineItem[] = [
  {
    title: "OLC Webdesign s.r.o. ",
    subTitle: "PHP vývojář",
    from: "2023",
  },
];
</script>

<template>
  <section id="zkusenosti">
    <div class="pb-16">
      <Heading level="h2" variant="h4" class="pb-4 border-b border-border">
        Vzdělání
      </Heading>
      <TimelineItem
        v-for="(education, index) in educationItems"
        :key="index"
        :title="education.title"
        :subTitle="education.subTitle"
        :from="education.from"
        :to="education.to"
      />
    </div>
    <div class="pb-32">
      <Heading level="h2" variant="h4" class="pb-4 border-b border-border"
        >Zkušenosti</Heading
      >
      <TimelineItem
        v-for="(work, index) in workItems"
        :key="index"
        :title="work.title"
        :subTitle="work.subTitle"
        :from="work.from"
        :to="work.to"
      />
    </div>
  </section>
</template>
