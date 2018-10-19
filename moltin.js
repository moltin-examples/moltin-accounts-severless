"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("fetch-everywhere"),require("es6-promise");var version="0.0.0-semantic-release",NoStorageFactory=function(){};NoStorageFactory.prototype.set=function(t,e){},NoStorageFactory.prototype.get=function(t){return null},NoStorageFactory.prototype.delete=function(t){};var Config=function(t){var e=t.application,n=t.client_id,r=t.client_secret,i=t.currency,o=t.host,s=t.storage;this.application=e,this.client_id=n,this.client_secret=r,this.host=o||"api.moltin.com",this.protocol="https",this.version="v2",this.currency=i,this.auth={expires:3600,uri:"oauth/access_token"},this.sdk={version:version,language:"JS"},this.storage=s||new NoStorageFactory},toString=Object.prototype.toString;function isFunc(t){return"[object Function]"===toString.call(t)}var classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function icPart(t){return t.split("").map(function(t){return"(?:"+t.toUpperCase()+"|"+t.toLowerCase()+")"}).join("")}function remove(t,e){for(var n=t.length-1;n>=0;n--)t[n]===e&&Array.prototype.splice.call(t,n,1)}function hasProp(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var instances={},Inflector=function(){function t(){classCallCheck(this,t),this.plurals=[],this.singulars=[],this.uncountables=[],this.humans=[],this.acronyms={},this.acronymRegex=/(?=a)b/}return createClass(t,null,[{key:"getInstance",value:function(e){return instances[e]=instances[e]||new t,instances[e]}}]),createClass(t,[{key:"acronym",value:function(t){this.acronyms[t.toLowerCase()]=t;var e=[];for(var n in this.acronyms)hasProp(this.acronyms,n)&&e.push(this.acronyms[n]);this.acronymRegex=new RegExp(e.join("|"))}},{key:"plural",value:function(t,e){"string"==typeof t&&remove(this.uncountables,t),remove(this.uncountables,e),this.plurals.unshift([t,e])}},{key:"singular",value:function(t,e){"string"==typeof t&&remove(this.uncountables,t),remove(this.uncountables,e),this.singulars.unshift([t,e])}},{key:"irregular",value:function(t,e){remove(this.uncountables,t),remove(this.uncountables,e);var n=t[0],r=t.substr(1),i=e[0],o=e.substr(1);if(n.toUpperCase()===i.toUpperCase())this.plural(new RegExp("("+n+")"+r+"$","i"),"$1"+o),this.plural(new RegExp("("+i+")"+o+"$","i"),"$1"+o),this.singular(new RegExp("("+n+")"+r+"$","i"),"$1"+r),this.singular(new RegExp("("+i+")"+o+"$","i"),"$1"+r);else{var s=icPart(r),a=icPart(o);this.plural(new RegExp(n.toUpperCase()+s+"$"),i.toUpperCase()+o),this.plural(new RegExp(n.toLowerCase()+s+"$"),i.toLowerCase()+o),this.plural(new RegExp(i.toUpperCase()+a+"$"),i.toUpperCase()+o),this.plural(new RegExp(i.toLowerCase()+a+"$"),i.toLowerCase()+o),this.singular(new RegExp(n.toUpperCase()+s+"$"),n.toUpperCase()+r),this.singular(new RegExp(n.toLowerCase()+s+"$"),n.toLowerCase()+r),this.singular(new RegExp(i.toUpperCase()+a+"$"),n.toUpperCase()+r),this.singular(new RegExp(i.toLowerCase()+a+"$"),n.toLowerCase()+r)}}},{key:"uncountable",value:function(){for(var t=arguments,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=t[r];this.uncountables=this.uncountables.concat(n)}},{key:"human",value:function(t,e){this.humans.unshift([t,e])}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";"all"===t?(this.plurals=[],this.singulars=[],this.uncountables=[],this.humans=[]):this[t]=[]}}]),t}();function en(t){t.plural(/$/,"s"),t.plural(/s$/i,"s"),t.plural(/^(ax|test)is$/i,"$1es"),t.plural(/(octop|vir)us$/i,"$1i"),t.plural(/(octop|vir)i$/i,"$1i"),t.plural(/(alias|status)$/i,"$1es"),t.plural(/(bu)s$/i,"$1ses"),t.plural(/(buffal|tomat)o$/i,"$1oes"),t.plural(/([ti])um$/i,"$1a"),t.plural(/([ti])a$/i,"$1a"),t.plural(/sis$/i,"ses"),t.plural(/(?:([^f])fe|([lr])f)$/i,"$1$2ves"),t.plural(/(hive)$/i,"$1s"),t.plural(/([^aeiouy]|qu)y$/i,"$1ies"),t.plural(/(x|ch|ss|sh)$/i,"$1es"),t.plural(/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"),t.plural(/^(m|l)ouse$/i,"$1ice"),t.plural(/^(m|l)ice$/i,"$1ice"),t.plural(/^(ox)$/i,"$1en"),t.plural(/^(oxen)$/i,"$1"),t.plural(/(quiz)$/i,"$1zes"),t.singular(/s$/i,""),t.singular(/(ss)$/i,"$1"),t.singular(/(n)ews$/i,"$1ews"),t.singular(/([ti])a$/i,"$1um"),t.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"),t.singular(/(^analy)(sis|ses)$/i,"$1sis"),t.singular(/([^f])ves$/i,"$1fe"),t.singular(/(hive)s$/i,"$1"),t.singular(/(tive)s$/i,"$1"),t.singular(/([lr])ves$/i,"$1f"),t.singular(/([^aeiouy]|qu)ies$/i,"$1y"),t.singular(/(s)eries$/i,"$1eries"),t.singular(/(m)ovies$/i,"$1ovie"),t.singular(/(x|ch|ss|sh)es$/i,"$1"),t.singular(/^(m|l)ice$/i,"$1ouse"),t.singular(/(bus)(es)?$/i,"$1"),t.singular(/(o)es$/i,"$1"),t.singular(/(shoe)s$/i,"$1"),t.singular(/(cris|test)(is|es)$/i,"$1is"),t.singular(/^(a)x[ie]s$/i,"$1xis"),t.singular(/(octop|vir)(us|i)$/i,"$1us"),t.singular(/(alias|status)(es)?$/i,"$1"),t.singular(/^(ox)en/i,"$1"),t.singular(/(vert|ind)ices$/i,"$1ex"),t.singular(/(matr)ices$/i,"$1ix"),t.singular(/(quiz)zes$/i,"$1"),t.singular(/(database)s$/i,"$1"),t.irregular("person","people"),t.irregular("man","men"),t.irregular("child","children"),t.irregular("sex","sexes"),t.irregular("move","moves"),t.irregular("zombie","zombies"),t.uncountable("equipment","information","rice","money","species","series","fish","sheep","jeans","police")}var defaults$1={en:en};function inflections(t,e){if(isFunc(t)&&(e=t,t=null),t=t||"en",!e)return Inflector.getInstance(t);e(Inflector.getInstance(t))}for(var locale in defaults$1)inflections(locale,defaults$1[locale]);function applyInflections(t,e){var n,r,i,o=""+t;if(0===o.length)return o;var s=o.toLowerCase().match(/\b\w+$/);if(s&&inflections().uncountables.indexOf(s[0])>-1)return o;for(var a=0,u=e.length;a<u;a++)if(r=(n=e[a])[0],i=n[1],o.match(r)){o=o.replace(r,i);break}return o}function pluralize(t){return applyInflections(t,inflections(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en").plurals)}function singularize(t){return applyInflections(t,inflections(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en").singulars)}function underscore(t){var e=""+t;return(e=(e=(e=(e=e.replace(new RegExp("(?:([A-Za-z\\d])|^)("+inflections().acronymRegex.source+")(?=\\b|[^a-z])","g"),function(t,e,n){return(e||"")+(e?"_":"")+n.toLowerCase()})).replace(/([A-Z\d]+)([A-Z][a-z])/g,"$1_$2")).replace(/([a-z\d])([A-Z])/g,"$1_$2")).replace(/-/g,"_")).toLowerCase()}var DEFAULT_APPROXIMATIONS={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","×":"x","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"Th","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","ĝ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"'n","Ŋ":"NG","ŋ":"ng","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"E","Ж":"ZH","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"KH","Ц":"C","Ч":"CH","Ш":"SH","Щ":"SHCH","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"YU","Я":"YA","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"kh","ц":"c","ч":"ch","ш":"sh","щ":"shch","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya"},DEFAULT_REPLACEMENT_CHAR="?",instances$1={},Transliterator=function(){function t(){for(var e in classCallCheck(this,t),this.approximations={},DEFAULT_APPROXIMATIONS)this.approximate(e,DEFAULT_APPROXIMATIONS[e])}return createClass(t,null,[{key:"getInstance",value:function(e){return instances$1[e]=instances$1[e]||new t,instances$1[e]}}]),createClass(t,[{key:"approximate",value:function(t,e){this.approximations[t]=e}},{key:"transliterate",value:function(t,e){var n=this;return t.replace(/[^\u0000-\u007f]/g,function(t){return n.approximations[t]||e||DEFAULT_REPLACEMENT_CHAR})}}]),t}();function buildRelationshipData(t,e){var n=[];if(null===e||0===e.length)return n;if("string"==typeof e){var r={type:underscore(t),id:e};return"main-image"===t?r:[r]}return Array.isArray(e)&&(n=e.map(function(e){return{type:underscore(t),id:e}})),n}function formatUrlResource(t){return"main-image"===t?t:pluralize(t)}function createCartIdentifier(){return"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)})}function cartIdentifier(t){var e=t.storage,n=createCartIdentifier();return null!==e.get("mcart")?e.get("mcart"):(e.set("mcart",n),n)}function parseJSON(t){return 204===t.status?new Promise(function(e){e({status:t.status,ok:t.ok,json:"{}"})}):new Promise(function(e){return t.json().then(function(n){return e({status:t.status,ok:t.ok,json:n})})})}function formatFilterString(t,e){return Object.keys(e).map(function(n){var r=e[n],i=n+","+r;return"object"==typeof r&&(i=Object.keys(r).map(function(t){return n+"."+t+","+r[t]})),t+"("+i+")"}).join(":")}function formatQueryString(t,e){return"limit"===t||"offset"===t?"page"+e:"filter"===t?t+"="+Object.keys(e).map(function(t){return formatFilterString(t,e[t])}).join(":"):t+"="+e}function buildQueryParams(t){var e=t.includes,n=t.sort,r=t.limit,i=t.offset,o=t.filter,s={};return e&&(s.include=e),n&&(s.sort=""+n),r&&(s.limit="[limit]="+r),i&&(s.offset="[offset]="+i),o&&(s.filter=o),Object.keys(s).map(function(t){return formatQueryString(t,s[t])}).join("&")}function buildURL(t,e){return e.includes||e.sort||e.limit||e.offset||e.filter?t+"?"+buildQueryParams(e):t}function buildRequestBody(t){var e;return t&&(e='{\n      "data": '+JSON.stringify(t)+"\n    }"),e}function buildCartItemData(t,e,n){void 0===e&&(e=null),void 0===n&&(n="cart_item");var r={type:n};return"cart_item"===n&&Object.assign(r,{id:t,quantity:parseInt(e,10)}),"promotion_item"===n&&Object.assign(r,{code:t}),r}function buildCartCheckoutData(t,e,n){var r=t;return"string"==typeof t&&(r={id:t}),{customer:r,billing_address:e,shipping_address:n}}var Credentials=function(t,e,n){this.client_id=t,this.access_token=e,this.expires=n};Credentials.prototype.toObject=function(){return{client_id:this.client_id,access_token:this.access_token,expires:this.expires}};var RequestFactory=function(t){this.config=t,this.storage=this.config.storage};RequestFactory.prototype.authenticate=function(){var t=this.config,e=this.storage;if(!t.client_id)throw new Error("You must have a client_id set");if(!t.host)throw new Error("You have not specified an API host");var n={grant_type:t.client_secret?"client_credentials":"implicit",client_id:t.client_id};t.client_secret&&(n.client_secret=t.client_secret);var r=new Promise(function(e,r){fetch(t.protocol+"://"+t.host+"/"+t.auth.uri,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Object.keys(n).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])}).join("&")}).then(parseJSON).then(function(t){t.ok&&e(t.json),r(t.json)}).catch(function(t){return r(t)})});return r.then(function(n){var r=new Credentials(t.client_id,n.access_token,n.expires);return e.set("moltinCredentials",JSON.stringify(r)),n}),r},RequestFactory.prototype.send=function(t,e,n,r){var i=this;void 0===n&&(n=void 0),void 0===r&&(r=void 0);var o=this.config,s=this.storage;return new Promise(function(a,u){var c=function(i){var s={Authorization:"Bearer: "+i.access_token,"Content-Type":"application/json","X-MOLTIN-SDK-LANGUAGE":o.sdk.language,"X-MOLTIN-SDK-VERSION":o.sdk.version};o.application&&(s["X-MOLTIN-APPLICATION"]=o.application),o.currency&&(s["X-MOLTIN-CURRENCY"]=o.currency),r&&(s["X-MOLTIN-CUSTOMER-TOKEN"]=r),fetch(o.protocol+"://"+o.host+"/"+o.version+"/"+t,{method:e.toUpperCase(),headers:s,body:buildRequestBody(n)}).then(parseJSON).then(function(t){t.ok&&a(t.json),u(t.json)}).catch(function(t){return u(t)})},p=JSON.parse(s.get("moltinCredentials"));return!p||!p.access_token||p.client_id!==o.client_id||Math.floor(Date.now()/1e3)>=p.expires?i.authenticate().then(function(t){return c(t)}).catch(function(t){return u(t)}):c(p)})};var BaseExtend=function(t){this.request=new RequestFactory(t),this.config=t};BaseExtend.prototype.All=function(t){void 0===t&&(t=null);var e=this.includes,n=this.sort,r=this.limit,i=this.offset,o=this.filter;return this.call=this.request.send(buildURL(this.endpoint,{includes:e,sort:n,limit:r,offset:i,filter:o}),"GET",void 0,t),this.call},BaseExtend.prototype.Get=function(t,e){return void 0===e&&(e=null),this.call=this.request.send(buildURL(this.endpoint+"/"+t,{includes:this.includes}),"GET",void 0,e),this.call},BaseExtend.prototype.Filter=function(t){return this.filter=t,this},BaseExtend.prototype.Limit=function(t){return this.limit=t,this},BaseExtend.prototype.Offset=function(t){return this.offset=t,this},BaseExtend.prototype.Sort=function(t){return this.sort=t,this},BaseExtend.prototype.With=function(t){return t&&(this.includes=t.toString().toLowerCase()),this};var CRUDExtend=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Create=function(t){return this.request.send(this.endpoint,"POST",Object.assign({},t,{type:singularize(this.endpoint)}))},e.prototype.Delete=function(t){return this.request.send(this.endpoint+"/"+t,"DELETE")},e.prototype.Update=function(t,e){return this.request.send(this.endpoint+"/"+t,"PUT",Object.assign({},e,{type:singularize(this.endpoint)}))},e}(BaseExtend),ProductsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="products"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.CreateRelationships=function(t,e,n){var r=buildRelationshipData(e,n),i=formatUrlResource(e);return this.request.send(this.endpoint+"/"+t+"/relationships/"+i,"POST",r)},e.prototype.DeleteRelationships=function(t,e,n){var r=buildRelationshipData(e,n),i=formatUrlResource(e);return this.request.send(this.endpoint+"/"+t+"/relationships/"+i,"DELETE",r)},e.prototype.UpdateRelationships=function(t,e,n){void 0===n&&(n=null);var r=buildRelationshipData(e,n),i=formatUrlResource(e);return this.request.send(this.endpoint+"/"+t+"/relationships/"+i,"PUT",r)},e}(CRUDExtend),CurrenciesEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="currencies",this.storage=this.config.storage}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Create=function(t){return this.request.send(""+this.endpoint,"POST",t)},e.prototype.Delete=function(t){return this.request.send(this.endpoint+"/"+t,"DELETE")},e.prototype.Update=function(t,e){return this.request.send(this.endpoint+"/"+t,"PUT",e)},e.prototype.Set=function(t){var e=this.config,n=this.storage;return n.set("mcurrency",t),e.currency=t,new Promise(function(t,e){var r=n.get("mcurrency");try{t(r)}catch(t){e(new Error(t))}})},e.prototype.Active=function(){var t=this.storage;return new Promise(function(e,n){var r=t.get("mcurrency");try{e(r)}catch(t){n(new Error(t))}})},e}(BaseExtend),BrandsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="brands"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(CRUDExtend),CartEndpoint=function(t){function e(e,n){t.apply(this,arguments),this.request=e,this.cartId=n,this.endpoint="carts"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Get=function(){return this.request.send(this.endpoint+"/"+this.cartId,"GET")},e.prototype.Items=function(){return this.request.send(this.endpoint+"/"+this.cartId+"/items","GET")},e.prototype.AddProduct=function(t,e){void 0===e&&(e=1);var n=buildCartItemData(t,e);return this.request.send(this.endpoint+"/"+this.cartId+"/items","POST",n)},e.prototype.AddCustomItem=function(t){var e=Object.assign(t,{type:"custom_item"});return this.request.send(this.endpoint+"/"+this.cartId+"/items","POST",e)},e.prototype.AddPromotion=function(t){var e=buildCartItemData(t,null,"promotion_item");return this.request.send(this.endpoint+"/"+this.cartId+"/items","POST",e)},e.prototype.RemoveItem=function(t){return this.request.send(this.endpoint+"/"+this.cartId+"/items/"+t,"DELETE")},e.prototype.UpdateItemQuantity=function(t,e){var n=buildCartItemData(t,e);return this.request.send(this.endpoint+"/"+this.cartId+"/items/"+t,"PUT",n)},e.prototype.Checkout=function(t,e,n){void 0===n&&(n=e);var r=buildCartCheckoutData(t,e,n);return this.request.send(this.endpoint+"/"+this.cartId+"/checkout","POST",r)},e.prototype.Delete=function(){return this.request.send(this.endpoint+"/"+this.cartId,"DELETE")},e}(BaseExtend),CategoriesEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="categories"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Tree=function(){return this.request.send(this.endpoint+"/tree","GET")},e}(CRUDExtend),CollectionsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="collections"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(CRUDExtend),OrdersEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="orders"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Items=function(t){return this.request.send(this.endpoint+"/"+t+"/items","GET")},e.prototype.Payment=function(t,e){return this.request.send(this.endpoint+"/"+t+"/payments","POST",e)},e.prototype.Transactions=function(t){return console.warn("DeprecationWarning: 'Order.Transactions(id)' will soon be deprecated. It's recommended you use Transactions class directly to get all, capture and refund transactions."),this.request.send(this.endpoint+"/"+t+"/transactions","GET")},e.prototype.Update=function(t,e){return this.request.send(this.endpoint+"/"+t,"PUT",Object.assign({},e,{type:"order"}))},e}(BaseExtend),GatewaysEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="gateways"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Update=function(t,e){return this.request.send(this.endpoint+"/"+t,"PUT",e)},e.prototype.Enabled=function(t,e){return this.request.send(this.endpoint+"/"+t,"PUT",{type:"gateway",enabled:e})},e}(BaseExtend),CustomersEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="customers"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Token=function(t,e){return this.request.send(this.endpoint+"/tokens","POST",{email:t,password:e,type:"token"})},e}(CRUDExtend),InventoriesEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="inventories"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.Get=function(t){return this.request.send(this.endpoint+"/"+t,"GET")},e.prototype.IncrementStock=function(t,e){return this.request.send(this.endpoint+"/"+t+"/transactions","POST",{action:"increment",quantity:e,type:"stock-transaction"})},e.prototype.DecrementStock=function(t,e){return this.request.send(this.endpoint+"/"+t+"/transactions","POST",{action:"decrement",quantity:e,type:"stock-transaction"})},e.prototype.AllocateStock=function(t,e){return this.request.send(this.endpoint+"/"+t+"/transactions","POST",{action:"allocate",quantity:e,type:"stock-transaction"})},e.prototype.DeallocateStock=function(t,e){return this.request.send(this.endpoint+"/"+t+"/transactions","POST",{action:"deallocate",quantity:e,type:"stock-transaction"})},e.prototype.GetTransactions=function(t){return this.request.send(this.endpoint+"/"+t+"/transactions","GET")},e}(BaseExtend),FlowsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="flows"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.GetEntries=function(t){return this.request.send(this.endpoint+"/"+t+"/entries","GET")},e.prototype.GetEntry=function(t,e){return this.request.send(this.endpoint+"/"+t+"/entries/"+e,"GET")},e.prototype.CreateEntry=function(t,e){return this.request.send(this.endpoint+"/"+t+"/entries","POST",Object.assign({},e,{type:"entry"}))},e.prototype.UpdateEntry=function(t,e,n){return this.request.send(this.endpoint+"/"+t+"/entries/"+e,"PUT",Object.assign({},n,{type:"entry"}))},e.prototype.DeleteEntry=function(t,e){return this.request.send(this.endpoint+"/"+t+"/entries/"+e,"DELETE")},e}(CRUDExtend),FieldsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="fields"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(CRUDExtend),AddressesEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="addresses"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.All=function(t){var e=t.customer,n=t.token;return void 0===n&&(n=null),this.request.send("customers/"+e+"/"+this.endpoint,"GET",void 0,n)},e.prototype.Get=function(t){var e=t.customer,n=t.address,r=t.token;return void 0===r&&(r=null),this.request.send("customers/"+e+"/"+this.endpoint+"/"+n,"GET",void 0,r)},e.prototype.Create=function(t){var e=t.customer,n=t.body,r=t.token;return void 0===r&&(r=null),this.request.send("customers/"+e+"/"+this.endpoint,"POST",Object.assign({},n,{type:singularize(this.endpoint)}),r)},e.prototype.Delete=function(t){var e=t.customer,n=t.address,r=t.token;return void 0===r&&(r=null),this.request.send("customers/"+e+"/"+this.endpoint+"/"+n,"DELETE",void 0,r)},e.prototype.Update=function(t){var e=t.customer,n=t.address,r=t.body,i=t.token;return void 0===i&&(i=null),this.request.send("customers/"+e+"/"+this.endpoint+"/"+n,"PUT",Object.assign({},r,{type:singularize(this.endpoint)}),i)},e}(BaseExtend),TransactionsEndpoint=function(t){function e(e){t.call(this,e),this.endpoint="transactions"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.All=function(t){var e=t.order;return this.request.send("orders/"+e+"/"+this.endpoint,"GET")},e.prototype.Capture=function(t){var e=t.order,n=t.transaction;return this.request.send("orders/"+e+"/transactions/"+n+"/capture","POST")},e.prototype.Refund=function(t){var e=t.order,n=t.transaction;return this.request.send("orders/"+e+"/transactions/"+n+"/refund","POST")},e}(BaseExtend),Moltin=function(t){this.config=t,this.cartId=cartIdentifier(t),this.request=new RequestFactory(t),this.Products=new ProductsEndpoint(t),this.Currencies=new CurrenciesEndpoint(t),this.Brands=new BrandsEndpoint(t),this.Categories=new CategoriesEndpoint(t),this.Collections=new CollectionsEndpoint(t),this.Orders=new OrdersEndpoint(t),this.Gateways=new GatewaysEndpoint(t),this.Customers=new CustomersEndpoint(t),this.Inventories=new InventoriesEndpoint(t),this.Flows=new FlowsEndpoint(t),this.Fields=new FieldsEndpoint(t),this.Addresses=new AddressesEndpoint(t),this.Transactions=new TransactionsEndpoint(t)};Moltin.prototype.Cart=function(t){return void 0===t&&(t=this.cartId),new CartEndpoint(this.request,t)},Moltin.prototype.Authenticate=function(){return this.request.authenticate()};var gateway=function(t){return new Moltin(new Config(t))};exports.default=Moltin,exports.gateway=gateway;