<script setup lang="ts">
import { slugify } from '~/utils/slugify';

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

const getTimelineItemKey = (item: TimelineItem) => {
	return slugify(`${item.title}-${item.subTitle ?? ''}-${item.from}-${item.to ?? ''}`);
};
</script>

<template>
	<section id="zkusenosti">
		<div class="pb-8 md:pb-16">
			<BaseHeading
				level="h2"
				variant="h4"
				class="pb-4 border-b border-border"
			>
				Vzdělání
			</BaseHeading>
			<TimelineItem
				v-for="education in educationItems"
				:key="getTimelineItemKey(education)"
				:title="education.title"
				:sub-title="education.subTitle"
				:from="education.from"
				:to="education.to"
			/>
		</div>
		<div class="pb-8 md:pb-16">
			<BaseHeading
				level="h2"
				variant="h4"
				class="pb-4 border-b border-border"
			>
				Zkušenosti
			</BaseHeading>
			<TimelineItem
				v-for="work in workItems"
				:key="getTimelineItemKey(work)"
				:title="work.title"
				:sub-title="work.subTitle"
				:from="work.from"
				:to="work.to"
			/>
		</div>
	</section>
</template>
