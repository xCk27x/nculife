<template>
  <div class="h-screen w-screen pt-16">
    <div class="relative flex justify-center items-center h-full p-10">
      <Icon class="arrow arrow-left left-4" name="ic:baseline-arrow-circle-right" size="40"/>
      <Icon class="arrow arrow-right right-4" name="ic:baseline-arrow-circle-right" size="40"/>
      <div class="page page-left flex justify-center items-center">
        <div class="w-4/5 h-5/6 flex flex-col gap-4">
          <div class="relative flex justify-center h-1/2 w-full">
            <Icon class="arrow arrow-left left-0" name="material-symbols:arrow-forward-ios-rounded" size="20"/>
            <Icon class="arrow arrow-right right-0" name="material-symbols:arrow-forward-ios-rounded" size="20"/>
            <img
class="bg-center bg-cover w-4/5 h-auto p-1 bg-white rounded-sm"
              src="https://img95.699pic.com/photo/50389/5994.jpg_wh860.jpg" alt="">
          </div>
          <div class="w-full h-1/2 bg-white"/>
        </div>
      </div>
      <div class="page page-right"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  height: clamp(10vh, 43vw, 70vh);
  width: 45%;
  max-width: 70vh;
  background-color: rgb(203 213 225);

  &-left {
    border-right: 1px solid rgb(148 163 184);
    border-radius: 3px 0 0 3px;
  }

  &-right {
    border-left: 1px solid rgb(148 163 184);
    border-radius: 0 3px 3px 0;
  }
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(148 163 184);
  transition: 0.2s;

  &-left {
    transform: translateY(-50%) rotate(180deg);

    &:hover {
      color: rgb(94, 104, 118);
      transform: translateY(-50%) rotate(180deg) scale(1.1);

    }
  }

  &-right {

    &:hover {
      color: rgb(94, 104, 118);
      transform: translateY(-50%) scale(1.1);
    }
  }
}
</style>