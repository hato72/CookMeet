import React from "react";
import styles from "./meal.module.scss";
import Link from "next/link";

interface CardProps {
    img: string;
    title: string;
    description: string;
    width?: string;
    height?: string;
    url: string;
}

/* 表示可能なDescription文字数 */
const MAX = 30;

const RecipeCard: React.FC<CardProps> = ({ img, title, description, width, height, url }) => {
    const shortDescription = description.length > MAX ? `${description.slice(0, MAX)}...` : description;
    return (
        <div className={`${styles.card} ${styles.defaultBackground}`} style={{ width: width, height: height }}>
            <div className={styles.card__body}>
                <img src={img} className={styles.card__image} alt={title} />
                <h2 className={`${styles.card__title} ${styles.defaultText}`}>{title}</h2>
                <p className={`${styles.card__description} ${styles.defaultText}`}>{shortDescription}</p>
            </div>
            <Link href={url}>
                <button className={`${styles.card__btn} `}>レシピを見る</button>
            </Link>

        </div>
    );
}

export default RecipeCard;
