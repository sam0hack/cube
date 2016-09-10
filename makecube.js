function CubeData() {

  var arr  = data();
//load first question
    var question  = arr[0].question;

    document.getElementById("question").innerHTML = question;

}


function check_answer(ans){

var count='';

if (count!=0) {
  count = parseInt(count + 1);
}else{
  count = 0;
}
alert(count);
//get questions
var obj  = data();

//number of questions
var nos = obj.length;

var answer    = obj[count].answer;
var video_for_correct  = obj[count].video_for_correct;
var video_for_incorrect =  obj[count].video_for_incorrect;
var anim =  0;

if (ans==answer) {

  anim = 'right';

  var vid_cor = '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="640" height="264" <source src="'+video_for_correct+'" type="video/mp4" /><source src="#" type="video/webm" /><source src="" type="video/ogg" /></video>';

  document.getElementById('inject_vidR').innerHTML = vid_cor;


  count  = (count + 1);
}

else{

  anim =  'back';
  var vid = '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="640" height="264" poster="http://tidewellhospice.org/welcome/wp-content/uploads/2015/11/emersonstill.jpg" data-setup="{}"> <source src="'+ video_for_incorrect+'" type="video/mp4" /> <source src="#" type="video/webm" /> <source src="" type="video/ogg" /> </video>';
  document.getElementById('inject_vid').innerHTML = vid;


}









//animation
$(function(){

	$('#cube').removeClass().addClass(anim);

});




}
