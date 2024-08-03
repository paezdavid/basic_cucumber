module.exports = {
    default: {
      require: ['features/step_definitions/*.js'],
      format: ['progress', 'json:results/cucumber-report.json'],
      parallel: 2,
      paths: ['features/*.feature']
    }
  };
  