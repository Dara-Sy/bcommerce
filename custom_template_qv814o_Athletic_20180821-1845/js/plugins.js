/* ===============================
   ====== FOUNDATION.MIN.JS ======
   =============================== */
(function(b,a,d){var e=b(document),c=a.Modernizr;b(document).ready(function(){b.fn.foundationAlerts?e.foundationAlerts():null;b.fn.foundationButtons?e.foundationButtons():null;b.fn.foundationAccordion?e.foundationAccordion():null;b.fn.foundationNavigation?e.foundationNavigation():null;b.fn.foundationTopBar?e.foundationTopBar():null;b.fn.foundationCustomForms?e.foundationCustomForms():null;b.fn.foundationMediaQueryViewer?e.foundationMediaQueryViewer():null;b.fn.foundationTabs?e.foundationTabs({callback:b.foundation.customForms.appendCustomMarkup}):null;b.fn.foundationTooltips?e.foundationTooltips():null;b.fn.foundationMagellan?e.foundationMagellan():null;b.fn.foundationClearing?e.foundationClearing():null;b.fn.placeholder?b("input, textarea").placeholder():null});if(c.touch&&!a.location.hash){b(a).load(function(){setTimeout(function(){a.scrollTo(0,1)},0)})}})(jQuery,this);(function(b,a,c){b.fn.foundationAlerts=function(d){var e=b.extend({callback:b.noop},d);b(document).on("click",".alert-box a.close",function(f){f.preventDefault();b(this).closest(".alert-box").fadeOut(function(){b(this).remove();e.callback()})})}})(jQuery,this);(function(b,a,c){b.fn.foundationButtons=function(l){var g=b(document),e=b.extend({dropdownAsToggle:false,activeClass:"active"},l),f=function(m){b(".button.dropdown").find("ul").not(m).removeClass("show-dropdown")},i=function(m){var n=b(".button.dropdown").not(m);n.add(b("> span."+e.activeClass,n)).removeClass(e.activeClass)};g.on("click.fndtn",".button.disabled",function(m){m.preventDefault()});b(".button.dropdown > ul",this).addClass("no-hover");g.on("click.fndtn",".button.dropdown:not(.split), .button.dropdown.split span",function(o){var n=b(this),m=n.closest(".button.dropdown"),p=b("> ul",m);if(o.target.nodeName!=="A"){o.preventDefault()}setTimeout(function(){f(e.dropdownAsToggle?p:"");p.toggleClass("show-dropdown");if(e.dropdownAsToggle){i(m);n.toggleClass(e.activeClass)}},0)});g.on("click.fndtn","body, html",function(m){if(c==m.originalEvent){return}if(!b(m.originalEvent.target).is(".button.dropdown:not(.split), .button.dropdown.split span")){f();if(e.dropdownAsToggle){i()}}});var h=b(".button.dropdown:not(.large):not(.small):not(.tiny):visible",this).outerHeight()-1,k=b(".button.large.dropdown:visible",this).outerHeight()-1,d=b(".button.small.dropdown:visible",this).outerHeight()-1,j=b(".button.tiny.dropdown:visible",this).outerHeight()-1;b(".button.dropdown:not(.large):not(.small):not(.tiny) > ul",this).css("top",h);b(".button.dropdown.large > ul",this).css("top",k);b(".button.dropdown.small > ul",this).css("top",d);b(".button.dropdown.tiny > ul",this).css("top",j);b(".button.dropdown.up:not(.large):not(.small):not(.tiny) > ul",this).css("top","auto").css("bottom",h-2);b(".button.dropdown.up.large > ul",this).css("top","auto").css("bottom",k-2);b(".button.dropdown.up.small > ul",this).css("top","auto").css("bottom",d-2);b(".button.dropdown.up.tiny > ul",this).css("top","auto").css("bottom",j-2)}})(jQuery,this);(function(d,c,a,f){var e={templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="#"><p class="clearing-caption"></p><a href="#" class="clearing-main-left"></a><a href="#" class="clearing-main-right"></a></div>'},close_selectors:"a.clearing-close",initialized:false,locked:false},b={init:function(g,h){return this.find("ul[data-clearing]").each(function(){var l=d(a),j=d(this),i=i||{},m=m||{},k=j.data("fndtn.clearing.settings");if(!k){i.$parent=j.parent();j.data("fndtn.clearing.settings",d.extend({},e,i));b.assemble(j.find("li"));if(!e.initialized){b.events(j);if(Modernizr.touch){b.swipe_events()}}}})},events:function(h){var g=h.data("fndtn.clearing.settings");d(a).on("click.fndtn.clearing","ul[data-clearing] li",function(l,k,j){var k=k||d(this),j=j||k,i=k.parent().data("fndtn.clearing.settings");l.preventDefault();if(!i){k.parent().foundationClearing()}b.open(d(l.target),k,j);b.update_paddles(j)}).on("click.fndtn.clearing",".clearing-main-right",function(i){b.nav(i,"next")}).on("click.fndtn.clearing",".clearing-main-left",function(i){b.nav(i,"prev")}).on("click.fndtn.clearing",g.close_selectors,this.close).on("keydown.fndtn.clearing",this.keydown);d(c).on("resize.fndtn.clearing",this.resize);e.initialized=true},swipe_events:function(){d(a).bind("swipeleft","ul[data-clearing]",function(g){b.nav(g,"next")}).bind("swiperight","ul[data-clearing]",function(g){b.nav(g,"prev")}).bind("movestart","ul[data-clearing]",function(g){if((g.distX>g.distY&&g.distX<-g.distY)||(g.distX<g.distY&&g.distX>-g.distY)){g.preventDefault()}})},assemble:function(l){var h=l.parent(),i=h.data("fndtn.clearing.settings"),g=h.detach(),j={grid:'<div class="carousel">'+this.outerHTML(g[0])+"</div>",viewing:i.templates.viewing},k='<div class="clearing-assembled"><div>'+j.viewing+j.grid+"</div></div>";return i.$parent.append(k)},open:function(j,m,l){var h=l.closest(".clearing-assembled"),g=h.find("div:first"),i=g.find(".visible-img"),k=i.find("img").not(j);if(!b.locked()){k.attr("src",this.load(j));k.loaded(function(){h.addClass("clearing-blackout");g.addClass("clearing-container");this.caption(i.find(".clearing-caption"),j);i.show();this.fix_height(l);this.center(k);this.shift(m,l,function(){l.siblings().removeClass("visible");l.addClass("visible")})}.bind(this))}},close:function(j){j.preventDefault();var h=(function(k){if(/blackout/.test(k.selector)){return k}else{return k.closest(".clearing-blackout")}}(d(this))),g,i;if(this===j.target&&h){g=h.find("div:first"),i=g.find(".visible-img");e.prev_index=0;h.find("ul[data-clearing]").attr("style","");h.removeClass("clearing-blackout");g.removeClass("clearing-container");i.hide()}return false},keydown:function(h){var g=d(".clearing-blackout").find("ul[data-clearing]");if(h.which===39){b.go(g,"next")}if(h.which===37){b.go(g,"prev")}if(h.which===27){d("a.clearing-close").trigger("click")}},nav:function(i,h){var g=d(".clearing-blackout").find("ul[data-clearing]");i.preventDefault();this.go(g,h)},resize:function(){var g=d(".clearing-blackout .visible-img").find("img");if(g.length>0){b.center(g)}},fix_height:function(h){var g=h.siblings();g.each(function(){var i=d(this),j=i.find("img");if(i.height()>j.outerHeight()){i.addClass("fix-height")}}).closest("ul").width(g.length*100+"%")},update_paddles:function(h){var g=h.closest(".carousel").siblings(".visible-img");if(h.next().length>0){g.find(".clearing-main-right").removeClass("disabled")}else{g.find(".clearing-main-right").addClass("disabled")}if(h.prev().length>0){g.find(".clearing-main-left").removeClass("disabled")}else{g.find(".clearing-main-left").addClass("disabled")}},load:function(h){var g=h.parent().attr("href");this.preload(h);if(g){return g}return h.attr("src")},preload:function(g){this.img(g.closest("li").next());this.img(g.closest("li").prev())},img:function(g){if(g.length>0){var h=new Image(),i=g.find("a");if(i.length>0){h.src=i.attr("href")}else{h.src=g.find("img").attr("src")}}},caption:function(g,i){var h=i.data("caption");if(h){g.text(h).show()}else{g.text("").hide()}},go:function(g,j){var i=g.find(".visible"),h=i[j]();if(h.length>0){h.find("img").trigger("click",[i,h])}},shift:function(j,k,o){var l=k.parent(),i=e.prev_index,m=this.direction(l,j,k),h=parseInt(l.css("left"),10),g=k.outerWidth(),n;if(k.index()!==i&&!/skip/.test(m)){if(/left/.test(m)){this.lock();l.animate({left:h+g},300,this.unlock)}else{if(/right/.test(m)){this.lock();l.animate({left:h-g},300,this.unlock)}}}else{if(/skip/.test(m)){n=k.index()-e.up_count;this.lock();if(n>0){l.animate({left:-(n*g)},300,this.unlock)}else{l.animate({left:0},300,this.unlock)}}}o()},lock:function(){e.locked=true},unlock:function(){e.locked=false},locked:function(){return e.locked},direction:function(j,l,k){var i=j.find("li"),h=i.outerWidth()+(i.outerWidth()/4),m=Math.floor(d(".clearing-container").outerWidth()/h)-1,n=i.index(k),g;e.up_count=m;if(this.adjacent(e.prev_index,n)){if((n>m)&&n>e.prev_index){g="right"}else{if((n>m-1)&&n<=e.prev_index){g="left"}else{g=false}}}else{g="skip"}e.prev_index=n;return g},adjacent:function(j,h){for(var g=h+1;g>=h-1;g--){if(g===j){return true}}return false},center:function(g){g.css({marginLeft:-(g.width()/2),marginTop:-(g.height()/2)})},outerHTML:function(g){return g.outerHTML||new XMLSerializer().serializeToString(g)}};d.fn.foundationClearing=function(g){if(b[g]){return b[g].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof g==="object"||!g){return b.init.apply(this,arguments)}else{d.error("Method "+g+" does not exist on jQuery.foundationClearing")}}};(function(g){g.fn.loaded=function(n,l){var j=g.extend({},g.fn.loaded.defaults,l),i=this.find("img").add(this.filter("img")),k=i.length;function h(){k-=1;!k&&n()}function m(){this.one("load",h);if(g.browser.msie){var p=this.attr("src"),o=p.match(/\?/)?"&":"?";o+=j.cachePrefix+"="+(new Date()).getTime();this.attr("src",p+o)}}return i.each(function(){var o=g(this);if(!o.attr("src")){h();return}this.complete||this.readyState===4?h():m.call(o)})};g.fn.loaded.defaults={cachePrefix:"random"}}(jQuery))}(jQuery,this,this.document));(function(d){var c=function(){return{tmp:[],hidden:null,adjust:function(g){var f=this;f.hidden=g.parents().andSelf().filter(":hidden");f.hidden.each(function(){var h=d(this);f.tmp.push(h.attr("style"));h.css({visibility:"hidden",display:"block"})})},reset:function(){var f=this;f.hidden.each(function(h){var g=d(this),j=f.tmp[h];if(j===undefined){g.removeAttr("style")}else{g.attr("style",j)}});f.tmp=[];f.hidden=null}}};jQuery.foundation=jQuery.foundation||{};jQuery.foundation.customForms=jQuery.foundation.customForms||{};d.foundation.customForms.appendCustomMarkup=function(h){var i={disable_class:"js-disable-custom"};h=d.extend(i,h);function g(j,m){var n=d(m).hide(),l=n.attr("type"),k=n.next("span.custom."+l);if(k.length===0){k=d('<span class="custom '+l+'"></span>').insertAfter(n)}k.toggleClass("checked",n.is(":checked"));k.toggleClass("disabled",n.is(":disabled"))}function f(u,l){var x=c();var q=d(l),p=q.next("div.custom.dropdown"),r=p.find("ul"),s=p.find(".current"),w=p.find(".selector"),o=q.find("option"),m=o.filter(":selected"),v=0,t="",k;var j=false;if(q.hasClass("no-custom")){return}if(p.length===0){var n=q.hasClass("small")?"small":q.hasClass("medium")?"medium":q.hasClass("large")?"large":q.hasClass("expand")?"expand":"";p=d('<div class="'+["custom","dropdown",n].join(" ")+'"><a href="#" class="selector"></a><ul /></div>"');w=p.find(".selector");r=p.find("ul");t=o.map(function(){return"<li>"+d(this).html()+"</li>"}).get().join("");r.append(t);j=p.prepend('<a href="#" class="current">'+m.html()+"</a>").find(".current");q.after(p).hide()}else{t=o.map(function(){return"<li>"+d(this).html()+"</li>"}).get().join("");r.html("").append(t)}p.toggleClass("disabled",q.is(":disabled"));k=r.find("li");o.each(function(y){if(this.selected){k.eq(y).addClass("selected");if(j){j.html(d(this).html())}}});r.css("width","inherit");p.css("width","inherit");if(!p.is(".small, .medium, .large, .expand")){p.addClass("open");x.adjust(r);v=(k.outerWidth()>v)?k.outerWidth():v;x.reset();p.removeClass("open");p.width(v+18);r.width(v+16)}}d("form.custom input:radio[data-customforms!=disabled]").each(g);d("form.custom input:checkbox[data-customforms!=disabled]").each(g);d("form.custom select[data-customforms!=disabled]").each(f)};var b=function(f){var g=0,h=f.next();$options=f.find("option");h.find("ul").html("");$options.each(function(){$li=d("<li>"+d(this).html()+"</li>");h.find("ul").append($li)});$options.each(function(i){if(this.selected){h.find("li").eq(i).addClass("selected");h.find(".current").html(d(this).html())}});h.removeAttr("style").find("ul").removeAttr("style");h.find("li").each(function(){h.addClass("open");if(d(this).outerWidth()>g){g=d(this).outerWidth()}h.removeClass("open")});h.css("width",g+18+"px");h.find("ul").css("width",g+16+"px")};var a=function(f){var h=f.prev(),g=h[0];if(false===h.is(":disabled")){g.checked=((g.checked)?false:true);f.toggleClass("checked");h.trigger("change")}};var e=function(f){var i=f.prev(),h=i.closest("form.custom"),g=i[0];if(false===i.is(":disabled")){h.find('input:radio[name="'+i.attr("name")+'"]').next().not(f).removeClass("checked");if(!f.hasClass("checked")){f.toggleClass("checked")}g.checked=f.hasClass("checked");i.trigger("change")}};d(document).on("click","form.custom span.custom.checkbox",function(f){f.preventDefault();f.stopPropagation();a(d(this))});d(document).on("click","form.custom span.custom.radio",function(f){f.preventDefault();f.stopPropagation();e(d(this))});d(document).on("change","form.custom select[data-customforms!=disabled]",function(f){b(d(this))});d(document).on("click","form.custom label",function(g){var f=d("#"+d(this).attr("for")+"[data-customforms!=disabled]"),i,h;if(f.length!==0){if(f.attr("type")==="checkbox"){g.preventDefault();i=d(this).find("span.custom.checkbox");a(i)}else{if(f.attr("type")==="radio"){g.preventDefault();h=d(this).find("span.custom.radio");e(h)}}}});d(document).on("click","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(g){var i=d(this),h=i.closest("div.custom.dropdown"),f=h.prev();g.preventDefault();d("div.dropdown").removeClass("open");if(false===f.is(":disabled")){h.toggleClass("open");if(h.hasClass("open")){d(document).bind("click.customdropdown",function(j){h.removeClass("open");d(document).unbind(".customdropdown")})}else{d(document).unbind(".customdropdown")}return false}});d(document).on("click","form.custom div.custom.dropdown li",function(i){var j=d(this),g=j.closest("div.custom.dropdown"),h=g.prev(),f=0;i.preventDefault();i.stopPropagation();d("div.dropdown").removeClass("open");j.closest("ul").find("li").removeClass("selected");j.addClass("selected");g.removeClass("open").find("a.current").html(j.html());j.closest("ul").find("li").each(function(k){if(j[0]==this){f=k}});h[0].selectedIndex=f;h.trigger("change")});d.fn.foundationCustomForms=d.foundation.customForms.appendCustomMarkup})(jQuery);(function(b,a,c){b.fn.foundationMediaQueryViewer=function(d){var e=b.extend(d,{toggleKey:77}),f=b(document);f.on("keyup.mediaQueryViewer",":input",function(g){if(g.which===e.toggleKey){g.stopPropagation()}});f.on("keyup.mediaQueryViewer",function(g){var h=b("#fqv");if(g.which===e.toggleKey){if(h.length>0){h.remove()}else{b("body").prepend('<div id="fqv" style="position:fixed;top:4px;left:4px;z-index:999;color:#fff;"><p style="font-size:12px;background:rgba(0,0,0,0.75);padding:5px;margin-bottom:1px;line-height:1.2;"><span class="left">Media:</span> <span style="font-weight:bold;" class="show-for-xlarge">Extra Large</span><span style="font-weight:bold;" class="show-for-large">Large</span><span style="font-weight:bold;" class="show-for-medium">Medium</span><span style="font-weight:bold;" class="show-for-small">Small</span><span style="font-weight:bold;" class="show-for-landscape">Landscape</span><span style="font-weight:bold;" class="show-for-portrait">Portrait</span><span style="font-weight:bold;" class="show-for-touch">Touch</span></p></div>')}}})}})(jQuery,this);(function(b,a,c){b.fn.foundationNavigation=function(e){var d=false;if(Modernizr.touch||navigator.userAgent.match(/Windows Phone/i)){b(document).on("click.fndtn touchstart.fndtn",".nav-bar a.flyout-toggle",function(g){g.preventDefault();var f=b(this).siblings(".flyout").first();if(d===false){b(".nav-bar .flyout").not(f).slideUp(500);f.slideToggle(500,function(){d=false})}d=true});b(".nav-bar>li.has-flyout",this).addClass("is-touch")}else{b(".nav-bar>li.has-flyout",this).on("mouseenter mouseleave",function(h){if(h.type=="mouseenter"){b(".nav-bar").find(".flyout").hide();b(this).children(".flyout").show()}if(h.type=="mouseleave"){var g=b(this).children(".flyout"),f=g.find("input"),i=function(k){var j;if(k.length>0){k.each(function(){if(b(this).is(":focus")){j=true}});return j}return false};if(!i(f)){b(this).children(".flyout").hide()}}})}}})(jQuery,this);(function(b){b.fn.findFirstImage=function(){return this.first().find("img").andSelf().filter("img").first()};var a={defaults:{animation:"horizontal-push",animationSpeed:600,timer:true,advanceSpeed:4000,pauseOnHover:false,startClockOnMouseOut:false,startClockOnMouseOutAfter:1000,directionalNav:true,directionalNavRightText:"Right",directionalNavLeftText:"Left",captions:true,captionAnimation:"fade",captionAnimationSpeed:600,resetTimerOnClick:false,bullets:false,bulletThumbs:false,bulletThumbLocation:"",afterSlideChange:b.noop,afterLoadComplete:b.noop,fluid:true,centerBullets:true,singleCycle:false,slideNumber:false,stackOnSmall:false},activeSlide:0,numberSlides:0,orbitWidth:null,orbitHeight:null,locked:null,timerRunning:null,degrees:0,wrapperHTML:'<div class="orbit-wrapper" />',timerHTML:'<div class="timer"><span class="mask"><span class="rotator"></span></span><span class="pause"></span></div>',captionHTML:'<div class="orbit-caption"></div>',directionalNavHTML:'<div class="slider-nav hide-for-small"><span class="right"></span><span class="left"></span></div>',bulletHTML:'<ul class="orbit-bullets"></ul>',slideNumberHTML:'<span class="orbit-slide-counter"></span>',init:function(f,e){var c,g=0,d=this;this.clickTimer=b.proxy(this.clickTimer,this);this.addBullet=b.proxy(this.addBullet,this);this.resetAndUnlock=b.proxy(this.resetAndUnlock,this);this.stopClock=b.proxy(this.stopClock,this);this.startTimerAfterMouseLeave=b.proxy(this.startTimerAfterMouseLeave,this);this.clearClockMouseLeaveTimer=b.proxy(this.clearClockMouseLeaveTimer,this);this.rotateTimer=b.proxy(this.rotateTimer,this);this.options=b.extend({},this.defaults,e);if(this.options.timer==="false"){this.options.timer=false}if(this.options.captions==="false"){this.options.captions=false}if(this.options.directionalNav==="false"){this.options.directionalNav=false}this.$element=b(f);this.$wrapper=this.$element.wrap(this.wrapperHTML).parent();this.$slides=this.$element.children("img, a, div, figure");this.$element.on("movestart",function(h){if((h.distX>h.distY&&h.distX<-h.distY)||(h.distX<h.distY&&h.distX>-h.distY)){h.preventDefault()}});this.$element.bind("orbit.next",function(){d.shift("next")});this.$element.bind("orbit.prev",function(){d.shift("prev")});this.$element.bind("swipeleft",function(){b(this).trigger("orbit.next")});this.$element.bind("swiperight",function(){b(this).trigger("orbit.prev")});this.$element.bind("orbit.goto",function(i,h){d.shift(h)});this.$element.bind("orbit.start",function(i,h){d.startClock()});this.$element.bind("orbit.stop",function(i,h){d.stopClock()});c=this.$slides.filter("img");if(c.length===0){this.loaded()}else{c.bind("imageready",function(){g+=1;if(g===c.length){d.loaded()}})}},loaded:function(){this.$element.addClass("orbit").css({width:"1px",height:"1px"});if(this.options.stackOnSmall){this.$element.addClass("orbit-stack-on-small")}this.$slides.addClass("orbit-slide");this.setDimentionsFromLargestSlide();this.updateOptionsIfOnlyOneSlide();this.setupFirstSlide();this.notifySlideChange();if(this.options.timer){this.setupTimer();this.startClock()}if(this.options.captions){this.setupCaptions()}if(this.options.directionalNav){this.setupDirectionalNav()}if(this.options.bullets){this.setupBulletNav();this.setActiveBullet()}this.options.afterLoadComplete.call(this);Holder.run()},currentSlide:function(){return this.$slides.eq(this.activeSlide)},notifySlideChange:function(){if(this.options.slideNumber){var c=(this.activeSlide+1)+" of "+this.$slides.length;this.$element.trigger("orbit.change",{slideIndex:this.activeSlide,slideCount:this.$slides.length});if(this.$counter===undefined){var d=b(this.slideNumberHTML).html(c);this.$counter=d;this.$wrapper.append(this.$counter)}else{this.$counter.html(c)}}},setDimentionsFromLargestSlide:function(){var d=this,c;d.$element.add(d.$wrapper).width(this.$slides.first().outerWidth());d.$element.add(d.$wrapper).height(this.$slides.first().height());d.orbitWidth=this.$slides.first().outerWidth();d.orbitHeight=this.$slides.first().height();c=this.$slides.first().findFirstImage().clone();this.$slides.each(function(){var e=b(this),g=e.outerWidth(),f=e.height();if(g>d.$element.outerWidth()){d.$element.add(d.$wrapper).width(g);d.orbitWidth=d.$element.outerWidth()}if(f>d.$element.height()){d.$element.add(d.$wrapper).height(f);d.orbitHeight=d.$element.height();c=b(this).findFirstImage().clone()}d.numberSlides+=1});if(this.options.fluid){if(typeof this.options.fluid==="string"){c=b("<img>").attr("data-src","holder.js/"+this.options.fluid)}d.$element.prepend(c);c.addClass("fluid-placeholder");d.$element.add(d.$wrapper).css({width:"inherit"});d.$element.add(d.$wrapper).css({height:"inherit"});b(window).bind("resize",function(){d.orbitWidth=d.$element.outerWidth();d.orbitHeight=d.$element.height()})}},lock:function(){this.locked=true},unlock:function(){this.locked=false},updateOptionsIfOnlyOneSlide:function(){if(this.$slides.length===1){this.options.directionalNav=false;this.options.timer=false;this.options.bullets=false}},setupFirstSlide:function(){var c=this;this.$slides.first().css({"z-index":3,opacity:1}).fadeIn(function(){c.$slides.css({display:"block"})})},startClock:function(){var c=this;if(!this.options.timer){return false}if(this.$timer.is(":hidden")){this.clock=setInterval(function(){c.$element.trigger("orbit.next")},this.options.advanceSpeed)}else{this.timerRunning=true;this.$pause.removeClass("active");this.clock=setInterval(this.rotateTimer,this.options.advanceSpeed/180,false)}},rotateTimer:function(d){var c="rotate("+this.degrees+"deg)";this.degrees+=2;this.$rotator.css({"-webkit-transform":c,"-moz-transform":c,"-o-transform":c,"-ms-transform":c});if(d){this.degrees=0;this.$rotator.removeClass("move");this.$mask.removeClass("move")}if(this.degrees>180){this.$rotator.addClass("move");this.$mask.addClass("move")}if(this.degrees>360){this.$rotator.removeClass("move");this.$mask.removeClass("move");this.degrees=0;this.$element.trigger("orbit.next")}},stopClock:function(){if(!this.options.timer){return false}else{this.timerRunning=false;clearInterval(this.clock);this.$pause.addClass("active")}},setupTimer:function(){this.$timer=b(this.timerHTML);this.$wrapper.append(this.$timer);this.$rotator=this.$timer.find(".rotator");this.$mask=this.$timer.find(".mask");this.$pause=this.$timer.find(".pause");this.$timer.click(this.clickTimer);if(this.options.startClockOnMouseOut){this.$wrapper.mouseleave(this.startTimerAfterMouseLeave);this.$wrapper.mouseenter(this.clearClockMouseLeaveTimer)}if(this.options.pauseOnHover){this.$wrapper.mouseenter(this.stopClock)}},startTimerAfterMouseLeave:function(){var c=this;this.outTimer=setTimeout(function(){if(!c.timerRunning){c.startClock()}},this.options.startClockOnMouseOutAfter)},clearClockMouseLeaveTimer:function(){clearTimeout(this.outTimer)},clickTimer:function(){if(!this.timerRunning){this.startClock()}else{this.stopClock()}},setupCaptions:function(){this.$caption=b(this.captionHTML);this.$wrapper.append(this.$caption);this.setCaption()},setCaption:function(){var d=this.currentSlide().attr("data-caption"),c;if(!this.options.captions){return false}if(d){if(b.trim(b(d).text()).length<1){return false}if(d.charAt(0)=="#"){d=d.substring(1,d.length)}c=b(d).html();this.$caption.attr("id",d).html(c);switch(this.options.captionAnimation){case"none":this.$caption.show();break;case"fade":this.$caption.fadeIn(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideDown(this.options.captionAnimationSpeed);break}}else{switch(this.options.captionAnimation){case"none":this.$caption.hide();break;case"fade":this.$caption.fadeOut(this.options.captionAnimationSpeed);break;case"slideOpen":this.$caption.slideUp(this.options.captionAnimationSpeed);break}}},setupDirectionalNav:function(){var c=this,d=b(this.directionalNavHTML);d.find(".right").html(this.options.directionalNavRightText);d.find(".left").html(this.options.directionalNavLeftText);this.$wrapper.append(d);this.$wrapper.find(".left").click(function(){c.stopClock();if(c.options.resetTimerOnClick){c.rotateTimer(true);c.startClock()}c.$element.trigger("orbit.prev")});this.$wrapper.find(".right").click(function(){c.stopClock();if(c.options.resetTimerOnClick){c.rotateTimer(true);c.startClock()}c.$element.trigger("orbit.next")})},setupBulletNav:function(){this.$bullets=b(this.bulletHTML);this.$wrapper.append(this.$bullets);this.$slides.each(this.addBullet);this.$element.addClass("with-bullets");if(this.options.centerBullets){this.$bullets.css("margin-left",-this.$bullets.outerWidth()/2)}},addBullet:function(g,e){var d=g+1,h=b("<li>"+(d)+"</li>"),c,f=this;if(this.options.bulletThumbs){c=b(e).attr("data-thumb");if(c){h.addClass("has-thumb").css({background:"url("+this.options.bulletThumbLocation+c+") no-repeat"})}}this.$bullets.append(h);h.data("index",g);h.click(function(){f.stopClock();if(f.options.resetTimerOnClick){f.rotateTimer(true);f.startClock()}f.$element.trigger("orbit.goto",[h.data("index")])})},setActiveBullet:function(){if(!this.options.bullets){return false}else{this.$bullets.find("li").removeClass("active").eq(this.activeSlide).addClass("active")}},resetAndUnlock:function(){this.$slides.eq(this.prevActiveSlide).css({"z-index":1});this.unlock();this.options.afterSlideChange.call(this,this.$slides.eq(this.prevActiveSlide),this.$slides.eq(this.activeSlide))},shift:function(d){var c=d;this.prevActiveSlide=this.activeSlide;if(this.prevActiveSlide==c){return false}if(this.$slides.length=="1"){return false}if(!this.locked){this.lock();if(d=="next"){this.activeSlide++;if(this.activeSlide==this.numberSlides){this.activeSlide=0}}else{if(d=="prev"){this.activeSlide--;if(this.activeSlide<0){this.activeSlide=this.numberSlides-1}}else{this.activeSlide=d;if(this.prevActiveSlide<this.activeSlide){c="next"}else{if(this.prevActiveSlide>this.activeSlide){c="prev"}}}}this.setActiveBullet();this.notifySlideChange();this.$slides.eq(this.prevActiveSlide).css({"z-index":2});if(this.options.animation=="fade"){this.$slides.eq(this.activeSlide).css({opacity:0,"z-index":3}).animate({opacity:1},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({opacity:0},this.options.animationSpeed)}if(this.options.animation=="horizontal-slide"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).css("opacity",1).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).css("opacity",1).animate({left:0},this.options.animationSpeed,this.resetAndUnlock)}this.$slides.eq(this.prevActiveSlide).css("opacity",0)}if(this.options.animation=="vertical-slide"){if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).css("opacity",1).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).css("opacity",0)}if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).css("opacity",1).animate({top:0},this.options.animationSpeed,this.resetAndUnlock)}this.$slides.eq(this.prevActiveSlide).css("opacity",0)}if(this.options.animation=="horizontal-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({left:this.orbitWidth,"z-index":3}).animate({left:0,opacity:1},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:-this.orbitWidth},this.options.animationSpeed,"",function(){b(this).css({opacity:0})})}if(c=="prev"){this.$slides.eq(this.activeSlide).css({left:-this.orbitWidth,"z-index":3}).animate({left:0,opacity:1},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).animate({left:this.orbitWidth},this.options.animationSpeed,"",function(){b(this).css({opacity:0})})}}if(this.options.animation=="vertical-push"){if(c=="next"){this.$slides.eq(this.activeSlide).css({top:-this.orbitHeight,"z-index":3}).css("opacity",1).animate({top:0,opacity:1},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).css("opacity",0).animate({top:this.orbitHeight},this.options.animationSpeed,"")}if(c=="prev"){this.$slides.eq(this.activeSlide).css({top:this.orbitHeight,"z-index":3}).css("opacity",1).animate({top:0},this.options.animationSpeed,this.resetAndUnlock);this.$slides.eq(this.prevActiveSlide).css("opacity",0).animate({top:-this.orbitHeight},this.options.animationSpeed)}}this.setCaption()}if(this.$slides.last()&&this.options.singleCycle){this.stopClock()}}};b.fn.orbit=function(c){return this.each(function(){var d=b.extend({},a);d.init(this,c)})}})(jQuery);
/*!
 * jQuery imageready Plugin
 * http://www.zurb.com/playground/
 *
 * Copyright 2011, ZURB
 * Released under the MIT License
 */
(function(c){var b={};c.event.special.imageready={setup:function(f,e,d){b=f||b},add:function(d){var e=c(this),f;if(this.nodeType===1&&this.tagName.toLowerCase()==="img"&&this.src!==""){if(b.forceLoad){f=e.attr("src");e.attr("src","");a(this,d.handler);e.attr("src",f)}else{if(this.complete||this.readyState===4){d.handler.apply(this,arguments)}else{a(this,d.handler)}}}},teardown:function(d){c(this).unbind(".imageready")}};function a(d,f){var e=c(d);e.bind("load.imageready",function(){f.apply(d,arguments);e.unbind("load.imageready")})}}(jQuery));var Holder=Holder||{};(function(b,g){var l=false,f=false,a=document.createElement("canvas");function e(w,I){var x="complete",J="readystatechange",H=!1,A=H,D=!0,z=w.document,F=z.documentElement,C=z.addEventListener?"addEventListener":"attachEvent",G=z.addEventListener?"removeEventListener":"detachEvent",B=z.addEventListener?"":"on",p=function(n){(n.type!=J||z.readyState==x)&&((n.type=="load"?w:z)[G](B+n.type,p,H),!A&&(A=!0)&&I.call(w,null))},q=function(){try{F.doScroll("left")}catch(o){setTimeout(q,50);return}p("poll")};if(z.readyState==x){I.call(w,"lazy")}else{if(z.createEventObject&&F.doScroll){try{D=!w.frameElement}catch(E){}D&&q()}z[C](B+"DOMContentLoaded",p,H),z[C](B+J,p,H),w[C](B+"load",p,H)}}function d(o){o=o.match(/^(\W)?(.*)/);var n=document["getElement"+(o[1]?o[1]=="#"?"ById":"sByClassName":"sByTagName")](o[2]);var p=[];n!=null&&(n.length?p=n:n.length==0?p=n:p=[n]);return p}function i(o,n){var r={};for(var q in o){r[q]=o[q]}for(var p in n){r[p]=n[p]}return r}function k(o,s,q){var p=[s.height,s.width].sort();var u=Math.round(p[1]/16),n=Math.round(p[0]/16);var r=Math.max(q.size,u);a.width=s.width;a.height=s.height;o.textAlign="center";o.textBaseline="middle";o.fillStyle=q.background;o.fillRect(0,0,s.width,s.height);o.fillStyle=q.foreground;o.font="bold "+r+"px sans-serif";var t=q.text?q.text:(s.width+"x"+s.height);if(Math.round(o.measureText(t).width)/s.width>1){r=Math.max(n,q.size)}o.font="bold "+r+"px sans-serif";o.fillText(t,(s.width/2),(s.height/2),s.width);return a.toDataURL("image/png")}if(!a.getContext){f=true}else{if(a.toDataURL("image/png").indexOf("data:image/png")<0){f=true}else{var m=a.getContext("2d")}}var c={domain:"holder.js",images:"img",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}}};b.flags={dimensions:{regex:/([0-9]+)x([0-9]+)/,output:function(o){var n=this.regex.exec(o);return{width:+n[1],height:+n[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(o){var n=this.regex.exec(o);return{size:c.themes.gray.size,foreground:"#"+n[2],background:"#"+n[1]}}},text:{regex:/text\:(.*)/,output:function(n){return this.regex.exec(n)[1]}}};for(var h in b.flags){b.flags[h].match=function(n){return n.match(this.regex)}}b.add_theme=function(n,o){n!=null&&o!=null&&(c.themes[n]=o);return b};b.add_image=function(s,q){var r=d(q);if(r.length){for(var p=0,n=r.length;p<n;p++){var o=document.createElement("img");o.setAttribute("data-src",s);r[p].appendChild(o)}}return b};b.run=function(s){var A=i(c,s),x=d(A.images),y=true;for(var u=x.length,w=0;w<u;w++){var v=c.themes.gray;var p=x[w].getAttribute("data-src")||x[w].getAttribute("src");if(!!~p.indexOf(A.domain)){var r=false,n=null,z=null;var t=p.substr(p.indexOf(A.domain)+A.domain.length+1).split("/");for(sl=t.length,j=0;j<sl;j++){if(b.flags.dimensions.match(t[j])){r=true;n=b.flags.dimensions.output(t[j])}else{if(b.flags.colors.match(t[j])){v=b.flags.colors.output(t[j])}else{if(A.themes[t[j]]){v=A.themes[t[j]]}else{if(b.flags.text.match(t[j])){z=b.flags.text.output(t[j])}}}}}if(r){x[w].setAttribute("data-src",p);var q=n.width+"x"+n.height;x[w].setAttribute("alt",z?z:v.text?v.text+" ["+q+"]":q);x[w].style.backgroundColor=v.background;var v=(z?i(v,{text:z}):v);if(!f){x[w].setAttribute("src",k(m,n,v))}}}}return b};e(g,function(){l||b.run()})})(Holder,window);(function(b){var a=false;b(document).on("click","a[data-reveal-id]",function(d){d.preventDefault();var c=b(this).attr("data-reveal-id");b("#"+c).reveal(b(this).data())});b.fn.reveal=function(c){var e=b(document),d={animation:"fadeAndPop",animationSpeed:300,closeOnBackgroundClick:true,dismissModalClass:"close-reveal-modal",open:b.noop,opened:b.noop,close:b.noop,closed:b.noop};c=b.extend({},d,c);return this.not(".reveal-modal.open").each(function(){var s=b(this),k=parseInt(s.css("top"),10),n=s.height()+k,m=false,i=b(".reveal-modal-bg"),l={open:{top:0,opacity:0,visibility:"visible",display:"block"},close:{top:k,opacity:1,visibility:"hidden",display:"none"}},h;if(i.length===0){i=b("<div />",{"class":"reveal-modal-bg"}).insertAfter(s);i.fadeTo("fast",0.8)}function o(){m=false}function t(){m=true}function q(){var u=b(".reveal-modal.open");if(u.length===1){a=true;u.trigger("reveal:close")}}function p(){if(!m){t();q();s.addClass("open");if(c.animation==="fadeAndPop"){l.open.top=e.scrollTop()-n;l.open.opacity=0;s.css(l.open);i.fadeIn(c.animationSpeed/2);s.delay(c.animationSpeed/2).animate({top:e.scrollTop()+k+"px",opacity:1},c.animationSpeed,function(){s.trigger("reveal:opened")})}if(c.animation==="fade"){l.open.top=e.scrollTop()+k;l.open.opacity=0;s.css(l.open);i.fadeIn(c.animationSpeed/2);s.delay(c.animationSpeed/2).animate({opacity:1},c.animationSpeed,function(){s.trigger("reveal:opened")})}if(c.animation==="none"){l.open.top=e.scrollTop()+k;l.open.opacity=1;s.css(l.open);i.css({display:"block"});s.trigger("reveal:opened")}}}function f(){var v=s.find(".flex-video"),u=v.find("iframe");if(u.length>0){u.attr("src",u.data("src"));v.fadeIn(100)}}s.bind("reveal:open.reveal",p);s.bind("reveal:open.reveal",f);function j(){if(!m){t();s.removeClass("open");if(c.animation==="fadeAndPop"){s.animate({top:e.scrollTop()-n+"px",opacity:0},c.animationSpeed/2,function(){s.css(l.close)});if(!a){i.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){s.trigger("reveal:closed")})}else{s.trigger("reveal:closed")}}if(c.animation==="fade"){s.animate({opacity:0},c.animationSpeed,function(){s.css(l.close)});if(!a){i.delay(c.animationSpeed).fadeOut(c.animationSpeed,function(){s.trigger("reveal:closed")})}else{s.trigger("reveal:closed")}}if(c.animation==="none"){s.css(l.close);if(!a){i.css({display:"none"})}s.trigger("reveal:closed")}a=false}}function r(){s.unbind(".reveal");i.unbind(".reveal");h.unbind(".reveal");b("body").unbind(".reveal")}function g(){var v=s.find(".flex-video"),u=v.find("iframe");if(u.length>0){u.data("src",u.attr("src"));u.attr("src","");v.fadeOut(100)}}s.bind("reveal:close.reveal",j);s.bind("reveal:closed.reveal",g);s.bind("reveal:opened.reveal reveal:closed.reveal",o);s.bind("reveal:closed.reveal",r);s.bind("reveal:open.reveal",c.open);s.bind("reveal:opened.reveal",c.opened);s.bind("reveal:close.reveal",c.close);s.bind("reveal:closed.reveal",c.closed);s.trigger("reveal:open");h=b("."+c.dismissModalClass).bind("click.reveal",function(){s.trigger("reveal:close")});if(c.closeOnBackgroundClick){i.css({cursor:"pointer"});i.bind("click.reveal",function(){s.trigger("reveal:close")})}b("body").bind("keyup.reveal",function(u){if(u.which===27){s.trigger("reveal:close")}})})}}(jQuery));(function(e,d,a,f){var c={callback:e.noop,init:false},b={init:function(g){c=e.extend({},g,c);return this.each(function(){if(!c.init){b.events()}})},events:function(){e(a).on("click.fndtn",".tabs a",function(g){b.set_tab(e(this).parent("dd, li"),g)});c.init=true},set_tab:function(j,l){var i=j.closest("dl, ul").find(".active"),k=j.children("a").attr("href"),h=/^#/.test(k),g=e(k+"Tab");if(h&&g.length>0){l.preventDefault();g.closest(".tabs-content").children("li").removeClass("active").hide();g.css("display","block").addClass("active")}i.removeClass("active");j.addClass("active");c.callback()}};e.fn.foundationTabs=function(g){if(b[g]){return b[g].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof g==="object"||!g){return b.init.apply(this,arguments)}else{e.error("Method "+g+" does not exist on jQuery.foundationTabs")}}}}(jQuery,this,this.document));(function(d,c,e){var b={bodyHeight:0,selector:".has-tip",additionalInheritableClasses:[],tooltipClass:".tooltip",tipTemplate:function(f,g){return'<span data-selector="'+f+'" class="'+b.tooltipClass.substring(1)+'">'+g+'<span class="nub"></span></span>'}},a={init:function(f){b=d.extend(b,f);b.selector=b.targetClass?b.targetClass:b.selector;return this.each(function(){var g=d("body");if(Modernizr.touch){g.on("click.tooltip touchstart.tooltip touchend.tooltip",b.selector,function(h){h.preventDefault();d(b.tooltipClass).hide();a.showOrCreateTip(d(this))});g.on("click.tooltip touchstart.tooltip touchend.tooltip",b.tooltipClass,function(h){h.preventDefault();d(this).fadeOut(150)})}else{g.on("mouseenter.tooltip mouseleave.tooltip",b.selector,function(i){var h=d(this);if(i.type==="mouseenter"){a.showOrCreateTip(h)}else{if(i.type==="mouseleave"){a.hide(h)}}})}d(this).data("tooltips",true)})},showOrCreateTip:function(f){var g=a.getTip(f);if(g&&g.length>0){a.show(f)}else{a.create(f)}},getTip:function(g){var f=a.selector(g),h=null;if(f){h=d("span[data-selector="+f+"]"+b.tooltipClass)}return(h.length>0)?h:false},selector:function(f){var h=f.attr("id"),g=f.data("selector");if(h===e&&g===e){g="tooltip"+Math.random().toString(36).substring(7);f.attr("data-selector",g)}return(h)?h:g},create:function(f){var h=d(b.tipTemplate(a.selector(f),d("<div>").html(f.attr("title")).html())),g=a.inheritable_classes(f);h.addClass(g).appendTo("body");if(Modernizr.touch){h.append('<span class="tap-to-close">tap to close </span>')}f.removeAttr("title");a.show(f)},reposition:function(j,m,h){var f,n,l,i,g,k;m.css("visibility","hidden").show();f=j.data("width");n=m.children(".nub");l=n.outerHeight();i=n.outerWidth();k=function(t,s,p,o,r,q){return t.css({top:s,bottom:o,left:r,right:p,width:(q)?q:"auto"}).end()};k(m,(j.offset().top+j.outerHeight()+10),"auto","auto",j.offset().left,f);k(n,-l,"auto","auto",10);if(d(c).width()<767){g=j.closest(".columns");if(g.length<0){g=d("body")}m.width(g.outerWidth()-25).css("left",15).addClass("tip-override");k(n,-l,"auto","auto",j.offset().left)}else{if(h&&h.indexOf("tip-top")>-1){k(m,(j.offset().top-m.outerHeight()-l),"auto","auto",j.offset().left,f).removeClass("tip-override");k(n,"auto","auto",-l,"auto")}else{if(h&&h.indexOf("tip-left")>-1){k(m,(j.offset().top+(j.outerHeight()/2)-l),"auto","auto",(j.offset().left-m.outerWidth()-10),f).removeClass("tip-override");k(n,(m.outerHeight()/2)-(l/2),-l,"auto","auto")}else{if(h&&h.indexOf("tip-right")>-1){k(m,(j.offset().top+(j.outerHeight()/2)-l),"auto","auto",(j.offset().left+j.outerWidth()+10),f).removeClass("tip-override");k(n,(m.outerHeight()/2)-(l/2),"auto","auto",-l)}}}}m.css("visibility","visible").hide()},inheritable_classes:function(i){var h=["tip-top","tip-left","tip-bottom","tip-right","noradius"].concat(b.additionalInheritableClasses),g=i.attr("class"),f=g?d.map(g.split(" "),function(k,j){if(d.inArray(k,h)!==-1){return k}}).join(" "):"";return d.trim(f)},show:function(f){var g=a.getTip(f);a.reposition(f,g,f.attr("class"));g.fadeIn(150)},hide:function(f){var g=a.getTip(f);g.fadeOut(150)},reload:function(){var f=d(this);return(f.data("tooltips"))?f.foundationTooltips("destroy").foundationTooltips("init"):f.foundationTooltips("init")},destroy:function(){return this.each(function(){d(c).off(".tooltip");d(b.selector).off(".tooltip");d(b.tooltipClass).each(function(f){d(d(b.selector).get(f)).attr("title",d(this).text())}).remove()})}};d.fn.foundationTooltips=function(f){if(a[f]){return a[f].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof f==="object"||!f){return a.init.apply(this,arguments)}else{d.error("Method "+f+" does not exist on jQuery.foundationTooltips")}}}}(jQuery,this));(function(d,c,e){var b={index:0,initialized:false},a={init:function(f){return this.each(function(){b=d.extend(b,f);b.$w=d(c),b.$topbar=d("nav.top-bar"),b.$section=b.$topbar.find("section"),b.$titlebar=b.$topbar.children("ul:first");var g=d("<div class='top-bar-js-breakpoint'/>").appendTo("body");b.breakPoint=g.width();g.remove();if(!b.initialized){a.assemble();b.initialized=true}if(!b.height){a.largestUL()}if(b.$topbar.parent().hasClass("fixed")){d("body").css("padding-top",b.$topbar.outerHeight())}d(".top-bar .toggle-topbar").die("click.fndtn").live("click.fndtn",function(h){h.preventDefault();if(a.breakpoint()){b.$topbar.toggleClass("expanded");b.$topbar.css("min-height","")}if(!b.$topbar.hasClass("expanded")){b.$section.css({left:"0%"});b.$section.find(">.name").css({left:"100%"});b.$section.find("li.moved").removeClass("moved");b.index=0}});d(".top-bar .has-dropdown>a").die("click.fndtn").live("click.fndtn",function(j){if(Modernizr.touch||a.breakpoint()){j.preventDefault()}if(a.breakpoint()){var i=d(this),h=i.closest("li");b.index+=1;h.addClass("moved");b.$section.css({left:-(100*b.index)+"%"});b.$section.find(">.name").css({left:100*b.index+"%"});i.siblings("ul").height(b.height+b.$titlebar.outerHeight(true));b.$topbar.css("min-height",b.height+b.$titlebar.outerHeight(true)*2)}});d(c).on("resize.fndtn.topbar",function(){if(!a.breakpoint()){b.$topbar.css("min-height","")}});d(".top-bar .has-dropdown .back").die("click.fndtn").live("click.fndtn",function(k){k.preventDefault();var j=d(this),i=j.closest("li.moved"),h=i.parent();b.index-=1;b.$section.css({left:-(100*b.index)+"%"});b.$section.find(">.name").css({left:100*b.index+"%"});if(b.index===0){b.$topbar.css("min-height",0)}setTimeout(function(){i.removeClass("moved")},300)})})},breakpoint:function(){return b.$w.width()<b.breakPoint},assemble:function(){b.$section.detach();b.$section.find(".has-dropdown>a").each(function(){var f=d(this),h=f.siblings(".dropdown"),g=d('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');g.find("h5>a").html(f.html());h.prepend(g)});b.$section.appendTo(b.$topbar)},largestUL:function(){var g=b.$topbar.find("section ul ul"),h=g.first(),f=0;g.each(function(){if(d(this).children("li").length>h.children("li").length){h=d(this)}});h.children("li").each(function(){f+=d(this).outerHeight(true)});b.height=f}};d.fn.foundationTopBar=function(f){if(a[f]){return a[f].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof f==="object"||!f){return a.init.apply(this,arguments)}else{d.error("Method "+f+" does not exist on jQuery.foundationTopBar")}}}}(jQuery,this));/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(g,i,d){var a="placeholder" in i.createElement("input"),e="placeholder" in i.createElement("textarea"),j=d.fn,c=d.valHooks,l,k;if(a&&e){k=j.placeholder=function(){return this};k.input=k.textarea=true}else{k=j.placeholder=function(){var m=this;m.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":b,"blur.placeholder":f}).data("placeholder-enabled",true).trigger("blur.placeholder");return m};k.input=a;k.textarea=e;l={get:function(n){var m=d(n);return m.data("placeholder-enabled")&&m.hasClass("placeholder")?"":n.value},set:function(n,o){var m=d(n);if(!m.data("placeholder-enabled")){return n.value=o}if(o==""){n.value=o;if(n!=i.activeElement){f.call(n)}}else{if(m.hasClass("placeholder")){b.call(n,true,o)||(n.value=o)}else{n.value=o}}return m}};a||(c.input=l);e||(c.textarea=l);d(function(){d(i).delegate("form","submit.placeholder",function(){var m=d(".placeholder",this).each(b);setTimeout(function(){m.each(f)},10)})});d(g).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})})}function h(n){var m={},o=/^jQuery\d+$/;d.each(n.attributes,function(q,p){if(p.specified&&!o.test(p.name)){m[p.name]=p.value}});return m}function b(n,o){var m=this,p=d(m);if(m.value==p.attr("placeholder")&&p.hasClass("placeholder")){if(p.data("placeholder-password")){p=p.hide().next().show().attr("id",p.removeAttr("id").data("placeholder-id"));if(n===true){return p[0].value=o}p.focus()}else{m.value="";p.removeClass("placeholder");m==i.activeElement&&m.select()}}}function f(){var r,m=this,q=d(m),n=q,p=this.id;if(m.value==""){if(m.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})}catch(o){r=d("<input>").attr(d.extend(h(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":true,"placeholder-id":p}).bind("focus.placeholder",b);q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)}q=q.removeAttr("id").hide().prev().attr("id",p).show()}q.addClass("placeholder");q[0].value=q.attr("placeholder")}else{q.removeClass("placeholder")}}}(this,document,jQuery));


/* =======================
   ====== COMMON.JS ======
   ======================= */

/* Common Javascript functions for use throughout Interspire Shopping Cart */

$(function(){
	// this is here just incase the HTMLHead code fails
	$('html').addClass('javascript');
});

// fast cart pop-up
var fastCart = function(subject){
	var gotoProd = false;

	if( subject.prop('tagName') == 'A' ) // LINK
	{
		var url = subject.attr('href');
		var linkType = subject.is(':contains("Add To Cart")') ? "standard" : "options";

		if(linkType == "standard"){
			// strip protocol from url to fix cross protocol ajax access denied problem
			url = url.replace(/^http[s]{0,1}:\/\/[^\/]*\/?/, '/');
			url += '&fastcart=1';

			$.ajax({
				url: url,
				dataType: 'json',
				success: function(data)	{
					if (data.success) {
						openFastCart(data.imodal);
					}
					else if (data.redirect) {
						window.location.href = data.redirect;
					}
				}
			});
		}else{
			gotoProd = true;
		}
	}
	else if( subject.prop('tagName') == 'FORM' ) // FORM
	{
		subject.ajaxSubmit({
			data: {
				fastcart: 1,
				ajaxsubmit: 1
			},
			type: 'post',
			iframe: true,
			dataType: 'json',
			success: function(data)	{
				if (data.success) {
					openFastCart(data.imodal);
				}
				else if (data.redirect) {
					window.location.href = data.redirect;
				}
			}
		});
	}


	return gotoProd;
};

var openFastCart = function(data){
	$('#FastCart > div').html(data);
	$("#FastCart").reveal();
	productGridEvenImages();
	productGridEvenBoxes();
};

// Fetch the value of a cookie
function get_cookie(name) {
	name = name += "=";
	var cookie_start = document.cookie.indexOf(name);
	if(cookie_start > -1) {
		cookie_start = cookie_start+name.length;
		cookie_end = document.cookie.indexOf(';', cookie_start);
		if(cookie_end == -1) {
			cookie_end = document.cookie.length;
		}
		return unescape(document.cookie.substring(cookie_start, cookie_end));
	}
}

// Set a cookie
function set_cookie(name, value, expires)
{
	if(!expires) {
		expires = "; expires=Wed, 1 Jan 2020 00:00:00 GMT;"
	} else {
		expire = new Date();
		expire.setTime(expire.getTime()+(expires*1000));
		expires = "; expires="+expire.toGMTString();
	}
	document.cookie = name+"="+escape(value)+expires;
}

/* Javascript functions for the products page */
var num_products_to_compare = 0;
var product_option_value = "";

function CheckQuantityLimits (form)
{
	var qty = parseInt($('#qty_').val(), 10);

	if (!qty) {
		// If text fields are being used for 'quantity' we need to get this value instead:
		qty = parseInt($('#text_qty_').val(), 10);
	}

	if (qty < productMinQty) {
		alert(lang.ProductMinQtyError);
		return false;
	}

	if (qty > productMaxQty) {
		alert(lang.ProductMaxQtyError);
		return false;
	}

	return true;
}

function CheckProductConfigurableFields(form)
{
	var requiredFields = $('.FieldRequired');
	var valid = true;
	requiredFields.each(function() {
		var namePart = this.name.replace(/^.*\[/, '');
		var fieldId = namePart.replace(/\].*$/, '');

		if(this.type=='checkbox' ) {
			if(!this.checked) {
				valid = false;
				alert(lang.EnterRequiredField);
				this.focus();
				return false;
			}
		} else if(this.value == '') {
			if(this.type != 'file' || (this.type == 'file' && document.getElementById('CurrentProductFile_'+fieldId).value == '')) {
				valid = false;
				alert(lang.EnterRequiredField);
				this.focus();
				return false;
			}
		}
	});

	var fileFields = $(form).find("input[name^='ProductField']:file");
	fileFields.each(function() {
		if(this.value != '') {
			var namePart = this.name.replace(/^.*\[/, '');
			var fieldId = namePart.replace(/\].*$/, '');
			var fileTypes = document.getElementById('ProductFileType_'+fieldId).value;

			fileTypes = ','+fileTypes.replace(' ', '').toLowerCase()+','
			var ext = this.value.replace(/^.*\./, '').toLowerCase();

			if(fileTypes.indexOf(','+ext+',') == -1) {
				alert(lang.InvalidFileTypeJS);
				this.focus();
				this.select();
				valid = false;
			}

		}
	});

	return valid;
}

function check_add_to_cart(form, required) {
	var valid = true;
	var qtyInputs = $(form).find('input.qtyInput');
	qtyInputs.each(function() {
		if(isNaN($(this).val()) || $(this).val() <= 0) {
			alert(lang.InvalidQuantity);
			this.focus();
			this.select();
			valid = false;
			return false;
		}
	});
	if(valid == false) {
		return false;
	}

	if(!CheckProductConfigurableFields(form)) {
		return false;
	}

	// validate the attributes
	var attributesValidated = $('#productDetailsAddToCartForm')
		.validate()
		.form();

	if (!attributesValidated) {
		return false;
	}

	if (!CheckQuantityLimits(form)) {
		return false;
	}

	if(required && !$(form).find('.CartVariationId').val()) {
		alert(lang.OptionMessage);
		var select = $(form).find('select').get(0);
		if(select) {
			select.focus();
		}
		var radio = $(form).find('input[type=radio]').get(0);
		if(radio) {
			radio.focus();
		}
		return false;
	}

	if (!CheckEventDate()) {
		return false;
	}

	// if we're using the fastcart, pop that up now
	if (config.FastCart) {
		return fastCart($(form));
	}

	return true;
}

function compareProducts(compare_path) {
	var pids = "";

	if($('form').find('input[name=compare_product_ids]:checked').size() >= 2) {
		var cpids = document.getElementsByName('compare_product_ids');

		for(i = 0; i < cpids.length; i++) {
			if(cpids[i].checked)
				pids = pids + cpids[i].value + "/";
		}

		pids = pids.replace(/\/$/, "");
		document.location.href = compare_path + pids;
		return false;
	}

	alert(lang.CompareSelectMessage);
	return false;
}

function product_comparison_box_changed(state) {
	// Increment num_products_to_compare - needs to be > 0 to submit the product comparison form


	if(state)
		num_products_to_compare++;
	else
		if (num_products_to_compare != 0)
			num_products_to_compare--;
}

function remove_product_from_comparison(id) {
	if(num_compare_items > 2) {
		for(i = 1; i < 11; i++) {
			document.getElementById("compare_"+i+"_"+id).style.display = "none";
		}

		num_compare_items--;
	}
	else {
		alert(lang.CompareTwoProducts);
	}
}

(function($){
	$.fn.captchaPlaceholder = function () {
		$(this).each(function(){
			var $$ = $(this);

			if (!$$.parent().is(':visible')) {
				// don't do anything if this placeholder isn't visible
				return;
			}

			var img = $$.find('.captchaImage');
			if (img.length) {
				// don't do anything if an image is already in the dom
				return;
			}

			var rand = Math.round(500 + Math.random() * 7500);
			img = $('<img class="captchaImage" src="' + config.ShopPath + '/captcha.php?' + rand + '" />');
			$$.append(img);
		});

		return this;
	};
})(jQuery);

function g(id) {
	return document.getElementById(id);
}

function check_product_review_form() {
	var revrating = g("revrating");
	var revtitle = g("revtitle");
	var revtext = g("revtext");
	var revfromname = g("revfromname");
	var captcha = g("captcha");

	if(revrating.selectedIndex == 0) {
		alert(lang.ReviewNoRating);
		revrating.focus();
		return false;
	}

	if(revtitle.value == "") {
		alert(lang.ReviewNoTitle);
		revtitle.focus();
		return false;
	}

	if(revtext.value == "") {
		alert(lang.ReviewNoText);
		revtext.focus();
		return false;
	}

	if(captcha.value == "" && HideReviewCaptcha != "none") {
		alert(lang.ReviewNoCaptcha);
		captcha.focus();
		return false;
	}

	return true;
}

function check_small_search_form() {
	var search_query = g("search_query");

	if(search_query.value == "") {
		search_query.focus();
		return false;
	}

	return true;
}

function setCurrency(currencyId)
{
	var gotoURL = location.href;

	if (location.search !== '')
	{
		if (gotoURL.search(/[&|\?]setCurrencyId=[0-9]+/) > -1)
			gotoURL = gotoURL.replace(/([&|\?]setCurrencyId=)[0-9]+/, '$1' + currencyId);
		else
			gotoURL = gotoURL + '&setCurrencyId=' + currencyId;
	}
	else
		gotoURL = gotoURL + '?setCurrencyId=' + currencyId;

	location.href = gotoURL;
}


// Dummy sel_panel function for when design mode isn't enabled
function sel_panel(id) {}

function inline_add_to_cart(filename, product_id, quantity, returnTo) {
	if(typeof(quantity) == 'undefined') {
		var quantity = '1';
	}
	var html = '<form action="' + filename + '/cart.php" method="post" id="inlineCartAdd">';
	if(typeof(returnTo) != 'undefined' && returnTo == true) {
		var returnLocation = window.location;
		html += '<input type="hidden" name="returnUrl" value="'+escape(returnLocation)+'" />';
	}
	html += '<input type="hidden" name="action" value="add" />';
	html += '<input type="hidden" name="qty" value="'+quantity+'" />';
	html += '<input type="hidden" name="product_id" value="'+product_id+'" />';
	html += '<\/form>';
   $('body').append(html);
   $('#inlineCartAdd').submit();
}

function ShowPopupHelp(content, url, decodeHtmlEntities) {
	var popupWindow = open('', 'view','height=450,width=550');

	if(decodeHtmlEntities) {
		content = HtmlEntityDecode(content);
	}
	if (window.focus) {
		popupWindow.focus();
	}

	var doc = popupWindow.document;
	doc.write(content);
	doc.close();

	return false;
}

function HtmlEntityDecode(str) {
   try {
	  var tarea=document.createElement('textarea');
	  tarea.innerHTML = str; return tarea.value;
	  tarea.parentNode.removeChild(tarea);
   } catch(e) {
	  //for IE add <div id="htmlconverter" style="display:none;"></div> to the page
	  document.getElementById("htmlconverter").innerHTML = '<textarea id="innerConverter">' + str + '</textarea>';
	  var content = document.getElementById("innerConverter").value;
	  document.getElementById("htmlconverter").innerHTML = "";
	  return content;
   }
}

// Dummy JS object to hold language strings.
if (typeof lang == 'undefined') { lang = {}; }

/**
* A javascript equivalent of server-side getLang method with replacements support. The specified language entry must be
* present in the lang object. Returns a blank string if it is not.
*
* Usage:
* getLang('ProductMinQtyError', { qty: 10, product: 'Test Product' }); // pass the name of the language entry
*
* @param string name
* @param object replacements
* @return string
*/
function getLang (name, replacements)
{
	if (!lang[name]) {
		return '';
	}

	var string = lang[name];
	if (typeof replacements != 'object') {
		return string;
	}

	$.each(replacements, function(needle, haystack){
		string = string.replace(':' + needle, haystack);
	});

	return string;
}

// IE 6 doesn't support the :hover selector on elements other than links, so
// we use jQuery to work some magic to get our hover styles applied.
if(document.all) {
	var isIE7 = /*@cc_on@if(@_jscript_version>=5.7)!@end@*/false;
	if(isIE7 == false) {
		$(document).ready(function() {
			$('.ProductList li').hover(function() {
				$(this).addClass('Over');
			},
			function() {
				$(this).removeClass('Over');
			});
			$('.ComparisonTable tr').hover(function() {
				$(this).addClass('Over');
			},
			function() {
				$(this).removeClass('Over');
			});
		});
	}
	$('.ProductList li:last-child').addClass('LastChild');
}

function ShowLoadingIndicator() {
	if (typeof(disableLoadingIndicator) != 'undefined' && disableLoadingIndicator) {
		return;
	}
	var width = $(window).width();
	var position = $('#Container').css('position');
	if (position == 'relative') {
		width = $('#Container').width();
	}

	var scrollTop;
	if(self.pageYOffset) {
		scrollTop = self.pageYOffset;
	}
	else if(document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	}
	else if(document.body) {
		scrollTop = document.body.scrollTop;
	}
	//$('#AjaxLoading').css('position', 'absolute');
	//$('#AjaxLoading').css('top', scrollTop+'px');
	//$('#AjaxLoading').css('left', parseInt((width-150)/2)+"px");
	$('#AjaxLoading').show();
}

function HideLoadingIndicator() {
	$('#AjaxLoading').hide();
}



function fastCartAction(event) {
	var url = '';

	var modalOptions;

	// Supplied URL
	if (typeof(event) == 'string') {
		var url = event;

		// Make sure a valid URL was supplied
		if (!url || url.indexOf('cart.php') == -1) {
			return false;
		}

		// strip protocol from url to fix cross protocol ajax access denied problem
		url = url.replace(/^http[s]{0,1}:\/\/[^\/]*\/?/, '/');
		url += '&fastcart=1';

		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data)	{
				if (data.success) {
					modalOptions = {
						data: data
					};
					_showFastCart(modalOptions);
				}
				else if (data.redirect) {
					window.location.href = data.redirect;
				}
			}
		});
	}
	// 'Add' button on product details page
	else {
		$('#productDetailsAddToCartForm').ajaxSubmit({
			data: {
				fastcart: 1,
				ajaxsubmit: 1
			},
			type: 'post',
			iframe: true,
			dataType: 'json',
			success: function(data)	{
				if (data.success) {
					modalOptions = {
						data: data
					};
					_showFastCart(modalOptions);
				}
				else if (data.redirect) {
					window.location.href = data.redirect;
				}
			}
		});
	}

	return false;
}

function _showFastCart(modalOptions) {
	modalOptions = $.extend({
		width: 700,
		closeTxt: true,
		onShow: function() {
			$("#fastCartSuggestive a[href*='cart.php?action=add']").unbind('click');

			var itemTxt = $('#fastCartNumItemsTxt').html();
			if (itemTxt) {
				// update the view cart item count on top menu
				$('.CartLink span').html('(' + itemTxt + ')');
			}
			//setProductListHeights(null, '.fastCartContent');
			$('.fastCartContent .ProductList:not(.List) li').width(ThumbImageWidth);
		},
		onClose: function() {
			if (window.location.href.match(config.ShopPath + '/cart.php')) {
				// reload if we are on the cart page
				$('#ModalContainer').remove();
				window.location = window.location.href
			} else {
				$('#ModalContainer').remove();
			}
		}
	}, modalOptions);

	$.iModal.close();
	$.iModal(modalOptions);
}

/**
* Adds a script tag to the DOM that forces a hit to tracksearchclick. Should be called by a mousedown event as calling it by a click event can sometimes be cancelled by the browser navigating away from the page.
*/
function isc_TrackSearchClick (searchId) {
	if (!searchId) {
		return;
	}

	$('#SearchTracker').remove();

	var trackurl = 'search.php?action=tracksearchclick&searchid=' + encodeURIComponent(searchId) + '&random=' + Math.random();

	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = trackurl;
	script.id = "SearchTracker";

	window.document.body.appendChild(script);
}

$(document).ready(function() {


	$('html').ajaxStart(function() {
		ShowLoadingIndicator();
	});

	$('html').ajaxComplete(function() {
		HideLoadingIndicator();
	});

	// generic checkbox => element visibility toggle based on id of checkbox and class names of other elements
	$('.CheckboxTogglesOtherElements').live('change', function(event){
		if (!this.id) {
			return;
		}

		var className = 'ShowIf_' + this.id + '_Checked';
		var elements = $('.' + className);

		if (this.checked) {
			// easy, show matching elements
			elements.show();
			return;
		}

		// if not checked it's a little more tricky -- only hide elements if they are not showing for multiple check boxes
		var classExpression = /^ShowIf_(.+)_Checked$/;
		elements.each(function(){
			var $$ = $(this);

			// before hiding this element, check its classes to see if it has another ShowIf_?_Checked - if it does, see if that class points to a checked box
			var classes = $$.attr('class').split(/\s+/);
			var checked = false;
			$.each(classes, function(key,value){
				if (value === className) {
					// we're processing this class already so we know it's unchecked - ignore it
					return;
				}

				var result = classExpression.exec(value);
				if (result === null) {
					// not a ShowIf_?_Class
					return;
				}

				var id = result[1];
				if ($('#' + id ).attr('checked')) {
					// found a checked box
					checked = true;
					return false;
				}
			});

			if (!checked) {
				// found no checkbox that should be keeping this element visible
				$$.hide();
			}
		});

	}).change();
});

/**
 * Add a method to the Date object prototype to set the full
 * year using an ISO 8601 format string.
 *
 * Usage:
 * var d = new Date();
 * d.setISO('1980-01-08');
 */
if (typeof Date.prototype.setISO == 'undefined') {
	Date.prototype.setISO = function (isoFmt) {
		var dtparts = isoFmt.split('-');
		this.setFullYear(dtparts[0], dtparts[1] - 1, dtparts[2]);
	};
}

/**
 * This disables the process payment button. It's here because otherwise it'd require a template
 * change to about 20 files.
 */
$('form[action$="process_payment"]').live('submit', function(ev){
	if (ev.isDefaultPrevented()) {
		return;
	}

    var submitFunc = this.onsubmit;
    if(submitFunc && submitFunc() == false){
        ev.preventDefault();
        return;
    }

	var self = this,
		disabler = function () {
			$('input[type="submit"]', self)
				.val("Processing Your Order...")
				.attr('disabled', 'disabled');
		};

	// for opera, just submit straight away. opera doesn't process the timeout (ie. js/events) after navigation.
	if ($.browser.opera) {
		disabler();
	} else {
		// IE flavours need a timeout to allow submit button disabling.
		setTimeout(disabler, 1);
	}
});

// TODO: rewirte this
$('#OrderConfirmationForm').live('submit', function(ev){
	if (ev.isDefaultPrevented()) {
		return;
	}
    var submitFunc = this.onsubmit;
    if(submitFunc && submitFunc() == false){
        ev.preventDefault();
        return;
    }
	var self = this,
	disabler = function () {
		$('#bottom_payment_button', self)
		.attr('disabled', 'disabled');
	};

	// for opera, just submit straight away. opera doesn't process the timeout (ie. js/events) after navigation.
	if ($.browser.opera) {
		disabler();
	} else {
		// IE flavours need a timeout to allow submit button disabling.
		setTimeout(disabler, 1);
	}
});

function htmlspecialchars_decode (string, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Mateusz "loonquawl" Zalega
    // +      input by: ReverseSyntax
    // +      input by: Slawomir Kaniecki
    // +      input by: Scott Cariss
    // +      input by: Francois
    // +   bugfixed by: Onno Marsman
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Ratheous
    // +      input by: Mailfaker (http://www.weedem.fr/)
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // +    bugfixed by: Brett Zamir (http://brett-zamir.me)
    // *     example 1: htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
    // *     returns 1: '<p>this -> &quot;</p>'
    // *     example 2: htmlspecialchars_decode("&amp;quot;");
    // *     returns 2: '&quot;'
    var optTemp = 0,
        i = 0,
        noquotes = false;
    if (typeof quote_style === 'undefined') {
        quote_style = 2;
    }
    string = string.toString().replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    var OPTS = {
        'ENT_NOQUOTES': 0,
        'ENT_HTML_QUOTE_SINGLE': 1,
        'ENT_HTML_QUOTE_DOUBLE': 2,
        'ENT_COMPAT': 2,
        'ENT_QUOTES': 3,
        'ENT_IGNORE': 4
    };
    if (quote_style === 0) {
        noquotes = true;
    }
    if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
        quote_style = [].concat(quote_style);
        for (i = 0; i < quote_style.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[quote_style[i]] === 0) {
                noquotes = true;
            } else if (OPTS[quote_style[i]]) {
                optTemp = optTemp | OPTS[quote_style[i]];
            }
        }
        quote_style = optTemp;
    }
    if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
        string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
        // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
    }
    if (!noquotes) {
        string = string.replace(/&quot;/g, '"');
    }
    // Put this in last place to avoid escape being double-decoded
    string = string.replace(/&amp;/g, '&');

    return string;
}

/**
 * Converts price in string format back to numeric value
 * eg. '$99.99 AUD' -> 99.99
 * @param string price -- price in the string format with possible currency 
 * indicators and separators
 */
function convertPriceStringToNumber(price){
	return Number(price.replace(/[^0-9\.]+/g,""));
}

/**
 * Parses a csv string of ids (eg, 1,2,3) into a array containing numeric
 * value of each id
 * @param ids
 * @param delimeter
 */
function parseCsvIdsToNumericArray(ids,delimeter){
	return ids.split(delimeter).map(Number);
}


function createCookie(name,value,days) 
{
	var expires = '';
	if (days) {
		var date = new Date();
		date.setDate(date.getDate() + days);
		expires = "; expires=" + date.toGMTString();
	}
	document.cookie = name + "=" + value + expires+"; path=/";
}

function acceptCookieUsage()
{
	if(document.cookie.indexOf('ACCEPT_COOKIE_USAGE') == -1){
		$.ajax({
			url: config.ShopPath + '/remote.php?w=getCookieNotification',
			type: 'GET',
			dataType: 'JSON',
			success: function(response){
				if(response.html != ''){
					$('body').prepend(response.html);
				}
			}
		});
	}
}

/**
 * Changes social sharing tabs and content within sharing widget
 * @param {String} serviceId The ID of the sharing service to be used.
 * @param {Number} productId The ID of the product to be shared.
 */
function switchSocialSharingTabs(serviceId, productId) {
	$('.sharingTab').removeClass('active');
	$('.' + serviceId).addClass('active');

	updateShareButton(serviceId, productId);
	updateSocialSharingPanel(productId);
}

/**
 * Get the currently active social sharing tab.
 * @return {String} The ID of the currently active social sharing service.
 */
function activeSocialSharingServiceId()
{
	return $('.sharingTab.active').attr('id').replace('tab', '');
}

/**
 * Update the share button to share the given product on the given service.
 * @param {String} serviceId The service on which to share the given product.
 * @param {Number} productId The ID of the product to share.
 */
function updateShareButton(serviceId, productId) {
	$('.sharebutton a').attr('href', sharingData[productId][serviceId]['sharingLink']);
}

/**
 * Preload images and build the social sharing panel.
 * @param {Number} shareProductId
 */
function initSocialSharingPanel(shareProductId)
{
	var productCount = objectLength(sharingData);
	var loadedProductCount = 0;
	$.each(sharingData, function(productId, services) {
		var serviceCount = objectLength(services);
		var loadedServiceCount = 0;
		$.each(services, function(serviceId, productSharingDetails) {
			productSharingDetails['imageElement'] = $("<img/>").attr("src", productSharingDetails['image']).attr("alt", "").one("load", function() {
				loadedServiceCount++;
				if (loadedServiceCount == serviceCount) {
					loadedProductCount++;
					if (loadedProductCount == productCount) {
						switchSocialSharingTabs(activeSocialSharingServiceId(), shareProductId);
					}
					return false;
				}
			});
		});
	});
}

/**
 * Calculate the number of owned properties of an object.
 * @param object
 * @return {Number}
 */
function objectLength(object)
{
	if (typeof object != "object") {
		return 0;
	}
	var count = 0;
	for (i in object) {
		if (object.hasOwnProperty(i)) {
			count++;
		}
	}
	return count;
}

/**
 * Updates sharing panel with new product details.
 * Used when multiple products exist (eg orders) to swap the product to be shared
 * @param productId
 */
function updateSocialSharingPanel(productId) {
	shareProductId = productId;
	var activeTab = activeSocialSharingServiceId();
	$('#tabcontent .photo').empty().append(sharingData[productId][activeTab]['imageElement']);
	$('#shareDescription').text(sharingData[productId][activeTab]['description']);
	updateShareButton(activeTab, productId);
	$('#shareText').text(sharingData[productId][activeTab]['shareText']);

	updateSharingDataChoices(productId);

	$.iModal.close();
}

function updateSharingDataChoices(productId) {
	$('#SharingDataChoices #productlist').empty();
	$.each(sharingData, function(index, value) {
		if (index != productId) {
			var productAnchor = $("<a/>").attr("href", "javascript:updateSocialSharingPanel("+index+")");
			productAnchor.append(value[activeSocialSharingServiceId()]['imageElement']);
			var productListItem = $("<li/>").append(productAnchor);
			$('#SharingDataChoices #productlist').append(productListItem);
		}
	});
}

/**
 * View modal overlay of product image choices
 */
function showProductChoices() {
	$.iModal({
		type: 'inline',
		inline: '#ChooseAnotherProduct',
		width: 620,
		height: 200,
		title: getLang('ChooseAnotherProduct')
	});

	updateSharingDataChoices(shareProductId);

	var productCount = objectLength(sharingData);
	var sharingDataWrapper = $("#SharingDataWrapper");
	var sharingDataChoices = $("#SharingDataChoices");
	if (productCount < 6) {
		sharingDataWrapper.addClass('no-scroll');
	} else {
		sharingDataChoices.jCarouselLite({
			btnNext: ".next",
			btnPrev: ".prev",
			visible: 4,
			scroll: 2,
			circular: false,
			speed: 200
		});
	}

}

(function($) {
	if ('undefined' !== typeof $) {
		$.ajaxSetup({ cache: true });
	}	
})($);


/* =======================
   ====== ZOOMIE.JS ======
   ======================= */

//  jQuery Zoomie 1.2
//  (c) 2012 Eugen Rochko
//  jQuery Zoomie may be freely distributed under the MIT license.

(function ($, window, document) {
  'use strict';

  var defaults = {
    radius: 100
  };

  var Zoomie = function (element, options) {
    this.element = element;
    this.options = $.extend(defaults, options);
    this.init();
  };

  Zoomie.prototype.init = function () {
    var self = this,
      fullSrc = this.element.data('full-src'),
      resizeTimer = undefined;
    if(!fullSrc) {
      fullSrc = this.element[0].src;
    }

    this.containerElement = $('<div>').addClass('zoomie').insertAfter(this.element);
    this.element.detach().appendTo(this.containerElement);

    this.windowElement = $('<div>').addClass('zoomie-window').css({
      'background-image': 'url(' + fullSrc + ')',
      'width': self.options.radius * 2,
      'height': self.options.radius * 2
    }).appendTo(this.containerElement);

    this.fullImage        = new Image();
    this.fullImage.src    = fullSrc;

    $(this.fullImage).on('load', function () {
      self.ratioX = self.containerElement.innerWidth() / self.fullImage.width;
      self.ratioY = self.containerElement.innerHeight() / self.fullImage.height;

      self.containerElement.on('mouseenter', function () {
        self.windowElement.show();
      });

      self.containerElement.on('mousemove', function (e) {
        var offset = self.containerElement.offset(),
          x        = e.pageX - offset.left,
          y        = e.pageY - offset.top,
          windowX  = x - self.options.radius,
          windowY  = y - self.options.radius,
          imageX   = (((x - self.containerElement.innerWidth()) / self.ratioX) * -1) - self.fullImage.width + self.options.radius,
          imageY   = (((y - self.containerElement.innerHeight()) / self.ratioY) * -1) - self.fullImage.height + self.options.radius;

        self.windowElement.css({
          'top':  windowY,
          'left': windowX,
          'background-position': imageX + 'px ' + imageY + 'px'
        });

        if (e.pageX < offset.left || e.pageY < offset.top || x > self.containerElement.innerWidth() || y > self.containerElement.innerHeight()) {
          // Hide the tool if the mouse is outside of the viewport image coordinates. Can't use the
          // onmouseleave event because the mouse would always stay in the tool and therefore in
          // the viewport and the event would never trigger
          self.windowElement.hide();
        }
      });

      $(window).on('resize', function () {
        // If the window is resized it is possible that the viewport image changed size
        // so we better calculate the ratios anew
        if (typeof resizeTimer === "undefined") {
          // We bubble the resize callback because we don't need it firing every millisecond
          resizeTimer = setTimeout(function () {
            resizeTimer = undefined;
            self.ratioX = self.containerElement.innerWidth() / self.fullImage.width;
            self.ratioY = self.containerElement.innerHeight() / self.fullImage.height;
          }, 200);
        }
      });
    });
  };

  $.fn.zoomie = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_zoomie')) {
        $.data(this, 'plugin_zoomie', new Zoomie($(this), options));
      }
    });
  };
}(jQuery, window, document));


/* ==========================
   ====== TOUCHWIPE.JS ======
   ========================== */

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);


/* ========================
   ====== FITTEXT.JS ======
   ======================== */

/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );


/* ==============================
   ====== FANCYBOX.PACK.JS ======
   ============================== */

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/* ================================
   ====== FANCYBOX.THUMBS.JS ======
   ================================ */

 /*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function ($) {
	//Shortcut for fancyBox object
	var F = $.fancybox;

	//Add helper object
	F.helpers.thumbs = {
		defaults : {
			width    : 50,       // thumbnail width
			height   : 50,       // thumbnail height
			position : 'bottom', // 'top' or 'bottom'
			source   : function ( item ) {  // function to obtain the URL of the thumbnail image
				var href;

				if (item.element) {
					href = $(item.element).find('img').attr('src');
				}

				if (!href && item.type === 'image' && item.href) {
					href = item.href;
				}

				return href;
			}
		},

		wrap  : null,
		list  : null,
		width : 0,

		init: function (opts, obj) {
			var that = this,
				list,
				thumbWidth  = opts.width,
				thumbHeight = opts.height,
				thumbSource = opts.source;

			//Build list structure
			list = '';

			for (var n = 0; n < obj.group.length; n++) {
				list += '<li><a style="width:' + thumbWidth + 'px;height:' + thumbHeight + 'px;" href="javascript:jQuery.fancybox.jumpto(' + n + ');"></a></li>';
			}

			this.wrap = $('<div id="fancybox-thumbs"></div>').addClass(opts.position).appendTo('body');
			this.list = $('<ul>' + list + '</ul>').appendTo(this.wrap);

			//Load each thumbnail
			$.each(obj.group, function (i) {
				var href = thumbSource( obj.group[ i ] );

				if (!href) {
					return;
				}

				$("<img />").load(function () {
					var width  = this.width,
						height = this.height,
						widthRatio, heightRatio, parent;

					if (!that.list || !width || !height) {
						return;
					}

					//Calculate thumbnail width/height and center it
					widthRatio  = width / thumbWidth;
					heightRatio = height / thumbHeight;

					parent = that.list.children().eq(i).find('a');

					if (widthRatio >= 1 && heightRatio >= 1) {
						if (widthRatio > heightRatio) {
							width  = Math.floor(width / heightRatio);
							height = thumbHeight;

						} else {
							width  = thumbWidth;
							height = Math.floor(height / widthRatio);
						}
					}

					$(this).css({
						width  : width,
						height : height,
						top    : Math.floor(thumbHeight / 2 - height / 2),
						left   : Math.floor(thumbWidth / 2 - width / 2)
					});

					parent.width(thumbWidth).height(thumbHeight);

					$(this).hide().appendTo(parent).fadeIn(300);

				}).attr('src', href);
			});

			//Set initial width
			this.width = this.list.children().eq(0).outerWidth(true);

			this.list.width(this.width * (obj.group.length + 1)).css('left', Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5)));
		},

		beforeLoad: function (opts, obj) {
			//Remove self if gallery do not have at least two items
			if (obj.group.length < 2) {
				obj.helpers.thumbs = false;

				return;
			}

			//Increase bottom margin to give space for thumbs
			obj.margin[ opts.position === 'top' ? 0 : 2 ] += ((opts.height) + 15);
		},

		afterShow: function (opts, obj) {
			//Check if exists and create or update list
			if (this.list) {
				this.onUpdate(opts, obj);

			} else {
				this.init(opts, obj);
			}

			//Set active element
			this.list.children().removeClass('active').eq(obj.index).addClass('active');
		},

		//Center list
		onUpdate: function (opts, obj) {
			if (this.list) {
				this.list.stop(true).animate({
					'left': Math.floor($(window).width() * 0.5 - (obj.index * this.width + this.width * 0.5))
				}, 150);
			}
		},

		beforeClose: function () {
			if (this.wrap) {
				this.wrap.remove();
			}

			this.wrap  = null;
			this.list  = null;
			this.width = 0;
		}
	}

}(jQuery));


/* ================================
   ====== JQUERY.VALIDATE.JS ======
   ================================ */

/**
 * jQuery Validation Plugin 1.8.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		if ( validator.settings.onsubmit ) {

			// allow suppresing validation by adding a cancel class to the submit button
			this.find("input, button").filter(".cancel").click(function() {
				validator.cancelSubmit = true;
			});

			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				this.find("input, button").filter(":submit").click(function() {
					validator.submitButton = this;
				});
			}

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();

				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];

		if (command) var settings = $.data(element.form, 'validator');

		if (command && typeof settings !== 'undefined') {
			settings = settings.settings;

			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 )
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: [],
		ignoreTitle: false,
		onfocusin: function(element) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode);
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0] );
			}
			$(this.currentForm)
				.validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", delegate)
				.validateDelegate(":radio, :checkbox, select, option", "click", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.clean( element );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() == 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		check: function( element ) {
			element = this.clean( element );

			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}

			var rules = $(element).rules();
			var dependencyMismatch = false;
			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;

			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();

			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},

		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass().addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},

		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value = $element.attr(method);
			if (value) {
				rules[method] = value;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) return {};

		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (typeof validator !== 'undefined' && validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param == "string" && {url:param} || param;

			if ( this.pending[element.name] ) {
				return "pending";
			}
			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true;
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only digits and dashes
			if (/[^0-9-]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
;(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
;(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					arguments[0] = $.event.fix(e);
					arguments[0].type = fix;
					return $.event.handle.apply(this, arguments);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	};
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
})(jQuery);


/* ===================================
   ====== PRODUCT.ATTRIBUTES.JS ======
   =================================== */

(function($){
	// this closure contains option-type-specific plugins for display enhancement and validation

	if (typeof String.prototype.pad == 'undefined') {
		String.PAD_TYPE_LEFT = 0;
		String.PAD_TYPE_RIGHT = 1;

		String.prototype.pad = function (length, string, type) {
			if (type === undefined) {
				type = String.PAD_TYPE_RIGHT;
			}

			if (this.length >= length) {
				// don't run padding code if the string is long enough already
				return String(this);
			}

			var difference = length - this.length,
				padding = '';

			// repeat the string until we have all the padding we need
			while (padding.length < difference) {
				padding += string;
			}

			// pad the original string on the correct side
			if (type == String.PAD_TYPE_RIGHT) {
				return String(this) + padding.substr(0, difference);
			}

			return padding.substr(0, difference) + String(this);
		};
	}

	if (typeof Number.prototype.pad == 'undefined') {
		Number.prototype.pad = function (length, string, type) {
			return String(this).pad(length, string, type);
		};
	}

	/**
	 * Mobile screen dimmer- For mobile devices create a dimmer
	 * object to show and hide the screen dimmer overlay.
	 *
	 * Usage:
	 * dimmer.show(onClickCallback);
	 * dimmer.hide()
	 */
	if(typeof config == 'object' && config.isMobile){
		var dimmer = function(){
			var clickHandler = null;
			var dimmer = null;

			if($('#Dimmer').length == 0){
				$('body')
					.children()
					.first()
						.before('<div id="Dimmer" style="display:none"></div>');
			}

			dimmer = $('#Dimmer');

			dimmer.click(function(){
				clickHandler();
			});

			return {
				show: function(handler) {
					clickHandler = handler;

					dimmer
						.height($('body').height())
						.show();
				},

				hide: function() {
					dimmer.hide();
				}
			}
		}();
	}

	$(function(){
		// mark the add to cart form as being handled by jquery.validate
		$('#productDetailsAddToCartForm').validate({
			onsubmit: false,
			ignoreTitle: true,
			showErrors: function (errorMap, errorList) {
				// nothing
			},
			invalidHandler: function (form, validator) {
				if (!validator.size()) {
					return;
				}

				alert(validator.errorList[0].message);
			}
		});
	});

	$.fn.updateProductDetails = function (options) {
		options = $.extend({
			baseImage: '',
			baseThumb: ''
		}, options);

		return this.each(function(){
			var $this = $(this),
				showAddCartButton = options.price !== undefined && options.instock && options.purchasable;
			var ShowAddToCartQtyBox = (typeof ShowAddToCartQtyBox) != 'undefined' ? ShowAddToCartQtyBox : false;

            var defaults = {
                findProductAttributeId: function(el) {
                    return el.name;
                },
                isInStock: function(el) {
                    return false;
                },
                hide_option: function(el, inStock, options) {
                    $(el).parents('li:first').toggle(inStock);
                },
                label_option: function(el, inStock, options) {
                    $(el).closest('label').toggleClass('outStock', !inStock);
                }
            };

            // enable out of stock status update
            $this.productOptionViewRadioOutOfStock(options, defaults);
            $this.productOptionViewRectangleOutOfStock(options, defaults);
            $this.productOptionViewPickListSwatchOutOfStock(options, defaults);
            $this.productOptionViewProductPickListOutOfStock(options, defaults);
            $this.productOptionViewSelectOutOfStock(options);

            // hide/show the add to cart button based on price and stock
			$this.find('.AddCartButton')
				.closest('.DetailRow')
					.toggle(showAddCartButton);

            // hide/show the add to cart button on QuickView
            $this.find('.addToCart input').toggle(showAddCartButton)
                .next().toggle(showAddCartButton);


			// hide/show the cart qty box too incase it's been moved? (product.functions.js did this)
			$this.find('.ShowAddToCartQtyBox')
				.toggle(showAddCartButton && ShowAddToCartQtyBox);

			// out of stock message
			$this.find('.OutOfStockMessage')
				.toggle(!showAddCartButton);

			if (options.purchasingMessage !== undefined) {
				$this.find('.OutOfStockMessage')
					.text(options.purchasingMessage);
			}

			// hide/show stock level
			$this.find('.VariationProductInventory')
				.closest('.DetailRow')
					.toggle((options.stockMessage || options.stock) !== undefined)
					.end()
				.text(options.stockMessage || options.stock);

			// hide/show weight
			$this.find('.VariationProductWeight')
				.text(options.weight === undefined ? '' : options.weight)
				.closest('.DetailRow')
					.toggle(options.weight !== undefined);

			// hide/show sku
			$this.find('.VariationProductSKU')
				.text(options.sku === undefined ? '' : options.sku)
				.closest('.DetailRow')
					.toggle(options.sku !== undefined);

			// hide/show price - slightly more complex code due to control panel sharing
			$this.find('.VariationProductPrice').each(function(){
				var $this = $(this);

				if ($this.is('input')) {
					// if the price is an input then set its raw value
					$this.val(options.unformattedPrice === undefined ? '' : options.unformattedPrice);
					return;
				}

				// otherwise use regular hide/show formatted behaviour
				$this.html(options.price === undefined ? '' : options.price)
					.closest('.DetailRow')
						.toggle(options.price !== undefined);
			});

			// price label
			if (options.priceLabel !== undefined) {
				$this.find('.PriceRow .Label').text(options.priceLabel);
			}

			// hide/show savings
			$this.find('.YouSaveAmount')
				.text(options.saveAmount === undefined ? '' : options.saveAmount);

			$this.find('.YouSave, .RetailPrice')
				.toggle(options.saveAmount !== undefined);

			$this.find('.RetailPrice .Value')
				.html(options.saveAmount === undefined || options.rrp === undefined ? '' : options.rrp);

			var zoom, thumb;

			if (options.imageRuleId !== undefined && options.image !== undefined && options.thumb !== undefined) {
				// image was supplied and is different from the base image
				zoom = options.image;
				thumb = options.thumb;
				ShowVariationThumb = options.imageRuleId; // hack to re-use existing lightbox code
			} else if (options.baseImage !== undefined && options.baseThumb !== undefined) {
				// show the base image
				zoom = options.baseImage;
				thumb = options.baseThumb;
				ShowVariationThumb = false;
			} else {
				// no image provided at all?
				ShowVariationThumb = false;
			}

			if (zoom && thumb) {
				$('.main-image').attr('src',zoom);
				$('.product-thumbs li:first img').attr('src',zoom);
				$('.zoomie-window').css('background-image','url('+zoom+')');

                if(window['removeTinyImageHighlight'] && window['replaceProductImageInZoom']) {
                    removeTinyImageHighlight();
                    replaceProductImageInZoom(zoom, thumb);
                }
			} else {
				$this.find('.ProductThumbImage').hide();
			}
		});
	};

	/**
	* This plugin implements behaviours applicable to all option types which can trigger sku / rule effects (change of
	* price, weight, image, etc.)
	*/
	$.fn.productOptionRuleCondition = function (options) {
		return this.each(function(){
			$(this)
				.addClass('productAttributeRuleCondition')
				.find(':input')
				.change(function(){
					// ask the server for any updated product information based on current options - can't use
					// ajaxSubmit here because it will try to send files too so use serializeArray and put our custom
					// 'w' parameter into it

                    // we want to enable out-of-stock notification for all 3 (product detail, quickview and cart) pages
                    // and for some historical reasons they all have different html structure
                    // (eg, cart page dosn't have #productDetailsAddToCartFrom form)
                    // therefore we need to find the correct form to serialize
                    // rather than doing massive template upgrades
                    var data = null;
                    if($('#productDetailsAddToCartForm').length) {
                        var data = $('#productDetailsAddToCartForm').serializeArray();
                    } else {
                        var data = $('.productAttributeList:first').closest('form').serializeArray();
                    }

					data.push({
						name: 'w',
						value: 'getProductAttributeDetails'
					});

					data = $.param(data);

					$.ajax({
						url: '/remote.php',
						type: 'POST',
						dataType: 'json',
						data: data,
						success: function (response) {
							if (response.success && response.details) {
                                if($('#ProductDetails').length) {
                                    $('#ProductDetails').updateProductDetails(response.details);
                                }
                                else {
                                    $('.productAttributeList:first').updateProductDetails(response.details);
                                }
							}
						}
					});
				});
		});
	};

	/**
	* This plugin implements behaviours applicable to all configurable option types (validation, etc.).
	*/
	$.fn.productOptionConfigurable = function (options) {
		if (options.condition) {
			this.productOptionRuleCondition(options);
		}

		return this.each(function(){
			var target = $(this).find('.validation').eq(0); // only select the first matching target (for radios)
			if (!target.length) {
				// could not find validation target - validate plugin doesn't like being passed an empty jquery result
				return;
			}

			if (options.required) {
				target.rules('add', {
					required: true,
					messages: {
						required: options.validation.required
					}
				});
			}
		});
	};

	/**
	* This plugin implements a generic product options behaviour which marks a parent element of the currently selected
	* choice with a 'selectedValue' class for easy css-based highlighting.
	*/
	$.fn.productOptionSelectedValue = function (options) {
		options = $.extend({
			container: 'li'
		}, options || {});

		return this.each(function(){
			var $this = $(this);

			// when selecting an input, apply a css class to it's parent list item
            $this.delegate('input', 'click', function(event){
                var isSelected = $(this).closest(options.container).hasClass('selectedValue');
                if(isSelected) {
                    // unselect the already selected one and
                    // trigger the change event to update out-of-stock status
                    $(this).prop('checked', false);
                    $(this).change();
                }
                else {
                    // change of selection, marked all as unselected
                    $this.find(options.container).removeClass('selectedValue');
                }
                $(this).closest(options.container).toggleClass('selectedValue');
            });

			// apply on page load too incase something is pre-selected
			$this.find(':checked')
				.closest(options.container)
					.addClass('selectedValue');
		});
	};

	/**
	* This plugin implements a generic product options behaviour which provides a small preview / zoom window for
	* swatches and images.
	*/
	$.fn.productOptionPreviewDisplay = function (options) {

		// disabled for mobile devices
		if (typeof config == 'object' && config.isMobile){
			return;
		}

		var previewDisplay = $('.productOptionPreviewDisplay');

		if (!previewDisplay.size()) {
			previewDisplay = $('<div class="productOptionPreviewDisplay" />').appendTo('body');
		}

		$(this).delegate('.showPreview', 'mouseenter', function(){
			// put preview content into the display container
			var previewContent = $(this)
				.closest('.hasPreview')
					.find('.previewContent');

			if (!previewContent.size()) {
				return;
			}

			previewDisplay.empty();

			previewContent.children()
				.clone()
				.find('.showPreview')
					.removeClass('.showPreview')
					.end()
				.appendTo(previewDisplay);

			var offset = $(this).offset();

			// position and show the display
			previewDisplay
				.css({
					top: offset.top + $(this).outerHeight(true) + 'px',
					left: offset.left + $(this).outerWidth(true) + 'px'
				})
				.stop(true, true)
				.fadeIn();
		});

		$(this).delegate('.showPreview', 'mouseleave', function(){
			// hide the display
			previewDisplay
				.stop(true, true)
				.fadeOut();
		});

		return this;
	};

	/**
	* This plugin implements behaviours for pick-list types rendering as radio inputs.
	*/
	$.fn.productOptionViewRadio = function (options) {
		this.productOptionSelectedValue(options);
		return this;
	};

	/**
	* This plugin implements behaviours for pick-list types rendering as rectangle inputs.
	*/
	$.fn.productOptionViewRectangle = function (options) {
		this.productOptionSelectedValue(options);
		return this.each(function(){
			// deselect the radio element when clicking on rectangles as the radio element itself isn't visible
			$(this).delegate('input', 'click', function(){
				$(this).blur();
			});
		});
	};

    $.fn.productOptionViewOutOfStock = function(options, view) {

        // since out-of-stock feature is feature flagged
        // check the existence of those oos specific parameters before doing any real work
        if(typeof(options.selectedAttributeValues) == 'undefined' || typeof(options.inStockAttributeValues) == 'undefined') {
            return true;
        }

        $.each(this.find('.productAttributeRow'), function(index, row) {

            if($(row).find('.productAttributeLabel').find('.required:visible').length == 0) {
                // not mandatory option should not be part of SKU
                // and should be ignored
                return true;
            }

            $.each($(row).find('.productAttributeValue').find(view.selector), function(index, el) {
                var productAttributeId = view.findProductAttributeId(el);
                var matches = productAttributeId.match(/attribute\[(\d+)\]/);
                productAttributeId = parseInt(matches[1], 10);
                var selectedValue = options.selectedAttributeValues[productAttributeId];
                var currentValue = parseInt(el.value, 10);

                if ($.inArray(currentValue, options.inStockAttributeValues) !== -1 || view.isInStock(el)) {
                    view[options.optionOutOfStockBehavior](el, true, options);
                } else {
                    view[options.optionOutOfStockBehavior](el, false, options);
                }
          });
        });
    };

    /**
     * This plugin implements behavior for Radio View
     * to handle out-of-stock status update
     */
    $.fn.productOptionViewRadioOutOfStock = function(options, defaults) {
        this.productOptionViewOutOfStock(options, $.extend({}, defaults, {
            selector: '.productOptionViewRadio input',
            label_option: function(el, inStock, options) {
                $(el).closest('label').toggleClass('outStock', !inStock);
                $(el).closest('label').find('span.name').toggleOutStockText(options, inStock);
            }})
        );
    };

    /**
     * This plugin implements behavior for Rectangle View
     * to handle out-of-stock status update
     */
    $.fn.productOptionViewRectangleOutOfStock = function(options, defaults) {
        this.productOptionViewOutOfStock(options, $.extend({}, defaults, {
            selector: '.productOptionViewRectangle input'
            })
        );
    };

    /**
     * This plugin implements behavior for Swatch View
     * to handle out-of-stock status update
     */
    $.fn.productOptionViewPickListSwatchOutOfStock = function(options, defaults) {
        this.productOptionViewOutOfStock(options, $.extend({}, defaults, {
            selector: '.productOptionPickListSwatch input'
            })
        );
    };

    /**
     * This plugin implements behavior for Product List
     * to handle out-of-stock status update
     */
    $.fn.productOptionViewProductPickListOutOfStock = function(options, defaults) {
        this.productOptionViewOutOfStock(options, $.extend({}, defaults, {
            selector: '.productOptionViewProductPickList input, .productOptionViewProductPickListWithImage input',
            hide_option: function(el, inStock, options) {
                $(el).parents('tr:first').toggle(inStock);
            },
            label_option: function(el, inStock, options) {
                $(el).closest('label').toggleClass('outStock', !inStock);
                $(el).siblings('span').toggleOutStockText(options, inStock);
            }})
        );
    };

    /**
     * This plugin implements behavior for select/dropdown pick-list types
     * to handle out-of-stock status update
     */
    $.fn.productOptionViewSelectOutOfStock = function(options) {
        this.productOptionViewOutOfStock(options, {
            selector: 'option',
            findProductAttributeId: function(el) {
                return $(el).parents('select:first').prop('name');
            },
            isInStock: function(el) {
                // select/dropdown has a default please choose a option
                // which should always be considered in-stock option value
                return el.value === '';
            },
            hide_option: function(el, inStock, options) {
                var select = $(el).closest('select');
                if (select.is(':disabled')) {
                    // get the real select element
                    select = select.data('linkedSelectElement');
                }
                // save the currently selected value
                var val = select.val();
                $(el).toggleOption(inStock);
                // apply the previously selected value
                select.val(val);
                // ensure the label matches the selected options text
                select.siblings('span').text(select.find(':selected').text());
            },
            label_option: function(el, inStock, options) {
                $(el).toggleOutStockText(options, inStock);
            }
        });
    };

    $.fn.toggleOutStockText = function(options, inStock) {
        if (options.outOfStockMessage) {
            var text = $(this).text();
            if(inStock) {
                $(this).text(text.replace(' ('+options.outOfStockMessage+')', ''));
            }
            else if(text.match(options.outOfStockMessage) === null) {
                $(this).text(text + ' ('+options.outOfStockMessage+') ');
            }
        }
    };

    /**
     * Visually hides the option from user by moving option to an invisible
     * and disabled select placeholder element.
     *
     * This approach is required rather than simply hiding the option because
     * hidden option can still be included when serializeArray() is called and
     * cause wrong value to be submitted.
     * (eg. if you have option 1, 2, 3 and 2 is hidden, when you select 3,
     * serializeArray() will use the value of 2 instead of 3)
     */
    $.fn.toggleOption = function(show) {
        var currentSelectElement = $(this).closest('select'), // the select containing this
            disabledSelectElement, // the disabled select element
            selectElement; // the real select element

        if (currentSelectElement.is(':disabled')) {
            disabledSelectElement = currentSelectElement;
            selectElement = disabledSelectElement.data('linkedSelectElement');
        } else {
            selectElement = currentSelectElement;
            disabledSelectElement = currentSelectElement.data('linkedSelectElement');
            if (!disabledSelectElement) {
                // create the disabled placeholder select element
                disabledSelectElement = 
                    $('<select>')
                        .prop('disabled', true)
                        .hide()
                        .attr('name', currentSelectElement.attr('name'))
                        .addClass(currentSelectElement.attr('class'))
                        .data('linkedSelectElement', selectElement)
                        .insertAfter(selectElement);
                selectElement.data('linkedSelectElement', disabledSelectElement);
            }
        }

        // move the option to the correct select element if required
        if (currentSelectElement.is(':disabled') && show) {
            var previousIndex = this.data('index');
            if (previousIndex > 0) {
                this.insertAfter(selectElement.find('option:eq(' + (previousIndex-1) + ')'));
            } else {
                $(this).prependTo(selectElement);
            }
        } else if (!currentSelectElement.is(':disabled') && !show) {
            this.data('index', currentSelectElement.find('option').index(this));
            $(this).prependTo(disabledSelectElement);
        }
    };

	/**
	* This plugin implements behaviours for pick-list types rendering as a select input.
	*/
	$.fn.productOptionViewSelect = function (options) {
		// nothing to do
		return this;
	};

	/**
	* This plugin implements behaviours for product picklist types
	*/
	$.fn.productOptionViewProductPickList = function (options) {
		this.productOptionSelectedValue(options);
		return this;
	};

	/**
	* Checkbox required validator. The built-in required method looks up elements by name which causes the
	* validation to not work for checkbox attributes which have a hidden input component.
	*/
	$.validator.addMethod('checkboxRequired', function (value, element) {
		return this.findByName(element.name).filter(':checkbox:checked').length > 0;
	});

	/**
	* This plugin implements behaviours applicable to checkbox option types.
	*/
	$.fn.productOptionConfigurableEntryCheckbox = function (options) {
		var required = options.required;
		options.required = false;

		this.productOptionConfigurable(options);

		return this.each(function(){
			var target = $(this).find('.validation');

			if (required) {
				target.rules('add', {
					checkboxRequired: true,
					messages: {
						checkboxRequired: options.validation.required
					}
				});
			}
		});
	};

	/**
	* Validates the file type (extension)
	*/
	$.validator.addMethod('fileType', function (value, element, fileTypes) {
		if (!value) {
			return true;
		}

		var dot, extension;

		dot = value.lastIndexOf('.');

		if (dot < 0) {
			return false;
		}

		extension = value.substr(dot + 1).toLowerCase();

		if (extension == '') {
			return false;
		}

		return $.inArray(extension, fileTypes) >= 0;
	});

	/**
	* This plugin implements behaviours applicable to file-upload option types.
	*/
	$.fn.productOptionConfigurableEntryFile = function (options) {
		// if the delete existing file input is present, then this field isn't required
		if ($('#' + $(this).attr('id') + '_Delete').length) {
			options.required = false;
		}

		this.productOptionConfigurable(options);

		return this.each(function(){
			var target = $(this).find('.validation');

			if ($.isArray(options.fileTypes) && options.fileTypes.length) {
				target.rules('add', {
					fileType: options.fileTypes,
					messages: {
						fileType: options.validation.typeNotAllowed
					}
				});
			}
		});
	};

	/**
	* Checks the earliest date
	*/
	$.validator.addMethod('earliestDate', function (value, element, earliestDate) {
		if (!value) {
			return true;
		}

		var date = new Date();
		date.setISO(value);

		return date >= earliestDate;
	});

	/**
	* Checks latest date
	*/
	$.validator.addMethod('latestDate', function (value, element, latestDate) {
		if (!value) {
			return true;
		}

		var date = new Date();
		date.setISO(value);

		return date <= latestDate;
	});

	/**
	* Checks that a date falls between a range
	*/
	$.validator.addMethod('dateRange', function (value, element, param) {
		if (!value) {
			return true;
		}

		var date = new Date();
		date.setISO(value);

		return date >= param.earliestDate && date <= param.latestDate;
	});

	/**
	* This plugin implements behaviours applicable to text-entry option types.
	*/
	$.fn.productOptionConfigurableEntryDate = function (options) {
		this.productOptionConfigurable(options); // inherit base configurable behaviour

		return this.each(function(){
			var $this = $(this),
				validationTarget = $this.find('.validation'),
				yearField = $this.find('.year'),
				monthField = $this.find('.month'),
				dayField = $this.find('.day'),
				_revalidate;

			_revalidate = function () {
				validationTarget
					.filter('.valid, .error')
					.each(function(){
						$(this).valid();
					});
			};

			// whenever a date select is changed, populate the hidden-for-validation field with the date string - note
			// this is for js validation only and server validation should still be performed on individual selects for
			// when js is disabled
			$this.find('.month, .day, .year')
					.change(function(){
						// build y-m-d string for locale-neutral validation
						var year = yearField.val(),
							month = monthField.val(),
							day = dayField.val(),
							date = '';

						if (year && month && day) {
							date = year + '-' + month + '-' + day;
						}

						// populate the validation target and trigger change events
						validationTarget.val(date);
						_revalidate();
					})
					.change(); // trigger change once on plugin application to populate input

			// after the above, we can validate a date in the hidden field because we know the format is fine
			validationTarget.rules('add', {
				dateISO: true,
				messages: {
					dateISO: options.validation.invalidDate
				}
			});

			if (options.limitDate) {
				var earliestDate, latestDate;
				earliestDate = new Date(options.earliestDate * 1000);
				earliestDate.setHours(0,0,0);

				latestDate = new Date(options.latestDate * 1000)
				latestDate.setHours(23,59,59);

				if (options.limitDateOption == 'range') {
					validationTarget.rules('add', {
						dateRange: {
							earliestDate: earliestDate,
							latestDate: latestDate
						},
						messages: {
							dateRange: options.validation.range
						}
					});
				}
				else if (options.limitDateOption == 'earliest') {
					validationTarget.rules('add', {
						earliestDate: earliestDate,
						messages: {
							earliestDate: options.validation.earliestDate
						}
					});
				}
				else if (options.limitDateOption == 'latest') {
					validationTarget.rules('add', {
						latestDate: latestDate,
						messages: {
							latestDate: options.validation.latestDate
						}
					});
				}
			}

			var selectDateCallback = function(dateText, picker){
				dayField.val(picker.currentDay.pad(2, "0", String.PAD_TYPE_LEFT)).change();
				monthField.val((picker.currentMonth + 1).pad(2, "0", String.PAD_TYPE_LEFT)).change();
				yearField.val(picker.currentYear).change();
			}

			var getSelectedDate = function(){
				var year = yearField.val(),
					month = monthField.val(),
					day = dayField.val();

				if (!year || !month || !day) {
					return;
				}

				return new Date(year, month - 1, day);
			}

			// add a datepicker ui
			var picker = $this.find('.picker').datepicker({
				showOn: 'both',
				buttonImage: options.buttonImage,
				buttonImageOnly: true,
				defaultDate: new Date(),
				firstDay: 1,
				minDate: new Date(options.earliestDate * 1000),
				maxDate: new Date(options.latestDate * 1000),
				beforeShow: function (input, picker) {
					// set the caledar to the correct date
					$this.find('.picker')
						.datepicker('setDate', getSelectedDate());
				},
				onSelect: selectDateCallback
			});

			if(typeof config == 'object' && config.isMobile) {
				// hide the standard date selector and replace with a
				// mobile date selector placeholder
				$this.find('.dateselector')
					.hide()
					.after('<div class="mobile-dateselector"/>');

				// add an onClose handler to the datepicker to hide the
				// dimmer overlay
				picker.datepicker('option', 'onClose', function(){
					dimmer.hide();
				});

				// change the datepicker's onSelect handler to update the
				// mobile date selector
				var updateMobileDateSelector = function() {
					$this.find('.mobile-dateselector').html(validationTarget.val());
				}

				picker.datepicker('option', 'onSelect', function(dateText, picker){
					selectDateCallback(dateText, picker);
					updateMobileDateSelector();
				});

				// add a click handler to show the dimmer overlay with
				// the date picker centered on top
				$this.find('.mobile-dateselector').click(
					function(){
						dimmer.show(function(){
							picker.datepicker('hide');
						});

						picker.datepicker('show');

						var widget = picker.datepicker('widget');

						height = widget.height();
						width = widget.width();
						top =  ($(window).height() - height) / 2+$(window).scrollTop() + 'px';
						left = ($(window).width() - width) / 2+$(window).scrollLeft() + 'px';

						widget.css({
							'z-index': 4001,
							position: 'absolute',
							top: top,
							left: left
						});
					}
				);

				updateMobileDateSelector();
			}
		});
	};

	/**
	* This plugin implements behaviours applicable to text-entry option types.
	*/
	$.fn.productOptionConfigurableEntryText = function (options) {
		this.productOptionConfigurable(options); // inherit base configurable behaviour

		return this.each(function(){
			var target = $(this).find('.validation');

			if (options.validateCharacterLength) {
				if (options.minLength && options.maxLength) {
					// use rangelength when both min and max lengths are set
					target.rules('add', {
						rangelength: [ options.minLength, options.maxLength ],
						messages: {
							rangelength: options.validation.rangeLength
						}
					});
				} else if (options.minLength) {
					target.rules('add', {
						minlength: options.minLength,
						messages: {
							minlength: options.validation.minLength
						}
					});
				} else if (options.maxLength) {
					target.rules('add', {
						maxlength: options.maxLength,
						messages: {
							maxlength: options.validation.maxLength
						}
					});
				}
			}
		});
	};

	/**
	* Number validator which is aware of locale-specific decimal and thousands tokens (but not currency)
	*/
	$.validator.addMethod('localenumber', function (value, element, param) {
		var regex, pattern;

		param = $.extend({
			decimalToken: '.',
			thousandsToken: ',',
			integerOnly: false
		}, param || {});

		if (this.optional(element)) {
			return true;
		}

		pattern = "^[-+]?(?:\\d+|\\d{1,3}(?:\\" + param.thousandsToken + "\\d{3})+)";
		if (!param.integerOnly) {
			pattern += "(?:\\" + param.decimalToken + "\\d+)?";
		}
		pattern += "$";

		regex = new RegExp(pattern);

		return regex.test(value);
	});

	/**
	* This plugin implements behaviours applicable to numbers-only text-entry option types.
	*/
	$.fn.productOptionConfigurableEntryNumbersOnlyText = function (options) {
		this.productOptionConfigurable(options);

		// this does not inherit behaviour from the generic text input as lengths have a different meaning
		return this.each(function(){
			var target = $(this).find('.validation');

			if (options.integerOnly) {
				// validate an integer number
				target.rules('add', {
					localenumber: {
						decimalToken: options.decimalToken,
						thousandsToken: options.thousandsToken,
						integerOnly: true
					},
					messages: {
						localenumber: options.validation.notInteger
					}
				});
			} else {
				target.rules('add', {
					localenumber: {
						decimalToken: options.decimalToken,
						thousandsToken: options.thousandsToken
					},
					messages: {
						localenumber: options.validation.invalidNumber
					}
				});
			}

			if (options.limitInput) {
				if (options.limitInputOption == 'range') {
					target.rules('add', {
						range: [ options.lowestValue, options.highestValue ],
						messages: {
							range: options.validation.range
						}
					});
				} else if (options.limitInputOption == 'lowest') {
					target.rules('add', {
						min: options.lowestValue,
						messages: {
							min: options.validation.lowestValue
						}
					});
				} else if (options.limitInputOption == 'highest') {
					target.rules('add', {
						max: options.highestValue,
						messages: {
							max: options.validation.highestValue
						}
					});
				}
			}
		});
	};

	/**
	* Max lines validator
	*/
	$.validator.addMethod('maxlines', function (value, element, maxLines) {
		var matchedLines, matchedLinesLength;

		matchedLines = value.match(/\n/gm);

		if (matchedLines === null) {
			matchedLinesLength = 1;
		}
		else {
			matchedLinesLength = matchedLines.length + 1;
		}

		return matchedLinesLength <= maxLines;
	});

	/**
	* This plugin implements behaviours specifically for multi-line text inputs.
	*/
	$.fn.productOptionConfigurableEntryTextMultiLine = function (options) {
		this.productOptionConfigurableEntryText(options); // inherit base configurable behaviour

		return this.each(function(){
			var target = $(this).find('.validation');

			if (options.validateLineLength && options.maxLines) {
				target.rules('add', {
					maxlines: options.maxLines,
					messages: {
						maxlines: options.validation.maxLines
					}
				});
			}
		});
	};

	/**
	* This plugin implements behaviours for pick-list product-based types.
	*/
	$.fn.productOptionConfigurablePickListProduct = function (options) {
		this.productOptionConfigurable(options);
		return this;
	};

	/**
	* This plugin implements behaviours for product picklist w/ image types
	*/
	$.fn.productOptionViewProductPickListWithImage = function (options) {
		this.productOptionPreviewDisplay(options);

		this.productOptionSelectedValue($.extend({}, options, {
			container: 'tr'
		}));

		return this.each(function(){
			$(this).find('input:checked')
				// scroll the picklist to the pre-selected value to make it visible
				.each(function(){
					var $this = $(this);
					$(this).closest('.scrollContainer')
						.scrollTop($(this).closest('tr').position().top);
				});
		});
	};

	/**
	* This plugin implements behaviours for pick-list swatch types.
	*/
	$.fn.productOptionConfigurablePickListSwatch = function (options) {
		this.productOptionConfigurable(options); // inherit base configurable behaviour
		this.productOptionSelectedValue(options);
		this.productOptionPreviewDisplay(options);

		return this.each(function(){
			// the radio input is hidden when js is enabled so don't try to focus it
			$(this).delegate('input', 'click', function(){
				$(this).blur();
			});
		});
	};

	/**
	* This plugin implements behaviours for pick-list set types.
	*/
	$.fn.productOptionConfigurablePickListSet = function (options) {
		this.productOptionConfigurable(options); // inherit base configurable behaviour
		// view specific behaviour will be applied by the view plugin
		return this;
	};

})(jQuery);


/* ==================================
   ====== PRODUCT.FUNCTIONS.JS ======
   ================================== */

/* Product Variations */
var baseProduct = {};

function updateSelectedVariation(parent, variation, id) {
	if(typeof(parent) == 'undefined') {
		parent = $('body');
	}
	else {
		parent = $(parent);
	}

	if (typeof id == 'undefined') {
		id = '';
	}

	if(typeof(baseProduct.price) == 'undefined') {
		if($('.AddCartButton', parent).css('display') == "none") {
			var cartVisible = false;
		}
		else {
			var cartVisible = true;
		}

		var stockMessageVisible = false;
		if($('.OutOfStockMessage', parent).css('display') != 'none') {
			stockMessageVisible = true;
		}

		var price;
		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this);
			if ($$.is('input')) {
				price = $$.val();
			} else {
				price = $$.html();
			}
		});

		baseProduct = {
			saveAmount: $.trim($('.YouSaveAmount', parent).html()),
			price: $.trim(price),
			sku: $.trim($('.VariationProductSKU', parent).html()),
			weight: $.trim($('.VariationProductWeight', parent).html()),
			thumb: $.trim($('.ProductThumbImage img', parent).attr('src')),
			cartButton: cartVisible,
			stockMessage: stockMessageVisible,
			stockMessageText: $('.OutOfStockMessage', parent).html()
		};
	}

	// Show the defaults again
	if(typeof(variation) == 'undefined') {
		$('.WishListVariationId', parent).val('');
		$('.CartVariationId', parent).val('');
		if(baseProduct.saveAmount) {
			$('.YouSave', parent).show();
			$('.YouSaveAmount').html(baseProduct.saveAmount);
		} else {
			$('.YouSave', parent).hide();
		}
		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this);
			if ($$.is('input')) {
				$$.val(baseProduct.price);
			} else {
				$$.html(baseProduct.price);
			}
		});
		$('.VariationProductSKU', parent).html(baseProduct.sku);
		$('.VariationProductWeight', parent).html(baseProduct.weight);
		$('.ProductThumbImage img', parent).attr('src', baseProduct.thumb);
		$(parent).attr('currentVariation', '');
		$(parent).attr('currentVariationImage', '')
		if(baseProduct.sku == '') {
			$('.ProductSKU', parent).hide();
		}
		if(baseProduct.cartButton) {
			$('.AddCartButton', parent).show();
			if(typeof ShowAddToCartQtyBox != 'undefined' && ShowAddToCartQtyBox=='1') {
				$('.QuantityInput', parent).show();
			}
		}

		if(baseProduct.stockMessage) {
			$('.OutOfStockMessage', parent)
				.show()
				.html(baseProduct.stockMessageText)
			;
		}
		else {
			$('.OutOfStockMessage').hide();
		}

		$('.InventoryLevel', parent).hide();
	}
	// Otherwise, showing a specific variation
	else {
		$('.WishListVariationId', parent).val(id);
		$('.CartVariationId', parent).val(id);

		$('.VariationProductPrice', parent).each(function(){
			var $$ = $(this),
				price = baseProduct.price;

			if (variation.price !== undefined) {
				price = variation.price;
			}

			if ($$.is('input')) {
				$$.val(price.replace(/[^0-9\.,]/g, ''));
			} else {
				$$.html(price);
			}
		});

		if(variation.sku != '') {
			$('.VariationProductSKU', parent).html(variation.sku);
			$('.ProductSKU', parent).show();
		}
		else {
			$('.VariationProductSKU', parent).html(baseProduct.sku);
			if(baseProduct.sku) {
				$('.ProductSKU', parent).show();
			}
			else {
				$('.ProductSKU', parent).hide();
			}
		}
		$('.VariationProductWeight', parent).html(variation.weight);
		if(variation.instock == true) {
			$('.AddCartButton', parent).show();
			if(typeof ShowAddToCartQtyBox != 'undefined' && ShowAddToCartQtyBox=='1') {
				$('.QuantityInput', parent).show();
			}
			$('.OutOfStockMessage', parent).hide();
		}
		else {
			$('.AddCartButton, .QuantityInput', parent).hide();
			$('.OutOfStockMessage', parent).html(lang.VariationSoldOutMessage);
			$('.OutOfStockMessage', parent).show();
		}
		if(variation.thumb != '') {
			ShowVariationThumb = true;
			$('.ProductThumbImage img', parent).attr('src', variation.thumb);
			$(parent).attr('currentVariation', id);
			$(parent).attr('currentVariationImage', variation.image);

			$('.ProductThumbImage a').attr("href", variation.image);
		}
		else {
			$('.ProductThumbImage img', parent).attr('src', baseProduct.thumb);
			$(parent).attr('currentVariation', '');
			$(parent).attr('currentVariationImage', '')
		}
		if(variation.stock && parseInt(variation.stock)) {
			$('.InventoryLevel', parent).show();
			$('.VariationProductInventory', parent).html(variation.stock);
		}
		else {
			$('.InventoryLevel', parent).hide();
		}
		if(variation.saveAmount) {
			$('.YouSave', parent).show();
			$('.YouSaveAmount').html(variation.saveAmount);
			$('.RetailPrice').show();
		} else {
			$('.YouSave', parent).hide();
			$('.RetailPrice').hide();
		}
	}
}

function CheckEventDate() {

	var result = true;

	if(typeof(eventDateData) == 'undefined') {
		return true;
	}

	if ($('#EventDateDay').val() == -1 || $('#EventDateMonth').val() == -1 || $('#EventDateYear').val() == -1) {
		alert(eventDateData['invalidMessage']);
		return false;
	}

	if (eventDateData['type'] == 1) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) > new Date(eventDateData['compDateEnd'])
		 || new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) < new Date(eventDateData['compDate'])
		) {
			result = false;
		}

	} else if (eventDateData['type'] == 2) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) < new Date(eventDateData['compDate'])) {
			result = false;
		}

	} else if (eventDateData['type'] == 3) {
		if (new Date($('#EventDateYear').val()+'/'+$('#EventDateMonth').val()+'/'+$('#EventDateDay').val()) > new Date(eventDateData['compDate'])) {
			result = false;
		}
	} else {
		result = true;
	}

	if (!result) {
		alert(eventDateData['errorMessage']);
	}
	return result;
}

function selectCurrentVideo (videoId) {
	$('.currentVideo').removeClass('currentVideo');
	$('#video_' + videoId).addClass('currentVideo');
}

function showVideoPopup(videoId) {
	var l = (screen.availWidth/2)-250;
	var t = (screen.availHeight/2)-200;
	window.open(config.ShopPath + "/productimage.php?video_id="+videoId, "imagePop", "toolbar=0,scrollbars=1,location=0,statusbar=1,menubar=0,resizable=1,width=530,height=430,top="+t+",left="+l);
}

function updatePinterestMediaLink(image) 
{
	var src = $('.PinterestButtonContainer > a').attr('href');
	if (typeof src != 'undefined') {
		var newsrc = src.replace(new RegExp('&media=([^&]+)'), '&media=' + image);
		$('.PinterestButtonContainer > a').attr('href', newsrc);
	}
}


/* ========================
   ====== PRODUCT.JS ======
   ======================== */

/**
 * All functions have been moved to product.functions.js
 * This is because this file was used in the control panel as well as the front end, but the
 * below initialization code is only meant for the frontend.
 */
$(document).ready(function() {
	// disable image popup on product page at 480 breakpoint
	$(".product-thumbs a").click(function(event){
		if($(window).width() <= 480){
			event.stopPropagation();
			event.preventDefault();
		}
	});

	// are there any videos in the middle column?
	if($('.videoRow').size() > 0) {
		$('.videoRow').bind('click', function () {
			var videoId = $(this).attr('id').replace('video_', '');
			$('#FeaturedVideo').html('<object width="320" height="265">'
				+ '<param name="movie" value="http://www.youtube.com/v/' + videoId + '?fs=1"></param>'
				+ '<param name="allowFullScreen" value="true"></param>'
				+ '<param name="allowscriptaccess" value="always"></param>'
				+ '<embed src="http://www.youtube.com/v/'  + videoId + '?&fs=1&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="320" height="265"></embed>'
				+ '</object>'
			);
			selectCurrentVideo(videoId);
		});
	}

	// are there any videos in the left or right columns?
	if($('.sideVideoRow').size() > 0) {
		$('.sideVideoRow a').bind('click', function (event) {
			event.preventDefault();

			// grab the video id out of the tag id
			var videoId = $(this).attr('id').replace('sidevideo_', '');

			if(config.ProductImageMode == 'lightbox') {
				// we need to hide any objects on the page as they appear onto of our modal window
				$('#VideoContainer object').css('visibility', 'hidden');

				$.iModal({
					data: '<object width="480" height="385">'
						+ '<param name="movie" value="http://www.youtube.com/v/' + videoId + '?fs=1"></param>'
						+ '<param name="allowFullScreen" value="true"></param>'
						+ '<param name="allowscriptaccess" value="always"></param>'
						+ '<embed src="http://www.youtube.com/v/'  + videoId + '?&fs=1&autoplay=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed>'
						+ '</object>',
					title: $(this).find('img').attr('title'),
					width: 510,
					buttons: '<input type="button" onclick="$.iModal.close();" value="  ' + lang.Close +'  " />',
					onBeforeClose: function() {
						// reshow any objects that were hidden
						$('#VideoContainer object').css('visibility', 'visible');
					}
				});
			} else {
				showVideoPopup(videoId);
			}
		});
	}

	// disable all but the first variation box
	$(".VariationSelect:gt(0)").attr('disabled', 'disabled');

	var prodVarSelectionMap = {}
	$(".VariationSelect").change(function() {
		// cache a map of currently selected values.
		var mapIndex = 0;
		$('.VariationSelect').each(function() {
			prodVarSelectionMap[mapIndex] = this.value;
			mapIndex++;
		});

		// get the index of this select
		var index = $('.VariationSelect').index($(this));

		// deselected an option, disable all select's greater than this
		if (this.selectedIndex == 0) {
			$('.VariationSelect:gt(' + index + ')').attr('disabled', 'disabled')
			updateSelectedVariation($('body'));
			return;
		}
		else {
			// disable selects greater than the next
			$('.VariationSelect:gt(' + (index + 1) + ')').attr('disabled', 'disabled')
		}

		//serialize the options of the variation selects
		var optionIds = '';
		$('.VariationSelect:lt(' + (index + 1) + ')').each(function() {
			if (optionIds != '') {
				optionIds += ',';
			}

			optionIds += $(this).val();
		});
		// request values for this option
		$.getJSON(
			'/remote.php?w=GetVariationOptions&productId=' + productId + '&options=' + optionIds,
			function(data) {
				// were options returned?
				if (data.hasOptions) {
					// load options into the next select, disable and focus it
					$('.VariationSelect:eq(' + (index + 1) + ') option:gt(0)').remove();
					$('.VariationSelect:eq(' + (index + 1) + ')').append(data.options).attr('disabled', false).focus();

					// auto select previously selected option, and cascade down, if possible
					var preVal = prodVarSelectionMap[(index + 1)];
					if (preVal != '') {
						var preOption = $('.VariationSelect:eq(' + (index + 1) + ') option[value=' +preVal+']');
						if (preOption) {
							preOption.attr('selected', true);
							$('.VariationSelect:eq(' + (index + 1) + ')').trigger('change');
						}
					}
				}
				else if (data.comboFound) { // was a combination found instead?
					// display price, image etc
					updateSelectedVariation($('body'), data, data.combinationid);
				}
			}
		);
	});

	//radio button variations
	$('.ProductOptionList input[type=radio]').click(function() {
		//current selected option id
		var optionId = $(this).val();
		// request values for this option
		$.getJSON(
			config.AppPath + '/remote.php?w=GetVariationOptions&productId=' + productId + '&options=' + optionId,
			function(data) {
				if (!data) {
					return;
				}

				if (data.comboFound) { // was a combination found instead?
					// display price, image etc
					updateSelectedVariation($('body'), data, data.combinationid);
				}
			}
		);
	});
});


/* ============================
   ====== JQUERY.FORM.JS ======
   ============================ */

/*!
 * jQuery Form Plugin
 * version: 2.64 (25-FEB-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var action = this.attr('action');
	var url = (typeof action === 'string') ? $.trim(action) : '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}

		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) {
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
				io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}

		var data, doc, domCheckCount = 50;

		function cb() {
			doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				return;
			}
			io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
				xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent;
						}
						else if (b) {
							xhr.responseText = b.innerHTML;
						}
					}
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}

				data = httpData(xhr, s.dataType, s);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, 'error', e);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
			}

			if (xhr.aborted) {
				log('upload aborted');
				ok = false;
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}

			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}

			s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};

		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}

	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);


/* =======================
   ====== IMODAL.JS ======
   ======================= */

/*
 * Interspire Modal 1.0
 * (c) 2008 Interspire Pty. Ltd.
 *
 * Based on SimpleModal 1.1.1 - jQuery Plugin
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://plugins.jquery.com/project/SimpleModal
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2007 Eric Martin - http://ericmmartin.com
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Revision: $Id$
 *
 */
(function ($) {
	$.iModal = function(options) {
		return $.iModal.modal.init(options);
	};

	$.modal = function() {
	};

	$.modal.close = function () {
		return $.iModal.modal.close(true);
	};

	$.iModal.close = function () {
		return $.iModal.modal.close(true);
	};

	$.fn.iModal = function (options) {
		options = $.extend({}, {
			type: 'inline',
			inline: $(this).html()
		}, options);
		return $.iModal.modal.init(options);
	};

	$.iModal.defaults = {
		overlay: 40,
		overlayCss: {},
		containerCss: {},
		close: true,
		closeTitle: 'Close',
		closeTxt: false,
		onOpen: null,
		onShow: null,
		onClose: null,
		onBeforeClose: null,
		onAjaxError: null,
		type: 'string',
		width: '750',
		height: 'auto',
		buttons: '',
		title: '',
		method: 'get',
		top: '15%'
	};

	$.iModal.modal = {
		options: null,
		init: function(options) {
			// Can\'t have more than one modal window open at a time
			if($('#ModalContentContainer').length > 0) {
				return this;
			}
			this.options = $.extend({}, $.iModal.defaults, options);

			if(this.options.type == 'inline') {
				this.options.data = $(this.options.inline).html();
				$(this.options.inline).html('');
			}

			this.generateModal();
			return this;
		},

		checkHeight: function() {
			var winHeight = $(window).height(),
				modalHeight = $("#ModalContentContainer").height(),
				top;

			if ((modalHeight > winHeight * .85) ||
					(($.iModal.modal.options.scrollable) && ((winHeight * .85) < $.iModal.modal.options.height))){
				// modal height spans below the fold

				// use 15% of the remaining win height as top
				top = Math.max(0, (winHeight - modalHeight) * 0.15);

				// this stays until window height changes
				top += $(window).scrollTop();
				$("#ModalContainer").css({
					position: 'absolute',
					top: (top + 'px')
				});

				//if the window height is less than modal height, show smaller modal with scroll
				if ($.iModal.modal.options.scrollable) {
					if ((winHeight * .85) < $.iModal.modal.options.height){
						var diff = $.iModal.modal.options.height - $.iModal.modal.options.contentHeight;
						$("#ModalContent").css({
							overflow: 'auto',
							height: ((winHeight - diff) * .75)+'px'
						});

						$("#ModalContainer").css({height: (winHeight * .80) +'px'});
						$(".ModalButtonRow").css('padding-right', '30px');


					}
					else if ($.iModal.modal.options.height < modalHeight){
						$("#ModalContent").css({
							overflow: 'auto',
							height: $.iModal.modal.options.contentHeight+'px'
						});

						$("#ModalContainer").css({height: $.iModal.modal.options.height +'px'});
						$(".ModalButtonRow").css('padding-right', '15px');
					}
					else if ((winHeight * .85) < modalHeight)
					{
						var diff = $.iModal.modal.options.height - $.iModal.modal.options.contentHeight;
						$("#ModalContent").css({
							overflow: 'auto',
							height: ((modalHeight -diff) * .75)+'px'});
						$("#ModalContainer").css({height: (modalHeight * .80)+'px'});
						$(".ModalButtonRow").css('padding-right', '30px');
					}
				}
			}
			else {
				$("#ModalContainer").css({
					position: 'absolute',
					top: '15%'
				});

				if ($.iModal.modal.options.scrollable) {
					$("#ModalContainer").css({height: $.iModal.modal.options.height +'px'});
					$("#ModalContent").css({height: $.iModal.modal.options.contentHeight +'px'});
					$(".ModalButtonRow").css('padding-right', '15px');
				}
			}
		},

		ajaxError: function(xhr, status, error)
		{
			this.hideLoader();
			if ($.isFunction(this.options.onAjaxError)) {
				this.options.onAjaxError.apply(this, [xhr, status, error]);
			}
		},

		createFrame: function(container, html)
		{
	    	var frame = $('<iframe />').width('100%').attr('frameBorder', '0').appendTo(container)[0];

			// Grab the frame's document object
	    	var frameDoc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument;
	    	frameDoc.open(); frameDoc.write(html); frameDoc.close();

			// Auto adjust the iframe's height to the height of the content
			$(frameDoc).ready(function(){
				var height = frameDoc.body.scrollHeight + 20;

				$(frame).height(height);
			});
		},

		displayModal: function(data)
		{
			if (typeof data == 'object' && typeof data.imodal == 'string') {
				// this allows imodal to recognise an object (json) response so long as the response contains an imodal
				// string property
				data = data.imodal;
			}

			this.hideLoader();
			modalContent = '';
			if(!$.browser.msie || $.browser.version >= 7) {
				modalContent = '';
			}
			if(data.indexOf('ModalTitle')>0 && data.indexOf('ModalContent')>0){
				modalContent += '<div id="ModalContentContainer">'+data+'</div>';
			}else{
				buttons = '';
				if(this.options.buttons) {
					buttons = '<div class="ModalButtonRow">'+this.options.buttons+'</div>';
				}
				modalContent += '<div id="ModalContentContainer"><div class="ModalTitle">'+this.options.title+'</div><div class="ModalContent">'+data+ '</div>'+buttons+'</div>';
			}

			cssProperties = {
				position: 'absolute',
				zIndex: 3100,
				width: this.options.width+'px',
				height: this.options.height+'px'
			};

			if($.browser.msie && $.browser.version < 7) {
				cssProperties.position = 'absolute';
			}

			// If direction is rtl then we need to flip our margin positions
			if ($.browser.msie && $.browser.version <= 7 && $('body').css('direction') == 'rtl') {
				cssProperties.marginRight = (this.options.width/2)+'px';
			} else {
				cssProperties.marginLeft = '-'+(this.options.width/2)+'px';
			}

			cssProperties.top = this.options.top;

			var stupidity = $('<div>')
				.attr('id', 'ModalContainer')
				.addClass('modalContainer')
				.css(cssProperties)
				.hide()
				.appendTo('body')
				.html('<div class="modalData">'+modalContent+'</div>');


            if(this.options.className) {
                stupidity.addClass(this.options.className);
            }
			if($('#ModalContainer').find('.ModalButtonRow, #ModalButtonRow').length > 0) {
				$('#ModalContainer').addClass('ModalContentWithButtons');
			}
			if(this.options.close) {
				modal = this;
				$('<a/>')
					.addClass('modalClose')
					.html('<i class="icon-remove"></i>')
					.attr('title', this.options.closeTitle)
					.appendTo('#ModalContainer')
					.click(function(e) {
						e.preventDefault();
						modal.close();
					})
				;
				$(document).bind('keypress', function(e) {
					if(e.keyCode == 27) {
						$('#ModalContainer .modalClose').click();
					}
				});

				if (this.options.closeTxt) {
					$('#ModalContainer .modalClose')
						.html(this.options.closeTitle)
						.css('backgroundPosition', '65px 0')
						.css('lineHeight', '15px')
						.css('textDecoration', 'none')
						.css('width', '60px')
						.css('paddingRight', '20px')
						.css('textAlign', 'right')
					;
					$('#ModalContainer .ModalTitle')
						.css('borderBottom', 'medium none')
						.css('backgroundColor', '#fff')
					;
					$('#ModalContainer #ModalTopBorder').css('backgroundImage', 'none');
				}
			}

			if($.isFunction(this.options.onOpen)) {
				this.options.onOpen.apply(this);
			}
			else {
				$('#ModalContainer').show();
				if($.isFunction(this.options.onShow)) {
					this.options.onShow.apply(this);
				}
			}

			if (this.options.scrollable) {
				var container = $("#ModalContent");
				container.css('overflow', 'auto');
				$(".ModalButtonRow").css('padding-top', '10px');

				this.checkHeight();
			}

			// make sure we can see the bottom part of the modal
			// if the window size is too short

			/*$(window)
				.resize(this.checkHeight)
				.scroll(this.checkHeight)
			;*/
		},

		showLoader: function()
		{
			$('<div/>')
				.attr('id', 'ModalLoadingIndicator')
				.html('<i class="icon-spinner"></i>')
				.appendTo('body');
			;
		},

		showOverlayLoader: function(){
			$('<div/>')
				.attr('id', 'ModalOverlay')
				.addClass('modalOverlay')
				.css({
					opacity: 40 / 100,
					height: '100%',
					width: '100%',
					position: 'fixed',
					left: 0,
					top: 0,
					zIndex: 3000
				})
				.appendTo('body')
			;

			$('<div/>')
				.attr('id', 'ModalLoadingIndicator')
				.appendTo('body');
			;
		},

		hideOverlayLoader: function(){
			$('#ModalLoadingIndicator').remove();
			$('.modalOverlay').remove();
		},

		hideLoader: function()
		{
			$('#ModalLoadingIndicator').remove();
		},

		generateModal: function()
		{
			$('<div/>')
				.attr('id', 'ModalOverlay')
				.addClass('modalOverlay')
				.css({
					opacity: this.options.overlay / 100,
					height: '100%',
					width: '100%',
					position: 'absolute',
					left: 0,
					top: 0,
					zIndex: 3000
				})
				.appendTo('body')
			;

			if($.browser.msie && $.browser.version < 7) {
				wHeight = $(document.body).height()+'px';
				wWidth = $(document.body).width()+'px';
				$('#ModalOverlay').css({
					position: 'absolute',
					height: wHeight,
					width: wWidth
				});
				$('<iframe/>')
					.attr('src', 'javascript:false;')
					.attr('id', 'ModalTempiFrame')
					.css({opacity: 0, position: 'absolute', width: wWidth, height: wHeight, zIndex: 1000, top: 0, left: 0})
					.appendTo('body')
				;
			}

			this.showLoader();
			if(this.options.type == 'ajax') {
				modal = this;
				data = {};
				if(this.options.urlData != undefined) {
					data = this.options.urlData;
				}
				var method = 'get';
				if (this.options.method) {
					method = this.options.method;
				}
				$.ajax({
					url: this.options.url,
					type: method,
					success: function(data) {
						modal.displayModal(data);
					},
					error: function(xhr, status, error) {
						modal.ajaxError(xhr, status, error);
					},
					data: data,
					type: this.options.method,
					global: false
				});
			}
			else if(this.options.type == 'iframe'){
				modal = this;
				data = {};
				if(this.options.urlData != undefined) {
					data = this.options.urlData;
				}
				var method = 'get';
				if (this.options.method) {
					method = this.options.method;
				}
				$.ajax({
					url: this.options.url,
					type: method,
					success: function(data) {
						modal.displayModal('');
						var f = modal.createFrame($('#ModalContentContainer .ModalContent'), data);
					},
					error: function(xhr, status, error) {
						modal.ajaxError(xhr, status, error);
					},
					data: data,
					type: this.options.method,
					global: false
				});
			}
			else {
				this.displayModal(this.options.data);
			}
		},

		close: function(external)
		{
			if (!this.options) {
				return;
			}

			if($.isFunction(this.options.onBeforeClose)) {
				if (this.options.onBeforeClose.apply(this, []) === false) {
					// prevent modal from closing if onBeforeClose returns (bool)false
					return;
				}
				this.options.onBeforeClose = null; // ISC-3837
			}

			if(this.options.type == 'inline') {
				$(this.options.inline).html(this.options.data);
			}

			if($.isFunction(this.options.onClose) && !external) {
				this.options.onClose.apply(this);
			}
			else {
				$('#ModalContainer').remove();
			}

			$('#ModalLoadingIndicator').remove();
			$('#ModalOverlay').remove();
			$('#ModalTempiFrame').remove();

			return false;
		}
	};
})(jQuery);


function ModalBox(title, content){
	var str = '<div class="ModalTitle">'+title+'</div><div class="ModalContent">'+content+ '</div><div class="ModalButtonRow"></div>';
	$.iModal({ data: str });
}

function ModalBoxInline(title, content, width, withCloseButton){
	if(typeof(width) == 'undefined'){
		var width = 800;
	}
	if(typeof(withCloseButton) == 'undefined'){
		var withCloseButton = false;
	}
	if(withCloseButton){
		var str = '<div class="ModalTitle">'+title+'</div><div class="ModalContent">'+$(content).html()+ '</div><div class="ModalButtonRow"></div>';
	}else{
		var str = '<div class="ModalTitle">'+title+'</div><div class="ModalContent">'+$(content).html()+ '</div><div class="ModalButtonRow"><input type="button" class="CloseButton FormButton" value="Close Window" onclick="$.iModal.close();" /></div>';
	}
	$.iModal({ 'data': str, 'width':width });
}


/* =====================
   ====== CART.JS ======
   ===================== */

var Cart = {
	ToggleShippingEstimation: function()
	{
		$('.EstimatedShippingMethods').hide(250);

		if($('.EstimateShipping').is(':hidden')) {
			$('.EstimateShippingLink').hide();
			$('.EstimateShipping').slideDown(250);
		}
		else {
			$('.EstimateShipping').slideUp(250,function(){
				$('.EstimateShippingLink').fadeIn(250);
			});
		}

		$('.EstimateShipping select:eq(0)').focus();

		return false;
	},

	EstimateShipping: function()
	{
		if ($('#shippingZoneCountry').val() == 0) {
			alert(lang.SelectCountry);
			$('#shippingZoneCountry').focus();
			return;
		}

		if ($('#shippingZoneState').is(':visible') && $('#shippingZoneState').val() == 0) {
			alert(lang.SelectState);
			$('#shippingZoneState').focus();
			return;
		}

		if ($.trim($('#shippingZoneZip').val()) == '') {
			alert(lang.EnterZip);
			$('#shippingZoneZip').focus();
			return;
		}

		$('.EstimatedShippingMethods').hide();
		$('.EstimateShipping .EstimateShippingButtons span').hide();
		$('.EstimateShipping .EstimateShippingButtons input')
			.data('oldVal', $('.EstimateShipping .EstimateShippingButtons input').val())
			.val(lang.Calculating)
			.attr('disabled', true)
		;
		$.ajax({
			url: 'remote.php',
			type: 'post',
			data: {
				w: 'getShippingQuotes',
				countryId: $('#shippingZoneCountry').val(),
				stateId: $('#shippingZoneState').val(),
				stateName: escape($('#shippingZoneStateName').val()),
				zipCode: $('#shippingZoneZip').val()
			},
			success: function(data)
			{	
				$('.EstimatedShippingMethods .ShippingMethodList').html(data);

				$('.EstimatedShippingMethods .ShippingMethodList table').addClass('twelve');
				$('.EstimatedShippingMethods .ShippingMethodList .Submit input').addClass('button');

				$('.EstimatedShippingMethods').show(250);
				$('.EstimateShipping .EstimateShippingButtons span').show(250);
				$('.EstimateShipping .EstimateShippingButtons input')
					.val($('.EstimateShipping .EstimateShippingButtons input').data('oldVal'))
					.attr('disabled', false)
				;
			}
		});
	},

	ToggleShippingEstimateCountry: function()
	{
		var countryId = $('#shippingZoneCountry').val();
		$.ajax({
			url: 'remote.php',
			type: 'post',
			data: 'w=countryStates&c='+countryId,
			success: function(data)
			{
				$('#shippingZoneState option:gt(0)').remove();
				var states = data.split('~');
				var numStates = 0;
				for(var i =0; i < states.length; ++i) {
					vals = states[i].split('|');
					if(!vals[0]) {
						continue;
					}
					$('#shippingZoneState').append('<option value="'+vals[1]+'">'+vals[0]+'</option>');
					++numStates;
				}

				$('#s2id_shippingZoneState .select2-choice span').text('Choose a State');

				if(numStates == 0) {
					$('#shippingZoneState').hide();
					$('#shippingZoneStateName').show();
					$('#shippingZoneStateRequired').hide();

					$('#s2id_shippingZoneState').hide();
				}
				else {
					$('#shippingZoneState').show();
					$('#shippingZoneStateName').hide();
					$('#shippingZoneStateRequired').show();

					$('#s2id_shippingZoneState').show();
				}

				$('#shippingZoneState').val('0');
			}
		});
	},

	UpdateShippingCost: function()
	{
		var returnVal = true;
		var method = $('.EstimatedShippingMethods table').each(function() {
			var method = $('input[type=radio]:checked', this).val();
			if(typeof(method) == 'undefined' || method == '') {
				alert(lang.ChooseShippingMethod);
				$('input[type=radio]:eq(0)', this).focus();
				returnVal = false;
				return returnVal;
			}
		});

		if(returnVal == false) {
			return returnVal;
		}

		$('#cartForm').submit();
	},

	RemoveItem: function(itemId)
	{
		if(confirm(lang.CartRemoveConfirm)) {
			document.location.href = "cart.php?action=remove&item="+itemId;
		}
	},

	UpdateQuantity: function()
	{
		$('#cartForm').submit();
	},

	ValidateQuantityForm: function(form)
	{
		var valid = true;
		var qtyInputs = $(form).find('input.qtyInput');
		qtyInputs.each(function() {
			if(isNaN($(this).val()) || $(this).val() < 0) {
				alert(lang.InvalidQuantity);
				this.focus();
				this.select();
				valid = false;
				return false;
			}
		});
		if(valid == false) {
			return false;
		}

		return true;
	},

	CheckCouponCode: function()
	{
		if($('#couponcode').val() == '') {
			alert(lang.EnterCouponCode);
			$('#couponcode').focus();
			return false;
		}
	},

	CheckGiftCertificateCode: function()
	{
		if($('#giftcertificatecode').val() == '') {
			alert(lang.EnterGiftCertificateCode);
			$('#giftcertificatecode').focus();
			return false;
		}
	},

	ManageGiftWrapping: function(itemId)
	{
		$.iModal({
			type: 'ajax',
			url: 'remote.php?w=selectGiftWrapping&itemId='+itemId
		});
	},

	ToggleGiftWrappingType: function(option)
	{
		if($(option).hasClass('HasPreview')) {
			$('.GiftWrappingPreviewLinks').hide();
			$('#GiftWrappingPreviewLink'+$(option).val()).show();
		}
		else {
			$('.GiftWrappingPreviewLinks').hide();
		}

		if($(option).hasClass('AllowComments')) {
			$(option).parents('.WrappingOption').find('.WrapComments').show();
		}
		else {
			$(option).parents('.WrappingOption').find('.WrapComments').hide();
		}
	},

	ToggleMultiWrapping: function(value)
	{
		if(value == 'same') {
			$('.WrappingOptionsSingle').show();
			$('.WrappingOptionsMultiple').hide();
		}
		else {
			$('.WrappingOptionsSingle').hide();
			$('.WrappingOptionsMultiple').show();
		}
	},

	RemoveGiftWrapping: function(itemId)
	{
		if(confirm(lang.ConfirmRemoveGiftWrapping)) {
			return true;
		}
		else {
			return false;
		}
	},

	ShowEditOptionsInCartForm: function(itemId)
	{
		var modalOptions = {
			type: 'ajax',
			url: 'remote.php?w=editconfigurablefieldsincart&itemid='+itemId
		};

		if (typeof config == 'object' && config.isMobile) {
			modalOptions.width = 300;
		}

		$.iModal(modalOptions);
	},

	saveItemCustomizations: function()
	{
		if (!CheckProductConfigurableFields($('#CartEditProductFieldsForm'))) {
			return false;
		}

		// validate the attributes
		var attributesValidated = $('#CartEditProductFieldsForm')
			.validate()
			.form();

		if (!attributesValidated) {
			return false;
		}

		return true;
	},

	DeleteUploadedFile: function(fieldid, itemid)
	{
		if(confirm(lang.DeleteProductFieldFileConfirmation)) {
			$.ajax({
				url: 'remote.php',
				type: 'post',
				data: 'w=deleteuploadedfileincart&field='+fieldid+'&item='+itemid,
				success: function(data) {
					document.getElementById('CurrentProductFile_'+fieldid).value = '';
					$('#CartFileName_'+fieldid).hide();
				}
			});
		}
		return;
	},

	ReloadCart: function()
	{
		window.location = "cart.php";
	}

};