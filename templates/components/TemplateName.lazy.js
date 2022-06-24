import React, { lazy, Suspense } from 'react';

const LazyBox = lazy(() => import('./TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <LazyBox {...props} />
  </Suspense>
);

export default TemplateName;
