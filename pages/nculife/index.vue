<template>
  <div class="flex flex-wrap justify-center items-center w-sreen h-screen pt-16 px-8">
    <div class="w-full md:w-1/2 xl:w-1/4 flex justify-center" v-for="item in items" :key="item.label">
      <NuxtLink class="flex flex-col w-1/2 items-center"  :to="item.url">
        <img class="w-auto max-h-44" :src="item.image" :alt="item.label">
        <span>{{ item.label }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

const items = [
  {
    name: 'department',
    label: '系所',
    url: '/nculife/department',
    image: '/nculife/department.png'
  },
  {
    name: 'transport',
    label: '交通',
    url: '/nculife/transport',
    image: '/nculife/transport.png'
  },
  {
    name: 'group',
    label: '社團',
    url: '/nculife/group',
    image: '/nculife/group.png'
  },
  { 
    name: 'dorm',
    label: '宿舍',
    url: '/nculife/dorm',
    image: '/nculife/dorm.png'
  }
]
</script>