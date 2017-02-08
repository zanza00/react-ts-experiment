import * as React from 'react';
import classNames from 'classnames';

// const inlineStyles = {};

export function PageSection({className = '', children = undefined}) {

  const mainClass = classNames(
    className.toString(),
  );
  const innerClass = classNames(
    '',
  );

  return (
    <section className={mainClass}>
      <div className={innerClass}>{children}</div>
    </section>
  );
}
