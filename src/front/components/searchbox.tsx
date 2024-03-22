"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import searchData from "@/data/search.json";

export default function SearchBox() {
  return (
    <div className="my-5">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="地域" />
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
  );
}
