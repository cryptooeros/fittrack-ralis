import {createContext, useState} from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

function AuthProvider({children}){

    const [user, setUser] = useState()
    const [loggedIn, setLoggedIn] = useState()

    const navigate = useNavigate()

    // fetch the user
    function login(formData){
        fetch('/login',{
            method: 'POST',
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.errors){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.errors,
                  })
            }
            else if(data.email===formData.email){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logged In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setUser(data.user)
                  setLoggedIn(data.logged_in)
                  navigate('/')
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid Email or Password!',
                  })
            }
          })
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
            if (data.errors){
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong credentials!',
                    text: data.errors[0],
                  })
            }else if(data.email===formData.email){
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

    // // check if user is logged in
    // useEffect(()=>{
    //     fetch("/me",{
    //         method: "GET",
    //         headers:{
    //             "Content-Type": "application/json",
    //         },
    //     }
    //     )
    //     .then(res=>res.json())
    //     .then(response=>{
    //         setUser(response.user)
    //         setLoggedIn(response.logged_in)
    //     }
    //     )
    // })

    //logout
    function handleSignOut(e) {
        fetch("/logout",{
            method: "DELETE"
        })
        .then(response=>{
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
      }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider}