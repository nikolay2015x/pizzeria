var news = document.querySelectorAll('.info')
news.forEach(info => {
    var dialog = info.querySelector('dialog');
    info.querySelector('.show').onclick = function() {
        dialog.showModal();
    };
});

var dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
    dialog.querySelector('.close').onclick = function(){
        dialog.close();
    };
});