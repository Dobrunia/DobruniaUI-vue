export type DbrTextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type DbrTextWeight = 'regular' | 'medium' | 'semibold';

export type DbrTextColor =
  | 'base'
  | 'muted'
  | 'primary'
  | 'danger'
  | 'success'
  | 'surface'
  | 'on-primary'
  | 'on-danger';

export type DbrTextLineHeight = 'tight' | 'normal' | 'relaxed';

export type DbrTextAlign = 'left' | 'center' | 'right';

export type DbrTextTransform = 'none' | 'uppercase' | 'lowercase' | 'capitalize';

export type DbrTextDecoration = 'none' | 'underline' | 'line-through';

export type DbrTextFontStyle = 'normal' | 'italic';

export type DbrTextWrap = 'wrap' | 'nowrap' | 'pre-wrap';

export type DbrTextLetterSpacing = 'normal' | 'tight' | 'wide';

export interface DbrTextProps {
  /**
   * Text size. Default (omitted) = `md` / 14px.
   */
  size?: DbrTextSize;
  /**
   * Font weight token. Default = `regular` (400).
   */
  weight?: DbrTextWeight;
  /**
   * Text color. Default = `base`.
   */
  color?: DbrTextColor;
  /**
   * Line height token. Default = `normal` (1.5).
   */
  lineHeight?: DbrTextLineHeight;
  /**
   * Text alignment.
   */
  align?: DbrTextAlign;
  /**
   * Text transform. Default = `none`.
   */
  transform?: DbrTextTransform;
  /**
   * Text decoration. Default = `none`.
   */
  decoration?: DbrTextDecoration;
  /**
   * Font style. Default = `normal`.
   */
  fontStyle?: DbrTextFontStyle;
  /**
   * White-space / wrapping. Default = `wrap`.
   */
  wrap?: DbrTextWrap;
  /**
   * Letter spacing token. Default = `normal`.
   */
  letterSpacing?: DbrTextLetterSpacing;
  /**
   * Single-line ellipsis overflow.
   * @default false
   */
  truncate?: boolean;
}
