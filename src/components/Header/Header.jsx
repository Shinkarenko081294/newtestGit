import Hed from './Header.module.css';
import logo from './../../img/myLog.jpg';


const Header = () =>{
    return(
        <header className={Hed.header}>
            <img src={logo}></img>
            <p>Начинай 17 урок</p>
        </header>
    );
};

export default Header;