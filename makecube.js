/**
 *Main brain of the cube
 * @author sam0hack
 * @company ILM Techno solutions
 *
 */


/**
 *
 * @constructor
 */
function CubeData() {

  var arr  = data();
//load first question
    var question  = arr[0].question;

    document.getElementById("question").innerHTML = question;
    document.getElementById('count').value = 0;
    document.getElementById('qnums').innerHTML = '1';

}

/**
 *
 * @param ans
 */
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

          anim = 'bottom';

          var vid_cor = '<video autoplay id="correct_video" class="video-js vjs-default-skin" controls preload="none" width="640" height="264" <source src="'+video_for_correct+'" type="video/mp4" /><source src="#" type="video/webm" /><source src="" type="video/ogg" /></video>';

          document.getElementById('inject_vidR').innerHTML = vid_cor;


            count = parseInt(count);
          count  = parseInt(count + 1);
            document.getElementById('count').value = count;
        }

        else{

          //wrong answer
          anim =  'back';
          var vid = '<video autoplay id="wrong_video" class="video-js vjs-default-skin" controls preload="none" width="640" height="264" poster="http://tidewellhospice.org/welcome/wp-content/uploads/2015/11/emersonstill.jpg" data-setup="{}"> <source src="'+ video_for_incorrect+'" type="video/mp4" /> <source src="#" type="video/webm" /> <source src="" type="video/ogg" /> </video>';
          document.getElementById('inject_vid').innerHTML = vid;


        }


        //Run animation
        $(function(){

            $('#cube').removeClass().addClass(anim);

        });




}


/**
 * next question
 */
function next() {

    var arr  = data();

    //get number of questions
    var nos  = arr.length;

    var vid = document.getElementById("correct_video");
    vid.pause();

    var count = document.getElementById('count').value;
    count = parseInt(count);

    if(count!=nos) {
        var question = arr[count].question;

        qcount =  (count + 1);
        document.getElementById("question").innerHTML = question;

        document.getElementById('qnums').innerHTML = qcount;

        //Run animation
        $(function () {

            $('#cube').removeClass().addClass('right');

        });
    }else{

        //Run animation
        $(function () {

            $('#cube').removeClass().addClass('top');

        });

    }

}


/**
 * back if incorrect answer
 */
function back() {




    var vid = document.getElementById("wrong_video");
    vid.pause();
    //Run animation
    $(function () {

        $('#cube').removeClass().addClass('right');

    });


}
