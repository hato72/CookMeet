import React from "react";
import styles from "./meal.module.scss";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
    img: string;
    title: string;
    description: string;
    width: string;
    height: string;
    url: string;
    onDelete?: () => void;
}

/* 表示可能なDescription文字数 */
const MAX = 30;

const RecipeCard: React.FC<CardProps> = ({ img, title, description, width, height, url, onDelete }) => {
    const shortDescription = description.length > MAX ? `${description.slice(0, MAX)}...` : description;
    
    // 画像のエラー処理
    // const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    //     e.currentTarget.src = '/placeholder-food.jpg'; // エラーが発生した場合のプレースホルダー画像
    // };

    return (
        <div className={`${styles.card} ${styles.defaultBackground}`} style={{ width: width, height: height }}>
            <div className={styles.card__body}>
                <img 
                  src={img} 
                  className={styles.card__image} 
                  alt={title}
                //   onError={handleImageError}
                />
                <h2 className={`${styles.card__title} ${styles.defaultText}`}>{title}</h2>
                <p className={`${styles.card__description} ${styles.defaultText}`}>{shortDescription}</p>
            </div>
            <div className={styles.button_container}>
                {url && url !== '#' ? (
                    <>
                        <Link href={url}>
                            <button className={styles.card__btn}>レシピを見る</button>
                        </Link>
                        {onDelete && (
                            <button 
                                onClick={() => {
                                    if (window.confirm('本当に削除しますか？')) {
                                        onDelete();
                                    }
                                }}
                                className={`${styles.card__btn} ${styles.delete_btn}`}
                            >
                                削除
                            </button>
                        )}
                    </>
                ) : (
                    <button disabled className={`${styles.card__btn} opacity-50`}>レシピなし</button>
                )}
            </div>
        </div>
    );
}

export default RecipeCard;
