const Jimp = require('jimp');
Jimp.read('public/gev_logo_transparent_clean.png').then(image => {
    let cropped = image.autocrop();
    let edge = Math.min(cropped.bitmap.width, cropped.bitmap.height);
    cropped.crop(0, 0, edge, edge)
        .resize(512, 512)
        .write('public/favicon.png');
    console.log('Saved public/favicon.png');
}).catch(console.error);
