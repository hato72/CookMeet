"use client";
import React from "react";

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
      <header className="text-[#121212] text-3xl font-roboto mb-6">
        調理記録
      </header>
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
          <button className="bg-white px-6 py-2 rounded-full border border-gray-300 text-sm shadow-sm font-roboto mb-4 flex items-center justify-center">
            <i className="fa fa-share-alt mr-2 text-[#666666]"></i>
            SNSでシェアする
          </button>
          <button className="bg-[#28a745] text-white px-6 py-2 rounded-full text-sm font-roboto">
            マイページ
          </button>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;