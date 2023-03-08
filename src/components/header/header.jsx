import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref legacyBehavior>
          <a>Todos los pokemons (20)</a>
        </Link>
        <Link href="/tipo" passHref legacyBehavior>
          <a>Tipos</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
