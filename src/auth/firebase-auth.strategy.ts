import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as admin from 'firebase-admin';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  async validate(token: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      if (decodedToken) {
        return decodedToken;
      }
      throw new UnauthorizedException('No user found for this Firebase token');
    } catch (error) {
      throw new UnauthorizedException('Invalid Firebase token');
    }
  }
}
