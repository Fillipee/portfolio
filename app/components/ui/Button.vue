<script setup lang="ts">
import { computed, resolveComponent } from "vue";

interface Props {
  class?: string;
  href?: string;
  variant?: "ghost" | "outline";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "outline",
});

const componentTag = computed(() =>
  props.href ? resolveComponent("NuxtLink") : "button",
);

const buttonClasses = computed(() => {
  const baseClasses = "px-4 py-2 tracking-widest font-mono transition";

  const variantClasses = {
    outline: "border border-primary hover:bg-primary hover:text-white",
    ghost: "text-muted hover:text-primary",
  };

  return [baseClasses, variantClasses[props.variant], props.class];
});
</script>

<template>
  <component :is="componentTag" :to="props.href" :class="buttonClasses">
    <slot />
  </component>
</template>
