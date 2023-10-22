import s from "./Aside.module.css";
import Time from "../Time/Time";

function Aside() {
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
        <div className={s.flex}>
          <div className={s.line}></div> <p>ABOUT</p>
        </div>
        <div className={s.flex}>
          <div className={s.line}></div> <p>REPOSITORIES</p>
        </div>
        <div className={s.flex}>
          <div className={s.line}></div> <p>TIC TAC TOE</p>
        </div>
      </div>
      <Time />
    </div>
  );
}

export default Aside;
