import React, { useState } from 'react';
import './Login.css';
import Swal from 'sweetalert2';
import { FcSportsMode } from 'react-icons/fc';



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

   
//     console.log(`email: ${email}, Password: ${password}`);

//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.email);
//         console.log(email);
//         if (data.email === email ) {
//           // Show success alert
//           Swal.fire({
//             icon: 'success',
//             title: 'Login Successful',
//             text: 'Welcome back, Admin!',
//           }); 
//           window.location.href = '/';
//         } else {
//           // Show error alert
//           Swal.fire({
//             icon: 'error',
//             title: 'Login Failed',
//             text: 'Incorrect email or password',
//           });
//         }
       
//         // handle successful login, e.g. redirect to dashboard
//       })
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className="form-group">
//           <label htmlFor="email">email</label>
//           <input
//             type="text"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;




export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
     
      console.log(`email: ${email}, Password: ${password}`);
  
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.email);
          console.log(email);
          if (data.email === email ) {
            // Show success alert
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'Welcome back, Admin!',
            }); 
            window.location.href = '/';
          } else {
            // Show error alert
            Swal.fire({
              icon: 'error',
              title: 'Login Failed',
              text: 'Incorrect email or password',
            });
          }
         
          // handle successful login, e.g. redirect to dashboard
        })
        .catch((error) => console.error(error));
      }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <FcSportsMode size={40} className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-orange hover:text-amber focus:ring-yellow ">
              Sign Up to FitTrack
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-orange py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-amber focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}