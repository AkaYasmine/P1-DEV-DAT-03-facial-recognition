import React from 'react';

const Pointage_card = () => {
    return (
        <div>
            <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 flex justify-center">
                <div class="flex items-center justify-between pb-6">
                  <div class="flex items-center justify-between">
                    <div class="ml-10 space-x-8 lg:ml-40">
                      {/* <button class="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                        </svg>
                        CSV
                      </button> */}
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
                          <th class="px-5 py-3">  Heure d'arrivée</th>
                          <th class="px-5 py-3">Status</th>
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
                          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p class="whitespace-no-wrap"> 07h 30 min</p>
                          </td>
                          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Présent</span>
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
                          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p class="whitespace-no-wrap">  </p>
                          </td>
                          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-green-900">Abscent</span>
                          </td>
                        </tr>
                        <tr>
                          <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                            <p class="whitespace-no-wrap">3</p>
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
    );
};

export default Pointage_card;