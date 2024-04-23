import React from "react";
import styles from "./meal.module.scss";

interface CardProps {
    img: string;
    title: string;
    description: string;
    width?: string;
    height?: string;
}

const RecipeCard: React.FC<CardProps> = ({ img, title, description, width, height }) => {
    return (
        <div className={`${styles.card} ${styles.defaultBackground}`} style={{ width: width, height: height }}>
            <div className={styles.card__body}>
                <img src={img} className={styles.card__image} alt={title} />
                <h2 className={`${styles.card__title} ${styles.defaultText}`}>{title}</h2>
                <p className={`${styles.card__description} ${styles.defaultText}`}>{description}</p>
            </div>
            <button className={`${styles.card__btn} ${styles.defaultText}`}>View Recipe</button>
        </div>
    );
}

export default RecipeCard;
