<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
	class?: string;
	text: string;
};

const props = defineProps<Props>();

const displayedText = ref('');
const isTyping = ref(true);

onMounted(() => {
	let i = 0;
	const speed = 20;

	const typingInterval = setInterval(() => {
		if (i < props.text.length) {
			displayedText.value += props.text.charAt(i);
			i++;
		}
		else {
			clearInterval(typingInterval);
			isTyping.value = false;
		}
	}, speed);
});
</script>

<template>
	<div :class="['grid', props.class]">
		<span class="sr-only">{{ props.text }}</span>

		<span
			class="col-start-1 row-start-1 invisible"
			aria-hidden="true"
		>
			{{ props.text }}
		</span>

		<span
			class="col-start-1 row-start-1"
			aria-hidden="true"
		>
			{{ displayedText }}
			<span
				v-if="isTyping"
				class="inline-block w-[1px] h-6 bg-primary ml-1 align-middle animate-pulse"
			/>
		</span>
	</div>
</template>
