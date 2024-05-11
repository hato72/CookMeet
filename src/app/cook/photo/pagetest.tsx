import React from 'react'
import Head from 'next/head'

const Frame1 = (props) => {
  return (
    <>
      <div className="frame1-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="frame1-frame">
          <div className="frame1-navigation">
            <span className="frame1-text">
              <span>CookMeet</span>
            </span>
            <span className="frame1-text02">
              <span>利用規約</span>
            </span>
            <span className="frame1-text04">
              <span>ホーム</span>
            </span>
            <span className="frame1-text06">
              <span>ニュース</span>
            </span>
            <span className="frame1-text08">
              <span>私たちについて</span>
            </span>
            <img
              src="/external/rectangle96046-6eoe-200h.png"
              alt="Rectangle96046"
              className="frame1-rectangle9"
            />
            <div className="frame1-group1">
              <span className="frame1-text10">
                <span>ログイン</span>
              </span>
            </div>
            <div className="frame1-usercirclesinglecirclegeometrichumanpersonsingleus">
              <img
                src="/external/vector6046-vy7n.svg"
                alt="Vector6046"
                className="frame1-vector"
              />
              <img
                src="/external/vector26046-09z.svg"
                alt="Vector26046"
                className="frame1-vector2"
              />
              <img
                src="/external/vector36046-fc1u.svg"
                alt="Vector36046"
                className="frame1-vector3"
              />
            </div>
          </div>
          <div className="frame1-frame1726">
            <button className="frame1-button">
              <div className="frame1-frame810">
                <span className="frame1-text12"></span>
              </div>
            </button>
          </div>
          <div className="frame1-text-wrapper">
            <div className="frame1-copy">
              <span className="frame1-text13 Header3">
                <span>Savory Herb-Infused Chicken</span>
              </span>
              <span className="frame1-text15 Paragraph2">
                <span>
                  Indulge in the rich and savory symphony of flavors with our
                  Savory Herb-Infused Chicken
                </span>
              </span>
            </div>
            <div className="frame1-info-wrapper">
              <span className="frame1-text17 SmallText">
                <span>40 Min - easy prep - 3 serves</span>
              </span>
              <button className="frame1-button1">
                <span className="frame1-text19">
                  <span>レシピを見る</span>
                </span>
              </button>
            </div>
          </div>
          <img
            src="/external/rectangle76046-b718-200h.png"
            alt="Rectangle76046"
            className="frame1-rectangle7"
          />
          <span className="frame1-text21">
            <span>手順2がすごく大変だった</span>
          </span>
          <img
            src="/external/recipeimage6046-d5gg-300h.png"
            alt="RecipeImage6046"
            className="frame1-recipe-image"
          />
          <span className="frame1-text23">
            <span>調理日: 2024年3月16日17:45~18:30</span>
          </span>
          <span className="frame1-text25">
            <span>コメント</span>
          </span>
          <div className="frame1-frame1">
            <div className="frame1-pageheading">
              <span className="frame1-text27">
                <span>調理記録</span>
              </span>
              <img
                src="/external/divider6046-yytf.svg"
                alt="Divider6046"
                className="frame1-divider"
              />
            </div>
          </div>
          <div className="frame1-sns">
            <span className="frame1-text29">
              <span>マイページへ</span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .frame1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .frame1-frame {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .frame1-navigation {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 112px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .frame1-text {
            top: 41px;
            left: 96px;
            color: rgba(66, 107, 31, 1);
            width: 388px;
            height: auto;
            position: absolute;
            font-size: 64px;
            font-style: Medium;
            text-align: left;
            font-family: Newsreader;
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text02 {
            top: 56.5px;
            left: 746px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text04 {
            top: 57px;
            left: 605px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text06 {
            top: 57px;
            left: 905px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text08 {
            top: 57px;
            left: 1063px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 24px;
            font-style: Regular;
            text-align: center;
            font-family: Inter;
            font-weight: 400;
            line-height: 129.99999523162842%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-rectangle9 {
            top: 40px;
            left: 1264px;
            width: 129px;
            height: 54px;
            position: absolute;
          }
          .frame1-group1 {
            top: 58px;
            left: 1317px;
            width: 72px;
            height: 21px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1-text10 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-usercirclesinglecirclegeometrichumanpersonsingleus {
            top: 47px;
            left: 1272px;
            width: 39px;
            height: 39px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .frame1-vector {
            top: 7.5px;
            left: 12px;
            width: 15px;
            height: 15px;
            position: absolute;
          }
          .frame1-vector2 {
            top: 27.00402069091797px;
            left: 6.689939975738525px;
            width: 26px;
            height: 7px;
            position: absolute;
          }
          .frame1-vector3 {
            top: 0px;
            left: 0px;
            width: 39px;
            height: 39px;
            position: absolute;
          }
          .frame1-frame1726 {
            gap: 8px;
            top: 905px;
            left: 406px;
            width: 28px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: flex-end;
          }
          .frame1-button {
            display: flex;
            padding: 10px;
            align-items: center;
            border-radius: 100000px;
          }
          .frame1-frame810 {
            display: flex;
            padding: 0 4px;
            align-items: center;
          }
          .frame1-text12 {
            color: var(--dl-color-grey-1000);
            height: auto;
            font-size: 64px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text-wrapper {
            gap: 54px;
            top: 558px;
            left: 137px;
            width: 427px;
            display: flex;
            padding: 24px 24px 16px;
            position: absolute;
            align-items: flex-start;
            border-color: rgba(38, 37, 34, 0.1599999964237213);
            border-style: solid;
            border-width: 1px;
            border-radius: 0 0 24px 24px;
            flex-direction: column;
            background-color: var(--dl-color-default-light);
          }
          .frame1-copy {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .frame1-text13 {
            color: var(--dl-color-default-dark);
            width: 379px;
            height: auto;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .frame1-text15 {
            color: var(--dl-color-default-dark);
            width: 379px;
            height: auto;
            text-align: left;
            line-height: 139.9999976158142%;
          }
          .frame1-info-wrapper {
            gap: 102px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .frame1-text17 {
            color: var(--dl-color-default-dark);
            height: auto;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .frame1-button1 {
            gap: 10px;
            display: flex;
            padding: 12px 24px;
            align-items: center;
            border-color: rgba(38, 37, 34, 1);
            border-style: solid;
            border-width: 1px;
            border-radius: 24px;
            justify-content: center;
          }
          .frame1-text19 {
            color: var(--dl-color-default-dark);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Roboto;
            font-weight: 500;
            line-height: 100%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-rectangle7 {
            top: 894px;
            left: 137px;
            width: 427px;
            height: 61px;
            position: absolute;
            border-color: rgba(193, 186, 186, 1);
            border-style: solid;
            border-width: 1px;
          }
          .frame1-text21 {
            top: 914px;
            left: 161px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-recipe-image {
            top: 324px;
            left: 137px;
            width: 427px;
            height: 234px;
            position: absolute;
            border-radius: 24px 24px 0 0;
          }
          .frame1-text23 {
            top: 796px;
            left: 147px;
            color: rgba(0, 0, 0, 1);
            width: 327px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-text25 {
            top: 867px;
            left: 147px;
            color: rgba(0, 0, 0, 1);
            width: 327px;
            height: auto;
            position: absolute;
            font-size: 18px;
            font-style: Regular;
            text-align: left;
            font-family: Roboto;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-frame1 {
            top: 112px;
            left: 0px;
            width: 1440px;
            height: 149px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .frame1-pageheading {
            top: 0px;
            left: 0px;
            width: 1440px;
            height: 149px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .frame1-text27 {
            top: 56px;
            left: 97px;
            color: rgba(0, 0, 0, 1);
            height: auto;
            position: absolute;
            font-size: 64px;
            font-style: Regular;
            text-align: left;
            font-family: Newsreader;
            font-weight: 400;
            line-height: 120.00000476837158%;
            font-stretch: normal;
            text-decoration: none;
          }
          .frame1-divider {
            top: 149px;
            left: 96px;
            width: 1248px;
            height: 1px;
            position: absolute;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          .frame1-sns {
            gap: 52.000003814697266px;
            top: 639px;
            left: 778px;
            width: 447px;
            height: 114.4000015258789px;
            display: flex;
            padding: 7.800000190734863px 58.500003814697266px
              7.800000190734863px 26.000001907348633px;
            position: absolute;
            box-shadow: 0px 18.200000762939453px 31.200000762939453px 0px
              rgba(0, 0, 0, 0.20000000298023224);
            align-items: center;
            flex-shrink: 0;
            border-radius: 999px;
            justify-content: center;
            background-color: rgba(66, 107, 31, 1);
          }
          .frame1-text29 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 31.200000762939453px;
            font-style: Regular;
            text-align: center;
            font-family: Poppins;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Frame1