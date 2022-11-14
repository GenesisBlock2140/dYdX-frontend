import fundingRound from '../assets/images/fundingRound.png'

interface NewsCardProps {
  topic: string
  title: string
  date: string
}

const NewsCard = ({topic, title, date}: NewsCardProps ) => {
  return (
    <>
      <div className='max-w-[390px] h-[440px] bg-[#393953] rounded-[16px] my-6 mx-4'>
        <img src={fundingRound} alt='' className='w-[100%] h-[222px] rounded-[16px]' />
        <p className='text-[#A59EBA] font-["Space_Mono"] px-6 pt-6 pb-2'>{topic}</p>
        <p className='text-white text-[24px] px-6 mb-[80px]'>{title}</p>
        <p className='text-[#A59EBA] font-["Space_Mono"] px-6'>{date}</p>
      </div>
    </>
  )
}

export default NewsCard