// Your code here
function saturdayFun(fun='roller-skate')
{
  return ('This Saturday, I want to '+ fun + '!')
}

function mondayWork(activity=`go to the office`)
{
  return (`This Monday, I will ` + activity +`.`)
}

function  wrapAdjective(flair='*')
{
  return function(adj='special')
  {
    return `You are ${flair}${adj}${flair}!`
  }
}
let encouragingPromptFunction=wrapAdjective("!!!");
encouragingPromptFunction("%")("a dedicated programmer");

const Calculator ={
  add:function(x,y){x+y;},
  subtract: function(x,y){x-y;},
  multiply: function(x,y){x*y;},
  divide: function(x,y){x/y;}
}
function actionApplyer(){
  
}