(this.webpackJsonpgastosemanal=this.webpackJsonpgastosemanal||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(14),a(15),a(1)),s=(a(16),function(e){var t=e.children,a=e.vertical?"modal__document modal__document--centered":"modal__document";return c.a.createPortal(r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:a},r.a.createElement("div",{className:"modal__content"},t))),document.body)});s.defaultProps={vertical:!0};var m=s,u=function(e){var t=e.children;return r.a.createElement("div",{className:"modal__header"},t)},i=function(e){var t=e.children;return r.a.createElement("p",{className:"modal__title"},t)},d=function(e){var t=e.children;return r.a.createElement("div",{className:"modal__body"},t)},g=function(e){var t=e.children;return r.a.createElement("div",{className:"modal__footer"},t)},E=(a(17),Object(n.memo)((function(e){var t=e.title,a=e.titleButton,l=e.onSubmit,c=Object(n.useState)(""),s=Object(o.a)(c,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"question"},r.a.createElement("h2",{className:"question__title"},t),r.a.createElement("form",{className:"question__form",onSubmit:function(e){return l(e,m)}},r.a.createElement("input",{type:"text",className:"question__input",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{className:"btn btn--fill"},a)))})));E.defaultProps={titleButton:"ok"};var b=E,_=a(8),f=a(6),p=a(3),v=(a(18),function(e){var t=e.add,a=Object(n.useState)({name:"",quantity:0}),l=Object(o.a)(a,2),c=l[0],s=l[1],m=function(e){var t=e.target,a=t.value,n=t.name;s((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,a))}))};return r.a.createElement("div",{className:"agregar-gasto"},r.a.createElement("h2",{className:"agregar-gasto__title"},"Agrega tus gastos aqu\xed"),r.a.createElement("form",{className:"agregar-gasto__form",onSubmit:function(e){e.preventDefault(),t(Object(p.a)(Object(p.a)({},c),{},{quantity:parseInt(c.quantity),id:(new Date).getTime()})),s({name:"",quantity:0})}},r.a.createElement("div",{className:"agregar-gasto__group"},r.a.createElement("label",{htmlFor:"name",className:"agregar-gasto__name",placeholder:"Ej. Transporte"},"Nombre Gasto"),r.a.createElement("input",{type:"text",id:"cantidad",name:"name",className:"agregar-gasto__input",onChange:m,value:c.name})),r.a.createElement("div",{className:"agregar-gasto__group"},r.a.createElement("label",{htmlFor:"cantidad",className:"agregar-gasto__name"},"Cantidad Gasto"),r.a.createElement("input",{type:"number",id:"cantidad",name:"quantity",className:"agregar-gasto__input",onChange:m,value:c.quantity})),r.a.createElement("button",{className:"btn btn--fill"},"AGREGAR GASTO")))}),N=(a(19),function(e){var t=e.name,a=e.quantity;return r.a.createElement("li",{className:"gasto"},r.a.createElement("span",{className:"gasto__name"},t),r.a.createElement("span",{className:"gasto__quantity"},"$.",a))}),O=(a(20),function(e){var t=e.gastos;return r.a.createElement("div",{className:"gastos"},r.a.createElement("h2",{className:"gastos__title"},"Listado"),r.a.createElement("ul",{className:"gastos__list"},t.map((function(e){return r.a.createElement(N,{key:e.id,name:e.name,quantity:e.quantity})}))))}),h=(a(21),a(22),function(e){var t=e.text,a=e.color,n=e.textColor;return r.a.createElement("div",{className:"information",style:{backgroundColor:a,borderColor:a,color:n}},t)});h.defaultProps={text:"Ingrese su texto",color:"rgb(196, 225, 253)",textColor:"rgb(44, 82, 121)"};var j=h,y=function(e){var t=e.presupuesto,a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],s=l[1],E=Object(n.useState)(!1),b=Object(o.a)(E,2),f=b[0],p=b[1],N=Object(n.useState)(""),h=Object(o.a)(N,2),y=h[0],q=h[1],C=Object(n.useMemo)((function(){return c.reduce((function(e,t){return e+t.quantity}),0)}),[c]),S=C>=75*t/100?"rgb(246, 210, 213)":C>=50*t/100?"rgb(255, 241, 197)":"rgb(206, 235, 214)";return r.a.createElement("div",{className:"reportesemanal-dashboard"},r.a.createElement("div",{className:"reportesemanal-dashboard__left"},r.a.createElement(v,{add:function(e){e.quantity<=0?(q(r.a.createElement("p",null,"El gasto no puede ser menor o igual a 0")),p(!0)):C+e.quantity>t?(q(r.a.createElement("p",null,"No se puede agregar el gasto ",r.a.createElement("b",null,e.name)," con ",r.a.createElement("b",null,e.quantity))),p(!0)):s([].concat(Object(_.a)(c),[e]))}})),r.a.createElement("div",{className:"reportesemanal-dashboard__right"},r.a.createElement(O,{gastos:c}),r.a.createElement(j,{text:"Presupuesto: $".concat(t),color:"rgb(196, 225, 253)",textColor:"rgb(44, 82, 121)"}),r.a.createElement(j,{text:"Restante: $".concat(t-C),color:S,textColor:"rgb(44, 82, 121)"})),f&&r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement(i,null,"Error")),r.a.createElement(d,null,y),r.a.createElement(g,null,r.a.createElement("button",{className:"btn  btn--align-right",onClick:function(){return p(!1)}},"Ok!"))))},q=(a(23),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),s=Object(o.a)(c,2),E=s[0],_=s[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),v=p[0],N=p[1],O=Object(n.useCallback)((function(e,t){e.preventDefault();var a=parseInt(t);!isNaN(a)&&a>0?(l(a),_(!1)):N(!0)}),[]);return r.a.createElement("div",{className:"gasto-semanal"},r.a.createElement("header",{className:"gasto-semanal__header"},r.a.createElement("h1",{className:"gasto-semanal__title"},"Gasto Semanal")),r.a.createElement("main",{className:"gasto-semanal__main"},E&&r.a.createElement(b,{title:"Coloca tu presuspuesto",onSubmit:O}),!E&&r.a.createElement(y,{presupuesto:a}),v&&r.a.createElement(m,{vertical:"center"},r.a.createElement(u,null,r.a.createElement(i,null,"Error")),r.a.createElement(d,null,r.a.createElement("p",null,"El presupuesto es incorrecto")),r.a.createElement(g,null,r.a.createElement("button",{className:"btn  btn--align-right",onClick:function(){return N(!1)}},"Ok!")))))});var C=function(){return r.a.createElement(q,null)};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.56496416.chunk.js.map