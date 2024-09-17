import axios from "axios";
import React, { useState } from 'react';

const Register = () => {

      const[first_name,setFirst_name] = useState("")
      const[last_name,setLast_name] = useState("")
      const[username,setUsername] = useState("")
      const[email,setEmail] = useState("")
      const[password,setPassword] = useState("")
      const[error,setError]= useState("")
  
      
      const submitHandler= async (e)=>{
          e.preventDefault();


          const user = {
                    first_name: first_name,
                    last_name : last_name,
                    username :username,
                    email : email,
                    password :password
                  };    
           try {
                const token = 'votre-jeton-d-authentification'
                const response = await axios.post('http://127.0.0.1:8000/register/',user,{
                });
                console.log('Utilisateur inscrit :', response.user);
                  }
          catch (error) {
            console.error('Erreur d\'inscription :', error.response ? error.response.data : error.message);
                      }
      }
      

    return (
        <section class="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
              account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={submitHandler} method="POST">
              <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                <input type="text" value={first_name}
                 name="firstname" 
                id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Emelia Erickson" 
                onChange={(e)=>setFirst_name(e.target.value)}
                required=""/>
              </div>
              <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                  <input type="text" value={last_name}
                  name="firstname" 
                  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Emelia Erickson" 
                  onChange={(e)=>setLast_name(e.target.value)}
                  required=""/>
              </div>
              <div>
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                  <input type="email" value={username}
                  name="firstname" 
                  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Emelia Erickson" 
                  onChange={(e)=>setUsername(e.target.value)}
                  required=""/>
              </div>
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email adress</label>
                  <input type="email" value={email}
                  name="password" id="password"
                  placeholder="at@exemple.com" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  onChange={(e)=>setEmail(e.target.value)}
                  required=""/>
              </div>
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password </label>
                  <input type="password" value={password}
                  name="password" id="password" 
                  placeholder="••••••••" 
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  onChange={(e)=>setPassword(e.target.value)}
                  required=""/>
              </div>
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
              {/* <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <a
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</a>
              </p> */}
            </form>
          </div>
        </div>
      </section>
    );
};

export default  Register;