'use strict';
mocha.setup('bdd');
let assert = chai.assert;

describe("potencia", function() {

  describe("eleva x a la potencia de 3", function() {
	
    function elevar3(x) {
      let esperado = x * x * x;
      it(`${x} elevado a 3 es ${esperado}`, function() {
        assert.equal(potencia(x, 3), esperado);
      });
    }
    for (let x = 1; x <= 5; x++) {
      elevar3(x);
    }
  });
  
  describe("excepciones", function() { 
  
  	before(() => console.log("Antes de todos los tests"));
    after(() => console.log("Despues de todos los tests"));

    beforeEach(() => console.log("Antes de cada test"));
    afterEach(() => console.log("Despues de cada test"));  
  
    it("para numeros negativos el resultado es NaN", () => {
		console.log("Test potencia() para numeros negativos");
        assert.isNaN(potencia(2, -1));
    });
    it("para numeros con decimales el resultado is NaN", () => {
		console.log("Test potencia() para numeros decimales");
        assert.isNaN(potencia(2, 1.5));
    });
  });
  

});


describe("raiz", function() {

	let esperado = 5;
    it('raiz cuadrada de 25 es 5', () => {assert.equal(raiz(25, 2), esperado);});
});

mocha.run();