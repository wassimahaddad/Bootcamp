const mongodb = require("mongodb");
const { ObjectId } = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogs";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").insertMany([
      {
        _id: 10001,
        name: "Wassim",
        posts: [],
        comments: [],
      },
      {
        _id: 10002,
        name: "Reem",
        posts: [],
        comments: [],
      },
    ]);

    db.collection("posts").insertMany([
      {
        _id: 20001,
        title: "Lorem 200",
        preview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis molestiae culpa vel veritatis saepe dolore officia qui deleniti quas?",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis quibusdam nam nulla voluptas voluptate recusandae corporis libero maiores, deleniti unde perferendis magnam necessitatibus, nesciunt illum. Molestiae quis a eos iste perferendis blanditiis quidem ab quam nulla dolorum, commodi ad aspernatur ullam quisquam at, officiis eaque pariatur architecto cumque ratione voluptates molestias. Dolore dolorum nobis magnam vitae vero? Nesciunt, quod! Consequatur incidunt beatae, earum illo deserunt deleniti quia magnam perferendis qui libero minima error nisi animi ipsa eveniet vitae voluptatum tenetur cupiditate odit, nesciunt facilis, asperiores at eos? Necessitatibus, in eius. Odit laborum accusantium voluptate nemo sint fugiat explicabo maiores modi perferendis ipsum, at delectus sit, aperiam qui nam ea rerum. Iste placeat pariatur accusamus, libero recusandae error soluta eum quo quaerat sapiente distinctio quas unde, nam consequatur tempora harum cum illo commodi voluptatum! Officiis rerum ad ipsam asperiores eos dolor, porro recusandae sequi aut blanditiis repudiandae voluptatum nostrum! Facilis fugit aspernatur officiis eligendi, inventore laborum labore! Debitis totam provident perferendis blanditiis placeat minima velit sapiente labore, consectetur pariatur natus dolorem in illum, aliquam doloribus non. Ipsum quibusdam tenetur corrupti reiciendis excepturi veniam rerum commodi? Quaerat consequuntur neque nemo cumque placeat, odit praesentium aspernatur nulla animi, vel explicabo incidunt dolorum?",
        owner: "",
        comments: [],
      },
      {
        _id: 20002,
        title: "Lorem 200",
        preview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perspiciatis molestiae culpa vel veritatis saepe dolore officia qui deleniti quas?",
        text:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis quibusdam nam nulla voluptas voluptate recusandae corporis libero maiores, deleniti unde perferendis magnam necessitatibus, nesciunt illum. Molestiae quis a eos iste perferendis blanditiis quidem ab quam nulla dolorum, commodi ad aspernatur ullam quisquam at, officiis eaque pariatur architecto cumque ratione voluptates molestias. Dolore dolorum nobis magnam vitae vero? Nesciunt, quod! Consequatur incidunt beatae, earum illo deserunt deleniti quia magnam perferendis qui libero minima error nisi animi ipsa eveniet vitae voluptatum tenetur cupiditate odit, nesciunt facilis, asperiores at eos? Necessitatibus, in eius. Odit laborum accusantium voluptate nemo sint fugiat explicabo maiores modi perferendis ipsum, at delectus sit, aperiam qui nam ea rerum. Iste placeat pariatur accusamus, libero recusandae error soluta eum quo quaerat sapiente distinctio quas unde, nam consequatur tempora harum cum illo commodi voluptatum! Officiis rerum ad ipsam asperiores eos dolor, porro recusandae sequi aut blanditiis repudiandae voluptatum nostrum! Facilis fugit aspernatur officiis eligendi, inventore laborum labore! Debitis totam provident perferendis blanditiis placeat minima velit sapiente labore, consectetur pariatur natus dolorem in illum, aliquam doloribus non. Ipsum quibusdam tenetur corrupti reiciendis excepturi veniam rerum commodi? Quaerat consequuntur neque nemo cumque placeat, odit praesentium aspernatur nulla animi, vel explicabo incidunt dolorum?",
        owner: "",
        comments: [],
      },
    ]);

    db.collection("comments").insertMany([
      {
        _id: 30001,
        post: "",
        owner: "",
        comment: "Comment one",
      },
      {
        _id: 30002,
        post: "",
        owner: "",
        comment: "Comment two",
      },
    ]);

    db.collection("summary").insertMany([
      {
        _id: 40001,
        title: "",
        owner: "",
        preview: "",
      },
      {
        _id: 40002,
        title: "",
        owner: "",
        preview: "",
      },
    ]);

    const post1 = db
      .collection("posts")
      .findOne({ _id: 20001 })
      .then((result) => {
        db.collection("summary").updateOne(
          { _id: 40001 },
          {
            $set: {
              title: result.title,
              post: result.preview,
            },
          }
        );
        db.collection("comments").updateOne(
          { _id: 30001 },
          {
            $set: {
              post: result.text,
            },
          }
        );
        db.collection("users").updateOne(
          { _id: 10001 },
          {
            $push: {
              posts: result.text,
            },
          }
        );
      });

    const post2 = db
      .collection("posts")
      .findOne({ _id: 20002 })
      .then((result) => {
        db.collection("summary").updateOne(
          { _id: 40002 },
          {
            $set: {
              title: result.title,
              preview: result.preview,
            },
          }
        );
        db.collection("comments").updateOne(
          { _id: 30002 },
          {
            $set: {
              post: result.text,
            },
          }
        );
        db.collection("users").updateOne(
          { _id: 10002 },
          {
            $push: {
              posts: result.text,
            },
          }
        );
      });

    const user1 = db
      .collection("users")
      .findOne({ _id: 10001 })
      .then((result) => {
        db.collection("summary").updateOne(
          { _id: 40001 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
        db.collection("comments").updateOne(
          { _id: 30001 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
        db.collection("posts").updateOne(
          { _id: 20001 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
      });
    const user2 = db
      .collection("users")
      .findOne({ _id: 10002 })
      .then((result) => {
        db.collection("summary").updateOne(
          { _id: 40002 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
        db.collection("comments").updateOne(
          { _id: 30002 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
        db.collection("posts").updateOne(
          { _id: 20002 },
          {
            $set: {
              owner: result.name,
            },
          }
        );
      });

    const comment1 = db
      .collection("comments")
      .findOne({ _id: 30001 })
      .then((result) => {
        db.collection("posts").updateOne(
          { _id: 20001 },
          {
            $push: {
              comments: result.comment,
            },
          }
        );
        db.collection("users").updateOne(
          { _id: 10001 },
          {
            $push: {
              comments: result.comment,
            },
          }
        );
      });
    const comment2 = db
      .collection("comments")
      .findOne({ _id: 30002 })
      .then((result) => {
        db.collection("posts").updateOne(
          { _id: 20002 },
          {
            $push: {
              comments: result.comment,
            },
          }
        );
        db.collection("users").updateOne(
          { _id: 10002 },
          {
            $push: {
              comments: result.comment,
            },
          }
        );
      });
  }
);
