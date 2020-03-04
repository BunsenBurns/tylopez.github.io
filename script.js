$("#mixType").change(function() {
    if ($(this).val() == "yes") {
      $('#otherFieldDiv').show();
      $('#otherField').attr('required', '');
      $('#otherField').attr('data-error', 'This field is required.');
    } else {
      $('#otherFieldDiv').hide();
      $('#otherField').removeAttr('required');
      $('#otherField').removeAttr('data-error');
    }
  });
  $("#mixType").trigger("change");
  
  $("#mixTypeGroup").change(function() {
    if ($(mixTypeGroup).val() == "WtPt") {
      $('#howManySamples').show();
      $('#howManySamples2').show();
      $('#otherFieldGroupDiv').show();

    } else {
      $('#otherFieldGroupDiv').hide();
      $('#howManySamples').hide();
      $('#howManySamples2').hide();
      $('#sampleInfo1').hide();

    }
  });
  $("#mixTypeGroup").trigger("change");
  
  $("#howManySamples2").change(function() {
    if ($(howManySamples2).val() == "one" && $(mixTypeGroup).val() == "WtPt") {
      $('#sampleInfo1').show();
    } else {
      $('#sampleInfo1').hide();

    }
  });

  $("#howManySamples2").trigger("change");
  