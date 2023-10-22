import RepoCard from "../RepoCard/RepoCard";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function RepoCards({ repos, error, more = false }) {
  let repositories;

  if (error) {
    console.log(`Error: ${error.message}`);
    return <Loader />;
  }
  if (!repos) return <Loader />;

  if (repos) {
    repositories = repos.map((repo) => {
      return <RepoCard key={repo.id} repo={repo} />;
    });
  }

  return (
    <>
      {repositories}
      {more && (
        <Link
          to="/repositories"
          style={{
            color: "inherit",
            textDecoration: "inherit",
            transition: " ease-in 300ms",
          }}
        >
          <p className="">View more...</p>
        </Link>
      )}
    </>
  );
}

export default RepoCards;
