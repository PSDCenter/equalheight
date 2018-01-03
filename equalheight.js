export function equalHeight(container) {
  var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;
  $(container).each(function() {
    $el = $(this);
    $($el).height('auto')
    var topPostion = $el.position().top;
    if (currentRowStart != topPostion) {
      for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};
