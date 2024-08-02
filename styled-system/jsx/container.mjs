import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'

import { getContainerStyle } from '../patterns/container.mjs';
import { panda } from './factory.mjs';

export const Container = /* @__PURE__ */ function Container(props) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getContainerStyle(patternProps)        
const mergedProps = mergeProps(styleProps, restProps)

return createComponent(panda.div, mergedProps)
}