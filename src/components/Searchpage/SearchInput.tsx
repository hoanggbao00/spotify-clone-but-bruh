import { useState } from "react";
import { Input } from "../ui/input";

interface SearchInputProps {
  value?: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({value,onChange}) => {

  return ( 
    <div>
      <Input
      className="rounded-md border-none bg-neutral-700 outline-none focus-visible:none text-l" placeholder="What do you want to listen to ?"
      value={value}
      onChange={(e) => onChange(e)}/>
    </div>
   );
}
 
export default SearchInput;