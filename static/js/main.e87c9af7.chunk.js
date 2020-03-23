(this["webpackJsonploft-taxi"]=this["webpackJsonploft-taxi"]||[]).push([[0],{33:function(e,t,a){e.exports={signup:"signup_signup__22NK2",card:"signup_card__RyI-9",form:"signup_form__3OBiD",group:"signup_group__1uUUH",link:"signup_link__2apBC"}},34:function(e,t,a){e.exports={login:"Login_login__3Sovv",card:"Login_card__2G2-q",form:"Login_form__3fX9X",link:"Login_link__CjgD4"}},37:function(e,t,a){e.exports={profile:"Profile_profile__2h_0u",card:"Profile_card__20Q5S",group:"Profile_group__2LM8S"}},59:function(e,t,a){e.exports={menu:"Header_menu__29RXm"}},64:function(e,t,a){e.exports={mapContainer:"map_mapContainer__1QMFu",card:"map_card__3ZLO0"}},70:function(e,t,a){e.exports=a(81)},75:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(75),a(11)),c=a(119),m=a(14),u=a(120),s=Object(u.a)("LOG_IN"),p=Object(u.a)("FAILURE"),d=Object(u.a)("SIGN_UP"),f=Object(u.a)("LOG_OUT"),g=Object(u.a)("ADD_CARD"),b=function(e){var t=e.text;return r.a.createElement(c.a,{to:t,component:i.b,onClick:function(){"logout"===t&&(localStorage.clear(),e.logout())}},t)};b.defaultProps={text:"",logout:function(){}};var h=Object(m.b)((function(e){return{authed:e.authed}}),(function(e){return{logout:function(){return e(f())}}}))(b),E=a(113),x=a(22),v=a(112),y=a(59),_=a.n(y),N=Object(v.a)({bar:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"0 24px",zIndex:10,backgroundColor:"#ffffff"}}),O=function(e){var t=N();return r.a.createElement(E.a,{className:t.bar,position:"fixed"},r.a.createElement(i.b,{to:"/map"},r.a.createElement(x.Logo,null)),e.routes.length&&r.a.createElement("ul",{className:_.a.menu},e.routes.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(h,{text:e}))}))))};O.defaultProps={routes:[]};var S=O,j=a(27),w=a(114),I=a(115),F=a(118),k=a(33),P=a.n(k),C=Object(v.a)({container:{paddingTop:"10vh",maxWidth:"1000px",alignItems:"center",display:"flex"},textField:{marginBottom:"30px",width:"100%"},textFieldGroup:{width:"182px"},title:{fontSize:"36px",marginBottom:"30px"},subtitle:{marginBottom:"30px",display:"flex"}}),B=function(e){var t=C();return r.a.createElement("div",{className:P.a.signup},r.a.createElement(w.a,{className:t.container,maxWidth:"md"},r.a.createElement(x.Logo,{white:!0}),r.a.createElement("div",{className:P.a.card},r.a.createElement(I.a,{variant:"h2",className:t.title},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement(I.a,{variant:"subtitle2",className:t.subtitle},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",r.a.createElement(i.b,{className:P.a.link,to:"/login"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("form",{className:P.a.form,onSubmit:function(t){t.preventDefault(),e.handleSubmit(t.target.email.value,t.target.password.value,t.target.name.value,t.target.surname.value)}},r.a.createElement(F.a,{className:t.textField,type:"email",name:"email",required:!0,label:r.a.createElement("span",null,"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b")}),r.a.createElement("div",{className:P.a.group},r.a.createElement(F.a,{className:t.textFieldGroup,type:"text",name:"name",required:!0,label:r.a.createElement("span",null,"\u0418\u043c\u044f")}),r.a.createElement(F.a,{className:t.textFieldGroup,type:"text",name:"surname",required:!0,label:r.a.createElement("span",null,"\u0424\u0430\u043c\u0438\u043b\u0438\u044f")})),r.a.createElement(F.a,{className:t.textField,type:"password",name:"password",required:!0,label:r.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c")}),r.a.createElement(c.a,{variant:"contained",color:"primary",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))))};B.defaultProps={handleSubmit:function(){}};var D=B,T=function(e){return r.a.createElement(r.a.Fragment,null,e.authed?r.a.createElement(j.a,{to:"/map"}):r.a.createElement(D,{handleSubmit:function(t,a,n,r){e.signup({email:t,password:a,name:n,surname:r})}}))};T.defaultProps={authed:!1,signup:function(){}};var z=Object(m.b)((function(e){return{authed:e.authed}}),(function(e){return{signup:function(t){return e(d(t))}}}))(T),L=a(34),q=a.n(L),J=Object(v.a)({container:{paddingTop:"10vh",maxWidth:"1000px",alignItems:"center",display:"flex"},textField:{marginBottom:"30px",width:"100%"},title:{fontSize:"36px",marginBottom:"30px"},subtitle:{marginBottom:"30px",display:"flex"}}),R=function(e){var t=J();return r.a.createElement("div",{className:q.a.login},r.a.createElement(w.a,{className:t.container},r.a.createElement(x.Logo,{white:!0}),r.a.createElement("div",{className:q.a.card},r.a.createElement(I.a,{variant:"h2",className:t.title},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(I.a,{variant:"subtitle2",className:t.subtitle},"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c?",r.a.createElement(i.b,{className:q.a.link,to:"/signup"},"\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c")),r.a.createElement("form",{className:q.a.form,onSubmit:function(t){t.preventDefault(),e.handleSubmit(t.target.email.value,t.target.password.value)}},r.a.createElement(F.a,{className:t.textField,type:"email",name:"email",required:!0,label:r.a.createElement("span",null,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}),r.a.createElement(F.a,{className:t.textField,type:"password",name:"password",required:!0,label:r.a.createElement("span",null,"\u041f\u0430\u0440\u043e\u043b\u044c")}),r.a.createElement(c.a,{className:q.a.login__submit,variant:"contained",color:"primary",type:"submit"},"\u0412\u043e\u0439\u0442\u0438")))))};R.defaultProps={handleSubmit:function(){}};var X=R,U=function(e){return r.a.createElement(r.a.Fragment,null,e.authed?r.a.createElement(j.a,{to:"/map"}):r.a.createElement(X,{handleSubmit:function(t,a){e.login({email:t,password:a})}}))};U.defaultProps={authed:!1,login:function(){}};var G=Object(m.b)((function(e){return{authed:e.authed}}),(function(e){return{login:function(t){return e(s(t))}}}))(U),W=a(42),A=a(26),M=a(62),Q=a(63),V=a(65),H=a(47),Z=a.n(H),K=a(116),Y=a(64),$=a.n(Y),ee=Object(v.a)({title:{fontSize:"36px",marginBottom:"30px"},text:{fontSize:"16px",marginBottom:"30px"}}),te=function(){var e=ee();return r.a.createElement(K.a,{className:$.a.card},r.a.createElement(I.a,{variant:"h2",className:e.title},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"),r.a.createElement(I.a,{variant:"subtitle1",className:e.text},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."),r.a.createElement(c.a,{className:e.button,to:"profile",component:i.b,variant:"contained",color:"primary"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))};Z.a.accessToken="pk.eyJ1IjoibXlha2ltZW5rbyIsImEiOiJjazV2NGs5bDQwOHBhM25sYjdoejN5YmlhIn0.jrA7S2ccVQ6ZuC3tU9wCbQ";var ae=function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(M.a)(this,Object(Q.a)(t).call(this,e))).state={lng:30.3,lat:59.9,zoom:12},a.mapRef=r.a.createRef(),a}return Object(V.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.lng,n=t.lat,r=t.zoom,l=new Z.a.Map({container:this.mapRef.current,style:"mapbox://styles/mapbox/streets-v9",center:[a,n],zoom:r});l.on("move",(function(){var t=l.getCenter(),a=t.lng,n=t.lat;e.setState({lng:a.toFixed(4),lat:n.toFixed(4),zoom:l.getZoom().toFixed(2)})}))}},{key:"render",value:function(){var e=this.props.cardIsExist;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:this.mapRef,style:{height:"100vh",width:"100vw"},"data-testid":"map"}),!e&&r.a.createElement(te,null))}}]),t}(n.PureComponent);ae.defaultProps={cardIsExist:!1};var ne=Object(m.b)((function(e){return{cardIsExist:e.cardIsExist}}))(ae),re=a(66),le=a(37),oe=a.n(le),ie=Object(v.a)({wrapper:{maxWidth:"630px",padding:"44px 60px",position:"absolute",top:"100px",left:"50%",transform:"translateX(-50%)",textAlign:"center"},textField:{marginBottom:"30px",width:"100%"},title:{fontSize:"36px"},subtitle:{marginBottom:"40px"},card:{maxWidth:"300px",padding:"16px 32px",boxSizing:"border-box"}}),ce=function(e){var t=ie();return r.a.createElement("form",{className:oe.a.form,onSubmit:function(t){t.preventDefault(),e.handleSubmit(t.target.card.value,t.target.surname.value,t.target.date.value,t.target.cvc.value)}},r.a.createElement("div",{className:oe.a.group},r.a.createElement(K.a,{className:t.card},r.a.createElement(F.a,{className:t.textField,type:"number",name:"card",placeholder:"0000000000000000",required:!0,label:r.a.createElement("span",null,"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b")}),r.a.createElement(F.a,{className:t.textField,type:"text",name:"date",placeholder:"mm/yy",required:!0,label:r.a.createElement("span",null,"\u0421\u0440\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f")})),r.a.createElement(K.a,{className:t.card},r.a.createElement(F.a,{className:t.textField,type:"text",name:"surname",placeholder:"name surname",required:!0,label:r.a.createElement("span",null,"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430")}),r.a.createElement(F.a,{className:t.textField,type:"number",name:"cvc",placeholder:"cvc",required:!0,label:r.a.createElement("span",null,"CVC")}))),r.a.createElement(c.a,{type:"submit",variant:"contained",color:"primary"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))};ce.defaultProps={handleSubmit:function(){}};var me=ce,ue=Object(v.a)({wrapper:{maxWidth:"630px",padding:"44px 60px",position:"absolute",top:"100px",left:"50%",transform:"translateX(-50%)",textAlign:"center"},textField:{marginBottom:"30px",width:"100%"},title:{fontSize:"36px"},subtitle:{marginBottom:"40px"},card:{maxWidth:"300px",padding:"16px 32px",boxSizing:"border-box"}}),se=function(e){var t=ue();return r.a.createElement("div",{className:oe.a.profile},r.a.createElement(re.a,{className:t.wrapper},r.a.createElement(I.a,{variant:"h2",className:t.title},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(I.a,{variant:"subtitle2",className:t.subtitle},"\u0421\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b"),e.cardIsExist?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438."),r.a.createElement(c.a,{to:"map",component:i.b,variant:"contained",color:"primary"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443")):r.a.createElement(me,{handleSubmit:function(t,a,n,r){e.addCard({number:t,name:a,date:n,cvc:r})}})))};se.defaultProps={addCard:function(){},cardIsExist:!1};var pe=Object(m.b)((function(e){return{cardIsExist:e.cardIsExist}}),(function(e){return{addCard:function(t){return e(g(t))}}}))(se),de=a(2),fe=function(e){var t=e.component,a=Object(de.a)(e,["component"]);return r.a.createElement(j.b,{render:function(){return a.authed?r.a.createElement(t,a):r.a.createElement(j.a,{to:"/login",component:G})}})},ge=["map","profile","logout"],be=function(e){return r.a.createElement(i.a,null,e.authed&&r.a.createElement(S,{routes:ge}),r.a.createElement(j.d,null,r.a.createElement(j.b,{path:"/login",component:G}),r.a.createElement(j.b,{path:"/signup",component:z}),r.a.createElement(fe,{path:"/profile",component:pe,authed:e.authed}),r.a.createElement(fe,{path:"/",component:ne,authed:e.authed}),r.a.createElement(j.b,{path:"*",component:G}),r.a.createElement(j.a,{to:"/"})))};be.defaultProps={authed:!1};var he=Object(m.b)((function(e){return{authed:e.authed}}))(be),Ee=a(117),xe=a(28),ve=a(35),ye={authed:!!localStorage.getItem("user"),user:{email:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).email:"",password:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).info:"",name:"",surname:""},card:{number:"",name:"",date:"",cvc:""},cardIsExist:!1,error:!1},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.toString():return Object(ve.a)({},e,{authed:!0,user:{email:t.payload.email,password:t.payload.password}});case d.toString():return Object(ve.a)({},e,{authed:!0,user:{email:t.payload.email,password:t.payload.password,name:t.payload.name,surname:t.payload.surname}});case f.toString():return Object(ve.a)({},e,{authed:!1,user:{email:"",password:""}});case g.toString():return Object(ve.a)({},e,{card:{number:t.payload.number,name:t.payload.name,date:t.payload.date,cvc:t.payload.cvc},cardIsExist:!0});case p.toString():return Object(ve.a)({},e,{error:!0,errorMessage:t.payload});default:return e}},Ne=function(e){return function(t){return function(a){return a.type===g.toString()&&fetch("https://loft-taxi.glitch.me/card",{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify({cardNumber:a.payload.number,expiryDate:a.payload.date,cardName:a.payload.name,cvc:a.payload.cvc,token:"AUTH_TOKEN"})}).then((function(e){return e.json()})).then((function(){return e.dispatch(a.payload)})).catch((function(e){return p(e)})),t(a)}}},Oe=function(e){return function(t){return function(a){return a.type===s.toString()&&fetch("https://loft-taxi.glitch.me/auth",{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify({email:a.payload.email,password:a.payload.password})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify({email:a.payload.email,info:e.token}))})).then((function(){return e.dispatch(a.payload)})).catch((function(e){return p(e)})),t(a)}}},Se=function(e){return function(t){return function(a){return a.type===d.toString()&&fetch("https://loft-taxi.glitch.me/register",{method:"POST",headers:{"content-Type":"application/json"},body:JSON.stringify({email:a.payload.email,password:a.payload.password,name:a.payload.name,surname:a.payload.surname})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("user",JSON.stringify({email:a.payload.email,info:e.token}))})).then((function(){return e.dispatch(a.payload)})).catch((function(e){return p(e)})),t(a)}}},je=function(){return Object(xe.d)(_e,Object(xe.c)(Object(xe.a)(Ne),Object(xe.a)(Oe),Object(xe.a)(Se),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}))}();o.a.render(r.a.createElement(m.a,{store:je},r.a.createElement(Ee.a,{theme:x.theme},r.a.createElement(he,null))),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e87c9af7.chunk.js.map