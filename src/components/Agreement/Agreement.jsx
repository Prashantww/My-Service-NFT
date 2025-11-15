import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import styles from "./Agreement.module.css";

const Agreement = ({ documentName, policyList }) => {
  return (
    <div className={styles.agreementWrapper}>
      <div className={styles.document}>
        <div className={styles.icon}>
          <IoDocumentTextOutline size={15} />
        </div>
        <h3>View {documentName}</h3>
      </div>

      <ul className={styles.list}>
        {policyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Agreement;
