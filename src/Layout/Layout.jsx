import AppRoutes from "./AppRoutes";

import Aside from "./Aside";
import Content from "./Content";
import SideNav from "./SideNav";
import AboutAndSettings from "./AboutAndSettings";
import HeaderBanner from "./HeaderBanner";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={styles.gridContainer}>
      <header className={styles.headerBanner}>
        <HeaderBanner></HeaderBanner>
      </header>
      <div className={styles.sideNav}>
        <SideNav></SideNav>
      </div>

      <main className={styles.content} bg-white>
        <Content>
          <AppRoutes />
        </Content>
      </main>

      <aside className={styles.aside}>
        <Aside></Aside>
      </aside>
      <AboutAndSettings></AboutAndSettings>
    </section>
  );
};

export default Layout;
