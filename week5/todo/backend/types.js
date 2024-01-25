const zod = require("zod");

const createTodo = zod.objectUtil({
  title: zod.string(),
  description: zod.string(),
});
const updateTodo = zod.objectUtil({
    id: zod.string(),
})

module.exports = {
    createTodo,
    updateTodo
}