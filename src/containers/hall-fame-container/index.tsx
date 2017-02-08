import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HallFameContainer() {
  const topHeroes = [
    { name: 'aaaaa', votes: 123, heroPage: '#' },
    { name: 'bbbbb', votes: 234, heroPage: '#' },
    { name: 'ccccc', votes: 342, heroPage: '#' },
    { name: 'ddddd', votes: 42, heroPage: '#' },
  ]
  return (
    <article>
      <PageHero title="Hall of Fame" subtitle="Most voted heroes" />
      <PageSection className="">
        <ol>
          {topHeroes.map(hero => <li><a href={hero.heroPage}>{hero.name}</a> {hero.votes}</li>)}
        </ol>
        <br />
      </PageSection>
      <br />
    </article>
  );
};
