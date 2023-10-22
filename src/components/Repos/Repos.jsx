import s from "./Repos.module.css";
import RepoCards from "../RepoCards/RepoCards";
import Socials from "../Socials/Socials";
import { useFetch } from "../../hooks/useFetch";

function Repos() {
  const { repos, error } = useFetch();
  let few;
  if (repos) {
    few = repos.slice(0, 5);
  }

  return (
    <>
      <div className={s.wrapper} style={{ position: "sticky", top: "0px" }}>
        <div style={{ marginBottom: "50px" }}>
          <p className={s.description}>
            Hello there! I’m a passionate developer with expertise in React.js,
            TypeScript, and Next.js. My journey in the world of web development
            began with a curiosity to craft digital experiences that captivate
            and innovate.
          </p>
          <p className={s.description}>
            In my career, I’ve had the privilege of working on projects that not
            only breathe life into pixels but also solve real-world problems.
            Whether it’s architecting complex web applications or optimizing
            performance, I’m dedicated to creating elegant, responsive, and
            accessible solutions that stand out in the digital landscape.
          </p>
          <p className={s.description}>
            When I’m not at the computer, I’m usually seeing a Sci-Fi movie,
            hanging out with my friends, or prolly just sitting around listening
            to some ambient Lo-Fi.
          </p>
        </div>
        <div className={s.flex}>
          <div className={s.line}></div> <h4>REPOSITORIES</h4>
        </div>
        <br />
        <RepoCards repos={few} error={error} more={true} />
        <Socials />
      </div>
    </>
  );
}

export default Repos;
