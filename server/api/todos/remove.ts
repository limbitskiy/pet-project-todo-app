export default defineEventHandler(async (event) => {
  const { id } = await readBody(event);

  const result = await $fetch("http://localhost:5005/remove-todo", {
    method: "POST",
    body: {
      id,
    },
  });

  return result;
});
