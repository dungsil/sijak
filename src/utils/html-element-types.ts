export type HTMLNonFunctionalBlockElement =
  'div'
  | 'section'
  | 'p'
  | 'main'
  | 'header'
  | 'footer'
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'nav'

export type HTMLNonFunctionalInlineElement =
  'span'
  | 'small'
  | 'b'
  | 'em'
  | 'i'
  | 'dfn'
  | 'kbd'
  | 'q'
  | 'code'
  | 'strong'
  | 'sub'
  | 'sup'

export type HTMLNonFunctionalElement = HTMLNonFunctionalBlockElement | HTMLNonFunctionalInlineElement
