import React, { useState } from "react";
import { Input } from "@/components/ui/input";

type HeaderProps = {
  value: string | undefined;
  setValue: (value: string) => void;
};
export const Header = ({ value, setValue }: HeaderProps) => {
  return (
    <div className="bg-black shadow-md p-4 flex justify-center items-center">
      <Input
        type="text"
        className="w-1/2 px-4 py-2 border rounded focus:outline-none "
        placeholder="Search by product title, highlights, or price..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
