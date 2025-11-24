import httpClient from '@/config/http-client/http-client';
import { LoginDto } from '@/interfaces/auth/login.dto';

export class AuthService {
  static login(data: LoginDto) {
    return httpClient.post('/auth/login', data)
  }

  static me() {
    console.log(`get me info`)
    return httpClient.get('/auth/me');
  }
}
