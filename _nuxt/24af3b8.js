(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{102:function(e){e.exports=JSON.parse('[{"nom":"Jardins de Joan Brossa","clau":"Brossa"},{"nom":"Jardins de Joan Maragall","clau":"Maragall"},{"nom":"Jardins de la Maternitat","clau":"Maternitat"},{"nom":"Jardins de la Pegaso","clau":"Pegaso"},{"nom":"Jardins del Doctor Pla i Armengol","clau":"Armengol"},{"nom":"Jardí de Cervantes","clau":"Cervantes"},{"nom":"Jardí de Pedralbes","clau":"Pedralbes"},{"nom":"Jardí de la plaça de Gaudí","clau":"Gaudí"},{"nom":"Jardí del Laberint","clau":"Laberint"},{"nom":"Jardí del Palau Robert","clau":"Robert"},{"nom":"Parc Güell","clau":"Güell"},{"nom":"Parc de Diagonal Mar","clau":"Diagonal"},{"nom":"Parc de l\'Estació del Nord","clau":"Estació"},{"nom":"Parc de l\'Oreneta","clau":"Oreneta"},{"nom":"Parc de la Ciutadella","clau":"Ciutadella"},{"nom":"Parc de la Creueta del Coll","clau":"Creueta"},{"nom":"Parc de la Trinitat","clau":"Trinitat"},{"nom":"Parc de la Vall d\'Hebron","clau":"Hebron"},{"nom":"Parc de les Aigües","clau":"Aigües"},{"nom":"Parc de les Glòries","clau":"Glòries"},{"nom":"Parc de les Heures","clau":"Heures"},{"nom":"Parc del Besós","clau":"Besos"},{"nom":"Parc del Centre del Poblenou","clau":"Poblenou"},{"nom":"Parc del Clot","clau":"Clot"},{"nom":"Parc del Guinardó","clau":"Guinardo"},{"nom":"Parc del Turó de la Peira","clau":"Peira"},{"nom":"Parc del Turó del Putxet","clau":"Putxet"},{"nom":"Turó del Carmel","clau":"Carmel"}]')},170:function(e,t,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("56b15182",content,!0,{sourceMap:!1})},171:function(e,t,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("c64616ba",content,!0,{sourceMap:!1})},179:function(e,t,n){"use strict";n(229);var r=n(27),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("TheHeader"),e._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{TheHeader:n(235).default})},185:function(e,t,n){n(186),e.exports=n(187)},229:function(e,t,n){"use strict";n(170)},230:function(e,t,n){var r=n(74)(!1);r.push([e.i,"body{margin:0;padding:0;box-sizing:border-box}",""]),e.exports=r},231:function(e,t,n){e.exports=n.p+"img/ic_fluent_navigation_24_filled.646781e.png"},232:function(e,t,n){"use strict";n(171)},233:function(e,t,n){var r=n(74)(!1);r.push([e.i,"a[data-v-060b4b1e],a[data-v-060b4b1e]:visited{color:#24248f;font-size:1.06rem;text-decoration:none;cursor:pointer}a[data-v-060b4b1e]:active,a[data-v-060b4b1e]:hover{text-decoration:underline}.title a[data-v-060b4b1e]:active{text-decoration:none}.header[data-v-060b4b1e]{text-transform:uppercase;background-color:rgba(90,169,90,.30196)}.top[data-v-060b4b1e]{height:70px;display:flex;padding:0 4vw;justify-content:space-between;align-items:center}.bottom[data-v-060b4b1e]{height:154px}.bottom-nav[data-v-060b4b1e]{padding:0;margin:0}.bottom-item[data-v-060b4b1e]{display:flex;align-items:center;height:50px;border-top:1px solid #551a8b}.bottom-item[data-v-060b4b1e]:last-of-type{border-bottom:1px solid #551a8b}.bottom-item a[data-v-060b4b1e]{padding-left:4vw}.nav[data-v-060b4b1e]{display:flex;list-style:none}.nav li[data-v-060b4b1e]{margin:0;padding:0 1rem}.toggler[data-v-060b4b1e]{cursor:pointer}@media (max-width:950px){.nav[data-v-060b4b1e]{display:none}}@media (min-width:950px){.toggler[data-v-060b4b1e]{display:none}}",""]),e.exports=r},234:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return d})),n.d(t,"getters",(function(){return f})),n.d(t,"mutations",(function(){return m})),n.d(t,"actions",(function(){return v}));var r=n(15),o=n(8),c=n(128),l=(n(53),n(37),n(16),n(28),n(44),n(180),n(78),n(163),n(45),n(25),n(71),n(167),n(102)),d=function(){return{data:[],especiesParcSeleccionat:[],especiesFiltrades:[],parcList:l,fetched:null,colors:[["Papilionidae","#8d95a666"],["Hesperiidae","#a6625365"],["Pieridae","#a8bfb577"],["Nymphalidae","#f2cb9b99"],["Lycaenidae","#9386a655"],["Crambidae","#676767"]]}},f={fetchedStatus:function(e){return e.fetched},getParcData:function(e){return function(t){return e.data.filter((function(e){return e.nom===t}))[0]}},getTotalData:function(e){var t=[],n=[];return JSON.parse(JSON.stringify(e.data)).forEach((function(e){e.observacions.forEach((function(e){if(t.includes(e[0])){var r=n.findIndex((function(t){return t[0]===e[0]}));n[r][1]=[].concat(Object(c.a)(n[r][1]),Object(c.a)(e[1]))}else t.push(e[0]),n.push(e)}))})),n},getParcsWithSpecies:function(e){return function(t){var n=[];return e.data.forEach((function(e){var r=e.observacions.findIndex((function(e){return e[0]===t}));if(r>-1){var o=e.observacions[r][1].reduce((function(e,t){return e+t.t}),0);n.push({parc:e.nom,recomptes:e.observacions[r][1].length,exemplars:o})}})),n}},getFamilyColor:function(e){return function(t){var n=e.colors.findIndex((function(e){return e[0]===t}));return{"--sp-color":e.colors[n][1]}}}},m={populateData:function(e,data){e.data=data},changeFetchedStatus:function(e,t){e.fetched=t}},v={setInitialData:function(e){var t=e.commit;function n(){return(n=Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ubmsapp.creaf.cat/public_map/data/?sp=");case 2:return t=e.sent,e.next=5,t.json();case 5:return data=e.sent,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t("changeFetchedStatus",!1),function(){return n.apply(this,arguments)}().then((function(data){var e=Object.entries(data).filter((function(e){return Object(r.a)(e,1)[0].includes("BARCELONA")}));l.forEach((function(t){var n=e.filter((function(e){return Object(r.a)(e,1)[0].includes(t.clau)}));n.forEach((function(e){e[0]=e[0].replace(/.*\)\s/,""),e[2]=e[1].muestreos,e.splice(1,1)})),t.observacions=JSON.parse(JSON.stringify(n))})),t("populateData",l),t("changeFetchedStatus",!0)}))}}},235:function(e,t,n){"use strict";n.r(t);var r={name:"TheHeader",data:function(){return{mobileMenu:!1}},methods:{toggleMenu:function(){this.mobileMenu=!this.mobileMenu}}},o=(n(232),n(27)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"top"},[r("p",{staticClass:"title"},[r("NuxtLink",{attrs:{to:"/"}},[e._v("\n        Les papallones de Barcelona\n      ")])],1),e._v(" "),r("ul",{staticClass:"nav"},[r("li",[r("NuxtLink",{attrs:{to:"/especies"}},[e._v("\n          Espècies\n        ")])],1),e._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/recomptes"}},[e._v("\n          Recomptes parcs uBMS\n        ")])],1),e._v(" "),r("li",[r("NuxtLink",{attrs:{to:"/preguntes-frequents"}},[e._v("\n          Preguntes freqüents\n        ")])],1)]),e._v(" "),r("div",{staticClass:"toggler",on:{click:e.toggleMenu}},[r("img",{attrs:{src:n(231),alt:"Obre menú",height:"34px"}})])]),e._v(" "),e.mobileMenu?r("div",{staticClass:"bottom"},[r("ul",{staticClass:"bottom-nav"},[r("li",{staticClass:"bottom-item"},[r("NuxtLink",{attrs:{to:"/especies"},nativeOn:{click:function(t){return e.toggleMenu.apply(null,arguments)}}},[e._v("\n          Espècies\n        ")])],1),e._v(" "),r("li",{staticClass:"bottom-item"},[r("NuxtLink",{attrs:{to:"/recomptes"},nativeOn:{click:function(t){return e.toggleMenu.apply(null,arguments)}}},[e._v("\n          Recomptes parcs uBMS\n        ")])],1),e._v(" "),r("li",{staticClass:"bottom-item"},[r("NuxtLink",{attrs:{to:"/preguntes-frequents"},nativeOn:{click:function(t){return e.toggleMenu.apply(null,arguments)}}},[e._v("\n          Preguntes freqüents\n        ")])],1)])]):e._e()])}),[],!1,null,"060b4b1e",null);t.default=component.exports}},[[185,15,3,16]]]);