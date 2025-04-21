'use client';

import React, { useEffect, useState } from "react";
import RecipeCard from "@/components/base/meal/Meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import Link from "next/link";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";

type Cuisine = {
  id: number;
  title: string;
  icon_url?: string;
  url: string;
  comment: string;
  created_at: string;
  updated_at: string;
  user_id: number;
};

export default function MyPage() {
  const [cuisines, setCuisines] = useState<Cuisine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cuisines`, {
          withCredentials: true
        });
        console.log(response.data);
        setCuisines(response.data);
      } catch (err) {
        console.error('Error fetching cuisines:', err);
        setError('料理データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchCuisines();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-500 text-2xl">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">調理記録</h1>
      </div>

      <div className="container mx-auto px-4">
        <Grid container spacing={4} justifyContent="center">
          {cuisines.length === 0 ? (
            <div className="text-center py-12">
              <Typography variant="h6">まだ料理の記録がありません</Typography>
              {/* <div className="mt-4">
                <Link href="/cook/photo">
                  <BlackRoundButton>料理を記録する</BlackRoundButton>
                </Link>
              </div> */}
            </div>
          ) : (
            cuisines.map((cuisine) => (
              <Grid item key={cuisine.id} xs={12} sm={6} md={4} lg={3}>
                <RecipeCard
                  //img={`${process.env.NEXT_PUBLIC_API_URL}/cuisine_images/${cuisine.icon_url}`}
                  img={cuisine.icon_url || '/default-image.jpg'}
                  title={cuisine.title}
                  description={cuisine.comment || '説明なし'}
                  width="100%"
                  height="400px"
                  url={cuisine.url || '#'}
                />
              </Grid>
            ))
          )}
        </Grid>

        <div className="flex justify-center mt-8">
          <Link href="/mypage/">
            <GreenRoundButton>マイページへ</GreenRoundButton>
          </Link>
        </div>
      </div>
    </>
  );
}