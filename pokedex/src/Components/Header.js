import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
          <Link to="/">
            <img title="Go to home"  src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' alt="Go to home" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
