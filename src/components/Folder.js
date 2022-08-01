import { useState } from "react";

import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io';

import OpenedFolder from '../assets/openedFolder.png';
import UnopenedFolder from '../assets/unopenedFolder.png';
import Link from "./Link";
import Project from "./Project";

const Folder = ({name,projects,links,handleCurrentProject}) => {
    const [showFiles, setShowFiles] = useState(false);

    return (
        <div className="folder-box" style={{marginTop: showFiles ? '1rem' : '0'}}>
            {showFiles ? <div onClick={() => setShowFiles(!showFiles)} className="folder">
                <IoIosArrowDown className="icon icon--arrow" />
                <img src={OpenedFolder} alt="opened folder" className="folder__img--2" />
                <span className="folder__name">{name}</span>
            </div> : <div onClick={() => setShowFiles(!showFiles)} className="folder">
                <IoIosArrowForward className="icon icon--arrow" />
                <img src={UnopenedFolder} alt="unopened folder" className="folder__img" />
                <span className="folder__name">{name}</span>
            </div> }
            {
                projects && showFiles && <ul className="projects">
                    {projects.map(project => (
                        <Project project={project} handleCurrentProject={handleCurrentProject} />
                    ))}
                </ul>
            }
            {
                links && showFiles && <ul className="links">
                    {
                        links.map(lk => (
                            <Link name={lk.name} link={lk.link} />
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Folder;