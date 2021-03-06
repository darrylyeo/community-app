/**
 * Renders a YouTube video into a page. Not that it is difficult to embed
 * a YouTube video, but this component makes it even easier, and smooths some
 * corners: like drawing a gray placeholder with a loading indicator while your
 * network communicates with YouTube to get the actual video.
 *
 * Probably, it works out of the box for other video hosting platforms, and
 * also for embeding of other similar objects, but to be on the safe side, lets
 * call it YouTubeVideo for now.
 */

import LoadingIndicator from 'components/LoadingIndicator';
import PT from 'prop-types';
import React from 'react';
import ScalableRect from 'components/ScalableRect';

import style from './style.scss';

export default function YouTubeVideo({ className, src, title }) {
  let cl = style.container;
  if (className) cl = `${cl} ${className}`;
  return (
    <ScalableRect className={cl} ratio="16:9">
      <LoadingIndicator theme={{ container: style.loading }} />
      <iframe
        src={src}
        styleName="video"
        title={title}
      />
    </ScalableRect>
  );
}

YouTubeVideo.defaultProps = {
  className: null,
  title: null,
};

YouTubeVideo.propTypes = {
  className: PT.string,
  src: PT.string.isRequired,
  title: PT.string,
};
