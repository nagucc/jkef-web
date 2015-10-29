'use strict';

describe('Service: douban', function () {

  // load the service's module
  beforeEach(module('jkefWebApp'));

  // instantiate service
  var douban;
  beforeEach(inject(function (_douban_) {
    douban = _douban_;
  }));

  it('should do something', function () {
    expect(!!douban).toBe(true);
  });

});
