function cityTaxes(name, population, treasury) {
    const city = {
      name: name,
      population: population,
      treasury: treasury,
      taxRate: 10,
      collectTaxes: function() {
        const taxes = Math.floor(this.population * this.taxRate);
        this.treasury += taxes;
      },
      applyGrowth: function(percentage) {
        const growth = Math.floor(this.population * percentage / 100);
        this.population += growth;
      },
      applyRecession: function(percentage) {
        const recession = Math.floor(this.treasury * percentage / 100);
        this.treasury -= recession;
      }
    };
    return city;
  }
  