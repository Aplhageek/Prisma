import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query", "error", "info", "warn"] });

// everything is async
async function main() {
    const user = await prisma.user.create({ data: { name: "Jayesh" } });
    console.log(user);
}


/**
 * althoug we dont need to disconnet as it is disconnected automatically after code is executed.
 */

main()
.then((error) => {
    console.log(error);
})
.finally(async() => {

    await prisma.$disconnect();
})