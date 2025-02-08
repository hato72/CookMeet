'use client';

import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import React, { useEffect } from "react";
import { useState } from "react";
import CheckList from "@/components/base/prep/CheckList";
import { Grid, List, ListItemButton, ListSubheader, Typography } from "@mui/material";
import Link from "next/link";
import { useAtom } from "jotai";
import { ingredientsAtom } from "@/states/store/ingredientsAtom";
import { stepsAtom } from "@/states/store/stepAtom";
import CheckboxLabel from "@/components/base/prep/CheckboxLabel";
import axios from 'axios';

const Result  = ({params}: {params: {id: number}}) => {
    const { id } = params;
    
    const [currentMeal, setCurrentMeal] = useState(0);
    const [ingredients, setIngredients] = useAtom(ingredientsAtom);
    const [steps, setSteps] = useAtom(stepsAtom);
    const [open, setOpen] = React.useState(true);
    //console.log(id);
     useEffect(() => {
        //console.log(id); // idの値を確認
        if (id) {
            const fetchRecipes = async () => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_AI_BACKEND_URL}/v1/recipes/${id}/details`); // Call the GET function
                    //const response = await fetch(`http://localhost:8080/v1/recipes/${id}/details`); // Call the GET function
                    //const response = await fetch(`https://cookmeet-recommend-recipes.onrender.com/v1/recipes/${id}/details`);

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json(); // Extract JSON data from the response
                    //  setIngredients([...ingredients, data['ingredients']]) // Set the fetched recipes in the state
                    //  setSteps([...steps, data['steps']]);
                        setIngredients(data['ingredients']);
                        setSteps(data['steps']);
                    //  setIngredients([...ingredients, data['ingredients']]) // Set the fetched recipes in the state
                    //  setSteps([...steps, data['steps']]);
                    } catch (error) {
                    console.error('Error fetching recipes:', error);
                }
            };
            fetchRecipes();
        }
        // const fetchRecipes = async () => {
        //     try {
        //         // ローカルサーバーからデータを取得
        //         const cuisineResponse = await axios.get(`http://localhost:8080/cuisines/${id}`);
        //         const data = cuisineResponse.data;

        //         // 取得したデータから材料と作り方をセット
        //         setIngredients([...ingredients, data.ingredients]);
        //         setSteps([...steps, data.steps]);
        //     } catch (error) {
        //         console.error('Error fetching recipes:', error);
        //     }
        // };

        //fetchRecipes();
     }, [id, setIngredients, setSteps]);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">準備1</h1>
            </div>
            <div className="text-center">
                <h1 className="text-1xl font-bol text-gray-900"></h1>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    {/* ingredientsに材料が格納されているから、それをチェックボックス形式で表示したい */}
                    {/* <CheckList/> */}
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    <Typography variant="h6" component="div" color="textPrimary">
                                        材料
                                    </Typography>
                                </ListSubheader>
                            }
                        >
                            {ingredients.map((ingredient, index) => (
                                <ListItemButton onClick={handleClick} key={index}>
                                    <CheckboxLabel text={ingredient && typeof ingredient === 'object' && 'name' in ingredient && 'amount' in ingredient
                                        ? `${ingredient.name}: ${ingredient.amount}`
                                        : `材料 ${index + 1}`} />
                                </ListItemButton>
                            ))}
                        </List>
                    </div>
                </Grid>

                <Link href="/cook/result">
                    <WhiteRoundButton>戻る</WhiteRoundButton>
                </Link>
                <Link href={`/cook/${id}/process`}>
                {/* <Link href={{ pathname: `/cook/process`, query: { steps: JSON.stringify(steps) } }}> */}
                    <BlackRoundButton>作り方へ</BlackRoundButton>
                </Link>
            </div >
        </>
    );
}

export default Result;
