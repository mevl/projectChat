function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;function chatTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (messages) {pug_html = pug_html + "\u003Cdiv class=\"chat\"\u003E";
// iterate messages
;(function(){
  var $$obj = messages;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var message = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["chat__message",message.isOwn ? 'chat__message_own' : ''], [false,true]), false, false)) + "\u003E\u003Cdiv class=\"chat__date\"\u003E" + (pug_escape(null == (pug_interp = message.date.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat__text\"\u003E\u003Cspan class=\"chat__text_author\"\u003E" + (pug_escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E" + (pug_escape(null == (pug_interp = message.message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var message = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["chat__message",message.isOwn ? 'chat__message_own' : ''], [false,true]), false, false)) + "\u003E\u003Cdiv class=\"chat__date\"\u003E" + (pug_escape(null == (pug_interp = message.date.toLocaleString('ru', { hour: '2-digit', minute: '2-digit' })) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"chat__text\"\u003E\u003Cspan class=\"chat__text_author\"\u003E" + (pug_escape(null == (pug_interp = message.username) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E" + (pug_escape(null == (pug_interp = message.message) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"messages" in locals_for_with?locals_for_with.messages:typeof messages!=="undefined"?messages:undefined));;return pug_html;}