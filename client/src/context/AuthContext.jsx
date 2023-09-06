import {createContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

function AuthProvider({children}){

    const [user, setUser] = useState()
    const [loggedIn, setLoggedIn] = useState()

    const navigate = useNavigate()

    // fetch the user
    function login(formData){
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


    function signup(formData) {
        fetch('/signup',{
            method: 'POST',
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("jwt", data.jwt);
            if (data.errors){
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong credentials!',
                    text: data.errors[0],
                  })
            }else if(data.user){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Signup Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/login')
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
            }
          })
    }

    // check if user is logged in
    useEffect(()=>{
        fetch("/me",{
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setUser(response.user)
            setLoggedIn(response.logged_in)
        }
        )
    }, [token])

    //logout
    function handleSignOut(e) {
        fetch("/logout",{
            method: "DELETE"
        })
        .then(response=>{
            // localStorage.setItem("jwt", null)
            localStorage.removeItem("jwt")
            setLoggedIn(false)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'LoggedOut successfully!',
                showConfirmButton: false,
                timer: 3000
              })
              navigate("/login")
        })
    }


      const contextData = {
        login,
        signup,
        loggedIn,
        handleSignOut,
        user,
        token
      }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider}