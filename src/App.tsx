import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
   <main>
    <Navbar></Navbar>
    <Hero></Hero>
   </main>
    )
}

export default App