/**
 *  30) BOM intro - what is bom? what's inside
   31) meet navigator object - userAgent, platform, connection
   detect browser
   language
   getBattery()
   online vs connection

   32) meet geolocation api - detect longitude/latitude
       use google api to detect city
   33) add use my city products only filter

   34) meet storage api - document.cookie, sessionStorage, localStorage

   35) store user preferences in localStorage (note about complex filters)
 */

   // BOM - browser object model
   // window.navigator
   // navigator => window.navigator
console.log(navigator.userAgent);//{}

function fnBrowserDetect(){
                 
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }
    
     return browserName;
}
// fnBrowserDetect();

console.log(navigator.platform);
console.log(navigator.connection);
console.log(navigator.onLine);
navigator.getBattery().then(results => console.log("BATTERY is", results));
console.log(navigator.language);
// window.alert("AAA"); alert("AAA")