// Initialize Nice Select
$(document).ready(function() {
  $('select').niceSelect();
});


// intitalize Smart Wizard
$(function() {
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});



// Show div on step 9
$(document).ready(function(){
  // Hide the info box initially
  $("#step9-info-box").hide();

  // Attach click event listener to radio buttons
  $("input[name='how-long-shap-of-life']").click(function(){
      // Check if any radio button is checked
      if($(this).is(":checked")){
          // Show the info box if a radio button is checked
          $("#step9-info-box").show();
      } else {
          // Hide the info box if no radio button is checked
          $("#step9-info-box").hide();
      }
  });
});