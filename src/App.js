import { useState, useContext } from 'react'
import { TopicsContext } from './contexts/TopicsContext'

export const topicList = [
  {
    topic: 'Hobbies',
    questions: [
      "What's your hobby?",
      'How much time do you spend on your hobby?',
      'Could you make money from doing your hobby?',
      'What hobbies are popular in Thailand at the moment?',
      'Why do people have hobbies?',
      'What hobby would you like to try?',
      'Is there hobby that you might start this year?',
      'Have you ever collected anything?',
      'Is there anything you could collect now that might be worth a lot of money in the future?',
      'Do you like to learn new things?',
      'How would you like to spend your time after you retire?',
      'Do some people have hobbies that you think are strange?',
    ],
  },
  {
    topic: 'Family',
    questions: [
      'Do you have any brothers and sisters?',
      'Are you married?',
      'Do you have a big extended family?',
      'Does you name or nickname have a meaning?',
      'What are some of your good memories from when you were a child?',
      'Should children help with housework?',
      "What's the ideal number of children to have?",
      'Is growing up in a city or in the country better?',
      'Are friends as important as family?',
      'Is spanking a good way to discipline children?',
      'How should parents discipline their children?',
      'How often do your family get together?',
      'Should you follow your dreams or do what your parents advise?',
      'Who should take care of grandparents?',
      "What's the most important thing your parents taught you?",
      'Should children get a regular allowance? How much?',
      'What should you look for in a good husband/ wife?',
    ],
  },
  {
    topic: 'Food and drink',
    questions: [
      'Do you eat out often?',
      'Have you ever been on a diet?',
      'Do you like to try new foods?',
      "If you're traveling overseas, what foods do you most miss from home?",
      'Are you a good cook?',
      'Are there any foods that you really dislike?',
      'What foreign foods do you like?',
      'Do you prefer to eat out or at home?',
      "What's the last meal you cooked for someone?",
      'Do you eat fruit everyday?',
      'Do you read the nutritional labels on food?',
      'Have you ever eaten something that made you sick?',
      'Do you have a favorite restaurant?',
      'Do you take vitamin pills or other supplements?',
      'Do you have any food allergies?',
    ],
  },
  {
    topic: 'Travel',
    questions: [
      'Where did you last go on vacation?',
      'Have you ever been camping?',
      'Do you prefer active or relaxing vacations?',
      'Are you planning on going anywhere on your next vacation?',
      'Have you ever had a problem while traveling?',
      "What's the most beautiful place you've been to?",
      'Have you met any interesting peole while traveling?',
      "What's the best airline your've flown with? And the worst?",
      'Have you ever got lost while traveling?',
      'Did your class in school go on a trip together?',
      'What are the benefits of traveling?',
      'Where would like to go this weekend?',
      'Have you ever travelled in business class or first class?',
      'Would you like to go skiing?',
      'Do you prefer to travel alone or with other people?',
      'What countries would you most like to visit?',
      'Have you ever hitch-hiked?',
    ],
  },
  {
    topic: 'Movies',
    questions: [
      "What's your favourite movie?",
      "What's the last movie you saw?",
      'Do you like animated movies?',
      "Are there any kinds of movies that you don't like?",
      "Who's your favorite actor or actress?",
      "What's the most romantic movie you've seen?",
      'Have any movies made you cry?',
      'Do you usually watch movies at home or at a movie theater?',
      'Is there a movie you could watch over and over again?',
      "What's the scariest nmovie you've seen?",
      'Have you seen any good movies recently?',
      'Have you every fallen asleep during a movie?',
      'Do you prefer foreign movies to be dubbed or to have subtitles?',
      "What's the funniest movie you've seen?",
      'What movie soundtracks do you like?',
      "What's the longest movie you've seen?",
      'What movies would you recommend to your teacher or classmates?',
    ],
  },
  {
    topic: 'Money',
    questions: [
      'How much money do you usually spend per day?',
      "Do you sometimes buy things you don't need?",
      'When did you open your first bank account?',
      'How long would it take you to spend 1 million Dollars?',
      'Have you ever been in debt?',
      'Are you good at saving money?',
      'Are you saving money at the moment to buy something?',
      'Have you ever bought a lottery ticket?',
      'Have you ever had money stolen from you?',
      'Do you enjoy shopping?',
      'Do you ever buy second-hand things?',
      'If you had to save money, what could you do without?',
      'Do you ever give money to charity?',
      'What do you need to buy at the moment?',
      'How do people become rich?',
      "What's the most expensive thing you've bought?",
      'What do you spend most of your money on?',
      'How much money do you need to be happy?',
    ],
  },
  {
    topic: 'Have you ever?',
    questions: [
      'Have you ever slept in a tent?',
      'Have you ever milked a cow?',
      'Have you ever broken a bone?',
      'Have you ever been on TV?',
      'Have you ever fainted?',
      'Have you ever ridden a horse?',
      'Have you ever been trapped in an elevator?',
      "Have you ever eaten frog's legs?",
      'Have you ever been in an earthquake?',
      'Have you ever fallen in love at first sight?',
      'Have you ever been sunburnt?',
      'Have you ever tried an extreme sport?',
      'Have you ever been to a fashion show?',
      'Have you ever sung in public?',
      'Have you ever been skiing?',
      'Have you ever been to Japan?',
      'Have you ever met a celebrity?',
      'Have you ever been seasick?',
      'Have you ever touched a snake?',
      'Have you ever had a pet?',
      'Have you ever experienced deja vu?',
    ],
  },
  {
    topic: 'Free time',
    questions: [
      'Do you have enough free time?',
      'What takes up most of your time?',
      'How do you like to spend your free time?',
      'What new activity would you like to try in your free time?',
      'Where do young people usually spend their free time?',
      "What's your perfect weekend?",
      'Do you sometimes waste your free time?',
      'What do you really hate doing in your free time?',
      'If you had more free time, what would you do with it?',
      'Did you have any hobbies when you were a child?',
      'Do you spend too much free time on the internet?',
      'Do you like to read books?',
    ],
  },
  {
    topic: 'Education',
    questions: [
      'Where did you go to elementary school?',
      'What subjects did you like to study at school?',
      "What subjects didn't you like to study?",
      'Who was your favorite teacher?',
      "Have you had any teachers you didn't like?",
      'What subjects were you best at?',
      'What was your worst subject?',
      'Did you like scince at school?',
      'Do you find it easy to study?',
      'Are you good at taking exams?',
      'Were you a good student?',
      'Are school uniforms a good idea?',
      "What do you think children should learn at school that they don't usually learn?",
    ],
  },
]

function App() {
  const [screen, setScreen] = useState('topics')

  const [currQ, setCurrQ] = useState(0)
  const [currTopic, setCurrTopic] = useState('Hobbies')

  const nextQ = () => {
    setCurrQ(currQ + 1)
  }

  const ques = topicList.find((curr) => curr.topic === currTopic)
  const { questions } = ques

  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * topicList.length)
    setRandomNumber(randomNumber)
    setCurrQ(0)
    setScreen('random')
  }

  return (
    <>
      <div className='navbar'>
        <nav>
          <h1>inlingua</h1>
          <button className='nav-button' onClick={() => setScreen('topics')}>
            Topics
          </button>
          <button className='nav-button' onClick={generateRandomNumber}>
            Random Topic
          </button>
        </nav>
      </div>
      <div className='App'>
        <TopicsContext.Provider
          value={{
            screen,
            setScreen,
            currTopic,
            setCurrTopic,
            currQ,
            setCurrQ,
            questions,
            nextQ,
            generateRandomNumber,
            randomNumber,
            setRandomNumber,
          }}
        >
          {screen === 'topics' && <Topics />}
          {screen === 'questions' && <Questions />}
          {screen === 'random' && <Random />}
        </TopicsContext.Provider>
      </div>
    </>
  )
}

function Topics() {
  const { setScreen, setCurrTopic, setCurrQ } = useContext(TopicsContext)
  return (
    <div>
      <header>
        <h1>Conversation App</h1>
      </header>
      <div className='topic-list'>
        {topicList.map((topicList) => (
          <div
            className='card'
            onClick={() => {
              setCurrTopic(topicList.topic)
              setCurrQ(0)
              setScreen('questions')
            }}
          >
            {topicList.topic}
          </div>
        ))}
      </div>
    </div>
  )
}

function Questions() {
  const { setScreen, nextQ, currQ, currTopic, questions } =
    useContext(TopicsContext)
  return (
    <div className='q-box' onClick={nextQ}>
      <h2>{currTopic}</h2>
      <p>{questions[currQ]}</p>
      {currQ >= questions.length && (
        <button
          className='topics-button'
          onClick={() => {
            setScreen('topics')
          }}
        >
          Back to Topics
        </button>
      )}
    </div>
  )
}

function Random() {
  const { setScreen, nextQ, currQ, randomNumber } = useContext(TopicsContext)

  return (
    <div>
      <div className='q-box' onClick={nextQ}>
        <h2>{topicList[randomNumber].topic}</h2>
        <p>{topicList[randomNumber].questions[currQ]}</p>
        {currQ >= topicList[randomNumber].questions.length && (
          <button
            className='topics-button'
            onClick={() => {
              setScreen('topics')
            }}
          >
            Back to Topics
          </button>
        )}
      </div>
    </div>
  )
}

export default App
