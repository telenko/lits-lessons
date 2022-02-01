function whenDomReady (cb) {
    if (document.readyState === 'loading') {
      // loading in progress, awaiting event
      document.addEventListener('DOMContentLoaded', cb);
    } else {
      // DOM ready!
      cb();
    }
  }
  

function showLoader() {
  const loader = document.createElement("div");
  loader.classList.add("lds-roller");
  loader.innerHTML = `<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;
  document.body.insertBefore(loader, document.body.children[0]);
}

function hideLoader() {
  const loader = document.querySelector('.lds-roller');
  if (!loader) {
    return;
  }
  loader.remove();
}