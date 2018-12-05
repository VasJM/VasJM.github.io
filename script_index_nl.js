jQuery(document).ready(function($) {
  var messages = $('div[data-type="message"]');
  //check if user updates the email field
  $('.form .email').keyup(function(event) {
    //check if user has pressed the enter button (event.which == 13)
    if (event.which != 13) {
      //if not..
      //hide messages and loading bar
      messages.removeClass('slide-in is-visible');
      $('.form').removeClass('is-submitted').find('.loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }

    var emailInput = $(this),
      insertedEmail = emailInput.val(),
      atPosition = insertedEmail.indexOf("@");
    dotPosition = insertedEmail.lastIndexOf(".");
    //check if user has inserted a "@" and a dot
    if (atPosition < 1 || dotPosition < atPosition + 2) {
      //if he hasn't..
      //hide the submit button
      $('.form').removeClass('is-active').find('.loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    } else {
      //if he has..
      //show the submit button
      $('.form').addClass('is-active');
    }
  });

  //backspace doesn't fire the keyup event in android mobile
  //so we check if the email input is focused to hide messages and loading bar
  $('.form .email').on('focus', function() {
    messages.removeClass('slide-in is-visible');
    $('.form').removeClass('is-submitted').find('.loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
  });

  //you should replace this part with your ajax function
  $('.submit').on('click', function(event) {
    if ($('.form').hasClass('is-active')) {
      event.preventDefault();
      //show the loading bar and the corrisponding message
      $('.form').addClass('is-submitted').find('.loading').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        showMessage();
      });

      //if transitions are not supported - show messages
      if ($('html').hasClass('no-csstransitions')) {
        showMessage();
      }
    }
  });

  function showMessage() {
    if ($('#success').is(':checked')) {
      $('.response-success').addClass('slide-in');
    } else if ($('#error').is(':checked')) {
      $('.response-error').addClass('is-visible');
    } else {
      $('.response-notification').addClass('is-visible');
    }
  }

  //placeholder fallback (i.e. IE9)
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  if (!Modernizr.input.placeholder) {
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
  }
})
