import { apiPost, type ApiResult } from './apiClient'

// Error codes returned by the session API
export type SessionApiErrorCode =
  | 'invalid_credentials'
  | 'already_logged_in'
  | 'requires_login'
  | 'unknown_method'
  | 'internal_error'

// Generic "no data" success payload
export type NoData = Record<string, never>

// Error shape for session API
export type SessionApiError = {
  errorCode: SessionApiErrorCode
  errorMessage: string
}

// Payload returned on successful session check
export interface UserSession {
  username: string
}

// API calls using new system
export async function login(
  username: string,
  password: string,
): Promise<ApiResult<NoData, SessionApiError>> {
  return apiPost<NoData, SessionApiError>('api/user/session.php', {
    method: 'login',
    username,
    password,
  })
}

export async function getSession(): Promise<ApiResult<UserSession, SessionApiError>> {
  return apiPost<UserSession, SessionApiError>('api/user/session.php', {
    method: 'getSession',
  })
}
