import { generalKnowledge } from './generalKnowledge'
import { javascript } from './javascript'
import { python } from './python'
import { react } from './react'
import { programmingBasics } from './programmingBasics'
import { programmingIRL } from './programmingIRL'
import { futureTechnology } from './futureTechnology'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  'General Knowledge': generalKnowledge,
  'Основы программирования': programmingBasics,
  'Программирование в реальной жизни': programmingIRL,
}
