import { TECH_META } from "../data/tech";
import type { TechTagId } from "../data/types";

type Props = { id: TechTagId };

export function TechTag({ id }: Props) {
  const meta = TECH_META[id];
  const Icon = meta.Icon;
  return (
    <span className="tech-tag">
      {Icon ? <Icon aria-hidden className="tech-tag__icon" /> : null}
      <span>{meta.label}</span>
    </span>
  );
}
