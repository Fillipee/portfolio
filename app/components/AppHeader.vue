<script setup lang="ts">
const { isNotAtTop } = useScrollbar();
</script>

<template>
	<div
		class="fixed top-0 w-full bg-background z-10"
		:class="{ 'border-b border-border': isNotAtTop }"
	>
		<header class="container mx-auto flex justify-between items-center p-4">
			<BaseButton
				href="#"
				variant="ghost"
				class="text-sm font-black px-0"
			>
				FV.
			</BaseButton>
			<MainNav />
		</header>
	</div>
</template>
