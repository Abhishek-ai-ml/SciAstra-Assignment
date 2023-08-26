import "./App.css";
import Advisor_Card from "./components/Advisor_Card";
import Mentor_Card from "./components/Mentor_Card";
import University_Card from "./components/University_Card";
import { Universities } from "./utils/data";
import { mentors } from "./utils/data";
import { Advisor } from "./utils/data";
function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-11/12 mx-auto flex flex-col items-center pt-24 gap-y-5">
        <h1 className="pb-3 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Team Page</h1>
        <h2 className="text-2xl font-semibold pb-5 text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-pink-600">Learn from Scientists, research scholars from the top institutes in the world</h2>

        {/* Section 1 */}
        {/* Universities */}
        <section className="flex mx-auto justify-center flex-wrap gap-x-10 gap-y-10 w-full">
          {
            Universities.map((university) => (
              <University_Card key={university.id} university = {university}/>
            ))
          }
        </section>

        {/* Section 2 */}
        {/* Mentor Section */}
        <section className="pt-24 flex flex-col gap-y-10">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-pink-600">Meet Your Mentors</h2>


          <div className="flex mx-auto justify-center flex-wrap gap-x-10 gap-y-10 w-full">
            {
              mentors.map((mentor) => (
                <Mentor_Card key={mentor.id} mentor={mentor}/>
              ))
            }
          </div>
        </section>

        {/* section 3 */}
        {/* Mentor and Advisor */}
        <section className="pt-24 flex flex-col gap-y-10 pb-28 w-full">
          {/* <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-pink-600 pb-5">Mentor & Advisor</h2> */}

          <div className="flex mx-auto justify-between flex-wrap gap-x-1 gap-y-10 w-full">
            {
              Advisor.map((adv) => (
                <Advisor_Card key={adv.id} adv={adv}/>
              ))
            }
          </div>
        </section>
        
        <div className="pb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange-400 to-yellow-400">Created By: Abhishek</div>
      </div>
    </div>
  );
}

export default App;
