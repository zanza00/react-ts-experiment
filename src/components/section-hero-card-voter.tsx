import * as React from 'react';
import classNames from 'classnames';
import { hero } from '../models/hero'
import csjs from 'csjs';
import insertCss from 'insert-css';
import colors from '../themes/colors';
import { flexStyles } from '../themes/flex';

interface ContainerStyles {
  left: string,
  right: string,
  title: string,
  heroCard: string,
}

const containerStyles: ContainerStyles = csjs`

.heroCard {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left extends .heroCard{
  background-color: red;
}

.right extends .heroCard{
  background-color: blue;
}

.title {
  color: ${colors.textColor}
}
`;

insertCss(csjs.getCss(containerStyles));


type params = {
  hero: hero,
  position: "left" | "right",
  className?: string
}

const handleClick = (hero: hero, event:any) => {
  console.log({hero, event});

}

export function HeroCardVoter({hero, position , className = ''}: params) {

let cardPosition;
  switch (position) {
    case "left":
      cardPosition = containerStyles.left
      break;
    case "right":
      cardPosition = containerStyles.right
      break;
    default:
      break;
  }

  const mainClass = classNames(
    className.toString()
  );
  return (
    <section className={[mainClass, cardPosition, flexStyles.flexItem].join(' ')}>
        <img src={hero.image} onClick={(event) => handleClick(hero, event)} />
        <h2 className={containerStyles.title}>{hero.name}</h2>
    </section>
  );
}
