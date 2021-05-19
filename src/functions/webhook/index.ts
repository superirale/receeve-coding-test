import schema from './schema';

export default {
  handler: `${__dirname.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'webhook',
        request: {
          schema: {
            'application/json': schema
          }
        }
      }
    }
  ]
}