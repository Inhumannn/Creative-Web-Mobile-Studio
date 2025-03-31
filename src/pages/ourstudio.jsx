import Footer from "../components/footer";
import Header from "../components/header";

function OurStudio() {
  return (
    <>
      <Header />
      <main className="max-w-[1120px] m-auto">
        <section>
          <h1 className="text-[32px] text-center text-[#333] font-light">
            About Our Story
          </h1>
          <p className="text-[18px] text-center text-[#777] pt-[20px] pb-[50px]">
            The creative web & mobile studio focused on brand identity, web
            development, and social marketing.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-7">
          <img
            src="img/about-image.jpg"
            alt="image libre de droit"
            className="w-full h-auto"
          />
          <article>
            <h2 className="text-[28px] text-[#333] font-light pt-5">
              Magnet Studio
            </h2>
            <p className="pt-2.5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sunt
              reprehenderit, ipsa excepturi dolorum enim alias saepe. Error
              illum necessitatibus assumenda rem quidem sunt eum!
            </p>
            <p className="pt-2.5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              laborum animi sit modi harum, aliquid laboriosam quod aperiam
              nobis ullam.
            </p>
          </article>
        </section>

        <section className="py-[50px]">
          <article>
            <p className="pb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              dolorum possimus odio eius quae cumque necessitatibus pariatur,
              labore distinctio nesciunt ea omnis voluptates quasi earum
              voluptatibus soluta facere magnam repudiandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, hic.
            </p>
          </article>
        </section>
        <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <article>
            <h3 className="text-[23px] text-[#333] py-4">Web Development</h3>
            <ul className="list-disc pl-5 py-4">
              <li>Online Shopping</li>
              <li>WordPress CMS</li>
              <li>Bootstrap Themes</li>
              <li>Web Application</li>
            </ul>
          </article>
          <article>
            <h3 className="text-[23px] text-[#333] py-4">Brand Identity</h3>
            <ul className="list-disc pl-5">
              <li>Logo Design</li>
              <li>Personal Branding</li>
              <li>Flyer Design</li>
              <li>Creative Direction</li>
            </ul>
          </article>
          <article>
            <h3 className="text-[23px] text-[#333] py-4">Social Marketing</h3>
            <ul className="list-disc pl-5">
              <li>Facebook, Twitter</li>
              <li>Page Maintenance</li>
              <li>Social Media Strategy</li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default OurStudio;
