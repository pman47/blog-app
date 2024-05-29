import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="my-10 w-full">
      <div className="flex space-x-10 items-center justify-center">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <Facebook />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <Instagram />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <Twitter />
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          <Linkedin />
        </a>
      </div>

      <div className="mt-5 text-center text-black text-xs">
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
