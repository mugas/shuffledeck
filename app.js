new Vue({
  el: "#app",
  data: {
    ranks: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ],
    suits: ["7", "5", "9", "1"],
    cards: [],
    suitColor: {
      "7": "clubs",
      "5": "spades",
      "9": "hearts",
      "1": "diamonds"
    },
    shuffleSpeed: "shuffleMedium",
    isDeckShuffled: false
  },
  created() {
    this.displayInitialDeck();
  },
    methods: {
      displayInitialDeck() {
        let id = 1;
        this.cards = [];

        for (let s = 0; s < this.suits.length; s++) {
          for (let r = 0; r < this.ranks.length; r++) {
            let card = {
              id: id,
              rank: this.ranks[r],
              suit: this.suits[s]
            };
            this.cards.push(card);
            id++;
          }
        }
        this.isDeckShuffled = false;
      },
    shuffleDeck() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);

        let temp = this.cards[i];

        Vue.set(this.cards, i, this.cards[randomIndex]);
        Vue.set(this.cards, randomIndex, temp);
      }
      this.isDeckShuffled = true;
    }
  }
});
