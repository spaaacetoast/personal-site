import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getBoxStyle } from '../patterns/box.mjs';
import { panda } from './factory.mjs';

export const Box = /* @__PURE__ */ function Box(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getBoxStyle(patternProps)        
const mergedProps = mergeProps(styleProps, restProps)

return createComponent(panda.div, mergedProps)
}