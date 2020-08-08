exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "dean",
      password: "$2a$14$AYh7ALQodN5HPtWlTUQGyeSAWnoVvxcv4lOtnNWMUbMCYbdNI2hHi",
      department: "administration",
      role: "dean",
    },
    {
      username: "tiff",
      password: "$2a$14$NcqnuxWtVwpqlSQpu/B3peKe5ylbqVRjOxt6/f2AJkSItZz9L80Ke",
      department: "art",
      role: "teacher",
    },
    {
      username: "tom",
      password: "$2a$14$NcqnuxWtVwpqlSQpu/B3peKe5ylbqVRjOxt6/f2AJkSItZz9L80Ke",
      department: "art",
      role: "student",
    },
    {
      username: "ben",
      password: "$2a$14$VQoUHt3hbw8Au0Xi.arg.ekf5v7mCRSp/MFYXX1/GOZG/3gcdX5rG",
      department: "english",
      role: "student",
    },
    {
      username: "bob",
      password: "$2a$14$EPTe3.VvWLfUEQG8LarQUuqp/mG0BkZKHGF8FUwzVNjYKTDeNTfQK",
      department: "english",
      role: "teacher",
    },
    {
      username: "stacy",
      password: "$2a$14$9lYdQz4X4DTQenpSLD0ufuPMfjM7SowBqnZRLpBaeD7uDXu0ci90O",
      department: "science",
      role: "teacher",
    },
    {
      username: "sam",
      password: "$2a$14$J69NCUq/SWr.v/1SBoJSd..p2qrP5oPXbgxBzHT8336hY9Fc/X0hm",
      department: "science",
      role: "student",
    },
  ]);
};
