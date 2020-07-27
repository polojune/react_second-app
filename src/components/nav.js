import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/profile">프로파일</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
