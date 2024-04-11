import input from '@inquirer/input';
import qrImage from 'qr-image';
import fs from 'fs';


async function generateQRCode() {
    const URL = await input({ message: 'Enter URL' });

    fs.writeFileSync('user_input.txt', URL);
    const qrImageBuffer = qrImage.imageSync(URL, { type: 'png' });
    fs.writeFileSync('qrcode.png', qrImageBuffer);

    console.log('QR code generated successfully.');
}

generateQRCode().catch(error => {
    console.error('An error occurred:', error);
});





