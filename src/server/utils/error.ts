import { H3Event } from 'h3'

type ErrorCode = 'SERVER_ERROR' | 'LOGIN_FAILED'

const statuses: Record<ErrorCode, number> = {
  LOGIN_FAILED: 401,
  SERVER_ERROR: 500,
}

export function handleError (e: H3Event, code: ErrorCode) {
  const status = statuses[code ?? 'SERVER_ERROR'] ?? 500

  setResponseStatus(e, status)
  setResponseHeader(e, 'Content-Type', 'application/json')
  return {
    code,
  }
}
