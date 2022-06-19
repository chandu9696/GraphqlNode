import * as http from 'http';

const server=http.createServer((request,response)=>{
    if(request.url==='/a')
    response.write('a here')

    response.end();

})
server.listen(process.env.PORT || 3000,()=>{console.log('here in a')})