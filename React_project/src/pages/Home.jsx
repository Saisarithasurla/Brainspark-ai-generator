import React from 'react'
import { useEffect,useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
const gradients = [
  "bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200",
  "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200",
  "bg-gradient-to-r from-rose-200 via-red-200 to-orange-200",
  "bg-gradient-to-r from-cyan-200 via-blue-200 to-indigo-200",
  "bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200",
  "bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200",
  "bg-gradient-to-r from-sky-200 via-blue-200 to-indigo-200",
  "bg-gradient-to-r from-teal-200 via-cyan-200 to-blue-200",
  "bg-gradient-to-r from-lime-200 via-green-200 to-emerald-200",
  "bg-gradient-to-r from-fuchsia-200 via-pink-200 to-rose-200",
  "bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200",
  "bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200"
];

  const [currentGradient, setCurrentGradient] = useState(gradients[0]);
  const [prompt, setPrompt] = useState("")
  const navigate = useNavigate()
  const handlePrompt = () =>
  {
    if (prompt.trim() === "")
      alert("Please Enter a Prompt")
    else
     navigate("/generate",{state:{prompt}})
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        gradients[Math.floor(Math.random() * gradients.length)];
      setCurrentGradient(random);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);
  

  return (
    <div
      className={`w-screen min-h-screen flex flex-col items-center justify-center  transition-all duration-1000 ${currentGradient}`}>
      <h1 className='text-5xl text-center p-16 -mt-54'>Turn your <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-extrabold">Ideas</span> into Smart Solutions With BrainSpark</h1>
      <div className='flex items-center space-x-4'>
      <textarea className='w-3xl border-black border-2 placeholder:text-2xl outline-0  p-4 rounded-2xl justify-center items-center' rows="5"  type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Enter Your Prompt'></textarea>
      <button onClick={handlePrompt} className='text-white text-2xl bg-blue-600 rounded-2xl border-2 flex items-center h-16 p-3 w-32 hover:bg-red-500 font-semibold'>Generate</button>
    </div>
    </div>
  )
}

export default Home