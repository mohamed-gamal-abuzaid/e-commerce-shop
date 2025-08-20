import Image from "next/image"


const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-gray-200">
        <div className="w-4/5 border-b-[1.2px] border-t-[1.2px] pb-8 pt-8 border-t-slate-500 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
                <h1 className=" text-[25px] uppercase font-semibold text-black mb-4">Mix Shop</h1>
                <p className="text-sm text-black opacity-60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut at soluta atque quasi id commodi placeat cupiditate ipsum voluptatibus, sequi tempora dignissimos modi numquam voluptate saepe error unde animi! Nisi?</p>
                <p className="text-sm mt-6 text-black opacity-30"> 01122503776  - mohamedgamal03776@gmail.com</p>
            </div>
            <div className="lg:mx-auto">
                <h1 className="footer__title">Information</h1>
                <p className="footer__link">About Us</p>
                <p className="footer__link">Privacy Police</p>
                <p className="footer__link">Return Police</p>
                <p className="footer__link">Shipping Police</p>
                <p className="footer__link">DropShipping </p>
            </div>
            <div className="lg:mx-auto">
                <h1 className="footer__title">Account</h1>
                <p className="footer__link">Dashboard</p>
                <p className="footer__link">My Orders</p>
                <p className="footer__link">Account Details</p>
                <p className="footer__link">Track My Orders</p>
            </div>
            <div className="lg:mx-auto">
                <h1 className="footer__title">Shop</h1>
                <p className="footer__link">Affiliate</p>
                <p className="footer__link">Best Sellers</p>
                <p className="footer__link">Latest Products</p>
                <p className="footer__link">Sale Products</p>
            </div>
        </div>
        <div className="flex justify-between w-4/5 pt-6 mx-auto">
            <p className="text-sm text-black opacity-60">@ Copyright Webdevwarriors 2025</p>
            <Image src={"/images/pay.svg"} alt="pay" height={230} width={230} className="object-contain sm:ml-auto"/>
        </div>
    </div>
  )
}
export default Footer