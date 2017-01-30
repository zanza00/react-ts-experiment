import * as React from 'react';
import { PageSection } from '../../components/page-section';
import { PageHero } from '../../components/page-hero';

export function HallFameContainer() {
  return (
    <article>
      <PageHero title="Hall of Fame" subtitle="Most voted heroes" />
      <PageSection className="o-container o-container--small">
        <ol>
          <li>
            <a href="#">Hero Page</a> - 350 votes
          </li>
        </ol>
        <br />
      </PageSection>
      <br />
    </article>
  );
};
