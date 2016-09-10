function CubeData() {

  var arr  = data();
//load first question
    var question  = arr[0].question;

    document.getElementById("question").innerHTML = question;
    document.getElementById('count').value = 0;
    document.getElementById('qnums').innerHTML = '1';

}


function check_answer(ans){

        var count  = document.getElementById('count').value;
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


            count = parseInt(count);
          count  = parseInt(count + 1);
            document.getElementById('count').value = count;
        }

        else{

          //wrong answer
          anim =  'back';
          var vid = '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="640" height="264" poster="http://tidewellhospice.org/welcome/wp-content/uploads/2015/11/emersonstill.jpg" data-setup="{}"> <source src="'+ video_for_incorrect+'" type="video/mp4" /> <source src="#" type="video/webm" /> <source src="" type="video/ogg" /> </video>';
          document.getElementById('inject_vid').innerHTML = vid;


        }


        //Run animation
        $(function(){

            $('#cube').removeClass().addClass(anim);

        });




}



function next() {

    var arr  = data();

    //get number of questions
    var nos  = arr.length;

    var count = document.getElementById('count').value;
    count = parseInt(count);

    if(count!=nos) {
        var question = arr[count].question;

        qcount =  (count + 1);
        document.getElementById("question").innerHTML = question;

        document.getElementById('qnums').innerHTML = qcount;

        //Run animation
        $(function () {

            $('#cube').removeClass().addClass('bottom');

        });
    }else{

        //Run animation
        $(function () {

            $('#cube').removeClass().addClass('top');

        });

    }

}



function back() {


    //Run animation
    $(function () {

        $('#cube').removeClass().addClass('');

    });


}
