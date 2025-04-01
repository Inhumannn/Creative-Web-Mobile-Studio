import Footer from "@/components/footer";
import Header from "@/components/header";
import { MessageCircle } from "lucide-react";

function Article() {
  return (
    <>
      <Header />
      <main className="max-w-[1120px] m-auto">
        <img
          src="img/blog-image1.jpg"
          alt="image libre de droit"
          className="w-full h-auto"
        />
        <section>
          <h1 className="text-[24px] py-5">
            We Help You Create Perfect Modern Design
          </h1>
          <div className="flex items-center gap-3.5 pb-7 text-[12px] sm:text-[15px]">
            <img
              src="/img/author-image1.jpg"
              alt="image libre de droit"
              className="w-[12%] rounded-[100%]"
            />
            <p>Jen Lopez</p>
            <p>Jan 30, 2016</p>
            <div className="flex">
              <MessageCircle className="size-[16px] sm:size-4.5 self-center" />
              <p>124Comments</p>
            </div>
          </div>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <strong>
                {" "}
                Modi amet, exercitationem iusto, earum ullam quo officiis facere
                fugit est ad nulla ipsa maxime harum corrupti?
              </strong>{" "}
              Non sint nulla quae nobis molestiae atque obcaecati voluptatum.
            </p>
            <p className="m-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              rem ullam mollitia cum recusandae quibusdam! Atque, voluptatibus
              necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <strong> Id laboriosam enim nisi nobis ut.</strong> Quam
              distinctio quidem facere autem culpa!
            </p>
          </article>
        </section>
        <section>
          <h2 className="text-[19px] pt-7 pb-2">What is Minimal Theme?</h2>
          <article>
            <p className="pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              amet, exercitationem iusto, earum ullam quo officiis facere fugit
              est ad nulla ipsa maxime harum corrupti?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              laboriosam enim nisi nobis ut. Quam distinctio quidem facere autem
              culpa!
            </p>
            <div className="flex items-start gap-3 py-6">
              <img
                src="/img/author-image1.jpg"
                alt="image libre de droit"
                className="w-[20%] rounded-[100%]"
              />
              <div>
                <p className="pb-2">Jen Lopez ( Designer )</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, cupiditate.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section>
          <h2 className="text-[20px]">2 Comments</h2>
          <div className="flex items-start gap-3 py-6">
            <img
              src="/img/author-image1.jpg"
              alt="image libre de droit"
              className="w-[20%] rounded-[100%]"
            />
            <div>
              <p className="pb-2">
                David Jones{" "}
                <span className="text-[10px] pl-1.5">7 months ago</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                cupiditate.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 py-6">
            <img
              src="/img/author-image1.jpg"
              alt="image libre de droit"
              className="w-[20%] rounded-[100%]"
            />
            <div>
              <p className="pb-2">
                David Jones{" "}
                <span className="text-[10px] pl-1.5">7 months ago</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                cupiditate.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Leave a Comment</h2>
          <form action="">
            <textarea name="objet" id="objet" placeholder="Message"></textarea>
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="mail" id="mail" placeholder="Email" />
            <button>Post Your Comment</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Article;
