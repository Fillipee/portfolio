<script lang="ts">
    export let menuSection: number = 1;
    export let menuSectionValue: number = 1;
    export let moveToSection: Function;
    export let name: string = "Link";
    export let height: number = 400;
</script>

<li class="py-2">
    <button
        class="{menuSection === menuSectionValue
            ? 'text-white font-bold hover:text-main-yellow'
            : ' hover:text-white'} duration-200"
        on:click={() => moveToSection(height * menuSectionValue)}
    >
        {name}
    </button>
</li>
