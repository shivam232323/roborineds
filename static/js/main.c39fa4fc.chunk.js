(this.webpackJsonproborineds=this.webpackJsonproborineds||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var i=n(3),s=n(4),l=n(6),u=n(5);var h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"robots"},r.a.createElement("div",{className:"ba br4 b--solid fl  grow tc bg-light-green"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("h1",null,t),r.a.createElement("h3",null,n),r.a.createElement("h4",null,a)))};var m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))};var d=function(e){e.searchfield;var t=e.onsearch;return r.a.createElement("div",{className:"Search"},r.a.createElement("h1",{id:"font"},"RoboFriends"),r.a.createElement("input",{id:"field",type:"text",placeholder:"Search robots",onChange:t}))},f=(n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).search=function(t){e.setState({searchfield:t.target.value})},e.state={robot:[],searchfield:" "},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robot:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robot.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(d,{onsearch:this.search}),r.a.createElement(m,{robots:t}))}}]),n}(a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.c39fa4fc.chunk.js.map