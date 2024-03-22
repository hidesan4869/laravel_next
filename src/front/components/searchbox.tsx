"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import searchData from "@/data/search.json";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SearchBox() {
  return (
    <div className="border p-3 rounded-lg grid grid-cols-7 gap-6">
      <div className="space-y-2">
        <Label>地域</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {searchData.data.prefs.data.map((pref) => (
              <SelectItem key={pref.id} value={pref.slug}>
                {pref.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>性別</Label>
        <form className="flex space-x-5 items-center">
          {searchData.data.sex.data.map((sex) => (
            <div key={sex.id} className="space-x-2 my-1.5">
              <input type="radio" id={sex.name} name="sex" value={sex.name} />
              <label htmlFor={sex.name}>{sex.name}</label>
            </div>
          ))}
        </form>
      </div>
      <div className="space-y-2">
        <Label>サポーター</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {searchData.data.partner_types.data.map((partner) => (
              <SelectItem key={partner.id} value={partner.name}>
                {partner.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>価格</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {searchData.data.price.data.map((price) => (
              <SelectItem key={price.id} value={price.name}>
                {price.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>コンセプト</Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {searchData.data.concepts.data.map((concepts) => (
              <SelectItem key={concepts.id} value={concepts.name}>
                {concepts.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>キーワード</Label>
        <Input type="text" placeholder="キーワード入力" />
      </div>
      <div className="flex">
        <Button className="w-full mt-auto" asChild><Link href="/search">検索</Link></Button>
      </div>
    </div>
  );
}
