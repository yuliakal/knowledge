/**
 * IMAGE SIZE
 * ---
 * Defines all available image thumbs sizes
 */
export enum ImageSize {
  // x-small sizes
  XS_MDPI = 'xs_mdpi',
  XS_HDPI = 'xs_hdpi',
  // small sizes
  SM_MDPI = 'sm_mdpi',
  SM_HDPI = 'sm_hdpi',
  // medium sizes
  MD_MDPI = 'md_mdpi',
  MD_HDPI = 'md_hdpi',
  // large sizes
  LG_MDPI = 'lg_mdpi',
  LG_HDPI = 'lg_hdpi',
  // x-large sizes
  XLG_MDPI = 'xlg_mdpi',
  XLG_HDPI = 'xlg_hdpi',
}

/**
 * IMAGE THUMBS
 * ---
 * Defines shape of image thumbs record
 */
export type ImageThumbs = Record<ImageSize, string>;

/**
 * IMAGE INTERFACE
 * ---
 * Defines interface of image created from image thumbs
 */
export interface ImageInterface {
  getThumb: (size: ImageSize) => string;
}
