const nativefier = require('nativefier').default;

const W = 1280;
const H = 740;
// Mahjong Soul is perfectly 16:9, so this should be 720
// Here we're adding 20 to account for title bar in OSX

var options = {
    name: 'Mahjong Soul',
    targetUrl: 'https://mahjongsoul.game.yo-star.com/',
    out: './dist',
    overwrite: true,
    asar: true,

    width: W,
    height: H,
    minWidth: W,
    minHeight: H,
    maxWidth: W,
    maxHeight: H,

    disableDevTools: true,
    fastQuit: true,
    singleInstance: true,
    showMenuBar: false,
    darwinDarkModeSupport: true,

    browserwindowOptions: {
        webPreferences: {
            defaultFontFamily: {
                standard: "Cronos Pro",
                serif: "Cronos Pro",
            }
        }
    },
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});
