import { getServerSession } from "next-auth";

import { authOptions } from "@/libs/auth";

const getAuthSession = async () => {
   return await getServerSession(authOptions);
};
export default getAuthSession;
