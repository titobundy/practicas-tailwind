import { Home, Settings, BarChart } from 'lucide-react';

export default function DashboardLayout() {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside className='w-64 bg-white shadow-lg p-5 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold text-gray-800'>Dashboard</h2>
        <nav className='flex flex-col gap-3'>
          <a
            href='#'
            className='flex items-center gap-3 text-gray-700 hover:text-blue-500'
          >
            <Home size={20} /> Home
          </a>
          <a
            href='#'
            className='flex items-center gap-3 text-gray-700 hover:text-blue-500'
          >
            <BarChart size={20} /> Analytics
          </a>
          <a
            href='#'
            className='flex items-center gap-3 text-gray-700 hover:text-blue-500'
          >
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className='flex-1 flex flex-col'>
        {/* Header */}
        <header className='bg-white shadow p-4 text-gray-800 font-semibold'>
          Dashboard Header
        </header>

        {/* Content */}
        <main className='flex-1 p-6'>
          <h1 className='text-3xl font-bold text-gray-800'>
            Welcome to the Dashboard
          </h1>
          <p className='mt-2 text-gray-600'>
            This is a simple layout using React, TailwindCSS, and Lucide icons.
          </p>
        </main>
      </div>
    </div>
  );
}
