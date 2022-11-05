var mylang= $('html').attr('lang');
var uid ='';
$(document).ready(function(){
  uid = $('#rec_uid').val();

  var datastring = {"atlas":"yes","action":"findparent","key":uid};
  //var url=  'http://www-test.fao.org/oceanatlas/proxy/dynatree/'; 
  var url=  'http://www.oceansatlas.org/proxy/dynatree/';
  var jqxhr = $.ajax({
          type: "GET",
          url: url,
          data: datastring,
          dataType: "json",
          success: function(data){
                    buildCrumbs(data,uid);
          } ,
          error: function(){
            console.log('error');
          }
  });
});

function buildCrumbs(results,uid){          
  //$('#top_breadcrumbs').remove('.bread'); 
  //$('#top_breadcrumbs').remove('.last-item');
  $('.bread').remove(); 
  $('.last-item').remove();  

  var html='';  
  $.each(results, function(text, val) {   
    if (val!='' && val!=null){
        if(val.uid==uid){   //current level
          html+='<span class="bread"> > </span><span class="last-item">'+val.title+'</span>';
        }else if(val.uid=='1' || val.uid=='2' || val.uid=='3' || val.uid=='2'){ //top level
          html+='<span class="bread"> > </span><a href="/'+(val.title).toLowerCase()+'/en/">'+val.title+'</a></span>';
        }else{   //previous level
          html+='<span class="bread"> > </span><a href="/subtopic/en/c/'+val.uid+'/">'+val.title+'</a></span>';
        } 
    }
  
  });
  $('#top_breadcrumbs').append(html) ;
}