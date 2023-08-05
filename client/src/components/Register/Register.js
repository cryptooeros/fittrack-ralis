import React, { useState } from 'react';
import './Register.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { FcSportsMode } from 'react-icons/fc';

// function Register() {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [gender, setGender] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Submitted:', { username, email, password, gender });
  
  //   fetch('/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ username, email, password, gender })
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Registration successful!',
  //           timer: 1500,
  //           showConfirmButton: false
  //         });
  //         navigate('/login');
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Registration failed.',
  //           timer: 1500,
  //           showConfirmButton: false
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'An error occurred.',
  //         timer: 1500,
  //         showConfirmButton: false
  //       });
  //     });
  // };
  
//   return (
//     <div className="register-container">
//       <form onSubmit={handleSubmit} className="register-form">
//         <h1>Register</h1>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <label>
//           gender:
//           <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;








export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { username, email, password, gender });
  
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password, gender })
    })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Registration successful!',
            timer: 1500,
            showConfirmButton: false
          });
          navigate('/login');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration failed.',
            timer: 1500,
            showConfirmButton: false
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'An error occurred.',
          timer: 1500,
          showConfirmButton: false
        });
      });
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <FcSportsMode size={40} className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign Up</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-orange hover:text-amber focus:ring-yellow ">
              Login
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
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
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="mt-1">
                  <input
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                    id="gender"
                    name="gender"
                    type="gender"
                    autoComplete="gender"
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
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">

                <div className="text-sm">
                  <a href="#" className="font-medium text-orange hover:text-amber focus:ring-yellow ">
                    Have an account?
                  </a>
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