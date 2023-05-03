//Listar archivos.
const path = require('path');
const fs = require('fs');

var data=[];

console.log("Buscando…")
function scanDirs(directoryPath){
   try{
      var ls=fs.readdirSync(directoryPath);

      for (let index = 0; index < ls.length; index++) {
         const file = path.join(directoryPath, ls[index]);
         var dataFile =null;
         try{
            dataFile =fs.lstatSync(file);
         }catch(e){}

         if (dataFile){
            data.push(
               {
                  path: file,
                  isDirectory: dataFile.isDirectory(),
                  length: dataFile.size
               });
            console.log(`Ruta: ${data.path} Es directorio: ${data.isDirectory} Tamaño: ${data.size}`)
            if (dataFile.isDirectory()){
               scanDirs(file)
            }
         }
      }
   }catch(e){}
}

scanDirs("../img");