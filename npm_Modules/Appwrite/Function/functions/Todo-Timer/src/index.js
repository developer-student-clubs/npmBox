const sdk = require("node-appwrite");

module.exports = async function (req, res) {
  const client = new sdk.Client();

  const database = new sdk.Databases(client);

  client
    .setEndpoint("Your Endpoint")
    .setProject("Your Project Id")
    .setKey("Secret Key")
    .setSelfSigned(true);

  database.listDocuments("Database Id", "Collection Id").then(
    (response) => {
      response.documents.forEach((document) => {
        database
          .updateDocument(
            "Database Id",
            "Collection Id",
            document.$id,
            { isCompleted: false }
          )
          .then(
            (resp) => {
              console.log(resp);
            },
            (err) => {
              res.json({ error: err });
            }
          );
      });
    },
    (err) => {
      console.log(err);
      res.json({ error: err });
    }
  );

  res.json({ completed: true });
};
