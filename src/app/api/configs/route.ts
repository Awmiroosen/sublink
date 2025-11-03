import { NextResponse } from "next/server";
export const GET = async () => {
  const url =
    "https://raw.githubusercontent.com/Awmiroosen/awmirx-v2ray/main/blob/main/v2-sub.txt";

  const getConfigs = await fetch(url, { next: { revalidate: 3600 } });
  const res = await getConfigs.text();
  const data = res
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

  return NextResponse.json(data);
};
