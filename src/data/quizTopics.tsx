import { ReactNode } from 'react'
import { ReactComponent as Blocks } from '../assets/icons/blocks.svg'
import { ReactComponent as Programming } from '../assets/icons/programming.svg'
import { ReactComponent as Technology } from '../assets/icons/technology.svg'
import { ReactComponent as Python } from '../assets/icons/python.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Основы программирования',
    icon: <Blocks />,
  },
  {
    title: 'Программирование в реальной жизни',
    icon: <Programming />,
  },
  {
    title: 'Технологии будущего',
    icon: <Technology />,
  },
  {
    title: 'Основы Python',
    icon: <Python />,
  }
]
