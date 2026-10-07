import NextAuth from "next-auth";
<<<<<<< HEAD
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
=======
// Sesuaikan jumlah tanda titik dua (../) mundur dari folder api/auth/[...nextauth] ke folder lib
import { authOptions } from "aswww/Downloads/Compressed/xora-society-portal/src/app/api/auth/"; 

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
>>>>>>> b6d3f8b23b948cfaa32340e841475631795dd232
