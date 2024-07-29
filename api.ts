export const editTodo = async ({ id, payload }: { id: string; payload: {} }) => {
  const result = await $fetch("/api/todos/edit", {
    method: "POST",
    body: {
      id,
      payload,
    },
  });

  if (!result.acknowledged) {
    console.error(`Error editing a todo!`);
  }
};

export const removeTodo = async ({ id }: { id: string }) => {
  const result = await $fetch("/api/todos/remove", {
    method: "POST",
    body: {
      id,
    },
  });

  if (!result.acknowledged) {
    console.error(`Error removing a todo!`);
  }
};

export const addTodo = async ({ payload }: { payload: {} }) => {
  const result = await $fetch("/api/todos/add", {
    method: "POST",
    body: payload,
  });

  if (!result.acknowledged) {
    console.error(`Error adding a todo!`);
  }
};
