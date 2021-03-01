// ---------------------- 1 -----------------

const book1 = {
  title: "Utopia",
  author: "Sir Thomas More",
  year: 2005,
};
const book2 = {
  title: "Interventions",
  author: "Noam Chomsky",
  year: 2007,
};

// ---------------------- 2,3, -----------------

const bookUtil = {
  bookUtilgetFirstPublished: function () {
    return book1.year > book2.year ? "Book1" : "Book2";
  },
  // ---------------------- 4 -----------------
  setNewEdition: function (b, e) {
    b.lastEdition = e;
  },
  // ---------------------- 5 -----------------

  setLanguage: function (b, l) {
    b.Language = l;
  },

  // ---------------------- 6 -----------------

  setTranslation: function (b, t) {
    b.Translation = t;
  },

  // ---------------------- 7 -----------------

  setPublisher: function (b, n, loc) {
    b.publisher = [n, loc];
  },
  // ---------------------- 8 -----------------

  isSamePublisher: function (b1, b2) {
    return b1.publisher[0] === b2.publisher[0] &&
      b1.publisher[1] === b2.publisher[1]
      ? true
      : false;
  },
};
