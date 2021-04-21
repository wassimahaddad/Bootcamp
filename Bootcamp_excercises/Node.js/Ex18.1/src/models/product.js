const mongoose = require("mongoose");
const validator = require("validator");

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 10) {
          throw new Error("description should be at least 10 characters");
        }
      },
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("Price is a positivie value");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Object,
      required: true,
      validate(value) {
        if (value.length < 2) {
          throw new Error("at least two images");
        }
      },
    },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          console.log(value);
          throw new Error("Not a valid Israel phone number");
        }
      },
    },
    date: {
      type: String,
      default: new Date(),
    },
  },
});

module.exports = Product;
