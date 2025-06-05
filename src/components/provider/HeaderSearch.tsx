import { Search } from "lucide-react";
import { useState } from "react";

export function HeaderSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex w-full max-w-[700px] items-center px-2 py-1 border-solid border-2  rounded-3xl text-black">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search your favourite products"
        className="flex-1 bg-transparent text-sm placeholder-slate-500 outline-none"
      />
      <div className="flex items-center bg-green-900 rounded-full w-9 h-9 px-2">
        <Search className="w-5 h-5 ml-auto text-white " />
      </div>
    </div>
  );
}
