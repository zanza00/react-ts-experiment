import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HomeContainer() {
  return (
    <article>
      <PageHero title="Heroes Voter"/>
      <PageSection className="o-container o-container--small">
        <div className="pull-left">
          <img src="assets/img/left.jpg" />
        </div>
        <div className="pull-right">
          <img src="assets/img/right.jpg" />
        </div>
        </PageSection>
    </article>
  );
};
