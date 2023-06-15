import { PrismaClient, User } from "@prisma/client";

type customUser = {
     firstName: string;
     lastName: string;
     email: string;
     password: string;
};

const prisma = new PrismaClient();

async function getUser(email: string): Promise<User | null> {
     const user = await prisma.user.findUnique({
          where: { email: email },
     });
     return user;
}

async function postUser(user: customUser): Promise<boolean> {
     const newUser = await prisma.user.create({
          data: {
               firstName: user.firstName,
               lastName: user.lastName,
               email: user.email,
               password: user.password,
          },
     });

     if (!newUser) {
          return false;
     }
     return true;
}

async function updateUser(user: customUser): Promise<boolean> {
     const updatedUser = await prisma.user.update({
          where: { email: user.email },
          data: {
               firstName: user.firstName,
               lastName: user.lastName,
               email: user.email,
               password: user.password,
          },
     });
     if (!updatedUser) {
          return false;
     }
     return true;
}

export { getUser, postUser, updateUser };
