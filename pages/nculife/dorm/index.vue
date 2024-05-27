<template>
  <div class="h-screen w-screen pt-16 flex justify-center items-center">
    <div class="shield fixed top-0 bottom-0 left-0 right-0 bg-[RGBA(0,0,0,0.4)] z-40" :class="{ hidden: !shieldOpen }"
      @click="changeShield()" />
    <div class="shield fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-item  z-50"
      :class="{ hidden: !shieldOpen }">
      <NculifeDormOrigami class="cursor-pointer" :dorm-data="tempDorm" />
    </div>
    <div class="phone w-full h-full flex justify-center ">
      <div class="scroll-constainer w-full flex flex-col items-center gap-12 pt-12 pb-4 overflow-y-auto">
        <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '男九' }" @click="changeShield(); changeDorm(0)" />
        <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '男十三' }"
          @click="changeShield(); changeDorm(1)" />
        <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '女一' }" @click="changeShield(); changeDorm(2)" />
        <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '女四' }" @click="changeShield(); changeDorm(3)" />
      </div>
    </div>
    <div class="laptop h-full w-full px-16 lg:px-24 xl:px-36">
      <div class="grid grid-cols-6 grid-rows-5 w-1/2">
        <div class="col-start-1 col-end-5 row-start-3 row-end-6 flex justify-center items-center">
          <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '男九' }"
            @click="changeShield(); changeDorm(0)" />
        </div>
        <div class="col-start-3 col-end-7 row-start-1 row-end-4 flex justify-center items-center">
          <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '男十三' }"
            @click="changeShield(); changeDorm(1)" />
        </div>
      </div>
      <div class="grid grid-cols-6 grid-rows-5 w-1/2">
        <div class="col-start-3 col-end-7 row-start-1 row-end-4 flex justify-center items-center">
          <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '女一' }"
            @click="changeShield(); changeDorm(2)" />
        </div>
        <div class="col-start-1 col-end-5 row-start-3 row-end-6 flex justify-center items-center">
          <NculifeDormOrigami class="cursor-pointer" :dorm-data="{ name: '女四' }"
            @click="changeShield(); changeDorm(3)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dormData = [
  {
    name: '男九',
    text: ['衛浴', '簡易廚房', '交誼廳', '自習室'],
    url: ['/dorm/boy9/1', '/dorm/boy9/2', '/dorm/boy9/3', '/dorm/boy9/4']
  },
  {
    name: '男十三',
    text: ['衛浴', '簡易廚房', '交誼廳', '自習室'],
    url: ['/dorm/boy13/1', '/dorm/boy13/2', '/dorm/boy13/3', '/dorm/boy13/4']
  },
  {
    name: '女一',
    text: ['衛浴', '簡易廚房', '交誼廳', '自習室'],
    url: ['/dorm/girl1/1', '/dorm/girl1/2', '/dorm/girl1/3', '/dorm/girl1/4']
  },
  {
    name: '女四',
    text: ['衛浴', '簡易廚房', '交誼廳', '自習室'],
    url: ['/dorm/girl4/1', '/dorm/girl4/2', '/dorm/girl4/3', '/dorm/girl4/4']
  }
]

const shieldOpen = ref(false);
const tempDorm = ref(dormData[0]);

function changeShield() {
  shieldOpen.value = !shieldOpen.value;
}

function changeDorm(index: number) {
  tempDorm.value = dormData[index];
}

onMounted(() => {
  shieldOpen.value = false;
})

</script>

<style scoped lang="scss">
.scroll-constainer::-webkit-scrollbar {
  display: none;
}

.drop-item {
  animation: drop 1s ease-in-out;
}

@keyframes drop {
  0% {
    top: -30%;
    transform: translateY(-50%) translateX(-50%);
  }

  100% {
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}

.phone {
  display: flex;
}

.laptop {
  display: none;
}

@media (min-width: 640px) {
  .phone {
    display: none;
  }

  .laptop {
    display: flex;
  }
}
</style>