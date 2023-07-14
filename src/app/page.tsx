"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const handleClick = async () => {
    const user = await fetch("/api/trpc/vbsdhbvjs").then((res) => res.json());
    console.log(user);
  };
  return (
    <div className="h-screen bg-slate-950 text-white flex justify-center items-center">
      <div>
        <button onClick={handleClick}>fetch</button>
      </div>
    </div>
  );
}
