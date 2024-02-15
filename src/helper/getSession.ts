"use server";
import { authOptions } from "@root/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const getSession = async () => {
  return getServerSession(authOptions);
};
export default getSession;