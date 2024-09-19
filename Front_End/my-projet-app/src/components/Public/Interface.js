import React from 'react';
import AdmissionsBarChart from './AdmissionsBarChart';
import PresencePieChart from './PresencePieChart';
import UserChart from './UserChart';

const Header = () => {
   return (
      <div>
         <header>

         </header>
         <body>
            <div>
               <div class="p-4 sm:ml-64">
                  <div>
                     <body class="bg-gray-100">
                        <div class="container mx-auto p-4">

                           <h2 class="text-2xl font-bold mb-6">Tableau de Bord</h2>
                           <div className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-80'>
                              <div className="bg-green-600 p-6 rounded-lg shadow-md h-100 flex flex-col items-center justify-center">
                                 <h2 className="font-semibold mb-2 text-center text-white p-2 rounded">Nombres d'utilisateurs</h2>
                                 <div className="text-4xl font-bold mb-4 text-white">38</div>
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
                              <div className="flex-1 h-100 item">
                                 <AdmissionsBarChart />
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
