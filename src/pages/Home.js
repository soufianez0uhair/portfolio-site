import { useState } from "react";

import Header from "../components/Header";
import ProjectDisplay from "../components/ProjectDisplay";

const Home = () => {
    const [showProject, setShowProject] = useState(false);

    const [currentProject, setCurrentProject] = useState({
        name: '',
        gif: '',
        live: '',
        github: ''
    })

    function handleCurrentProject(prj) {
        setShowProject(true);
        setCurrentProject(prj);
    }

    return (
        <div className="home">
            <Header handleCurrentProject={handleCurrentProject} />
            {showProject && <ProjectDisplay currentProject={currentProject} />}
        </div>
    )
}

export default Home;