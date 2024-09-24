// Import the react JS packages 
import axios from "axios";
import { useState } from "react";// Define the Login function.


export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create the submit method.
  const submit = async e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    // Create the POST request
    const { data } = await
      axios.post('http://localhost:8000/api/token/',
        user, { headers: { 'Content-Type': 'application/json' } }
      )
    // Initialize the access & refresh token in localstorage.      
    localStorage.clear();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);

    axios.defaults.headers.common['Authorization'] =
      `Bearer ${data['access']}`;
    window.location.href = '/Gestion_employés'

  }
  return (

    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form class="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={submit}>
        <div class="mb-4">
          <h3 class="text-lg font-semibold text-gray-700 text-center">Connexion</h3>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Username</label>
          <input
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter Username"
            name="username"
            type="text"
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
           />
        </div>
        <div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Connexion
          </button>
        </div>
      </form>
    </div>
  )
}
// background-color: rgb(55 65 81 / var(--tw-bg-opacity));
export default Login;