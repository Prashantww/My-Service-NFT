import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ userImage, userName, units }) => {
  return (
    <div className={styles.card}>
      <div className="flex">
        <img className={styles.userImage} src={userImage} alt="" />
        <div className="ml-[11px]">
          <h5 className={styles.userName}>{userName}</h5>
          <p className={styles.units}>{units} ETH</p>
        </div>
      </div>
      <img
        className={styles.cardBg}
        src="/ProfileClipPathContainer.png"
        alt=""
      />
    </div>
  );
};

export default ProfileCard;
