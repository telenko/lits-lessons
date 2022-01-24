function whenDomReady (cb) {
    if (document.readyState === 'loading') {
      // loading in progress, awaiting event
      document.addEventListener('DOMContentLoaded', cb);
    } else {
      // DOM ready!
      cb();
    }
  }
  