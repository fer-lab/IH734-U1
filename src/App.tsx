import React, {CSSProperties} from 'react';
import './App.css';
const tasks = require('./data/tasks.json');
const users = require('./data/users.json');

function App() {

    const stages: { [index: string]: string }  =
        {
            'pending': "Pendiente",
            'progress': "En Progreso",
            'renvision': "En Revision",
            'done': "Finalizado",
        }

    interface svgAttr{[index: string]: string};



  // @ts-ignore
    return (
    <div className="App">


        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center"><span className="px-5 py-2 bg-white rounded-full"><div className="logo-udg"></div></span></a>
                    <div className="flex items-center lg:order-2">
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">IH734</span>
                        <span
                            className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">Unidad 1. Actividad Integradora</span>
                        <span
                            className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">222959611 - Fernando Ojeda</span>

                    </div>
                </div>
            </nav>
        </header>

        <section className="py-2.5 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="py-16 px-8 md:px-16 bg-white rounded-3xl bg-gradient-to-tr from-blue-200 via-indigo-200 to-green-200">
                    <div className="flex flex-wrap -m-8">

                        <div className="text-gray-700">
                            <div className="px-10 mt-6">
                                <h1 className="text-2xl font-bold">UT Sprint 1</h1>
                            </div>
                            <div className="flex flex-grow px-10 mt-4 space-x-6">

                                {
                                    Object.keys(stages).map((status: string) => (

                                        <div className="flex flex-col flex-shrink-0 w-72">

                                            <div className="flex items-center flex-shrink-0 h-10 px-2">
                                                <span className="block text-sm font-semibold">{stages[status]}</span>
                                                {/*
                                <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">{tasks.length}</span>


                                <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                                */}
                                            </div>


                                            {tasks.filter((item: { status: string; }) => (item.status ?? 'pending') === status).map((task: { code: string; tasks: string[]; sp: number; user: number; status: string; }) => (
                                                <div className="flex flex-col pb-2">

                                                    <div className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
                                                        <span className="flex items-center h-6 px-3 text-xs font-semibold text-blue-500 bg-blue-100 rounded-full">{task.code}</span>
                                                        {task.tasks.map((details) => (
                                                            <h4 className="mt-3 text-sm font-medium">{details}</h4>
                                                        ))}

                                                        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                                                            <div className="relative flex items-center">
                                                                <svg className="relative w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"  />
                                                                </svg>
                                                                <span className="ml-1">{task.sp ?? 3}</span>
                                                            </div>
                                                            <div className="flex items-center ml-4">
                                                                <svg className="w-4 h-4 text-gray-300 fill-current"  viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill="#000000" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"/>
                                                                </svg>
                                                                <span className="ml-1 leading-none">{users[task.user ?? 1]?.name}</span>
                                                            </div>
                                                            <img className="w-6 h-6 ml-auto rounded-full" src={users[task.user ?? 1]?.avatar}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>


                                    ))
                                }

                                <div className="flex-shrink-0 w-6"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>




    </div>
  );
}

export default App;
