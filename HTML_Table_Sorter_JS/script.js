function sortTable(parent){
    function makeSortable(table){
        var i = 0;
        function sort(table, col, reverse){
            var tb = table.tBodies[0];
            var tr = Array.prototype.slice.call(tb.rows, 0);
            var reverse =- ((+reverse) || -1 );
            tr = tr.sort(function (a,b){
                return reverse * (a.cells[col].textContent.trim().localeCompare(b.cells[col].textContent.trim()));
            });
            for (i = 0; i < tr.length; i++){
                tb.appendChild(tr[i]);
            }
            console.log("Sort Successfull");
        }
        var th = table.tHead;
        th && (th = th.rows[0]) && (th = th.cells);
        if (th){
            i = th.length;
        } else {
            return false;
        }
        while (i-- >= 1)(function (i){
            var dir = 1;
            th[i].addEventListener('click', function(){
                sort(table, i, (dir = 1 - dir))});
        }(i));
    }
    parent = parent  || document.body;
    var tab = parent.getElementsByTagName("table");
    var i = tab.length;
    while(--i >= 0) makeSortable(tab[i]);
}
window.onload = function(){sortTable();};