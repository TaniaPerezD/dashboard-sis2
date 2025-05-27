import React from "react";
import styles from "./HomeCard.module.css";

function HomeCard({ metabaseUrl }) {
  return (
    <div className={styles["card-container"]}>
      <iframe
        src={metabaseUrl}
        title="Tarjeta Metabase"
        allowtransparency="true"
      />
    </div>
  );
}

export default HomeCard;
