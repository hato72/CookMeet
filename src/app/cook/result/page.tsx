"use client"

import { GET } from "@/app/api/mocks/recipes/route";
import RecipeCard from "@/components/base/meal/meal";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

const Result: React.FC = () => {
    /* アンケートの結果が入っている. answersはnumber型の配列 */
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

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                /* 赤波線出ているがこれで問題ない */
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
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">生成結果</h1>
            </div>
            <div className="text-center">
                <Grid container style={{
                    margin: 'auto',
                    width: '50%'
                }}>
                    {recipes.map(recipe => (
                        <RecipeCard
                            img={recipe.image_url}
                            title={recipe.title}
                            description={recipe.description}
                            width="300px"
                            height="450px"
                            url={recipe.url} />

                    ))}
                </Grid>
            </div>
        </>
    );
}

export default Result;