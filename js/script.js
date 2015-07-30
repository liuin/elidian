$(document).ready(function() {
  //弹出框样式
  $('.modal').on('show.bs.modal',function  () {
    $(this).show();
    var obj = $(this).find('.modal-dialog');
    var wd = ($(window).height() - obj.height())/2;
    obj.css({
      'top':wd - 15
    })
  })
  
})