
import { useMemo } from "react";
import { HeroCard } from ".";
import { getHerosByPublisher } from "../helpers";
import 'animate.css';

export const HeroList = ({ publisher }: { publisher: string }) => {
  const heros = useMemo(()=> getHerosByPublisher(publisher), [publisher]);

  const chunkSize = Math.ceil(heros.length / 3);
  const chunks = Array.from({ length: 3 }, (_, index) =>
    heros.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <div className="container">
      <div className="row animate__animated animate__fadeIn">
        {chunks.map((chunk, index) => (
          <div key={index} className="col">
            <ul>
              {chunk.map((hero) => (
                <HeroCard
                key={hero.id}
                {...hero}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
