export default defineNuxtRouteMiddleware((to, from) => {
  const navdropstore = useNavdropStore();

  navdropstore.closeNavdrop();

  console.log('trigger navdrop middleware')
})
