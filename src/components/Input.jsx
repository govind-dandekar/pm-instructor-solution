function Input({ label, isTextArea, ...props }){
	return(
		<p>
			<label>{label}</label>
			{isTextArea ? 
				<textarea {...props} /> :
				<input {...props} />
			}
		</p>
	)
}

export default Input;