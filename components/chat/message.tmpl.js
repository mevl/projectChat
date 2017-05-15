function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function messageTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug":"li.chat__message(id=id class=isOwn ? 'chat__message_own' : '')\n    div.chat__message_avatar\n        img(src=avatarUrl alt=username)\n    div.chat__message_header\n        span.chat__message_author=username\n        input.chat__message_button(type='button' value='x')\n        span.chat__message_date=date.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })\n    div.chat__message_text=text\n"};
;var locals_for_with = (locals || {});(function (avatarUrl, date, id, isOwn, text, username) {;pug_debug_line = 1;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("class", pug_classes(["chat__message",isOwn ? 'chat__message_own' : ''], [false,true]), false, false)+pug_attr("id", id, true, false)) + "\u003E";
;pug_debug_line = 2;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__message_avatar\"\u003E";
;pug_debug_line = 3;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attr("src", avatarUrl, true, false)+pug_attr("alt", username, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__message_header\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__message_author\"\u003E";
;pug_debug_line = 5;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cinput class=\"chat__message_button\" type=\"button\" value=\"x\"\u002F\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cspan class=\"chat__message_date\"\u003E";
;pug_debug_line = 7;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = date.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + "\u003Cdiv class=\"chat__message_text\"\u003E";
;pug_debug_line = 8;pug_debug_filename = ".\u002Fcomponents\u002Fchat\u002Fmessage.tmpl.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E";}.call(this,"avatarUrl" in locals_for_with?locals_for_with.avatarUrl:typeof avatarUrl!=="undefined"?avatarUrl:undefined,"date" in locals_for_with?locals_for_with.date:typeof date!=="undefined"?date:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"isOwn" in locals_for_with?locals_for_with.isOwn:typeof isOwn!=="undefined"?isOwn:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined,"username" in locals_for_with?locals_for_with.username:typeof username!=="undefined"?username:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}