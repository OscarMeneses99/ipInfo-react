import { useState } from 'react'
import { getIpInfo } from './api/api.js';
import IpInfoDisplay from './components/IpInfoDisplay.jsx';
import './App.css'

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [ipInfo, setIpInfo] = useState(null);

  const handleClick = async () => {
    const response = await getIpInfo(inputValue);
    setIpInfo(response);
  }

  return (
    <main className='max-w-lg mx-auto px-4'>
      <h1
        className='text-black text-center font-extrabold text-6xl mt-16'
      >
        IP Info
      </h1>
      <h2
        className='text-center font-light text-lg text-black/80 mt-10'
      >
        Escribe una dirección IP y descubre la ciudad, región, país, código postal, zona horaria y proveedor de servicio de Internet.
      </h2>
      <section className='flex justify-center items-center gap-3 mt-10'>
        <input
          id='ip'
          type="text"
          className='border-2 border-black/80 rounded-md w-[250px] h-[50px] text-left px-5 text-black/70'
          placeholder='Ej: 8.8.8.8 (Google)'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className='bg-black/80 hover:bg-slate-700 text-white rounded-md w-1/4 h-10'
          onClick={handleClick}
        >
          Buscar
        </button>
      </section>
      {ipInfo && <IpInfoDisplay ipInfo={ipInfo} />}
    </main>
  )
}

export default App
