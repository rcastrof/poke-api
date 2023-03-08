import React from "react";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <main>
      <div className="grid grid-cols-4 gap-2">
        {data.map((e) => (
          <Link key={e.id} href={`/${e.id}`} legacyBehavior passHref>
            <a>
              <h2>PokeDex: {e.id}</h2>
              <h3>Nombre: {e.name}</h3>
              <h3>
                Tipo:
                {e.type.map((e) => (
                  <p key={e.type.name}>{e.type.name}</p>
                ))}
              </h3>

              <img width={300} height={300} alt={e.name} src={e.image}></img>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
