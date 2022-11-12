import avatarCard from '../assets/images/avatarCard.png'

interface CardProjectProps {
  topic: string
  title: string
  amount: string
  text: string
}

const CardProject = ({topic, title, amount, text}: CardProjectProps) => {
  return (
    <>
      <div className='max-w-[390px] max-h-[500px] bg-[#393953] rounded-[16px] p-[24px] m-4 text-4'>
        <p className='text-[#A59EBA] font-["Space_Mono"]'>{topic}</p>
        <p className='text-white text-[24px] my-2'>{title}</p>
        <p className='text-[#A59EBA] font-["Space_Mono"]'>Funding amout: {amount}</p>
        <p className='text-white my-4'>{text.slice(0, 325)}</p>
        <div>
          <img src={avatarCard} alt='avatarCard'/>
        </div>
      </div>
    </>
  )
}

export default CardProject