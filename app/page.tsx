import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-purple-950 min-h-screen">

        <section className="max-w-7xl mx-auto py-32">

          <h1 className="text-7xl font-bold text-white">
            I build things
            <br />
            for the
            <span className="text-yellow-400">
              {" "}web.
            </span>
          </h1>

        </section>

      </main>
    </>
  );
}