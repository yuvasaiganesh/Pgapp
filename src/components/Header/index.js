import {useNavigate} from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"

const Header=()=>{

    const history = useNavigate();
    const toLogout=(event)=>{
        event.preventDefault();
    Cookies.remove("jwt_token")
    
    history("/login");
  };
  const toHome=(event)=>{
    event.preventDefault();


history("/");
};
    
    return(
        <div className="nav">
             <button className="navButton" onClick={toHome}>Home</button>
            <button className="navButton" onClick={toLogout}>Logout</button>
        </div>
    )
}
export default Header