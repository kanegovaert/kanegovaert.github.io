function typeIndex(){
var typed = new Typed("#under-text", {
  strings: ["Web developer", "Software developer", "And a passionate freelancer"],
  smartBackspace: true, // Default value
  typeSpeed: 75,
  loop: true
  });
}
function type(string){
var typed = new Typed("#under-text", {
  strings: [string],
  typeSpeed: 75
  });
}
