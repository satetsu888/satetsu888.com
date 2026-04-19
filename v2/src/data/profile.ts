import type { Profile } from "./types";

export const profile: Profile = {
  name: "satetsu888",
  iconUrl: "/me.jpg",
  bio: "loves pepsi",
  interests: ["ai agent", "slay the spire", "wearable", "bitcoin"],
  links: [
    { name: "x", label: "X", url: "https://x.com/satetsu888" },
    { name: "github", label: "GitHub", url: "https://github.com/satetsu888" },
    { name: "zenn", label: "Zenn", url: "https://zenn.dev/satetsu888" },
    { name: "qiita", label: "Qiita", url: "https://qiita.com/satetsu888" },
    { name: "medium", label: "Medium", url: "https://medium.com/@satetsu888" },
    {
      name: "mixi",
      label: "mixi",
      url: "https://mixi.jp/show_profile.pl?id=4967581",
    },
    {
      name: "buymeacoffee",
      label: "Buy Me a Coffee",
      url: "https://buymeacoffee.com/satetsu888",
    },
  ],
};
