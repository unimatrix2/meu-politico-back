export const handleError = (err, req, res, nxt) => {
	console.log(err);
	const { message, type, status } = err;
	const statusCode = status || 500;

	return res.status(statusCode).json({ message, type: type || '', status: statusCode });
}

export const handle404 = (req, res) => {
    res.status(404).json({
        name: 'Page404',
        url: req.url,
        message: 'Service not found',
        status: 404
    });
}