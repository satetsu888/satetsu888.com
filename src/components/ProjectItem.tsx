import type { Project } from "../data/types";
import { ExternalLink } from "./ExternalLink";
import { TechTag } from "./TechTag";
import styles from "../styles/Projects.module.css";

type Props = { project: Project };

export function ProjectItem({ project }: Props) {
  return (
    <li className={styles.item}>
      <div className={styles.head}>
        <span className={styles.year}>{project.year}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.actions}>
          {project.url ? (
            <ExternalLink href={project.url} className={styles.action}>
              view
            </ExternalLink>
          ) : null}
          {project.codeUrl ? (
            <ExternalLink href={project.codeUrl} className={styles.action}>
              code
            </ExternalLink>
          ) : null}
        </span>
      </div>
      <p className={styles.desc}>{project.description}</p>
      <ul className={styles.tags}>
        {project.tech.map((t) => (
          <li key={t}>
            <TechTag id={t} />
          </li>
        ))}
      </ul>
    </li>
  );
}
