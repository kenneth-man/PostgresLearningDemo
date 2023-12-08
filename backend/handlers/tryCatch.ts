export const tryCatch = (callback: Function) => {
	try {
		callback()
	} catch(e: any) {
		if(e.message) throw new Error(e)
		throw new Error('Something went wrong')
	}
}