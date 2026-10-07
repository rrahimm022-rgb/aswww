import NextAuth from "next-auth";
// Sesuaikan jumlah tanda titik dua (../) mundur dari folder api/auth/[...nextauth] ke folder lib
import { authOptions } from "aswww/Downloads/Compressed/xora-society-portal/src/app/api/auth/"; 

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
