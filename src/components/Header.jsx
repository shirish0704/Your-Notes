import logo from "../Images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" height="70" />
        <h1>Your Keep</h1>
      </div>
    </>
  );
};

export default Header;
