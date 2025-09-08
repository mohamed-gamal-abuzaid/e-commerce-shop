import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Successpage = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col">
        <Image src="/images/order.svg" alt="success" height={300} width={300}/>
        <h1 className="mb-8 text-3xl mt-2 font-bold uppercase text-green-600"> Order Successful</h1>
        <Link href="/">
            <Button>Go To Home</Button>
        </Link>
    </div>
  )
}
export default Successpage