// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { FUNDING ,PayPalButtons,PayPalScriptProvider} from "@paypal/react-paypal-js"

interface PaypalButtonProps{
    amount:string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess:(details:any)=>void;
}

const PayPalButton = ({amount,onSuccess}:PaypalButtonProps) => {
  return (
    <PayPalScriptProvider options={{
        clientId:process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency:"USD",
    }}>
        <PayPalButtons fundingSource={FUNDING.PAYPAL}  createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units:[
                    {
                        amount:{
                            value:amount
                        }
                    }
                ]
            })
        }}
        onApprove={(data,actions)=>{
            return actions.order?.capture().then((details)=>{
                onSuccess(details)
            })
        }}
        />
    </PayPalScriptProvider>
  )
}
export default PayPalButton