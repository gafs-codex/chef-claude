import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import './scrimba2.css'
import Props from './components/props'
import Jokes from './components/jokes'
import JokeHeader from './components/Hjoke'
import jokesData from '.'
import ChefHeader from './components/chef-head'
import ChefBody from './components/chef-body'

// function App() {
//   const jokeElement = jokesData.map((joke) => {
//     return <Jokes
//       setup={joke.setup}
//       punchline={joke.punchline}
//     />
//   })


//   return (
//     <main className='jokes'>
//      {jokeElement}
//     </main>
//     // <>
//     //   <JokeHeader />
//     //   <div className='jokes'>
//     //     <Jokes
//     //       setup="I got my daughter a fridge for her birthday."
//     //       punchline="I can't wait to see her face light up when she opens it."
//     //       upvotes={1}
//     //       isPun={true}
//     //     />
//     //     <Jokes
//     //       setup="What's the best thing about Switzerland?"
//     //       punchline="I don't know, but the flag is a big plus!"
//     //     />
//     //     <Jokes
//     //       setup="How did the hacker escape the police?"
//     //       punchline="He just ransomware!"
//     //     />
//     //     <Jokes
//     //       setup="Why do bees stay in the hive in the winter?"
//     //       punchline="Swarm."
//     //     />
//     //   </div>
//     // </>
//   )
// }

function App() {
  return (
    <>
      <ChefHeader />
      <ChefBody />
    </>
  )
}
export default App