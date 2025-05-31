import React from "react";
import scss from "./footer.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const product = [
    {
      name: "Employee database",
      link: "/",
    },
    {
      name: "Payroll",
      link: "/",
    },
    {
      name: "Absences",
      link: "/",
    },
    {
      name: "Time tracking",
      link: "/",
    },
    {
      name: "Shift planner",
      link: "/",
    },
    {
      name: "Recruiting",
      link: "/",
    },
  ];
  const information = [
    {
      name: "FAQ",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Support",
      link: "/",
    },
  ];
  const company = [
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Careers",
      link: "/",
    },
    {
      name: "Contact us",
      link: "/",
    },
  ];
  return (
    <footer id={scss.footerr}>
      <div className="container">
        <div className={scss.footerMain}>
          <div className={scss.footerSubscribe}>
            <img className={scss.logo} src="/logo.svg" alt="" />
            <div className={scss.inputCart}>
              <input
                className={scss.input}
                type="email"
                placeholder="Email address"
              />
              <button className={scss.button}>Subscribe</button>
            </div>
          </div>
          <div className={scss.footerLine}></div>
          <div className={scss.footerContent}>
            <ul>
              <li>Product</li>
              {product.map((product, index) => (
                <li key={index}>{product.name}</li>
              ))}
            </ul>
            <ul>
              <li>Information</li>
              {information.map((information, index) => (
                <li key={index}>{information.name}</li>
              ))}
            </ul>
            <ul>
              <li>Company</li>
              {company.map((company, index) => (
                <li key={index}>{company.name}</li>
              ))}
            </ul>
          </div>
          <div className={scss.footerLine}></div>
          <div className={scss.footerContact}>
            <p>© Cutline 2025. Async Video Studio</p>
            <div>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>
            <div>
              <h1>{<FaLinkedinIn color="#000" fontSize={15} />}</h1>
              <h1>{<FaFacebookF color="#000" fontSize={15} />}</h1>
              <h1>{<FaTwitter color="#000" fontSize={15} />}</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
