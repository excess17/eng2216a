(window["webpackJsonppoint-2-d-form-widget"]=window["webpackJsonppoint-2-d-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Point2d successfully saved","dataDeleted":"Point2d successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"point2d":{"deleteDialog":{"title":"Delete point2d","description":"Are you sure?"},"notFound":"Point2d not found","deleted":"Point2d deleted","id":"ID","name":"entities.point2d.name","xcoord":"entities.point2d.xcoord","ycoord":"entities.point2d.ycoord"}}}')},138:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"Point2d salvato/a con successo","dataDeleted":"Point2d eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"point2d":{"deleteDialog":{"title":"Elimina point2d","description":"Sei sicuro/a?"},"notFound":"Point2d non trovato/a","deleted":"Point2d eliminato/a","id":"ID","name":"entit\xe0.point2d.name","xcoord":"entit\xe0.point2d.xcoord","ycoord":"entit\xe0.point2d.ycoord"}}}')},161:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),i=n(12),o=n(6),c=n(11),s=n(79),l=n(40),u=n(0),d=n.n(u),p=n(13),f=n.n(p),h=n(127),b=n.n(h),m=n(331),v=n(335),y=n(329),O=n(149),g=n(18),k=d.a.createContext(null),E=n(47),j=n(92),w=n(39),C={en:n(137),it:n(138)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),x=j.a.t,P=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.point2d.".concat(n))})}}};E.c(t)}(x)},F=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},N={tableAdd:"point2d.table.add",tableSelect:"point2d.table.select"},U={create:"point2d.form.create",update:"point2d.form.update",errorCreate:"point2d.form.errorCreate",errorUpdate:"point2d.form.errorUpdate"},A=n(15),T=n.n(A),R=n(26),M=n(20),z=n(2),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(150));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},q=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},B=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="api/point-2-ds",Y=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},q(),{method:"GET"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},q(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},q(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(R.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},q(),{method:"DELETE"}),e.abrupt("return",B(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(334),ee=n(321),te=n(317),ne=n(5),ae=n(322),re=n(140),ie=n.n(re),oe=n(141),ce=n.n(oe),se=n(139),le=n.n(se),ue=n(142),de=n.n(ue),pe={success:le.a,error:ie.a,info:ce.a},fe={success:3e3,error:null,info:5e3},he=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=pe[s],u=fe[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:p,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};he.SUCCESS="success",he.ERROR="error",he.defaultProps={message:null,className:"",status:he.INFO="info",onClose:function(){}};var be=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(he),me=(L.a.shape({id:L.a.number,name:L.a.string,xcoord:L.a.number,ycoord:L.a.number}),L.a.shape({name:L.a.string,xcoord:L.a.oneOfType([L.a.string,L.a.number]),ycoord:L.a.oneOfType([L.a.string,L.a.number])}),L.a.shape({name:L.a.oneOfType([L.a.bool,L.a.shape()]),xcoord:L.a.oneOfType([L.a.bool,L.a.shape()]),ycoord:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({name:L.a.oneOfType([L.a.string,L.a.shape()]),xcoord:L.a.oneOfType([L.a.string,L.a.shape()]),ycoord:L.a.oneOfType([L.a.string,L.a.shape()])}),n(148)),ve=n(151),ye=n(327),Oe=n(328),ge=n(330),ke=n(333),Ee=n(326),je=n(324),we=n(325),Ce=n(323),Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Ce.a,{id:"confirmation-dialog-title"},a),d.a.createElement(je.a,null,d.a.createElement(we.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Ee.a,null,d.a.createElement(ye.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ye.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Se.CONFIRM="CONFIRM",Se.DISCARD="DISCARD";var De=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Se.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,p=e.t,f=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"point2d-form"},d.a.createElement(Oe.a,{container:!0,spacing:2},d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point2d-name",error:r.name&&a.name,helperText:f("name"),className:t.textField,onChange:i,onBlur:o,value:n.name,name:"name",label:p("entities.point2d.name")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point2d-xcoord",error:r.xcoord&&a.xcoord,helperText:f("xcoord"),className:t.textField,type:"number",onChange:i,onBlur:o,value:n.xcoord,name:"xcoord",label:p("entities.point2d.xcoord")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point2d-ycoord",error:r.ycoord&&a.ycoord,helperText:f("ycoord"),className:t.textField,type:"number",onChange:i,onBlur:o,value:n.ycoord,name:"ycoord",label:p("entities.point2d.ycoord")})),s&&d.a.createElement(Se,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:p("entities.point2d.deleteDialog.title"),description:p("entities.point2d.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ye.a,{onClick:t,disabled:u},p("common.delete"))}}),d.a.createElement(ye.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},p("common.cancel")),d.a.createElement(ye.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},p("common.save"))))}}]),t}(u.PureComponent);De.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var xe={name:"",xcoord:"",ycoord:""},Pe={mapPropsToValues:function(e){return e.point2d||xe},enableReinitialize:!0,validationSchema:E.b().shape({name:E.d(),xcoord:E.a(),ycoord:E.a()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"Point2dForm"},Fe=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(Pe))(De),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(R.a)(T.a.mark((function e(){var t,n,a,r,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:i=e.sent,this.setState((function(){return{point2d:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t);case 6:c=e.sent,r(c),this.setState({point2d:c,notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({point2d:null,notificationMessage:a("common.dataDeleted"),notificationStatus:be.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:be.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.point2d;return e="undefined"===typeof s?r("entities.point2d.notFound"):null===s?r("entities.point2d.deleted"):d.a.createElement(Fe,{point2d:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(be,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ne.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Ue=H(Object(w.b)()(Ne)),Ae=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(R.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:be.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(Fe,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(be,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ae.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Te=H(Object(w.b)()(Ae));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=function(){return window&&window.entando&&window.entando.keycloak&&Me({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Le={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Ie=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=ze(),n.onCreate=F(U.create),n.onCancelEditing=F(U.cancelEditing),n.onDelete=F(U.delete),n.onUpdate=F(U.update),n.onErrorCreate=F(U.errorCreate),n.onErrorUpdate=F(U.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Le).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Le.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Me({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Me({},ze(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Me({},ze(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=N.tableAdd,a=N.cancelEditing,r=N.create,i=N.edit,o=N.delete,c=N.tableSelect,s=N.update,l=Le.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Le.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(N),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Le.serviceUrl)||"";if("true"===this.getAttribute(Le.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Le.locale);P(t);var n=this.getAttribute(Le.id),a=n?d.a.createElement(Ue,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Te,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(y.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Le)}}]),t}(Object(s.a)(HTMLElement));customElements.define("point-2-d-form",Ie)}},[[161,1,2]]]);
//# sourceMappingURL=main.89830086.chunk.js.map