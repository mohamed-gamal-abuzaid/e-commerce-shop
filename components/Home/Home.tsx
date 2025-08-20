import AllProducts from "./AllProducts"
import Category from "./Category"
import TopPage from "./TopPage"

const Home = () => {
  return (
    <div className="w-[90%] mt-6 mx-auto">
      <TopPage/>
      <Category/>
      <AllProducts/>
    </div>
  )
}
export default Home