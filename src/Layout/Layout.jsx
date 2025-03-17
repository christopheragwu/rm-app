import AppRoutes from "./AppRoutes";
import Aside from "./Aside";
import Content from "./Content";
import SideNav from "./SideNav";
import HeaderBanner from "./HeaderBanner";
import styles from "./Layout.module.css";
import styles from "./Aside.module.css";
import styles from "./Content.module.css";
import styles from "./HeaderBanner.module.css";

const Layout = () => {
  return (
    <section className={styles.Layout}>
      <header>
        <HeaderBanner></HeaderBanner>
        <nav className={styles.Content}>
          <SideNav />
        </nav>
      </header>
      <main>
        <Content>
          <AppRoutes />
        </Content>
      </main>
      <aside>
        <Aside />
      </aside>
      <footer></footer>
    </section>
  );
};

export default Layout;
