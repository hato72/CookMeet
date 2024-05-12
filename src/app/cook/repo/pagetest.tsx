"use client";
import React from "react";
import RecipeCard from "@/components/base/meal/Meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import Link from "next/link";

function MainComponent() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {};
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">調理記録</h1>
      </div>

      <section className="grid grid-cols-2 gap-4">
        <a
          href="https://cookpad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white border-2 border-gray-300 rounded-lg overflow-hidden"
        >
          <img
            src="path_to_image.jpg"
            alt="Savory Herb-Infused Chicken"
            className="w-full h-[250px] object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80">
            <span className="block text-base font-roboto text-[#000000] mb-1">
              Savory Herb-Infused Chicken
            </span>
            <span className="block text-sm font-roboto text-[#666666]">
              An image for a recipe showcasing delicious, savory herb-infused
              chicken.
            </span>
          </div>
        </a>
        <div className="flex flex-col">
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