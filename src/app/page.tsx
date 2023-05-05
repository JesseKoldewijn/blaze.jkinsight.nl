import { type NextPage } from "next";

export const metadata = {
  title: "JKinsight Blaze 🔥 JKinsight Blaze",
};

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center py-16">
          <span className="mx-auto text-primary">Blaze</span> JKinsight
        </div>
      </main>
    </>
  );
};

export default Home;
