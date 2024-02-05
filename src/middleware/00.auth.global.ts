export default defineNuxtRouteMiddleware((to, from) => {
  const config = useAppConfig()

  // 공개용 경로인지 확인
  // ex. 로그인 페이지
  if (Object.values(config.auth.paths).includes(to.path)) {
    return
  }

  // 로그인 체크
  const auth = useAuthStore()
  if (auth.isLoggedIn()) {
    return
  }

  // 미 로그인 시 로그인 페이지로 이동
  return navigateTo(config.auth.paths.loginPage, { replace: true })
})
