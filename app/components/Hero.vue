<template>
  <section class="min-h-screen flex flex-col justify-end pb-32">
    <div class="relative flex-1 flex items-end">
      <Dots />
      <Heading level="h1" class="pb-16 pr-6 bg-background">
        Filip<br />Vepřík
      </Heading>
    </div>
    <hr class="text-border mb-16" />
    <div class="grid md:grid-cols-3">
      <p class="text-muted text-lg col-span-2 lg:col-span-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices
        tellus eget dolor convallis imperdiet. Curabitur quis dui vitae libero
        egestas varius.
      </p>
      <div
        class="lg:col-span-2 flex mt-4 md:mt-0 md:justify-end items-center gap-4"
      >
        <Button href="#o-mne">O mně</Button>
        <Button href="#o-mne" variant="ghost">Kontakt</Button>
      </div>
    </div>
  </section>
</template>
