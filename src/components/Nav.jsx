import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleClickHome = () => {
    history.push("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <>
      <nav className={`nav ${show && "nav__black"}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/300px-Netflix_2015_logo.svg.png"
          className="nav__logo"
          alt="넷플릭스 로고"
          onClick={() => {
            navigate("/");
          }}
        />

        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="nav__input"
          placeholder="영화를 선택해주세요"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6q8XYXGI3yhiOJy1HG1vR1JSShbgw9a47dA&usqp=CAU"
          alt="User logo"
          className="nav__avatar"
        />
      </nav>
    </>
  );
};

export default Nav;
