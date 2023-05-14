import { type NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import { signIn, signOut, useSession } from "next-auth/react";

import Layout from "~/components/layout";

const Home: NextPage = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, {
        duration: 750,
        easing: "ease-in-out",
      });

    if (!show) {
      setShow(true);
    }
  }, [parent, show]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <div className="flex flex-col items-center gap-2" ref={parent}>
          {show && (
            <>
              <h1 className="bg-gradient-to-tr from-[hsl(188,100%,85%)] to-[hsl(172,100%,55%)] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] sm:text-[5rem]">
                FINAL
              </h1>
              <h2 className="text-2xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                The Last{" "}
                <span className="bg-gradient-to-tr from-[hsl(188,100%,85%)] to-[hsl(172,100%,55%)] bg-clip-text text-transparent">
                  Budget
                </span>{" "}
                App You&apos;ll Ever Need
              </h2>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center ">
          <AuthShowcase />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <button
      className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? "Sign out" : "Sign in"}
    </button>
  );
};
