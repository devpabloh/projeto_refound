export const authConfig = {
  jwt: {
    secret: process.env.JWT_SECRET || "refound-secret-2024",
    expiresIn: "1d",
  },
}
