import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HomeContainer() {
  return (
    <article>
      <PageHero title="Heroes Voter"/>
      <PageSection className="o-container o-container--small">
        <p>
          Still need to do everything :P
        </p>
        </PageSection>
    </article>
  );
};
