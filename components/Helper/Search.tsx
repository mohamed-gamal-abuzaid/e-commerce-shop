import { SearchIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog"

const Search = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={"Pointer"}/>
        </DialogTrigger>
        <DialogContent>
            <DialogTitle className="text-black flex items-center justify-center lg:text-2xl sm:text-xl mt-6">What You Want ?</DialogTitle>
            <form >
                <input type="text" placeholder="Search Product" className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 mb-6 outline-none"/>
            </form>
        </DialogContent>
    </Dialog>
  )
}
export default Search