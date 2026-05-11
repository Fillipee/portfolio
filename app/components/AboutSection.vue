<script setup lang="ts">
interface SkillCategory {
	category: string;
	items: string[];
}

const skills: SkillCategory[] = [
	{
		category: 'Frontend',
		items: ['React', 'Vue'],
	},
	{
		category: 'Backend',
		items: ['PHP', 'Symfony', 'NestJS'],
	},
	{
		category: 'Full-stack',
		items: ['Next.js'],
	},
];

const getSkillKey = (skill: SkillCategory) => {
	return slugify(`${skill.category}`);
};

const getSkillItemKey = (skill: SkillCategory, item: string) => {
	return slugify(`${skill.category}-${item}`);
};
</script>

<template>
	<section
		id="o-mne"
		class="pb-16 md:pb-32"
	>
		<BaseHeading
			level="h2"
			variant="h4"
			class="pb-4 mb-8 border-b border-border"
		>
			O mně
		</BaseHeading>
		<div class="grid md:grid-cols-2 gap-16">
			<div>
				<p class="text-xl md:text-2xl font-light leading-relaxed pb-8">
					Mým cílem není jen funkčnost. Tvořím čistá a udržitelná řešení.
				</p>
				<p class="leading-relaxed text-muted">
					Zakládám si na čisté architektuře. Nejde mi jen o to napsat funkční kód, ale najít elegantní a udržitelné řešení. Výsledek totiž musí dávat smysl nejen mně v kódu, ale hlavně lidem, kteří web nakonec používají.
				</p>
			</div>
			<div>
				<BaseHeading
					level="h3"
					variant="h4"
					class="mb-4 text-muted leading-relaxed"
				>
					Technologie
				</BaseHeading>
				<div class="grid grid-cols-2 gap-4">
					<div
						v-for="skill in skills"
						:key="getSkillKey(skill)"
					>
						<BaseHeading level="h4">
							{{ skill.category }}
						</BaseHeading>
						<ul class="mt-4 flex flex-col gap-2">
							<li
								v-for="item in skill.items"
								:key="getSkillItemKey(skill, item)"
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
