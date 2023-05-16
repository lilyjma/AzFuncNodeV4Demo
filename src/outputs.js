const { output } = require('@azure/functions');

const blobOutput = output.storageBlob({
    path: 'backups/{backupPath}',
    connection: 'StorageConnectionStr',
});

module.exports = { blobOutput } 