
(function(){
 
var counter = 0,
$items = document.querySelectorAll('.carousel figure'),
$labels = document.querySelectorAll('h6')
numItems = $items.length;
 
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);
    [].forEach.call($items, function(el){
        el.classList.remove('show');
    });
    [].forEach.call($labels, function(el){
        el.classList.remove('show');
    });
    $items[itemToShow].classList.add('show');
    $labels[itemToShow].classList.add('show');
};
 
$next = document.querySelector('.next');
$next.addEventListener('click', function() {
    counter++;
    showCurrent();
}, false);
 
$prev = document.querySelector('.prev');
$prev.addEventListener('click', function() {
    counter--;
    showCurrent();
}, false);
 
})();
 