import Link from "next/link"
import Image from "next/image"
import Search from "../Helper/Search"
import { HeartIcon, UserIcon } from "lucide-react"
import ShoppingCartButton from "../Helper/ShoppingCartButton"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Nav = () => {

    return (
    <div className="h-[14vh] sticky top-0 z-[1] bg-white shadow-md">
        <div className="flex items-center justify-between w-[90%] md:w-4/5 mx-auto h-full">
            <Link href="/">
                <Image src="/images/mix.jpg" alt="Logo" width={100} height={90}/>
            </Link>
            <div className="flex items-center space-x-6">
                <Search/>
                <HeartIcon size={26} cursor={"pointer"}/>
                <ShoppingCartButton/>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <UserIcon size={30} cursor={"Pointer"}/>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    </div>
)}
export default Nav