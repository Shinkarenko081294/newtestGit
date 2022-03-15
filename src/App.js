import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileList from './components/Profile/ProfileList';



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <ProfileList />
    </div>
  );
}



export default App;
