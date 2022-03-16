var bl = require ('bl')
var http = require('http')
var resultados = []
var cont = 0
function printResults(){
    for (var i = 0; i < 3; i++)
    console.log(resultados[i])
}
function httpGet(index){
    http.get(process.argv[2 + index], function(response){
        response.pipe(bl(function(err, data){
            if(err)
            return console.error(err)

            resultados[index] = data.toString()
            cont ++

            if(cont == 3)
            printResults()
        }))
    })
}
for (var i = 0; i < 3; i++)
httpGet(i)