const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directory = './web/images';

if (!fs.existsSync(directory)) {
    console.error(`Error: Directory "${directory}" does not exist.`);
    process.exit(1);
}

// Function to process images recursively
function processImages(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach(entry => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            processImages(fullPath);
        } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
            const outputFile = `${path.join(dir, path.parse(entry.name).name)}.webp`;

            sharp(fullPath)
                .toFormat('webp')
                .toFile(outputFile)
                .then(() => console.log(`Converted: ${fullPath} -> ${outputFile}`))
                .catch(err => console.error(`Error processing ${fullPath}:`, err));
        }
    });
}

processImages(directory);
