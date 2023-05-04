import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

//useHistory => useNavigate 로 변경 .push 삭제

const Profile = () => {
    const history = useNavigate();

    const onLogOutClick = () => {
        authService.signOut();
        history("/");
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;