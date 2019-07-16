'use strict';
const expect = require('chai').expect
const formatNumber = require('../dist/formatNumber').default

console.log(formatNumber)

describe('test function formatNumber', () => {
  const value = 999999.715001
  const a = formatNumber({
    decimals: 2,
    decPoint: '.',
    thousandsSep: ',',
    roundtag: 'round'
  })
  const b = formatNumber({
    decimals: 3,
    decPoint: '.',
    roundtag: 'ceil'
  })
  const c = formatNumber()

  it('test a', () => {
    const result = a(value)
    expect(result).to.equal('999,999.72');
  })
  it('test b', () => {
    const result = b(value)
    expect(result).to.equal('999999.716');
  })
  it('test c', () => {
    const result = c(value)
    expect(result).to.equal('1000000');
  })

})
