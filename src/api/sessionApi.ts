import { apiPost } from './apiClient';

// Error codes returned by the session API
export type SessionApiErrorCode =
  | 'invalid_credentials'
  | 'already_logged_in'
  | 'requires_login'
  | 'unknown_method'
  | 'internal_error';

export interface UserSession {
  username: string;
}

export async function login(username: string, password: string) {
  const data = {
    method: 'login',
    username,
    password,
  };
  return apiPost<void, SessionApiErrorCode>('api/user/session.php', data);
}

export async function logout() {
  const data = {
    method: 'logout',
  };
  return apiPost<void, SessionApiErrorCode>('api/user/session.php', data);
}

export async function getSession() {
  const data = {
    method: 'getSession',
  };
  return apiPost<UserSession, SessionApiErrorCode>('api/user/session.php', data);
}
