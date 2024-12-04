import { auth } from '@/lib/auth';
import { Role, User } from '@prisma/client';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  
  if (!session) {
    redirect('/api/auth/signin');
  } 

  const user = session?.user as User;
  const id = user?.id;
  const role = user?.role as Role;
  const name = user?.name;
  const email = user?.email;
  const image = user?.image || '';

  return (
    <section className="">
      <h1>Page Home</h1>
      <section>
        <p>{id}</p>
        <Image src={image} alt={name} width={50} height={50}  className='rounded-3xl' />
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
      </section>
    </section>
  );
}
