import File from '../assets/file.png'

const Project = ({project,handleCurrentProject}) => {
    return (
        <div onClick={() => handleCurrentProject(project)} className="project">
            <img src={File} alt="project" className="project__img" />
            <span className="project__name">{project.name}</span>
        </div>
    )
}

export default Project;