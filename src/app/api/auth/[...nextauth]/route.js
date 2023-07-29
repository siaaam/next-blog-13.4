import { User } from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({ email: credentials.email });

          console.log(credentials);

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            console.log(isPasswordCorrect);
            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong credentials");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
  debug: true,
});

export { handler as GET, handler as POST };
