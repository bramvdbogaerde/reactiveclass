Package.describe({
  name: 'bramvdbogaerde:reactiveclass',
  version: '0.0.2',
  summary: 'Creates setters and reactive getters for your class properties',
  git: 'https://github.com/bramvdbogaerde/reactiveclass',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('reactiveclass.js');
  api.export("ReactiveClass")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bramvdbogaerde:reactiveclass');
  api.addFiles('reactiveclass-tests.js');
});
