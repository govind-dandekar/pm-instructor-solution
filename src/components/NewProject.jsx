import { useRef } from 'react';

import Input from "./INput";
import Modal from './Modal';

function NewProject({onAddNewProject, onCancelAddProject}){
	const modalRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dateRef = useRef();

	function handleSave(){
		const enteredTitle = titleRef.current.value;
		const enteredDescription = descriptionRef.current.value;
		const enteredDate = dateRef.current.value;

		// validation -- ensure inputs are not empty strings
		if (enteredTitle.trim() === '' || enteredDescription.trim() === '' 
			|| enteredDate === ''
		){
			//show the error modal
			modalRef.current.open();
			//end function call if input is invalid
			return;
		}

		// clear ref values
		titleRef.current.value = '';
		descriptionRef.current.value = '';
		dateRef.current.value = '';

		onAddNewProject({
			title: enteredTitle,
			description: enteredDescription,
			dueDate: enteredDate
		})
	}
	
	return(
		<>
			<Modal 
				ref={modalRef}
				buttonCaption={"Close"}
			>
				<h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
				<p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value</p>
				<p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>	
			</Modal>
			<div className="w-[35rem] mt-16">
				<menu className="flex items-center justify-end gap-4 my-4">
					<li>
						<button
							onClick={onCancelAddProject} 
							className="text-stone-800 hover:text-stone-950">
							Cancel
							</button></li>
					<li>
						<button 
						onClick={handleSave}
						className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input
						type="text"
						label="Title"
						ref={titleRef}
					/>
					<Input 
						label="Description"
						isTextArea
						ref={descriptionRef}
					/>
					<Input 
						type="date"
						label="Due Date"
						ref={dateRef}
					/>
				</div>
			</div>
		</>
	)
}

export default NewProject;