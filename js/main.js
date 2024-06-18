var NeoApp=angular.module("NeoApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","ui.bootstrap"],function($interpolateProvider){$interpolateProvider.startSymbol("[");$interpolateProvider.endSymbol("]");});NeoApp.config(["$routeProvider",function($routeProvider,$scope,$rootScope){$routeProvider.when("/StartPage",{templateUrl:"StartPage",controller:"StartPage_Ctrl"});$routeProvider.when("/TreeHome",{templateUrl:"TreeHome",controller:"TreeHome_Ctrl"});$routeProvider.when("/BR1",{templateUrl:"BR1",controller:"BR1_Ctrl"});$routeProvider.when("/DBTest",{templateUrl:"DBTest",controller:"DBTest_Ctrl"});$routeProvider.when("/Work",{templateUrl:"Work",controller:"Work_Ctrl"});$routeProvider.when("/Work2",{templateUrl:"Work2",controller:"Work2_Ctrl"});$routeProvider.when("/Work3",{templateUrl:"Work3",controller:"Work3_Ctrl"});$routeProvider.when("/WorkPhilos1",{templateUrl:"WorkPhilos1",controller:"WorkPhilos1_Ctrl"});$routeProvider.when("/WorkPhilos1a",{templateUrl:"WorkPhilos1a",controller:"WorkPhilos1a_Ctrl"});$routeProvider.when("/workphilos2",{templateUrl:"workphilos2",controller:"workphilos2_Ctrl"});$routeProvider.when("/workphilos3",{templateUrl:"workphilos3",controller:"workphilos3_Ctrl"});$routeProvider.when("/workphilos4",{templateUrl:"workphilos4",controller:"workphilos4_Ctrl"});$routeProvider.when("/workphilos5",{templateUrl:"workphilos5",controller:"workphilos5_Ctrl"});$routeProvider.when("/workphilos6",{templateUrl:"workphilos6",controller:"workphilos6_Ctrl"});$routeProvider.when("/workphilos7",{templateUrl:"workphilos7",controller:"workphilos7_Ctrl"});$routeProvider.when("/workphilos8",{templateUrl:"workphilos8",controller:"workphilos8_Ctrl"});$routeProvider.when("/workPhCommitment1",{templateUrl:"workPhCommitment1",controller:"workPhCommitment1_Ctrl"});$routeProvider.when("/Timelord",{templateUrl:"Timelord",controller:"Timelord_Ctrl"});$routeProvider.when("/TIMELORD01",{templateUrl:"TIMELORD01",controller:"TIMELORD01_Ctrl"});$routeProvider.when("/Timelord1a",{templateUrl:"Timelord1a",controller:"Timelord1a_Ctrl"});$routeProvider.when("/TIMELORD02",{templateUrl:"TIMELORD02",controller:"TIMELORD02_Ctrl"});$routeProvider.when("/Timlord2a",{templateUrl:"Timlord2a",controller:"Timlord2a_Ctrl"});$routeProvider.when("/TIMELORD03",{templateUrl:"TIMELORD03",controller:"TIMELORD03_Ctrl"});$routeProvider.when("/Timelord3a",{templateUrl:"Timelord3a",controller:"Timelord3a_Ctrl"});$routeProvider.when("/TIMELORD04",{templateUrl:"TIMELORD04",controller:"TIMELORD04_Ctrl"});$routeProvider.when("/Timelord4a",{templateUrl:"Timelord4a",controller:"Timelord4a_Ctrl"});$routeProvider.when("/TIMELORD05",{templateUrl:"TIMELORD05",controller:"TIMELORD05_Ctrl"});$routeProvider.when("/Timelord5a",{templateUrl:"Timelord5a",controller:"Timelord5a_Ctrl"});$routeProvider.when("/TIMELORD06",{templateUrl:"TIMELORD06",controller:"TIMELORD06_Ctrl"});$routeProvider.when("/Timelord6a",{templateUrl:"Timelord6a",controller:"Timelord6a_Ctrl"});$routeProvider.when("/TIMELORD07",{templateUrl:"TIMELORD07",controller:"TIMELORD07_Ctrl"});$routeProvider.when("/Timelord7a",{templateUrl:"Timelord7a",controller:"Timelord7a_Ctrl"});$routeProvider.when("/TIMELORD08",{templateUrl:"TIMELORD08",controller:"TIMELORD08_Ctrl"});$routeProvider.when("/Timelord8a",{templateUrl:"Timelord8a",controller:"Timelord8a_Ctrl"});$routeProvider.when("/TNeoAppPage15",{templateUrl:"TNeoAppPage15",controller:"TNeoAppPage15_Ctrl"});$routeProvider.when("/TNeoAppPage14",{templateUrl:"TNeoAppPage14",controller:"TNeoAppPage14_Ctrl"});$routeProvider.when("/TimlordDevelopNotes01",{templateUrl:"TimlordDevelopNotes01",controller:"TimlordDevelopNotes01_Ctrl"});$routeProvider.when("/TimelordDevelopnotes02",{templateUrl:"TimelordDevelopnotes02",controller:"TimelordDevelopnotes02_Ctrl"});$routeProvider.when("/Timelorddevelopnotes03",{templateUrl:"Timelorddevelopnotes03",controller:"Timelorddevelopnotes03_Ctrl"});$routeProvider.when("/allphQA",{templateUrl:"allphQA",controller:"allphQA_Ctrl"});$routeProvider.when("/Decisions1",{templateUrl:"Decisions1",controller:"Decisions1_Ctrl"});$routeProvider.when("/Decisions2",{templateUrl:"Decisions2",controller:"Decisions2_Ctrl"});$routeProvider.when("/AppDev",{templateUrl:"AppDev",controller:"AppDev_Ctrl"});$routeProvider.when("/Appdev2",{templateUrl:"Appdev2",controller:"Appdev2_Ctrl"});$routeProvider.when("/appdev3",{templateUrl:"appdev3",controller:"appdev3_Ctrl"});$routeProvider.when("/appdev4",{templateUrl:"appdev4",controller:"appdev4_Ctrl"});$routeProvider.when("/appdev5",{templateUrl:"appdev5",controller:"appdev5_Ctrl"});$routeProvider.when("/appdev6",{templateUrl:"appdev6",controller:"appdev6_Ctrl"});$routeProvider.when("/appdev7",{templateUrl:"appdev7",controller:"appdev7_Ctrl"});$routeProvider.when("/appdev8",{templateUrl:"appdev8",controller:"appdev8_Ctrl"});$routeProvider.when("/appdev9",{templateUrl:"appdev9",controller:"appdev9_Ctrl"});$routeProvider.when("/appdev10",{templateUrl:"appdev10",controller:"appdev10_Ctrl"});$routeProvider.when("/PlanRPlus",{templateUrl:"PlanRPlus",controller:"PlanRPlus_Ctrl"});$routeProvider.when("/TNeoAppPage12",{templateUrl:"TNeoAppPage12",controller:"TNeoAppPage12_Ctrl"});$routeProvider.when("/TNeoAppPage11",{templateUrl:"TNeoAppPage11",controller:"TNeoAppPage11_Ctrl"});$routeProvider.when("/Healthnew",{templateUrl:"Healthnew",controller:"Healthnew_Ctrl"});$routeProvider.when("/Healthnew2",{templateUrl:"Healthnew2",controller:"Healthnew2_Ctrl"});$routeProvider.when("/FF",{templateUrl:"FF",controller:"FF_Ctrl"});$routeProvider.when("/Book1",{templateUrl:"Book1",controller:"Book1_Ctrl"});$routeProvider.when("/Book2",{templateUrl:"Book2",controller:"Book2_Ctrl"});$routeProvider.when("/Book3",{templateUrl:"Book3",controller:"Book3_Ctrl"});$routeProvider.when("/Book4",{templateUrl:"Book4",controller:"Book4_Ctrl"});$routeProvider.when("/Book5",{templateUrl:"Book5",controller:"Book5_Ctrl"});$routeProvider.when("/Book6",{templateUrl:"Book6",controller:"Book6_Ctrl"});$routeProvider.when("/Book7",{templateUrl:"Book7",controller:"Book7_Ctrl"});$routeProvider.when("/Book8",{templateUrl:"Book8",controller:"Book8_Ctrl"});$routeProvider.when("/Book9",{templateUrl:"Book9",controller:"Book9_Ctrl"});$routeProvider.when("/Book10",{templateUrl:"Book10",controller:"Book10_Ctrl"});$routeProvider.when("/Book11",{templateUrl:"Book11",controller:"Book11_Ctrl"});$routeProvider.when("/Book12",{templateUrl:"Book12",controller:"Book12_Ctrl"});$routeProvider.when("/Meditation",{templateUrl:"Meditation",controller:"Meditation_Ctrl"});$routeProvider.when("/Kingsway",{templateUrl:"Kingsway",controller:"Kingsway_Ctrl"});$routeProvider.when("/Starkie",{templateUrl:"Starkie",controller:"Starkie_Ctrl"});$routeProvider.when("/TNeoAppPage13",{templateUrl:"TNeoAppPage13",controller:"TNeoAppPage13_Ctrl"});$routeProvider.when("/Order",{templateUrl:"Order",controller:"Order_Ctrl"});$routeProvider.when("/Reset",{templateUrl:"Reset",controller:"Reset_Ctrl"});$routeProvider.when("/Prayer",{templateUrl:"Prayer",controller:"Prayer_Ctrl"});$routeProvider.when("/T1",{templateUrl:"T1",controller:"T1_Ctrl"});$routeProvider.when("/T2",{templateUrl:"T2",controller:"T2_Ctrl"});$routeProvider.when("/save",{templateUrl:"save",controller:"save_Ctrl"});$routeProvider.when("/Title",{templateUrl:"Title",controller:"Title_Ctrl"});$routeProvider.when("/TestNew31524",{templateUrl:"TestNew31524",controller:"TestNew31524_Ctrl"});$routeProvider.when("/arizinapopup",{templateUrl:"arizinapopup",controller:"arizinapopup_Ctrl"});$routeProvider.when("/Ai-ADHD1",{templateUrl:"Ai-ADHD1",controller:"Ai-ADHD1_Ctrl"});$routeProvider.when("/ADHD-Procrastination",{templateUrl:"ADHD-Procrastination",controller:"ADHD-Procrastination_Ctrl"});$routeProvider.otherwise({redirectTo:"/StartPage"});}]);NeoApp.filter("checkmark",function(){return function(input){return input?"\u2713":"\u2718";};});NeoApp.filter("element",function(){return function(input,idx1,idx2){idx1=idx1||0;if(input&&input.constructor===Array){if(idx2){return input[idx1,idx2];}else{return input[idx1];};};return"";};});NeoApp.filter("string",function(){return function(input){if(input&&input.constructor===Array)return input.toString();if(input)return input;return"";};});NeoApp.filter("default",function(){return function(input,defValue){if(!input)return defValue;return input;};});NeoApp.filter("trustUrl",function($sce){return function(url){return $sce.trustAsResourceUrl(url);};});NeoApp.filter('bool',function(){return function(input,valueTrue,valueFalse){return input!==true?valueFalse:valueTrue;};});NeoApp.filter('splitLt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(0,p):str;};});NeoApp.filter('splitRt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(p+1):str;};});NeoApp.controller("NeoApp_CoreCtrl",function($scope,$rootScope,$location,$route,$modal,$window,$timeout,$interval,$http,$filter,$compile,$animate){$App=$rootScope;$App.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPg=newUrl.substr(newUrl.lastIndexOf("/")+1);var oldPg=oldUrl.substr(oldUrl.lastIndexOf("/")+1);if(newPg=="!"){event.preventDefault();};if(newPg=="StartPage"){$timeout($scope.StartPage_pageenter);};if(newPg=="TreeHome"){$timeout($scope.TreeHome_pageenter);};if(newPg=="DBTest"){$timeout($scope.DBTest_pageenter);};if(newPg=="Work"){$timeout($scope.Work_pageenter);};if(newPg=="Timelord"){$timeout($scope.Timelord_pageenter);};});
$scope.SetError=function(msg){throw msg;};$scope.Refresh=function(){$timeout(angular.noop);};$scope.AddFont=function(fontName,fontPath){neotempstyle=document.createElement("style");var position=fontPath.lastIndexOf("/");if(position!=-1){position++;}else{position=0;}var extPosition=fontPath.lastIndexOf(".");extPosition++;var extension=fontPath.substr(extPosition);if(extension=="ttf"){extension="truetype";}if(window.location.href.indexOf("file://")!=-1){neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("'+fontPath+'") format("'+extension+'");}';}else{fontPath=fontPath.substr(position);neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("./fonts/'+fontPath+'") format("'+extension+'");}';}document.head.append(neotempstyle);};$scope.GetOrientation=function(){if($window.orientation){if(Math.abs(window.orientation)===90){return"Landscape";}else{return"Portrait";}}else{if($window.innerWidth>=$window.innerHeight){return"Landscape";}else{return"Portrait";}}};$scope.GotoPageNum=function(pgNum){if(pgNum>0&&pgNum<=$App.NAB.PageList.length){if($App.NAB.PageEnterEffect[pgNum-1]){$App.NAB._pageEffect=" animate enter-"+$App.NAB.PageEnterEffect[pgNum-1]+" exit-"+($App.NAB.PageExitEffect[pgNum-1]||"fadeOut");}else{$App.NAB._pageEffect="";}$timeout(function(){$location.path('/'+$App.NAB.PageList[pgNum-1]);});}else{$scope.SetError('Invalid page.');}};$scope.GotoPage=function(pgId){$scope.GotoPageNum($App.NAB.PageList.indexOf(pgId)+1);};$scope.GotoFirstPage=function(){$scope.GotoPageNum(1);};$scope.GotoLastPage=function(){$scope.GotoPageNum($App.NAB.PageList.length);};$scope.GotoNextPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum<$App.NAB.PageList.length){$scope.GotoPageNum(pgNum+1);return true;}return false;};$scope.GotoPrevPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum>1){$scope.GotoPageNum(pgNum-1);return true;}return false;};function makeSVG(tag,attrs){var el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(var k in attrs)el.setAttribute(k,attrs[k]);return el;};function addSvgNode(objId,svgNode){if(document.getElementById(objId).tagName=="svg"){document.getElementById(objId).appendChild(svgNode);}else{document.getElementById(objId).getElementsByTagName('svg')[0].appendChild(svgNode);}};$scope.DrawCircle=function DrawCircle(objId,svgName,cx,cy,circleRadio,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('circle',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'r':circleRadio,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawEllipse=function DrawEllipse(objId,svgName,cx,cy,rx,ry,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('ellipse',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'rx':rx,'ry':ry,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawRect=function DrawRect(objId,svgName,posx,posy,width,height,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('rect',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'width':width,'height':height,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolygon=function DrawPolygon(objId,svgName,points,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('polygon',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPath=function DrawPath(objId,svgName,path,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('path',{'id':svgName,'VisualNEOWebName':svgName,'d':path,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolyLine=function DrawPolyLine(objId,svgName,points,strokeColor,strokeWidth){$App[svgName]=makeSVG('polyline',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':'none'});addSvgNode(objId,$App[svgName]);};$scope.DrawLine=function DrawLine(objId,svgName,x1,y1,x2,y2,strokeColor,strokeWidth){$App[svgName]=makeSVG('line',{'id':svgName,'VisualNEOWebName':svgName,'x1':x1,'y1':y1,'x2':x2,'y2':y2,'stroke':strokeColor,'stroke-width':strokeWidth});addSvgNode(objId,$App[svgName]);};$scope.DrawImage=function DrawImage(objId,svgName,fileName,x,y,width,height){$App[svgName]=makeSVG('image',{'id':svgName,'VisualNEOWebName':svgName,'x':x,'y':y,'width':width,'height':height,'xlink:href':''});$App[svgName].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+fileName+"");addSvgNode(objId,$App[svgName]);};$scope.DrawText=function DrawText(objId,svgName,theText,posx,posy,fillColor,fontSize,fontFamily,angle){$App[svgName]=makeSVG('text',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'stroke-width':0,'fill':fillColor,'font-size':fontSize,'font-family':fontFamily,'transform':'rotate('+angle+' '+posx+' '+posy+')'});$App[svgName].textContent=theText;addSvgNode(objId,$App[svgName]);};$scope.DrawClear=function DrawClear(objId){var n=0;$("#"+objId).children().each(function(){if(n!=0){$(this).remove();}n++;});};$scope.OnMouseEvent=function(objId,eventName,subroutine){if(eventName=="contextmenu"){if($App.NAB[objId]){$App.NAB[objId].on(eventName,function(e){e.preventDefault();subroutine;return;});}$("#"+objId).on(eventName,function(e){e.preventDefault();subroutine;return;});}if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnMouseEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.OnTouchEvent=function(objId,eventName,subroutine){if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnTouchEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.ShowObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].show(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate enter-'+effect;}$timeout(function(){var name=objId+'_hidden';if($App.NAB[name])delete $App.NAB[name];});};$scope.HideObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].hide(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate exit-'+effect;}$timeout(function(){$App.NAB[objId+'_hidden']=true;});};$scope.DisableObject=function(objId,value){var name=objId+'_disabled';if(value){$App.NAB[name]=value;}else{if($App.NAB[name])delete $App.NAB[name];}};$scope.ClipObjectPolygon=function(objId,polygonId){var points=$("#"+polygonId).html();points=points.replace('<polygon vector-effect="non-scaling-stroke" points="',"");points=points.replace('"></polygon>','');coords=points.split(",");var puntos="";for(i=0;i<coords.length;i=i+2){if(i!=coords.length-2){puntos=puntos+coords[i]+"px "+coords[i+1]+"px,";}else{puntos=puntos+coords[i]+"px "+coords[i+1]+"px";}}$("#"+objId).css("clip-path","polygon("+puntos+")");};$scope.ClipObjectPath=function(objId,shape){if(shape=="circle"){$("#"+objId).css("clip-path","circle(50% at 50% 50%)");}else if(shape=="triangle"){$("#"+objId).css("clip-path","polygon(50% 0%, 0% 100%, 100% 100%)");}else if(shape=="rhombus"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)");}else if(shape=="pentagon"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)");}else{$("#"+objId).css("clip-path",shape);}};$scope.SetObjectStyle=function(objId,selector,value){if($App.NAB[objId]){$App.NAB[objId].css(selector,value);return;}if($App[objId]){$("#"+objId).css(selector,value);return;}var name=objId+'_style';if(!$App.NAB[name])$App.NAB[name]={};if(value&&value.length>0){$App.NAB[name][selector]=value;}else{if($App.NAB[name][selector])delete $App.NAB[name][selector];if(jQuery.isEmptyObject($App.NAB[name]))delete $App.NAB[name];}};$scope.ClearObjectStyles=function(objId){var name=objId+'_style';if($App.NAB[name])delete $App.NAB[name];};$scope.GetObjectInfo=function(objId,info){if($App.NAB[objId]){return $App.NAB[objId].css(info);}return $("#"+objId).css(info);};$scope.GetObjectXY=function(objId,xvar,yvar){var rect=document.getElementById($App.NAB.PageID).getBoundingClientRect();$App.PageLeft=rect.left;$App.PageTop=rect.top;var objeto=document.getElementById(objId).getBoundingClientRect();$App[xvar]=objeto.x-$App.PageLeft;$App[yvar]=objeto.y-$App.PageTop;};$scope.SetObjectHTML=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].html(code);return;}var e=document.getElementById(objId);e.innerHTML=code;$compile(e)($scope);};$scope.GetObjectHTML=function(objId){if($App.NAB[objId]){return $App.NAB[objId].html();;}return document.getElementById(objId).innerHTML;};$scope.SetObjectAttribute=function(objId,AttrName,AttrValue){var element=$("#"+objId);if(AttrName==="src"){AttrName="ng-src";}var pendingChanges=$App.NAB['pendingChanges']||{};pendingChanges[objId]=pendingChanges[objId]||[];pendingChanges[objId].push({AttrName,AttrValue});$App.NAB['pendingChanges']=pendingChanges;$scope.applyPendingChanges();};$scope.applyPendingChanges=function(){var pendingChanges=$App.NAB['pendingChanges'];if(!pendingChanges||jQuery.isEmptyObject(pendingChanges)){return;}Object.keys(pendingChanges).forEach(function(objId){var element=$("#"+objId);if(element.length>0){pendingChanges[objId].forEach(function(change){element.attr(change.AttrName,change.AttrValue);$compile(element)($scope);});}});};$scope.GetObjectAttribute=function(objId,AttrName){if($App.NAB[objId]){return $App.NAB[objId].attr(AttrName);}return $("#"+objId).attr(AttrName);};$scope.SetObjectText=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].text(code);return;}var e=document.getElementById(objId);e.innerText=code;$compile(e)($scope);};$scope.GetObjectText=function(objId){if($App.NAB[objId]){return $App.NAB[objId].text();}return document.getElementById(objId).innerText;};$scope.DuplicateObject=function(objId,objName,containerId){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");var e=document.getElementById(containerId);$compile(e)($scope);};$scope.DuplicateObjectEx=function(objId,objName,containerId,objStyle){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id",objName);$App.NAB[objName].atyle=document.getElementById(objId).style;}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");$App.NAB[objName].attr("style",objStyle);var e=document.getElementById(containerId);$compile(e)($scope);};$scope.AnimateObjectCSS=function(objId,cssData,duration,delay,easing,callbackfn){if($App.NAB[objId]){$App.NAB[objId].delay(delay).animate(cssData,duration,easing,callbackfn);}else{$("#"+objId).delay(delay).animate(cssData,duration,easing,callbackfn);}};$scope.SetObjectCSS=function(objId,cssData){if($App.NAB[objId]){$App.NAB[objId].css(cssData);}else{$("#"+objId).css(cssData);}};$scope.CheckCollision=function(objId1,objId2){var x1=$("#"+objId1).offset().left;var y1=$("#"+objId1).offset().top;var h1=$("#"+objId1).outerHeight(true);var w1=$("#"+objId1).outerWidth(true);var b1=y1+h1;var r1=x1+w1;var x2=$("#"+objId2).offset().left;var y2=$("#"+objId2).offset().top;var h2=$("#"+objId2).outerHeight(true);var w2=$("#"+objId2).outerWidth(true);var b2=y2+h2;var r2=x2+w2;if(b1<y2||y1>b2||r1<x2||x1>r2){return false;}else{return true;}};$scope.CheckFullCollision=function(objId1,objId2){var r1=document.getElementById(rectone);var r2=document.getElementById(recttwo);var r1bb=r1.getBoundingClientRect();var r2bb=r2.getBoundingClientRect();var r1x=r1bb.x;var r1w=r1bb.width;var r1y=r1bb.y;var r1h=r1bb.height;var r2x=r2bb.x;var r2w=r2bb.width;var r2y=r2bb.y;var r2h=r2bb.height;if(r1x+1>=r2x&&r1y+1>=r2y&&r1x+r1w-1<=r2x+r2w&&r1y+r1h-1<=r2y+r2h){return true;}else{return false;}};function fixUnit(s){var t=s.toString();var parts=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);return(parts[2])?t:parts[1]+'px';}$scope.SetObjectBounds=function(objId,l,t,w,h){if($App.NAB[objId]){var e=$App.NAB[objId];}else{var e=document.getElementById(objId);}if(w){w=fixUnit(w);e.style.width=w;$scope.SetObjectStyle(objId,'width',w);};if(h){h=fixUnit(h);e.style.height=h;$scope.SetObjectStyle(objId,'height',h);};if(l){l=fixUnit(l);e.style.left=l;$scope.SetObjectStyle(objId,'left',l);};if(t){t=fixUnit(t);e.style.top=t;$scope.SetObjectStyle(objId,'top',t);};};$scope.MoveObject=function(objId,left,top){if($App.NAB[objId]){$App.NAB[objId].css("left",left);$App.NAB[objId].css("top",top);}else{$scope.SetObjectBounds(objId,left,top);}};$scope.ObjectToFront=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().appendTo(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().appendTo(theParent);}};$scope.ObjectToBack=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().prependTo(theParent);}else if($("#"+objId).parent().prop("tagName")=="svg"){theParent=$("#"+objId).parent().children().first();$("#"+objId).detach().insertAfter(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().prependTo(theParent);}};$scope.SizeObject=function(objId,width,height){if($App.NAB[objId]){w=fixUnit(width);h=fixUnit(height);$App.NAB[objId].css("width",w);$App.NAB[objId].css("height",h);}else{$scope.SetObjectBounds(objId,null,null,width,height);}};$scope.RotateObject=function(objId,deg){if($App.NAB[objId]){$App.NAB[objId].css("webkitTransform","rotate("+deg+"deg)");$App.NAB[objId].css("mozTransform","rotate("+deg+"deg)");$App.NAB[objId].css("msTransform","rotate("+deg+"deg)");$App.NAB[objId].css("oTransform","rotate("+deg+"deg)");$App.NAB[objId].css("transform","rotate("+deg+"deg)");}else{var e=document.getElementById(objId);e.style.webkitTransform='rotate('+deg+'deg)';e.style.mozTransform='rotate('+deg+'deg)';e.style.msTransform='rotate('+deg+'deg)';e.style.oTransform='rotate('+deg+'deg)';e.style.transform='rotate('+deg+'deg)';};};$scope.ListBoxSort=function(objId){if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};$("#"+objId+" option").filter(function(){return!this.value||$.trim(this.value).length==0||$.trim(this.text).length==0;}).remove();var options=$("#"+objId+" option");var arr=options.map(function(_,o){return{t:$(o).text(),v:o.value};}).get();arr.sort(function(o1,o2){return o1.t>o2.t?1:o1.t<o2.t?-1:0;});options.each(function(i,o){o.value=arr[i].v;$(o).text(arr[i].t);});if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};};$scope.ListBoxMoveItem=function(listID,direction){var listbox=document.getElementById(listID);var selIndex=listbox.selectedIndex;if(-1==selIndex){return;}var increment=-1;if(direction=='up'){if(selIndex==1){return;}else{increment=-1;}}else{increment=1;}if((selIndex+increment)<0||(selIndex+increment)>(listbox.options.length-1)){return;}var selValue=listbox.options[selIndex].value;var selText=listbox.options[selIndex].text;listbox.options[selIndex].value=listbox.options[selIndex+increment].value
listbox.options[selIndex].text=listbox.options[selIndex+increment].text
listbox.options[selIndex+increment].value=selValue;listbox.options[selIndex+increment].text=selText;listbox.selectedIndex=selIndex+increment;};$scope.OpenDialog=function(dlgId){var modalInstance=$modal.open({templateUrl:dlgId,controller:dlgId+'_Ctrl',scope:$scope,size:'sm',backdrop:'static',animation:true});};$scope.AlertBox=function(dlgTitle,dlgMsg,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.AlertBoxEx=function(dlgTitle,dlgMsg,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.MessageBoxEx=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.MessageBox=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-primary" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.SerializeForm=function(formId){var form=document.getElementById(formId);if(!form||form.nodeName!=="FORM")return;var i,j,s,field,m,q=[];for(i=0;i<form.elements.length;i++){field=form.elements[i];if(field.name==="")continue;switch(field.nodeName){case'INPUT':switch(field.type){case'text':case'hidden':case'password':case'number':q.push(field.name+"="+encodeURIComponent(field.value));break;case'checkbox':if(angular.isElement(field)){m=angular.element(field).controller('ngModel');if(m){q.push(field.name+"="+encodeURIComponent(m.$modelValue));break;}}q.push(field.name+"="+encodeURIComponent(field.checked));break;case'radio':if(field.checked){q.push(field.name+"="+encodeURIComponent(field.value));}break;case'file':break;}break;case'TEXTAREA':q.push(field.name+"="+encodeURIComponent(field.value));break;case'SELECT':switch(field.type){case'select-one':q.push(field.name+"="+encodeURIComponent(field.value));break;case'select-multiple':s='';for(j=field.options.length-1;j>=0;j=j-1){if(field.options[j].selected){s+=','+encodeURIComponent(field.options[j].value);}}if(s.length>0)q.push(field.name+"="+s.substr(1));break;}break;}}return q.join("&");};$scope.SubmitForm=function(form,url,method,submitFn,successFn,failFn){var ok=true;if(submitFn){ok=submitFn();}if(ok&&form&&url&&method){var f=$scope.SerializeForm(form);$http({method:method,url:url,data:f,responseType:"text",headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function(response){if(successFn)successFn(response.data,response.status);},function(response){if(failFn)failFn(response.data,response.status);});}};$scope.FormSubmit=function(formulario,url){var neoApp=angular.element(document.getElementById("ng-view")).scope();var fnsubmit=neoApp[formulario+"_submit"];var fnsuccess=neoApp[formulario+"_success"];var fnfail=neoApp[formulario+"_fail"];neoApp.SubmitForm(formulario,url,'POST',fnsubmit,fnsuccess,fnfail);};$scope.FormReset=function(formulario){$("#"+formulario).trigger("reset");};$scope.SetCompVar=function(varname,varvalue){varname2="";vararray=varname.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname2]=varvalue;};$scope.GetCompVar=function(varname,composedvar){varname2="";vararray=composedvar.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname]=$App[varname2];};$scope.ArraySuffle=function(array,newArray){for(n=0;n<array.length;n++){newArray[n]=array[n];}var currentIndex=newArray.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=newArray[currentIndex];newArray[currentIndex]=newArray[randomIndex];newArray[randomIndex]=temporaryValue;}};$scope.ArrayCopy=function(a,start,len){if(a&&start>-1&&len>0)return a.slice(start,start+len);return[]};$scope.LoadGoogleFont=function(fontName){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fontName+"' rel='stylesheet' type='text/css'>");};$scope.LocalFileToVar=function(inputFileName,resultVar,tipo){$App.NAB.temp=resultVar;var realInputFileName=$("#"+inputFileName).prop("for");var files=$('#'+realInputFileName).prop("files");for(var i=0,f;f=files[i];i++){var reader=new FileReader();reader.onload=(function(theFile,resultVar,callBackFunction){return function(e,resultVar){varName=$App.NAB.temp;$App[varName]=e.target.result;};})(f);if(tipo=="text"){reader.readAsText(f);}else if(tipo=="binary"){reader.readAsBinaryString(f);}else if(tipo=="base64"){reader.readAsDataURL(f);}else{reader.readAsArrayBuffer(f);}};};$scope.SvgToBase64=function(theContainer,theWidth,theHeight,theType,theQuality,resultVar,callbackFn){var tagName=$("#"+theContainer).prop("tagName").toLowerCase();if(tagName=="svg"){var svg=document.getElementById(theContainer);}else{var svg=document.querySelector("#"+theContainer+" svg");}var svgToBase64PngTemp=svg.outerHTML;tempWidth=svg.getAttribute("width");if(tempWidth==null){tempWidth=theWidth;}tempHeight=svg.getAttribute("height");if(tempHeight==null){tempHeight=theHeight;}svg.setAttribute("width",theWidth);svg.setAttribute("height",theHeight);var svgData=new XMLSerializer().serializeToString(svg);var canvas=document.createElement("canvas");canvas.width=theWidth;canvas.height=theHeight;var ctx=canvas.getContext("2d");var img=document.createElement("img");img.setAttribute("src","data:image/svg+xml;base64,"+btoa(svgData));img.onload=function(){ctx.drawImage(img,0,0);svg.setAttribute("width",tempWidth);svg.setAttribute("height",tempHeight);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL("image/jpeg",theQuality);if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}else{$App[resultVar]=canvas.toDataURL("image/png");if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}};};$scope.ImgToBase64=function(theImg,theType,theQuality,resultVar){var img=document.querySelector("#"+theImg);const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;ctx.drawImage(img,0,0);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL('image/jpeg',theQuality);}else{$App[resultVar]=canvas.toDataURL('image/png');}};$scope.Base64ToLocalFile=function(dataurl,filename){var arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);while(n--){u8arr[n]=bstr.charCodeAt(n);}theFile=new File([u8arr],filename,{type:mime});saveAs(theFile,filename);};$scope.ResizeDesktopWindow=function(theWidth,theHeight){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){window.resizeTo(theWidth,theHeight);}};$scope.FitAppToScreen=function(coverScreen,verticalAlign,horizontalAlign){$scope.AppPosition(verticalAlign,horizontalAlign);var ha=horizontalAlign.toUpperCase();var va=verticalAlign.toUpperCase();if(va=="MIDDLE"){va="CENTER"};fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]});fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]},function(transform){$App.NAB.AppScale=transform.scale});};$scope.IsInstalled=function(){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){return true;}else{return false;}};$scope.CenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px");$("body").css("bottom","0px");$("body").css("left","0px");$("body").css("right","0px");$("body").css("margin","auto");$("body").css("margin","auto");};$scope.TopCenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px!important");$("body").css("left","0px");$("body").css("right","0px");$("body").css("bottom","auto");$("body").css("margin","auto");};$scope.ScaleApp=function(thezoom){$App.NAB.AppScale=thezoom;$("#ng-app").css("transform-origin","50% 50%");$("#ng-app").css("transform","scale("+thezoom+","+thezoom+")");};$scope.AppPosition=function(vertical,horizontal){$('body').css("position","absolute");if(vertical=="top"){$('body').css("top","0px");$('body').css("bottom","auto");}else if(vertical=="bottom"){$('body').css("bottom","0px");$('body').css("top","auto");}else{$('body').css("bottom","0px");$('body').css("top","0px");}if(horizontal=="left"){$('body').css("left","0px");$('body').css("right","auto");}else if(horizontal=="right"){$('body').css("left","auto");$('body').css("right","0px");}else{$('body').css("left","0px");$('body').css("right","0px");}$('body').css("margin","auto");};$scope.SetResponsivePages=function(plarge,pmedium,psmall,pxsmall){if(matchMedia){const largedisp=window.matchMedia("(min-width: 1025px)");const mediumdisp=window.matchMedia("(min-width: 768px) and (max-width: 1024px)");const smalldisp=window.matchMedia("(min-width: 481px) and (max-width: 767px)");const verysmalldisp=window.matchMedia("(min-width: 320px) and (max-width: 480px)");funciones=angular.element(document.getElementById("ng-view")).scope();$("body").css("width","100%");$("body").css("height","100%");$("body").css("overflow-x","hidden");$("body").css("overflow-y","auto");largedisp.addListener(WidthChangeLarge);WidthChangeLarge(largedisp);mediumdisp.addListener(WidthChangeMedium);WidthChangeMedium(mediumdisp);smalldisp.addListener(WidthChangeSmall);WidthChangeSmall(smalldisp);verysmalldisp.addListener(WidthChangeVerySmall);WidthChangeVerySmall(verysmalldisp);function WidthChangeLarge(largedisp){if(largedisp.matches){funciones.GotoPage(plarge);}};function WidthChangeMedium(mediumdisp){if(mediumdisp.matches){funciones.GotoPage(pmedium);}};function WidthChangeSmall(smalldisp){if(smalldisp.matches){funciones.GotoPage(psmall);}};function WidthChangeVerySmall(verysmalldisp){if(verysmalldisp.matches){funciones.GotoPage(pxsmall);}};}};$scope.AppBackgroundColor=function(thecolor){$("html").css("background",thecolor);};$scope.AppBackgroundImage=function(imagen){ruta=$("#"+imagen).attr('src');$("html").css('background-image','url('+ruta+' )');$("html").css('background-repeat','no-repeat');$("html").css('background-position','center center');$("html").css('background-attachment','fixed');$("html").css("-webkit-background-size","cover");$("html").css("-moz-background-size","cover");$("html").css("-o-background-size","cover");$("html").css("background-size","cover");};$scope.ObjDisableSelection=function(objectname){$("#"+objectname).css("-webkit-touch-callout","none");$("#"+objectname).css("-webkit-user-select","none");$("#"+objectname).css("-khtml-user-select","none");$("#"+objectname).css("-moz-user-select","none");$("#"+objectname).css("-ms-user-select","none");$("#"+objectname).css("user-select","none");};$scope.DisableSelection=function(){$("*").css("-webkit-touch-callout","none");$("*").css("-webkit-user-select","none");$("*").css("-khtml-user-select","none");$("*").css("-moz-user-select","none");$("*").css("-ms-user-select","none");$("*").css("user-select","none");};$scope.GetUrlParameter=function(param){url=window.location.href;var queryString=url?url.split('?')[1]:window.location.search.slice(1);var obj={};if(queryString){queryString=queryString.split('#')[0];var arr=queryString.split('&');for(var i=0;i<arr.length;i++){var a=arr[i].split('=');var paramName=a[0];var paramValue=typeof(a[1])==='undefined'?true:a[1];if(typeof paramValue==='string')paramValue=paramValue;if(paramName.match(/\[(\d+)?\]$/)){var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/)){var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}else{obj[key].push(paramValue);}}else{if(!obj[paramName]){obj[paramName]=paramValue;}else if(obj[paramName]&&typeof obj[paramName]==='string'){obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}else{obj[paramName].push(paramValue);}}}}return obj[param];};$scope.csvToJSON=function(mycsv,separator,jsonObject){var lines=$App[mycsv].split("\n");var result=[];var headers=lines[0].split(separator);for(var i=1;i<lines.length;i++){var obj={};var currentline=lines[i].split(separator);for(var j=0;j<headers.length;j++){obj[headers[j]]=currentline[j];}result.push(obj);}$App[jsonObject]=result;};$scope.CheckInternetConnection=function(url,timeout,successFn,errorFn){$.ajax({url:url,timeout:timeout,cache:false,success:function(){if(successFn!=undefined){successFn();}},error:function(){if(errorFn!=undefined){errorFn();}},});};$scope.SetRelativePosition=function(objectname,vertical,horizontal){$("#"+objectname).css("position","absolute");if(vertical=="top"){$("#"+objectname).css("top","0px");$("#"+objectname).css("bottom","auto");}else if(vertical=="bottom"){$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","auto");}else{$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","0px");}if(horizontal=="left"){$("#"+objectname).css("left","0px");$("#"+objectname).css("right","auto");}else if(horizontal=="right"){$("#"+objectname).css("left","auto");$("#"+objectname).css("right","0px");}else{$("#"+objectname).css("left","0px");$("#"+objectname).css("right","0px");}$("#"+objectname).css("margin","auto");};$scope.WatchVar=function(varName,fn){if($App.NAB.$Watches[varName]){if($App.NAB.$Watches[varName].deRegFn)$App.NAB.$Watches[varName].deRegFn();delete $App.NAB.$Watches[varName];};if(fn){$App.NAB.$Watches[varName]={id:varName,deRegFn:undefined};$App.NAB.$Watches[varName].deRegFn=$scope.$watch(varName,function(newVal,oldVal){if(oldVal!==newVal)fn(newVal,oldVal);});};};$scope.TimerStart=function(objId,ms){if($App.NAB.$Timers[objId]){if(!angular.isDefined($App.NAB.$Timers[objId].promise)){$App.NAB.$Timers[objId].stime=Date.now();$App.NAB.$Timers[objId].promise=$interval($App.NAB.$Timers[objId].fn,ms||1000);}}else throw'A timer named "'+objId+'" does not exist.';};$scope.TimerStop=function(objId){if($App.NAB.$Timers[objId]){if(angular.isDefined($App.NAB.$Timers[objId].promise)){$interval.cancel($App.NAB.$Timers[objId].promise);$App.NAB.$Timers[objId].promise=undefined;}}else throw'A timer named "'+objId+'" does not exist.';};$scope._DeleteSound=function(sname){if($App.NAB.$Audio[sname]){$App.NAB.$Audio[sname].player.pause();delete $App.NAB.$Audio[sname].player;delete $App.NAB.$Audio[sname];return true;}return false;};$scope.PlaySound=function(fname,loop){var sname=ExtractFileName(fname).toLowerCase();if($App.NAB.$Audio[sname])throw'A sound named "'+sname+'" is already playing.';var devicePlatform=(typeof device!=='undefined'&&device.platform)?device.platform:null;if(typeof Audio!=="undefined"&&devicePlatform===null){obj={id:sname,kind:"audio",player:new Audio(fname)};obj.player.addEventListener("ended",function(){$scope._DeleteSound(sname);});}else if(devicePlatform){if(devicePlatform==='Android'){if(!IsUrl(fname))fname='/android_asset/www/'+fname;}obj={id:sname,kind:"media",player:new Media(fname,function onSuccess(){$scope._DeleteSound(sname);},function onError(e){console.log("Error playing sound: "+JSON.stringify(e));$scope._DeleteSound(sname);})};}else throw'Sound API unavailable.';$App.NAB.$Audio[sname]=obj;if(obj.kind==="audio"){obj.player.loop=loop;obj.player.play();}else obj.player.play({numberOfLoops:loop});};$scope.StopSound=function(fname){if(!fname||fname.length===0){for(var id in $App.NAB.$Audio)$scope._DeleteSound(id);}else{var sname=ExtractFileName(fname).toLowerCase();if(!$scope._DeleteSound(sname))throw'There is no playing sound named "'+sname+'"';}};$scope.CreateVideoPlayer=function(objId,fname,controls,autoplay,looping,muted){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}if(muted){addmuted="muted";}else{addmuted="";}htmlstring='<video id="'+objId+'Video" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+' '+addmuted+'><source src="'+fname+'" type="video/mp4"></video>';$("#"+objId).html(htmlstring);};$scope.OnVideoEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Video"]){$App.NAB[objId+"Video"].on(eventName,subroutine);return;}$("#"+objId+"Video").on(eventName,subroutine);};$scope.CreateAudioPlayer=function(objId,fname,controls,autoplay,looping){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}htmlstring='<audio id="'+objId+'Audio" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+'><source src="'+fname+'" type="audio/mp3"></audio>';$("#"+objId).html(htmlstring);};$scope.OnAudioEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Audio"]){$App.NAB[objId+"Audio"].on(eventName,subroutine);return;}$("#"+objId+"Audio").on(eventName,subroutine);};$scope.SoundBeep=function(){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!d)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(d=T[o],n=d+r,!(n in i))&&(d=d.replace(/^(\w)/,t),n=d+r,!(n in i));o++);return d+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.y=t.top),t}function c(){var t=n(),e=t-y;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();y=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=0===o.width?R:o.width,l=0===o.height?P:o.height,c=0===a.width?I:a.width,g=0===a.height?P:a.height;R=s,B=l,I=c,P=g;var p=c/s,d=g/l,y=s/l,v=c/g,x=n.cover?d:p,m=n.cover?p:d,w=y>=v?x:m,T=s*w,O=l*w,F=n.hAlign==E?.5*(T-c):n.hAlign==L?T-c:0,b=n.vAlign==E?.5*(O-g):n.vAlign==A?O-g:0;return r=r||{},r.tx=a.x-F-o.x,r.ty=a.y-b-o.y,r.x=a.x-F-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?(z.addEventListener("resize",c),z.addEventListener("orientationchange",c)):(z.attachEvent("onresize",c),z.attachEvent("onorientationchange",c))),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var d,y,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),E="center",A="bottom",L="right",O="left",F="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:E,vAlign:E,watch:!1,cover:!1,apply:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1});var R,B,I,P;return r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:E,BOTTOM:A,RIGHT:L,LEFT:O,TOP:F})}();"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=fit),exports.fit=fit);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});$scope.EnterFullScreen=function(){$(document).fullScreen(true);};$scope.ExitFullScreen=function(){$(document).fullScreen(false);};$scope.ObjectEnterFullScreen=function(ObjId){$("#"+ObjId).fullScreen(true);};$scope.ObjectExitFullScreen=function(ObjId){$("#"+ObjId).fullScreen(false);};var neoscript;$scope.AppOnKeyDown=function(callbackFn){$("body").keydown(function(evt){callbackFn(evt.which);});};(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});$scope.VarToFile=function(datavar,filename){var blob=new Blob([datavar],{type:"text/plain;charset=utf-8"});saveAs(blob,filename);};!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],i=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],j={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},k=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],l={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},m={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},n={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},o={},p={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},q={1:!0},r=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(var b=0;b<a.length;b++){var c=a[b].token.length,d=-1;if(c<r.length)for(var e=0;e<r[c].length;e++)if(a[b].token===r[c][e]){d=g.indexOf(r[c][e]);break}d===-1?(g.push(a[b].token),k.push(a[b].type),r.length<=a[b].token.length&&(r[a[b].token.length]=[]),r[a[b].token.length].push(a[b].token),i.push(a[b].value),h.push(a[b].show)):(g[d]=a[b].token,k[d]=a[b].type,i[d]=a[b].value,h[d]=a[b].show)}},f.lex=function(a,b){"use strict";var c,s,t,u,v={value:f.math.changeSign,type:0,pre:21,show:"-"},w={value:")",show:")",type:5,pre:0},x={value:"(",type:4,pre:0,show:"("},y=[x],z=[],A=a,B=0,C=l,D=0,E=o,F="";"undefined"!=typeof b&&f.addToken(b);var G={};for(s=0;s<A.length;s++)if(" "!==A[s]){for(c="",t=A.length-s>r.length-2?r.length-1:A.length-s;t>0;t--)for(u=0;u<r[t].length;u++)e(A,r[t][u],s,t)&&(c=r[t][u],u=r[t].length,t=0);if(s+=c.length-1,""===c)throw new f.Exception("Can't understand after "+A.slice(s));var H,I=g.indexOf(c),J=c,K=k[I],L=i[I],M=j[K],N=h[I],O=y[y.length-1];for(H=z.length;H--&&0===z[H];)if([0,2,3,5,9,11,12,13].indexOf(K)!==-1){if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);y.push(w),C=m,E=p,d(z,-1).pop()}if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);if(E[K]===!0&&(K=2,L=f.math.mul,N="&times;",M=3,s-=c.length),G={value:L,type:K,pre:M,show:N},0===K)C=l,E=o,d(z,2).push(2),y.push(G),y.push(x);else if(1===K)1===O.type?(O.value+=L,d(z,1)):y.push(G),C=m,E=n;else if(2===K)C=l,E=o,d(z,2),y.push(G);else if(3===K)y.push(G),C=m,E=p;else if(4===K)B+=z.length,z=[],D++,C=l,E=o,y.push(G);else if(5===K){if(!D)throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");for(;B--;)y.push(w);B=0,D--,C=m,E=p,y.push(G)}else if(6===K){if(O.hasDec)throw new f.Exception("Two decimals are not allowed in one number");1!==O.type&&(O={value:0,type:1,pre:0},y.push(O),d(z,-1)),C=q,d(z,1),E=o,O.value+=L,O.hasDec=!0}else 7===K&&(C=m,E=p,d(z,1),y.push(G));8===K?(C=l,E=o,d(z,4).push(4),y.push(G),y.push(x)):9===K?(9===O.type?O.value===f.math.add?(O.value=L,O.show=N,d(z,1)):O.value===f.math.sub&&"-"===N&&(O.value=f.math.add,O.show="+",d(z,1)):5!==O.type&&7!==O.type&&1!==O.type&&3!==O.type&&13!==O.type?"-"===J&&(C=l,E=o,d(z,2).push(2),y.push(v),y.push(x)):(y.push(G),d(z,2)),C=l,E=o):10===K?(C=l,E=o,d(z,2),y.push(G)):11===K?(C=l,E=o,y.push(G)):12===K?(C=l,E=o,d(z,6).push(6),y.push(G),y.push(x)):13===K&&(C=m,E=p,y.push(G)),d(z,-1),F=c}for(H=z.length;H--&&0===z[H];)y.push(w),d(z,-1).pop();if(C[5]!==!0)throw new f.Exception("complete the expression");for(;D--;)y.push(w);return y.push(w),new f(y)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NaN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.Exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});$scope.Calculate=function(formula,decimals){var numero=mexp.eval(formula);if(decimals!=-1){potencia=Math.pow(10,decimals);numero=Math.round(numero*potencia)/potencia;}return numero;};$(document).mousemove(function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.pageX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.pageY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;var sx=((evt.pageX+$(window).scrollLeft())/$App.NAB.AppScale);var sy=((evt.pageY+$(window).scrollTop())/$App.NAB.AppScale);$App.NAB.MouseX=Math.round(x);$App.NAB.MouseY=Math.round(y);$App.NAB.MouseScreenX=Math.round(sx);$App.NAB.MouseScreenY=Math.round(sy);});$(document).on("touchmove",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});$(document).on("touchstart",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});
$App.NAB={PageList:["StartPage","TreeHome","BR1","DBTest","Work","Work2","Work3","WorkPhilos1","WorkPhilos1a","workphilos2","workphilos3","workphilos4","workphilos5","workphilos6","workphilos7","workphilos8","workPhCommitment1","Timelord","TIMELORD01","Timelord1a","TIMELORD02","Timlord2a","TIMELORD03","Timelord3a","TIMELORD04","Timelord4a","TIMELORD05","Timelord5a","TIMELORD06","Timelord6a","TIMELORD07","Timelord7a","TIMELORD08","Timelord8a","TNeoAppPage15","TNeoAppPage14","TimlordDevelopNotes01","TimelordDevelopnotes02","Timelorddevelopnotes03","allphQA","Decisions1","Decisions2","AppDev","Appdev2","appdev3","appdev4","appdev5","appdev6","appdev7","appdev8","appdev9","appdev10","PlanRPlus","TNeoAppPage12","TNeoAppPage11","Healthnew","Healthnew2","FF","Book1","Book2","Book3","Book4","Book5","Book6","Book7","Book8","Book9","Book10","Book11","Book12","Meditation","Kingsway","Starkie","TNeoAppPage13","Order","Reset","Prayer","T1","T2","save","Title","TestNew31524","arizinapopup","Ai-ADHD1","ADHD-Procrastination"],PageEnterEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fadeIn","","","","","","","","","","","","","",""],PageCount:85,PageExitEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","fadeOut","","","","","","","","","","","","","",""],PageNumber:1,AppScale:1,PageID:"",Hour:"",Hour24:"",Minute:"",Second:"",Time:"",Time24:"",DateShort:"",DateLong:"",DateFull:"",Month:"",MonthNum:"",WeekNum:"",Day:"",DayNum:"",Year:"",ClientWidth:$window.innerWidth,ClientHeight:$window.innerHeight,WindowWidth:$window.outerWidth,WindowHeight:$window.outerHeight,Orientation:$scope.GetOrientation(),OperatingSystem:"",$Watches:{},$Timers:{},$Audio:{}};$scope.__doUpdate=function(){var Now=new Date();$App.NAB.Hour=$filter("date")(Now,"h");$App.NAB.Hour24=$filter("date")(Now,"H");$App.NAB.Minute=$filter("date")(Now,"mm");$App.NAB.Second=$filter("date")(Now,"ss");$App.NAB.Time=$filter("date")(Now,"mediumTime");$App.NAB.Time24=$filter("date")(Now,"H:mm:ss");$App.NAB.DateShort=$filter("date")(Now,"shortDate");$App.NAB.DateLong=$filter("date")(Now,"longDate");$App.NAB.DateFull=$filter("date")(Now,"fullDate");$App.NAB.Month=$filter("date")(Now,"MMMM");$App.NAB.MonthNum=$filter("date")(Now,"M");$App.NAB.WeekNum=$filter("date")(Now,"w");$App.NAB.Day=$filter("date")(Now,"EEEE");$App.NAB.DayNum=$filter("date")(Now,"d");$App.NAB.Year=$filter("date")(Now,"yyyy");};$scope.__doOrientationChange=function(){$App.NAB.Orientation=$scope.GetOrientation();};$scope.__doResize=function(){$App.NAB.ClientWidth=$window.innerWidth;$App.NAB.ClientHeight=$window.innerHeight;$App.NAB.WindowWidth=$window.outerWidth;$App.NAB.WindowHeight=$window.outerHeight;};$scope.__init=function(){angular.element($window).bind("orientationchange.app",function(){$timeout($scope.__doOrientationChange);});angular.element($window).bind("resize.app",function(){$timeout($scope.__doResize);});$interval($scope.__doUpdate,1000);$App.NAB.OperatingSystem=GetPlatform();$scope.__doUpdate();};
$scope.StartPage_pageenter = function() {$App.Title21 = localStorage.getItem("Title21");
$App.Title22 = localStorage.getItem("Title22");
$App.Timenotes01 = localStorage.getItem("Timenotes01");
$App.Timenotes02 = localStorage.getItem("Timenotes02");
$App.Timenotes03 = localStorage.getItem("Timenotes03");
$App.Timenotes04 = localStorage.getItem("Timenotes04");
$App.Timenotes05 = localStorage.getItem("Timenotes05");
$App.Timenotes06 = localStorage.getItem("Timenotes06");
$App.Timenotes07 = localStorage.getItem("Timenotes07");
$App.Timenotes08 = localStorage.getItem("Timenotes08");
$App.Timenotes09 = localStorage.getItem("Timenotes09");
$App.Timenotes10 = localStorage.getItem("Timenotes10");
$App.Timenotes11 = localStorage.getItem("Timenotes11");
$App.Timenotes12 = localStorage.getItem("Timenotes12");
$App.Timenotes13 = localStorage.getItem("Timenotes13");
$App.Timenotes14 = localStorage.getItem("Timenotes14");
$App.Timenotes15 = localStorage.getItem("Timenotes15");
$App.Timenotes16 = localStorage.getItem("Timenotes16");
$App.Timenotes17 = localStorage.getItem("Timenotes17");
$App.TLPhilos = localStorage.getItem("TLPhilos");
$App.Timenotes1 = localStorage.getItem("Timenotes1");
$App.Timenotes2 = localStorage.getItem("Timenotes2");
$App.Time01 = localStorage.getItem("Time01");
$App.TimeA01 = localStorage.getItem("TimeA01");
$App.Time02 = localStorage.getItem("Time02");
$App.TimeA02 = localStorage.getItem("TimeA02");
$App.Time03 = localStorage.getItem("Time03");
$App.TimeA03 = localStorage.getItem("TimeA03");
$App.Time04 = localStorage.getItem("Time04");
$App.TimeA04 = localStorage.getItem("TimeA04");
$App.Time05 = localStorage.getItem("Time05");
$App.TimeA05 = localStorage.getItem("TimeA05");
$App.Time06 = localStorage.getItem("Time06");
$App.TimeA06 = localStorage.getItem("TimeA06");
$App.Time07 = localStorage.getItem("Time07");
$App.TimeA07 = localStorage.getItem("TimeA07");
$App.Time08 = localStorage.getItem("Time08");
$App.TimeA08 = localStorage.getItem("TimeA08");
$App.Time09 = localStorage.getItem("Time09");
$App.TimeA09 = localStorage.getItem("TimeA09");
$App.Time10 = localStorage.getItem("Time10");
$App.TimeA10 = localStorage.getItem("TimeA10");
$App.Time11 = localStorage.getItem("Time11");
$App.TimeA11 = localStorage.getItem("TimeA11");
$App.Time12 = localStorage.getItem("Time12");
$App.TimeA12 = localStorage.getItem("TimeA12");
$App.Time13 = localStorage.getItem("Time13");
$App.TimeA13 = localStorage.getItem("TimeA13");
$App.Time14 = localStorage.getItem("Time14");
$App.TimeA14 = localStorage.getItem("TimeA14");
$App.Time15 = localStorage.getItem("Time15");
$App.TimeA15 = localStorage.getItem("TimeA15");
$App.Time16 = localStorage.getItem("Time16");
$App.TimeA16 = localStorage.getItem("TimeA16");
$App.WPQ01 = localStorage.getItem("WPQ01");
$App.WPQA01 = localStorage.getItem("WPQA01");
$App.WPQ02 = localStorage.getItem("WPQ02");
$App.WPQA02 = localStorage.getItem("WPQA02");
$App.WPQ03 = localStorage.getItem("WPQ03");
$App.WPQA03 = localStorage.getItem("WPQA03");
$App.WPQ04 = localStorage.getItem("WPQ04");
$App.WPQA04 = localStorage.getItem("WPQA04");
$App.WPQ05 = localStorage.getItem("WPQ05");
$App.WPQA05 = localStorage.getItem("WPQA06");
$App.WPQ06 = localStorage.getItem("WPQ06");
$App.WPQA06 = localStorage.getItem("WPQA06");
$App.WPQ07 = localStorage.getItem("WPQ07");
$App.WPQA07 = localStorage.getItem("WPQA07");
$App.WPQ08 = localStorage.getItem("WPQ08");
$App.WPQA08 = localStorage.getItem("WPQA08");
$App.WPQ09 = localStorage.getItem("WPQ09");
$App.WPQA09 = localStorage.getItem("WPQA09");
$App.WPQ10 = localStorage.getItem("WPQ10");
$App.WPQA10 = localStorage.getItem("WPQA10");
$App.WPQ11 = localStorage.getItem("WPQ11");
$App.WPQA11 = localStorage.getItem("WPQA11");
$App.WPQ12 = localStorage.getItem("WPQ12");
$App.WPQA12 = localStorage.getItem("WPQA12");
$App.WPQ13 = localStorage.getItem("WPQ13");
$App.WPQA13 = localStorage.getItem("WPQA13");
$App.WPQ14 = localStorage.getItem("WPQ14");
$App.WPQA14 = localStorage.getItem("WPQA14");
$App.WPQ15 = localStorage.getItem("WPQ15");
$App.WPQA15 = localStorage.getItem("WPQA15");
$App.WPQ16 = localStorage.getItem("WPQ16");
$App.WPQA16 = localStorage.getItem("WPQA16");
$App.wpc01 = localStorage.getItem("wpc01");};
$scope.TreeHome_pageenter = function() {$App.Title21 = localStorage.getItem("Title21");
$App.Title22 = localStorage.getItem("Title22");};
$scope.DBTest_pageenter = function() {$App.googleSheet = "https://docs.google.com/spreadsheets/d/1LfHEbAWtax0i8tx9EZrSqjvVAvYbzHoSOMG2lClHD9w/edit?usp=sharing#gid=X";
neoGSheetsLoadCell($App.googleSheet,"a1","a",1,null);

neoGSheetsLoadCell($App.googleSheet,"a1","a",1,null);

neoGSheetsLoadCell($App.googleSheet,"A2","a",2,null);

neoGSheetsLoadCell($App.googleSheet,"a3","a",3,null);

neoGSheetsLoadCell($App.googleSheet,"A4","a",4,null);

neoGSheetsLoadCell($App.googleSheet,"a5","a",5,null);
};
$scope.Work_pageenter = function() {$App.TL1 = localStorage.getItem("TL1");
if ($App.TL1 == 1) {
$scope.SetObjectStyle("TL1a","background-color","red");
$scope.SetObjectStyle("TL1b","background-color","white");
$scope.SetObjectStyle("TL1c","background-color","white");
} else {
};
if ($App.TL1 == 2) {
$scope.SetObjectStyle("TL1a","background-color","white");
$scope.SetObjectStyle("TL1b","background-color","yellow");
$scope.SetObjectStyle("TL1c","background-color","white");
} else {
};
if ($App.TL1 == 3) {
$scope.SetObjectStyle("TL1a","background-color","white");
$scope.SetObjectStyle("TL1b","background-color","white");
$scope.SetObjectStyle("TL1c","background-color","green");
} else {
};};
$scope.Timelord_pageenter = function() {$App.TL2 = localStorage.getItem("TL2");
$scope.ClearObjectStyles("TL2a");
$scope.ClearObjectStyles("TL2b");
$scope.ClearObjectStyles("TL2c");
if ($App.TL2 == 1) {
$scope.SetObjectStyle("TL2a","background-color","#FF0000");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 2) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FB9902");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 3) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#008000");
} else {
};};
$App.NAB.PushButton39_disabled=true;
$App.Listbox1="Alabama";
$App.Listbox10="Alabama";
angular.element(document).ready( function(){
$scope.__init();
neo = angular.element(document.getElementById("ng-view")).scope();neo.Refresh();});
});NeoApp.controller("App_DlgCtrl",function($scope,$rootScope,$modalInstance,$filter,$window,$animate){$scope.CloseDialog=function(){$modalInstance.close();};$scope.CloseDialogBtn=function(btnNum){$modalInstance.close(btnNum);};});
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};NeoApp.directive('timer',function(){return{restrict:'E',replace:false,transclude:false,link:function(scope,element,attributes){if(attributes.autostop){scope.$on('$destroy',function(){scope.$parent.TimerStop(attributes.id);});};if(attributes.autostart)scope.$parent.TimerStart(attributes.id,attributes.interval);}};});NeoApp.directive('slider',['$window',function($window){return{restrict:'E',replace:true,transclude:true,require:'?ngModel',scope:{value:"=ngModel",min:"=",max:"=",disabled:'=ngDisabled',onChange:"&",onChanging:"&"},compile:function(element,attributes){element.addClass('neoapp-slider');var html='';if(attributes.trackimage){html+='<img class="track-img" src="'+attributes.trackimage+'"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='/>';}else{html+='<div class="track"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='><div class="track-left';if(attributes.kind)html+=' track-left-'+attributes.kind;html+='"></div>';};html+='</div><button class="thumb';if(attributes.thumbimage)html+=' thumb-img';if(attributes.kind)html+=' thumb-'+attributes.kind;html+='"';if(attributes.thumbwidth||attributes.thumbimage){html+=' style="';if(attributes.thumbwidth)html+='width:'+attributes.thumbwidth;if(attributes.thumbwidth&&attributes.thumbimage)html+=';';if(attributes.thumbimage)html+="background-image:url('"+attributes.thumbimage+"')";html+='"';};html+=' ng-style="NAB.'+attributes.id+'_style"';html+=' ng-transclude></button>';element.html(html);return linkFn;}};function linkFn($scope,element,attributes,ngModel){var mouseDown=false,track=attributes.trackimage?element.find('.track-img'):element.find('.track'),thumb=element.find('.thumb'),trackLeft=element.find('.track-left'),elemLeft,vMin=isNaN(parseFloat($scope.min))?0:parseFloat($scope.min),vMax=isNaN(parseFloat($scope.max))?100:parseFloat($scope.max),xOffs,dbOnChanging=($scope.onChanging)?debounce(function(){$scope.onChanging();},100):null;if(vMax<=vMin)vMax=vMin+1;var value=isNaN(parseFloat($scope.value))?vMin:parseFloat($scope.value);function positionThumb(){var basePos=((value-vMin)/(vMax-vMin))*(track.width()-thumb.innerWidth());thumb.css('left',basePos);if(trackLeft)trackLeft.css('width',basePos);};function updateValue(){if(ngModel&&!isNaN(parseFloat($scope.value))){var v=$scope.value;value=Math.max(vMin,Math.min(Math.floor(v),vMax));$scope.value=value;}else{value=Math.max(vMin,Math.min(Math.floor(value),vMax));};positionThumb();};function mouseCoords(event){if(event.type=='touchstart'||event.type=='touchmove'||event.type=='touchend'||event.type=='touchcancel'){var touch=event.originalEvent.touches[0]||event.originalEvent.changedTouches[0];return{x:touch.pageX,y:touch.pageY};}else{return{x:event.pageX,y:event.pageY};};};thumb.on('mousedown touchstart',function(event){if(!element.attr('disabled')){mouseDown=true;elemLeft=element.position().left;xOffs=mouseCoords(event).x-thumb.position().left-elemLeft;$(document).one('mouseup touchend ontouchcancel',function(event){if($scope.onChange)$scope.onChange();mouseDown=false;return false;});return false;};});element.on('mousemove touchmove',function(event){if(mouseDown){var xPos=mouseCoords(event).x-elemLeft-xOffs;var v=((xPos/(track.width()-thumb.innerWidth()))*(vMax-vMin))+vMin;v=Math.max(vMin,Math.min(Math.floor(v),vMax));if(value!=v){value=v;positionThumb();if(ngModel){$scope.value=value;if($scope.onChanging)$scope.onChanging();$scope.$apply();};if($scope.onChanging)dbOnChanging();};return false;};});angular.element($window).on('resize.'+element.id,function(){positionThumb();});if(ngModel){$scope.$watch('value',function(){if(!mouseDown){updateValue();};});};if(angular.isObject($scope.max)){$scope.$watch('max',function(){vMax=+$scope.max||100;updateValue();});};if(angular.isObject($scope.min)){$scope.$watch('min',function(){vMin=+$scope.min||0;updateValue();});};$scope.$watch('disabled',function(newVal){element.find('*').attr('disabled',newVal||false);});$scope.$on('$destroy',function(){angular.element($window).off('resize.'+element.id);});};}]);
NeoApp.controller("StartPage_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 1;
$App.NAB.PageID = "StartPage";
$scope.PushButton34_click = function() {$App.Title21 = localStorage.getItem("Title21");
$App.Title22 = localStorage.getItem("Title22");
$App.Book01 = localStorage.getItem("Book1Notes");
$App.Book02 = localStorage.getItem("Book2Notes");
$App.Book03 = localStorage.getItem("Book3Notes");
$App.Book04 = localStorage.getItem("Book4Notes");
$App.Book05 = localStorage.getItem("Book5Notes");
$App.Book06 = localStorage.getItem("Book6Notes");
$App.Book07 = localStorage.getItem("Book7Notes");
$App.Book08 = localStorage.getItem("Book8Notes");
$App.Book09 = localStorage.getItem("Book9Notes");
$App.Book10 = localStorage.getItem("Book10Notes");
$App.Book11 = localStorage.getItem("Book11Notes");
$App.Book12 = localStorage.getItem("Book12Notes");
$App.work01 = localStorage.getItem("Work1Notes");
$App.work02 = localStorage.getItem("Work2Notes");
$App.work03 = localStorage.getItem("Work3Notes");
$App.work04 = localStorage.getItem("Work4Notes");
$App.work05 = localStorage.getItem("Work5Notes");
$App.work06 = localStorage.getItem("Work6Notes");
$App.Decisions01 = localStorage.getItem("Decisions1Notes");
$App.Decisions02 = localStorage.getItem("Decisions2Notes");
$App.Decisions03 = localStorage.getItem("Decisions3Notes");
$App.Decisions04 = localStorage.getItem("Decisions4Notes");
$App.DecisionsS = localStorage.getItem("DecS");
$App.Appdev01 = localStorage.getItem("Appdev1Notes");
$App.Appdev02 = localStorage.getItem("Appdev2Notes");
$App.Appdev03 = localStorage.getItem("Appdev3Notes");
$App.Appdev04 = localStorage.getItem("Appdev4Notes");
$App.Appdev05 = localStorage.getItem("Appdev5Notes");
$App.Appdev06 = localStorage.getItem("Appdev6Notes");
$App.Appdev07 = localStorage.getItem("Appdev7Notes");
$App.Appdev08 = localStorage.getItem("Appdev8Notes");
$App.Appdev09 = localStorage.getItem("Appdev9Notes");
$App.Appdev10 = localStorage.getItem("Appdev10Notes");
$App.PR01 = localStorage.getItem("PR1Notes");
$App.PR02 = localStorage.getItem("PR2Notes");
$App.health01 = localStorage.getItem("Health1Notes");
$App.health02 = localStorage.getItem("Health2Notes");
$App.health03 = localStorage.getItem("Health3Notes");
$App.health04 = localStorage.getItem("Health4Notes");
$App.health05 = localStorage.getItem("Health5Notes");
$App.health06 = localStorage.getItem("Health6Notes");
$App.health10 = localStorage.getItem("Health10Notes");
$App.health11 = localStorage.getItem("Health11Notes");
$App.health12 = localStorage.getItem("Health12Notes");
$App.health13 = localStorage.getItem("Health13Notes");
$App.kingsway01 = localStorage.getItem("kingsway1Notes");
$App.kingsway02 = localStorage.getItem("kingsway2Notes");
$App.FF01 = localStorage.getItem("FF1Notes");
$App.FF02 = localStorage.getItem("FF2Notes");
$App.Meditation01 = localStorage.getItem("Meditation1Notes");
$App.Meditation02 = localStorage.getItem("Meditation2Notes");
$App.Starkie01 = localStorage.getItem("Starkie1Notes");
$App.Starkie02 = localStorage.getItem("Starkie2Notes");
$App.Starkie03 = localStorage.getItem("Starkie3Notes");
$App.Starkie04 = localStorage.getItem("Starkie4Notes");
$App.BR01 = localStorage.getItem("BR1");
$App.BR02 = localStorage.getItem("BR2");
$App.Prayer1 = localStorage.getItem("Prayer1");
$App.Prayer2 = localStorage.getItem("Prayer2");
$App.Order01 = localStorage.getItem("Order1Notes");
$App.Order02 = localStorage.getItem("Order2Notes");
$App.kingsway01 = localStorage.getItem("kingsway1Notes");
$App.kingsway02 = localStorage.getItem("kingsway2Notes");
$App.Reset01 = localStorage.getItem("Reset1Notes");
$App.Reset02 = localStorage.getItem("Reset2Notes");
$scope.GotoPage( "TreeHome" );};
});
NeoApp.controller("TreeHome_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 2;
$App.NAB.PageID = "TreeHome";
$scope.PushButton5_click = function() {$scope.GotoPage( "Work" );};
$scope.PushButton6_click = function() {$scope.GotoPage( "BR1" );};
$scope.PushButton20_click = function() {$scope.GotoPage( "Prayer" );};
$scope.PushButton29_click = function() {$scope.GotoPage( "FF" );};
$scope.Pager2_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager2_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton32_click = function() {$scope.GotoPage( "save" );};
$scope.PushButton46_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton57_click = function() {$scope.GotoPage( "TestNew31524" );};
$scope.PushButton210_click = function() {$scope.GotoPage( "Healthnew" );};
$scope.PushButton225_click = function() {$scope.GotoPage( "Timelord" );};
});
NeoApp.controller("BR1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 3;
$App.NAB.PageID = "BR1";
$scope.TextArea2_change = function() {localStorage.setItem("Work2Notes",$App.work02);};
$scope.TextArea3_change = function() {localStorage.setItem("Health1Notes",$App.health01);};
$scope.PushButton7_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton19_click = function() {$scope.GotoPage( "Prayer" );};
$scope.PushButton24_click = function() {$scope.GotoPage( "Meditation" );};
$scope.PushButton25_click = function() {window.open("https://www.youtube.com/watch?v=aKKiQ_BJqCs", "_blank");};
$scope.PushButton21_click = function() {$scope.GotoPage( "Starkie" );};
$scope.PushButton14_click = function() {$scope.GotoPage( "Kingsway" );};
$scope.PushButton55_click = function() {$scope.GotoPage( "Decisions1" );};
$scope.PushButton38_click = function() {$scope.GotoPage( "Reset" );};
$scope.PushButton3_click = function() {$scope.GotoPage( "Order" );};
$scope.PushButton240_click = function() {$scope.GotoPage( "PlanRPlus" );};
$scope.PushButton28_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton211_click = function() {$scope.GotoPage( "TestNew31524" );};
$scope.PushButton259_click = function() {$scope.GotoPage( "Healthnew" );};
$scope.PushButton260_click = function() {$scope.GotoPage( "Work" );};
$scope.TextArea149_change = function() {localStorage.setItem("Appdev1Notes",$App.Appdev01);};
$scope.TextArea150_change = function() {localStorage.setItem("FF1Notes",$App.FF01);};
$scope.PushButton261_click = function() {$scope.GotoPage( "FF" );};
$scope.PushButton262_click = function() {$scope.GotoPage( "AppDev" );};
$scope.TextArea182_change = function() {localStorage.setItem("Timenotes1",$App.Timenotes1);};
$scope.TextArea183_change = function() {localStorage.setItem("BR1",$App.BR01);};
$scope.PushButton263_click = function() {$scope.GotoPage( "Timelord" );};
$scope.PushButton265_click = function() {$scope.GotoPage( "DBTest" );};
});
NeoApp.controller("DBTest_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 4;
$App.NAB.PageID = "DBTest";
$scope.PushButton266_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton267_click = function() {$scope.GotoPage( "Prayer" );};
$scope.PushButton268_click = function() {$scope.GotoPage( "Meditation" );};
$scope.PushButton269_click = function() {window.open("https://www.youtube.com/watch?v=aKKiQ_BJqCs", "_blank");};
$scope.PushButton270_click = function() {$scope.GotoPage( "Starkie" );};
$scope.PushButton271_click = function() {$scope.GotoPage( "Kingsway" );};
$scope.PushButton272_click = function() {$scope.GotoPage( "Decisions1" );};
$scope.PushButton273_click = function() {$scope.GotoPage( "Reset" );};
$scope.PushButton274_click = function() {$scope.GotoPage( "Order" );};
$scope.PushButton275_click = function() {$scope.GotoPage( "PlanRPlus" );};
$scope.PushButton276_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton277_click = function() {$scope.GotoPage( "TestNew31524" );};
$scope.PushButton279_click = function() {$scope.GotoPage( "Healthnew" );};
$scope.PushButton280_click = function() {$scope.GotoPage( "Work" );};
$scope.PushButton281_click = function() {$scope.GotoPage( "FF" );};
$scope.PushButton282_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton283_click = function() {$scope.GotoPage( "Timelord" );};
$scope.PushButton284_click = function() {$scope.GotoPage( "TestNew31524" );};
});
NeoApp.controller("Work_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 5;
$App.NAB.PageID = "Work";
$scope.WorkNote02_change = function() {localStorage.setItem("Work2Notes",$App.work02);};
$scope.BacktoHtreeHome_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton4_click = function() {$scope.GotoPage( "Work2" );};
$scope.Pager1_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager1_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea30_change = function() {localStorage.setItem("Work3Notes",$App.work03);};
$scope.Image3_click = function() {$scope.GotoPage( "WorkPhilos1" );};
$scope.WorkNote01_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.Headline66_click = function() {$scope.GotoPage( "WorkPhilos1" );};
$scope.TL1a_click = function() {localStorage.removeItem($App.TL1);
localStorage.setItem("TL1",1);
$App.TL1 = localStorage.getItem("TL1");
if ($App.TL1 == 1) {
$scope.SetObjectStyle("TL1a","background-color","red");
$scope.SetObjectStyle("TL1b","background-color","white");
$scope.SetObjectStyle("TL1c","background-color","white");
} else {
};};
$scope.Container5_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.TL1b_click = function() {localStorage.removeItem($App.TL1);
localStorage.setItem("TL1",2);
$App.TL1 = localStorage.getItem("TL1");
if ($App.TL1 == 2) {
$scope.SetObjectStyle("TL1a","background-color","white");
$scope.SetObjectStyle("TL1b","background-color","Yellow");
$scope.SetObjectStyle("TL1c","background-color","white");
} else {
};};
$scope.Container7_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.TL1c_click = function() {localStorage.removeItem($App.TL1);
localStorage.setItem("TL1",3);
$App.TL1 = localStorage.getItem("TL1");
if ($App.TL1 == 3) {
$scope.SetObjectStyle("TL1a","background-color","white");
$scope.SetObjectStyle("TL1b","background-color","white");
$scope.SetObjectStyle("TL1c","background-color","green");
} else {
};};
$scope.Container3_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.TextArea31_change = function() {localStorage.setItem("Work4Notes",$App.work04);};
$scope.TextArea190_change = function() {localStorage.setItem("Work3Notes",$App.work03);};
});
NeoApp.controller("Work2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 6;
$App.NAB.PageID = "Work2";
$scope.PushButton49_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton50_click = function() {$App.work01 = localStorage.getItem("Work1Notes");
$App.work02 = localStorage.getItem("Work2Notes");
$App.work03 = localStorage.getItem("Work3Notes");
$App.work04 = localStorage.getItem("Work4Notes");
$App.work05 = localStorage.getItem("Work5Notes");
$App.work06 = localStorage.getItem("Work6Notes");};
$scope.Pager10_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager10_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea36_change = function() {localStorage.setItem("Work5Notes",$App.work05);};
});
NeoApp.controller("Work3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 7;
$App.NAB.PageID = "Work3";
$scope.PushButton13_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton244_click = function() {$App.work01 = localStorage.getItem("Work1Notes");
$App.work02 = localStorage.getItem("Work2Notes");
$App.work03 = localStorage.getItem("Work3Notes");
$App.work04 = localStorage.getItem("Work4Notes");
$App.work05 = localStorage.getItem("Work5Notes");
$App.work06 = localStorage.getItem("Work6Notes");};
$scope.Pager42_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager42_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea72_change = function() {localStorage.setItem("Work6Notes",$App.work06);};
});
NeoApp.controller("WorkPhilos1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 8;
$App.NAB.PageID = "WorkPhilos1";
$scope.PushButton213_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager9_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager9_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea73_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.WPQ01_change = function() {localStorage.setItem("WPQ01",$App.WPQ01);};
$scope.TextArea70_change = function() {$App.font1 = 15;
localStorage.setItem("WPQA01",$App.WPQA01);};
});
NeoApp.controller("WorkPhilos1a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 9;
$App.NAB.PageID = "WorkPhilos1a";
$scope.PushButton8_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager41_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager41_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea168_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea171_change = function() {localStorage.setItem("WPQ02",$App.WPQ02);};
$scope.TextArea172_change = function() {localStorage.setItem("WPQA02",$App.WPQA02);};
});
NeoApp.controller("workphilos2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 10;
$App.NAB.PageID = "workphilos2";
$scope.PushButton216_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea74_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea75_change = function() {localStorage.setItem("WPQ03",$App.WPQ03);};
$scope.TextArea76_change = function() {localStorage.setItem("WPQA03",$App.WPQA03);};
$scope.TextArea77_change = function() {localStorage.setItem("WPQ04",$App.WPQ04);};
$scope.TextArea78_change = function() {localStorage.setItem("WPQA04",$App.WPQA04);};
$scope.Pager11_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager11_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 11;
$App.NAB.PageID = "workphilos3";
$scope.PushButton218_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea79_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea80_change = function() {localStorage.setItem("WPQ05",$App.WPQ05);};
$scope.TextArea81_change = function() {localStorage.setItem("WPQA05",$App.WPQA05);};
$scope.TextArea82_change = function() {localStorage.setItem("WPQ06",$App.WPQ06);};
$scope.TextArea83_change = function() {localStorage.setItem("WPQA06",$App.WPQA06);};
$scope.Pager12_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager12_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 12;
$App.NAB.PageID = "workphilos4";
$scope.PushButton215_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea84_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea85_change = function() {localStorage.setItem("WPQ07",$App.WPQ07);};
$scope.TextArea86_change = function() {localStorage.setItem("WPQA07",$App.WPQA07);};
$scope.TextArea87_change = function() {localStorage.setItem("WPQ08",$App.WPQ08);};
$scope.TextArea88_change = function() {localStorage.setItem("WPQA08",$App.WPQA08);};
$scope.Pager13_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager13_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 13;
$App.NAB.PageID = "workphilos5";
$scope.PushButton217_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea89_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea90_change = function() {localStorage.setItem("WPQ09",$App.WPQ09);};
$scope.TextArea91_change = function() {localStorage.setItem("WPQA09",$App.WPQA09);};
$scope.TextArea92_change = function() {localStorage.setItem("WPQ10",$App.WPQ10);};
$scope.TextArea93_change = function() {localStorage.setItem("WPQA10",$App.WPQA10);};
$scope.Pager14_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager14_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 14;
$App.NAB.PageID = "workphilos6";
$scope.PushButton219_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea94_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea95_change = function() {localStorage.setItem("WPQ11",$App.WPQ11);};
$scope.TextArea96_change = function() {localStorage.setItem("WPQA11",$App.WPQA11);};
$scope.TextArea97_change = function() {localStorage.setItem("WPQ12",$App.WPQ12);};
$scope.TextArea98_change = function() {localStorage.setItem("WPQA12",$App.WPQA12);};
$scope.Pager15_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager15_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 15;
$App.NAB.PageID = "workphilos7";
$scope.PushButton220_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea99_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea100_change = function() {localStorage.setItem("WPQ13",$App.WPQ13);};
$scope.TextArea101_change = function() {localStorage.setItem("WPQA13",$App.WPQA13);};
$scope.TextArea102_change = function() {localStorage.setItem("WPQ14",$App.WPQ14);};
$scope.TextArea103_change = function() {localStorage.setItem("WPQA14",$App.WPQA14);};
$scope.Pager16_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager16_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workphilos8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 16;
$App.NAB.PageID = "workphilos8";
$scope.PushButton221_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea104_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.TextArea105_change = function() {localStorage.setItem("WPQ15",$App.WPQ15);};
$scope.TextArea106_change = function() {localStorage.setItem("WPQA15",$App.WPQA15);};
$scope.TextArea107_change = function() {localStorage.setItem("WPQ16",$App.WPQ16);};
$scope.TextArea108_change = function() {localStorage.setItem("WPQA16",$App.WPQA16);};
$scope.Pager17_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager17_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("workPhCommitment1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 17;
$App.NAB.PageID = "workPhCommitment1";
$scope.PushButton223_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea109_change = function() {localStorage.setItem("Work1Notes",$App.work01);};
$scope.Pager20_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager20_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea110_change = function() {localStorage.setItem("wpc01",$App.wpc01);};
});
NeoApp.controller("Timelord_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 18;
$App.NAB.PageID = "Timelord";
$scope.PushButton233_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager36_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager36_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea151_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea152_change = function() {localStorage.setItem("Timenotes1",$App.Timenotes1);};
$scope.TextArea153_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.Headline194_click = function() {$scope.GotoPage( "TIMELORD01" );};
$scope.PushButton239_click = function() {localStorage.removeItem($App.TL2);
localStorage.setItem("TL2",1);
$App.TL2 = localStorage.getItem("TL2");
localStorage.setItem("TL1",1);
$App.TL1 = localStorage.getItem("TL1");
$scope.ClearObjectStyles("TL2a");
$scope.ClearObjectStyles("TL2b");
$scope.ClearObjectStyles("TL2c");
if ($App.TL2 == 1) {
$scope.SetObjectStyle("TL2a","background-color","#FF0000");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 2) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FB9902");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 3) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#008000");
} else {
};};
$scope.Container4_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.Container8_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.PushButton241_click = function() {localStorage.removeItem($App.TL2);
localStorage.setItem("TL2",2);
$App.TL2 = localStorage.getItem("TL2");
$scope.ClearObjectStyles("TL2a");
$scope.ClearObjectStyles("TL2b");
$scope.ClearObjectStyles("TL2c");
if ($App.TL2 == 1) {
$scope.SetObjectStyle("TL2a","background-color","#FF0000");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 2) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FB9902");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 3) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#008000");
} else {
};};
$scope.PushButton242_click = function() {localStorage.removeItem($App.TL2);
localStorage.setItem("TL2",3);
$App.TL2 = localStorage.getItem("TL2");
$scope.ClearObjectStyles("TL2a");
$scope.ClearObjectStyles("TL2b");
$scope.ClearObjectStyles("TL2c");
if ($App.TL2 == 1) {
$scope.SetObjectStyle("TL2a","background-color","#FF0000");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 2) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FB9902");
$scope.SetObjectStyle("TL2c","background-color","#FFFFFF");
} else {
};
if ($App.TL2 == 3) {
$scope.SetObjectStyle("TL2a","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2b","background-color","#FFFFFF");
$scope.SetObjectStyle("TL2c","background-color","#008000");
} else {
};};
$scope.Container6_click = function() {$scope.SetObjectStyle("Container2","background-color","red");
$scope.SetObjectStyle("Container3","background-color","yellow");
$scope.SetObjectStyle("Container4","background-color","green");};
$scope.PushButton243_click = function() {$App.TL2 = localStorage.getItem($App.TL2);};
$scope.Headline232_click = function() {$scope.GotoPage( "TIMELORD01" );};
$scope.TextArea191_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea192_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea193_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
});
NeoApp.controller("TIMELORD01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 19;
$App.NAB.PageID = "TIMELORD01";
$scope.PushButton224_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager21_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager21_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea111_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea112_change = function() {localStorage.setItem("Time01",$App.Time01);};
$scope.TextArea113_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA01",$App.TimeA01);};
});
NeoApp.controller("Timelord1a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 20;
$App.NAB.PageID = "Timelord1a";
$scope.PushButton245_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager43_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager43_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea38_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea170_change = function() {localStorage.setItem("Time02",$App.Time02);};
$scope.TextArea173_change = function() {localStorage.setItem("TimeA02",$App.TimeA02);};
});
NeoApp.controller("TIMELORD02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 21;
$App.NAB.PageID = "TIMELORD02";
$scope.PushButton226_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager22_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager22_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea116_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea117_change = function() {localStorage.setItem("Time03",$App.Time03);};
$scope.TextArea118_change = function() {localStorage.setItem("TimeA03",$App.TimeA03);};
});
NeoApp.controller("Timlord2a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 22;
$App.NAB.PageID = "Timlord2a";
$scope.PushButton246_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager44_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager44_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea71_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea169_change = function() {localStorage.setItem("Time04",$App.Time04);};
$scope.TextArea174_change = function() {localStorage.setItem("TimeA04",$App.TimeA04);};
});
NeoApp.controller("TIMELORD03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 23;
$App.NAB.PageID = "TIMELORD03";
$scope.PushButton227_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager23_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager23_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea121_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea122_change = function() {localStorage.setItem("Time05",$App.Time05);};
$scope.TextArea123_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA05",$App.TimeA05);};
});
NeoApp.controller("Timelord3a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 24;
$App.NAB.PageID = "Timelord3a";
$scope.PushButton247_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager45_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager45_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea114_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea120_change = function() {localStorage.setItem("Time06",$App.Time06);};
$scope.TextArea175_change = function() {localStorage.setItem("TimeA06",$App.TimeA06);};
});
NeoApp.controller("TIMELORD04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 25;
$App.NAB.PageID = "TIMELORD04";
$scope.PushButton228_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager24_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager24_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea126_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea127_change = function() {localStorage.setItem("Time07",$App.Time07);};
$scope.TextArea128_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA07",$App.TimeA07);};
});
NeoApp.controller("Timelord4a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 26;
$App.NAB.PageID = "Timelord4a";
$scope.PushButton248_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager46_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager46_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea115_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea125_change = function() {localStorage.setItem("Time08",$App.Time08);};
$scope.TextArea176_change = function() {localStorage.setItem("TimeA08",$App.TimeA08);};
});
NeoApp.controller("TIMELORD05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 27;
$App.NAB.PageID = "TIMELORD05";
$scope.PushButton229_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager25_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager25_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea131_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea132_change = function() {localStorage.setItem("Time09",$App.Time09);};
$scope.TextArea133_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA09",$App.TimeA09);};
});
NeoApp.controller("Timelord5a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 28;
$App.NAB.PageID = "Timelord5a";
$scope.PushButton249_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager47_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager47_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea119_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea130_change = function() {localStorage.setItem("Time10",$App.Time10);};
$scope.TextArea177_change = function() {localStorage.setItem("TimeA10",$App.TimeA10);};
});
NeoApp.controller("TIMELORD06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 29;
$App.NAB.PageID = "TIMELORD06";
$scope.PushButton230_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager26_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager26_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea136_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea137_change = function() {localStorage.setItem("Time11",$App.Time11);};
$scope.TextArea138_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA11",$App.TimeA11);};
});
NeoApp.controller("Timelord6a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 30;
$App.NAB.PageID = "Timelord6a";
$scope.PushButton250_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager48_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager48_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea124_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea135_change = function() {localStorage.setItem("Time12",$App.Time12);};
$scope.TextArea178_change = function() {localStorage.setItem("TimeA12",$App.TimeA12);};
});
NeoApp.controller("TIMELORD07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 31;
$App.NAB.PageID = "TIMELORD07";
$scope.PushButton231_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager27_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager27_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea141_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea142_change = function() {localStorage.setItem("Time13",$App.Time13);};
$scope.TextArea143_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA13",$App.TimeA13);};
});
NeoApp.controller("Timelord7a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 32;
$App.NAB.PageID = "Timelord7a";
$scope.PushButton251_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager49_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager49_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea129_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea140_change = function() {localStorage.setItem("Time14",$App.Time14);};
$scope.TextArea179_change = function() {localStorage.setItem("TimeA14",$App.TimeA14);};
});
NeoApp.controller("TIMELORD08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 33;
$App.NAB.PageID = "TIMELORD08";
$scope.PushButton232_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager28_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager28_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea146_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea147_change = function() {localStorage.setItem("Time15",$App.Time15);};
$scope.TextArea148_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA15",$App.TimeA15);};
});
NeoApp.controller("Timelord8a_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 34;
$App.NAB.PageID = "Timelord8a";
$scope.PushButton252_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager50_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager50_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea134_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea145_change = function() {localStorage.setItem("Time16",$App.Time16);};
$scope.TextArea180_change = function() {localStorage.setItem("TimeA16",$App.TimeA16);};
});
NeoApp.controller("TNeoAppPage15_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 35;
$App.NAB.PageID = "TNeoAppPage15";
$scope.PushButton254_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager52_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager52_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("TNeoAppPage14_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 36;
$App.NAB.PageID = "TNeoAppPage14";
$scope.PushButton253_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager51_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager51_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea139_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea144_change = function() {localStorage.setItem("Time17",$App.Time17);};
$scope.TextArea181_change = function() {localStorage.setItem("TimeA18",$App.TimeA18);};
});
NeoApp.controller("TimlordDevelopNotes01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 37;
$App.NAB.PageID = "TimlordDevelopNotes01";
$scope.PushButton235_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager38_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager38_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea159_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea161_change = function() {localStorage.setItem("Timenotes01",$App.Timenotes01);};
$scope.TextArea163_change = function() {localStorage.setItem("Timenotes02",$App.Timenotes02);};
});
NeoApp.controller("TimelordDevelopnotes02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 38;
$App.NAB.PageID = "TimelordDevelopnotes02";
$scope.PushButton236_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager39_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager39_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea160_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea162_change = function() {localStorage.setItem("Timenotes03",$App.Timenotes03);};
$scope.TextArea164_change = function() {localStorage.setItem("Timenotes04",$App.Timenotes04);};
});
NeoApp.controller("Timelorddevelopnotes03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 39;
$App.NAB.PageID = "Timelorddevelopnotes03";
$scope.PushButton237_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager40_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager40_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea165_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea166_change = function() {localStorage.setItem("Timenotes05",$App.Timenotes05);};
$scope.TextArea167_change = function() {localStorage.setItem("Timenotes06",$App.Timenotes06);};
});
NeoApp.controller("allphQA_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 40;
$App.NAB.PageID = "allphQA";
$scope.PushButton222_click = function() {$scope.GotoPage( "TreeHome" );};
});
NeoApp.controller("Decisions1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 41;
$App.NAB.PageID = "Decisions1";
$scope.PushButton51_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton52_click = function() {$scope.GotoPage( "Decisions2" );};
$scope.TextArea37_change = function() {localStorage.setItem("DecS",$App.DecisionsS);};
});
NeoApp.controller("Decisions2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 42;
$App.NAB.PageID = "Decisions2";
$scope.TextArea42_change = function() {localStorage.setItem("Decisions2Notes",$App.Decisions02);};
$scope.TextArea43_change = function() {localStorage.setItem("Decisions1Notes",$App.Decisions01);};
$scope.PushButton53_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea44_change = function() {localStorage.setItem("Decisions3Notes",$App.Decisions03);};
$scope.TextArea45_change = function() {localStorage.setItem("Decisions4Notes",$App.Decisions04);};
$scope.PushButton54_click = function() {$scope.GotoPage( "Decisions1" );};
});
NeoApp.controller("AppDev_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 43;
$App.NAB.PageID = "AppDev";
$scope.TextArea33_change = function() {localStorage.setItem("Appdev1Notes",$App.Appdev01);};
$scope.PushButton47_click = function() {localStorage.setItem("Appdev1Notes",$App.Appdev01);
$scope.GotoPage( "TreeHome" );};
$scope.PushButton68_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton86_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton87_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton88_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton89_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton90_click = function() {$scope.GotoPage( "appdev6" );};
$scope.PushButton91_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton92_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton93_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton94_click = function() {$scope.GotoPage( "appdev10" );};
$scope.TextArea194_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea195_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea196_change = function() {localStorage.setItem("Appdev2Notes",$App.Appdev02);};
});
NeoApp.controller("Appdev2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 44;
$App.NAB.PageID = "Appdev2";
$scope.TextArea32_change = function() {localStorage.setItem("Appdev2Notes",$App.Appdev02);};
$scope.PushButton44_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton95_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton96_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton97_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton98_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton99_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton100_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton101_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton102_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton103_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton104_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 45;
$App.NAB.PageID = "appdev3";
$scope.TextArea34_change = function() {localStorage.setItem("Appdev3Notes",$App.Appdev03);};
$scope.PushButton62_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton105_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton106_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton107_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton108_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton109_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton110_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton111_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton112_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton113_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton114_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 46;
$App.NAB.PageID = "appdev4";
$scope.PushButton59_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea35_change = function() {localStorage.setItem("Appdev4Notes",$App.Appdev04);};
$scope.PushButton115_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton116_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton117_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton118_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton119_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton120_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton121_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton122_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton123_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton124_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 47;
$App.NAB.PageID = "appdev5";
$scope.PushButton64_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea47_change = function() {localStorage.setItem("Appdev5Notes",$App.Appdev05);};
$scope.PushButton125_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton126_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton127_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton128_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton129_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton130_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton131_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton132_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton133_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton134_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 48;
$App.NAB.PageID = "appdev6";
$scope.PushButton67_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea48_change = function() {localStorage.setItem("Appdev6Notes",$App.Appdev06);};
$scope.PushButton135_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton136_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton137_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton138_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton139_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton140_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton141_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton142_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton143_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton144_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 49;
$App.NAB.PageID = "appdev7";
$scope.PushButton73_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea49_change = function() {localStorage.setItem("Appdev7Notes",$App.Appdev07);};
$scope.PushButton145_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton146_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton147_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton148_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton149_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton150_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton151_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton152_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton153_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton154_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 50;
$App.NAB.PageID = "appdev8";
$scope.PushButton75_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea50_change = function() {localStorage.setItem("Appdev8Notes",$App.Appdev08);};
$scope.PushButton155_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton156_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton157_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton158_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton159_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton160_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton161_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton162_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton163_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton164_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev9_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 51;
$App.NAB.PageID = "appdev9";
$scope.PushButton77_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea51_change = function() {localStorage.setItem("Appdev9Notes",$App.Appdev09);};
$scope.PushButton165_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton166_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton167_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton168_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton169_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton170_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton171_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton172_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton173_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton174_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("appdev10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 52;
$App.NAB.PageID = "appdev10";
$scope.PushButton79_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea56_change = function() {localStorage.setItem("Appdev10Notes",$App.Appdev10);};
$scope.PushButton175_click = function() {$scope.GotoPage( "AppDev" );};
$scope.PushButton176_click = function() {$scope.GotoPage( "Appdev2" );};
$scope.PushButton177_click = function() {$scope.GotoPage( "appdev3" );};
$scope.PushButton178_click = function() {$scope.GotoPage( "appdev4" );};
$scope.PushButton179_click = function() {$scope.GotoPage( "appdev5" );};
$scope.PushButton180_click = function() {$scope.GotoPage( "appdev10" );};
$scope.PushButton181_click = function() {$scope.GotoPage( "appdev9" );};
$scope.PushButton182_click = function() {$scope.GotoPage( "appdev8" );};
$scope.PushButton183_click = function() {$scope.GotoPage( "Appdev7" );};
$scope.PushButton184_click = function() {$scope.GotoPage( "appdev6" );};
});
NeoApp.controller("PlanRPlus_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 53;
$App.NAB.PageID = "PlanRPlus";
$scope.TextArea14_change = function() {localStorage.setItem("PR2Notes",$App.PR02);};
$scope.TextArea15_change = function() {localStorage.setItem("PR1Notes",$App.PR01);};
$scope.PushButton26_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton27_click = function() {$App.PR01 = localStorage.getItem("PR1Notes");
$App.PR02 = localStorage.getItem("PR2Notes");};
$scope.Pager3_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager3_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("TNeoAppPage12_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 54;
$App.NAB.PageID = "TNeoAppPage12";
$scope.TextArea54_change = function() {localStorage.setItem("PR2Notes",$App.PR02);};
$scope.TextArea55_change = function() {localStorage.setItem("PR1Notes",$App.PR01);};
$scope.PushButton71_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton72_click = function() {$App.PR01 = localStorage.getItem("PR1Notes");
$App.PR02 = localStorage.getItem("PR2Notes");};
$scope.Pager19_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager19_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("TNeoAppPage11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 55;
$App.NAB.PageID = "TNeoAppPage11";
$scope.TextArea52_change = function() {localStorage.setItem("PR2Notes",$App.PR02);};
$scope.TextArea53_change = function() {localStorage.setItem("PR1Notes",$App.PR01);};
$scope.PushButton69_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton70_click = function() {$App.PR01 = localStorage.getItem("PR1Notes");
$App.PR02 = localStorage.getItem("PR2Notes");};
$scope.Pager18_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager18_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Healthnew_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 56;
$App.NAB.PageID = "Healthnew";
$scope.TextArea4_change = function() {localStorage.setItem("Health3Notes",$App.health03);};
$scope.TextArea5_change = function() {localStorage.setItem("Health1Notes",$App.health01);};
$scope.PushButton9_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton10_click = function() {$App.health01 = localStorage.getItem("Health1Notes");
$App.health02 = localStorage.getItem("Health2Notes");
$App.health03 = localStorage.getItem("Health3Notes");
$App.health04 = localStorage.getItem("Health4Notes");
$App.health10 = localStorage.getItem("Health10Notes");
$App.health11 = localStorage.getItem("Health11Notes");
$App.health12 = localStorage.getItem("Health12Notes");
$App.health13 = localStorage.getItem("Health13Notes");};
$scope.Pager4_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager4_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea22_change = function() {localStorage.setItem("Health4Notes",$App.health04);};
$scope.TextArea23_change = function() {localStorage.setItem("Health2Notes",$App.health02);};
$scope.PushButton40_click = function() {$scope.GotoPage( "Healthnew2" );};
$scope.TextArea197_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea198_change = function() {localStorage.setItem("Health3Notes",$App.health03);};
$scope.TextArea199_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
});
NeoApp.controller("Healthnew2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 57;
$App.NAB.PageID = "Healthnew2";
$scope.TextArea24_change = function() {localStorage.setItem("Health12Notes",$App.health12);};
$scope.TextArea25_change = function() {localStorage.setItem("Health10Notes",$App.health10);};
$scope.PushButton41_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton42_click = function() {$App.health01 = localStorage.getItem("Health1Notes");
$App.health02 = localStorage.getItem("Health2Notes");
$App.health03 = localStorage.getItem("Health3Notes");
$App.health04 = localStorage.getItem("Health4Notes");
$App.health10 = localStorage.getItem("Health10Notes");
$App.health11 = localStorage.getItem("Health11Notes");
$App.health12 = localStorage.getItem("Health12Notes");
$App.health13 = localStorage.getItem("Health13Notes");};
$scope.Pager8_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager8_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea26_change = function() {localStorage.setItem("Health13Notes",$App.health13);};
$scope.TextArea27_change = function() {localStorage.setItem("Health11Notes",$App.health11);};
$scope.PushButton43_click = function() {$scope.GotoPage( "Healthnew" );};
});
NeoApp.controller("FF_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 58;
$App.NAB.PageID = "FF";
$scope.TextArea16_change = function() {localStorage.setItem("FF2Notes",$App.FF02);};
$scope.TextArea17_change = function() {localStorage.setItem("FF1Notes",$App.FF01);};
$scope.PushButton30_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton31_click = function() {$App.FF01 = localStorage.getItem("FF1Notes");
$App.FF02 = localStorage.getItem("FF2Notes");};
$scope.TextArea200_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
$scope.TextArea201_change = function() {localStorage.setItem("FF2Notes",$App.FF02);};
$scope.TextArea202_change = function() {localStorage.setItem("Timenotes2",$App.Timenotes2);};
});
NeoApp.controller("Book1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 59;
$App.NAB.PageID = "Book1";
$scope.PushButton48_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea57_change = function() {localStorage.setItem("Book1Notes",$App.Book01);};
$scope.PushButton185_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton186_click = function() {$scope.GotoPage( "Book2" );};
$scope.PushButton187_click = function() {$scope.GotoPage( "Book3" );};
$scope.PushButton188_click = function() {$scope.GotoPage( "Book4" );};
$scope.PushButton189_click = function() {$scope.GotoPage( "Book5" );};
});
NeoApp.controller("Book2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 60;
$App.NAB.PageID = "Book2";
$scope.PushButton60_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton74_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton76_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea58_change = function() {localStorage.setItem("Book2Notes",$App.Book02);};
$scope.PushButton190_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton191_click = function() {$scope.GotoPage( "Book2" );};
$scope.PushButton192_click = function() {$scope.GotoPage( "Book3" );};
$scope.PushButton193_click = function() {$scope.GotoPage( "Book4" );};
$scope.PushButton194_click = function() {$scope.GotoPage( "Book5" );};
});
NeoApp.controller("Book3_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 61;
$App.NAB.PageID = "Book3";
$scope.PushButton61_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea59_change = function() {localStorage.setItem("Book3Notes",$App.Book03);};
$scope.PushButton195_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton196_click = function() {$scope.GotoPage( "Book2" );};
$scope.PushButton197_click = function() {$scope.GotoPage( "Book3" );};
$scope.PushButton198_click = function() {$scope.GotoPage( "Book4" );};
$scope.PushButton199_click = function() {$scope.GotoPage( "Book5" );};
});
NeoApp.controller("Book4_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 62;
$App.NAB.PageID = "Book4";
$scope.PushButton63_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea60_change = function() {localStorage.setItem("Book4Notes",$App.Book04);};
$scope.PushButton200_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton201_click = function() {$scope.GotoPage( "Book2" );};
$scope.PushButton202_click = function() {$scope.GotoPage( "Book3" );};
$scope.PushButton203_click = function() {$scope.GotoPage( "Book4" );};
$scope.PushButton204_click = function() {$scope.GotoPage( "Book5" );};
});
NeoApp.controller("Book5_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 63;
$App.NAB.PageID = "Book5";
$scope.PushButton66_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea61_change = function() {localStorage.setItem("Book5Notes",$App.Book05);};
$scope.PushButton205_click = function() {$scope.GotoPage( "Book1" );};
$scope.PushButton206_click = function() {$scope.GotoPage( "Book2" );};
$scope.PushButton207_click = function() {$scope.GotoPage( "Book3" );};
$scope.PushButton208_click = function() {$scope.GotoPage( "Book4" );};
$scope.PushButton209_click = function() {$scope.GotoPage( "Book5" );};
});
NeoApp.controller("Book6_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 64;
$App.NAB.PageID = "Book6";
$scope.PushButton78_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager29_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager29_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea62_change = function() {localStorage.setItem("Book6Notes",$App.Book06);};
});
NeoApp.controller("Book7_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 65;
$App.NAB.PageID = "Book7";
$scope.PushButton80_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager30_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager30_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea63_change = function() {localStorage.setItem("Book7Notes",$App.Book07);};
});
NeoApp.controller("Book8_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 66;
$App.NAB.PageID = "Book8";
$scope.PushButton81_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager31_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager31_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea64_change = function() {localStorage.setItem("Book8Notes",$App.Book08);};
});
NeoApp.controller("Book9_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 67;
$App.NAB.PageID = "Book9";
$scope.PushButton82_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager32_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager32_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea65_change = function() {localStorage.setItem("Book9Notes",$App.Book09);};
});
NeoApp.controller("Book10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 68;
$App.NAB.PageID = "Book10";
$scope.PushButton83_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager33_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager33_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea66_change = function() {localStorage.setItem("Book10Notes",$App.Book10);};
});
NeoApp.controller("Book11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 69;
$App.NAB.PageID = "Book11";
$scope.PushButton84_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager34_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager34_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea67_change = function() {localStorage.setItem("Book11Notes",$App.Book11);};
});
NeoApp.controller("Book12_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 70;
$App.NAB.PageID = "Book12";
$scope.PushButton85_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager35_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager35_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea68_change = function() {localStorage.setItem("Book12Notes",$App.Book12);};
});
NeoApp.controller("Meditation_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 71;
$App.NAB.PageID = "Meditation";
$scope.TextArea12_change = function() {localStorage.setItem("Meditation2Notes",$App.Meditation02);};
$scope.TextArea13_change = function() {localStorage.setItem("Meditation1Notes",$App.Meditation01);};
$scope.PushButton22_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton23_click = function() {$App.Meditation01 = localStorage.getItem("Meditation1Notes");
$App.Meditation02 = localStorage.getItem("Meditation2Notes");};
});
NeoApp.controller("Kingsway_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 72;
$App.NAB.PageID = "Kingsway";
$scope.TextArea6_change = function() {localStorage.setItem("kingsway2Notes",$App.kingsway02);};
$scope.TextArea7_change = function() {localStorage.setItem("kingsway1Notes",$App.kingsway01);};
$scope.PushButton11_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton12_click = function() {$App.kingsway01 = localStorage.getItem("kingsway1Notes");
$App.kingsway02 = localStorage.getItem("kingsway2Notes");};
$scope.Pager5_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager5_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Starkie_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 73;
$App.NAB.PageID = "Starkie";
$scope.TextArea8_change = function() {localStorage.setItem("Starkie2Notes",$App.Starkie02);};
$scope.TextArea9_change = function() {localStorage.setItem("Starkie1Notes",$App.Starkie01);};
$scope.PushButton15_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton16_click = function() {$App.Starkie01 = localStorage.getItem("Starkie1Notes");
$App.Starkie02 = localStorage.getItem("Starkie2Notes");
$App.Starkie03 = localStorage.getItem("Starkie3Notes");
$App.Starkie04 = localStorage.getItem("Starkie4Notes");};
$scope.TextArea28_change = function() {localStorage.setItem("Starkie3Notes",$App.Starkie03);};
$scope.TextArea29_change = function() {localStorage.setItem("Starkie4Notes",$App.Starkie04);};
});
NeoApp.controller("TNeoAppPage13_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 74;
$App.NAB.PageID = "TNeoAppPage13";
$scope.PushButton234_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Pager37_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager37_nextclick = function() {$scope.GotoNextPage();};
$scope.TextArea154_change = function() {localStorage.setItem("TLPhilos",$App.TLPhilos);};
$scope.TextArea155_change = function() {localStorage.setItem("Time15",$App.Time15);};
$scope.TextArea156_change = function() {$App.font1 = 15;
localStorage.setItem("TimeA15",$App.TimeA15);};
$scope.TextArea157_change = function() {localStorage.setItem("Time16",$App.Time16);};
$scope.TextArea158_change = function() {localStorage.setItem("TimeA16",$App.TimeA16);};
});
NeoApp.controller("Order_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 75;
$App.NAB.PageID = "Order";
$scope.PushButton1_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea1_change = function() {localStorage.setItem("Order1Notes",$App.Order01);};
$scope.TextArea19_change = function() {localStorage.setItem("Order2Notes",$App.Order02);};
$scope.Pager6_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager6_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton2_click = function() {$App.Order01 = localStorage.getItem("Order1Notes");
$App.Order02 = localStorage.getItem("Order2Notes");};
});
NeoApp.controller("Reset_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 76;
$App.NAB.PageID = "Reset";
$scope.PushButton36_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea20_change = function() {localStorage.setItem("Reset1Notes",$App.Reset01);};
$scope.TextArea21_change = function() {localStorage.setItem("Reset2Notes",$App.Reset02);};
$scope.Pager7_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager7_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton37_click = function() {$App.Reset01 = localStorage.getItem("Reset1Notes");
$App.Reset02 = localStorage.getItem("Reset2Notes");};
});
NeoApp.controller("Prayer_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 77;
$App.NAB.PageID = "Prayer";
$scope.TextArea10_change = function() {localStorage.setItem("Prayer2",$App.Prayer2);};
$scope.TextArea11_change = function() {localStorage.setItem("Prayer1",$App.Prayer1);};
$scope.PushButton17_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton18_click = function() {$App.Prayer1 = localStorage.getItem("Prayer1");
$App.Prayer2 = localStorage.getItem("Prayer2");};
});
NeoApp.controller("T1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 78;
$App.NAB.PageID = "T1";
$scope.TextArea39_change = function() {localStorage.setItem("T1b",$App.T1b);};
$scope.TextArea40_change = function() {localStorage.setItem("T1a",$App.T1a);};
$scope.PushButton58_click = function() {$scope.GotoPage( "TreeHome" );};
});
NeoApp.controller("T2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 79;
$App.NAB.PageID = "T2";
$scope.PushButton65_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea41_change = function() {localStorage.setItem("T2a",$App.T2a);};
$scope.TextArea46_change = function() {localStorage.setItem("T2b",$App.T2b);};
});
NeoApp.controller("save_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 80;
$App.NAB.PageID = "save";
$scope.PushButton35_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton39_click = function() {$scope.VarToFile($App.DateInputwork,"myfile.txt");};
$scope.PushButton33_click = function() {$App.DateInputwork = "Base Reality 1:"+$App.BR01+"Base Reality 2:"+$App.BR02+" FF1:"+$App.FF01+"FF2:"+$App.FF02+" "+$App.Title21+": "+$App.T1a+" "+$App.T1b+" "+$App.Title22+": "+$App.T2a+" "+$App.T2b+" App Dev: "+$App.Appdev01+" "+$App.Appdev02+" "+$App.Appdev03+" "+$App.Appdev04+" "+$App.Appdev05+" "+$App.Appdev06+"  Prayer1:"+$App.Prayer1+" Prayer2:"+$App.Prayer2+" Work1:"+$App.work01+" Work2: "+$App.work02+" "+$App.work02+" "+$App.work03+" "+$App.work04+" Decisions: "+$App.Decisions01+" "+$App.Decisions02+" "+$App.Decisions03+" "+$App.Decisions04+" "+$App.DecisionsS+" Starkie1: "+$App.Starkie01+" Starkie2 "+$App.Starkie02+" "+$App.Starkie03+" "+$App.Starkie04+" Kingsway1: "+$App.kingsway01+" Kingsway2: "+$App.kingsway02+" Order: "+$App.Order01+" "+$App.Order02+" Reset: "+$App.Reset01+" "+$App.Reset02+" Health:"+$App.health01+" "+$App.health02+" "+$App.health03+" "+$App.health04+" "+$App.health10+" "+$App.health11+" "+$App.health12+" "+$App.health13+" Deciosions"+$App.DecisionsS+$App.Decisions01+$App.Decisions02+$App.Decisions03+$App.Decisions04+"--- PHQ1: "+$App.WPQ01+" PHA1: "+$App.WPQA01+"---PHQ2: "+$App.WPQ02+" PHA3: "+$App.WPQA03+"=== PHQ4: "+$App.WPQ04+" PHA4: "+$App.WPQA04+" --- PHQ5: "+$App.WPQ05+" PHA5: "+$App.WPQA05+"---PHQ6: "+$App.WPQ06+" PHA6: "+$App.WPQA06+"=== PHQ7: "+$App.WPQ07+" PHA7: "+$App.WPQA07+"---PHQ8: "+$App.WPQ08+" PHA8: "+$App.WPQ08+" PHA8: "+$App.WPQA09+"---PH10: "+$App.WPQ10+" PHA10: "+$App.WPQA10+"=== PHQ11: "+$App.WPQ11+" PHA11: "+$App.WPQA11+"---PH12: "+$App.WPQ12+" PHA12: "+$App.WPQA12+"==="+$App.WPQA12+"===PHA13: "+$App.WPQA13+"=== PHQ13: "+$App.WPQ14+" PHA13: "+$App.WPQA13+" --- PHQ14: "+$App.WPQ15+" PHA5: "+$App.WPQA15+"---PHQ16: "+$App.WPQ16+" PHA16: "+$App.WPQA16+"=== ";
$scope.DisableObject("PushButton39",false);};
$scope.PushButton45_click = function() {window.open("mailto:SilverbirdApp@outlook.com", "_blank");
navigator.clipboard.writeText($App.DateInputwork);};
});
NeoApp.controller("Title_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 81;
$App.NAB.PageID = "Title";
$scope.TextInput2_change = function() {localStorage.setItem("Title21",$App.Title21);};
$scope.PushButton56_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.TextArea69_change = function() {localStorage.setItem("Title22",$App.Title22);};
});
NeoApp.controller("TestNew31524_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 82;
$App.NAB.PageID = "TestNew31524";
$scope.PushButton212_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.PushButton214_click = function() {$scope.GotoPrevPage();};
$scope.PushButton238_click = function() {$scope.SetObjectStyle("Container1","background-color","#32B500");};
$scope.Pager53_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager53_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton264_click = function() {$scope.GotoPage( "T1" );};
});
NeoApp.controller("arizinapopup_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 83;
$App.NAB.PageID = "arizinapopup";
$scope.PushButton256_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Listbox1_change = function() {if ($App.Listbox1 == "Ariizona") {
$App.correct = "Yes with two iis";
$scope.ShowObject("Paragraph4","",0);
} else {
$scope.HideObject("Paragraph4","",0);
};
if ($App.Listbox1 == "Alaska") {
$App.correct = "Yes with it cold up there";
$scope.ShowObject("Listbox2","",0);
} else {
$scope.HideObject("Listbox2","",0);
};
if ($App.Listbox1 == "Arkansas") {
$App.correct = "Yes dont kwow much about Arkansas";
} else {
};};
$scope.Pager54_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager54_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("Ai-ADHD1_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 84;
$App.NAB.PageID = "Ai-ADHD1";
$scope.PushButton257_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Listbox3_change = function() {if ($App.Listbox1 == "Ariizona") {
$App.correct = "Yes with two iis";
$scope.ShowObject("Paragraph4","",0);
} else {
$scope.HideObject("Paragraph4","",0);
};
if ($App.Listbox1 == "Alaska") {
$App.correct = "Yes with it cold up there";
$scope.ShowObject("Listbox2","",0);
} else {
$scope.HideObject("Listbox2","",0);
};
if ($App.Listbox1 == "Arkansas") {
$App.correct = "Yes dont kwow much about Arkansas";
} else {
};};
$scope.Pager55_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager55_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("ADHD-Procrastination_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 85;
$App.NAB.PageID = "ADHD-Procrastination";
$scope.PushButton258_click = function() {$scope.GotoPage( "TreeHome" );};
$scope.Listbox10_change = function() {if ($App.Listbox10 == "Short attention span") {
$App.correct10 = "Yes with two iis";
} else {
};
if ($App.Listbox10 == "Procrastination") {
$App.correct10 = "Yes I will do it later";
} else {
};
if ($App.Listbox10 == "Arkansas") {
$App.correct10 = "Yes dont kwow much about Arkansas";
} else {
};};
$scope.Pager56_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager56_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("NewDialog_Ctrl", function($scope,$rootScope,$modalInstance,$filter,$window) {
 $scope.CloseDialog = function() {
  $modalInstance.close();
 };
});
function neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine){$App[theArray]=new Array();sheetrock({url:gsheets,query:sqlquery,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoad error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=0;n<response.rows.length;n++){$App[theArray][n]=new Object();for(i=0;i<response.rows[n].cellsArray.length;i++){etiqueta=response.rows[n].labels[i];$App[theArray][n][etiqueta]=response.rows[n].cellsArray[i];}}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadColumn(gsheets,theArray,columnLetter,subroutine){$App[theArray]=new Array();columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadColumn error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=1;n<response.rows.length;n++){$App[theArray][n-1]=response.rows[n].cellsArray[0];}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadCell(gsheets,myVar,columnLetter,rowNumber,subroutine){rowNumber--;columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadCell error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{$App[myVar]=response.rows[rowNumber].cellsArray[0];if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadAsTable(objId,gsheets,sqlquery,subroutine){$('#'+objId).html('<table id="'+objId+'neoGSheets" class="table table-striped"></table>');$('#'+objId+'neoGSheets').sheetrock({url:gsheets,fetchSize:0,reset:true,query:sqlquery,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadAsTable error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else if(subroutine){subroutine(error,options,response);}}});};function neoGSheetsLoadByName(gsheets,theArray,fieldPrefix,sqlquery,subroutine){console.log("neoGSheetsLoadByName - ");sheetrock({url:gsheets,query:"select *",fetchSize:1,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadByName error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{columnIDStr1="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";columnIDStr2="AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,";columnIDStr3="BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ";columnIDStr=columnIDStr1+columnIDStr2+columnIDStr3;columnIDArray=columnIDStr.split(",");for(i=0;i<response.rows[0].cellsArray.length;i++){columnID=columnIDArray[i];fieldName=response.rows[0].labels[i];console.log("neoGSheetsLoadByName column for field "+fieldName+" is "+columnID);var regexstring=fieldPrefix+fieldName;var regexp=new RegExp(regexstring,"g");sqlquery=sqlquery.replace(regexp,columnID);}console.log("neoGSheetsLoadByName sqlquery: "+sqlquery);neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine);}}});};
