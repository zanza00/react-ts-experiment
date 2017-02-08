import * as React from 'react';
import classNames from 'classnames';
import { hero } from '../models/hero'
import { HeroCardVoter } from '../components/section-hero-card-voter'
import { flexStyles } from '../themes/flex';


type params = {
  heroes: [hero, hero],
  className?: string
}

export function HeroFaceOff({heroes, className = 'hero-face-off'}: params) {

  const mainClass = classNames(
    className.toString(),

  );
  const [leftHero, rightHero] = heroes

  return (
    <section className={[mainClass, flexStyles.flexContainer].join(' ')}>
      <HeroCardVoter hero={leftHero} position={"left"} />
      <HeroCardVoter hero={rightHero} position={"right"} />
    </section>
  );
}
