import chefmail from "../../img/7fdb479c-f1b1-43c9-a64b-a501f16d33e5.webp";
import chefinstagram from "../../img/a2fc61dc-0441-409d-a830-1b3f6bfa83cf.webp";
import cheflinkedin from "../../img/de8a6d41-dbe6-4dea-ad88-1d4c12320657.webp";

import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contactcontent">
        <img className="contactimg" src={chefmail} alt="" />
        <img className="contactimg3" src={chefinstagram} alt="" />
        <img className="contactimg2" src={cheflinkedin} alt="" />

        <a
          className="a1"
          href="https://www.linkedin.com/in/nisanur-k%C4%B1l%C4%B1%C3%A7-05806a219/"
        >
          <AiFillLinkedin />
        </a>
        <a className="a2" href="https://www.instagram.com/nisanurrklc/">
          <FiInstagram />
        </a>
        <a className="a3" href="mailto:nisanurklc054@gamil.com">
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
