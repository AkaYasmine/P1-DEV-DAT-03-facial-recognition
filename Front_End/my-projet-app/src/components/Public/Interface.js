import React from 'react';
import PresencePieChart from '../Public/PresencePieChart';
import UserChart from '../Public/UserChart';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (token) {
         axios.get('http://127.0.0.1:8000/api/tasks/', {
            headers: {
               'Authorization': `Bearer ${token}`
            }
         })
            .then(res => {
               setData(res.data);
               console.log(res.data);
               const nbr = res.data.length; // Récupérer la longueur des données
               console.log(nbr); // Afficher la longueur
            })
            .catch(err => console.log(err));
      } else {
         console.log("Pas de token d'accès dans le localStorage");
      }
   }, []);
   return (
      <div>
         <header>

         </header>
         <body>
            <div>

               <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>

               <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                  <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                     <ul class="space-y-2 font-medium">
                        <li>
                           <a href="./Home" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <img src="https://zupimages.net/up/24/38/988w.png" alt="Dashboard" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                              <span class="ms-3">Dashboard</span>
                           </a>
                        </li>
                        <li>

                        </li>
                        <li>
                           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
                                 <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Prise de photo</span>
                           </button>
                        </li>
                        <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                              </svg>

                              <span class="flex-1 ms-3 whitespace-nowrap">Gestion employés</span>
                           </a>
                        </li>
                        <li>
                           <a href="./Pointage_employés" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                 <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                              </svg>

                              <span class="flex-1 ms-3 whitespace-nowrap">Pointages employés</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                 <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                              </svg>

                              <span class="flex-1 ms-3 whitespace-nowrap">Connexion</span>
                           </a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
                              </svg>

                              <span class="flex-1 ms-3 whitespace-nowrap">Déconnexion</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </aside>

               <div class="p-4 sm:ml-64">

                  <div>

                     <body class="bg-gray-100">

                        <div class="container mx-auto p-4">

                           <h2 class="text-2xl font-bold mb-6">Tableau de Bord</h2>
                           <div className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-80'>
                              <div className="bg-green-600 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                 <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres d'utilisateurs</h2>
                                 <div className="text-4xl font-bold mb-4 text-white">{data.length}</div>
                              </div>
                              <div className="bg-pink-500 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                 <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres de présences</h2>
                                 <div className="text-4xl font-bold mb-4 text-white">30</div>
                              </div>
                              <div className="bg-blue-400 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                 <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres d'Absences</h2>
                                 <div className="text-4xl font-bold mb-4 text-white">8</div>
                              </div>
                           </div>
                           <div className="flex w-full mt-8 space-x-4 ">
                              <div className="flex-1">
                                 <UserChart />
                              </div>
                              <div className="flex-1">
                                 <PresencePieChart />
                              </div>
                           </div>
                        </div>

                     </body>

                  </div>

               </div>

            </div>

         </body>
      </div>
   );
};
export default Header;