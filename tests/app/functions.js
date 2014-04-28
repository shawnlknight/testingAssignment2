/*jshint expr:true */
/*globals describe:true, it:true, expect:true, beforeEach:true */
if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'underscore',
  'app/functions'
], function(_, answers) {

  describe('functions', function() {
    var sayItCalled = false;
    var sayIt = function(greeting, name, punctuation) {
          sayItCalled = true;
          return greeting + ', ' + name + (punctuation || '!');
        };

    beforeEach(function () {
      sayItCalled = false;
    });

    it('you should be able to use an array as arguments when calling a function', function() {
      var result = answers.argsAsArray(sayIt, [ 'Hello', 'Ellie', '!' ]);
      expect(result).to.eql('Hello, Ellie!');
      expect(sayItCalled).to.be.ok;
    });

    it('you should be able to change the context in which a function is called', function() {
      var speak = function() {
            return sayIt(this.greeting, this.name, '!!!');
          },
          obj = {
            greeting : 'Hello',
            name : 'Rebecca'
          };

      var result = answers.speak(speak, obj);
      expect(result).to.eql('Hello, Rebecca!!!');
      expect(sayItCalled).to.be.ok;
    });

    it('you should be able to use arguments', function () {
      var a = Math.random(),
          b = Math.random(),
          c = Math.random(),
          d = Math.random();

      expect(answers.useArguments(a)).to.eql(a);
      expect(answers.useArguments(a, b)).to.eql(a + b);
      expect(answers.useArguments(a, b, c)).to.eql(a + b + c);
      expect(answers.useArguments(a, b, c, d)).to.eql(a + b + c + d);
    });

  });
});
