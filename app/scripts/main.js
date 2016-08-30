'use strict';

requirejs.config({
  baseUrl: '../',
  // Path mappings for the logical module names
  paths:
  {
    jquery: 'bower_components/jquery/dist/jquery'
  },
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    jquery:
    {
      exports: ['jQuery', '$']
    }
  },
  deps: ['scripts/startup']
});

require(['jquery'], function($) {
  console.log('jquery %s', $);
});
