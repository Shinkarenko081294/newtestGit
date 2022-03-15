import Profile from './Profilelist.module.css';
import myFoto from './../../img/11279.bmp';
import Mypost from './myposts/Mypost';

const ProfileList = () => {
    return(
        <div className={Profile.myProfiles}>
            <div className={Profile.imgContent}>
            </div>
            <div className={Profile.myInfo}>
                <div className={Profile.infoImg}>
                    <img src={myFoto}></img>
                </div>
                <div className={Profile.infoText}>
                    <div className={Profile.textHed}></div>
                    <div className={Profile.textCont}>
                    <p>Date of Birth: 8 december</p>
                    <p>City: Borisov</p>
                    <p>Education: BATU</p>
                    <p>Web Site: https://roman-shinkarenko</p>
                    </div>
                </div>  
            </div>
            <Mypost />
        </div>
    );
};

export default ProfileList; 