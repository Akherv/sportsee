import "../style/Header.css";

function Header({ userInfos }) {
  return (
    <div className="header">
      <h1>
        Bonjour <span>{userInfos && userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
export default Header;
