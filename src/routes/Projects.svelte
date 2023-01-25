<script>
    import Container from "./Container.svelte";
</script>

<Container header={"Projekty"}>
    <ul>
        <li class="my-10">
            <div class="flex flex-col items-center justify-between w-full">
                <a
                    class="text-4xl py-4 hover:text-red-400 transition-colors duration-200"
                    href="https://www.vtentoden.cz"
                    target="_blank"
                    rel="noreferrer">V tento den</a
                >
            </div>
        </li>
    </ul>
</Container>
