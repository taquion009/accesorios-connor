import React from 'react'
import style from 'styles/sectionFAQ.module.scss'
import iconArrowUp from 'public/img/icon-arrow-up.svg'
import Image from 'next/image'

const Question: React.FC<{
  question: string
  answer: string
  id: number
  handleClick: (id: number) => void
  activeQuestion: number
}> = ({ question, answer, id, handleClick, activeQuestion }) => {
  const [height, setHeight] = React.useState(0)
  const p = React.useRef<HTMLParagraphElement>(null)

  React.useEffect(() => {
    if (p.current) {
      setHeight(p.current.offsetHeight + 16)
    }
  }, [p])

  return (
    <li key={id} onClick={() => handleClick(id)}>
      <div className={style.question}>
        <h4>{question}</h4>
        <span
          style={{
            transform: `rotate(${activeQuestion === id ? '180deg' : '0deg'})`,
          }}
        >
          <Image src={iconArrowUp} width={18} height={18} alt="arrow" />
        </span>
      </div>
      <div
        className={style.answer}
        style={{
          height: activeQuestion === id ? height : 0,
        }}
      >
        <p ref={p}>{answer}</p>
      </div>
    </li>
  )
}

interface Props {
  questions: {
    question: string
    answer: string
    id: number
  }[]
}

const SectionFAQ: React.FC<Props> = ({ questions }) => {
  const [activeQuestion, setActiveQuestion] = React.useState<number>(
    questions[0].id,
  )

  const handleClick = (id: number) => {
    if (activeQuestion !== id) {
      setActiveQuestion(id)
    } else {
      setActiveQuestion(0)
    }
  }

  return (
    <section className={style.section}>
      <h3>Preguntas frecuentes</h3>
      <ul>
        {questions.map(({ question, answer, id }) => (
          <Question
            key={id}
            question={question}
            answer={answer}
            id={id}
            handleClick={handleClick}
            activeQuestion={activeQuestion}
          />
        ))}
      </ul>
    </section>
  )
}

export default SectionFAQ
