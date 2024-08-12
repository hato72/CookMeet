"use client";
import React,{useState} from "react";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton";
import Link from "next/link";
import { Button } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { userAtom } from "@/states/store/authAtom";
import { useAtom, atom } from "jotai";

export const emailAtom = atom('') //ログイン時のemailを取得する

const UploadPage: React.FC = () => {
  const [imageSrc, setImageSrc] = React.useState(
    "src/app/mypage/settings/IconFile/sample_icon.png"
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [email, setEmail] = React.useState("email: user@example.com");
  // const [username, setUsername] = React.useState("name: ユーザー名");
  const [user,setUser] = useAtom(userAtom)
  const username = "user"
  const [email,setEmail] = useAtom(emailAtom)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
          setSelectedFile(event.target.files[0]);
      }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">アカウント設定</h1>
      </div>

      <div className="mb-8 flex justify-center">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={imageSrc}
            alt="profile icon"
            className="w-full h-full"
          />
        </div>
        <input
          type="file"
          onChange={handleImageUpload}
          className="hidden"
          id="imageUpload"
        />
        
      </div>
      <div className="left-[700px] top-[320px] absolute">
      <label htmlFor="imageUpload">
        <Button startIcon={<CloudUpload />}>アイコン変更</Button>
          {/* <i className="fa fa-edit text-lg">upload</i> */}
      </label>
      </div>
      <div className="left-[700px] top-[350px] absolute">
        <div>{username}</div>
        <div>{email}</div>
      </div> 

      <div className="left-[450px] top-[450px] absolute">
        <Link href="/mypage/settings/update">
            <WhiteRoundButton type="submit" className="w-[300px] h-[50px]">登録情報変更</WhiteRoundButton>
        </Link>
        <Link href="/mypage">
            <GreenRoundButton type="submit" className="w-[300px] h-[50px] ">保存してマイページへ</GreenRoundButton>
        </Link>
      </div>
    </div>
  );
}

export default UploadPage;

//こっち