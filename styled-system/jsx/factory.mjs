import { Dynamic } from 'solid-js/web'
import { createMemo, mergeProps, splitProps } from 'solid-js'
import { createComponent } from 'solid-js/web'
import { css, cx, cva } from '../css/index.mjs';
import { normalizeHTMLProps } from '../helpers.mjs';
import { isCssProperty, allCssProperties } from './is-valid-prop.mjs';

const defaultShouldForwardProp = (prop, variantKeys) => !variantKeys.includes(prop) && !isCssProperty(prop)

function styledFn(element, configOrCva = {}, options = {}) {
  const cvaFn = configOrCva.__cva__ || configOrCva.__recipe__ ? configOrCva : cva(configOrCva)

  const forwardFn = options.shouldForwardProp || defaultShouldForwardProp
  const shouldForwardProp = (prop) => forwardFn(prop, cvaFn.variantKeys)
  
  const defaultProps = Object.assign(
    options.dataAttr && configOrCva.__name__ ? { 'data-recipe': configOrCva.__name__ } : {},
    options.defaultProps,
  )

  return function PandaComponent(props) {
    const mergedProps = mergeProps({ as: element }, defaultProps, props)
    const forwardedKeys = createMemo(() => Object.keys(props).filter(shouldForwardProp))

    const [localProps, forwardedProps, variantProps, styleProps, htmlProps, elementProps] = splitProps(
      mergedProps,
      ['as', 'class', 'className'],
      forwardedKeys(),
      cvaFn.variantKeys,
      allCssProperties,
      normalizeHTMLProps.keys
    )

    function recipeClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const compoundVariantStyles = cvaFn.__getCompoundVariantCss__?.(variantProps);
      return cx(cvaFn(variantProps, false), css(compoundVariantStyles, propStyles, cssStyles), localProps.class, localProps.className)
    }

    function cvaClass() {
      const { css: cssStyles, ...propStyles } = styleProps
      const cvaStyles = cvaFn.raw(variantProps)
      return cx(css(cvaStyles, propStyles, cssStyles), localProps.class, localProps.className)
    }

    const classes = configOrCva.__recipe__ ? recipeClass : cvaClass

    if (forwardedProps.className) {
      delete forwardedProps.className
    }

    return createComponent(
      Dynamic,
      mergeProps(
        forwardedProps,
        elementProps,
        normalizeHTMLProps(htmlProps),
        {
          get component() {
            return localProps.as
          },
          get class() {
            return classes()
          }
        },
      )
    )
  }
}

function createJsxFactory() {
  const cache = new Map()

  return new Proxy(styledFn, {
    apply(_, __, args) {
      return styledFn(...args)
    },
    get(_, el) {
      if (!cache.has(el)) {
        cache.set(el, styledFn(el))
      }
      return cache.get(el)
    },
  })
}

export const panda = /* @__PURE__ */ createJsxFactory()