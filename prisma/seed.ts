
// const {PrismaClient} = require('@prisma/client');
// import { PrismaClient } from "@prisma/client";

const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {

    const password = bcrypt.hashSync("admin123", 10);

    const userSeed = await prisma.user.create({
        data: {
            email: "admin@gmail.com",
            name: "Admin",
            role: "ADMIN",
            password,
            passport: "A12345678",
        },
    });

    console.log({userSeed});
}

main()

.then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
  
// async function main() {

//     const password = bcrypt.hashSync("admin123", 10)

//     const userSeed = await
//     ({
//         data: {
//             email:  "admin@email.com",
//             name:   "Admin",
//             role:   "ADMIN",
//             password
//         },
//     });

//     console.log({ userSeed });
// }

// main()