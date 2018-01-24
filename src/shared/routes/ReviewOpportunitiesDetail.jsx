/**
 * The loader of Review Opportunity Page code chunks.
 * It is re-used both inside the Main Topcoder Community website, and inside
 * other Topcoder Communities, as, at the moment, no difference in the loader
 * code is necessary between these two usecases.
 */

import LoadingPagePlaceholder from 'components/LoadingPagePlaceholder';
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { requireWeak, resolveWeak, SplitRoute } from 'utils/router';

export default function ReviewOpportunitiesDetailRoute(props) {
  return (
    <SplitRoute
      cacheCss
      chunkName="review-opportunities-detail/chunk"
      renderClientAsync={() =>
        import(
          /* webpackChunkName: "review-opportunities-detail/chunk" */
          'containers/review-opportunities-detail',
        ).then(({ default: ReviewOpportunitiesDetail }) => (
          <ReviewOpportunitiesDetail {...props} />
        ))
      }
      renderPlaceholder={() => <LoadingPagePlaceholder />}
      renderServer={() => {
        const p = resolveWeak('containers/review-opportunities-detail');
        const ReviewOpportunitiesDetail = requireWeak(path.resolve(__dirname, p));
        return (
          <StaticRouter context={{}}>
            <ReviewOpportunitiesDetail {...props} />
          </StaticRouter>
        );
      }}
    />
  );
}
