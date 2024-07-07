import style from "./Home.module.css";

import Header from "../../component/header/Header.jsx";
import Banner from "../../component/banner/Banner.jsx";
import Promo from "../../component/promo/Promo.jsx";
import Categories from "../../component/categories/Categories.jsx";
import About from "../../component/about/About.jsx";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className={style.main}>
        <Banner />
        <Promo />
        <Categories />
      </main>

      <footer className={style.footer}>
        <About />
      </footer>
    </>
  );
}
