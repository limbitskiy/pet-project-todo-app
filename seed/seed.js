db = db.getSiblingDB("sandbox-db");

db.todos.insertMany([
  {
    title: "Первое дело",
    urgent: true,
  },
  {
    title: "С этим покончено",
    completed: true,
  },
]);
