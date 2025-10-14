module.exports = {
  default: `--require ./steps/**/*.ts \
            --format json:./reports/cucumber-report.json \
            --format progress \
            ./features/**/*.feature`
};
