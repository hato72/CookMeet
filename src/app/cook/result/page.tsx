'use client';

import RecipeCard from "@/components/base/meal/Meal";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import { mealAtom } from "@/states/store/mealAtom";
import { Grid } from "@mui/material";
import { useAtom } from "jotai";
import React, { useState,useEffect } from 'react';
import Link from "next/link";

const Result: React.FC = () => {
    const [recipes, setRecipes] = useState([{
        id: 0,
        title: '',
        url: '',
        description: '',
        image_url: '',
        category_id: '',
        rank: 0
    }
    ]);
    const [currentMeal, setCurrentMeal] = useState(0);
    const [meal, setMeal] = useAtom(mealAtom);

    // ガード用: meal の値も確認する
    const isMealValid = meal && meal.length >= 5;

    const arrowClicked = () => {
        if (currentMeal + 1 < recipes.length) {
            setCurrentMeal(currentMeal + 1);
        } else {
            setCurrentMeal(0);
        }
    };

    useEffect(() => {
        if (!isMealValid) {
            console.error("Meal data is invalid", meal);
            return;
        }
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://cookmeet-recommend-recipes-128862782844.asia-southeast1.run.app/v1/recipes/recommend`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "texts": [meal[2], meal[3], meal[4]],
                        "conditions": [meal[0], meal[1]]
                    })
                });
                const data = await response.json(); // レスポンスの内容確認
                console.log("Fetched data:", data);
                // recipes プロパティが存在し、配列であることを確認する
                const newRecipes = Array.isArray(data.recipes) ? data.recipes : [];
                setRecipes(newRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, [meal, isMealValid]);

    // recipes が存在しない場合のガード
    // if (recipes.length === 0) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">生成結果</h1>
            </div>
            <div className="text-center">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-orange-500">おすすめ度{recipes[currentMeal].rank}位</h1>
                </div>
                <Grid container justifyContent="center">
                    <RecipeCard
                        img={recipes[currentMeal].image_url}
                        title={recipes[currentMeal].title}
                        description={recipes[currentMeal].description}
                        width="350px"
                        height="450px"
                        url={recipes[currentMeal].url} 
                    />
                </Grid>
                <Link href={`/cook/${recipes[currentMeal].id}/prep`}>
                    <GreenRoundButton>これを作る！</GreenRoundButton>
                </Link>
                <br /><br />
                <WhiteRoundButton onClick={() => arrowClicked()}>
                    ←おすすめ度{recipes[currentMeal].rank - 1 === 0 ? 3 : recipes[currentMeal].rank - 1}位
                </WhiteRoundButton>
                <BlackRoundButton onClick={() => arrowClicked()}>
                    おすすめ度{recipes[currentMeal].rank + 1 === 4 ? 1 : recipes[currentMeal].rank + 1}位→
                </BlackRoundButton>
            </div>
        </>
    );
};

export default Result;