import Head from "./Head";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#380860] to-[#15162c]">
        {children}
      </main>
    </>
  );
};

export default Layout;
