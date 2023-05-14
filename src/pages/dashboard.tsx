import { type NextPage } from "next";
import { useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
  const { data: sessionData } = useSession();
  console.log(sessionData);

  return <p>Hello</p>;
};

export default Dashboard;
