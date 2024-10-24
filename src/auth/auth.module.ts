import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseAuthGuard } from './firebase-auth.guard';
import { FirebaseAuthStrategy } from './firebase-auth.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'firebase-auth' })],
  providers: [FirebaseAuthStrategy, FirebaseAuthGuard],
  exports: [FirebaseAuthGuard],
})
export class AuthModule {}
