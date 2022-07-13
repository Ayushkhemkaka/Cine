import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <img
        src={process.env.PUBLIC_URL + "/movie-image1.png"}
        alt="movieImage"
        className={Styles.movieImage}
      />
      <span className={Styles.title} onClick={() => window.scroll(0, 0)}>
        CINE
      </span>
      <a
        href="https://adityatiwari810.github.io/adityaportfolio/"
        target="_blank"
        className={Styles.aditya}
      >
        ADITYA TIWARI
      </a>
    </div>
  );
};

export default Header;
