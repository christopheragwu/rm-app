import styles from "./Layout.module.css";
import bannerImage from "../assets/Ad-Banner-img.png";

const HeaderBanner = () => {
  return (
    <div className={styles.headerBanner}>
      <img src={bannerImage} alt="" />
    </div>
  );
};

export default HeaderBanner;
