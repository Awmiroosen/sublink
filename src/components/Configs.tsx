"use client";

import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import Modal from "@/components/ui/modal";

const Configs = () => {
  const [confs, setConfs] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/configs/")
      .then((res) => res.json())
      .then((data) => setConfs(data))
      .finally(() => setLoading(false));
  }, []);

  const showModal = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  };
  const copyAll = () => {
    navigator.clipboard.writeText(confs.join("\n"));
    showModal("All configs Copied!");
  };

  const copyToClipboard = (item: string) => {
    navigator.clipboard.writeText(item);
    showModal("config Copied!");
  };
  return (
    <>
      {loading ? (
        <h4 className="text-sm">Loading Configs ...</h4>
      ) : (
        <>
          <button
            onClick={copyAll}
            className="flex items-center border-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-900 cursor-pointer"
          >
            <BiCopy className="w-8" /> Copy All
          </button>

          {confs.map((item, index) => (
            <button
              key={index}
              onClick={() => copyToClipboard(item)}
              className="p-1 min-h-12 flex justify-center items-center text-xs cursor-pointer border-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-800 dark:hover:bg-zinc-900"
            >
              config - {index + 1}
            </button>
          ))}
        </>
      )}

      <Modal message={message} visible={visible} />
    </>
  );
};

export default Configs;
