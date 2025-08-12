import Header from "./components/Header/Header";
import AboutMe from './components/About Me/AboutMe';
import MyWork from "./components/My Work/MyWork";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

export default function App() {

  return (
    <>
      <Header/>
      <main>
        <AboutMe/>
        <MyWork/>
        <Education/>
      </main>
      <Contact/>
    </>
  )
}
