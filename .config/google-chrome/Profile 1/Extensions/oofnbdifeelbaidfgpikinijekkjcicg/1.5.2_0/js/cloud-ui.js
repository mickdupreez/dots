!function(){"use strict";self.cloud={options:{},datakey:"",data:void 0,onPush:null,onPull:null};var a=uDom.nodeFromId("cloudWidget");if(null!==a&&(self.cloud.datakey=a.getAttribute("data-cloud-entry")||"",""!==self.cloud.datakey)){var b=vAPI.messaging,c=function(b){if("object"==typeof b&&null!==b){self.cloud.data=b.data,uDom.nodeFromId("cloudPull").removeAttribute("disabled"),uDom.nodeFromId("cloudPullAndMerge").removeAttribute("disabled");var c={weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},d=new Date(b.tstamp);a.querySelector("span").textContent=b.source+"\n"+d.toLocaleString("fullwide",c)}},d=function(){b.send("cloudWidget",{what:"cloudPull",datakey:self.cloud.datakey},c)},e=function(){"function"==typeof self.cloud.onPush&&b.send("cloudWidget",{what:"cloudPush",datakey:self.cloud.datakey,data:self.cloud.onPush()},d)},f=function(){"function"==typeof self.cloud.onPull&&self.cloud.onPull(self.cloud.data,!1)},g=function(){"function"==typeof self.cloud.onPull&&self.cloud.onPull(self.cloud.data,!0)},h=function(){var a=uDom.nodeFromId("cloudDeviceName");a.value=self.cloud.options.deviceName,a.setAttribute("placeholder",self.cloud.options.defaultDeviceName),uDom.nodeFromId("cloudOptions").classList.add("show")},i=function(a){var b=uDom.nodeFromId("cloudOptions");a.target===b&&b.classList.remove("show")},j=function(){var a=function(a){"object"==typeof a&&null!==a&&(self.cloud.options=a)};b.send("cloudWidget",{what:"cloudSetOptions",options:{deviceName:uDom.nodeFromId("cloudDeviceName").value}},a),uDom.nodeFromId("cloudOptions").classList.remove("show")},k=function(b){if("object"==typeof b&&null!==b&&b.enabled){self.cloud.options=b,d();var c=['<button id="cloudPush" type="button" title="cloudPush"></button>','<span data-i18n="cloudNoData"></span>','<button id="cloudPull" type="button" title="cloudPull" disabled></button>&nbsp;','<button id="cloudPullAndMerge" type="button" title="cloudPullAndMerge" disabled></button>','<span id="cloudCog" class="fa">&#xf013;</span>','<div id="cloudOptions">',"    <div>",'        <p><label data-i18n="cloudDeviceNamePrompt"></label> <input id="cloudDeviceName" type="text" value="">','        <p><button id="cloudOptionsSubmit" type="button" data-i18n="genericSubmit"></button>',"    </div>","</div>"].join("");vAPI.insertHTML(a,c),vAPI.i18n.render(a),a.classList.remove("hide"),uDom("#cloudPush").on("click",e),uDom("#cloudPull").on("click",f),uDom("#cloudPullAndMerge").on("click",g),uDom("#cloudCog").on("click",h),uDom("#cloudOptions").on("click",i),uDom("#cloudOptionsSubmit").on("click",j)}};b.send("cloudWidget",{what:"cloudGetOptions"},k)}}();