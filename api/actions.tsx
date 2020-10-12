import { apiClient } from './api';
import { IError } from '../components/ShowErrors';

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  id: number;
  isadmin: boolean;
  password: string;
}

export const signIn = async (
  values: ISignIn
): Promise<ISignInResponse | IError[]> => {
  const response = await apiClient.post<ISignInResponse>(
    '/users/sign-in',
    values
  );

  return response.data;
};
