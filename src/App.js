import Navbar from './component/navbar/nav'
import './App.css';
import Profile from './component/profile/profile'
function App() {
  return (
    <div className="App">
     
     
     <Navbar/>
    <br/>
    <Profile fullName="mohamed amine sbei" Age="28" profession="Ingenieur Electromécanique:genie industriel" photo="https://media-exp1.licdn.com/dms/image/C4D03AQGGOv2iZXLEQA/profile-displayphoto-shrink_200_200/0/1591956574663?e=1622073600&v=beta&t=-INUcMZYuQ-uQQCoAUDOYnhic8ijm_rQrP810r87JcI"/>
    </div>
  );
}

export default App;
