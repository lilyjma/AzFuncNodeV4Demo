const { app } = require('@azure/functions');
const { blobOutput } = require('../outputs.js')

app.http('uploadFile', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    extraOutputs: [blobOutput],
    route: 'backups/{backupPath}',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const content = await request.text();

        context.extraOutputs.set(blobOutput, content);

        return { body: `Uploaded: \n ${content}!` };
    }
});

