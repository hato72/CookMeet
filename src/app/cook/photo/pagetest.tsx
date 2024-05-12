"use client";
import React from "react";
import axios from 'axios';
import Link from 'next/link';
import BlackRoundButton from '@/components/ui/buttun/BlackRoundButton';

function MainComponent() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // process the image here, e.g., display or send to an API
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">記録しよう</h1>
      </div>

      <section className="grid grid-cols-2 gap-4">
        <label className="flex flex-col items-center justify-center bg-[#f0f0f0] border-2 border-dashed border-[#0066CC] rounded-lg cursor-pointer w-[400px] h-[250px]">
          <i className="fa fa-cloud-upload-alt text-3xl text-[#0066CC]"></i>
          <span className="font-roboto text-base text-[#121212] mt-2">
            写真アップロード
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        <textarea
          className="border-2 border-[#f0f0f0] rounded-lg p-3 w-full h-[250px] resize-none"
          placeholder="コメント"
        ></textarea>
      </section>

      <Link href='./repo'>
          <BlackRoundButton type="button" className="submit-button absolute left-[600px] top-[850px]" onClick={handleSubmit}>
              完了
          </BlackRoundButton>
      </Link>
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;