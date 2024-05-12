"use client";
import React from "react";

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
      <header className="text-[#121212] text-2xl font-roboto mb-4">
        記録しよう
      </header>
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
      <button className="bg-[#121212] text-white px-4 py-2 rounded mt-4">
        完了
      </button>
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;