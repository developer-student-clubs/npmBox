const isUrl = require('is-url');

// Test URLs
const validUrl = 'https://www.example.com';
const invalidUrl = 'not a valid url';

// Check if a URL is valid
if (isUrl(validUrl)) {
    console.log(`${validUrl} is a valid URL.`);
} else {
    console.log(`${validUrl} is not a valid URL.`);
}

if (isUrl(invalidUrl)) {
    console.log(`${invalidUrl} is a valid URL.`);
} else {
    console.log(`${invalidUrl} is not a valid URL.`);
}
