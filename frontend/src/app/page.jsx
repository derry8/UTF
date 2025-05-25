import Footer from "./components/static/Footer";
import Hero from "./components/static/Hero";
import Rules from "./components/static/Rules";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="text-black font-inter px-4 bg-transparent">


       


        <Rules/>

        <section className="pb-24" >
          <h3 className="text-2xl  font-semibold text-[rgb(0,155,207)] text-center mb-3">🧑‍💼 Staff Team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-200">
            <div className="bg-[rgb(0,155,207)] p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Admin - Derry</h4>
              <p>Server Owner & Lead Developer</p>
            </div>
            <div className="bg-[rgb(0,155,207)] p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Admin - Derry</h4>
              <p>Server Owner & Lead Developer</p>
            </div>
            <div className="bg-[rgb(0,155,207)] p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Admin - Derry</h4>
              <p>Server Owner & Lead Developer</p>
            </div>
            <div className="bg-[rgb(0,155,207)] p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Mod - NoonerZ</h4>
              <p>Disciplinary & League Ops</p>
            </div>
            <div className="bg-[rgb(0,155,207)] p-4 rounded-md shadow-md">
              <h4 className="font-bold text-lg">Tech - GAFFAGI</h4>
              <p>Bot & System Management</p>
            </div>
          </div>
        </section>

       
      </main>
      <Footer/>
    </>
  );
}