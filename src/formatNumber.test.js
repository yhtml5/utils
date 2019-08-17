'use strict'
const expect = require('chai').expect
const formatNumber = require('../dist/formatNumber').default

describe('test function formatNumber', () => {
  const num = 999999.715001

  const a = formatNumber(num)

  const b = formatNumber(num, {
    decimals: 3,
    decPoint: '.',
    roundtag: 'ceil'
  })

  const c = formatNumber(num, {
    decimals: 2,
    decPoint: '.',
    thousandsSep: ',',
    roundtag: 'round'
  })

  it('expect: 1000000', () => expect(a).to.equal('1000000'))
  it('expect: 999999.716', () => expect(b).to.equal('999999.716'))
  it('expect: 999,999.72', () => expect(c).to.equal('999,999.72'))

})
