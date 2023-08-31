import './ProjectCard.css'

/**
 * Card to show of projects
 * 
 * @param { { name: string, imageUrl: string, description: string, githubLink: string} } properties
 */
export function ProjectCard(properties) {
  const { name, imageUrl, description, githubLink } = properties

  return (
    <article>
      <h3>{name}</h3>
      <img className='project-image' src={imageUrl} alt="" />
      <p>{description}</p>
      <a href={githubLink}>Source Code</a>
    </article>
  )
}