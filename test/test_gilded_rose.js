var {expect} = require('chai');
var {Shop, Item} = require('../src/Item.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  //Test Case added by me

  it("should handle generic item degradation", function () {
    const gildedRose = new Shop([new Item("Generic Item", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
    expect(items[0].quality).to.equal(19);
  });

  it("should not change quality of Sulfuras", function () {
    const gildedRose = new Shop([new Item("Sulfuras", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(80);
  });

  it("should cap Aged Brie quality at 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });


});
