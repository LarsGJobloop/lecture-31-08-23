import { ProjectCard } from "./components/ProjectCard/ProjectCard"
import { LayoutBase } from "./layouts/LayoutBase/LayoutBase"

import { projects } from "./data/projects"
import './index.css'

function App() {

  return (
    <LayoutBase>
      <section>
        <h2>Component properties</h2>
        
        <ul>
          {
            projects.map((project) => {
                return (
                  <li key={project.id}>
                    <ProjectCard
                      name={project.name}
                      description={project.description}
                      githubLink={project.githubLink}
                      imageUrl={project.imageUrl}
                    />
                  </li>
                )
              }
            )
          }
        </ul>

      </section>
    </LayoutBase>
  )
}

export default App
