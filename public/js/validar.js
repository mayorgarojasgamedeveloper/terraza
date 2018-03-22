let validateForm = function validateForm(e) {

  e.preventDefault();

  let status = true;

  let button = $(this);
  // Obtain form
  // Obtein input type text
  // Obtain requierd elements
  // Obtain any other element you want to validate
  // Validate required elements

  let form = button.parent('form');

  let required = form.find('*[required]');
  let pattern = form.find('*[pattern]');

  status = validateRequiredFields(required);
  //status = validatePatternFields(pattern);

  if(status) {

  }
}

let validateRequiredFields = function validateRequiredFields(fields) {

  let status = true;

  fields.each(function() {
    let element = $(this);

    if(element.is('input') && element.val() === '') {
        genereteError(element, 'required');
        status = false;
    }

    if(element.is('select') && element.val() === 0) {
        genereteError(element, 'required');
        status = false;
    }
  });

  return status;
}

let validatePatternFields = function validatePatternFields(fields) {

  let status = true;

  fields.each(function() {
    let element = $(this);

    if(element.is('input') && element.val() === '') {
        genereteError(element, 'required');
        status = false;
    }

    if(element.is('select') && element.val() === 0) {
        genereteError(element, 'required');
        status = false;
    }
  });

  return status;
}

let genereteError = function generateError(element, typeError) {
  //alert('This ' + element.name + ' field is ' + typeError);
  element.addClass('error');
  $('<span class="error-text">' + typeError + '</span>').insertAfter(element);
}
