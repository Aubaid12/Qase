
// playwright.config.js
const config = {
use: {
screenshot: 'only-on-failure',
video: 'retain-on-failure',
},
reporter: [
['list'],
[
'playwright-qase-reporter',
{
mode: 'testops',
debug: false,
testops: {
api: {
token: '96dc0541197af721a2d52a2b75846326937f1d708de8222322f43ed316d2652e',
},
project: 'DEMO', // Replace <DEMO> with your project code
uploadAttachments: true,
run: {
complete: true,
},
},
},
],
],
};

module.exports = config;