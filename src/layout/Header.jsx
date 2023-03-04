import React from "react";
import { NavLink, Link } from "react-router-dom";

import { Image, ListGroup, ListGroupItem } from "../components";

import { navigation, actions } from "../constants/constants";

import logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <Image
            src={logo}
            className="header__logo"
            alt="Cloza logotype"
            loading="lazy"
          />
        </Link>
        <nav className="header__nav">
          <ListGroup className="header__nav-list">
            {navigation &&
              navigation.map(({ id, name, url, className = "" }) => (
                <ListGroupItem key={id} className="header__nav-item">
                  <NavLink to={url} className={`header__nav-link ${className}`}>
                    {name}
                  </NavLink>
                </ListGroupItem>
              ))}
          </ListGroup>
        </nav>
        <div className="header__actions">
          <ListGroup className="header__actions-list">
            {actions &&
              actions.map(({ id, src, name, url, alt, className }) => (
                <ListGroupItem key={id} className="header__actions-item">
                  <Link
                    to={url}
                    className={`header__actions-link ${className}`}
                  >
                    {src && <Image src={src} alt={alt} loading="lazy" />}
                    {name && name}
                  </Link>
                </ListGroupItem>
              ))}
          </ListGroup>
        </div>
      </div>
    </header>
  );
};
