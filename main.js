const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 760,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,  // Disabling nodeIntegration for security
            contextIsolation: true   // Enabling contextIsolation for security
        }
    });
    // Set minimum window size
    mainWindow.setMinimumSize(1280, 800);
    console.log('mainWindow created');

    // Load the index.html of the app.
    mainWindow.loadFile('index.html');

    console.log('index.html loaded');

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
    
}

app.whenReady().then(() => {
    createWindow();
    console.log('App is ready');

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('before-quit', () => {
    // Handle application exit logic here
});


