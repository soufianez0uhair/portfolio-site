import {AiFillGithub} from 'react-icons/ai';
import {BsFillPlayFill} from 'react-icons/bs';

const ProjectDisplay = ({currentProject}) => {
    return (
        <div className="projectDisplay-box">
                <div className="projectDisplay">
                <img src={currentProject.gif} alt="project display" className="projectDisplay__gif" key={currentProject.gif} />
                <a href={currentProject.live} className="projectDisplay__link" target="_blank">
                    <BsFillPlayFill className="icon icon--play" />
                    Live Demo
                </a>
                <a href={currentProject.github} className="projectDisplay__link" target="_blank" >
                    <AiFillGithub className="icon icon--github" />
                    Source Code
                </a>
            </div>
        </div>
    )
}

export default ProjectDisplay;