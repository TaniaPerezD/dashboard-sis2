import React from "react";
import styles from "./HomeCard.module.css";

function HomeCard(cardProps) {
    const { numero, texto } = cardProps;
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-content"]}>
                <div className={styles["card-number"]}>{numero}</div>
                <div className={styles["card-text"]}>{texto}</div>
            </div>
        </div>
    );
}

export default HomeCard;