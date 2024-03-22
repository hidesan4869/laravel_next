import Image from "next/image";
import Link from "next/link";

export default function ProfileItem({ data }: any) {
  return (
    <Link href={`/profile/${data.id}`}>
        <div className="rounded-lg border p-4 hover:border-gray-300 duration-200">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Image
            src={data.profile_image}
            alt={data.name}
            width={150}
            height={150}
            quality={100}
            className="rounded-full overflow-hidden"
          />
        </div>
        <div className="items-center flex">
          <div>
            <p className="font-bold">{data.name}</p>
            <p className="text-sm">{data.type}</p>
            <div className="flex mt-2 space-x-2">
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
                <span key={index} className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded-full mr-2">
                    {tag}
                </span>
                
            ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
            {data.images.map((image: string, index: number) => (
                <Image
                    key={index}
                    src={image}
                    alt={data.name}
                    width={150}
                    height={150}
                    quality={100}
                    className="rounded-lg overflow-hidden"
                />
            
            ))}
        </div>
      </div>
    </div>
    </Link>
  );
}
