"use client"

import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import React, { useEffect } from "react";
import { useState } from "react";
import CheckList from "@/components/base/prep/CheckList";
import { Grid, List, ListItemButton, ListSubheader, Typography } from "@mui/material";
import Link from "next/link";
import { useAtom } from "jotai";
import { ingredientsAtom } from "@/states/store/ingredientsAtom";
import { stepsAtom } from "@/states/store/stepAtom";

const Result  = ({params}: {params: {id: number}}) => {
    const { id } = params;
    
    const [currentMeal, setCurrentMeal] = useState(0);
    const [ingredients, setIngredients] = useAtom(ingredientsAtom);
    const [steps, setSteps] = useAtom(stepsAtom);
    const [open, setOpen] = React.useState(true);

     useEffect(() => {
         const fetchRecipes = async () => {
             try {
                 const response = await fetch(`https://recommend-recipes-4b45go5xeq-an.a.run.app/v1/${id}/details`); // Call the GET function
                 const data = await response.json(); // Extract JSON data from the response
                 setIngredients([...ingredients, data['ingredients']]) // Set the fetched recipes in the state
                 setSteps([...steps, data['steps']]);
                } catch (error) {
                 console.error('Error fetching recipes:', error);
             }
         };
         fetchRecipes();
     }, []);

    const handleClick = () => {
        setOpen(!open);
        
    };

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">準備2</h1>
            </div>
            <div className="text-center">
                <h1 className="text-1xl font-bol text-gray-900"></h1>

                {/* stepsに作り方が格納されているからそれを表示したい */}
                <Grid container justifyContent="center">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    <Typography variant="h6" component="div" color="textPrimary">
                                        作り方手順
                                    </Typography>
                                </ListSubheader>
                            }
                        >
                            {steps.map((step, index) => (
                                <ListItemButton onClick={handleClick} key={index}>
                                    <Typography>{`${index + 1}. ${step}`}</Typography>
                                </ListItemButton>
                            ))}
                        </List>
                    </div>
                </Grid>

                <Link href="/cook/result">
                    <WhiteRoundButton>戻る</WhiteRoundButton>
                </Link>
                <Link href="/cook/photo">
                    <BlackRoundButton>これで完成! 写真を撮ろう!</BlackRoundButton>
                </Link>
            </div >
        </>
    );
}

export default Result;