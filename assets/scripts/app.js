(function(document) {
    'use strict';
  
    // Grab a reference to our auto-binding template
    // and give it some initial binding values
    // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
    var app = document.querySelector('#app');
    app.contactKey = '';
    // app.signedIn = false;
  
    // Sets app default base URL
    app.baseUrl = '/';
    // app.dbMap = {
    //   '/actions': ['/users/$app.user.uid/actions', '/contacts/$app.contactKey/actions'],
    //   '/dummy': ['/dummer/$app.user.uid/dumb', '/placeHolder/other/$app.user.uid/stuffs']
    // };
    app.testFunc = function(e) {
      console.log('testing');
    };
  
    if (window.location.port === '') {  // if production
      // Uncomment app.baseURL below and
      // set app.baseURL to '/your-pathname/' if running from folder in production
      // app.baseUrl = '/polymer-starter-kit/';
    }
  
    app.displayInstalledToast = function() {
      // Check to make sure caching is actually enabled—it won't be in the dev environment.
      if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
        Polymer.dom(document).querySelector('#caching-complete').show();
      }
    };
  
    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function() {
      console.log('Our app is ready to rock!');
  
      // Listen for the logout event from toolbar-profile
      document.querySelector('toolbar-profile').addEventListener('logout', function(e) {
        // document.querySelector('auth-splashscreen').clearForm();
      });
    });
  
    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
      // imports are loaded and elements have been registered
    });
  
    // Global variables
    app.user; //The user object returned from Firbase authentication
    app.userRef; //The Firebase reference to the user's node
  
    // // Main area's paper-scroll-header-panel custom condensing transformation of
    // // the appName in the middle-container and the bottom title in the bottom-container.
    // // The appName is moved to top and shrunk on condensing. The bottom sub title
    // // is shrunk to nothing on condensing.
    // window.addEventListener('paper-header-transform', function(e) {
    //   var appName = Polymer.dom(document).querySelector('#mainToolbar .app-name');
    //   var middleContainer = Polymer.dom(document).querySelector('#mainToolbar .middle-container');
    //   var bottomContainer = Polymer.dom(document).querySelector('#mainToolbar .bottom-container');
    //   var detail = e.detail;
    //   var heightDiff = detail.height - detail.condensedHeight;
    //   var yRatio = Math.min(1, detail.y / heightDiff);
    //   // appName max size when condensed. The smaller the number the smaller the condensed size.
    //   var maxMiddleScale = 0.50;
    //   var auxHeight = heightDiff - detail.y;
    //   var auxScale = heightDiff / (1 - maxMiddleScale);
    //   var scaleMiddle = Math.max(maxMiddleScale, auxHeight / auxScale + maxMiddleScale);
    //   var scaleBottom = 1 - yRatio;
  
    //   // Move/translate middleContainer
    //   Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);
  
    //   // Scale bottomContainer and bottom sub title to nothing and back
    //   Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);
  
    //   // Scale middleContainer appName
    //   Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
    // });
  
    // // Scroll page to top and expand header
    // app.scrollPageToTop = function() {
    //   app.$.headerPanelMain.scrollToTop(true);
    // };
  
    // app.closeDrawer = function() {
    //   app.$.paperDrawerPanel.closeDrawer();
    // };
  
    app.isEmpty = function(obj) {
      // Speed up calls to hasOwnProperty
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      // null and undefined are "empty"
      if (obj === null || obj === undefined) {
        return true;
      }
      // Assume if it has a length property with a non-zero value
      // that that property is correct.
      if (obj.length > 0) {
        return false;
      }
      if (obj.length === 0) {
        return true;
      }
      // If it isn't an object at this point
      // it is empty, but it can't be anything *but* empty
      // Is it empty?  Depends on your application.
      if (typeof obj !== "object") {
        return true;
      }
      // Otherwise, does it have any properties of its own?
      // Note that this doesn't handle
      // toString and valueOf enumeration bugs in IE < 9
      for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) {
            return false;
          }
      }
      return true;
    };
  
    app.findWithProp = function(array, prop, value) {
      for(var i = 0; i < array.length; i += 1) {
          if(array[i][prop] === value) {
              return i;
          }
      }
      return -1;
    };
  
    app.uniq = function(a) {
      var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];
  
      return a.filter(function(item) {
          var type = typeof item;
          if(type in prims)
              return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
          else
              return objs.indexOf(item) >= 0 ? false : objs.push(item);
      });
    };
  
})(document);