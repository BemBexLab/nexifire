import type { Metadata } from "next";

type PageMetadataOptions = {
  description: string;
  pathname: string;
  title: string;
};

export const createPageMetadata = ({
  description,
  pathname,
  title,
}: PageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: {
    canonical: pathname,
  },
});
