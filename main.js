const {app, BrowserWindow} = require ('electron');

let ventana;
function createWindow(){
    ventana = new BrowserWindow({
        width: 400,
        height: 700
    })
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)
