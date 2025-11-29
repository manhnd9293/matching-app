import httpClient from '@/config/http-client/http-client';
import { LoginDto } from '@/interfaces/auth/login.dto';

export interface LoginResponse {
  atk: string;
  rtk: string
}

export class AuthService  {
  static login(data: LoginDto): Promise<LoginResponse> {
    return httpClient.post('/auth/login', data)
  }

  static me()  {
    console.log(`get me info`)
    return httpClient.get('/auth/me');
  }
}
