/**
 * Created by flo on 06/03/15.
 */
(function(){

    var items = document.getElementsByClassName("item"),
        itemsLength = items.length;

    for (var i = 0 ; i < itemsLength ; i++) {
        items[i].addEventListener('click', function(e){
            e.preventDefault();
            this.className = "item active";

        }, false);
    }
})();