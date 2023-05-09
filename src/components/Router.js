import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";


const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
    return ( 
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route path="/" element= {<Home userObj={userObj} />} />
                    <Route path="/profile" element= {<Profile refreshUser={refreshUser} userObj={userObj} />} />
                </>
                ) : (
                    <Route path="/" element= {<Auth />} />
                )} 
            </Routes>
        </Router>
    );
};


export default AppRouter;


/* 
    v6에서 Redirect 사라짐 Route로 변경 from => path, 
    to => element={<Navigate replace to= />} !
    Route의 exact 옵션이 필요하지 않다.
    모든 경로가 기본적으로 정확히 일치하게 되었기 때문이다.
    만약 하위 경로가 있어 더 많은 URL을 일치시키려 한다면 *를 사용하여 매칭
*/