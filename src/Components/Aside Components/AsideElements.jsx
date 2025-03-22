import styles from "./AsideElements.module.css";
import sermonSlideImage from "../../assets/Thursday.png";
const AsideElements = () => {
  return (
    <div>
      <div className={styles.asideSermonSlides}>
        <img src={sermonSlideImage} alt="" />
      </div>
      <div className={styles.asideServiceSlides}></div>
    </div>
  );
};

export default AsideElements;
