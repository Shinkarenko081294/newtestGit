import NavbarStyle from './Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={NavbarStyle.nav}>
            <div className={NavbarStyle.panelLink}>
                <div className={NavbarStyle.linkNeon}></div>
                <div className={NavbarStyle.linkNeonTwo}></div>
                <div className={NavbarStyle.linkBox}>
                    <div className={`${NavbarStyle.item} ${NavbarStyle.linkStart}`}>
                        <a href='#s' className={NavbarStyle.link}>Profile</a>
                    </div>
                    <div className={NavbarStyle.item}>
                        <a href='#s' className={NavbarStyle.link}>Massages</a>
                    </div>
                    <div className={NavbarStyle.item}>
                        <a href='#s' className={NavbarStyle.link}>News</a>
                    </div>
                    <div className={NavbarStyle.item}>
                        <a href='#s' className={NavbarStyle.link}>Music</a>
                    </div>
                    <div className={`${NavbarStyle.item} ${NavbarStyle.linkSet}`}>
                        <a href='#s' className={NavbarStyle.link}>Setings</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;