module.exports = (message, status, res) => {
    res.status(status);
    res.send({ message });
}