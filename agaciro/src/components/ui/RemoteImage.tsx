"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { mediaSources, optimizedImageSource } from "@/content/media";

export type RemoteImageProps = Omit<ImageProps, "src" | "onError"> & {
  src: string;
  fallbackText?: string;
  creditPrefix?: string;
};

/** A new source mounts fresh state, so navigating after a failure can load again. */
export function RemoteImage(props: RemoteImageProps) {
  return <ImageWithFallback key={props.src} {...props} />;
}

function ImageWithFallback({
  src,
  alt,
  fallbackText,
  creditPrefix,
  className,
  style,
  ...props
}: RemoteImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const source = mediaSources[src];

  if (failed) {
    return (
      <span
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
        className={`remote-image-fallback ${props.fill ? "remote-image-fallback--fill" : ""} ${className ?? ""}`}
        style={{
          width: props.fill ? undefined : props.width,
          height: props.fill ? undefined : props.height,
          ...style,
        }}
      >
        {fallbackText}
      </span>
    );
  }

  return (
    <>
      <Image
        {...props}
        alt={alt}
        className={`${loaded ? "" : "remote-image-loading "}${className ?? ""}`}
        onError={() => setFailed(true)}
        onLoad={() => setLoaded(true)}
        src={optimizedImageSource(src)}
        style={style}
      />
      {source?.showCredit ? (
        <a
          className="image-credit"
          href={source.sourcePage}
          rel="noreferrer"
          target="_blank"
        >
          {creditPrefix ? `${creditPrefix} · ` : ""}{source.credit}
        </a>
      ) : null}
    </>
  );
}
