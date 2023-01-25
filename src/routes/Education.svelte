<script>
    import Container from "./Container.svelte";
</script>

<Container header={"Vzdělání"}>
    <ul>
        <li class="my-10">
            <div class="flex flex-row items-center justify-between w-full">
                <p class="w-[30%] text-xl">2017 - 2021</p>
                <div class="w-[70%] flex flex-col ml-6">
                    <p class="text-xl">VOŠ a SPŠ Šumperk</p>
                    <p class="text-2xl font-bold">Informační Technologie</p>
                </div>
            </div>
        </li>
        <li class="my-6">
            <div class="flex flex-row items-center justify-between w-full">
                <p class="w-[30%] text-xl">2021 - nyní</p>
                <div class="w-[70%] flex flex-col ml-6">
                    <p class="text-xl">Univerzita Palackého v Olomouci</p>
                    <p class="text-2xl font-bold">Informatika</p>
                </div>
            </div>
        </li>
    </ul>
</Container>
