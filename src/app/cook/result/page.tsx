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

    const arrowClicked = () => {

        if (currentMeal + 1 < 3) {
            setCurrentMeal(currentMeal + 1);
        } else if (currentMeal == 2) {
            setCurrentMeal(0);
        }
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                /* 赤波線出ているがこれで問題ない */
                //const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/v1/recipes/recommend`, {
                const response = await fetch(`http://localhost:8080/v1/recipes/recommend`, {
                //const response = await fetch(`https://cookmeet-recommend-recipes-128862782844.asia-southeast1.run.app/v1/recipes/recommend`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "texts": [meal[2], meal[3], meal[4]],
                        "conditions": [meal[0], meal[1]]
                    })
                }); // Call the GET function
                const data = await response.json(); // Extract JSON data from the response
                setRecipes(data['recipes']); // Set the fetched recipes in the state
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, [meal]);

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
                    {/* <RecipeCard
                        img="https://recipe.r10s.jp/recipe-space/d/strg/ctrl/3/50fe37bda3c657b77f2842d28727ceb3e8d89f4e.31.2.3.2.jpg?interpolation=lanczos-none&fit=around|716:716&crop=716:716;*,*"
                        title="簡単☆本格ハンバーグソース レシピ・作り方"
                        description=""
                        width="350px"
                        height="450px"
                        url="https://recipe.rakuten.co.jp/recipe/1570003792/" 
                    /> */}
                </Grid>

                <Link href={`/cook/${recipes[currentMeal].id}/prep`}>
                    <GreenRoundButton>これを作る！</GreenRoundButton>
                </Link>
                
                <br></br><br></br>
                <WhiteRoundButton onClick={() => arrowClicked()}>←おすすめ度{recipes[currentMeal].rank - 1 == 0 ? 3 : recipes[currentMeal].rank - 1}位</WhiteRoundButton>
                <BlackRoundButton onClick={() => arrowClicked()}>おすすめ度{recipes[currentMeal].rank + 1 == 4 ? 1 : recipes[currentMeal].rank + 1}位→</BlackRoundButton>
            </div >
        </>
    );
}

export default Result;