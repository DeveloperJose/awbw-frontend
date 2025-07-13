import axios from 'axios'

const api = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type ApiSuccess<T> = {
  success: true
} & T

export type ApiError<E> = {
  success: false
  error: E
}

export type ApiResult<T, E> = ApiSuccess<T> | ApiError<E>

/**
 * Makes a POST request and returns a discriminated union.
 * Never throws — all errors are encoded in the return value.
 */
export async function apiPost<T, E = string>(
  endpoint: string,
  payload: object,
): Promise<ApiResult<T, E>> {
  try {
    const response = await api.post<ApiResult<T, E>>(endpoint, payload)
    response.data['success'] = true
    return response.data
  } catch (err) {
    return {
      success: false,
      error: parseError<E>(err),
    }
  }
}

/**
 * Attempts to convert an Axios error into the expected error shape
 */
function parseError<E>(error: unknown): E {
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      error.response.data['success'] = false
      return error.response.data as E
    }
    return { success: false, message: 'No response received from server' } as unknown as E
  }

  return { success: false, message: 'Unknown error occurred' } as unknown as E
}
