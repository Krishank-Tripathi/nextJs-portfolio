import ProjectGrid from "./ProjectGrid";
import {userData} from "../constants/data";

export default function Projects() {
    return(
        <>
            <ProjectGrid projects={userData.projects}/>
        </>
    );
}