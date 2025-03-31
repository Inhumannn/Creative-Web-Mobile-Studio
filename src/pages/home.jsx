import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1120px] m-auto">
        <h1 className="text-[24px] text-center text-[#777] font-light mb-[150px] mt-[50px] sm:text-[33px]">
          The creative web & mobile studio. We are young designers and focused
          <br />
          on brand identity, web developpement and social marketing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="img/portfolio-img1.jpg"
            alt="imge de deux cadre"
            className="w-full h-auto"
          />
          <img
            src="img/portfolio-img2.jpg"
            alt="machin"
            className="w-full h-auto"
          />
          <img
            src="img/portfolio-img3.jpg"
            alt="rouleau"
            className="w-full h-auto"
          />
          <img
            src="img/portfolio-img4.jpg"
            alt="disque de musique"
            className="w-full h-auto"
          />
          <img
            src="img/portfolio-img5.jpg"
            alt="machine a ecrire"
            className="w-full h-auto"
          />
          <img
            src="img/portfolio-img6.jpg"
            alt="sac a main pour femme"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-[#777] text-[20px] font-light mt-[50px] mb-[150px] sm:text-[32px]">
          hello, if you interest working togother, just send message{" "}
          <Link to="/contact.jsx">contact page.</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
