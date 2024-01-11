import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [profileDrop, setProfileDrop] = useState();
  const [logSign, setLogSign] = useState();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const stat = useAuth();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (stat.roles.length > 0) {
      setLogSign(
        <li data-name="activity" onClick={sendLogout} class="drop-down__item">
          Sign Out
        </li>
      );
    } else {
      setLogSign(
        <Link to="/login">
          <li data-name="activity" class="drop-down__item">
            Login
          </li>
        </Link>
      );
    }
  }, [stat]);

  function drop() {
    if (profileDrop) {
      setProfileDrop("");
    } else {
      setProfileDrop(" drop-down--active");
    }
  }

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="hamburger">
        <div className="hamburger-container nav-hamburger-container">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            checked={isOpen}
            onChange={() => setIsOpen(!isOpen)}
          />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="ham-logo">
            <div className="inner_header_wrp">
              <div className="inner_header_inner" onClick={drop}>
                <div className="user_accoun">
                  <div className="cm_drop-down_wrapper">
                    <div className={"drop-down" + profileDrop}>
                      <div id="dropDown" className="drop-down__button">
                        <img
                          src="/assets/imgs/profile.png"
                          className="drop-down__icon"
                          alt="profile"
                        />

                        <div className="drop-down__menu-box">
                          <ul className="drop-down__menu">
                            <li data-name="profile" className="drop-down__item">
                              Your Profile
                            </li>
                            <li
                              data-name="activity"
                              className="drop-down__item"
                            >
                              Logout
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`menu-items ${isOpen ? "open" : ""}`}>
            <li>
              <Link class="mob-option" to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li>
              <Link class="mob-option" to="/catalog" onClick={closeNav}>
                Catalog
              </Link>
            </li>
            <li>
              <Link class="mob-option" to="/sell" onClick={closeNav}>
                Sell
              </Link>
            </li>
            <li>
              <Link class="mob-option" to="/repair" onClick={closeNav}>
                Repairs
              </Link>
            </li>
            <li>
              <Link class="mob-option" to="/contact" onClick={closeNav}>
                Contact Us
              </Link>
            </li>
          </div>
        </div>
      </header>

      <header class="normal-nav">
        <img class="logo" src="/assets/imgs/logo.png" alt="" />

        <div class="nav-items">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/catalog">Catalog</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/repair">Repair</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/sell">Sell</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
          </ul>
        </div>

        <div class="right-nav">
          <div class="search-box">
            <img
              src="/assets/imgs/search.png"
              alt="search button"
              id="search-button"
            />
            <input
              type="text"
              id="nav-search"
              placeholder="Search for products"
            />
          </div>

          <div class="profile-icons">
            <Link to="/favorites">
              {" "}
              <img src="/assets/imgs/heart.png" alt="favorites" />
            </Link>
            <div class="inner_header_wrp" onClick={drop}>
              <div class="inner_header_inner">
                <div class="user_accoun">
                  <div class="cm_drop-down_wrapper">
                    <div class={"drop-down" + profileDrop}>
                      <div id="dropDown" class="drop-down__button">
                        <img
                          src="/assets/imgs/profile.png"
                          class="drop-down__icon"
                          alt="profile"
                        />

                        <div class="drop-down__menu-box">
                          <ul class="drop-down__menu">{logSign}</ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="/assets/imgs/bag.png" alt="cart" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
