<script setup lang="ts">
interface Props {
  title: string;
  subTitle?: string;
  from: string;
  to?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="not-last:border-b not-last:border-border py-8 flex justify-between"
  >
    <hgroup>
      <h3 class="tracking-tight uppercase font-black text-2xl">
        {{ props.title }}
      </h3>
      <p v-if="props.subTitle" class="text-muted text-sm font-mono">
        {{ props.subTitle }}
      </p>
    </hgroup>
    <span class="font-mono text-sm text-muted">
      <time :datetime="props.from">
        {{ props.from }}
      </time>
      -
      <time v-if="props.to" :datetime="props.to">
        {{ props.to }}
      </time>
      <span v-else>dosud</span>
    </span>
  </div>
</template>
