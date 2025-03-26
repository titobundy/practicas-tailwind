import React from 'react';
import { Home, Users, Settings, BarChart2 } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div className='w-64 bg-white shadow-md'>
        <div className='p-5 border-b'>
          <h1 className='text-2xl font-bold text-gray-800'>Dashboard</h1>
        </div>
        <nav className='p-4'>
          <ul className='space-y-2'>
            <li className='flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded'>
              <Home className='mr-3' size={20} />
              Inicio
            </li>
            <li className='flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded'>
              <Users className='mr-3' size={20} />
              Usuarios
            </li>
            <li className='flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded'>
              <BarChart2 className='mr-3' size={20} />
              Analytics
            </li>
            <li className='flex items-center text-gray-600 hover:bg-gray-100 p-2 rounded'>
              <Settings className='mr-3' size={20} />
              Configuración
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='bg-white shadow-sm p-4 flex justify-between items-center'>
          <input
            type='text'
            placeholder='Buscar...'
            className='w-64 p-2 border rounded'
          />
          <div className='flex items-center space-x-4'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded'>
              Nuevo
            </button>
            <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
          </div>
        </header>

        {/* Content */}
        <main className='p-6 bg-gray-100 flex-1'>
          <h2 className='text-2xl font-semibold mb-6'>Panel Principal</h2>
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-5 rounded-lg shadow'>
              <h3 className='text-lg font-medium mb-3'>Usuarios Activos</h3>
              <p className='text-3xl font-bold text-blue-600'>1,254</p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow'>
              <h3 className='text-lg font-medium mb-3'>Ingresos</h3>
              <p className='text-3xl font-bold text-green-600'>$45,678</p>
            </div>
            <div className='bg-white p-5 rounded-lg shadow'>
              <h3 className='text-lg font-medium mb-3'>Ventas</h3>
              <p className='text-3xl font-bold text-purple-600'>352</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
