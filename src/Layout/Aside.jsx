import styles from "./Layout.module.css";
import AsideElements from "../Components/Aside Components/AsideElements";

const Aside = () => {
  return (
    <div className={styles.aside}>
      <AsideElements></AsideElements>
    </div>
  );
};

export default Aside;
