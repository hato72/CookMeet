import Image from "next/image";
import ResponsiveAppBar from "../components/base/Header/Header";
import RecipeCard from "@/components/base/meal/meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import WhiteQuadButton from "@/components/ui/buttun/WhiteQuadButtun";
import SocialMediaButton from "@/components/ui/buttun/SocialMediaButton";
import CheckList from "@/components/base/prep/CheckList";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-4xl text-black text-center font-serif">
        <h1>Meet a new meal.</h1>
        <p>毎日同じメニュー...</p>
        <p>献立を決めるのが面倒...</p>
        <p>そんな食卓に革命を。</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      </div>
      <div className="text-center">
        <Link href="/cook/question">
          <GreenRoundButton>質問に回答して料理を生成→</GreenRoundButton></Link>
      </div>
    </>
  );
}