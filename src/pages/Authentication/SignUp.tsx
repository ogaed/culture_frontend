import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo_green.png';
import { useState } from 'react';
import { API_URL } from '../../constants.d';

const SignUp = () => {
   const [email, setEmail]  = useState('')
   const [first_name, setFirstname] = useState('')
   const [last_name, setLastname] = useState('')
   const [password, setPassword] = useState('')
   const [national_id, setNationalId] = useState('')
   const [phone_number, setNumber] = useState('')
   const storedLocation = JSON.parse(localStorage.getItem('Location'))
   const storedType= JSON.parse(localStorage.getItem('Type'))
  
   const createUser =async (e) => {
    e.preventDefault()
    
    const userData = {
      email,
      password,
      first_name,
      last_name,
      national_id,
      phone_number,
      role:storedType,
      location: storedLocation

    }

try {
  const response = await fetch(`${API_URL}/users/sign_up`,{
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(userData)
  })
  if (response.ok) {
    alert('SuccessRegistered Successfully!!')
  }else{
    console.error('user already exist')
  }
} catch (error) {
  console.error('Registration error:', error);
  alert('ErrorAn error occurred during registration.');
}
       
   }

  return (
    <>
      <div className="rounded-sm absolute bg-no-repeat bg-cover bg-[url('images/landing/how-is-works-bg.png')] border shadow-xl top-2 left-25 right-25  border-stroke">
      <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
            <h2 className="mb-7 text-2xl text-center font-bold text-green dark:text-white sm:text-title-xl2">
                TMS 
              </h2>
              {/* <Link className="mb-5.5 inline-block" to="/">
                <img className="" src={Logo} alt="Logo" />
              </Link> */}
                <h1></h1>
              <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>
            </div>
          </div>


          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div className="w-full sm:p-12.5 xl:p-17.5">
                        
            <h2 className="mt-1 text-2xl  text-center text-green sm:text-title-x12">
                Sign Up
              </h2>


              <form onSubmit={createUser}>
                <div className="mb-4">
                  <label className="mb-2 block font-medium text-black dark:text-white">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={first_name}
                      onChange={(e)=>setFirstname(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-15 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-2 top-2">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2 block font-medium text-black dark:text-white">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={last_name}
                      onChange={(e)=>setLastname(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-15 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-2 top-2">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M11.0008 9.52185C13.5445 9.52185 15.607 7.5281 15.607 5.0531C15.607 2.5781 13.5445 0.584351 11.0008 0.584351C8.45703 0.584351 6.39453 2.5781 6.39453 5.0531C6.39453 7.5281 8.45703 9.52185 11.0008 9.52185ZM11.0008 2.1656C12.6852 2.1656 14.0602 3.47185 14.0602 5.08748C14.0602 6.7031 12.6852 8.00935 11.0008 8.00935C9.31641 8.00935 7.94141 6.7031 7.94141 5.08748C7.94141 3.47185 9.31641 2.1656 11.0008 2.1656Z"
                            fill=""
                          />
                          <path
                            d="M13.2352 11.0687H8.76641C5.08828 11.0687 2.09766 14.0937 2.09766 17.7719V20.625C2.09766 21.0375 2.44141 21.4156 2.88828 21.4156C3.33516 21.4156 3.67891 21.0719 3.67891 20.625V17.7719C3.67891 14.9531 5.98203 12.6156 8.83516 12.6156H13.2695C16.0883 12.6156 18.4258 14.9187 18.4258 17.7719V20.625C18.4258 21.0375 18.7695 21.4156 19.2164 21.4156C19.6633 21.4156 20.007 21.0719 20.007 20.625V17.7719C19.9039 14.0937 16.9133 11.0687 13.2352 11.0687Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-15 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-2 top-2">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-5 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-2 top-2">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
             
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    National ID
                  </label>
                  <div className="relative">
                    <input
                    value={national_id}
                    onChange={(e)=>setNationalId(e.target.value)}
                      type="number"
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-5 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-1 top-3">
                    <svg 
                    className='fill-current'
                    width="17"
                     height="17" 
                     viewBox="0 0 17 17" 
                     fill="none" xmlns="http://www.w3.org/2000/svg"
                     >
                      {/* <g clip-path="url(#clip0_1287_7434)">
                        <path d="M5.47348 -2.5034e-06C5.47348 -0.391204 5.79061 -0.708336 6.18182 -0.708336H15.5833C16.7569 -0.708336 17.7083 0.24306 17.7083 1.41666V15.5833C17.7083 16.7569 16.7569 17.7083 15.5833 17.7083H1.41666C0.243059 17.7083 -0.708336 16.7569 -0.708336 15.5833V6.18182C-0.708336 5.79061 -0.391204 5.47348 -2.5034e-06 5.47348C0.391199 5.47348 0.708331 5.79061 0.708331 6.18182V15.5833C0.708331 15.9745 1.02546 16.2917 1.41666 16.2917H15.5833C15.9745 16.2917 16.2917 15.9745 16.2917 15.5833V1.41666C16.2917 1.02546 15.9745 0.708331 15.5833 0.708331H6.18182C5.79061 0.708331 5.47348 0.391199 5.47348 -2.5034e-06Z" fill=""/>
                      </g> */}
                      <defs>
                        <clipPath id="clip0_1287_7434">
                          <rect width="17" height="17" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={phone_number}
                      onChange={(e)=>setNumber(e.target.value)}
                      placeholder="Enter your number"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-3 pr-5 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />

                    <span className="absolute right-1 top-2">
                    <svg 
                    className='fill-current'
                    width="22" 
                    height="22" 
                    viewBox="0 0 22 22" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.02408 1.82667C4.67972 1.38393 4.02524 1.34318 3.62863 1.7398L2.20699 3.16144C1.54221 3.82622 1.29782 4.76803 1.58827 5.59415C2.75464 8.9117 4.66421 12.0267 7.31874 14.6813C9.97327 17.3358 13.0883 19.2454 16.4059 20.4117C17.232 20.7022 18.1738 20.4578 18.8386 19.793L20.2602 18.3714C20.6568 17.9748 20.6161 17.3203 20.1733 16.9759L17.0023 14.5096C16.7761 14.3337 16.4816 14.2715 16.2037 14.341L13.1937 15.0935C12.3761 15.2979 11.5113 15.0583 10.9154 14.4624L7.53757 11.0846C6.94168 10.4887 6.70213 9.62388 6.90652 8.80632L7.65901 5.79635C7.7285 5.51837 7.66634 5.22387 7.49042 4.99769L5.02408 1.82667ZM2.59156 0.702729C3.61197 -0.317678 5.29581 -0.212846 6.18177 0.926247L8.64811 4.09726C9.10071 4.67918 9.26065 5.43687 9.08185 6.15206L8.32936 9.16203C8.24992 9.4798 8.34303 9.81595 8.57464 10.0476L11.9524 13.4254C12.1841 13.657 12.5202 13.7501 12.838 13.6706L15.8479 12.9182C16.5631 12.7394 17.3208 12.8993 17.9027 13.3519L21.0738 15.8182C22.2128 16.7042 22.3177 18.388 21.2973 19.4084L19.8756 20.8301C18.8585 21.8472 17.3372 22.2938 15.9194 21.7954C12.3991 20.5577 9.09478 18.5314 6.28167 15.7183C3.46857 12.9052 1.4423 9.60088 0.204652 6.08059C-0.293813 4.6628 0.152804 3.14149 1.16992 2.12437L2.59156 0.702729Z" fill=""/>
                   </svg>
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <input
                    type="submit"
                    value="Create account"
                    className="w-full cursor-pointer rounded-lg border border-green bg-green p-3 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?{' '}
                    <Link to="/auth/signin" className="text-green">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
