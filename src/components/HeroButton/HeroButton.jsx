import React from "react";
import styles from "./HeroButton.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroButton = ({ children, toLink, variant = "primary-left" }) => {
  return (
    <a className={styles[variant]} href={toLink}>
      {/* {children} */}
      {variant == "link" ? (
        <>
          {children} <IoIosArrowRoundForward size={23} />
        </>
      ) : (
        children
      )}
    </a>
  );
};

export default HeroButton;
