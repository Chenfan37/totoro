define(function(require) {
  var expect = require('expect')
  var example = require('example')

  describe('GBK �����׼�', function() {
    it('A GBK ��������', function() {
      expect(example()).to.be('A simple sample.')
    })
  })
})
