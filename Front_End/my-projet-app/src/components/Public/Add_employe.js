import axios from 'axios';
import React from 'react';
import  { useState }  from 'react'
import  { useNavigate } from 'react-router-dom'

// import { useNavigate, useParams } from 'react-router-dom'


const Header = () => {

//     const {id} = useParams();

    const [inputData, setInputData] = useState({
        nom:'',
        prenom:'',
        email:'',
        contact:'',
        photo:''
    });

    const navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/tasks/'+id)
    //     .then(res => setInputData(res.data))
    //     .catch(err => console.log(err))
    // }, [])
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/tasks/'+id)
    //     .then(res => setInputData(res.data))
    //     .catch(err => console.log(err))
    // }, [])
    
    const handleSubmit = (event) =>{
        const token = localStorage.getItem('access_token');
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/tasks/', inputData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        .then(res => {
            alert("Les informations de l'employé ont été ajouter avec succès")
            navigate('/Gestion_employés')
        })
    }
    return (
        <div>
            <header>
            </header>
            <body>
            <div class="p-4 sm:ml-64">
                    <section class="bg-white dark:bg-gray-900">
                        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                            <form onSubmit={handleSubmit} >
                                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="sm:col-span-2">
                                        <label htmlFor='nom' for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                        <input type="text" value={inputData.nom} onChange={e => setInputData({...inputData, nom: e.target.value})} name="nom" id="nom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Aa" required="" />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prenom</label>
                                        <input type="text" value={inputData.prenom} onChange={e => setInputData({...inputData, prenom: e.target.value})} name="prenom" id="prenom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="bb cc" required="" />
                                    </div>
                                    <div class="w-full">
                                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" value={inputData.email} onChange={e => setInputData({...inputData, email: e.target.value})} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="a@gmail.com" required="" />
                                    </div>
                                    <div class="w-full">
                                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact</label>
                                        <input type="tel" value={inputData.contact} onChange={e => setInputData({...inputData, contact: e.target.value})} name="contact" id="contact" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0700770077" required="" />
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="Photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                                        <input type="file" value={inputData.photo} onChange={e => setInputData({...inputData, photo: e.target.value})} name="photo" id="photo" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                </div>
                                <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Modifier
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </body>
        </div>
    );
};

export default Header;