const notFoundHandler = (req, res) => {
    res.status(404).json({
        message: `Route ${req.originalUrl} not found`
    });
};

export default notFoundHandler;
