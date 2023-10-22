import s from "./Aside.module.css";
import Time from "../Time/Time";
import { useState } from "react";
import { Link } from "react-router-dom";

function Aside() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("There is an error in the component tree");
  }

  return (
    <div className={s.wrapper}>
      <div>
        <h1 className={s.fullName}>Samuel Tuinperi</h1>
        <p className={s.role}>Student at AltSchool</p>
        <p className={s.description}>
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
      </div>
      <div className={s.nav}>
        <Link
          to="/repositories"
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <div className={s.flex}>
            <div className={s.line}></div> <p>ALL REPOSITORIES</p>
          </div>
        </Link>
        <div className={s.flex} onClick={() => setHasError(true)}>
          <div className={s.line}></div> <p> TEST ERROR BOUNDARY</p>
        </div>

        <div className={s.flex}>
          <div className={s.line}></div>{" "}
          <Link
            to="/ddklslsllsk"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <p>404 PAGE</p>
          </Link>
        </div>
      </div>
      <Time />
    </div>
  );
}

export default Aside;
