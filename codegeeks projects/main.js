
function voice(){
    var recognition=new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult=function(event){
        console.log(event);
        document.getElementById("voice-to-text-area").value = event.results[0][0].transcript;
    }
    recognition.start();

}
// 'data:text/plain;charset=utf-8,'

// download btn 
function download(textarea,filename){
    //     var link = document.createElement('a');
    // link.href = url;
    // link.download = 'file.pdf';
    // link.dispatchEvent(new MouseEvent('click'));
    var element =document.createElement('a')
    element.setAttribute('href',"data:application/pdf;base64,<?= $file_content ?>" +encodeURIComponent(textarea))
    element.setAttribute('download',filename)
    document.body.appendChild(element);
    element.style.display='none';
    element.click();
    document.body.removeChild(element);
}
var downloadbtn=document.getElementById("click-to-download")
downloadbtn.addEventListener('click',function(e){
    var textarea=document.getElementById("voice-to-text-area").value
    var filename="output.pdf"
    download(textarea,filename);
});
