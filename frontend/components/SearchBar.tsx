// components/SearchBar.js
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div className="p-4">
      <Input placeholder="Search top beats" className="w-full max-w-md" />
    </div>
  );
}
