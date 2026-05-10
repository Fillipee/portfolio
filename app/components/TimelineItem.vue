<script setup lang="ts">
interface Props {
	title: string;
	subTitle?: string;
	from: string;
	to?: string;
}

const props = defineProps<Props>();
</script>

<template>
	<div
		class="flex flex-col-reverse md:flex-row justify-between py-8 md:py-16 not-last:border-b not-last:border-border"
	>
		<hgroup>
			<BaseHeading
				level="h3"
				variant="h3"
				class="pb-2"
			>
				{{ props.title }}
			</BaseHeading>
			<p
				v-if="props.subTitle"
				class="text-muted text-sm font-mono"
			>
				{{ props.subTitle }}
			</p>
		</hgroup>
		<span class="font-mono text-sm text-muted">
			<time :datetime="props.from">
				{{ props.from }}
			</time>
			-
			<time
				v-if="props.to"
				:datetime="props.to"
			>
				{{ props.to }}
			</time>
			<span v-else>dosud</span>
		</span>
	</div>
</template>
