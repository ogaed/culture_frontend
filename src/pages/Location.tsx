import { useEffect, useState } from 'react'
import Pin from '../images/logo/location.png'
import { useNavigate } from 'react-router-dom'


const Location = ()=>{
    
     const [longitude, setLongitude] = useState<number | undefined>(0)
     const [latitude, setLatitude] = useState<number | undefined>(0)
     const [errorMsg, setErrorMsg] = useState('');
     const navigate  = useNavigate()

     const loc = {
       longitude,
       latitude
     }
     const stringifyloc = JSON.stringify(loc)
 
 useEffect(()=>{
      navigator.geolocation.getCurrentPosition((location)=>{
         setLatitude(location.coords.latitude)
         setLongitude(location.coords.longitude)
      })

      localStorage.setItem('Location', stringifyloc) 
  
      
 },[latitude,longitude])



  const Login = () =>{
     try {
        
          let data = {longitude: longitude, latitude: latitude}
          console.log(data)

          if (data.latitude == 0 && data.longitude == 0) {
              setErrorMsg('Click Allow Button To Proceed');
          } else {

              navigate(`/user_type/${data.longitude}/${data.longitude}`);
          }
      } catch (e) {
          alert(e)
      }
          
  
  
      
  }

return(
     <div className=" max-w-125 rounded-sm bg-no-repeat bg-[url('images/landing/how-is-works-bg.png')] absolute border shadow-xl top-15 left-100 right-0  border-stroke ">
     <div className="flex flex-wrap items-center">
            <div className="text-center py-17.5 px-26">
            <span className='text-danger'>{errorMsg}</span>
                <h1 className='text-center font-bold text-green text-xl'>Allow Device to select Location</h1>
                <img className='w-70' src={Pin} alt="Location"  />
              
                <button
                    type="submit"
                    onClick={Login}
                    className="w-full mt-2 cursor-pointer rounded-lg border border-green bg-green p-4 text-white transition hover:bg-opacity-90"
                  >Proceed </button>
            </div>
     </div>
   </div>
)
}


export default Location