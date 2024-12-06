import merge from './merge.mjs'

export default function getMap (omega) {
  return function map (alpha) {
    return merge(alpha, omega)
  }
}
