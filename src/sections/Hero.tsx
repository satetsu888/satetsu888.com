import { profile } from "../data/profile";
import styles from "../styles/Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={profile.iconUrl}
        alt=""
        className={styles.avatar}
        width={48}
        height={48}
      />
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.bio}>{profile.bio}</p>
    </section>
  );
}
