<script setup lang="ts">
const { isNotAtTop } = useScrollbar();
</script>

<template>
	<div
		class="fixed top-0 w-full bg-background z-10"
		:class="{ 'border-b border-border': isNotAtTop }"
	>
		<header class="container mx-auto flex justify-between p-4">
			<BaseButton
				href="#"
				variant="ghost"
				class="text-sm"
			>
				FV.
			</BaseButton>
			<MainNav />
		</header>
	</div>
</template>
