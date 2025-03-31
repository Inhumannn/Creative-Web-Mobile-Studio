import { Facebook, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="max-w-[1120px] m-auto py-[50px]">
      <section className="grid grid-cols-1 text-center justify-items-center sm:grid-cols-3 sm:text-start gap-[50px]">
        <img src="img/logo.svg" alt="logo de la marque" className="w-[36px]" />
        <address className="text-[#777] text-[16px]">
          124 Market Street, Suite 3570 San Fransico, CA 3042 United States
        </address>
        <div>
          <a
            href="mailto:hello@yourstudio.com"
            className="text-[#777] text-[16px]"
          >
            hello@yourstudio.com
          </a>
          <div>
            <a href="tel:+012048937" className="text-[#777] text-[16px]">
              (+01) 2048937
            </a>{" "}
            <span className="text-[#777] text-[16px]"> / </span>
            <a href="tel:+02203403" className="text-[#777] text-[16px]">
              02 203403
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between items-center text-center max-w-[1120px] m-auto pt-[50px] gap-[50px] sm:text-start sm:grid sm:grid-cols-2">
        <p className="text-[#777] text-[16px]">
          &copy; 2016 Magnet Studio | All Rights Reserved
        </p>
        <div>
          <ul className="grid grid-cols-3 gap-[30px] items-center sm:flex sm:flex-row-reverse">
            <li>
              <a href="https://www.facebook.com/">
                <Facebook size="24px" color="#777" />
              </a>
            </li>
            <li>
              <a href="https://x.com/">
                <Twitter size="24px" color="#777" />
              </a>
            </li>
            <li>
              <a href="https://fr.linkedin.com/">
                <Linkedin size="24px" color="#777" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
