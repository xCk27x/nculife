<template>
  <div class="w-52 h-60 flex justify-end items-center flex-col">
    <div class="origami w-36 h-36 grid grid-cols-2 grid-rows-2 gap-1">
      <div v-for="num in boy3" :key="num" class="piece flex justify-center items-center">
        <p>{{ num }}</p>
      </div>
    </div>
    <div class="mt-10 text-center">男三</div>
  </div>
</template>

<script setup lang="ts">
const boy3 = [1, 2, 3, 4]
</script>

<style scoped lang="scss">
.origami {
  rotate: 45deg;

  & div {
    background-color: dimgray;

    & p {
      rotate: -45deg;
    }
  }
}
</style>
