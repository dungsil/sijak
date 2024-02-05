// 이 설정 파일은 공개적으로 노출되니 보안 상 필요한 설정은 `runtimeConfig`를 사용하여 설정하세요.
import type { RouteLocationRaw } from 'vue-router'

export default defineAppConfig({
  auth: {
    storageKey: 'x-auth',

    // 경로
    // 이 내부 값은 인증 상태의 영향을 받지 않음 (즉, 비로그인 상태에서 접근 가능)
    // middleware/00.auth.global.ts 참고
    paths: {
      loginPage: '/login',
    } as Record<string, RouteLocationRaw>,
  },
})
