import Link from "next/link"
import Image from "next/image"

export default function ColumnItem({imageTitle, column}: any) {
    return (
        <Link href={`/${column === 'true' ? 'column' : 'report'}/1`}>
        <div className="border rounded-lg p-3 hover:border-gray-300 duration-200 space-y-2">
            <div>
                <Image src={`https://placehold.jp/30/e3e3e3/ffffff/500x300.png?text=${imageTitle}`} alt={column === 'true' ? 'コラム' : 'レポート'} width={500} height={300} />
            </div>
            <div className="space-y-1">
                <h3 className="font-bold text-xl">{column === 'true' ? 'コラム' : 'レポート'}タイトル</h3>
                <p className="text-sm">{column === 'true' ? 'コラム' : 'レポート'}の内容がここに入ります。</p>
            </div>
        </div>
        </Link>
    )
}