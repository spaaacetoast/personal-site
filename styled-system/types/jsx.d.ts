/* eslint-disable */
import type { ComponentProps, Component, JSX } from 'solid-js'
import type { Assign, JsxStyleProps, JsxHTMLProps } from './system-types';
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe';

type Dict = Record<string, unknown>

type ElementType<P = any> = keyof JSX.IntrinsicElements | Component<P>

export interface PandaComponent<T extends ElementType, P extends Dict = {}> {
  (props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>): JSX.Element
  displayName?: string
}

interface RecipeFn { __type: any }

interface JsxFactoryOptions<TProps extends Dict> {
  dataAttr?: boolean
  defaultProps?: TProps
  shouldForwardProp?(prop: string, variantKeys: string[]): boolean
}

export type JsxRecipeProps<T extends ElementType, P extends Dict> = JsxHTMLProps<ComponentProps<T>, P>;

interface JsxFactory {
  <T extends ElementType>(component: T): PandaComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>, options?: JsxFactoryOptions<JsxRecipeProps<T, RecipeSelection<P>>>): PandaComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P, options?: JsxFactoryOptions<JsxRecipeProps<T, P['__type']>>): PandaComponent<T, P['__type']>
}

type JsxElements = { [K in keyof JSX.IntrinsicElements]: PandaComponent<K, {}> }

export type Panda = JsxFactory & JsxElements

export type HTMLPandaProps<T extends ElementType> = JsxHTMLProps<ComponentProps<T>, JsxStyleProps>