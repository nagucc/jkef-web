'use strict';

describe('Service: acceptor', function () {

  // load the service's module
  beforeEach(module('jkefWebApp'));

  // instantiate service
  var acceptor;
  beforeEach(inject(function (_acceptor_) {
    acceptor = _acceptor_;
  }));

  it('should do something', function () {
    expect(!!acceptor).toBe(true);
  });

});
