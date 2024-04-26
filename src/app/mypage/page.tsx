import SettingsAccountBar from "@/components/ui/buttun/SettingsAccountBar";
import SettingsHistoryBar from "@/components/ui/buttun/SettingsHistoryBar";
import Link from "next/link";

export default function MyPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">マイページ</h1>
            </div>
            <SettingsAccountBar />
            <Link href="/mypage/history">
                <SettingsHistoryBar />
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