<template>
  <div class="h-screen w-screen pt-16">
    <div class="relative flex justify-around items-center h-full p-10 ">
      <div class="page flex justify-center items-center">
        <div class="w-4/5 h-5/6 grid grid-rows-4 gap-4">
          <div class="box flex justify-around items-center" v-for="(books, i) in leftBooks" :key="i">
            <div class="box-element" v-for="(book, j) in books" :key="j">
              <p>{{ book }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="page flex justify-center items-center">
        <div class="w-4/5 h-5/6 grid grid-rows-4 gap-4">
          <div class="box flex justify-around items-center" v-for="(books, i) in rightBooks" :key="i">
            <div class="box-element" v-for="(book, j) in books" :key="j">
              <p>{{ book }}</p>
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
  [21, 22, 23, 24],
  [25, 26, 27, 28],
  [29, 30, 31, 32],
  [33, 34, 35, 36],
];
</script>

<style lang="scss" scoped>
.page {
  height: clamp(10vh, 43vw, 70vh);
  width: 45%;
  max-width: 70vh;
  background-color: rgb(203 213 225);
  border-radius: 3px;
}

.box {
  background-color: white;

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