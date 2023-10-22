import styles from "../App.module.css";
import Aside from "../components/Aside/Aside";
import Repos from "../components/Repos/Repos";

function HomePage() {
  return (
    <>
      <div className={styles.wrapper}>
        <Aside />
        <Repos />
      </div>
    </>
  );
}

export default HomePage;
