module.exports = {
  apps : [
    {
      "name": "talik.io",
      "script": "./server/index.js",
      "env": {
        "NODE_ENV": "production"
      },
      "env_development": {
         "NODE_ENV": "development"
      },
      "instances" : "max",
      "exec_mode" : "cluster"
    },
],

  deploy : {
    production : {
      user : 'slimane',
      host : 'talik.io',
      ref  : 'origin/main',
      repo : 'https://github.com/amiarSlimane/talik-website',
      path : '/home/slimane/talik/talik-website',
      'pre-deploy-local': '',
      'post-deploy' : 'cd server && npm install  && cd .. && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};