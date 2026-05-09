import type { ReactNode } from "react";

export type SocialLink = {
  name: string;
  label: string;
  url: string;
};

export type TechTagId =
  | "javascript"
  | "typescript"
  | "react"
  | "vuejs"
  | "webpack"
  | "npm"
  | "electron"
  | "python"
  | "flask"
  | "swagger"
  | "kubernetes"
  | "go"
  | "docker"
  | "tauri"
  | "rust"
  | "webassembly"
  | "websocket"
  | "ruby"
  | "rails"
  | "chef"
  | "perl"
  | "mysql"
  | "postgresql"
  | "heroku"
  | "mojolicious"
  | "memcached"
  | "travisci"
  | "objectivec"
  | "karma"
  | "chromeext"
  | "vscodeext"
  | "bitcoin"
  | "googleanalytics";

export type Project = {
  title: string;
  year: number;
  description: string | ReactNode;
  url?: string;
  codeUrl?: string;
  tech: TechTagId[];
};

export type Profile = {
  name: string;
  iconUrl: string;
  bio: string;
  interests: string[];
  links: SocialLink[];
};
