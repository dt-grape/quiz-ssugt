// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 8,
  totalScore: 80,
  totalTime: 600,
  questions: [
    {
      question: 'Что такое программирование?',
      choices: [
        'Написание инструкций для компьютера',
        'Сборка компьютера',
        'Использование интернета',
        'Игра в видеоигры',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Написание инструкций для компьютера',
      ],
      score: 10,
    },
    {
      question: 'Какой из этих вариантов является языком программирования?',
      choices: [
        'HTML',
        'Python',
        'Windows',
        'Google',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Python',
      ],
      score: 10,
    },
    {
      question: 'Какова главная цель программы?',
      choices: [
        'Давать инструкции компьютеру',
        'Открывать веб-сайты',
        'Проигрывать музыку',
        'Отображать видео',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Давать инструкции компьютеру',
      ],
      score: 10,
    },
    {
      question: 'Какое из этих устройств может выполнять программу?',
      choices: [
        'Компьютер',
        'Велосипед',
        'Стиральная машина',
        'Смартфон',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Компьютер',
        'Смартфон',
      ],
      score: 10,
    },
    {
      question: 'Что используется для написания программы?',
      choices: [
        'Язык программирования',
        'Молоток',
        'Поисковая система',
        'Приложение для социальных сетей',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Язык программирования',
      ],
      score: 10,
    },
    {
      question: 'Что из следующего помогает создавать приложения и игры?',
      choices: [
        'Кодирование',
        'Просмотр видео',
        'Использование социальных сетей',
        'Серфинг в интернете',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Кодирование',
      ],
      score: 10,
    },
    {
      question: 'Что означает "баг" в программе?',
      choices: [
        'Ошибка или проблема в коде',
        'Новая функция программы',
        'Команда для запуска программы',
        'Тип компьютерного вируса',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Ошибка или проблема в коде',
      ],
      score: 10,
    },
    {
      question: 'Какой из примеров является приложением, созданным с помощью программирования?',
      choices: [
        'Калькулятор',
        'Телевизор',
        'Книга',
        'Карандаш',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Калькулятор',
      ],
      score: 10,
    },
  ]

}
