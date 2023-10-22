import { useParams } from "react-router-dom";
import { useToCapitalize } from "../hooks/useToCapitalize";
import { useFetch } from "./../hooks/useFetch";
import Loader from "./../components/Loader/Loader";
import NotFound from "./NotFound";

function RepoDetail() {
  const { repos } = useFetch();
  const { toCapitalize } = useToCapitalize();
  const { repo } = useParams();

  if (!repos) return <Loader />;

  if (repos) {
    const current = repos.find((rep) => rep.name === repo);

    if (current) {
      return (
        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "40px" }}> {toCapitalize(current.name)}</h1>
          <p>
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Description:{" "}
            </h4>
            {current.description}
          </p>
          <p>
            <a target="blank" href={current.html_url}>
              GitHub Link
            </a>{" "}
            |{" "}
            <a target="blank" href={current.homepage}>
              Deployed Link
            </a>
          </p>
          <p>
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Starred:
            </h4>{" "}
            {current.stargazers_count}
          </p>
          <p>
            {" "}
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Default Branch:
            </h4>{" "}
            {toCapitalize(current.default_branch)}
          </p>
          <p>
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Languages:
            </h4>{" "}
            {current.topics.join(", ")}
          </p>
          <p>
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Date created:
            </h4>{" "}
            {current.created_at.slice(0, 10)}
          </p>
          <p>
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Last Updated:
            </h4>{" "}
            {current.updated_at.slice(0, 10)}
          </p>
          <p className="">
            <h4 style={{ display: "inline", opacity: "1", color: "#fff" }}>
              Repository Size:
            </h4>{" "}
            {`${current.size} kilobytes`}
          </p>
        </div>
      );
    } else {
      return <NotFound />;
    }
  }
}

export default RepoDetail;
