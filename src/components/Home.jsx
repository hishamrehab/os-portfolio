import { useGSAP } from '@gsap/react';
import { locations } from '../constants'
import clsx from 'clsx';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import useWindowStore from '../store/window';
import useLocationStore from '../store/location';

gsap.registerPlugin(Draggable);

const projects =locations.work?.children ?? [];
console.log(projects);

const Home = () => {
    const {setActiveLocation} = useLocationStore();
  const {openWindow} = useWindowStore();
  const  handeOpenProjectFinder = (project) => {
    setActiveLocation(project);  
    openWindow("finder");
  };

    useGSAP(() => {
        Draggable.create(".folder")
    } , []);

    return (
    <section id="home">
        <ul>
            {projects.map(project => (
                <li key={project.id} className={clsx("group folder" , 
                project.windowPosition
                )} onClick={() => handeOpenProjectFinder(project)} 
                >
                    <img src="/images/folder.png" alt={project.name} />
                    <p>{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home