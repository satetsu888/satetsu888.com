import { projects } from "../data/projects";
import { ProjectItem } from "../components/ProjectItem";
import { CompactProjectItem } from "../components/CompactProjectItem";
import styles from "../styles/Projects.module.css";

const ARCHIVE_THRESHOLD = 2016;

export function Projects() {
  const recent = projects.filter((p) => p.year >= ARCHIVE_THRESHOLD);
  const archive = projects.filter((p) => p.year < ARCHIVE_THRESHOLD);

  return (
    <section>
      <h2>projects</h2>
      <ul className={styles.list}>
        {recent.map((p) => (
          <ProjectItem key={p.title} project={p} />
        ))}
      </ul>
      {archive.length > 0 ? (
        <div className={styles.archive}>
          <h3 className={styles.archiveHeading}>archive</h3>
          <ul className={styles.archiveList}>
            {archive.map((p) => (
              <CompactProjectItem key={p.title} project={p} />
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
