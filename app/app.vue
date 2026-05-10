<script setup lang="ts">
const config = useRuntimeConfig();

const title = 'Filip Vepřík.';
const description = 'Moderní weby s čistým designem a špičkovým výkonem.';

useSeoMeta({
	title: title,
	ogTitle: title,
	description: description,
	ogDescription: description,
	ogImage: `${config.public.siteUrl}/og-image.png`,
});
</script>

<template>
	<NuxtLayout>
		<HeroSection />
		<AboutSection />
		<ExperienceSection />
		<ContactSection />
	</NuxtLayout>
</template>
