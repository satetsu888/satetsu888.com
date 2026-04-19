import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Payment Clock",
    year: 2026,
    description:
      "desktop app that turns stripe test clock operations into a visual timeline.",
    url: "https://satetsu888.github.io/payment-clock/",
    codeUrl: "https://github.com/satetsu888/payment-clock",
    tech: ["tauri", "react", "rust"],
  },
  {
    title: "AgenTrace",
    year: 2026,
    description:
      "service for sharing claude code sessions and managing implementation plans with your team.",
    url: "https://satetsu888.github.io/agentrace",
    codeUrl: "https://github.com/satetsu888/agentrace",
    tech: ["go", "typescript", "docker"],
  },
  {
    title: "tanuki-kokeshi",
    year: 2025,
    description:
      "japanese word-puzzle cipher. encodes and decodes text via phonetic substitution rules, powered by a rust webassembly pathfinder.",
    url: "https://satetsu888.github.io/tanuki-kokeshi/",
    codeUrl: "https://github.com/satetsu888/tanuki-kokeshi",
    tech: ["typescript", "rust", "webassembly"],
  },
  {
    title: "Simple OAuth2 Client",
    year: 2023,
    description:
      "chrome extension that runs the full oauth2 authorization code flow (pkce supported) for quick dev-time token acquisition.",
    url: "https://chromewebstore.google.com/detail/simple-oauth2-client/bmcbmjlmbpndabffoeejkfaknnknioej",
    codeUrl: "https://github.com/satetsu888/simple-oauth2-client-extension",
    tech: ["typescript", "chromeext"],
  },
  {
    title: "VTS-chameleon",
    year: 2022,
    description: "tint color plugin for VTube Studio.",
    url: "https://satetsu888.github.io/vts-chameleon/",
    tech: ["typescript", "react", "electron"],
  },
  {
    title: "microzeny",
    year: 2017,
    description: "micropayment service for cryptocurrency BitZeny.",
    tech: ["python", "flask", "swagger", "kubernetes"],
  },
  {
    title: "kyash-button",
    year: 2017,
    description: "button widget to send Kyash.",
    url: "https://satetsu888.github.io/kyash-button/",
    codeUrl: "https://github.com/satetsu888/kyash-button",
    tech: ["javascript", "webpack"],
  },
  {
    title: "vue-resettable",
    year: 2015,
    description: "resettable component for vue.js.",
    url: "https://www.npmjs.com/package/vue-resettable",
    codeUrl: "https://github.com/satetsu888/vue-resettable",
    tech: ["javascript", "vuejs", "webpack", "karma", "npm"],
  },
  {
    title: "freebitcoin-devil.tk",
    year: 2015,
    description: "bitcoin faucet for paytoshi and faucetBOX.",
    tech: ["rails", "heroku", "postgresql", "bitcoin", "googleanalytics"],
  },
  {
    title: "cookbook-github-users",
    year: 2013,
    description:
      "chef cookbook that creates linux users from github accounts and their dotfile repositories.",
    url: "https://supermarket.chef.io/cookbooks/github-users",
    codeUrl: "https://github.com/satetsu888/cookbook-github-users",
    tech: ["ruby", "chef"],
  },
  {
    title: "KIRAKIRA ango",
    year: 2013,
    description:
      "encryption / decryption of the KIRAKIRA ango — not real crypto, just a generated hash.",
    codeUrl: "https://github.com/satetsu888/KIRAKIRA",
    tech: [
      "perl",
      "mojolicious",
      "mysql",
      "memcached",
      "travisci",
      "objectivec",
    ],
  },
  {
    title: "mixiapp-search-extension",
    year: 2013,
    description:
      "opens mixi apps page from selected text or the clipboard.",
    url: "https://chrome.google.com/webstore/detail/mixiapp-search-extension/ebolbdfmhlngnmdfipnonlhlhgfijhbj",
    codeUrl: "https://github.com/satetsu888/mixiapp-search-extension",
    tech: ["javascript", "chromeext"],
  },
  {
    title: "hue-dynamic-query-params-extension",
    year: 2013,
    description: (
      <>
        chrome extension for <a href="https://gethue.com/">Hue</a> users.
        assigns query data into the form with one click.
      </>
    ),
    codeUrl: "https://github.com/satetsu888/hue-dynamic-query-params-extension",
    tech: ["javascript", "chromeext"],
  },
];
