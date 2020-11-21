export const secret =
  process.env.NODE_ENV === "production" ? process.env.SECRET : "secret";
export const expiry = process.env.TOKEN_EXPIRY || 30; // days
