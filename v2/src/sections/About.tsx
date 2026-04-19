import { profile } from "../data/profile";

export function About() {
  return (
    <section>
      <h2>about</h2>
      <p>
        a web developer — mostly backend, with some frontend and infra on
        the side.
      </p>
      <p>
        outside of that i build whatever catches my attention — small tools,
        weird toys, half-serious experiments. most never see the light of
        day; the ones that did are listed below.
      </p>
      <p className="interests">interests: {profile.interests.join(", ")}.</p>
    </section>
  );
}
