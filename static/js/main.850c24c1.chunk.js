(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=16},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),c=(n(15),n(3)),s=n(4),l=n(7),d=n(5),u=n(8),f=n(6),v=new(n.n(f).a),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).answerCall=function(){},n.callUser=function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:!0,audio:!0},function(e){n.myVideo.current.srcObject=e,v.call(n.state.userId,e).on("stream",function(e){n.remoteVideo.current.srcObject=e})},function(e){console.error("Failed to get local stream",e)})},n.myVideo=a.a.createRef(),n.remoteVideo=a.a.createRef(),n.state={userId:"",myId:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,v.on("call",function(t){console.log("user calling",t),navigator.getUserMedia({video:!0,audio:!0},function(n){e.myVideo.current.srcObject=n,t.answer(n),t.on("stream",function(t){e.remoteVideo.current.srcObject=t})},function(e){console.error("Failed to get local stream",e)})})}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("video",{className:"myvid",autoPlay:!0,ref:this.myVideo}),a.a.createElement("video",{className:"remotevid",autoPlay:!0,ref:this.remoteVideo}),a.a.createElement("div",{className:"content"},a.a.createElement("input",{type:"text",placeholder:"user id",value:this.state.userId,onChange:function(t){e.setState({userId:t.target.value})}}),a.a.createElement("button",{onClick:this.callUser.bind(this)},"Call"),a.a.createElement("button",{onClick:function(){e.setState({myId:v._id})}},"Log my details"),a.a.createElement("p",null,"my id: ",this.state.myId)))}}]),t}(o.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/webrtc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/webrtc","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(t,e)})}}()},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.850c24c1.chunk.js.map