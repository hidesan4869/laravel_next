import Image from "next/image";
import SearchBox from "@/components/searchbox";
import ProfileItem from "@/components/profile-item";
import partnersData from "@/data/partners.json";

export default function Home() {
  return (
    <div className="space-y-5 mb-10">
      <div>
        <Image
          src="https://placehold.jp/80/e3e3e3/ffffff/1150x500.png?text=Main%20visual"
          alt="Main Visual"
          width={1150}
          height={500}
          quality={100}
        />
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <h2 className="font-bold text-xl mb-5">プロフィール一覧</h2>
        <div className="grid grid-cols-3 gap-10">
          {partnersData.data.partners.data.slice(0, 3).map((partner, index) => (
            <ProfileItem key={index} data={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
