import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/ProductTable';

const Product = ()=>{
   return(
     <div className="mx-auto max-w-270">
     <Breadcrumb pageName='Product'/>

     <div className="flex flex-col gap-10">
         <TableOne />
       </div>

     </div>
   )  
}

export default Product