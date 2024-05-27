<template>
  <div class="h-screen w-screen pt-16">
    <div class="flex justify-around items-center h-full p-10">
      <div class="page relative flex justify-center items-center">
        <div class="absolute h-full">
          <img class="max-h-full w-auto" src="/nculife/department/drink_machine.png" alt="">
        </div>
        <div class="absolute h-full w-4/5">
          <div class="w-auto h-full grid grid-rows-4 pt-[13%] pb-[33%]">
            <div class="box flex justify-between items-center mx-auto" v-for="(books, i) in leftBooks" :key="i">
              <div class="box-element" v-for="(book, j) in books" :key="j">
                <p>{{ book }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page relative flex justify-center items-center">
        <div class="absolute h-full">
          <img class="max-h-full w-auto" src="/nculife/department/drink_machine.png" alt="">
        </div>
        <div class="absolute h-full w-4/5">
          <div class="w-auto h-full grid grid-rows-4 pt-[13%] pb-[33%]">
            <div class="box flex justify-between items-center mx-auto" v-for="(books, i) in rightBooks" :key="i">
              <div class="box-element" v-for="(book, j) in books" :key="j">
                <p>{{ book }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const leftBooks: number[][] = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const rightBooks: number[][] = [
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40],
];
</script>

<style lang="scss" scoped>
.page {
  height: clamp(10vh, 41vw, 70vh);
  width: 43%;
  max-width: 70vh;
  border-radius: 3px;
}

.box {
  width: 68%;

  &-element {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(203 213 225);
    height: 80%;
    width: 15%;
  }
}
</style>