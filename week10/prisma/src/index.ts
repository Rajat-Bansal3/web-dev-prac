import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
      password,
    },
  });
  console.log(res);
}
// insertUser("admin1", "123456", "rajat", "bansal")
interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}
// updateUser("admin1", { firstName: "rajjo", lastName: "Bansu" });
async function getUser(username: string) {
  const res = await prisma.user.findUnique({ where: { username } });
  console.log(res);
}
// getUser("admin1")

async function createTodo(userId: number, title: string, description: string) {
  const res = await prisma.todo.create({
    data: {
      title,
      description,
      userId,
    },
  });
  console.log(res);
}

// createTodo(1, "go to gym", "go to gym and do 10 pushups");
async function getTodos(userId: number) {
  const res = await prisma.todo.findMany({ where: { userId } });
  console.log(res);
}

// getTodos(1);
async function getAllTodos() {
  const res = await prisma.todo.findMany();
  console.log(res);
}
// getAllTodos()

async function getTodosAndUserDetails(userId: number) {
  const res = await prisma.todo.findMany({
    where: { userId },
    select: {
      creator: true,
      title: true,
      description: true
  }
  });
  console.log(res);
}

// getTodosAndUserDetails(1);
async function getUserwithAllTodos(id: number) {
  const res = await prisma.user.findMany({
    where: { id },
    include: {
      todos: true,
    },
  });
  console.log(res);
}
// getUserwithAllTodos(1);
