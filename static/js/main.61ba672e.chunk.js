(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/bio-background.a0179b58.jpg"},13:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(7),c=a.n(r),o=a(1),s=(a(18),Object(l.createContext)()),i=(a(3),{fontFamily:"PixelMplus12-Regular",color:"white"}),u={fontFamily:"PixelMplus12-Regular",color:"white",whiteSpace:"pre-line"},m=function(e){var t=e.diary,a=Object(l.useContext)(s).dispatch,r=t.id;return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",{style:i},t.createdAt),n.a.createElement("td",{style:u},t.body),n.a.createElement("td",null,n.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){a({type:"OPEN_ALERT",id:r})},style:i},"\u524a\u9664"))))},d={fontFamily:"PixelMplus12-Regular",color:"white"},E=function(){var e=Object(l.useContext)(s),t=e.state,a=e.dispatch;return console.log(t),n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"text-center",style:d},"taisyo\u306e\u8a18\u9332"),n.a.createElement("button",{className:"btn btn-outline-light",onClick:function(){a({type:"OPEN_DIARYFORM"})},style:d},"\u8a18\u9332\u3092\u3064\u3051\u308b"),n.a.createElement("h4",null,"\u8a18\u9332\u4e00\u89a7"),n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{style:d},"\u65e5\u6642"),n.a.createElement("th",{style:d},"\u672c\u6587"),n.a.createElement("th",null))),n.a.createElement("tbody",null,t.diaries.map(function(e,t){return n.a.createElement(m,{key:t,diary:e})}))))},p={fontFamily:"PixelMplus12-Regular",color:"white"},f={fontFamily:"PixelMplus12-Regular"},y={fontFamily:"PixelMplus12-Bold",color:"white"},b={fontFamily:"PixelMplus12-Regular",color:"white",backgroundColor:"transparent"},h=function(){var e=Object(l.useContext)(s).dispatch,t=Object(l.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(l.useState)(""),u=Object(o.a)(i,2),m=u[0],d=u[1],E=""===r;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"text-center",style:p},"taisyo\u306e\u8a18\u9332"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"formDiaryBody",style:y},"\u8a18\u9332\u3092\u3064\u3051\u308b"),n.a.createElement("textarea",{className:"form-control",id:"formDiaryBody",rows:"10",value:r,onChange:function(e){return c(e.target.value)},style:b,placeholder:"\u8a18\u9332\u3092\u8a18\u5165"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"formPassword",style:y},"\u524a\u9664\u30d1\u30b9\u30ef\u30fc\u30c9"),n.a.createElement("input",{className:"form-control",id:"formPassword",value:m,onChange:function(e){return d(e.target.value)},style:b,placeholder:"\u4f8b\uff1ascdafg"})),n.a.createElement("div",{className:"text-center"},n.a.createElement("button",{className:"btn btn-outline-light",onClick:function(t){t.preventDefault(),e({type:"CREATE_DIARY",body:r,password:m,createdAt:(new Date).toISOString()}),e({type:"CLOSE_DIARYFORM"})},disabled:E,style:f},"\u8a18\u9332\u3059\u308b"))),n.a.createElement("button",{className:"btn btn-outline-light",style:f,onClick:function(){e({type:"CLOSE_DIARYFORM"})}},"\u623b\u308b"))},g={fontFamily:"PixelMplus12-Regular"},O=function(){var e=Object(l.useContext)(s),t=e.state,a=e.dispatch,r=Object(l.useState)(""),c=Object(o.a)(r,2),i=c[0],u=c[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal fade "+t.alertOpen.state,tabIndex:"-1",role:"dialog","aria-hidden":"true",style:{display:"show"===t.alertOpen.state?"block":""}},n.a.createElement("div",{className:"modal-dialog",role:"document"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("div",{className:"modal-header"},n.a.createElement("h5",{className:"modal-title",style:g},"\u8a18\u9332\u3092\u672c\u5f53\u306b\u524a\u9664\u3057\u3066\u3082\u826f\u3044\u3067\u3059\u304b\uff1f")),n.a.createElement("div",{className:"modal-body"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"formPassword",style:g},"\u524a\u9664\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),n.a.createElement("input",{className:"form-control",id:"formPassword",value:i,onChange:function(e){return u(e.target.value)},style:g,placeholder:"\u4f8b\uff1ascdafg"})))),n.a.createElement("div",{className:"modal-footer"},n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return a({type:"CLOSE_ALERT"})}},"\u9589\u3058\u308b"),n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){t.diaries.filter(function(e){return e.id===t.alertOpen.id})[0].password===i?(a({type:"DELETE_DIARY",id:t.alertOpen.id}),window.alert("\u524a\u9664\u3055\u308c\u307e\u3057\u305f"),a({type:"CLOSE_ALERT"})):(window.alert("\u524a\u9664\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u7570\u306a\u308a\u307e\u3059"),a({type:"CLOSE_ALERT"}))}},"\u524a\u9664"))))))},v=a(8),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"false";switch((arguments.length>1?arguments[1]:void 0).type){case"OPEN_DIARYFORM":return!0;case"CLOSE_DIARYFORM":return!1;default:return e}},R=a(12),N=a(11),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_DIARY":var a={body:t.body,createdAt:t.createdAt,password:t.password},l=e.length,n=0===l?1:e[l-1].id+1;return[].concat(Object(N.a)(e),[Object(R.a)({id:n},a)]);case"DELETE_DIARY":return e.filter(function(e){return e.id!==t.id});case"DELETE_ALL_DIARIES":return[];default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"",id:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_ALERT":return{state:"show",id:t.id};case"CLOSE_ALERT":return{state:"",id:""};default:return e}},x=Object(v.a)({formOpen:w,diaries:C,alertOpen:A}),F=a(10),S={backgroundImage:"url(".concat(a.n(F).a,")"),backgroundSize:"cover",width:"100vw",height:"100vh"},j=function(){var e=localStorage.getItem("appWithRedux"),t=e?JSON.parse(e):{formOpen:!1,alertOpen:{state:"",id:""},diaries:[]},a=Object(l.useReducer)(x,t),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(l.useEffect)(function(){localStorage.setItem("appWithRedux",JSON.stringify(c))},[c]),n.a.createElement(s.Provider,{value:{state:c,dispatch:i}},n.a.createElement("div",{className:"container-fluid",style:S},c.formOpen?n.a.createElement(h,null):n.a.createElement(E,null),n.a.createElement(O,null)))};c.a.render(n.a.createElement(j,null),document.getElementById("root"))},3:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.61ba672e.chunk.js.map