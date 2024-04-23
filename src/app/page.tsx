import Image from "next/image";
import ResponsiveAppBar from "../components/base/Header/Header";
import RecipeCard from "@/components/base/meal/meal";

export default function Home() {
  return (
    <><ResponsiveAppBar />
    </>

  );
}

{/* <RecipeCard
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
        width="300px"
        height="450px" /> */}