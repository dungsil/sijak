import { readValidatedBody } from '#imports'
import { z } from 'zod'
import { handleError } from '~/server/utils/error'
import { findUserByUsername } from '~/server/utils/user/user.service'

const authorizeSpec = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
})

export default defineEventHandler(async (e) => {
  const spec = await readValidatedBody(e, authorizeSpec.parse)

  // 사용자 조회
  const user = await findUserByUsername(spec.username)
  if (user === undefined) {
    return handleError(e, 'LOGIN_FAILED')
  }
})
