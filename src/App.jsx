import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="relative">                   
          <Navbar />
          <main>
           
          </main>
         
          
        </div>
      )}
    </>
  );
}