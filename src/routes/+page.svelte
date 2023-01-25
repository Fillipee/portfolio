<script lang="ts">
	import Contact from './Contact.svelte';
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import Technologies from './Technologies.svelte';
	import Menu from './Menu.svelte';
	import MainHeader from './MainHeader.svelte';
</script>

<svelte:head>
	<title>Filip Vepřík</title>
</svelte:head>

<Menu />
<MainHeader />
<Education />
<Technologies />
<Projects />
<Contact />
