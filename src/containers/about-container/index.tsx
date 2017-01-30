import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function AboutContainer() {
  return (
       <article>
      <PageHero title="Heroes Voter" subtitle="A little experiments on the most popular Heroes" />
      <PageSection className="o-container o-container--small">
        <p>
          This is made in react and it's source code can be found <a href="#">on github</a>
        </p>
        <br />
        <div className="c-alert c-alert--info">
          Let's Play!
        </div>
      </PageSection>
      <br />
    </article>
  );
};
