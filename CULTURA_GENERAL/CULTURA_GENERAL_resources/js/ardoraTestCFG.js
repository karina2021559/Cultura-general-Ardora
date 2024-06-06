//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=29; timeIni=29; timeBon=3;
var successes=0; successesMax=8; attempts=0; attemptsMax=4;
var score=0; scoreMax=24; scoreInc=3; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFD5D5"; colorButton="#E4FC87"; colorText="#000000"; colorSele="#FF9FF1";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo estas haciendo muy bien!"; messageTime="¡Oh no, se acabó el tiempo!"; messageError="Tú puedes, vuelve a intentarlo"; messageErrorG="Tú puedes, vuelve a intentarlo"; messageAttempts="Sigue intentandolo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1VMVFVSQV9HRU5FUkFM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cúales son las estaciones del año?","¿Cuántos meses tiene el año?","¿Cúales son los colores de la bandera de México?","¿Qué animal produce miel?","¿Cómo se llama la lluvia que cae en forma de bolas de hielo?","¿Cuántos lados tiene un cuadrado?","¿Qué color se forma cuando se combina el rojo y el amarillo?","¿Cuántos pulmones tiene un ser humano?"];
var answers1=["MXZlcmFubw==","MWludmllcm5v","MXByaW1hdmVyYQ==","MW90b8Oxbw==","MHZhY2FjaW9uZXM=","MGhhbGxvd2Vu","MG5hdmlkYWQ="];
var answers2=["MTEy","MDEw","MDE2","MDI0"];
var answers3=["MXJvam8=","MWJsYW5jbw==","MXZlcmRl","MGF6dWw=","MHJvc2E=","MGFtYXJpbGxv","MGNhZsOp"];
var answers4=["MWFiZWph","MHDDoWphcm8=","MG1hcmlwb3Nh"];
var answers5=["MWdyYW5pem8=","MGxsdXZpYQ==","MG5pZXZl"];
var answers6=["MTQ=","MDM=","MDY="];
var answers7=["MW5hcmFuamE=","MHZlcmRl","MG1vcmFkbw=="];
var answers8=["MTI=","MDE=","MDM=","MDQ="];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7,answers8];
var err=["intentalo de nuevo.","Intentalo de nuevo","intentalo de nuevo","intentalo de nuevo","intentalo de nuevo","intentalo de nuevo","intentalooo de nuevo","intentalo de nuevo"];
var ima=["","","","","","","",""];
var mp4=["","","","","","","",""];
var ogv=["","","","","","","",""];
var alt=["","","","","","","",""];
var info=["","","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="CULTURA_GENERAL_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
