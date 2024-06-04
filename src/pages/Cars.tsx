import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/CarsTable';

const Cars = ()=>{
   return(
     <div className="mx-auto max-w-270">
     <Breadcrumb pageName='Weights'/>

     <div className="flex flex-col gap-10">
         <TableOne />
       </div>

     </div>
   )  
}

export default Cars