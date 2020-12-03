var idName1,moleArr,uName,element,count=0,leftTime=20,ref=0,highScore,hValue;

moleArr = ['mole1','mole2','mole3','mole4','mole5','mole6','mole7','mole8'];

function hit(value){
    idName1 =value;
    value = 'mole'+value;
    if(idName1>0){
        count += 1;
        document.getElementById('Score').innerHTML  = count;
    }
}

function startGame(){
    updateHighScore();
    if(ref == 0){
        ref = setInterval(start,1500);
    }
}

function start(){
    /*
    console.log('Set Interval Refrence '+ref)
    console.log('type of Set Interval Refrence '+typeof(ref))
    console.log("Start Function")
    */
     
    element = moleArr[(Math.floor(Math.random() * 8))]
    document.getElementById(element).classList.remove('hide');
    console.log("SetTimeOut")
    setTimeout(function(){  document.getElementById(element).classList.add('hide'); }, 1000);

    leftTime -= 1;
    if(leftTime == -1){
        clearInterval(ref);
        updateHighScore();
            document.querySelector('.bgcolor').style.display='none';
            document.querySelector('.row1').style.display='none';
            butn2.style.visibility='visible';
            setTimeout(function(){ st(); }, 1000);
            document.getElementById('endsc').innerHTML="YOUR SCORE IS:"+count;
            // butn1.style.display="none";


         
        ref = 0;
        count = 0;
        leftTime = 20;

    }
    else{
        document.getElementById('timeLeft').innerHTML = leftTime;
        document.getElementById('Score').innerHTML  = count;
    }
}

function set(){
    document.getElementById('userName').innerHTML = localStorage.getItem('uName');
}

function stop(){
    clearInterval(ref);
    ref = 0;
    document.getElementById('timeLeft').innerHTML = leftTime;    
}

function myCookie(){
    console.log('Cookie Function Execution.')
    console.log('Score : '+count);
    document.cookie="";
    cookieString ="highScore"+"="+count;
    document.cookie=cookieString;
}

function getCookie(str){
    hValue = str.split('=');
    return hValue[1];

}

function updateHighScore(){

    highScore = getCookie(document.cookie);

    console.log('This is the High Score Value : '+highScore);
        if(highScore == undefined){
            myCookie();
            document.getElementById('highScore').innerHTML = 0;
        }

        else if(highScore < count){
            myCookie();
            document.getElementById('highScore').innerHTML = getCookie(document.cookie);
        }
    else{
        document.getElementById('highScore').innerHTML = getCookie(document.cookie);
    }
    
}
    butn2.style.visibility="hidden";

    function st()
        {
            // document.querySelector('.container-fluid').style.backgroundColor="red";
            // document.querySelector('.container-fluid').style.backgroundImage=" url('https://media.giphy.com/media/Eqz8ZFUScPHH2/giphy.gif')";
            // document.querySelector('.container-fluid').style.backgroundSize="cover";
            // document.querySelector('.container-fluid').style.backgroundRepeat="no repeat";
            
            
            hsc.style.display="none";
            ti.style.display="none";
            butn1.style.display="none";
            
             var divsToHide = document.getElementsByClassName("bgcolor"); //divsToHide is an array
            for(var i = 0; i < divsToHide.length; i++){
        // divsToHide[i].style.visibility = "hidden"; // or
            divsToHide[i].style.display = "none";
            
         }
            
         }

/*  document.getElementById(idName1).classList.add('hide'); */
