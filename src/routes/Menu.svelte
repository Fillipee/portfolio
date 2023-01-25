<script lang="ts">
    import MenuItem from "./MenuItem.svelte";

    let y: number = 0;
    let height: number = 1;
    $: menuSection =
        y > height * 0.3 ? Math.ceil(y / (height + height * 0.15)) : 0;

    function moveToSection(section: number) {
        window.scrollTo({
            top: section,
            left: 0,
            behavior: "smooth",
        });
    }
</script>

<div class="hidden fixed right-0 top-0 h-screen md:flex items-center">
    <ul
        class="flex flex-col items-center mx-4 text-gray-600 text-xl tracking-wide"
    >
        <MenuItem
            {menuSection}
            menuSectionValue={1}
            {moveToSection}
            name={"Vzdělání"}
            height={height}
        />
        <MenuItem
            {menuSection}
            menuSectionValue={2}
            {moveToSection}
            name={"Technologie"}
            height={height}
        />
        <MenuItem
            {menuSection}
            menuSectionValue={3}
            {moveToSection}
            name={"Projekty"}
            height={height}
        />
        <MenuItem
            {menuSection}
            menuSectionValue={4}
            {moveToSection}
            name={"Kontakt"}
            height={height}
        />
    </ul>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight={height} />
