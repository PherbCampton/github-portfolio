import s from "./RepoCard.module.css";
import { Link, useLocation } from "react-router-dom";
import { useToCapitalize } from "../../hooks/useToCapitalize";

function RepoCard({ repo }) {
  const { toCapitalize } = useToCapitalize();
  const { pathname } = useLocation();
  let path;

  if (pathname === "/") {
    path = `repositories/${repo.name}`;
  } else if (pathname === "/repositories") {
    path = repo.name;
  }

  return (
    <Link
      style={{
        color: "inherit",
        textDecoration: "inherit",
        transition: " ease-in 300ms",
      }}
      to={path}
    >
      <div className={s.wrapper}>
        <div className={s.repoCard}>
          <p className={s.repoName}>{toCapitalize(repo.name)}</p>
          <p className={s.language}>
            Langauge: {repo.language === null ? "React" : repo.language}
          </p>
          <p className={s.date}>Date Created: {repo.created_at.slice(0, 10)}</p>
          <p className={s.visibility}>Visibility: {repo.visibility}</p>
        </div>
      </div>
    </Link>
  );
}

export default RepoCard;
