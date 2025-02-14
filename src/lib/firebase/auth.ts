import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  type User
} from 'firebase/auth';
import { getFirebaseAuth } from './config';

export async function loginWithEmail(
  email: string,
  password: string
): Promise<User> {
  const auth = getFirebaseAuth();
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function registerWithEmail(
  email: string,
  password: string
): Promise<User> {
  const auth = getFirebaseAuth();
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    throw error;
  }
}

export async function logout(): Promise<void> {
  const auth = getFirebaseAuth();
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

export async function resetPassword(email: string): Promise<void> {
  const auth = getFirebaseAuth();
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
}
