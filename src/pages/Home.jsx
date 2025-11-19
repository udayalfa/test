import JewellaryCard from "../components/JewellaryCard";
import Footer from "../layout/Footer";


function Home() {
  return (
    <div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />
        <JewellaryCard />

        {/* Add more */}
      </div>
   
    </div>
  );
}

export default Home;
