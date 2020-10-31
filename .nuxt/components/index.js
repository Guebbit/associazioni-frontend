export { default as Contatti } from '../..\\components\\Contatti.vue'
export { default as Form } from '../..\\components\\Form.vue'
export { default as Info } from '../..\\components\\Info.vue'
export { default as Footer } from '../..\\components\\generic\\Footer.vue'
export { default as Header } from '../..\\components\\generic\\Header.vue'

export const LazyContatti = import('../..\\components\\Contatti.vue' /* webpackChunkName: "components_Contatti" */).then(c => c.default || c)
export const LazyForm = import('../..\\components\\Form.vue' /* webpackChunkName: "components_Form" */).then(c => c.default || c)
export const LazyInfo = import('../..\\components\\Info.vue' /* webpackChunkName: "components_Info" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\generic\\Footer.vue' /* webpackChunkName: "components_generic/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\generic\\Header.vue' /* webpackChunkName: "components_generic/Header" */).then(c => c.default || c)
