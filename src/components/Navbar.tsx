import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-items">
        <img src="src/assets/logo.svg" className="logo" />

        <div className="links">
          <img src="src/assets/lightmode.svg" className="lightmode" />
          <div className="labs">labs</div>
          <img src="src/assets/login.svg" className="login" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
