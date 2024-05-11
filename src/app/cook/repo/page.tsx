import RecipeCard from "@/components/base/meal/Meal";
import GreenRoundButton from "@/components/ui/buttun/GreenRoundButtun";
import WhiteRoundButton from "@/components/ui/buttun/WhiteRoundButton copy";
import Link from "next/link";

export default function MyPage() {
    // 左側に調理記録、右側にSNSでシェアボタンとマイページへボタン
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">生成結果</h1>
            </div>

            <div className="flex-1 pr-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">調理記録</h1>
                <RecipeCard
                    img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    title="The Everyday Salad"
                    description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
                    width="300px"
                    height="450px"
                    url="https://recipe.rakuten.co.jp/recipe/1900015892/" 
                />
                <div className="TextWrapper px-6 pt-6 pb-4 left-[137px] top-[558px] absolute bg-orange-50 rounded-bl-3xl rounded-br-3xl border border-stone-800/opacity-20 flex-col justify-start items-start gap-[54px] inline-flex">
                    <div className="Copy flex-col justify-start items-start gap-3 flex">
                        <div className="Header3 w-[379px] text-stone-800 text-2xl font-bold font-['Montserrat'] leading-[28.80px]">Savory Herb-Infused Chicken</div>
                        <div className="Paragraph2 w-[379px] text-stone-800 text-base font-light font-['Roboto'] leading-snug tracking-tight">Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</div>
                    </div>
                    <div className="InfoWrapper self-stretch justify-between items-center inline-flex">
                        <div className="Text text-stone-800 text-xs font-medium font-['Roboto'] uppercase leading-[14.40px] tracking-tight">40 Min - easy prep - 3 serves</div>
                        <div className="Button px-6 py-3 rounded-3xl border border-stone-800 justify-center items-center gap-2.5 flex">
                            <div className="Text text-stone-800 text-sm font-medium font-['Roboto'] uppercase leading-[14px]">レシピを見る</div>
                        </div>
                    </div>
                </div>
                
                {/* コメント */}
                <div className=" w-[327px] h-[39px] left-[147px] top-[867px] absolute text-black text-lg font-normal font-['Roboto']">コメント</div>
                <div className="Rectangle7 w-[427px] h-[61px] left-[137px] top-[894px] absolute bg-white border border-stone-300" />
                <div className="2 left-[161px] top-[914px] absolute text-black text-lg font-normal font-['Roboto']">手順2がすごく大変だった</div>

            </div>
            {/* ボタン */}
            <div className="flex flex-col justify-start items-center">
                <WhiteRoundButton>SNSでシェア</WhiteRoundButton>
                <Link href="/mypage">
                    <GreenRoundButton>マイページへ</GreenRoundButton>
                </Link>
            </div>
        </>
    );
}