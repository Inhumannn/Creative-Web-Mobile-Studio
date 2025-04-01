import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "../components/header";

function Contact() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Menu</AccordionTrigger>
          <AccordionContent>
            <Header />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <main className="max-w-[1120px] m-auto">
        <h1 className="text-[27px] text-center text-[#333] pt-20 pb-5 sm:text-[37px]">
          get in touch
        </h1>
        <p className="text-[19px] text-center sm:text-[30px]">
          The creative web & mobile studio and focudsed on brand identity, web
          development and social marketing.
        </p>
        <form action="" className="grid grid-cols-1 gap-12 py-18">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="mail" id="mail" placeholder="Email" />
          <input type="text" name="tel" id="tel" placeholder="Phone Number" />
          <select name="" id="">
            <option value="Lorem ipsum dolor sit amet.">
              Lorem ipsum dolor sit amet.
            </option>
            <option value="Lorem ipsum dolor sit amet.">
              Lorem ipsum dolor sit amet.
            </option>
            <option value="Lorem ipsum dolor sit amet.">
              Lorem ipsum dolor sit amet.
            </option>
            <option value="Lorem ipsum dolor sit amet.">
              Lorem ipsum dolor sit amet.
            </option>
          </select>
          <textarea name="" id="" placeholder="Project Details"></textarea>
          <button>Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
export default Contact;
