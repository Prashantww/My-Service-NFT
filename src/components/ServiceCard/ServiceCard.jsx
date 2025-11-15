import React from "react";
import styles from "./ServiceCard.module.css";
import { IoDocumentTextOutline } from "react-icons/io5";

const ServiceCard = ({ title, subtitle, image }) => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles.bgCardGradientBlob} ${styles.purpleBlob}`}
      ></div>
      <div className={`${styles.bgCardGradientBlob} ${styles.blueBlob}`}></div>

      <img src={image} alt={title} className={styles.image} />

      <div className={styles.bottomRow}>
        <div className={styles.textBox}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <button className={styles.copyBtn}>
          <IoDocumentTextOutline size={17} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
