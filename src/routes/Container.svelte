<script>
    export let header = "Header";
</script>

<section class="h-screen  flex items-center justify-center flex-col">
    <div class="w-[85vw] sm:w-[544px] mx-6">
        <h1 class="text-center text-5xl font-bold tracking-wider">
            {header}
        </h1>
        <slot />
    </div>
</section>
