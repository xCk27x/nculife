<template>
  <nav class="fixed flex justify-between w-full px-5 py-3 gap-4 bg-[url('/nav/bg.jpg')] bg-cover bg-center shadow-md">
    <NuxtLink to="/">
      <div class="h-10 flex justify-start items-center"><img class="max-h-full w-auto" src="/nav/text.png" alt=""></div>
    </NuxtLink>
    <div class="flex gap-6 md:gap-9 lg:gap-12">
      <div class="laptop gap-4">
        <NuxtLink to="/nculife">
          <Icon name="ph:person-fill" class="h-10 hover:scale-125 transition-all" size="2.2rem"
            color="rgb(225, 104, 23)" />
        </NuxtLink>
        <NuxtLink class="no-underline" to="https://www.youtube.com/@ncufresh">
          <Icon name="ph:youtube-logo-fill" class="h-10 hover:scale-125 transition-all" size="2.2rem"
            color="rgb(225, 104, 23)" />
        </NuxtLink>
      </div>
      <ul class="hamburger">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </nav>
  <slot></slot>
</template>

<style lang="scss" scoped>
ul.hamburger {
  list-style: none;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  & li {
    position: relative;
    height: 0.6rem;
    width: 3rem;
    background-color: peru;
    border-radius: 20% / 90%;
    transition: 0.3s;
  }

  &:hover {
    & li:nth-child(1) {
      transform: rotate(45deg) translate(0.85rem, 0.5rem);
    }

    & li:nth-child(3) {
      transform: rotate(-45deg) translate(0.85rem, -0.5rem);
    }

    & li:nth-child(2) {
      transform: rotate(-45deg) translate(0.18rem, 0.175rem);
    }
  }
}

.phone {
  display: flex;
}

.laptop {
  display: none;
}

@media (min-width: 440px) {
  .laptop {
    display: flex;
  }

  .phone {
    display: none;
  }
}
</style>
