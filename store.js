'use strict';

const store = {
 
  questions: [
    {
      questionString: 'Coffee is derived from a fruit.',
      answers: [
        'True',
        'False'
      ],
      correctAnswerIdx: 0
    },
    {
      questionString: 'Which bear is best?',
      answers: [
        'Black Bear',
        'Polar Bear',
        'Grizzlie Bear',
        'Panda Bear'
      ],
      correctAnswerIdx: 3
    },
    {
      questionString: 'Inflammable means that an object is _______ .',
      answers: [
        'easily set on fire',
        'unable to be set on fire',
        'trendy',
        'totally safe to smoke in close proximity'
      ],
      correctAnswerIdx: 0
    },
    {
      questionString: 'Why does one drive on a Parkway and park on a Driveway?',
      answers: [
        'The english language is weird and dumb sometimes',
        'Because parking on a parkway would make no sense at all',
        'Because driving on a parkway makes people happy',
        'Goku'
      ],
      correctAnswerIdx: 0
    },
    {
      questionString: 'Which is superior; Mac or PC?',
      answers: [
        'PC',
        'Mac',
        'Neither, I use Linux',
        'I don\'t even code bro'
      ],
      correctAnswerIdx: 1
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};