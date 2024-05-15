"use client";
import React from "react";
import RecipeCard from "@/components/base/meal/Meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import Link from "next/link";

function MainComponent() {
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {};
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">調理記録</h1>
      </div>

      <section className="grid grid-cols-2 gap-4">
        <div className="w-[427px] h-[150px] left-[100px] top-[200px] absolute">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900"></h1>
          <RecipeCard
              img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              title="meal"
              description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
              width="300px"
              height="380px"
              url="https://recipe.rakuten.co.jp/recipe/1900015892/" 
          />
          <div className="TextWrapper px-6 pt-6 pb-4 w-[300px] left-[0px] top-[395px] absolute bg-orange-50 rounded-bl-3xl rounded-br-3xl border border-stone-800/opacity-20 flex-col justify-start items-start gap-[54px] inline-flex">
              <div className="InfoWrapper self-stretch justify-between items-center inline-flex">
                  <div className="Text text-stone-800 text-xs font-medium font-['Roboto'] uppercase leading-[14.40px] tracking-tight">40 Min - easy prep - 3 serves</div>
                  {/* <div className="Button px-6 py-3 rounded-3xl border border-stone-800 justify-center items-center gap-2.5 flex">
                      <div className="Text text-stone-800 text-sm font-medium font-['Roboto'] uppercase leading-[14px]">レシピを見る</div>
                  </div> */}
              </div>
          </div>
        </div>
        <div className="flex flex-col left-[550px] top-[200px] absolute">
          <WhiteRoundButton>SNSでシェア</WhiteRoundButton>
          <Link href="/mypage">
              <GreenRoundButton>マイページへ</GreenRoundButton>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;