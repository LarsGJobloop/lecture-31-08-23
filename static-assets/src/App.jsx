import { ProjectCard } from "./components/ProjectCard/ProjectCard"
import { LayoutBase } from "./layouts/LayoutBase/LayoutBase"

import './index.css'
import projectImage from './assets/project-1-image.avif'

function App() {
  return (
    <LayoutBase>
      <section>
        <h2>Component properties</h2>
        
        <ProjectCard
          name="First HTML project"
          imageUrl={projectImage}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt obcaecati inventore quos dolorem dolore facilis ex, totam deserunt ea, earum, distinctio et est. Rem veniam nobis provident cupiditate ea?"
          githubLink="https://github.com"
        />

        <ProjectCard
          name="Second HTML and CSS project"
          imageUrl="https://plus.unsplash.com/premium_photo-1680104511613-ac897df8c6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In sunt obcaecati inventore quos dolorem dolore facilis ex, totam deserunt ea, earum, distinctio et est. Rem veniam nobis provident cupiditate ea?"
          githubLink="https://github.com"
        />

        <ProjectCard  />

      </section>
    </LayoutBase>
  )
}

export default App
