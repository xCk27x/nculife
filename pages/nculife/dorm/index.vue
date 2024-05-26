<template>
  <div class="h-screen w-screen pt-16 flex justify-center items-center">
    <div class="phone w-full h-full flex justify-center ">
      <div class="scroll-constainer flex flex-col items-center gap-12 pt-12 pb-4 overflow-y-auto">
        <NculifeDormOrigami/>
        <NculifeDormOrigami/>
        <NculifeDormOrigami/>
        <NculifeDormOrigami/>
      </div>
    </div>
    <div class="laptop h-full w-full px-16 lg:px-24 xl:px-36">
      <div class="grid grid-cols-6 grid-rows-5 w-1/2">
        <div class="col-start-1 col-end-5 row-start-3 row-end-6 flex justify-center items-center">
          <NculifeDormOrigami/>
        </div>
        <div class="col-start-3 col-end-7 row-start-1 row-end-4 flex justify-center items-center">
          <NculifeDormOrigami/>
        </div>
      </div>
      <div class="grid grid-cols-6 grid-rows-5 w-1/2">
        <div class="col-start-1 col-end-5 row-start-3 row-end-6 flex justify-center items-center">
          <NculifeDormOrigami/>
        </div>
        <div class="col-start-3 col-end-7 row-start-1 row-end-4 flex justify-center items-center">
          <NculifeDormOrigami/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.scroll-constainer::-webkit-scrollbar {
    display: none;
}

.phone {
  display: flex;
}
.laptop {
  display: none;
}

@media (min-width: 640px){
  .phone {
    display: none;
  }
  .laptop {
    display: flex;
  }
}
</style>