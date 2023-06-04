import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Root.css";

const MainNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header>
      <div className="tnb">
        <ul>
          {!isLoggedIn ? (
            <>
              <li>
                <NavLink to="auth">로그인</NavLink>
              </li>
              <li>
                <NavLink to="auth">회원가입</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="mypage">마이페이지</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="gnb">
        <h1>
          <Link to="">로고</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="search">Search</NavLink>
            </li>
            <li>
              <NavLink to="challenge">Challenge</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
