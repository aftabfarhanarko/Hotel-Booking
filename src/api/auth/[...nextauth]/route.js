import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

const handel = NextAuth(authOptions);

export{handel as GET , handel as POST}
