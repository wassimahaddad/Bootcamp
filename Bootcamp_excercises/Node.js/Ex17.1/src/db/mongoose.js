const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

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

const product = new Product({
  name: "some product",
  category: "some category",
  isActive: false,
  details: {
    description: "a boring one indeed",
    price: 10,
    images: ["link1", "link2"],
    phone: "+972554454543",
  },
});

const product2 = new Product({
  name: "some other product",
  category: "some category",
  isActive: true,
  details: {
    description: "super boring",
    price: 10,
    images: ["link1", "link2"],
    phone: "+972554454543",
  },
});

const product3 = new Product({
  name: "yet another product",
  category: "some other category",
  isActive: true,
  details: {
    description: "super boring",
    price: 10,
    images: ["link1", "link2"],
    phone: "+972554454543",
    discount: 15,
  },
});

product
  .save()
  .then(() => {
    console.log(product);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.log("Error!", error);
    mongoose.disconnect();
  });

product2
  .save()
  .then(() => {
    console.log(product2);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.log("Error!", error);
    mongoose.disconnect();
  });
product3
  .save()
  .then(() => {
    console.log(product3);
    mongoose.disconnect();
  })
  .catch((error) => {
    console.log("Error!", error);
    mongoose.disconnect();
  });
