function dark(){window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var t,i,e,s,n=.05,h=document.getElementById("universe"),a=!0,o="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){t=window.innerWidth,i=window.innerHeight,e=.216*t,h.setAttribute("width",t),h.setAttribute("height",i)}function u(){s.clearRect(0,0,t,i);for(var e=c.length,n=0;n<e;n++){var h=c[n];h.move(),h.fadeIn(),h.fadeOut(),h.draw()}}function m(){this.reset=function(){this.giant=y(3),this.comet=!this.giant&&!a&&y(10),this.x=l(0,t-10),this.y=l(0,i),this.r=l(1.1,2.6),this.dx=l(n,6*n)+(this.comet+1-1)*n*l(50,120)+2*n,this.dy=-l(n,6*n)-(this.comet+1-1)*n*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>t||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(s.beginPath(),this.giant)s.fillStyle="rgba("+o+","+this.opacity+")",s.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){s.fillStyle="rgba("+d+","+this.opacity+")",s.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)s.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",s.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),s.fill()}else s.fillStyle="rgba("+r+","+this.opacity+")",s.rect(this.x,this.y,this.r,this.r);s.closePath(),s.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>t-t/4||this.y<0)&&(this.fadingOut=!0)},setTimeout((function(){a=!1}),50)}function y(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){s=h.getContext("2d");for(var t=0;t<e;t++)c[t]=new m,c[t].reset();u()}(),function t(){"dark"==document.getElementsByTagName("html")[0].getAttribute("data-theme")&&u(),window.requestAnimationFrame(t)}()}dark();