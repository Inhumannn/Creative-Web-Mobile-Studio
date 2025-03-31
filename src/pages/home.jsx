import Footer from "../components/footer";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1120px] m-auto">
        <h1 className="text-[33px] text-center text-[#777] font-light mb-[150px] mt-[50px]">
          The creative web & mobile studio. We are young designers and focused
          <br />
          on brand identity, web developpement and social marketing
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <img src="img/portfolio-img1.jpg" alt="imge de deux cadre" />
          <img src="img/portfolio-img2.jpg" alt="machin" />
          <img src="img/portfolio-img3.jpg" alt="rouleau" />
          <img src="img/portfolio-img4.jpg" alt="disque de musique" />
          <img src="img/portfolio-img5.jpg" alt="machine a ecrire" />
          <img src="img/portfolio-img6.jpg" alt="sac a main pour femme" />
        </div>
        <p className="text-center text-[#777] text-[16px] font-light mt-[50px] mb-[150px]">
          hello, if you interest working togother, just send message contact
          page.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Home;
