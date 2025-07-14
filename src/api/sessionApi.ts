import { apiPost } from './apiClient'

// Error codes returned by the session API
export type SessionApiErrorCode =
  | 'invalid_credentials'
  | 'already_logged_in'
  | 'requires_login'
  | 'unknown_method'
  | 'internal_error'

export interface UserSession {
  username: string
}

export async function login(username: string, password: string) {
  const data = {
    username,
    password,
  }
  return apiPost<void, SessionApiErrorCode>('api/user/session.php', 'login', data)
}

export async function getSession() {
  return apiPost<UserSession, SessionApiErrorCode>('api/user/session.php', 'getSession')
}
