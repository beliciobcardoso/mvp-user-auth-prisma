import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { auth } from "@/lib/auth"
import Link from "next/link"


export default async function AvatarComp() {
    const session = await auth()
    const user = session?.user
    const image = user?.image || ""
    const name = user?.name || ''
    const email = user?.email || ""
    return (
        <div className="flex items-center">
            <div className="pr-2 text-right">
                <p>{name}</p>
                <p className="text-sm">{email}</p>
            </div>
            <Link href="/api/auth/signout">
            <Avatar>
                <AvatarImage src={image} />
                <AvatarFallback>{name.split(' ')
                .map((word, index, arr) =>
                  index === 0 || index === arr.length - 1 ? word[0] : '',
                )
                .join('')}</AvatarFallback>
            </Avatar>
            </Link>
        </div>
    )
}