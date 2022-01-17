'use strict';

module.exports.handler = async (event) => {
    exports.handler = async (event) => {        
        // check if the object is empty, then throw error
        if(Object.keys(event).length === 0) {
            throw 'Missing require fields'
        }
        // TODO implement
        const response = {
            statusCode: 200,
            body: JSON.stringify('Hello from Lambda!'),
        };
        return response;
    };
    
};
