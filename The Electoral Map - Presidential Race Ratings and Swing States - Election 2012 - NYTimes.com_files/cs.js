/*MAx*/
ns_p=self.ns_p||{src:"http://b.scorecardresearch.com/b?c1=2&c2=3005403&ns__t="+ +(new Date)};ns_=self.ns_||{};
ns_.max_findUP=function(a,b){var c=new RegExp("[\\/;&\\?,]"+b+"=([^;&]+)");if(c.test(a))return a.match(c)[1]};
ns_.max_ads=ns_.max_ads||[],ns_.max_ads.push({s:"#SponLinkHP,.nytd_google_ads",l:function(){return [this.nodeName=="TABLE"?this.parentNode.id:this.id];}},{s:"comment[text*=ADXINFO]",l:function(){var e=/ADXINFO classification="([^"]+)"/,t=this.parentNode,n;8==this.nodeType&&(n=this.text?this.text:this.textContent?this.textContent:"");if(e.test(n)){var r=n.match(e),i=ns_.max_r("ad[size>=30x30]",t);if(i)return[t.id+"."+r[1],[t]]}}});
function adViz(e,t){var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=2048,l,c="&ns_",h="&",p,d,v,m,g=window,y=g.encodeURIComponent||escape;if(i[o](n)+1)for(v=0,d=i.split(";"),m=d[a];v<m;v++)p=d[v][o](n),p+1&&(s=h+unescape(d[v][u](p+n[a])));e+=c+"_t="+ +(new Date)+c+"c="+(r.characterSet||r.defaultCharset||"")+"&c8="+y(r.title)+s+"&c7="+y(r.URL)+"&c9="+y(r.referrer),e[a]>f&&e[o](h)>0&&(l=e[u](0,f-8).lastIndexOf(h),e=(e[u](0,l)+c+"cut="+y(e[u](l+1)))[u](0,f));if(t)return e;r.images?(p=new Image,g.ns_p||(ns_p=p),p.src=e):r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}ns_=self.ns_||{},typeof ns_=="undefined"&&(ns_={}),ns_.extend=function(e,t){for(var n in t)e[n]=t[n];return e},ns_.encode=typeof encodeURIComponent=="function"?encodeURIComponent:function(e){return escape(e).replace(/\//g,"%2F")},ns_.b={},ns_.b.ie=/MSIE/.test(navigator.userAgent),ns_.b.ie55=
/*@cc_on@if(@_jscript_version<=5.5)!@end@*/0,ns_.b.ie9=ns_.b.ie&&typeof document.addEventListener=="function",ns_.b.sf=typeof navigator.vendor=="string"?/apple/i.test(navigator.vendor):!1,ns_.b.ch=!!window.chrome,ns_.b.ff=typeof navigator.userAgent=="string"?/firefox/i.test(navigator.userAgent):!1,ns_.b.op=!!window.opera,typeof ns_=="undefined"&&(ns_={}),ns_.dt={initDate:(new Date).getTime(),lastRun:(new Date).getTime(),delta:0,intervalID:null,intervalTime:1e3,intervalRuns:0,timedObserver:function(){var e=ns_.dt.getTime();ns_.dt.intervalID=setTimeout(ns_.dt.timedObserver,ns_.dt.intervalTime),ns_.dt.intervalRuns++;var t=e-ns_.dt.lastRun-ns_.dt.intervalTime;if(t>ns_.dt.intervalTime*2||t<-(ns_.dt.intervalTime*2))ns_.dt.delta+=t,e-=t;ns_.dt.lastRun=e},getTime:function(){var e=(new Date).getTime();return e-ns_.dt.delta}},ns_.dt.timedObserver(),ns_=self.ns_||{},ns_.max=ns_.max||function(){function Hn(e){return typeof e=="string"}function Bn(e){return typeof e===St}function jn(e){return typeof e=="number"}function Fn(e){return typeof e!="undefined"}function In(e){return!Fn(e)}function qn(e){return typeof e=="object"}function Rn(t,n){return t&&t[l][e]()==n}function Un(t){return t&&t[l][e]()=="IMG"}function zn(t){return t&&t[l][e]()=="SCRIPT"}function Wn(t){return t&&t[l][e]()=="A"}function Xn(t){return t&&t[l][e]()=="BODY"}function Vn(t){return t&&t[l][e]()=="EMBED"}function $n(e){return e&&e==e.top}function Jn(e){return!$n(e)}function Kn(e,t){e[D]&&e[D](t,"*")}function Qn(e){F[D]&&e&&ir(F,A,e)}function Gn(e,t){var n;return t.getElementsByTagName?n=t.getElementsByTagName(e):e.toLowerCase()==SCRIPT&&document.scripts?n=document.scripts:t.all&&t.all.tags&&(n=t.all.tags(e)),n||[]}function Yn(e,t){var n;ns_.max.crossDomain=ns_.max.crossDomain||[],n=ns_.max.crossDomain;if(In(n[e]))try{n[e]=In(t.NaN)}catch(r){n[e]=!0}return n[e]}function Zn(e,t,n){if(Wt&&Yn(n,e))return!1;try{return e[t]}catch(r){}return!1}function er(e,t){return e[e.length]=t,e}function tr(){return ns_.dt.getTime()}function nr(){return I.hasFocus?I.hasFocus():!0}function ir(e,t,n){var r=!0,i;typeof n==St&&t==xt&&(i=function(){try{n.call(this)}catch(r){}ur(e,t,n)}),i=i||n;if(I.attachEvent)r=e.attachEvent(t.substring(0,1)==t.substring(0,1).toUpperCase()?t:"on"+t,i);else if(I.addEventListener)e.addEventListener(t,i,!1);else{I.layers&&elem==I&&t.toLowerCase()=="click"&&(t="mouseup",elem.captureEvents(Event.MOUSEUP));var s=elem["on"+t];typeof s!=St?elem["on"+t]=i:elem["on"+t]=function(e){s&&s(e),i(e)}}return r&&or(e,t,n,!1,i),r}function sr(e,t,n){ur(e,t,n)}function or(e,t,r,i){rr[rr[n]]=arguments}function ur(e,t,n){jr(rr,function(r,i){var s=r[0],o=r[1],u=r[2],a=r[3],f=!1;f=!n&&s==e&&o==t,f=f||n&&s==e&&o==t&&u==n;if(f)return ar(s,o,u,a),rr.splice(i,1),!1})}function ar(e,t,n,r){typeof n==St&&t==xt&&jr(rr,function(r,i){if(r[0]==e&&r[1]==t&&r[2]==n&&typeof r[4]==St)return n=r[4],!1}),e.detachEvent?e.detachEvent(t.substring(0,1)==t.substring(0,1).toUpperCase()?t:"on"+t,n):typeof e.removeEventListener!="undefined"&&(Ut?e.removeEventListener(t,n):e.removeEventListener(t,n,r))}function fr(){try{jr(rr,function(e,t){typeof e!="undefined"&&e[1]!=xt&&ar(e[0],e[1],e[2],e[3])}),rr=[]}catch(e){}}function lr(e,t,n){var r=0,i=0,s,o,u,a,f;if(!e)return[0,0];e=Ut&&Rn(e,"EMBED")&&Rn(e.parentNode,"OBJECT")?e.parentNode:Rn(e,"OBJECT")?Gn("EMBED",e)[0]||e:e,t=t||document,n=n||t.defaultView||t.parentWindow,o=t.body,u=t.documentElement,Ln=Ln||1;if(Bn(e[wt])&&!Rn(e,"EMBED"))return s=e[wt](),a=n.pageXOffset||u.scrollLeft||o.scrollLeft,f=n.pageYOffset||u.scrollTop||o.scrollTop,Ut&&!en&&(s.left/=Ln,s.top/=Ln,a/=Ln,f/=Ln),[s.left+a,s.top+f];do{e!=o?(r+=e.offsetTop||0,i+=e.offsetLeft||0):(r+=Math.abs(e.offsetTop)||0,i+=Math.abs(e.offsetLeft)||0);if(e.offsetParent==o&&e.style["position"]=="absolute")break}while(e=e.offsetParent);return!t.querySelectorAll&&jn(o.clientTop)&&(r+=o.clientTop,i+=o.clientLeft),[i,r]}function cr(e){var t=0;e=e||window;while(Jn(e))t++,e=e.parent;return t}function hr(e){var t=I.createElement("iframe"),n,r,i;if(!t)return e;t.style.position="absolute",t.style.top="-32000px";if(q.appendChild(t)){try{if(n=t.contentDocument){n.open(),n.writeln("<!DOCTYPE html><html><head><title></title></head><body></body></html>"),n.close();if(i=n.createElement("script")){i.type="text/javascript",i.text='function m(a,b,c,d){var e;return a.sheet.insertRule("@media ("+c+":"+d+") {div {text-decoration: underline} }",0),e=getComputedStyle(b,null).textDecoration=="underline",a.sheet.deleteRule(0),e}function bs(a,b,c,d,e,f,g,h){var i=(e+f)/2;return g==0||f-e<h?i:m(a,b,c,i+d)?bs(a,b,c,d,i,f,g-1,h):bs(a,b,c,d,e,i,g-1,h)}var doc=document,s=doc.createElement("style");n=doc.createElement("div"),doc.body.appendChild(s);var zoom=bs(s,n,"min--moz-device-pixel-ratio","",.1,10,15,1e-4);',n.body.appendChild(i);if(r=t.contentWindow)e=r.zoom||e}}}catch(s){}q.removeChild(t)}return e}function pr(e){var t=F.devicePixelRatio||1,n=I.createElement("div");return n.innerHTML=[1,2,3,4,5].join("<br/>"),n.setAttribute("style","font: 100px/1em sans-serif; -webkit-text-size-adjust:none;visibility:hidden; position:absolute;"),q.appendChild(n),e=500/n.clientHeight,q.removeChild(n),e}function dr(){var e=screen,t=window.top,n=cr(),r,i,s,o,u,a=1,f;if(Qt)return hr(a);if(Wt&&!Jt)return pr(a);if(Ut&&!en){if(q&&q[wt]){s=q[wt](),u=s.right-s.left;if(o=q.offsetWidth)return u/o}}else if(e.logicalXDPI&&e.deviceXDPI)return e.deviceXDPI/e.logicalXDPI;return r=Zn(t,dt,n),i=Zn(t,mt,n),f=Zn(t,"devicePixelRatio",n)||1,jn(r)&&jn(i)&&r&&f?(Kt&&nn?i>r&&(a=8/(i-r)):a=i/(r*f),Jt&&(o=Nr()?e[tt]:e[et],a=a/(i/o)*f),a):1}function vr(t,n){var r,i,s,o;n=n||document,r=n.defaultView||n.parentWindow,i=n.body;if(!t)return[r.pageXOffset||n.documentElement.scrollLeft||i.scrollLeft,r.pageYOffset||n.documentElement.scrollTop||i.scrollTop];var u=lr(t,n),a=u[1],f=u[0],c=t;if(zt)a-=F.pageYOffset,f-=F.pageXOffset;else do if(!F.opera||c[l]&&c[l][e]()=="BODY")s=c.scrollTop||0,o=c.scrollLeft||0,Ut&&!en&&(s/=Ln,o/=Ln),a-=s,f-=o;while(c=c[g]);return[f,a]}function mr(e){var t=["Width","Height"],r=[],i=zt?dr():1;if(e&&e.nodeName!="BODY")return[e.clientWidth||Number(e.width),e.clientHeight||Number(e.height)];for(var s=t[n],o=t[--s];o;o=t[--s])W&&W["client"+o]?r[s]=ot(W["client"+o]*i):jn(F["inner"+o])?r[s]=ot(F["inner"+o]*i):r[s]=ot(document.body["client"+o]*i);return r}function gr(e,t,n,r){return n=n||0,r=r||0,{left:e,top:t,width:n,height:r,area:n*r}}function yr(e,t){var n,r,i,s,o={};return t.area?(n=e[Y]+e[et],r=e[Z]+e[tt],i=t[Y]+t[et],s=t[Z]+t[tt],(t[Y]>=e[Y]&&t[Y]<=n||e[Y]>=t[Y]&&e[Y]<=i)&&(t[Z]>=e[Z]&&t[Z]<=r||e[Z]>=t[Z]&&e[Z]<=s)?(o[Y]=st(t[Y],e[Y]),o[Z]=st(t[Z],e[Z]),o[et]=it(i,n)-o[Y],o[tt]=it(s,r)-o[Z],o):null):e}function br(e,t,n,r){var i=ut({},t),s=1;i[Tt]=!1;while(e[Y]+e[et]*s<=i[Y])i[Y]-=n,i[Tt]=!0;while(e[Y]+e[et]*(1-s)>=i[Y]+i[et])i[Y]+=n,i[Tt]=!0;while(e[Z]+e[tt]*s<=i[Z])i[Z]-=r,i[Tt]=!0;while(e[Z]+e[tt]*(1-s)>=i[Z]+i[tt])i[Z]+=r,i[Tt]=!0;return i[Tt]&&(i[et]=n,i[tt]=r),i}function wr(e,t){var n=0,r,i=0,s=F,o,a,f,l=0,c,h,p;c=Cr(F),h=c.box;if(t){t[H+"vsd"]=ot(h[et])+u+ot(h[tt]),t[H+"sd"]=ot(c.fw)+u+ot(c.fh);if(h[Y]||h[Z])t[H+"vsp"]=ot(h[Y])+u+ot(h[Z])}if(zt&&In(ns_.max.operaFirstLoad))return ns_.max.operaFirstLoad=!1,0;On=r=kr(F,n,c,e);if(!(r.flags&Lt))return 1;p=r[rt];if(r.visible&&p.area){a=r[rt];while(Jn(s)&&a)s=s.parent,o=kr(s,++n,c,e),o.flags&Lt&&(p=o[rt],a=yr(a,p),$n(s)&&(h=br(p,h,c.fw,c.fh)));$n(F)&&(h=br(p,h,c.fw,c.fh)),a&&(!h[Tt]||p[et]<=h[et]&&p[tt]<=h[tt])&&(a=yr(a,h)),a&&r.box.area&&(i=it(a[et],r.box[et])*it(a[tt],r.box[tt]))}t&&s==s[Z]&&(t[H+"vvd"]=ot(p[et])+u+ot(p[tt]),t[H+"vvp"]=ot(p[Y])+u+ot(p[Z])),a&&i&&e&&(f=Lr(e,F,r,0),p=f.box,a=yr(a,p),a&&p.area&&(l=it(a[et],p[et])*it(a[tt],p[tt])),t&&(t[H+"vad"]=ot(p[et])+u+ot(p[tt]),t[H+"vap"]=ot(p[Y])+u+ot(p[Z])));var d=e?f&&f.box.area?l/f.box.area:0:r&&r.box.area?i/r.box.area:0;return d}function Er(e,t){var n;if($n(e)&&!zt&&!Ut)n=Zn(e,yt,t)||window[yt]||Zn(e,J,t)||window[J];else if($n(e)||zt)n=Zn(e,yt,t),tn?n=n||window[J]:n=n||Zn(e,J,t);return jn(n)&&!zt&&!Wt&&(!Ut||en)&&(n*=Ln),n}function Sr(e,t){var n;if($n(e)&&!zt&&!Ut)n=Zn(e,bt,t)||window[bt]||Zn(e,K,t)||window[K];else if($n(e)||zt)n=Zn(e,bt,t),tn?n=n||window[K]:n=n||Zn(e,K,t);return jn(n)&&!zt&&!Wt&&(!Ut||en)&&(n*=Ln),n}function xr(e,t){function n(n,r){return Zn(e,n,t)||r}if(!e)return!0;var r=n("PAGE_HIDDEN","hidden"),i=n("PAGE_VISIBLE","visible"),s=n("PAGE_PREVIEW","preview"),o=n("PAGE_PRERENDER","prerender"),u=n("visibilityState")||n(ct+lt)||n(at+lt)||n("o"+lt)||n("ms"+lt),a=n("hidden")||n(ct+ft)||n(at+ft)||n("o"+ft)||n("ms"+ft);return a!==void 0?!a:u!==void 0?u==i||u==1:!0}function Tr(e,t){return!t&&jn(e[Ct])?Pn:xr(Zn(e,"document",t),t)}function Nr(){var e=Zn(F,"screen",0)||screen;return Jt?$n(F)?Zn(F,Nt,0)==90||Zn(F,Nt,0)==-90:Zn(F,mt,0)>Zn(F,gt,0):e[et]>e[tt]}function Cr(e,t){function p(t,n){return Zn(e,t,0)||n}function d(t,n){return Zn(e.screen,t,0)||n}var n=p("fullScreen",!1),r,i,s,o,u,a,f,l,c,h;if(!t&&An)return An;r=d(Y,0),i=d(Z,0),u=s=d(et,0),a=o=d(tt,0);if(rn||sn)u=s=d(mt,s),a=o=d(gt,o);n||(r=d(pt+"Left",r),i=d(pt+"Top",i),s=d(pt+"Width",s),o=d(pt+"Height",o)),Jt&&(Nr()&&(s+=o,o=s-o,s-=o,u+=a,a=u-a,u-=a),o<a&&i===0&&(i=a-o));if(en||Kt)r*=Ln,i*=Ln,s*=Ln,o*=Ln,u*=Ln,a*=Ln;return{fullScreen:n,fw:u,fh:a,box:gr(r,i,s,o)}}function kr(e,t,n,r){function Y(n,r){var i=Zn(e,n,t);return i!==!1?i:Fn(r)?r:!1}var i=Y("document"),s=Zn(i,"compatMode",t)||"CSS1Compat",o=s=="CSS1Compat"?Zn(i,"documentElement",t):Zn(i,"body",t),u=n.box,a=u.left,f=u.top,l=0,c=0,h=0,p=0,d=0,v=0,m=0,g=0,y=0,w=0,E=0,x=0,T=0,N=0,C=0,k=a,L=f,A,O,M=a,_=f,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$;(X=Y("locationbar"))&&X[nt]&&(C|=Pt),(X=Y("menubar"))&&X[nt]&&(C|=Ht),(X=Y("personalbar"))&&X[nt]&&(C|=Bt),(X=Y("scrollbars"))&&X[nt]&&(C|=jt),(X=Y("statusbar"))&&X[nt]&&(C|=Ft),(X=Y("toolbar"))&&X[nt]&&(C|=It);if($n(e)||zt)a=Er(e,t),f=Sr(e,t),jn(a)&&jn(f)&&(C|=Lt);ns_.max.mouseMoveInfo=ns_.max.mouseMoveInfo||[],V=ns_.max.mouseMoveInfo[t],jn(Y(at+"InnerScreenX"))&&(a=Y(at+"InnerScreenX",0),f=Y(at+"InnerScreenY",0),jn(f)&&(a*=Ln,f*=Ln,C|=Lt));if(Jn(e)&&!(C&Lt)){a=f=0,I=e,q=Y("parent"),R=t+1;while(q){if((U=Zn(I,"frameElement",R-1))&&(z=Zn(q,"document",R))&&Zn(z,b,R))F=vr(U,z),a+=F[0]*Ln,f+=F[1]*Ln,C|=Lt;else if(C&Lt){C^=Lt;break}if($n(q)){parentWindowScreenLeft=Er(q,R),parentWindowScreenTop=Sr(q,R),a+=parentWindowScreenLeft,f+=parentWindowScreenTop;if(W=ns_.max.mouseMoveInfo[R])W.updateBrowserMargins(parentWindowScreenLeft,parentWindowScreenTop),a+=W[ht+"Left"],f+=W[ht+"Top"];q=null}else I=q,q=Zn(q,"parent",R++)}}V||(ns_.max.mouseMoveInfo[t]=V={detected:!1,clientX:0,clientY:0,screenX:0,screenY:0,browserMarginTop:0,browserMarginLeft:0,initBrowserMargins:function(){var n=Yn(t,e),r=!n,i=0;if(Jn(e)||zt)return;Rt?Wt&&r?i=Jt?75:74:Gt&&n&&(i=85):n?tn?i=54:Qt?i=63:Kt&&(i=107):Wt&&(Xt?i=85:Vt&&(Jt?i=93:i=$t?192:79)),V[ht+"Top"]=i,ns_.max[ht+"Top"]=i},updateBrowserMargins:function(t,n){var r=V,i=r[J]-r[Q],s=r[K]-r[G];if(!r.detected||Ut)return;!zt&&$n(e)&&C&Lt&&(i!=t||s!=n)&&(r[ht+"Left"]=i-t,r[ht+"Top"]=s-n)},handler:function(t){var n=V;t=t||e.event,n[Q]=t[Q],n[G]=t[G];if(!Ut||en)n[Q]*=Ln,n[G]*=Ln;n[J]=t[J],n[K]=t[K];if(zt||en)n[J]*=Ln,n[K]*=Ln;n.detected=!0}},V.initBrowserMargins(),o&&ir(o,S,V.handler)),o&&Zn(o,"fireEvent",t)&&(ns_.max.fireEvent=!0,o.fireEvent("on"+S),ns_.max.fireEvent=!1),V.detected&&(V.updateBrowserMargins(a,f),V.detected=!1,Ut&&(a=V[J]-V[Q],f=V[K]-V[G],C|=Lt)),!n.fullScreen&&$n(e)&&C&Lt&&(a+=V[ht+"Left"],f+=V[ht+"Top"]);if($n(e)){l=Y(mt,window[mt]),c=Y(gt,window[gt]);if(l||c)!zt&&!Wt&&(l*=Ln,c*=Ln),nn&&a<0&&ot(l+2*a)==ot(u.width)&&(a=0,l=u.width),C|=At}h=Zn(o,"clientLeft",t)||0,p=Zn(o,"clientTop",t)||0,d=Zn(o,"clientWidth",t)||0,v=Zn(o,"clientHeight",t)||0;if(d||v){if(!Ut||en||!t&&Jn(window))h*=Ln,p*=Ln,d*=Ln,v*=Ln;C|=Ot}m=Y("innerWidth",0),g=Y("innerHeight",0);if(m||g){if(!zt||$n(e))m*=Ln,g*=Ln;C|=Mt}if(o&&Bn(Zn(o,wt,t))){var Z=o[wt]();if(Z){y=Z.left,w=Z.top;if(!Ut)if(Z.bottom==0){var et=mr(r);E=Z.right-Z.left,x=et[1]-Z.top}else if(Z.right==0){var et=mr(r);E=et[0]-Z.left,x=Z.bottom-Z.top}else E=Z.right-Z.left,x=Z.bottom-Z.top;else E=Zn(o,"scrollWidth",t),x=Zn(o,"scrollHeight",t);Ut&&!en&&(y/=Ln,w/=Ln,E/=Ln,x/=Ln),C|=_t}}else if(o){y=Zn(o,"offsetLeft",t),w=Zn(o,"offsetTop",t),E=Zn(o,"scrollWidth",t)||Zn(o,"offsetWidth",t),x=Zn(o,"scrollHeight",t)||Zn(o,"offsetHeight",t);if(E||x)C|=_t}return C&_t&&(y*=Ln,w*=Ln,E*=Ln,x*=Ln),jn(Y("pageXOffset"))||jn(Y("scrollX"))?(T=Y("pageXOffset",0)||Y("scrollX",0)||0,N=Y("pageYOffset",0)||Y("scrollY",0)||0):o&&(T=Zn(o,"scrollLeft",t)||0,N=Zn(o,"scrollTop",t)||0),(T||N)&&(!Ut||en)&&(T*=Ln,N*=Ln,C|=Dt),Ut&&(y-=T,w-=N),C&Lt&&(k=a,L=f,M=a,_=f,C&Dt&&(M-=T,_-=N)),C&At&&(A&&O?(A=it(l-V[ht+"Left"],A),O=it(c-V[ht+"Top"],O)):(A=l-V[ht+"Left"],O=c-V[ht+"Top"])),C&Mt&&(A=m,O=g),C&Ot&&(k+=h,L+=p,A=d,O=v),C&_t&&(C&Ot||(k+=y,L+=w),D=E,P=x),$=Tr(e,t),{visible:$,flags:C,scrX:T,scrY:N,box:gr(M,_,D,P),visibleBox:gr(k,L,A,O)}}function Lr(e,t,n,r){function f(e,t){return Zn(i,e,r)||t||!1}var i=Ut&&Rn(e,"EMBED")&&Rn(e.parentNode,"OBJECT")?e.parentNode:Rn(e,"OBJECT")?Gn("EMBED",e)[0]||e:e,s=mr(e),o=s[0],u=s[1],a=vr(!Ut&&Rn(i,"OBJECT")?i.childNodes[0]:i,Zn(t,"document",r));return Xn(i)&&i.ownerDocument&&(o=n.visibleBox.width/Ln,u=n.visibleBox.height/Ln),o*=Ln,u*=Ln,{box:gr(n.visibleBox.left+a[0]*Ln,n.visibleBox.top+a[1]*Ln,o,u)}}function Ar(e,t,n){function s(e,t,n){function f(e,t){er(i,[e,"=",t].join(""))}var i=[],s=[],o=r.labels,u=r.p,a=ot(Ln*100);for(var l in o)In(s[l])&&(f(l,o[l]),s[l]=!0);return ns_.max[ht+"Top"]&&f(H+"tb",ns_.max[ht+"Top"]),a!=100&&f(H+"zm",a),u.lastIndexOf("&")<u.length-1&&(u+="&"),adViz(u+i.join("&"),n)}var r=this,i={};i[H+"sv"]=En,r.process=s,ut(r,{a:e,p:n||wn,labels:i}),e&&ut(r.labels,e.l),ut(r.labels,Or(t))}function Or(e){var t={},r="__i;__n;c1;ax_g";if(!e)return t;if(!Hn(e)&&e[n]){if(!Hn(e[0])&&e[0][n]==2)for(var i=0,s=e[n],o=e[i];i<s;o=e[++i])t[o[0]]=o[1];else if(Hn(e[0]))for(var i=0,s=e[n],o=e[i];i<s;o=e[++i])if(o.indexOf("=")!=-1){var u=o.split("=");t[u[0]]=u[1]}}else if(Hn(e)){var a=e.replace("&amp;","&").split("&");for(var i=0,s=a[n],o=a[i];i<s;o=a[++i])if(o.indexOf("=")!=-1){var u=o.split("=");t[u[0]]=u[1]}}else if(qn(e))for(var i in e)(jn(e[i])||Hn(e[i]))&&r.indexOf(i)==-1&&(t[i]=e[i]);return t}function Mr(e,t,n){var r=[];t=t||"",n=n||"";for(var i in e)Fn(e[i])&&er(r,t+i+n+"="+e[i]);return r.join("&")}function _r(e,t,n,r){function u(e,t,n){var r=tr()-o,u=Math.max(i.iv,t);o=tr(),e!=s?(e?(i.tv++,i.iv=u):i.vt+=r,s=e):e&&(i.vt+=r,i.iv=u),on&&n&&(i.iv=u)}var i=this,s=!1,o=tr();ut(i,{c:0,n:e,l:Or(t),f:!!n,i:t.__i,u:u,vt:0,iv:0,tv:0,xx:!1,D:e.ownerDocument||I,erase:function(){delete i.n}})}function jr(e,t,n){if(typeof t!=St)return;n=n||this;for(var r in e){if(!e.hasOwnProperty(r))continue;if(t.call(n,e[r],r)===!1)break}}function Fr(e,t,n,r){r=r||",";for(var i in n){if(!n.hasOwnProperty(i)||n[i]===null)continue;var s=t+i;e[s]=X(e[s]?V(e[s])+","+n[i]:n[i])}return e}function Ir(e,t){var n=Cr(F);e(n.box,kr(F,0,n))}function qr(e,t){var n,r=new RegExp(e+"=([^&]+)");return ns_p&&(n=r.exec(ns_p.src))?n[1]:t}function Rr(){var e={ns__p:qr("ns__t",""),c2:qr("c2","1000001"),ns_site:qr("ns_site","")},t="ns_iframe";e[t]=0;if(F!=F.top){e[t]=2;try{e[t]=F.top.location.href?1:2}catch(r){}}Ir(function(t,n){var r=n.visibleBox,i=screen,s=i.width,o=i.height;if(en||Kt)s*=Ln,o*=Ln;Fr(e,H,{sd:ot(s)+u+ot(o),vw:ot(r[et])+u+ot(r[tt]),sc:ot(n.scrX)+u+ot(n.scrY)})});var i=[];jr(pn,function(t,n){var r=mr(t.n),s=lr(t.n);n==0&&(e.c2=t.l.c2||e.c2),t.l.zn&&!i[t.l.zn]&&(er(i,t.l.zn),i[t.l.zn]=1),Fr(e,H,{pl:t.i,sz:ot(r[0])+u+ot(r[1]),po:ot(s[0])+u+ot(s[1])})}),i[n]==1?e[H+"zn"]=i[0]:jr(pn,function(t){Fr(e,H,{zn:t.l.zn||"unknown"})});var s=new Ar(null,e);s.labels.c1="2",s.labels[P+"type"]="hidden",Dr=s.process(!0,!1,!0);if(!Pr){Hr=!1,Pr=I.createElement("iframe"),Pr.src=Dr,Pr.style.position="absolute",Pr.style.top="-32000px",Pr[et]=1;if(_n&&_n.parentNode)Pr=_n.parentNode.appendChild(Pr);else{q=I.body;if(!q)return;Pr=q.appendChild(Pr)}function o(){Hr=!0,jr(Br,Wr),Br=[]}Ut?Pr.onreadystatechange=function(){this.readyState=="complete"&&o()}:Pr.onload=o()}}function Ur(){var e={},t="ag_",n;jr(pn,function(n){!n.xx&&jn(F[Ct])&&(n.xx=n.xx||wr(n.n)>0&&F[Ct]===0),Fr(e,t,{vt:n.vt,iv:n.iv,tv:n.tv,xx:n.xx?1:null})}),Ir(function(n,r){var i=r.visibleBox;Fr(e,t,{vd:ot(i[et])+u+ot(i[tt]),sc:ot(r.scrX)+u+ot(r.scrY),wp:ot(i[Y])+u+ot(i[Z]),f:nr()?1:0})}),n=ot(Ln*100),n!=100&&Fr(e,t,{zm:n}),ns_.max[ht+"Top"]&&Fr(e,t,{tb:ns_.max[ht+"Top"]}),Wr(e)}function zr(e,t,n){n=n||"*";try{In(kt)?e[D](t,n):kt(e,t,n);return}catch(r){}try{e.location=Dr+"#"+t,Pr&&(Pr[et]=Pr[et]>1?1:2)}catch(r){}}function Wr(e){var t,r=[];if(!Dr||!Pr)return;if(!Hr){Br[Br[n]]=e;return}if(!(t=Pr.contentWindow)){Dr="";return}for(var i in e){if(!e.hasOwnProperty(i))continue;r[r[n]]=i+"="+e[i]}e=X("ns__p="+qr("ns__t","")+"&"+r.join("&")),zr(t,e,"*")}function Xr(e){jr(e,function(e){e.erase();var t=-1;jr(pn,function(n,r){n===e&&(t=r)}),t>=0&&pn.splice(t,1)})}function Vr(e){try{Ln=dr(),An=Cr(F,!0);var t=F[Ct];jn(t)&&(Pn=t>Dn,Dn=t),jr(pn,function(e){if(e.D&&!e.D.getElementById(e.n.id))return ii(e);var t=wr(e.n),n=t>dn;on&&(n=n&&nr()),e.f=n,e.u(n,ot(t*100),nr())}),Ur(),pn[n]&&(!ns_.b.ie||ns_.b.ie9)&&$r()}catch(r){}}function $r(){Nn=z(Vr,vn)}function Jr(){Nn&&U(Nn)}function Kr(e){if(!Tn)return;var t=tr();!e||e[c]!=k&&e[c]!=L?t-Sn>gn&&(Jr(),Vr({type:"scroll"}),Sn=t,xn=null):(xn&&U(xn),xn=z(Kr,gn))}function Qr(e){Yr(ut({},e)),Tn=!0,e[c]==N&&z(function(){Tn=!0},100);if(e[c]==A&&e[y]!=F[t])Kn(F[t],[N,"&",location.href].join(""));else for(var r=0,i=F.frames[n];r<i;r++)Kn(F.frames[r],[N,"&",location.href].join(""))}function Gr(e){Yr(ut({},e)),Tn=!1;if(e[c]==A&&e[y]!=F[t])Kn(F[t],[C,"&",location.href].join(""));else for(var r=0,i=F.frames[n];r<i;r++)Kn(F.frames[r],[C,"&",location.href].join(""))}function Yr(e){Cn!=null&&U(Cn),Cn=z(function(){!Tn&&Nn?(Jr(),Vr(e),Jr(),Nn=!1):Tn&&!Nn&&Vr(e),Cn=null},mn)}function Zr(){Mn!=nr()&&((Mn=!Mn)?Qr({type:N}):Gr({type:C})),pn[n]&&z(Zr,mn)}function ei(){un||(ir(F,N,Qr),ir(F,C,Gr)),ir(F,k,Kr),ir(F,L,Kr)}function ti(){ei(),Qn(function(e){if(e[y]==F)return!1;ln.test(e.data)?Qr(e):cn.test(e.data)&&Gr(e)})}function ni(e,t){var r={},i="",s;e=Hn(e)?I.getElementById(e):e;var o=!1;jr(pn,function(t){t.n===e&&(o=!0)});if(o)return!1;t&&zn(t.__n)&&(_n=t.__n),e.id||(e.id="ns_ad"+ +(new Date)),t[kn]&&(bn=Math.ceil(Math.random()*1e8)+""+yn%1e8);if(e[h]===d||e[h]===v)return s=new _r(e,t,!1,pn[n]),er(pn,s),pn[n]==1&&(un&&Zr(),$r()),s}function ri(){return pn[n]}function ii(e){Jr(),xn&&U(xn),Cn&&U(Cn),Xr([e])}var e="toUpperCase",t="parent",n="length",r="undefined",i="string",s="number",o="all",u="x",a="cS",f="node",l=f+"Name",c="type",h=f+"Type",p=3,d=1,v=9,m="nextSibling",g="parentNode",y="source",b="getElementsByTagName",w="mouse",E=w+"over",S=w+"move",x=w+"out",T="click",N="focus",C="blur",k="scroll",L="resize",A="message",O="load",M="un"+O,_="before"+M,D="postMessage",P="ns_",H=P+"ad_",B="ax_",j=H+"event",F=window,I=document,q=I.body,R=I.documentMode,U=clearTimeout,z=setTimeout,W=I.documentElement,X=F.encodeURIComponent||escape,V=F.decodeURIComponent||unescape,$=void 0,J="screenX",K="screenY",Q="clientX",G="clientY",Y="left",Z="top",et="width",tt="height",nt="visible",rt=nt+"Box",it=Math.min,st=Math.max,ot=Math.round,ut=ns_.extend,at="moz",ft="Hidden",lt="VisibilityState",ct="webkit",ht="browserMargin",pt="avail",dt="innerWidth",vt="innerHeight",mt="outerWidth",gt="outerHeight",yt="screenLeft",bt="screenTop",wt="getBoundingClientRect",Et="comScore",St="function",xt="unload",Tt="translated",Nt="orientation",Ct="mozPaintCount",kt,Lt=1,At=2,Ot=4,Mt=8,_t=16,Dt=32,Pt=64,Ht=128,Bt=256,jt=512,Ft=1024,It=2048,qt=navigator.userAgent.toLowerCase(),Rt=/mac\sos\sx[;\s]/.test(qt),Ut=!!Zn(F,"execScript",0),zt=!Ut&&Fn(F.opera),Wt=/ applewebkit\//.test(qt),Xt=Wt&&/chrome\//.test(qt),Vt=Wt&&!Xt&&/safari\//.test(qt),$t=Vt&&/version\/3\./.test(qt),Jt=Wt&&/ip(?:ad|od|hone)/.test(qt),Kt=/ firefox\//.test(qt),Qt=Kt&&jn(F[Ct]),Gt=Kt&&(/firefox\/3/.test(qt)||Qt),Yt=Kt&&jn(F.mozInnerScreenX)&&!Qt,Zt=Kt&&Fn(F.localStorage)&&!Yt,en=Ut&&R>=8,tn=Ut&&R>=9,nn=navigator.platform=="Win32",rn=/android\s2/.test(qt),sn=/silk\/1/.test(qt),on=Ut&&I.hasFocus,un=on&&$n(F),an=[1,5,60],fn=an[n],ln=/^focus&(.*)/,cn=/^blur&(.*)/,hn=/&c[7,8,9]=[^&]+/g,pn=[],dn=.5,vn=1e3,mn=300,gn=500,yn=tr(),bn="",wn="http"+(I.URL.charAt(4)=="s"?"s://sb":"://b")+".scorecardresearch.com/p?cs_iframe=1",En="3.1301.16",Sn=0,xn=0,Tn=!0,Nn=null,Cn=null,kn=P+"_p",Ln=1,An,On,Mn=!1,_n,Dn=0,Pn=!0,rr=[];ir(F,xt,function(){fr()});var Dr,Pr,Hr,Br=[];return ti(),{T:ni,TA:Rr,P:Kn,L:Qn,C:ri,e:ir,s:mr,v:wr,o:lr}}(),function(){function C(e,n){if(e&&!e[i])while(n[c]&&n[c]!==t){if(n[c]===e)return!0;n=n[c]}else if(e)return!0;return!1}function k(e){return e.outerHTML?e.outerHTML:(new XMLSerializer).serializeToString(e)}function L(e,t,n){return e>=t&&e<=n}function A(e,t){var n=[.88,.31,1.2,6,1.8,1.6,5.5,4.8,1.6,6,1.8,6,1.8,1.5,3,2.5,3,6,7.28,.9,1.2,.6,1.2,.9,1.2,2.4,1.25,1.25,2.34,.6,2.4,4,2.5,2.5,3,1,3.36,2.8,4.68,.6,7.2,3,3,10.5,3,2.5,3,6,4,12,9.7,.9,9.7,2.5],r=3,i,s;for(var o=0;o<n.length;o+=2){i=n[o]*100,s=n[o+1]*100;if(L(e,i-r,i+r)&&L(t,s-r,s+r))return!0}return!1}function O(e){return typeof e==p?e=t.getElementById(e)||t:e=e||t,e}function M(e,t){if(!e.className)return!1;var n=!0;for(var r=0,s=t[i],o=t[r];r<s;o=t[++r])typeof o==p&&(o=t[r]=new RegExp("(^|\\s)"+o+"($|\\s)")),o.test(e.className)||(n=!1);return n}function _(e,t,n){return e=="="?t==n:e==">="?t>=n:e=="<="?t<=n:!1}function D(e,t,n,r){var i=e.clientWidth||Number(e.width),s=e.clientHeight||Number(e.height);if(t=="size"){var o=r.split("x")[0],u=r.split("x")[1];return _(n,i,o)&&_(n,s,u)}return t=="width"?_(n,i,r):t=="height"?_(n,s,r):!1}function P(n,r){var s=!0;for(var o=0,u=r[i],a=r[o];o<u;a=r[++o])if(w.test(a)){var f=a.match(w),l=f[1],h=f[3],p=f[4];p&&(p=p.replace(/(^[\"\' ]|[\"\' ]$)/g,"")),l=="class"&&ns_.b.ie&&t.body.style.msBlockProgression==e&&(l="className");if(l=="size"||l=="width"||l=="height")s=D(n,l,h,p);else if(!V(l,T)&&!p&&!h&&(n[d](l)==e||n[d](l)==="")||!V(l,T)&&p&&h&&!H(n,l,h,p))s=!1;else if(l=="url")if(n.nodeName=="OBJECT"){var v=k(n).replace(/[\n\r]/g,"").split("<"),y,b;for(var E=0,S=v[i];E<S;E++)/name=["']movie/i.test(v[E])?y=v[E].match(/value=["']([^"']*)/i):/data=["']([^"']*)/i.test(v[E])&&(b=v[E].match(/data=["']([^"']*)/i));y&&y[1]?s=H(n,null,h,p,y[1]):b&&b[1]&&(s=H(n,null,h,p,b[1]))}else!H(n,null,h,p,n[d]("src")||n[d]("href")||n.currentSrc)&&n.tagName=="IMG"&&n[c].tagName=="A"&&!H(n[c],"href",h,p)&&(s=!1);else if(l=="iab"){var x=k(n),N=!0,C=null;m.test(x)&&(C=Number(x.match(m)[1]),N=C==NaN||C>5?!0:!1);var L=null;g.test(x)&&(L=Number(x.match(g)[1]),N=L==NaN||L>5?!0:!1);var O=n.parentNode;if(N&&C&&L)N=A(C,L);else if(N){var M=ns_.max.s(n);N=A(M[0],M[1])}s=N}else l=="text"&&n.nodeType==8&&(s=H(n,undefined,h,p,n.data))}else s=!1;return s}function H(t,n,r,s,o){o=!n&&o||!t[d]?o:t[d](n);if(o==e)return!1;o+="";var u=o.indexOf(s),a=!1;return r=="="?a=o==s:r=="*="?a=u!=-1:r=="^="?a=u==0:r=="$="&&(a=u==o[i]-s[i]),a}function B(e,t){var n=e.children||e.childNodes||e,r=t.substr(1).split("."),o=s();for(var u=0,a=n[i],f=n[u];u<a;f=n[++u])M(f,r)&&(o[o[i]]=f);return o}function j(e,t){var n=s();for(var r=0,o=e[i];r<o;r++)e[r][c]===t&&(n[n[i]]=e[r]);return n}function F(e,t){var n=s(),r;for(var o=0,u=e[i],a=e[o];o<u;a=e[++o])r=P(a,t),r&&(n[n[i]]=a);return n}function I(e,t){var n=s(),t=O(t),r=t.childNodes;for(var o=0,u=r[i];o<u;o++){var a=r[o];a.nodeType===e?n[n[i]]=a:n=n.concat(I(e,a))}return n||s()}function q(e){return I(8,e)}function R(e,t,n){var r,e=e,t=O(t);n===undefined&&(n=!0);if(t.getElementsByTagName)r=t.getElementsByTagName(e);else if(t.all&&t.all.tags)r=t.all.tags(e);else if(t[i]){r=s();for(var o=0,u=t[i];o<u;o++)t[o]&&t[o].nodeType==1&&(t[o].nodeName==e.toUpperCase()||e=="*")&&(r[r[i]]=t[o])}return n||(r=j(r,t)),r||s()}function U(e,n,r){var i=s(),e=e,n=O(n);return r===undefined&&(r=!0),n.getElementsByClassName?i=n.getElementsByClassName(e.substr(1).replace("."," ")):i=B(n!==t?n:t.body,e),r||(i=j(i,parent)),i}function z(e,t){var n=s();if(e===undefined)return n;if(e.filter)return e.filter(t);for(var r=0,o=e[i];r<o;r++)t(e[r])&&(n[n[i]]=e[r]);return n}function W(e,t){if(t[i]>0)for(var n=t[i]-1;n>=0;--n)e[e[i]]=t[n];return e}function X(e,t){var n=s();for(var r=0,o=e[i];r<o;r++)V(e[r],t)||(n[n[i]]=e[r]);return n}function V(e,t){for(var n=0,r=t[i];n<r;n++)if(t[n]===e)return!0;return!1}function $(e){var t=s();for(var n=0,r=e[i],o=e[n];n<r;o=e[++n])o&&!V(o,t)&&(t[t[i]]=o);return t}function J(e){var t=e.replace(/\s*([\s\>\~\+])\s*/g,"$1"),n=t.replace(/([\s\>\~\+])([^=])/g,"{$1}$2"),r=n.split(/\{[\s\>\~\+]\}/g),s=n.match(/\{([\s\>\~\+])\}/g);if(s)for(var o=0,u=s[i];o<u;o++)s[o]=s[o].replace(/\{(.)\}/,"$1");return{s:r,c:s}}function K(e,n,r){n=n||t,r===undefined&&(r=!0);if(!e||ns_.b.ie55)return s();var o=e.split(","),u=s();for(var a=0,f=o[i];a<f;a++){var l=o[a].replace(E,""),p=J(l),d=p.s,v=p.c,m=s();E.lastIndex=0;for(var g=0,w=d[i],S=d[g];g<w;S=d[++g]){b.lastIndex=0;if(!S||!y.test(S)&&!b.test(S))continue;var x=s(),T=g>0?v[g-1]:undefined;b.lastIndex=0;if(b.test(S)){var k=S.match(b),L=0;for(var A=0,O=k[i];A<O;A++){if(S.indexOf(k[A])>0||g==0)x[x[i]]=S.substr(L,S.indexOf(k[A]));x[x[i]]=S.substr(S.indexOf(k[A]),k[A][i]),L=S.indexOf(k[A])+k[A][i]}}else x[0]=S;for(var _=0,D=x[i],H=x[_];_<D;H=x[++_]){var B=W,j=s(),I=!1;b.lastIndex=0,b.test(H)&&(B=X,H=H.replace(/(^:not\(|\)$)/g,""),I=!0);var Q=H.match(y),G=Q[1]||"*",Y=Q[3],Z=Q[4],et=Q[5];if(I&&_==0)for(var tt=0,nt=m[i];tt<nt;tt++)j=W(j,R("*",m[tt],r));if(Z)var rt=Z.substr(1).split(".");if(et)var it=et.substr(1,et.length-2).split("][");if(g==0)if(Y){j=[t.getElementById(Y)];if(!j[0]||n!==t&&!C(n,j[0]))continue;if(G=="*"||j[0].tagName[h]()==G[h]()||G[h]()=="ad"&&V(N,j[0].tagName)&&(!Z||M(j[0],rt))&&(!et||P(j[0],it)))m=B(m,j)}else{var st=G[h](),ot=I?m:n;if(st=="object"&&j[i]==0)j=R("embed",ot,r);else if(st=="comment")j=q(ot);else if(st!="ad")j=R(G,ot,r);else{j=s();var ut=!1;for(var at=0,ft=N[i];at<ft;at++){var lt=R(N[at],ot,r);for(var ct=0,ht=lt[i];ct<ht;ct++){if(lt[ct].nodeName!="EMBED"||!ut)j[j[i]]=lt[ct];lt[ct].nodeName=="OBJECT"&&(ut=!0)}}}Z&&(j=U(Z,j,r)),et&&(j=F(j,it)),m=B(m,j)}else{if(!I||_==0){if(T==" ")for(var A=0,O=m[i];A<O;A++)j=B(j,K(H,m[A],!0));else if(T==">")for(var A=0,O=m[i];A<O;A++)j=B(j,K(H,m[A],!1));else if(T=="~")for(var A=0,O=m[i];A<O;A++){var ot=m[A][c],pt=z(B(K(H,ot,!1)),function(e){return e!==m[A]});j=B(j,pt)}else if(T=="+")for(var A=0,O=m[i];A<O;A++){var dt=m[A],ot=dt[c],vt=dt.nextElementSibling,pt=z(B(K(H,ot,!1)),function(e){return e===vt});j=B(j,pt)}}else j=B(m,K(H,m,r));m=j}}}u=W(u,m)}return $(u)}function Q(t,n,s){if(!t||!n)return;var o=K(t),u=new Function("try{return arguments.callee.n.call(arguments[0], arguments[1])}catch(e){}");u.n=typeof n==p?new Function(n):n;for(var a=0,f=o[i],l=o[a];a<f;l=o[++a]){var c=u(l,n);if(c&&c.splice){for(var h=0,d=c[i];h<d;h++)if(c[h].splice)l=c[h][0];else{var v=c[h].split("=");h!=0&&v[i]==2&&(s[v[0]]=v[1])}c=c[0]}else delete s.zn;s.zn||(s.zn="unknown");if(c){var m=r.s(l),g=c.replace(/,/g,""),y=g;m[0]>5&&m[1]>5&&(x[g]!=e&&(y=g+x[g]++),s.__i=y,r.T(l,s)&&(x[g]!=e?x[g]=x[g]++:x[g]=1))}}}function G(){var e=ns_.max_ads||s(),t=s();typeof e==p&&(e=s(e));for(var n=0,r=e[i],o=e[n];n<r;o=e[++n])if(typeof o==p){if(o.indexOf("{")<=0)continue;var u=0,a=o.indexOf("{"),f=a+1,l=o[i],c=[o.substring(u,a).replace(E,""),o.substring(f,l).replace(E,"").replace(/\}\s*$/g,"")];t[t[i]]=c}else o[i]&&o.slice?t[t[i]]=o.slice(0):typeof o.s==p&&o.l&&o.l.call&&(t[t[i]]=[o.s,o.l]);return t}var e=undefined,t=document,n=window,r=ns_.max,i="length",s=function(){if(!o){var e=[];for(var t in e)delete e[t];o=e.slice(0)}else var e=o.slice(0);for(var n=0,r=arguments.length;n<r;n++)e[e[i]]=arguments[n];return e},o=s(),u=ns_.ad_m||(ns_.ad_m=s()),a="ns__t",f="c2=",l="nodeName",c="parentNode",h="toLowerCase",p="string",d="getAttribute",v="=\\W?(\\d+[\\w%]*)\\W?",m=new RegExp(" width"+v,"i"),g=new RegExp(" height"+v,"i"),y=/^(\w+|\*)?(#([a-zA-Z]+[_a-zA-Z0-9-:]*))?(\.-?[_a-zA-Z]+[_a-zA-Z0-9-\.]*)?(\[.*\])?$/,b=new RegExp(":not\\((( *"+(y+"").replace(/(^\/\^\(|\$\/$)/g,"")+") *\\)","g"),w=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)((\*=|=|\^=|\$=|\>=|\<=)(.*)?)?/,E=/(^ *| *$)/g,S=!1,x=s(),T=s("url","size","iab","text"),N=["IMG","OBJECT","EMBED","IFRAME","VIDEO"];if(u._max)return;var Y=function(){if(!ns_p||!ns_p.src||n.top!=n)return;for(var e=0,t=Z[i],s=Z[e];e<t;s=Z[++e])Q(s[0],s[1],{});S||(S=!0,r.TA())},Z=G();Z[i]&&r.e(window,"load",Y),ns_.max_r=K,ns_.max.run=Y}();