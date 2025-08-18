"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";
import { Button } from "./ui/button";

const SearchFormReset = () => {
  const { replace } = useRouter(); //progrematically redirect
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    form.reset();
    replace("/");
  };

  return (
    <Button type="reset" onClick={reset} className="search-btn text-white">
      <X />
    </Button>
  );
};

export default SearchFormReset;
