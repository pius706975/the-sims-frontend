export interface JwtPayload {
  user_id: string;
  name: string;
  email: string;
  username?: string;
  is_superuser?: boolean;
  exp: number;
}
