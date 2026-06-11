import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import "../styles/NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar"
      data-bs-theme="dark"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container>
        <Navbar.Brand href="/">Samarth Ravi</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link
              href="https://linktr.ee/samarthravi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link
              href="mailto:samarthravi1225@gmail.com"
              className="social-link"
            >
              <EmailRoundedIcon style={{ fontSize: 20 }} />
              <span className="social-label">Email</span>
            </Nav.Link>

            <Nav.Link
              href="https://github.com/samarthravi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GitHubIcon style={{ fontSize: 19 }} />
              <span className="social-label">GitHub</span>
            </Nav.Link>

            <Nav.Link
              href="https://www.linkedin.com/in/samarthravi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedInIcon style={{ fontSize: 21 }} />
              <span className="social-label">LinkedIn</span>
            </Nav.Link>

            <Nav.Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <DescriptionIcon style={{ fontSize: 20 }} />
              <span className="social-label">Resume</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;