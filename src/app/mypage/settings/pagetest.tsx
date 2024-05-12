"use client";
import React from "react";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";

function MainComponent() {
  const [imageSrc, setImageSrc] = React.useState(
    "path_to_placeholder_image.jpg"
  );
  const [email, setEmail] = React.useState("user@example.com");
  const [username, setUsername] = React.useState("ユーザー名");

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
      <div className="mb-4">
        <div>{username}</div>
        <div>{email}</div>
      </div> 

      <div className="w-fit mx-auto mt-10">
        <Link href="/update">
            <WhiteRoundButton type="submit">登録情報変更</WhiteRoundButton>
        </Link>
      </div>
      <div className="w-fit mx-auto mt-10">
        <Link href="/mypage">
            <GreenRoundButton type="submit">保存してマイページへ</GreenRoundButton>
        </Link>
      </div>
    </div>
  );
}

export default MainComponent;