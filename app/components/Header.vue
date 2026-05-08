<script setup lang="ts">
const { isNotAtTop } = useScrollbar();
</script>

<template>
  <div
    class="fixed top-0 w-full bg-background"
    :class="{ 'border-b border-border': isNotAtTop }"
  >
    <header class="container mx-auto flex justify-between p-4">
      <Button href="#o-mne" variant="ghost" class="text-sm">FV.</Button>
      <Nav />
    </header>
  </div>
</template>
