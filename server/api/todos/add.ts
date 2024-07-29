export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const result = await $fetch("http://localhost:5005/add-todo", {
    method: "POST",
    body: body,
  });

  return result;
});
