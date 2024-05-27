import { defineStore } from 'pinia'

export const useNavdropStore = defineStore('navdrop', () => {
  const navdrop = ref(false);

  function changeNavdrop() {
    navdrop.value = !navdrop.value;
  }

  function closeNavdrop() {
    navdrop.value = false;
  }

  return { 
    navdrop,
    changeNavdrop,
    closeNavdrop
  }
})