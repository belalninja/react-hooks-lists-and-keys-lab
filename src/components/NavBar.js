import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkat = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{linkat}</nav>;
}

export default NavBar;
