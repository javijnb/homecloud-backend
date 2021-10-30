const translatePath = (requestedPath) => {
    return requestedPath.replace(/:/g, "/");
};

module.exports = translatePath;