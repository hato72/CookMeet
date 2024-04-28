import SocialMediaButton from "@/components/ui/buttun/SocialMediaButton";
import Link from "next/link";

export default function MyPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">マイページ</h1>
            </div>
            <Link href="/mypage/settings">
                <SocialMediaButton>アカウント設定</SocialMediaButton>
            </Link>
            <Link href="/mypage/history">
                <SocialMediaButton>調理履歴</SocialMediaButton>
            </Link>
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