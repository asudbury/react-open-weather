(this["webpackJsonpreact-open-weather"]=this["webpackJsonpreact-open-weather"]||[]).push([[0],{129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=(a(98),a(181)),l=a(182),u=a(12),s=a(81),m=a.n(s),p=a(176),f=a(183),d=a(169),g=a(187),h=a(75),E=a.n(h),y=a(173),v=function(){return r.a.createElement(d.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(d.a,{item:!0},r.a.createElement(E.a,{color:"primary",fontSize:"large"})),r.a.createElement(d.a,{item:!0},r.a.createElement(y.a,{variant:"h6",noWrap:!0},"Weather Forecast")))},b=a(49),w=a(184),O=a(80),k=a.n(O),j=a(174),S=a(76),x=a.n(S),I=a(77),C=a.n(I);var M={current:null},F=Object(j.a)((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}}));function _(e){var t=e.setCity,a=F(),n=r.a.useState(null),i=Object(u.a)(n,2),c=i[0],o=i[1],l=r.a.useState(""),s=Object(u.a)(l,2),m=s[0],p=s[1],g=r.a.useState([]),h=Object(u.a)(g,2),E=h[0],v=h[1],O=r.a.useRef(!1);"undefined"===typeof window||O.current||(document.querySelector("#google-maps")||function(e,t,a){if(t){var n=document.createElement("script");n.setAttribute("async",""),n.setAttribute("id",a),n.src=e,t.appendChild(n)}}("https://maps.googleapis.com/maps/api/js?key=AIzaSyBQJ5nuBEu18372atNGIXPVPEMmske2CQM&libraries=places",document.querySelector("head"),"google-maps"),O.current=!0);var j=r.a.useMemo((function(){return C()((function(e,t){M.current.getPlacePredictions(e,t)}),200)}),[]);return r.a.useEffect((function(){var e=!0;if(!M.current&&window.google&&(M.current=new window.google.maps.places.AutocompleteService),M.current){if(""!==m)return j({input:m},(function(t){if(e){var a=[];c&&(a=[c]),t&&(a=[].concat(Object(b.a)(a),Object(b.a)(t))),v(a)}})),function(){e=!1};v(c?[c]:[])}}),[c,m,j]),r.a.createElement(w.a,{style:{width:300},getOptionLabel:function(e){return"string"===typeof e?e:e.description},filterOptions:function(e){return e},options:E,autoComplete:!0,includeInputInList:!0,freeSolo:!0,selectOnFocus:!0,filterSelectedOptions:!0,value:c,onChange:function(e,t){v(t?[t].concat(Object(b.a)(E)):E),o(t)},onInputChange:function(e,a){p(a),t(a)},renderInput:function(e){return r.a.createElement(f.a,Object.assign({},e,{label:"Enter City...",variant:"outlined",fullWidth:!0}))},renderOption:function(e){var t=e.structured_formatting.main_text_matched_substrings,n=x()(e.structured_formatting.main_text,t.map((function(e){return[e.offset,e.offset+e.length]})));return r.a.createElement(d.a,{container:!0,alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(k.a,{className:a.icon,color:"primary"})),r.a.createElement(d.a,{item:!0,xs:!0},n.map((function(e,t){return r.a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),r.a.createElement(y.a,null,e.structured_formatting.secondary_text)))}})}var W=function(e){var t=e.units,a=e.setUnits,i=e.search,c=(e.invalid,Object(n.useState)("")),o=Object(u.a)(c,2),l=o[0],s=o[1],h=function(){i(l)};return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(d.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(d.a,null,r.a.createElement(_,{setCity:s})),r.a.createElement(d.a,{item:!0},r.a.createElement(f.a,{select:!0,value:t,onChange:function(e){a(e.target.value)}},r.a.createElement(g.a,{key:"metric",value:"metric"},"Celsius"),r.a.createElement(g.a,{key:"imperial",value:"imperial"},"Farenheit"))),r.a.createElement(d.a,{item:!0},r.a.createElement(p.a,{"aria-label":"search",onClick:function(e){h()}},r.a.createElement(m.a,{color:"primary",fontSize:"large"})))))},A=a(177),U=a(185),P=function(){var e=r.a.useState(!0),t=Object(u.a)(e,2),a=t[0],n=t[1];return r.a.createElement(d.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(d.a,{item:!0},r.a.createElement(A.a,{in:a},r.a.createElement(U.a,{severity:"error",onClose:function(){n(!1)}},"Please specify a valid API key"))))},D=a(178),L=a(179),N=a(180),z=a(82),B=a.n(z),H=function(e){var t=e.city;return r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(d.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(d.a,{item:!0},r.a.createElement(B.a,{style:{fontSize:100}})),r.a.createElement(d.a,{item:!0},r.a.createElement(y.a,{variant:"h2",noWrap:!0},t.name),r.a.createElement(y.a,{variant:"h6",noWrap:!0},t.country))),r.a.createElement(d.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(d.a,{item:!0},r.a.createElement(y.a,{variant:"h6",noWrap:!0},"population ",Number(t.population).toLocaleString())),r.a.createElement(d.a,{item:!0},r.a.createElement(N.a,{variant:"outlined",href:t.googleUrl,underline:"always",target:"_blank",rel:"noopener noreferrer"},"map")),r.a.createElement(d.a,{item:!0},r.a.createElement(N.a,{variant:"outlined",href:t.wikiUrl,underline:"always",target:"_blank",rel:"noopener noreferrer"},"wiki")))))},K=function(e){var t=e.today;return r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(y.a,{variant:"h4"},"Today"),r.a.createElement("img",{src:t.icon,alt:"weather icon"}),r.a.createElement(y.a,{variant:"h2"},t.temperature.current,"\xb0",t.unitIndicator),r.a.createElement(y.a,{variant:"h4"},t.description),r.a.createElement(y.a,{variant:"h6"},"Sunrise ",t.sunrise," Sunset ",t.sunset),r.a.createElement(y.a,{variant:"h6"},"Min ",t.temperature.min,"\xb0",t.unitIndicator," Max"," ",t.temperature.max,"\xb0",t.unitIndicator),r.a.createElement(y.a,{variant:"h6"},"Wind ",t.wind," km/h"),r.a.createElement(y.a,{variant:"h6"},"Humidity ",t.humidity,"%")))},q=function(e){e.forecast;return r.a.createElement(D.a,null,r.a.createElement(L.a,null,r.a.createElement(y.a,{variant:"h4"},"Forecasr")))},J=a(83),Q=a(84),R=a(36),T=a.n(R);function $(e){var t=new Date(1e3*e),a=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return"".concat(a,":").concat(n)}var G=function(){function e(t,a,n){Object(J.a)(this,e),this.unit=t,this.apiKey=a,this.baseApiUrl="//api.openweathermap.org/data/2.5",this.lang=n}return Object(Q.a)(e,[{key:"getForecast",value:function(e){var t=this,a=this.baseApiUrl+"/forecast",n=this.baseApiUrl+"/weather",r=Object.assign({appid:this.apiKey,lang:this.lang,unit:this.unit},e);return T.a.all([T.a.get(a,{params:r}),T.a.get(n,{params:r})]).then(T.a.spread((function(e,a){var n=e.data,r=a.data;return n&&r?function(e,t,a){var n,r,i,c={};return c.city=e.city,c.city.googleUrl="https://www.google.co.uk/maps/place/"+e.city.name,c.city.wikiUrl="https://en.wikipedia.org/wiki/"+e.city.name,c.today={description:(i=t.weather[0].description,i.charAt(0).toUpperCase()+i.slice(1)),icon:(r=t.weather[0].icon,"http://openweathermap.org/img/wn/".concat(r,"@2x.png ")),temperature:{min:t.main.temp_min.toFixed(0),max:t.main.temp_max.toFixed(0),current:t.main.temp.toFixed(0)},wind:t.wind.speed.toFixed(0),humidity:t.main.humidity,sunrise:$(t.sys.sunrise),sunset:$(t.sys.sunset),unitIndicator:(n=a,"imperial"===n?"F":"C"),unit:a},c.forecasts=e.list,c}(n,r,t.unit):{}})))}},{key:"getNextDays",value:function(e){for(var t=[],a="",n=0;n<4;n++)e.setDate(e.getDate()+1),a=e.getFullYear()+"-"+("0"+e.getMonth()+1).slice(-2)+"-"+("0"+e.getDate()).slice(-2),t.push(a);return t}},{key:"mapForecast",value:function(e){return[]}}]),e}(),V=function(e){var t=e.apiKey,a=Object(n.useState)(!1),i=Object(u.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)("metric"),s=Object(u.a)(l,2),m=s[0],p=s[1],f=Object(n.useState)(null),d=Object(u.a)(f,2),g=d[0],h=d[1],E=Object(n.useState)(null),y=Object(u.a)(E,2),v=y[0],b=y[1],w=Object(n.useState)(null),O=Object(u.a)(w,2),k=O[0],j=O[1];return r.a.createElement("div",null,r.a.createElement(W,{units:m,setUnits:p,search:function(e){if(e.length>2){var a=new G(m,t,"en"),n={q:e,units:m},r=a.getForecast(n);r.then((function(e){"undefined"!=typeof e&&(h(e.city),b(e.today),j(e.forecast))})),r.catch((function(e){401===e.response.status&&o(!0),h(null),b(null),j(null)}))}}}),c&&r.a.createElement(P,null),g&&r.a.createElement(H,{city:g}),v&&r.a.createElement(K,{today:v}),k&&r.a.createElement(q,{forecast:k}))},X=a(85),Y=a(186),Z=Object(X.a)({palette:{type:"dark"},typography:{button:{textTransform:"none",backgroundColor:"blue"},h6:{color:"white"}},overrides:{MuiPaper:{root:{backgroundColor:"transparent"},elevation1:{},elevation8:{backgroundColor:"blue"}},MuiSvgIcon:{colorPrimary:{color:"white"}},MuiFormLabel:{root:{color:"white","&$focused":{color:"white",fontWeight:"bold"}}},MuiInput:{root:{color:"white"}},MuiInputLabel:{root:{color:"white"}},MuiSelect:{icon:{color:"white"}},MuiAutocomplete:{listbox:{backgroundColor:"blue"}}}}),ee=Z=Object(Y.a)(Z),te=(a(129),function(){return r.a.createElement(o.a,{theme:ee},r.a.createElement(l.a,{className:"container"},r.a.createElement(V,{apiKey:"5ce07d841919bc82dcccf2f3c310c2eb"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,t,a){e.exports=a(130)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.d496f3c3.chunk.js.map