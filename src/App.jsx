import { useState } from 'react';

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(id){
    setProjectsState((previousState) => {
      return (
        {...previousState,
          selectedProjectId: id
        }
      )   
    })
  }

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

  function handleDeleteProject(id){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter((project) => project.id !== id)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

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
  } else {
    content = <SelectedProject 
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
