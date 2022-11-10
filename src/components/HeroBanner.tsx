import { FC } from 'react'

const HeroBanner: FC = () => {
  return (
    <>
      <div className='mt-[120px]'>
        <h1 className='text-[40px] text-center text-white font-medium sm:text-[80px] leading-[1.1]'>Powering the future<br /> of dYdX through <br />community <span className='hLine'>grants</span></h1>
        <div className='mt-[40px] mb-[80px] text-center text-white font-["Circular"]'>
          <button className='bg-[#393953] py-[12px] px-[39px] rounded-[8px] w-[80%] sm:max-w-[190px] sm:mr-[24px] mb-3'>Discover RFPs</button>
          <button className='bg-purpleTh py-[12px] px-[39px] rounded-[8px] w-[80%] sm:max-w-[190px] sm:mr-[24px]'>Apply for grant</button>
        </div>
        <div className='sm:flex max-w-[1000px] mx-auto justify-center justify-around text-white text-[20px] font-["Space_Mono"] text-center'>
          <p>100+ <span className='block text-greyTh text-[18px]  mb-[32px]'>projects funded</span></p>
          <p>$3+ milion<span className='block text-greyTh text-[18px]  mb-[32px]'>awarded</span></p>
          <p>400+ <span className='block text-greyTh text-[18px]'>projects funded</span></p>
        </div>
      </div>
    </>
  )
}

export default HeroBanner