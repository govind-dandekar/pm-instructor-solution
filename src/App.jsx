import { useState } from 'react';

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState((previousState) => {
      return {
      ...previousState,
      selectedProjectId: null
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined
      }
    })
  }

  function handleAddProject(projectData){
    
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject 
      onAddNewProject={handleAddProject}
      onCancelAddProject={handleCancelAddProject}
    />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected  
      onStartAddProject={handleStartAddProject}  
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
