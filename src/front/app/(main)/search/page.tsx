import SearchBox from "@/components/searchbox";
import ProfileItem from "@/components/profile-item";
import partnersData from "@/data/partners.json";

export default function Search() {
  return (
    <div className="max-w-6xl mx-auto space-y-5 mt-5 mb-10">
      <div>
        <SearchBox />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {partnersData.data.partners.data.map((partner, index) => (
          <ProfileItem key={index} data={partner} />
        ))}
      </div>
    </div>
  );
}
