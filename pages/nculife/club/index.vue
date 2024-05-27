<template>
  <div class=" w-screen h-screen pt-16 flex justify-center items-center">
    <div class="px-14 h-full w-clamp-10rem-60vw-20rem flex items-center">
      <div class="h-4/5 w-full grid grid-rows-3">
        <div class="px-6 py-2 grid grid-cols-4">
          <div class="h-full flex items-end">
            <div class="bg-[RGB(217,217,217)] h-2/3 w-full flex justify-center items-center">學生會</div>
          </div>
          <div class="col-start-3 bg-[RGB(217,217,217)] flex justify-center items-center">學務處</div>

        </div>
        <div class="bg-[RGB(217,217,217)] row-start-2 row-end-4 w-full p-[5%] gap-[12%] grid grid-rows-2">
          <div class="h-full w-full bg-white p-2 flex ">
            <div class="w-2/3 flex gap-3">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto md:rotate-90 md:origin-bottom-right" src="/nculife/club/Rectangle 70.png" alt="">
            </div>
            <div class="w-1/3 flex justify-center items-center">
              <p>社團</p>
            </div>
          </div>
          <div class="h-full w-full bg-white p-2 flex flex-row-reverse gap-3">
            <div class="w-2/3 flex gap-3 flex-row-reverse">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/club/Rectangle 70.png" alt="">
            </div>
            <div class="w-1/3 flex justify-center items-center">
              <p>社群</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.w-clamp-10rem-60vw-20rem {
  width: clamp(5rem, 70vw, 70rem);
}

.box {
  &-bottom {
    border: 10px solid rgb(148 163 184);
  }
}
</style>