import React from 'react';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { UseNavigate } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [users, setUsers] = useState({
        superusers: [],
        admins: []
    });
    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            axios.get('http://127.0.0.1:8000/users/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(res => setUsers(res.data))
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
                    <div class="p-4 sm:ml-64">
                        <div><h2 class="text-2xl text-center font-bold mb-4">Interface Super-administrateur</h2> </div>

                        <div>
                            <body class="bg-gray-100">
                                <div class="container mx-auto p-4">
                                    <h2 class="text-2xl font-bold mb-6">Tableau de Bord</h2>
                                    <div className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-80'>
                                        <div className="bg-orange-400 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                            <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres d'administrateur</h2>
                                            <div className="text-4xl font-bold mb-4 text-white">38</div>
                                        </div>
                                    </div>
                                </div>
                            </body>
                        </div>
                    </div>
                </div>

                {/*  ######################### CRUD DES ADMINISTRATEURS  ##########################*/}

                <div class="p-4 sm:ml-64">
                    <body class="bg-gray-100">
                        <div class="container mx-auto p-4">
                            <h2 class="text-2xl font-bold mb-6">Gestion des Administrateur</h2>

                            <section class="">

                                <div class="bg-white dark:bg-white-800 relative shadow-md sm:rounded-lg overflow-hidden">
                                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                        <div class="w-full md:w-1/2">
                                            <form class="flex items-center">
                                                <label for="simple-search" class="sr-only">Recherche</label>
                                                <div class="relative w-full">
                                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-white-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Recherche" required="" />
                                                </div>
                                            </form>
                                        </div>
                                        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch  rounded-lg border dark:border-gray-600 dark:hover:text-red-100 dark:hover:bg-gray-700">
                                            <a to="/Add_employe" type="button" id="createProductModalButton" data-modal-target="createProductModal" data-modal-toggle="createProductModal" class="flex items-center justify-center text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                                <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                                </svg>
                                                Ajouter un employé
                                            </a>
                                            <div class="flex items-center space-x-3 w-full md:w-auto">

                                                <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul class="py-1 text-sm text-gray-700 dark:text-white" aria-labelledby="actionsDropdownButton">
                                                        <li>
                                                            <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                                        </li>
                                                    </ul>
                                                    <div class="py-1">
                                                        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white">Delete all</a>
                                                    </div>
                                                </div>

                                                <div id="filterDropdown" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                                    <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-black">Category</h6>
                                                    <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                                        <li class="flex items-center">
                                                            <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Apple (56)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Fitbit (56)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="dell" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="dell" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Dell (56)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="asus" type="checkbox" value="" checked="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="asus" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Asus (97)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="logitech" type="checkbox" value="" checked="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="logitech" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Logitech (97)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="msi" type="checkbox" value="" checked="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="msi" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">MSI (97)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="bosch" type="checkbox" value="" checked="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="bosch" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Bosch (176)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="sony" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="sony" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Sony (234)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="samsung" type="checkbox" value="" checked="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="samsung" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Samsung (76)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="canon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="canon" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Canon (49)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="microsoft" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="microsoft" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Microsoft (45)</label>
                                                        </li>
                                                        <li class="flex items-center">
                                                            <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                            <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Razor (49)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div class="overflow-x-auto">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Liste des Super Admins</h3>
                                    <hr></hr>
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-white-400">
   {/*##########################" LISTE DES SUPERS ADMINISTRATEURS ##################################"""" */}
                                          
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                <tr>
                                                    <th scope="col" class="px-4 py-4">ID</th>
                                                    <th scope="col" class="px-4 py-4">Nom</th>
                                                    <th scope="col" class="px-4 py-3">Prénom</th>
                                                    <th scope="col" class="px-4 py-3">Email</th>
                        
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {users.superusers.map((user) => (
                                                    <tr key={user.id} class="border-b dark:border-white">
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black" >{user.id}</th>
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black">  {user.username} </th>
                                                        <td class="px-4 py-3"> {user.last_name} </td>
                                                        <td class="px-4 py-3" > {user.email} </td>
 
                                                    </tr>
                                                ))}
                                            </tbody>

 {/*########################## LISTE DES ADMINISTRATEURS ##################################"""" */}
                                            <h3 class="text-lg font-semibold text-gray-900 dark:text-black">Liste des Admins</h3>
                                            <hr></hr>
                                            <br></br>
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
                                                <tr>
                                                    <th scope="col" class="px-4 py-4">ID</th>
                                                    <th scope="col" class="px-4 py-4">Nom</th>
                                                    <th scope="col" class="px-4 py-3">Prénom</th>
                                                    <th scope="col" class="px-4 py-3">Email</th>
                                                    <th scope="col" class="px-9 py-3">Actions</th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                {users.admins.map((user) => (
                                                    <tr key={user.id} class="border-b dark:border-white">
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black" >{user.id}</th>
                                                        <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-black">  {user.username} </th>
                                                        <td class="px-4 py-3"> {user.last_name} </td>
                                                        <td class="px-4 py-3" > {user.email} </td>

                                                        <td class="px-4 py-3 flex items-center justify-end">

                                                            <Link onClick={e => handleDelete(user.id)} type="button" data-modal-target="deleteModal" data-modal-toggle="deleteModal" class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-white-100">
                                                                <svg class="w-4 h-4 mr-2" viewbox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z" />
                                                                </svg>
                                                                Supprimer
                                                            </Link>

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </section>
                        </div>
                    </body>
                </div>
            </body>
        </div>
    );
};


function handleDelete(id) {
    const confirm = window.confirm("Voulez vous supprimer cet employé ?");
    const token = localStorage.getItem('access_token');
    if (confirm) {
       axios.delete('http://127.0.0.1:8000/users/' + id + '/',
          {
             headers: {
                'Authorization': `Bearer ${token}`
             }
          }
       )
       const navigate = UseNavigate()
          .then(res => {
             alert("Supprimer");
             navigate("/Superuser_dashboard")
          })
    }
 }
export default Header;
