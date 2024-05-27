<template>
  <div class="w-52 h-60 flex justify-end items-center flex-col">
    <div v-if="!props.dormData?.url" class="origami w-36 h-36 grid grid-cols-2 grid-rows-2 gap-1">
      <div v-for="(text, i) in ['', '', '', '']" :key="i" class="piece flex justify-center items-center">
        <p>{{ text }}</p>
      </div>
    </div>
    <div v-if="props.dormData?.url" class="origami w-36 h-36 grid grid-cols-2 grid-rows-2 gap-1">
      <NuxtLink v-for="(text, i) in props.dormData?.text ?? ['', '', '', '']" :key="i" :to="props.dormData.url[i]" class="piece flex justify-center items-center">
        <p>{{ text }}</p>
      </NuxtLink>
    </div>
    <div class="mt-10 text-center">{{ props.dormData?.name ?? '男三' }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  dormData?: {
    name: string;
    text?: string[];
    url?: string[];
  };
}>();

</script>

<style scoped lang="scss">
.origami {
  rotate: 60deg;

  & .piece {
    background-color: dimgray;

    & p {
      rotate: -60deg;
    }
  }
}
</style>
