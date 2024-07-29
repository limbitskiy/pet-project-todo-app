export default defineEventHandler(async (event) => {
  const { id, payload } = await readBody(event);

  const result = await $fetch("http://localhost:5005/edit-todo", {
    method: "POST",
    body: {
      id,
      payload,
    },
  });

  return result;
});
