import { FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./ContactsDisplay.module.css";

const ContactsDisplay = () => {
  return (
    <div className={classes["contacts-display"]}>
      <a href="https://github.com/Thoss24" target="_blank">
        <FaGithub size={80} color="black"/>
      </a>
      <a
        href="https://www.linkedin.com/in/tom-fogarty-7bb722235/"
        target="_blank"
      >
        <FaLinkedin size={80} color="black"/>
      </a>
    </div>
  );
};

export default ContactsDisplay;
