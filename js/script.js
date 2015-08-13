$(document).ready(function () {
  //弹出框样式
  $('.modal').on('show.bs.modal', function () {
    $(this).show();
    var obj = $(this).find('.modal-dialog');
    var wd = ($(window).height() - obj.height()) / 2;
    obj.css({
      'top': wd - 15
    })
  })

  //phone
  var phonetemp = '<li class="addphonte-item"><i class="del ar">X</i></li>';
  $('#photo').on('change', function () {
    if($('#addphonte .addphonte-item').length < 7){
      var changeUrl = 'images/store-pic3.jpg';
      
      $('#hphoto-pic').attr('src', changeUrl);
      var phonetempClone = $(phonetemp);
      phonetempClone.append('<img src="'+ changeUrl +'" alt="" />');
      $('#photo-deg').hide();
      $('#addphonte').show().prepend(phonetempClone);    
    }else{
      alert('图片不能超过6个');
    }
    
    
  })
  $('#addphonte-item-add').on('click',function () {
    if($('#addphonte .addphonte-item').length < 7){
      $('#photo').trigger('click');
    }else{
      alert('图片不能超过6个');
    }
  })
  $('#addphonte').on('click','i.del',function(){
    var clickfu = confirm('确定删除吗?');
    if(clickfu){
      $(this).parent().remove();
      if($('#addphonte .addphonte-item').length < 2){
        $('#addphonte').hide();
      }
    }
    
  })

})