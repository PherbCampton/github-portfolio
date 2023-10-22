import RepoCards from "../components/RepoCards/RepoCards";
import { useFetch } from "../hooks/useFetch";

function Repositories() {
  const { repos, error } = useFetch();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>
        All Repositories
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <RepoCards repos={repos} error={error} />
      </div>
    </div>
  );
}

export default Repositories;
