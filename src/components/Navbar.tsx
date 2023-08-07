import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-items">
        <img
          src="https://raw.githubusercontent.com/miragem-tech/assets/f99cd9f5ad73f6ab29cf26088d1e4b5ccc90fa56/logo.svg"
          className="logo"
        />

        <div className="links">
          <img
            src="https://raw.githubusercontent.com/miragem-tech/assets/f99cd9f5ad73f6ab29cf26088d1e4b5ccc90fa56/lightmode.svg"
            className="lightmode"
          />
          <div className="labs">labs</div>
          <img
            src="https://raw.githubusercontent.com/miragem-tech/assets/f99cd9f5ad73f6ab29cf26088d1e4b5ccc90fa56/login.svg"
            className="login"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
