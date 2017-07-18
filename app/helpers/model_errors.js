module.exports = function (err) {
    if (err) {
        switch (err.name) {
            case 'ValidationError':
                for (const field in err.errors) {
                    console.log(`ValidationError field ${field} ${err.errors[field].type}`);
                }
            break;
            default:
                console.log(`Unkown error ${err.name}`);
        }
    }
}
