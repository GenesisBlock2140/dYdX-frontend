import { useState } from 'react'

interface QuestionCardProps {
  question: string
  answer: string
}

const QuestionCard = ({question, answer}: QuestionCardProps) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenQuestion = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='max-w-[800px] mt-4'>
        <div className='flex text-[18px] text-white cursor-pointer' onClick={handleOpenQuestion}>
          <p>{question}</p>
          <p className='ml-auto'>{isOpen ? "-" : "+"}</p>
        </div>
        <p className={`text-greyTh p-2 ${isOpen ? 'visibility' : 'hidden'}`}>{answer}</p>
        <hr className='border-1 border-[#393953] mt-6' />
      </div>
    </>
  )
}

export default QuestionCard