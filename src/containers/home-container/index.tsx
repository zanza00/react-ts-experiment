import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';
import { HeroFaceOff } from '../../components/section-face-off';
import { hero } from '../../models/hero';

export function HomeContainer() {

  let heroBattle: [hero, hero] = [
    {id: '1',name: 'lefties', image: 'assets/img/left.jpg' },
    {id: '2',name: 'righty', image: 'assets/img/right.jpg' }
  ]

  return (
    <article>
      <PageHero title="Heroes Voter" />
      <PageSection className="o-container o-container--small">
        <HeroFaceOff heroes={heroBattle} />
      </PageSection>
    </article>
  );
};
