"use client";

import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

const Configs = () => {
  const [confs, setConfs] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/configs/")
      .then((res) => res.json())
      .then((data) => setConfs(data));
  }, []);

  const copyToClipboard = (item: string) => {
    navigator.clipboard.writeText(item);
  };

  return (
    <>
      {confs.map((item, index) => (
        <button
          key={index}
          onClick={() => copyToClipboard(item)}
          className="p-1 min-h-12 flex justify-center items-center text-xs cursor-pointer bg-zinc-300 dark:bg-zinc-800"
        >
          config - {index}
        </button>
      ))}
    </>
  );
};

export default Configs;
