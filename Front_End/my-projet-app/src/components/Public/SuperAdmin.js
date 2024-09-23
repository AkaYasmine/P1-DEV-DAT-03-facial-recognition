import React from 'react';

const Header = () => {
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
                                    <a href="./SuperAdmin" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <img src="https://zupimages.net/up/24/38/988w.png" alt="Dashboard" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                        <span class="ms-3" >Super Admin</span>
                                    </a>
                                </li>
                                <li>
                                </li>

                                <li>

                                </li>
                                <li>
                                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                        </svg>

                                        <span class="flex-1 ms-3 whitespace-nowrap">Ajouter Administrateur</span>
                                    </a>
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

                                <div class="container p-4 justify-center h-screen">

                                    <h2 class="text-2xl font-bold mb-6">Tableau de Bord</h2>
                                    <div className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-96'>
                                        <div className="bg-green-600 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                            <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres d'Administrateurs</h2>
                                            <div className="text-4xl font-bold mb-4 text-white">38</div>
                                        </div>
                                    </div>
                                    <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 flex justify-center w-full">
                                        <div class="flex items-center justify-between pb-6">
                                            <div class="flex items-center justify-between">
                                                <div class="ml-10 space-x-8 lg:ml-40">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="overflow-y-hidden rounded-lg border">
                                            <div class="overflow-x-auto">
                                                <table class="w-screen">
                                                    <thead>
                                                        <tr class="bg-green-700 text-left text-xs font-semibold uppercase tracking-widest text-white">
                                                            <th class="px-5 py-3">ID</th>
                                                            <th class="px-5 py-3">Nom</th>
                                                            <th class="px-5 py-3">Prénom </th>
                                                            <th class="px-5 py-3">Email </th>
                                                            <th class="px-5 py-3">Numéro de Télephone </th>
                                                            <th class="px-5 py-3">Date</th>


                                                        </tr>
                                                    </thead>
                                                    <tbody class="text-gray-500">
                                                        <tr>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap">1</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <div class="flex items-center">
                                                                    <div class="h-10 w-10 flex-shrink-0">
                                                                        <img class="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                                                    </div>
                                                                    <div class="ml-3">
                                                                        <p class="whitespace-no-wrap">Besique Monroe</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap">Alice</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> Alice@gmail.com</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> +225 07 04 00 56 30</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> 15 sept , 2024</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap">2</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <div class="flex items-center">
                                                                    <div class="h-10 w-10 flex-shrink-0">
                                                                        <img class="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                                                                    </div>
                                                                    <div class="ml-3">
                                                                        <p class="whitespace-no-wrap">Besique Monroe</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap">Alice</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> Alice@gmail.com</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> +225 07 04 00 56 30</p>
                                                            </td>
                                                            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                                                <p class="whitespace-no-wrap"> 15 sept , 2024</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
                                                <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
                                                <div class="mt-2 inline-flex sm:mt-0">
                                                    <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
                                                    <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
                                                </div>
                                            </div>
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