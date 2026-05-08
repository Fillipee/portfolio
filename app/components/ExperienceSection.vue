<script setup lang="ts">
interface TimelineItem {
	title: string;
	subTitle?: string;
	from: string;
	to?: string;
}

const educationItems: TimelineItem[] = [
	{
		title: 'Univerzita Palackého v Olomouci',
		subTitle: 'Bc. Informatika',
		from: '2021',
		to: '2024',
	},
	{
		title: 'Univerzita Palackého v Olomouci',
		subTitle: 'Mgr. Aplikovaná informatika - specializace Vývoj software',
		from: '2024',
	},
];

const workItems: TimelineItem[] = [
	{
		title: 'OLC Webdesign s.r.o. ',
		subTitle: 'PHP vývojář',
		from: '2023',
	},
];
</script>

<template>
	<section id="zkusenosti">
		<div class="pb-16">
			<BaseHeading
				level="h2"
				variant="h4"
				class="pb-4 border-b border-border"
			>
				Vzdělání
			</BaseHeading>
			<TimelineItem
				v-for="(education, index) in educationItems"
				:key="index"
				:title="education.title"
				:sub-title="education.subTitle"
				:from="education.from"
				:to="education.to"
			/>
		</div>
		<div class="pb-32">
			<BaseHeading
				level="h2"
				variant="h4"
				class="pb-4 border-b border-border"
			>
				Zkušenosti
			</BaseHeading>
			<TimelineItem
				v-for="(work, index) in workItems"
				:key="index"
				:title="work.title"
				:sub-title="work.subTitle"
				:from="work.from"
				:to="work.to"
			/>
		</div>
	</section>
</template>
