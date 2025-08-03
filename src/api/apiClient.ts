import axios from 'axios';
import { ok, err } from 'neverthrow';

export type ApiResponse<TSuccess> = TSuccess & {
  success: true;
};

export type ApiError<TErrorCode extends string> = {
  success: false;
  errorCode: TErrorCode;
  errorMessage: string;
};

const apiClient = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function apiPost<TSuccess, TErrorCode extends string>(endpoint: string, body: unknown) {
  try {
    const response = await apiClient.post(endpoint, body);
    const data = response.data;

    if (data.success) {
      return ok(data as ApiResponse<TSuccess>);
    } else {
      return err(data as ApiError<TErrorCode>);
    }
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.data) {
      return err(e.response.data as ApiError<TErrorCode>);
    }
    return err({
      success: false,
      errorCode: 'internal_error',
      errorMessage: e instanceof Error ? e.message : 'Unknown frontend error',
    });
  }
}
