import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/PaymentTable';

const Payments = ()=>{
   return(
     <div className="mx-auto max-w-270">
     <Breadcrumb pageName='Payments'/>

     <div className="flex flex-col gap-10">
         <TableOne />
       </div>

     </div>
   )  
}

export default Payments