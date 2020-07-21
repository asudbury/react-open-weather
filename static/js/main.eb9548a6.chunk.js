(this["webpackJsonpreact-open-weather"]=this["webpackJsonpreact-open-weather"]||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=a(182),l=a(181),u=a(183),s=a(12),m=a(81),p=a.n(m),g=a(176),d=a(184),f=a(169),h=a(188),E=a(179),y=a(177),v=a(178),b=a(75),w=a.n(b),S=a(173),O=function(){return r.a.createElement(f.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(w.a,{color:"primary",fontSize:"large"})),r.a.createElement(f.a,{item:!0},r.a.createElement(S.a,{variant:"h6",noWrap:!0},"Weather Forecast")))},k=a(49),j=a(185),x=a(80),C=a.n(x),I=a(174),M=a(76),F=a.n(M),W=a(77),_=a.n(W);var A={current:null},U=Object(I.a)((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}}));function K(e){var t=e.googleKey,a=e.setCity,n=e.citySearch,i=U(),c=r.a.useState(null),o=Object(s.a)(c,2),l=o[0],u=o[1],m=r.a.useState(""),p=Object(s.a)(m,2),g=p[0],h=p[1],E=r.a.useState([]),y=Object(s.a)(E,2),v=y[0],b=y[1],w=r.a.useRef(!1);"undefined"===typeof window||w.current||(document.querySelector("#google-maps")||function(e,t,a){if(t){var n=document.createElement("script");n.setAttribute("async",""),n.setAttribute("id",a),n.src=e,t.appendChild(n)}}("https://maps.googleapis.com/maps/api/js?key="+t+"&libraries=places",document.querySelector("head"),"google-maps"),w.current=!0);var O=r.a.useMemo((function(){return _()((function(e,t){A.current.getPlacePredictions(e,t)}),200)}),[]),x=function(e){"Enter"===e.key&&n(l)};return r.a.useEffect((function(){var e=!0;if(!A.current&&window.google&&(A.current=new window.google.maps.places.AutocompleteService),A.current){if(""!==g)return O({input:g},(function(t){if(e){var a=[];l&&(a=[l]),t&&(a=[].concat(Object(k.a)(a),Object(k.a)(t))),b(a)}})),function(){e=!1};b(l?[l]:[])}}),[l,g,O]),r.a.createElement(j.a,{style:{width:300},getOptionLabel:function(e){return"string"===typeof e?e:e.description},filterOptions:function(e){return e},options:v,autoComplete:!0,includeInputInList:!0,freeSolo:!0,selectOnFocus:!0,filterSelectedOptions:!0,value:l,onChange:function(e,t){b(t?[t].concat(Object(k.a)(v)):v),u(t),null!=t&&n(t.description)},onInputChange:function(e,t){h(t),a(t)},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{onKeyPress:x,label:"Enter City...",variant:"outlined",fullWidth:!0}))},renderOption:function(e){var t=null;if(null!=e){var a=e.structured_formatting.main_text_matched_substrings;t=F()(e.structured_formatting.main_text,a.map((function(e){return[e.offset,e.offset+e.length]})))}return r.a.createElement(f.a,{container:!0,alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(C.a,{className:i.icon,color:"primary"})),r.a.createElement(f.a,{item:!0,xs:!0},t.map((function(e,t){return r.a.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),r.a.createElement(S.a,null,e.structured_formatting.secondary_text)))}})}var P=function(e){var t=e.googleKey,a=e.units,i=e.setUnits,c=e.citySearch,o=e.coordinatesSearch,l=Object(n.useState)(""),u=Object(s.a)(l,2),m=u[0],b=u[1],w=function(){c(m)};return r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement(O,null),r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(f.a,{container:!0,direction:"column",spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(K,{googleKey:t,setCity:b,citySearch:c})),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{variant:"outlined",onClick:o},"Use my current location")))),r.a.createElement(f.a,{item:!0},r.a.createElement(d.a,{select:!0,value:a,onChange:function(e){i(e.target.value)}},r.a.createElement(h.a,{key:"metric",value:"metric"},"Celsius"),r.a.createElement(h.a,{key:"imperial",value:"imperial"},"Farenheit"))),r.a.createElement(f.a,{item:!0},r.a.createElement(g.a,{"aria-label":"search",onClick:function(e){w()}},r.a.createElement(p.a,{color:"primary",fontSize:"large"})))),r.a.createElement(f.a,{item:!0})))},L=a(180),B=a(186),D=function(e){var t=r.a.useState(!0),a=Object(s.a)(t,2),n=a[0],i=a[1];return r.a.createElement(f.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(L.a,{in:n},r.a.createElement(B.a,{severity:"error",onClose:function(){i(!1)}},e.errorMessage))))},z=a(82),H=a.n(z),N=function(e){var t=e.city;return r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(f.a,{item:!0},r.a.createElement(H.a,{style:{fontSize:100}})),r.a.createElement(f.a,{item:!0},r.a.createElement(S.a,{variant:"h2",noWrap:!0},t.name),r.a.createElement(S.a,{variant:"h6",noWrap:!0},t.country))),r.a.createElement(f.a,{container:!0,spacing:2,alignItems:"flex-end"},r.a.createElement(f.a,{item:!0},void 0!==t.population&&r.a.createElement(S.a,{variant:"h6",noWrap:!0},"population ",Number(t.population).toLocaleString())),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{variant:"outlined",href:t.googleUrl,underline:"always",target:"_blank",rel:"noopener noreferrer"},"map")),r.a.createElement(f.a,{item:!0},r.a.createElement(E.a,{variant:"outlined",href:t.wikiUrl,underline:"always",target:"_blank",rel:"noopener noreferrer"},"wiki")))))},T=function(e){var t=e.now;return r.a.createElement(y.a,null,r.a.createElement(v.a,null,r.a.createElement("img",{src:t.icon,alt:"weather icon"}),r.a.createElement(S.a,{variant:"h2"},t.temperature.current,"\xb0",t.unitIndicator),r.a.createElement(S.a,{variant:"h4"},t.description),r.a.createElement(S.a,{variant:"h6"},"Sunrise ",t.sunrise," Sunset ",t.sunset),r.a.createElement(S.a,{variant:"h6"},"Min ",t.temperature.min,"\xb0",t.unitIndicator," Max"," ",t.temperature.max,"\xb0",t.unitIndicator),r.a.createElement(S.a,{variant:"h6"},"Wind ",t.wind," km/h"),r.a.createElement(S.a,{variant:"h6"},"Humidity ",t.humidity,"%")))},q=function(e){var t=e.forecasts;return r.a.createElement(f.a,{container:!0,spacing:2},t.map((function(e,t){return r.a.createElement(f.a,{item:!0,key:t},r.a.createElement(y.a,{variant:"outlined"},r.a.createElement(v.a,null,r.a.createElement(S.a,{variant:"h6",align:"center"},e.day," ",e.time),r.a.createElement(S.a,{variant:"h6",align:"center"},r.a.createElement("img",{src:e.icon,alt:"weather icon"})),r.a.createElement(S.a,{variant:"h4",align:"center"},e.temperature,"\xb0"),r.a.createElement(S.a,{variant:"h6",align:"center"},e.description))))})))},J=a(83),Q=a(84),R=a(37),$=a.n(R);function G(e){return"https://openweathermap.org/img/wn/".concat(e,"@2x.png ")}function V(e){var t=new Date(1e3*e).getDay();return t===(new Date).getDay()?"Today":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t]}function X(e){var t=new Date(1e3*e),a=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return"".concat(a,":").concat(n)}function Y(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Z(e,t,a){var n,r={};return r.city=e.city,r.city.googleUrl="https://www.google.co.uk/maps/place/"+e.city.name,r.city.wikiUrl="https://en.wikipedia.org/wiki/"+e.city.name,r.now={description:Y(t.weather[0].description),icon:G(t.weather[0].icon),temperature:{min:t.main.temp_min.toFixed(0),max:t.main.temp_max.toFixed(0),current:t.main.temp.toFixed(0)},wind:t.wind.speed.toFixed(0),humidity:t.main.humidity,sunrise:X(t.sys.sunrise),sunset:X(t.sys.sunset),unitIndicator:(n=a,"imperial"===n?"F":"C"),unit:a},r.forecasts=function(e){for(var t=[],a=e.length,n=0;n<a;n++){var r={};r.day=V(e[n].dt),r.time=X(e[n].dt),r.temperature=e[n].main.temp.toFixed(0),r.description=Y(e[n].weather[0].description),r.icon=G(e[n].weather[0].icon),t.push(r)}return t}(e.list),r}var ee=function(){function e(t,a,n){Object(J.a)(this,e),this.unit=t,this.apiKey=a,this.baseApiUrl="//api.openweathermap.org/data/2.5",this.lang=n}return Object(Q.a)(e,[{key:"getForecast",value:function(e){var t=this,a=this.baseApiUrl+"/forecast",n=this.baseApiUrl+"/weather",r=Object.assign({appid:this.apiKey,lang:this.lang,unit:this.unit},e);return $.a.all([$.a.get(a,{params:r}),$.a.get(n,{params:r})]).then($.a.spread((function(e,a){var n=e.data,r=a.data;return n&&r?Z(n,r,t.unit):{}})))}}]),e}(),te=function(e){var t=e.apiKey,a=Object(n.useState)(""),i=Object(s.a)(a,2),c=i[0],o=i[1],l=Object(n.useState)("metric"),u=Object(s.a)(l,2),m=u[0],p=u[1],g=Object(n.useState)(null),d=Object(s.a)(g,2),f=d[0],h=d[1],E=Object(n.useState)(null),y=Object(s.a)(E,2),v=y[0],b=y[1],w=Object(n.useState)(null),S=Object(s.a)(w,2),O=S[0],k=S[1],j=Object(n.useState)("AIzaSyBQJ5nuBEu18372atNGIXPVPEMmske2CQM"),x=Object(s.a)(j,1)[0],C=function(e){var t={lat:e.coords.latitude,lon:e.coords.longitude,units:m};M(t)};function I(e){o(e.message)}var M=function(e){o("");var a=new ee(m,t,"en").getForecast(e);a.then((function(e){"undefined"!=typeof e&&(h(e.city),b(e.now),k(e.forecasts))})),a.catch((function(e){401===e.response.status?o("API key not valid"):404===e.response.status?o("Location not found"):o("An error has occured"),h(null),b(null),k(null)}))};return r.a.createElement("div",null,r.a.createElement(P,{units:m,setUnits:p,citySearch:function(e){(console.log("citySearch="+e),e&&e.length>2)&&M({q:e,units:m})},coordinatesSearch:function(){navigator.geolocation.getCurrentPosition(C,I)},googleKey:x}),c&&r.a.createElement(D,{errorMessage:c}),f&&r.a.createElement(N,{city:f}),v&&r.a.createElement(T,{now:v}),O&&r.a.createElement(q,{forecasts:O}))},ae=a(86),ne=a(187),re=a(85),ie=a.n(re),ce=Object(ae.a)({palette:{type:"dark"},typography:{button:{textTransform:"none",backgroundColor:"blue"},h6:{color:"white"}},overrides:{MuiCssBaseline:{"@global":{body:{backgroundImage:"url(".concat(ie.a,")")}}},MuiPaper:{root:{backgroundColor:"transparent"},elevation1:{},elevation8:{backgroundColor:"blue"}},MuiSvgIcon:{colorPrimary:{color:"white"}},MuiFormLabel:{root:{color:"white","&$focused":{color:"white",fontWeight:"bold"}}},MuiInput:{root:{color:"white"}},MuiInputLabel:{root:{color:"white"}},MuiSelect:{icon:{color:"white"}},MuiAutocomplete:{listbox:{backgroundColor:"blue"}}}}),oe=ce=Object(ne.a)(ce),le=function(){return r.a.createElement(l.a,{theme:oe},r.a.createElement(o.a,null),r.a.createElement(u.a,{className:"xcontainer"},r.a.createElement(te,{apiKey:"5ce07d841919bc82dcccf2f3c310c2eb"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a.p+"static/media/background.1bdecd60.jpg"},95:function(e,t,a){e.exports=a(130)}},[[95,1,2]]]);
//# sourceMappingURL=main.eb9548a6.chunk.js.map