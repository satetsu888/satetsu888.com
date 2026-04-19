import { ExternalLink } from "../components/ExternalLink";

export function Colophon() {
  return (
    <footer className="colophon">
      <p>
        built with react, vite, instrument serif. previous version (vue 1, 2016)
        archived on{" "}
        <ExternalLink href="https://github.com/satetsu888/satetsu888.com">
          github
        </ExternalLink>
        .
      </p>
      <p>last updated 2026-04.</p>
    </footer>
  );
}
