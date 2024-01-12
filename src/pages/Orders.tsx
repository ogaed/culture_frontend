import Breadcrumb from "../components/Breadcrumb";
import OrdersTable from "../components/OrdersTable";

const Orders = ()=>{
return(
     <div className="mx-auto max-w-270">
     <Breadcrumb pageName="Orders"></Breadcrumb>

     <div className="flex flex-col gap-10">
         <OrdersTable />
       </div>
 </div>
)
}

export default Orders