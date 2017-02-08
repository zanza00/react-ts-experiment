import * as React from 'react';
import classNames from 'classnames';
import { hero } from '../models/hero'
import csjs from 'csjs';
import insertCss from 'insert-css';
import colors from '../themes/colors';

interface ContainerStyles {
  /** main content container */
  container: string;
  textCentered: string;
  /** text with fancy highlight */
  glowingText: string;
  /** dark background with border */
  darkBg: string;
  /** elevate element using box-shadow */
  effect__elevate: string;
  /** hide element on mobile screen  */
  effect__hideOnTablet: string;
  /** show element on mobile screen  */
  effect__showOnTablet: string;
}

const containerStyles: ContainerStyles = csjs`



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
      cardPosition = "left"
      break;
    case "right":
      cardPosition = "right"
      break;
    default:
      break;
  }

  const mainClass = classNames(
    className.toString(),
    cardPosition
  );
  return (
    <section className={mainClass}>
      <div>
        <h1>{hero.name}</h1>
        <img src={hero.image} onClick={(event) => handleClick(hero, event)} />
      </div>
    </section>
  );
}
