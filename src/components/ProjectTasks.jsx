import NewTask from "./NewTask";

function ProjectTasks(){
	return (
		<section>
			<h2 className="text-2xl font-bold sext-stone-700 mb-4">
				Tasks
			</h2>
			<NewTask />
			<p className="text-stone-800 my-4">
				This project does not have any tasks yet.
			</p>
			<ul>

			</ul>
		</section>
	)
}

export default ProjectTasks;