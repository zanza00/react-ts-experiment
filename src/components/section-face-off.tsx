import * as React from 'react';
import classNames from 'classnames';
import { hero } from '../models/hero'

// const inlineStyles = {};

type params = {
  heroes: [hero, hero],
  className?: string
}

const handleClick = (hero: hero, event:any) => {
  console.log({hero, event});

}

export function HeroFaceOff({heroes, className = ''}: params) {

  const mainClass = classNames(
    className.toString(),

  );
  const [leftHero, rightHero] = heroes

  return (
    <section className={mainClass}>
      <div className="left">
        <img src={leftHero.image} onClick={(event) => handleClick(leftHero, event)} />
      </div>
      <div className="right">
        <img src={rightHero.image} onClick={(event) => handleClick(rightHero, event)}/>
      </div>
    </section>
  );
}
