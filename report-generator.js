const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
    jsonDir: 'reports',
    reportPath: 'reports/html',
    metadata:{
        browser: { name: 'chrome', version: 'latest' },
        device: 'Local test machine',
        platform: { name: 'windows', version: '11' }
    },
    customData: {
        title: 'Playwright Cucumber Report',
        data: [
            { label: 'Project', value: 'Playwright BDD Tests' },
            { label: 'Execution Time', value: new Date().toString() }
        ]
    }
});