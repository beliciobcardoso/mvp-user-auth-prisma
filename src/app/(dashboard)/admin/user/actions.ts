'use server'
import { UserSchema } from '@/lib/formValidationSchemas'
import { prisma } from '@/lib/prisma'
import { Role, UserCreate, UserUpdate } from '@/lib/types'
import { hash } from 'bcryptjs'

export async function createUser(user: UserCreate) {
  const hashedPassword = await hash(user.password, 10)
  try {
    const data = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        hashedPassword,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export async function updateUser(user: UserUpdate) {
  const data = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  })
  return data
}

export async function updatePassword(user: UserSchema) {
  const hashedPassword = await hash(user.passwordHash, 10)
  const data = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      hashedPassword,
    },
  })
  return data
}

export async function getData() {
  const data = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
    orderBy: {
      name: 'asc',
    },
  })
  return data
}

export async function getUserAnalysts(role: Role) {
  const data = await prisma.user.findMany({
    where: {
      role,
    },
    select: {
      id: true,
      name: true,
    },
  })
  return data
}

export async function getUserRoleCount(role: Role) {
  const data = await prisma.user.count({
    where: {
      role,
    },
  })
  return data
}

export async function getUserByEmail(email: string) {
  const data = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      createdAt: true,
    },
  })
  return data
}
