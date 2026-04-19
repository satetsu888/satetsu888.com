import type { Project } from "../data/types";
import { ExternalLink } from "./ExternalLink";
import styles from "../styles/Projects.module.css";

type Props = { project: Project };

export function CompactProjectItem({ project }: Props) {
  return (
    <li className={styles.compactItem}>
      <span className={styles.compactYear}>{project.year}</span>
      <span className={styles.compactTitle}>{project.title}</span>
      <span className={styles.compactActions}>
        {project.url ? (
          <ExternalLink href={project.url} className={styles.compactAction}>
            view
          </ExternalLink>
        ) : null}
        {project.codeUrl ? (
          <ExternalLink href={project.codeUrl} className={styles.compactAction}>
            code
          </ExternalLink>
        ) : null}
      </span>
    </li>
  );
}
