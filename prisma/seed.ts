import { PrismaClient, Role } from '@prisma/client'
import bcryptjs from 'bcryptjs'
const prisma = new PrismaClient()


async function main() {
    const hashedPassword = await bcryptjs.hash('password', 10)

      // USERS
  const users = [
    { email: 'fulano.tal@gemail.com', name: 'Fulano Tal', role: Role.ADMIN },
    { email: 'jane.doe@email.com', name: 'Jane Doe', role: Role.COORDINATOR },
    { email: 'maria.doe@email.com', name: 'Maria Doe', role: Role.ANALYST },
    { email: 'antonia.doe@email.com', name: 'Antonia Doe', role: Role.ANALYST },
    { email: 'jose.doe@email.com', name: 'José Doe', role: Role.USER },
  ]
    
  for (const user of users) {
    await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        image: '',
        hashedPassword,
        role: user.role,
        createdAt: new Date(),
      },
    })
  }    
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
