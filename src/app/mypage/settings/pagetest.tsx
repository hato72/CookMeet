"use client";
import React from "react";

function MainComponent() {
  const [imageSrc, setImageSrc] = React.useState(
    "path_to_placeholder_image.jpg"
  );

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRedirect = () => {
    window.location.href = "http://localhost:3000/mypage/update";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-[#121212] text-3xl font-roboto mb-6">
        アカウント設定
      </header>
      <div className="mb-8 flex justify-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={imageSrc}
            alt="User profile icon"
            className="w-full h-full"
          />
        </div>
        <input
          type="file"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        <label htmlFor="imageUpload" className="cursor-pointer ml-4">
          <i className="fa fa-edit text-lg"></i>
        </label>
      </div>
      <form className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="新しいユーザー名"
          className="bg-white px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="button"
          value="メールアドレス・パスワード変更"
          onClick={handleRedirect}
          className="bg-white px-4 py-2 border border-gray-300 rounded-lg cursor-pointer"
        />
      </form>
      <button className="bg-[#28a745] text-white px-10 py-2 rounded-full text-sm font-roboto w-full">
        保存してマイページへ
      </button>
    </div>
  );
}

export default MainComponent;