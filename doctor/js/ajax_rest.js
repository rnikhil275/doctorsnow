function post_ajax_data(url, encodedata, success)
{
$.ajax({
type:"POST",
dataType: 'html',
contentType: "application/json",
url:url,
data :encodedata,
onComplete: function(transport){ },
beforeSend :function(data) { },
success:function(data){
success.call(this, data);
},
error: function(data){
console.log("error");
//result = data.responseText;
 console.log(JSON.stringify(data));
}
});
}