import "../styles/HomeContent.css";

function HomeContent() {
  return (
    <div className="Content">
      <h1 className="slogan">
        Aprenda a programar <span className="yellowEmphasis">rápido</span>
      </h1>

      <p className="description">
        <span className="redEmphasis">Miragem</span> é uma forma de você decolar
        sua carreira na programação de maneira divertida.
      </p>

      <div className="buttons">
        <a
          href="https://github.com/miragem-tech"
          className="invisible-anchor"
          target="_blank"
        >
          <button className="get-started">Começar -&gt;</button>
        </a>
        <button className="github">
          <img src="src/assets/github.svg" />
          <p className="github-name">Github</p>
        </button>
      </div>
    </div>
  );
}

export default HomeContent;
