const { app, BrowserWindow, screen } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 405,
    height: 405,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    transparent: true,
    resizable: false,
  });

  win.loadFile("index.html");
  win.on("will-move", (event, rect) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    rect.width + rect.x + 2 > width && event.preventDefault();
    rect.height + rect.y + 2 > height && event.preventDefault();
    rect.x < 0 && event.preventDefault();
    rect.y < 0 && event.preventDefault();
  });
};

app.whenReady().then(() => {
  createWindow();
});
