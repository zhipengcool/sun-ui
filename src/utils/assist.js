import Vue from 'vue';

export const oneOf = function (value, source) {
  let res = source.find(v => v === value)
  if (res !== -1) {
    return true
  }
  return false
}