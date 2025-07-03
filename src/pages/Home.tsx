import TopBar from '../components/TopBar';
import TopNavigation from '../components/TopNavigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <TopBar />
      <TopNavigation />
      <section className="Hero grid grid-cols-2 gap-4 p-8">
        <div className="bg-yellow-200 flex items-center justify-center rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-green-800">JEDZ<br></br>DZIEL SIĘ<br></br>I CZĘSTUJ</h1>
        </div>
        <div className="bg-green-200 flex items-center justify-center rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-green-800">NIE MARNUJ<br></br>JEDZENIA</h1>
        </div>
        <div className="col-span-2 bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-lg text-gray-700">
            Jadłodzielnia Szczecin to społeczna inicjatywa przeciwdziałająca marnowaniu jedzenia. Każdy może
            zostawić nadmiar żywności w jednej z ogólnodostępnych szafek — a każdy, kto jej potrzebuje, może
            z niej skorzystać. Pomagamy, dzielimy się i budujemy solidarność w lokalnej społeczności.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-200 text-blue-800 rounded shadow hover:bg-blue-300">
            Dowiedz się więcej
          </button>
        </div>
        <div className="bg-gray-300 rounded-lg shadow-md"></div>
        <div className="bg-gray-300 rounded-lg shadow-md"></div>
      </section>
      <div className="h-dvh"></div>
      <Footer />
    </>
  );
};

export default Home;
