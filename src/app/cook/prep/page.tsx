"use client"

import { GET } from "@/app/api/mocks/recipes/route";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import Image from "next/image";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import React, { useEffect } from "react";
import { useState } from "react";
import CheckList from "@/components/base/prep/CheckList";
import { Grid } from "@mui/material";
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
                const response = await GET(); // Call the GET function
                const data = await response.json(); // Extract JSON data from the response
                setRecipes(data.recipes); // Set the fetched recipes in the state
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">準備するもの</h1>
            </div>
            <div className="text-center">
                <h1 className="text-1xl font-bol text-gray-900">{recipes[currentMeal].title}</h1>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <CheckList />
                    <img src={recipes[currentMeal].image_url} alt="料理のイメージ画像" width={200} height={200} />
                </Grid>

                <Link href="/cook/result">
                    <WhiteRoundButton>戻る</WhiteRoundButton>
                </Link>
                <BlackRoundButton>次へ</BlackRoundButton>
            </div >
        </>
    );
}

export default Result;