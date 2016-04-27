$( function() {
  
  var $listOfTabsHeaders = $('.tabs__header'); // list of tabs header elements
  var $listOfDivsContainers = $('.tabs__fragment'); // list of tavs content elements
  var activeTab; // element that diplays
  
  $listOfDivsContainers.map( function( i, element ) {
    var $element  = $(element);
    $element.hide();
    return $element;
  });

var firstHeaderTabElement = $('a.tabs__link').attr('href').replace(/^.+#/,'');
  activeTab = firstHeaderTabElement;
  
  $(activeTab).addClass('tabs__fragment_active').show();
 
  $('.'+activeTab.slice(1)).addClass('tabs__header_active');

$listOfTabsHeaders.each(function(index, element) {
    var $e = $(element);
    $e.on('click', function (event) {      
      event.preventDefault();
      var id = $e.find('a.tabs__link').attr('href').replace(/^.+#/, '');
      
      if (id !== activeTab) {
        $('.'+activeTab.slice(1)).removeClass('tabs__header_active');
        
        $(activeTab).removeClass('tabs__fragment_active').hide();
      }
      
      $e.addClass('tabs__header_active');
      $(id).addClass('tabs__fragment_active').show();
      
      activeTab = id;

      console.error(activeTab);
    });
  });

 function getId(hrefElement) {
    return hrefElement.getAttribute('href').replace(/^.+#/, "");
  }

});
