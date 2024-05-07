import RecipeCard from "@/components/base/meal/Meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import Link from "next/link";

export default function MyPage() {
    // 左側に調理記録、右側にSNSでシェアボタンとマイページへボタン
    return (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-row">
            {/* 調理記録 */}
            <div className="flex-1 pr-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">調理記録</h1>
                <RecipeCard
                    img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    title="The Everyday Salad"
                    description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
                    width="300px"
                    height="450px"
                    url="https://recipe.rakuten.co.jp/recipe/1900015892/" />
            </div>
            {/* ボタン */}
            <div className="flex flex-col justify-start items-center">
                <WhiteRoundButton>SNSでシェア</WhiteRoundButton>
                <Link href="/mypage">
                    <GreenRoundButton>マイページへ</GreenRoundButton>
                </Link>
            </div>
        </div>
    );
}