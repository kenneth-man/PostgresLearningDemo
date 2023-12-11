export const checkMissingParams = (reqParams: unknown[]) => {
	const allReqParamsExist = reqParams.every((reqParam) =>
		reqParam !== undefined
		&& reqParam !== null
		&& reqParam !== ''
	)
	if (!allReqParamsExist) throw new Error('Missing request parameters')
}