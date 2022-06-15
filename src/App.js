import "./App.css";
import Profile from "./profile/Profile";
import Pic from "./profile/assets/pic.jpg";

function App() {
  function handleName(fullName) {
    alert(`${fullName}`);
  }
  return (
    <div>
      <Profile
        fullName="Fahd Jerbi"
        bio="Ambitious, dynamic and self-driven person"
        profession="GIS Specialists"
        handleName={handleName}
      >
        {Pic}
      </Profile>
    </div>
  );
}

export default App;
