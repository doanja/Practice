; (function ($) {
  /**
   * OBSERVER
   * 
   * This is where the objects in a system may subscribe to other objects
   * and be notified by them when an event of interest occurs.
   * 
   * Objects can publish or trigger events that other objects can subscribe to
   * 
   * jQuery has a a built in custom event scheme
   * 
   */

  // Equivalent to subscribe(topicName, callback)
  $(document).on("flashAlert", function () {
    flash($(".flashingContainer"))
  });

  $(document).on("freakOut", function () {
    freakOut($(".flashingContainer"))
  });

  function flash($el) {
    $el.fadeIn(500);
    $el.fadeOut(1000);
  }

  function freakOut($el) {
    $el.animate({
      opacity: 0.25,
      height: "toggle"
    }, 750, function () {
      $el.animate({
        opacity: 1,
        height: "toggle"
      }, 100)
    })
  }

  setInterval(function () {
    // Equivalent to publish
    $(document).trigger("flashAlert")
  }, 1000)

  setInterval(function () {
    // Equivalent to publish
    $(document).trigger("freakOut")
  }, 500)

})(jQuery)