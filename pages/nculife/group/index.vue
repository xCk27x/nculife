<template>
  <div class=" w-screen h-screen pt-16 flex justify-center items-center">
    <div class="px-14 h-full w-clamp-10rem-60vw-20rem flex items-center">
      <div class="h-4/5 w-full grid grid-rows-3">
        <div class="px-6 py-2 grid grid-cols-4">
          <div class="h-full flex items-end">
            <NuxtLink class="bg-[RGB(217,217,217)] h-2/3 w-full flex justify-center items-center hover:scale-110 origin-bottom" to="/nculife/group/studentclub">學生會</NuxtLink>
          </div>
          <NuxtLink class="col-start-3 bg-[RGB(217,217,217)] flex justify-center items-center hover:scale-110 origin-bottom" to="/nculife/group/academic">學務處</NuxtLink>

        </div>
        <div class="bg-[RGB(217,217,217)] row-start-2 row-end-4 w-full p-[5%] gap-[12%] grid grid-rows-2">
          <NuxtLink class="flex h-full w-full bg-white p-2 transition-all hover:bg-slate-700  hover:text-white" to="/nculife/group/club">
            <div class="w-2/3 flex gap-3">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto md:rotate-90 md:origin-bottom-right" src="/nculife/group/Rectangle 70.png" alt="">
            </div>
            <div class="w-1/3 flex justify-center items-center">
              <p>社團</p>
            </div>
          </NuxtLink>
          <NuxtLink class="relative h-full w-full bg-white p-2 flex flex-row-reverse gap-3 transition-all hover:bg-slate-700  hover:text-white" to="/nculife/group/community">
            <div class="w-2/3 flex gap-3 flex-row-reverse">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
              <img class="max-h-full w-auto" src="/nculife/group/Rectangle 70.png" alt="">
            </div>
            <div class="w-1/3 flex justify-center items-center">
              <p>社群</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.w-clamp-10rem-60vw-20rem {
  width: clamp(5rem, 70vw, 120vh);
}

.box {
  &-bottom {
    border: 10px solid rgb(148 163 184);
  }
}
</style>