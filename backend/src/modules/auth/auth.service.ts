import User, { IUser } from './auth.model';
import bcrypt from 'bcrypt';
import { createAccessToken, createRefreshToken, verifyRefreshToken } from '../../utils/jwt';

export const registerUser = async (name: string | undefined, email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already in use');

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role: 'author' });
  return { id: user._id, email: user.email, role: user.role };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !user.password) throw new Error('Invalid credentials');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Invalid credentials');

  const accessToken = createAccessToken({ id: user._id, role: user.role });
  const refreshToken = createRefreshToken({ id: user._id });

  // Save refresh token (simple rotation strategy)
  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken, user: { id: user._id, email: user.email, role: user.role } };
};

export const refreshTokens = async (token: string) => {
  try {
    const payload: any = verifyRefreshToken(token);
    const user = await User.findById(payload.id);
    if (!user || user.refreshToken !== token) throw new Error('Invalid refresh token');

    const newAccess = createAccessToken({ id: user._id, role: user.role });
    const newRefresh = createRefreshToken({ id: user._id });

    user.refreshToken = newRefresh;
    await user.save();

    return { accessToken: newAccess, refreshToken: newRefresh };
  } catch (err) {
    throw new Error('Invalid refresh token');
  }
};
