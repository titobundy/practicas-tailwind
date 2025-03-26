import {
  Home,
  LineChart,
  Settings,
  Users,
  Package,
  ChevronRight,
  PlusCircle,
  FileText,
} from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* Header */}
      <header className='bg-blue-700 text-white p-4 shadow-md'>
        <h1 className='text-2xl font-bold'>Mi Dashboard</h1>
      </header>

      <div className='flex flex-1 overflow-hidden'>
        {/* Sidebar con iconos */}
        <aside className='w-64 bg-gray-800 text-white p-4 overflow-y-auto'>
          <nav>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <Home className='w-5 h-5 mr-3' />
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <LineChart className='w-5 h-5 mr-3' />
                  <span>Reportes</span>
                  <ChevronRight className='w-4 h-4 ml-auto' />
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <Settings className='w-5 h-5 mr-3' />
                  <span>Configuración</span>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <Users className='w-5 h-5 mr-3' />
                  <span>Usuarios</span>
                  <PlusCircle className='w-4 h-4 ml-auto text-blue-400' />
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <Package className='w-5 h-5 mr-3' />
                  <span>Productos</span>
                </a>
              </li>
              <li className='pt-4 mt-4 border-t border-gray-700'>
                <a
                  href='#'
                  className='flex items-center p-2 rounded hover:bg-gray-700'
                >
                  <FileText className='w-5 h-5 mr-3' />
                  <span>Documentación</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-6 overflow-y-auto'>
          <div className='bg-white rounded-lg shadow p-6'>
            <h2 className='text-xl font-semibold mb-4'>
              Bienvenido al Dashboard
            </h2>
            <p className='text-gray-700'>
              Este es un ejemplo de layout de dashboard con React, Tailwind CSS
              y Lucide para los iconos.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
              <div className='bg-blue-100 p-4 rounded-lg'>
                <h3 className='font-medium text-blue-800'>Card 1</h3>
                <p className='text-blue-600'>Contenido de la tarjeta</p>
              </div>
              <div className='bg-green-100 p-4 rounded-lg'>
                <h3 className='font-medium text-green-800'>Card 2</h3>
                <p className='text-green-600'>Contenido de la tarjeta</p>
              </div>
              <div className='bg-yellow-100 p-4 rounded-lg'>
                <h3 className='font-medium text-yellow-800'>Card 3</h3>
                <p className='text-yellow-600'>Contenido de la tarjeta</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
