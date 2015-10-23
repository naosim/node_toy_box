'use strict';
var app = require('app');
var BrowserWindow = require('browser-window');
var fs = require('fs');
require('crash-reporter').start();

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') app.quit();
});


app.on('open-url', function() {
  console.log('open-url');
  console.log(arguments);
});
app.on('ready', function() {
  var mainWindow = new BrowserWindow({width: 1200, height: 84});
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  mainWindow.webContents.on('did-finish-load', () => {
  });
  mainWindow.loadUrl('file://' + __dirname + '/dist/index.html');
});
