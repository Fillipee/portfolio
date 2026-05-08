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
</script>

<template>
	<section
		id="o-mne"
		class="pb-32"
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
				<BaseHeading
					level="h3"
					variant="h4"
					class="mb-4 text-muted leading-relaxed"
				>
					Technologie
				</BaseHeading>
				<div class="grid grid-cols-2 gap-4">
					<div
						v-for="(skill, index) in skills"
						:key="index"
					>
						<BaseHeading level="h4">
							{{ skill.category }}
						</BaseHeading>
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
