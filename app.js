new Vue({
  el: "#app",
  data: {
    ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    suits: ["♥", "♦", "♠", "♣"],
    cards: [],
    suitColor: {
      "#": "red",
      "@": "black",
      "&": "red",
      "*": "red"
    }
  },
  created() {
    this.displayInitialDeck();
  },
  methods: {
    displayInitialDeck() {
      let id = 1;
      this.cards = [];

      for (let i = 0; i < this.suits.length; i++) {
        for (let j = 0; j < this.ranks.length; j++) {
          let card = {
            id: id,
            rank: this.ranks[j],
            suits: this.suits[i]
          };
          this.cards.push(card);
          id++;
        }
      }
    }
  }
});
