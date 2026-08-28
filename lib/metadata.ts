import type { Metadata } from "next";

export const createCanonicalMetadata = (pathname: string): Metadata => ({
  alternates: {
    canonical: pathname,
  },
});
