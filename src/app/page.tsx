import Image from "next/image";
import ResponsiveAppBar from "../components/base/Header/Header";
import RecipeCard from "@/components/base/meal/meal";
import Layout from "./layout";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import BlackRoundButton from "@/components/ui/buttun/BlackRoundButton";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import SettingsAccountBar from "@/components/ui/buttun/SettingsAccountBar";
import SettingsHistoryBar from "@/components/ui/buttun/SettingsHistoryBar";
import WhiteQuadButton from "@/components/ui/buttun/WhiteQuadButtun";
import SocialMediaButton from "@/components/ui/buttun/SocialMediaButton";
import { TextField } from "@mui/material";
import TextFields from "@/components/ui/form/form";
import BasicTextField from "@/components/ui/form/form";
import Footer from "@/components/base/Footer/footer";
import CheckboxLabel from "@/components/base/prep/CheckboxLabel";
import { Checklist } from "@mui/icons-material";
import CheckList from "@/components/base/prep/CheckList";

export default function Home() {
  return (
    <Layout>
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
        <GreenRoundButton>質問に回答して料理を生成→</GreenRoundButton>
      </div>
      <p className="text-black">とりあえずいろんなコンポーネント適当に表示してます</p>
      <RecipeCard
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
        and only contains 5 ingredients!"
        width="300px"
        height="450px" />
      <br></br>
      <SocialMediaButton>SNSでシェアする</SocialMediaButton>
      <br></br>
      <WhiteQuadButton>新規登録</WhiteQuadButton>
      <br></br>
      <WhiteRoundButton>戻る</WhiteRoundButton>
      <BlackRoundButton>次へ</BlackRoundButton>
      <BlackRoundButton>完成</BlackRoundButton>
      <br></br>
      <CheckList />
      <Footer />
    </Layout>
  );
}

{/* <RecipeCard
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        width="300px"
        height="450px" /> */}