import { MessageCircle } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";

function Blog() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-[33px] text-center text-[#333] pt-20 pb-5">
          Lastest Blogs
        </h1>
        <p className="text-[28px] text-center">
          The creative web & mobile studio and focused on brand identity, web
          development and social marketing.
        </p>
        <section className="py-10">
          <img
            src="/img/blog-image1.jpg"
            alt="image libre de droit"
            className="w-full h-auto"
          />
          <h2 className="text-[28px] py-3">
            We Help You Create Perfect Modern Design
          </h2>
          <article className="flex items-center gap-3.5 pb-7">
            <img
              src="/img/author-image1.jpg"
              alt="image libre de droit"
              className="w-[12%] rounded-[100%]"
            />
            <p>Jen Lopez</p>
            <p>Jan 30, 2016</p>
            <div className="flex">
              <MessageCircle />
              <p>124Comments</p>
            </div>
          </article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi culpa
            sit enim fugiat consequuntur assumenda. Impedit, corrupti deserunt
            debitis quis, officia rem ex quod consectetur mollitia beatae ut,
            dolore nobis!
          </p>
          <button className="p-7 border-[3px] rounded-[10%]">
            Continue Reading
          </button>
        </section>
        <section className="py-10">
          <img
            src="/img/blog-image2.jpg"
            alt="image libre de droit"
            className="w-full h-auto"
          />
          <h2 className="text-[28px] py-3">
            When do you marry with someone you love in life?
          </h2>
          <article className="flex items-center gap-3.5 pb-7">
            <img
              src="/img/author-image2.jpg"
              alt="image libre de droit"
              className="w-[12%] rounded-[100%]"
            />
            <p>Leo Dennis</p>
            <p>November 22, 2016</p>
            <div className="flex">
              <MessageCircle />
              <p>23 Comments</p>
            </div>
          </article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi culpa
            sit enim fugiat consequuntur assumenda. Impedit, corrupti deserunt
            debitis quis, officia rem ex quod consectetur mollitia beatae ut,
            dolore nobis!
          </p>
          <button className="p-7 border-[3px] rounded-[10%]">
            Continue Reading
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Blog;
