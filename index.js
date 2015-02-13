
var fs = require('fs');
var execSync = require('child_process').execSync;

var pkg = require('./package.json');

module.exports = function(){

  var debug = require('debug');
  debug = debug(pkg.name);

  var bannerDetectors = {
    ubuntu:function(distro){
      var fName = '/etc/lsb-release';
      if(fs.existsSync(fName)){
        debug('found %s', fName);
        var name = execSync('lsb_release', ['-c']);
        debug('found %s', name);
        var release = execSync('lsb_release', ['-r']);
        debug('found %s', release);
        return {
          distro:distro,
          name: name,
          release: release
        };
      }
    },
    fedora:function(distro){
      var banner;
      var issueFName = '/etc/issue';
      var releaseFName = '/etc/redhat-release';

      if(fs.existsSync(issueFName) ){
        debug('found %s', issueFName);
        banner = fs.readFileSync(issueFName,'utf-8').split('\n')[0];

      }else if(fs.existsSync(releaseFName) ){
        debug('found %s', releaseFName);
        banner = fs.readFileSync(releaseFName,'utf-8');
      }
      if(banner ){
        return {
          distro:distro,
          name: banner,
          release: banner.match('[0-9]+')[0]
        };
      }
    }
  };

  var detected = false;
  Object.keys(bannerDetectors).forEach(function(distro){
    if( detected === false ) {
      detected = bannerDetectors[distro](distro) || false; // mist return false, OR, an detected object
    }
  });

  return detected;
};