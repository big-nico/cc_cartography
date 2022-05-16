import './App.css'
import MapChart from './MapChart';
import a from './authors.jpg';

function App() {
  return (
    <>
      <header className="photobanner">
        <div className="items">
          <img
            src={a}
            alt="Banner"
          />
        </div>
      </header>
      <div className="container"> 
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <title>
            Canon and Cartography: Mapping the lives and ideas of Contemporary Civilizations’ authors
          </title>
        </div>
        <div className='body'>
          <article id="fe0fd663-e3b1-4ae3-9a47-309a847c5ef1" className="page serif">
            <header>
              <h1 
                className="page-title">
                Canon and Cartography: Mapping the Lives and Ideas of Contemporary Civilizations’ Authors
              </h1>
            </header>
            <div className="page-body">
              <p id="92c885a5-f1b5-4f69-b11d-940534fa43ba" className="">By Nicolas Ouporov </p>
              <p id="9142fe73-e90e-4c20-b6ed-9fd45c853dbc" className="block-color-gray">May 15th, 2022</p>
              <p id="1fdd74fc-c341-43c9-9adf-13de8f9f4047" className=""></p>
              <MapChart/>
              <h2 id="670b25e3-d235-4410-b2a2-977a24da1838" className="">Introduction </h2>
              <br></br>
              <p id="ae4b5753-58d4-4105-9b15-6f5560dbd047" className="">
              Contemporary Civilization, a year-long component of the Columbia Core Cirriculum, posits itself as an introduction to the arguments and ideas that have shaped our political and cultural history. Ostensibly, the aim of the course is to develop students into informed citizens and set them off with a working understanding of the values that inform community. The class carries out this mission through a cirriculum of “great books” in the philosophic tradition, a two-hour discussion session, and assignments that impell students to constuct philosohical arguments of their own.
              </p>
              <br></br>
              <p id="a8e86db7-d352-4ef5-9fce-d3c54171ad3f" className="">
              In recent years, however, this cirriculum has received immense scrutiny from students and professors alike, becoming the centerpiece in a rich discourse on representation and diversity in the Core Cirriculum. As the course adopts texts based on “historical influence, the presentation of ideas of enduring importance, and the demonstrated ability of a text to provoke productive discussion” (Rovane), the Contemporary Civilization’s texts and their authors are elevated as the cornerstones of the intellectual tradition — at least in the eyes of Columbia University. As such, a key component in the criticisms of Contemporary Civilizations is that the vast majority of the texts which are considered to meet the aforementioned criteria are composed by authors who are dead, white, and male. While the cirriculum has adapted overtime to become more inclusive after pressure by concerned students and faculty, the course as a whole still represents a distinctly Christian and European standpoint.  </p>
              <br></br>
              <p id="9e73391e-11ea-4860-9a85-3c8eebdea017" className="">
              When reflecting on my own experience in the course, this fact was often the source of many compelling conversations in class around the Core Cirriculum and the challenges present in establishing a philosophical canon. In this project, I aim to provide another entry into that converstation through the lens of a data-driven approach. By visualizing the authors of Contemporary Civilizations with respect to place and time, I hope to provide a tool to explore the development, focus, and potential biases of their works and the cirriculum as a whole.
              </p>
              <br></br>
              <h2 id="2ed2bcbe-8383-4bb0-a8ec-706d332661ab" className="">Methodology</h2>
              <br></br>
              <p id="ae4b5753-58d4-4105-9b15-6f5560dbd047" className="">
              To contruct this work, I collected data on the each contemporary civilizations author, their timeline, location they were born, and location where they died, dividing them into categories based on whether their work was required or optional in the course. Overall, I captured information on fifty-four unique authors, excluding author collectives and those who lacked comprehensive location or timeline records. 
              </p>
              <br></br>
              <p id="a8e86db7-d352-4ef5-9fce-d3c54171ad3f" className="">
              To visualize the data, I used react.js to provide the dynamic elements, react-simple-maps to plot points, Material UI for components like the timeline slider and buttons. The page was published and deployed through github pages.  </p>
              <br></br>
              <p id="9e73391e-11ea-4860-9a85-3c8eebdea017" className="">
              The end result is a interactive map that visualizes the timelines and locations of each author in the CC cirriculum throughout time. The slider provides a way to filter the timeline considered and reflect in the map. The play and pause button allow users to continuously scan through the map of the CC authors. Hovering over a circle provides the name of the corresponding author. 
              </p>
              <br></br>
              <h2 id="e1c26878-c223-4c40-a9ca-5ba61ee6c11f" className="">Conclusion</h2>
              <p id="eeb6d6c3-09cb-4398-87a4-fe06846288be" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <p id="4138e7cf-81a9-4302-8706-15af7751f961" className=""></p>
              <h2 id="076d0c4b-7585-4147-b900-8176b6699660" className="">Works Cited</h2>
              <p id="69d47330-8e46-4dca-9105-44f6c0cfa97c" className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
