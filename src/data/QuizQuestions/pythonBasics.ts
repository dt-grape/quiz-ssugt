// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const pythonBasics: Topic = {
  topic: 'Основы Python',
  level: 'Начальный',
  totalQuestions: 10,
  totalScore: 100,
  totalTime: 600,
  questions: [
    {
      question: 'Что такое Python?',
      choices: [
        'Тип программного обеспечения',
        'Игра',
        'Язык программирования',
        'Система управления базами данных'
      ],
      type: 'MCQs',
      correctAnswers: [
        'Язык программирования'
      ],
      score: 10
    },
    {
      question: 'Какой из следующих символов используется для комментирования в Python?',
      choices: [
        '//',
        '#',
        '/*',
        '--'
      ],
      type: 'MCQs',
      correctAnswers: [
        '#'
      ],
      score: 10
    },
    {
      question: 'Как объявить переменную в Python?',
      choices: [
        'var x = 10',
        'int x = 10',
        'x = 10',
        'let x = 10'
      ],
      type: 'MCQs',
      correctAnswers: [
        'x = 10'
      ],
      score: 10
    },
    {
      question: 'Какой тип данных используется для хранения текста в Python?',
      choices: [
        'int',
        'bool',
        'list',
        'str',
      ],
      type: 'MCQs',
      correctAnswers: [
        'str'
      ],
      score: 10
    },
    {
      question: 'Какой оператор используется для сложения в Python?',
      choices: [
        '-',
        '*',
        '+',
        '/'
      ],
      type: 'MCQs',
      correctAnswers: [
        '+'
      ],
      score: 10
    },
    {
      question: 'Какой из следующих циклов используется для повторения кода в Python?',
      choices: [
        'while',
        'repeat',
        'for',
        'do while'
      ],
      type: 'MAQs',
      correctAnswers: [
        'for',
        'while'
      ],
      score: 10
    },
    {
      question: 'Как вывести текст на экран в Python?',
      choices: [
        'echo "Hello, World!"',
        'console.log("Hello, World!")',
        'write("Hello, World!")',
        'print("Hello, World!")',
      ],
      type: 'MCQs',
      correctAnswers: [
        'print("Hello, World!")'
      ],
      score: 10
    },
    {
      question: 'Какой метод используется для добавления элемента в список в Python?',
      choices: [
        'add()',
        'append()',
        'insert()',
        'push()'
      ],
      type: 'MCQs',
      correctAnswers: [
        'append()'
      ],
      score: 10
    },
    {
      question: 'Какой из следующих операторов используется для сравнения?',
      choices: [
        '=',
        '==',
        '!=',
        '===',
      ],
      type: 'MAQs',
      correctAnswers: [
        '==',
        '!='
      ],
      score: 10
    },
    {
      question: 'Какой модуль используется для работы с регулярными выражениями в Python?',
      choices: [
        'regex',
        're',
        'regexp',
        'regexlib'
      ],
      type: 'MCQs',
      correctAnswers: [
        're'
      ],
      score: 10
    }
  ]
}

