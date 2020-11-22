export { default as Footer } from '../..\\components\\generic\\Footer.vue'
export { default as Header } from '../..\\components\\generic\\Header.vue'
export { default as AssocList } from '../..\\components\\signup\\AssocList.vue'
export { default as Contatti } from '../..\\components\\signup\\Contatti.vue'
export { default as Form } from '../..\\components\\signup\\Form.vue'
export { default as Info } from '../..\\components\\signup\\Info.vue'

export const LazyFooter = import('../..\\components\\generic\\Footer.vue' /* webpackChunkName: "components_generic/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\generic\\Header.vue' /* webpackChunkName: "components_generic/Header" */).then(c => c.default || c)
export const LazyAssocList = import('../..\\components\\signup\\AssocList.vue' /* webpackChunkName: "components_signup/AssocList" */).then(c => c.default || c)
export const LazyContatti = import('../..\\components\\signup\\Contatti.vue' /* webpackChunkName: "components_signup/Contatti" */).then(c => c.default || c)
export const LazyForm = import('../..\\components\\signup\\Form.vue' /* webpackChunkName: "components_signup/Form" */).then(c => c.default || c)
export const LazyInfo = import('../..\\components\\signup\\Info.vue' /* webpackChunkName: "components_signup/Info" */).then(c => c.default || c)
