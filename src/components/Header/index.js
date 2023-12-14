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
    
    return(
        <div className="logoutSection">
            <button className="logoutButton" onClick={toLogout}>Logout</button>
        </div>
    )
}
export default Header