import React from "react";
import styles from "./HomeCard.module.css";

function HomeCard(props) {
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-content"]}>
                <div className={styles["card-number"]}>{props.numero}</div>
                <div className={styles["card-text"]}>{props.texto}</div>
                <div className={styles["card-text"]}>{props.porcentaje}</div>
            </div>
        </div>
    );
}

export default HomeCard;