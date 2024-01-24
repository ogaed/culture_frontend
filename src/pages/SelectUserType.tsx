import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SelectUserType = ()=>{
     const [type, setType] = useState('')
     const navigate = useNavigate()
     const [erroMsg, setErrorMsg] = useState('')
      

    
     const proceedToSignUp = (e)=>{
      e.preventDefault
        let role = {type: type}
        if(!role.type){
            setErrorMsg("Please Select Either Client Or Farmer")
        }else{
          navigate(`/auth/signup/${role.type}`)
        }

      
          localStorage.setItem('Type', JSON.stringify(type))
      
   }
return(
     <div className="max-w-125 absolute top-50 left-100  rounded-sm bg-no-repeat bg-[url('images/landing/how-is-works-bg.png')] border shadow-xl border-stroke ">
     <div className="flex justify-center items-center">
            <div className="text-center  py-17.5 px-26">
                <h1 className='text-center font-bold text-green text-xl mb-3'>Select Role Your Role</h1>
                <span className='text-danger'>{erroMsg}</span>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                   Role
                  </label>
                  <div className="relative">
                    <select
                    value={type} 
                    onChange={(e)=>setType(e.target.value)}
                    placeholder="6+ Characters, 1 Capital letter"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    > 
                    <option>Select_Role</option>
                    <option>Farmer</option>
                    <option>Client</option>
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <button
                  onClick={proceedToSignUp}
                    type="submit"
                    className="w-full cursor-pointer rounded-lg border border-green bg-green p-4 text-white transition hover:bg-opacity-90"
                  >Proceed </button>

              <div className="mt-6 text-center">
                  <p>
                    {' '}
                    <Link to="/location" className="text-green">
                     Back
                    </Link>
                  </p>
                </div>
                </div>
            </div>
     </div>
   </div>
)

}

export default SelectUserType