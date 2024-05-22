const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(":: ", id.id.length);
console.log(id.toHexString().length);

// old way to connect

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log(":: unable to connect db");
//     }

//     console.log(":: running")
//     const db = client.db(databaseName)

//     // db.collection('users').insertOne({
//     //     name: 'sumit',
//     //     age:"25"
//     // },(error,result)=>{
//     //   if(error){
//     //     return console.log(":: unable to insert")
//     //   }

//     //   console.log(result.ops)
//     // })
//     db.collection('users').insertMany([{
//       name: 'sumit',
//       age:"25"
//   },{name:'test',age:89}],(error,result)=>{
//     if(error){
//       return console.log(":: unable to insert many")
//     }

//     console.log(result.ops)
//   })
//   }
// );

// lastest updated way to coonnect
const client = new MongoClient(connectionURL);

async function run() {
  try {
    await client.connect();

    console.log(":: connected");
  } catch (error) {
    console.log(":: eror connected");
  }
}

run();

const myDb = client.db(databaseName);
// const myColle = myDb.collection("users");
// const result = myColle.insertMany([
//   {
//     name: "test",
//     age: 12,
//   },
//   { name: "test1", age: 122 },
// ]);
// console.log(";; res", result);

// const insertTask = async () => {
//   const newTaskColl = myDb.collection("task");
//   const results = await newTaskColl.insertMany([
//     { name: "task1", completed: false },
//     { name: "task2", completed: false },
//     { name: "task23", completed: true },
//   ]);
//   console.log(":: -->new", results);
// };

// insertTask();

// read
myDb
  .collection("users")
  .findOne({ name: "updateUSer" })
  .then((result) => {
    console.log(":: user", result);
  })
  .catch((error) => {
    console.log("::", error);
  });

myDb.collection('users').find({ name: "updateUSer" }).toArray().then((result)=>{
  console.log(":: d",result)
})

// update
myDb
  .collection("users")
  .updateOne(
    { _id: new ObjectId("664324bfa13a983887fd1857") },
    {
      $inc: {
        age: 1,
      },
    }
  )
  .then((result) => {
    console.log("::", result);
  })
  .catch((error) => {
    console.log("::", error);
  });

myDb
  .collection("task")
  .updateMany(
    { completed: false },
    {
      $set: {
        completed: true,
      },
    }
  )
  .then((result) => {
    console.log("::", result.modifiedCount);
  })
  .catch((error) => {
    console.log(error);
  });

// deletemany
myDb
  .collection("users")
  .deleteMany({
    age: 122,
  })
  .then((result) => {
    console.log(":: dbmany", result);
  })
  .catch((error) => {
    console.log(error);
  });

// dbOne
myDb
  .collection("task")
  .deleteOne({
    name: "task23",
  })
  .then((result) => {
    console.log(":: dbone", result);
  })
  .catch((error) => {
    console.log(error);
  });
