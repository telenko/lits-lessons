/**
 *
  0) why need split into multiple files
  1) the problem (loading necessary scripts + order)
  2) what is module? let's take a look at function --> in <--> module --> output
  2.1) what is import
  2.2) what is export
  2.3) importing named, default modules
  3) introducing ES modules imports, exports, script type='module'
  4) writing few modules (circular dependencies note)
  5) lazy loading modules
  6) refactoring app to modules, project architecture (features/backend,ui,utils,locales)
    
  x) error handling widget

  hw)
  1) refactor previous hw into modules
 */
import { c as cFromModule, FAKE } from "./c.js"; //   var cModule = c.js var c = cModule.c; * as

function c() {
    console.log("ASD");
}
c();
cFromModule();
console.log(FAKE);