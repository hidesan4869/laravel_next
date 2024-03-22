import partnersData from "@/data/partners.json";
import Image from "next/image";

export default function Profile({ params }: any) {
  const data = partnersData.data.partners.data.find(
    (item) => item.id == params.id
  );

  if (!data) {
    return (
      <div className="max-w-6xl mx-auto space-y-10 mt-5 mb-10">
        Not found {JSON.stringify(data)}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-10 mt-5 mb-10">
      <div className="flex gap-2">
        <div>
          <Image
            src="https://placehold.jp/80/e3e3e3/ffffff/700x508.png?text=写真"
            alt=""
            width={700}
            height={508}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Image
            src="https://placehold.jp/80/e3e3e3/ffffff/500x250.png?text=写真"
            alt=""
            width={500}
            height={250}
            className="rounded-lg"
          />
          <Image
            src="https://placehold.jp/80/e3e3e3/ffffff/500x250.png?text=写真"
            alt=""
            width={500}
            height={250}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-10">
        <div className="col-span-7">
          <p>
            ##2007年 アニヴェルセル入社
            <br />
            ３年連続スペシャルプロデューサーに選ばれる
            <br />
            その後、ベストブライダルで支配人を務める
            <br />
            <br />
            2015年に箏奏者の妻と起業
            <br />
            業界歴16年 500組以上の結婚式を担当
            <br />
            <br />
            misonoさんなど芸能関係のプロデュース経験多数
            <br />
            電車・公民館・自宅・公園など式場以外の結婚式実績多数
            <br />
            <br />
            西武鉄道「52席の至福」・料亭濱田家など専属プロデュース
            <br />
            レストランや神社のコンサルティング
            <br />
            業界向けセミナー登壇
            <br />
            テレビや雑誌、ラジオ等メディアに多数掲載
            <br />
            <br />
            プロデュース実績
            <br />
            ◉電車：西武鉄道 ５２席の至福、都電荒川線
            <br />
            ◉レストラン：ひらまつレゼレヴ、センチュリーコート丸の内、プリミ・バチなど
            <br />
            ◉和婚：玄冶店濱田家、上野伊豆栄、人形町今半、今半別館、浅草茶寮一松、壺中庵など
            <br />
            ◉その他：山梨国立指定公園、福祉会館、進修館、麗澤大学、古民家、ご自宅、東京メディアセンター、港の灯りなど
            <br />
            ◉神社：金王八幡宮、日枝神社、鳩の森八幡宮、森戸神社、七社神社、浅草神社、石神井神社など
            <br />
            その他多数
            <br />
            <br />
            ＜得意なウェディング＞
            <br />
            ・人前式（1番こだわってます）
            <br />
            ・和婚（人前式/神前式/仏前式のプロデュース経験あり）
            <br />
            　オリジナル和装人前式「和奏婚」が1番人気です
          </p>
        </div>
        <div className="col-span-3">
          <div className="sticky top-5 border rounded-lg p-5">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <Image
                  src={data.profile_image}
                  alt={data.name}
                  width={100}
                  height={100}
                  quality={100}
                  className="rounded-full overflow-hidden"
                />
              </div>
              <div className="items-center flex col-span-2">
                <div>
                  <p className="font-bold">{data.name}</p>
                  <p className="text-sm">{data.type}</p>
                  <div className="flex space-x-2">
                    <p>★★★★★ {data.rating.average}</p>
                    <p>({data.rating.count})</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-4">
              <div>
                <p className="text-sm">{data.quote}</p>
              </div>
              <div>
                {data.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
