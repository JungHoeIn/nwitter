import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">{userObj.displayName}님 Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;