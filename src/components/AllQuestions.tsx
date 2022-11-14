import QuestionCard from './QuestionCard'

interface QuestionCard {
  question: string
  answer: string
}

interface AllQuestionsProps {
  questions: QuestionCard[]
}

const AllQuestions = ({questions}: AllQuestionsProps) => {
  return (
    <>
      <div className='max-w-[800px] mx-auto px-4'>
        <hr className='border-1 border-[#393953] mt-6' />
        {questions.map( question => {
          return <QuestionCard question={question.question} answer={question.answer} />
        } )}
      </div>
    </>
  )
}

export default AllQuestions