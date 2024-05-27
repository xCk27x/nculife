<template>
  <div class=" w-screen h-screen pt-16 flex justify-center items-center">
    <div class="px-14 h-full w-clamp-10rem-60vw-20rem flex items-center">
      <div class="h-3/5 w-full bg-slate-300 p-[5%]">
        <ul class="book-container h-full">
          <li><NuxtLink to="/nculife/group/intro/dance">熱舞社</NuxtLink></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


.w-clamp-10rem-60vw-20rem {
  width: clamp(5rem, 80vw, 140vh);
}

ul.book-container {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 2%;

  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 100%;
    background-color: rgb(203 213 225);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 2rem;
  }
}
</style>