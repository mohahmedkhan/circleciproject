const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Button click test', () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: 'dangerously' });
        document = dom.window.document;
        const script = document.createElement('script');
        script.textContent = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
        document.body.appendChild(script);
    });

    it('should display text when button is clicked', () => {
        const button = document.getElementById('myButton');
        button.click();
        const displayText = document.getElementById('displayText');
        expect(displayText.style.display).toBe('block');
    });
});

