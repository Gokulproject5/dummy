
import './App.css'

function App() {
 

  return (
    <>
     <div class="card">
  <h1>Developer Profile</h1>

   {/* Basic Info  */}
  <section>
    <h2>Basic Info</h2>
    <p><strong>Name:</strong> Gokul</p>
    <p><strong>Role:</strong> Frontend Developer</p>
  </section>

  {/* <!-- Skills --> */}
  <section>
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
  </section>

  {/* <!-- Projects --> */}
  <section>
    <h2>Projects</h2>

    <div class="project">
      <h3>Portfolio Website</h3>
      <p>Personal portfolio built using React.</p>
      <span>Status: Completed</span>
    </div>

    <div class="project">
      <h3>Task Manager</h3>
      <p>A simple task management app.</p>
      <span>Status: In Progress</span>
    </div>
  </section>
</div>
    </>
  )
}

export default App
