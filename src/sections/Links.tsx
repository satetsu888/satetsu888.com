import { profile } from "../data/profile";
import { ExternalLink } from "../components/ExternalLink";

export function Links() {
  return (
    <section>
      <h2>links</h2>
      <p className="link-row">
        {profile.links.map((link, i) => (
          <span key={link.name}>
            <ExternalLink href={link.url}>{link.label}</ExternalLink>
            {i < profile.links.length - 1 ? (
              <span className="sep"> · </span>
            ) : null}
          </span>
        ))}
      </p>
    </section>
  );
}
