Package.describe({
  name: 'tektite:makemeadmin',
  version: '0.1.0',
  summary: 'Template to make the first user admin',
  git: 'https://github.com/tektitese/meteor-makemeadmin.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['templating','tracker'], 'client');
  api.use('alanning:roles', {weak: true});
  
  api.versionsFrom('1.1.0.2');
  api.addFiles(['makemeadmin.html','makemeadmin.js'], 'client');
  api.addFiles(['makeme_server.js'], 'server');
});