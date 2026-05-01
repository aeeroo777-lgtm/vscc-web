'use client';

import React, { useEffect, useRef } from 'react';

interface HlsVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  poster?: string;
  grayscale?: boolean;
}

export default function HlsVideo({
  src,
  className = '',
  style,
  poster,
  grayscale = false,
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: { destroy: () => void } | null = null;

    const initVideo = async () => {
      if (src.includes('.m3u8')) {
        try {
          const Hls = (await import('hls.js')).default;
          if (Hls.isSupported()) {
            const hls = new Hls({ maxBufferLength: 30 });
            hls.loadSource(src);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
              video.play().catch(() => {});
            });
            hlsInstance = hls;
          } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
            video.play().catch(() => {});
          }
        } catch {
          video.src = src;
          video.play().catch(() => {});
        }
      } else {
        video.src = src;
        video.play().catch(() => {});
      }
    };

    initVideo();

    return () => {
      if (hlsInstance) hlsInstance.destroy();
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      style={{
        ...style,
        filter: grayscale ? 'saturate(0)' : undefined,
      }}
      aria-hidden="true"
    />
  );
}