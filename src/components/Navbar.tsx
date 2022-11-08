import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <>
      <div className='max-w-[1200px] py-[24px] mx-[auto] h-[72px] flex'>
        <img src='Logo.png' alt='logo dydx' className='h-[70px]' />
        <div className='flex ml-[auto] h-[70px] w-[65%] text-[#C8C7D8] text-[16px] font-["Space_Mono"] items-center justify-around'>
          <p>Discover initiatives</p>
          <p>Funded grants</p>
          <p>Program expenses</p>
          <p>Blog</p>
          <p>FAQ</p>
          <button className='bg-[#6966FF] p-3 rounded-[8px] text-white font-["Circular"]'>Apply for grant</button>
        </div>
      </div>
    </>
  )
}

export default Navbar