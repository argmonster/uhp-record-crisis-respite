var util = require('mis-util');
var config = require('./config.ignore');

var options = {
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   },
   view_path: {
      local: './view/',
      remote: '/CUST/forms/'
   }
};

var mis = util(options);

mis.deploy.parm();

mis.deploy.view();

mis.script.import.dst('./dst/crisis-respite-census.dstimport');


