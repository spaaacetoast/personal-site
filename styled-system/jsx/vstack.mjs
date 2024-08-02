import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getVstackStyle } from '../patterns/vstack.mjs';
import { panda } from './factory.mjs';

export const VStack = /* @__PURE__ */ function VStack(props) {
  const [patternProps, restProps] = splitProps(props, ["justify","gap"])

const styleProps = getVstackStyle(patternProps)        
const mergedProps = mergeProps(styleProps, restProps)

return createComponent(panda.div, mergedProps)
}