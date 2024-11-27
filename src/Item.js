class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  
    updateQuality() {
      this.sellIn -= 1;
      if (this.quality > 0) this.quality -= 1;
    }
  }
  
  class AgedBrie extends Item {
    updateQuality() {
      this.sellIn -= 1;
      if (this.quality < 50) this.quality += 1;
    }
  }
  
  class Sulfuras extends Item {
    updateQuality() {
    }
  }
  
  class BackstagePass extends Item {
    updateQuality() {
      this.sellIn = this.sellIn - 1;
      if (this.sellIn < 0) {
        this.quality = 0;
      } else if (this.sellIn <= 5) {
        this.quality = this.quality + 3;
      } else if (this.sellIn <= 10) {
        this.quality = this.quality + 2;
      } else {
        this.quality = this.quality +  1;
      }
      if (this.quality > 50) this.quality = 50;
    }
  }



  class Shop{
    constructor(items){
      this.items = items.map((item) => {
        switch(item.name){
            case "AgedBrie": {
              return new AgedBrie(item.name, item.sellIn, item.quality)
            }

            case "Sulfuras":{
              return new Sulfuras(item.name, item.sellIn, item.quality)
            }

            case "BackstagePass":{
              return new BackstagePass(item.name, item.sellIn, item.quality)
            }

            default: {
              return new Item(item.name, item.sellIn, item.quality)
            }
        }
      })
    }

    updateQuality(){
      this.items.forEach((item) => item.updateQuality())

      return this.items;
    }

  }

  module.exports = {
    Item,
    Shop
  }
  
  