import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.banter_loader}>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
        <div className={s.banter_loader__box}></div>
      </div>
    </div>
  );
};

export default Loader;
