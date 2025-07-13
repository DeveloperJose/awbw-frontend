import axios from 'axios'

const api = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export type ApiSuccess<T> = T & {
  success: true
}

export type ApiError<ErrorCodeType extends string = string> = {
  success: false
  errorCode: ErrorCodeType
  errorMessage: string
}

export type ApiResult<T, E extends string = string> = ApiSuccess<T> | ApiError<E>

export async function apiPost<T = void, E extends string = string>(
  endpoint: string,
  method: string,
  payload: object = {},
) {
  try {
    const response = await api.post<ApiResult<T, E>>(endpoint, { method: method, ...payload })
    return response.data
  } catch (err) {
    return parseError<E>(err)
  }
}

function parseError<E extends string>(error: unknown) {
  if (axios.isAxiosError(error)) {
    if (error.response?.data) {
      return error.response.data as ApiError<E>
    }
    return {
      success: false,
      errorCode: 'internal_error' as E,
      errorMessage: 'No response received from server',
    }
  }

  return {
    success: false,
    errorCode: 'internal_error' as E,
    errorMessage: 'Unknown error while trying to call an API with axios',
  }
}
