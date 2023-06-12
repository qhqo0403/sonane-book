import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="w-screen fixed top-0 left-0 pb-5 px-8">
      <div className="my-2">
        <ul className="flex justify-end">
          {!isLoggedIn ? (
            <>
              <li className="mr-3">
                <NavLink to="signin">로그인</NavLink>
              </li>
              <li>
                <NavLink to="signup">회원가입</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="mypage">마이페이지</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-between items-center py-4">
        <h1>
          <Link to="">로고</Link>
        </h1>
        <nav>
          <ul className="flex">
            <li className="mr-8">
              <NavLink to="" end>
                Home
              </NavLink>
            </li>
            <li className="mr-8">
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

export default Header;
