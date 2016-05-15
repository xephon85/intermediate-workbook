var Browser = require('zombie');

describe('Full stack scenarios', function(){
  this.timeout(10000);

  describe('When we navigate to the index page', function(){
    var browser = new Browser();
    before(function(done){
      browser.visit('http://localhost:8080/apps/07tic-tac-toe/', done);
    });

    it('Then the title is correct', function(){
      browser.assert.text('title', 'Tic Tac Toe');
    });
  });
});
