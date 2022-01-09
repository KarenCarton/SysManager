;/**
Core script to handle the entire theme and core functions
**/
/**********************************************框架theme开始********************************************/
var EzuiApp = function() {

    // IE mode
    var isRTL = false;
    var isIE8 = false;
    var isIE9 = false;
    var isIE10 = false;
    var resizeHandlers = [];

    var assetsPath = '../assets/';

    var globalImgPath = 'global/img/';

    var globalPluginsPath = 'global/plugins/';

    var globalCssPath = 'global/css/';

    // theme layout color set

    var brandColors = {
        'blue': '#89C4F4',
        'red': '#F3565D',
        'green': '#1bbc9b',
        'purple': '#9b59b6',
        'grey': '#95a5a6',
        'yellow': '#F8CB00'
    };
    // initializes main settings
    var handleInit = function() {

        if ($('body').css('direction') === 'rtl') {
            isRTL = true;
        }

        isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
        isIE9 = !!navigator.userAgent.match(/MSIE 9.0/);
        isIE10 = !!navigator.userAgent.match(/MSIE 10.0/);

        if (isIE10) {
            $('html').addClass('ie10'); // detect IE10 version
        }

        if (isIE10 || isIE9 || isIE8) {
            $('html').addClass('ie'); // detect IE10 version
        }
    };

    // runs callback functions set by App.addResponsiveHandler().
    var _runResizeHandlers = function() {
        // reinitialize other subscribed elements
        for (var i = 0; i < resizeHandlers.length; i++) {
            var each = resizeHandlers[i];
            each.call();
        }
    };


    var handleOnResize = function() {
        
        var windowWidth = $(window).width();
        var resize;
        if (isIE8) {
            var currheight;
            $(window).resize(function() {
                if (currheight == document.documentElement.clientHeight) {
                    return; //quite event since only body resized not window.
                }
                if (resize) {
                    clearTimeout(resize);
                }
                resize = setTimeout(function() {
                    _runResizeHandlers();
                }, 50); // wait 50ms until window resize finishes.                
                currheight = document.documentElement.clientHeight; // store last body client height
            });
        } else {
            $(window).resize(function() {
                if ($(window).width() != windowWidth) {
                    windowWidth = $(window).width();
                    if (resize) {
                        clearTimeout(resize);
                    }
                    resize = setTimeout(function() {
                        _runResizeHandlers();
                    }, 50); // wait 50ms until window resize finishes.
                }
            });
        }
    };
    

    var handleMaterialDesign = function() {

        // Material design ckeckbox and radio effects
        $('body').on('click', '.md-checkbox > label, .md-radio > label', function() {
            var the = $(this);
            // find the first span which is our circle/bubble
            var el = $(this).children('span:first-child');
              
            // add the bubble class (we do this so it doesnt show on page load)
            el.addClass('inc');
              
            // clone it
            var newone = el.clone(true);  
              
            // add the cloned version before our original
            el.before(newone);  
              
            // remove the original so that it is ready to run on next click
            $("." + el.attr("class") + ":last", the).remove();
        }); 

        if ($('body').hasClass('page-md')) { 
            // Material design click effect
            // credit where credit's due; http://thecodeplayer.com/walkthrough/ripple-click-effect-google-material-design       
            var element, circle, d, x, y;
            $('body').on('click', 'a.btn, button.btn, input.btn, label.btn', function(e) { 
                element = $(this);
      
                if(element.find(".md-click-circle").length == 0) {
                    element.prepend("<span class='md-click-circle'></span>");
                }
                    
                circle = element.find(".md-click-circle");
                circle.removeClass("md-click-animate");
                
                if(!circle.height() && !circle.width()) {
                    d = Math.max(element.outerWidth(), element.outerHeight());
                    circle.css({height: d, width: d});
                }
                
                x = e.pageX - element.offset().left - circle.width()/2;
                y = e.pageY - element.offset().top - circle.height()/2;
                
                circle.css({top: y+'px', left: x+'px'}).addClass("md-click-animate");

                setTimeout(function() {
                    circle.remove();      
                }, 1000);
            });
        }

    }       


// 表单验证时的顶部提示框为data-close="alert"删



    // Handles Bootstrap Popovers

    // last popep popover
    var lastPopedPopover;
  //简单提示型弹出框初始化
    var handlePopovers = function() {
        $('.popovers').popover();

        // close last displayed popover

        $(document).on('click.bs.popover.data-api', function(e) {
            if (lastPopedPopover) {
                lastPopedPopover.popover('hide');
            }
        });
    };

    // Handles scrollable contents using jQuery SlimScroll plugin.
    var handleScrollers = function() {
        EzuiApp.initSlimScroll('.scroller');
    };

    // Fix input placeholder issue for IE8 and IE9
    var handleFixInputPlaceholderForIE = function() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (isIE8 || isIE9) { // ie8 & ie9
            // this is html5 placeholder fix for inputs, inputs with placeholder-no-fix class will be skipped(e.g: we need this for password fields)
            $('input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)').each(function() {
                var input = $(this);

                if (input.val() === '' && input.attr("placeholder") !== '') {
                    input.addClass("placeholder").val(input.attr('placeholder'));
                }

                input.focus(function() {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                input.blur(function() {
                    if (input.val() === '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    };

    // handle group element heights
   var handleHeight = function() {
       $('[data-auto-height]').each(function() {
            
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
            var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', '');
                } else {
                    $(this).css('min-height', '');
                }

                var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });

            height = height + offset;

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if(parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
       });       
    }

    //* END:CORE HANDLERS *//

    return {

        //main function to initiate the theme
        init: function() {
            //Core handlers
            handleInit(); // initialize core variables
            handleOnResize(); // set and handle responsive    
            //UI Component handlers     
            handleMaterialDesign(); // handle material design       
            handleScrollers(); // handles slim scrolling contents 
            handlePopovers(); // handles bootstrap popovers
            this.addResizeHandler(handleHeight); // handle auto calculating height on window resize
            // Hacks
            handleFixInputPlaceholderForIE(); //IE8 & IE9 input placeholder issue fix
        },

        //main function to initiate core javascript after ajax complete
        initAjax: function() {
            handleScrollers(); // handles slim scrolling contents 
          //  handleSelect2(); // handle custom Select2 dropdowns
          //handleDropdowns(); // handle dropdowns
            handlePopovers(); // handles bootstrap popovers
         
        },

        //init main components 
        initComponents: function() {
            this.initAjax();
        },

        //public function to remember last opened popover that needs to be closed on click
        setLastPopedPopover: function(el) {
            lastPopedPopover = el;
        },

        //public function to add callback a function which will be called on window resize
        addResizeHandler: function(func) {
            resizeHandlers.push(func);
        },

        //public functon to call _runresizeHandlers
        runResizeHandlers: function() {
            _runResizeHandlers();
        },

        // wrApper function to scroll(focus) to an element
        scrollTo: function(el, offeset) {
            var pos = (el && el.size() > 0) ? el.offset().top : 0;

            if (el) {
                if ($('body').hasClass('page-header-fixed')) {
                    pos = pos - $('.page-header').height();
                } else if ($('body').hasClass('page-header-top-fixed')) {
                    pos = pos - $('.page-header-top').height();
                } else if ($('body').hasClass('page-header-menu-fixed')) {
                    pos = pos - $('.page-header-menu').height();
                }
                pos = pos + (offeset ? offeset : -1 * el.height());
            }

            $('html,body').animate({
                scrollTop: pos
            }, 'slow');
        },

        initSlimScroll: function(el) {
            if (!$().slimScroll) {
                return;
            }

            $(el).each(function() {
                if ($(this).attr("data-initialized")) {
                    return; // exit
                }

                var height;

                if ($(this).attr("data-height")) {
                    height = $(this).attr("data-height");
                } else {
                    height = $(this).css('height');
                }

                $(this).slimScroll({
                    allowPageScroll: true, // allow page scroll when the element scroll is ended
                    size: '7px',
                    color: ($(this).attr("data-handle-color") ? $(this).attr("data-handle-color") : '#bbb'),
                    wrapperClass: ($(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : 'slimScrollDiv'),
                    railColor: ($(this).attr("data-rail-color") ? $(this).attr("data-rail-color") : '#eaeaea'),
                    position: isRTL ? 'left' : 'right',
                    height: height,
                    alwaysVisible: ($(this).attr("data-always-visible") == "1" ? true : false),
                    railVisible: ($(this).attr("data-rail-visible") == "1" ? true : false),
                    disableFadeOut: true
                });

                $(this).attr("data-initialized", "1");
            });
        },
        // 下拉列表
        destroySlimScroll: function(el) {
            if (!$().slimScroll) {
                return;
            }

            $(el).each(function() {
                if ($(this).attr("data-initialized") === "1") { // destroy existing instance before updating the height
                    $(this).removeAttr("data-initialized");
                    $(this).removeAttr("style");

                    var attrList = {};
                    // 设置下拉列表中每个li的颜色
                    // store the custom attribures so later we will reassign.
                    if ($(this).attr("data-handle-color")) {
                        attrList["data-handle-color"] = $(this).attr("data-handle-color");
                    }
                    if ($(this).attr("data-wrapper-class")) {
                        attrList["data-wrapper-class"] = $(this).attr("data-wrapper-class");
                    }
                    if ($(this).attr("data-rail-color")) {
                        attrList["data-rail-color"] = $(this).attr("data-rail-color");
                    }
                    if ($(this).attr("data-always-visible")) {
                        attrList["data-always-visible"] = $(this).attr("data-always-visible");
                    }
                    if ($(this).attr("data-rail-visible")) {
                        attrList["data-rail-visible"] = $(this).attr("data-rail-visible");
                    }

                    $(this).slimScroll({
                        wrapperClass: ($(this).attr("data-wrapper-class") ? $(this).attr("data-wrapper-class") : 'slimScrollDiv'),
                        destroy: true
                    });

                    var the = $(this);

                    // reassign custom attributes
                    $.each(attrList, function(key, value) {
                        the.attr(key, value);
                    });

                }
            });
        },

        // function to scroll to the top
        scrollTop: function() {
            EzuiApp.scrollTo();
        },

        load: function(ele, url, callback){
          //load function
          var that = $(ele);
          $(that).load(url,function(result){
            $(result).find("script").appendTo($(that));

            callback();
          });
        },
        //加载动画
        startLoading: function(options) {
                $('.ez-loading').remove();
                $('.ez-loadinig-shade').remove();
                var loadHtml='<div class="ez-loading">'+
    			'<div class="ez-loading-icon">'+
    			'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">'+
    			'<path id="loading-12-icon" d="M291,82.219c0,16.568-13.432,30-30,30s-30-13.432-30-30s13.432-30,30-30S291,65.65,291,82.219z'+
    				' M261,404.781c-15.188,0-27.5,12.312-27.5,27.5s12.312,27.5,27.5,27.5s27.5-12.312,27.5-27.5S276.188,404.781,261,404.781z'+
    				' M361.504,113.167c-4.142,7.173-13.314,9.631-20.487,5.489c-7.173-4.141-9.631-13.313-5.49-20.487'+
    				'c4.142-7.173,13.314-9.631,20.488-5.489C363.188,96.821,365.645,105.994,361.504,113.167z M188.484,382.851'+
    				'c-14.348-8.284-32.697-3.368-40.98,10.98c-8.285,14.349-3.367,32.696,10.98,40.981c14.35,8.283,32.697,3.367,40.98-10.981'+
    				'C207.75,409.482,202.834,391.135,188.484,382.851z M421.33,184.888c-8.368,4.831-19.07,1.965-23.901-6.404'+
    				'c-4.832-8.368-1.965-19.07,6.404-23.902c8.368-4.831,19.069-1.964,23.9,6.405C432.566,169.354,429.699,180.056,421.33,184.888z'+
    				' M135.399,329.767c-8.285-14.35-26.633-19.266-40.982-10.982c-14.348,8.285-19.264,26.633-10.979,40.982'+
    				'c8.284,14.348,26.632,19.264,40.981,10.98C138.767,362.462,143.683,344.114,135.399,329.767z M436.031,277.249'+
    				'c-11.044,0-20-8.953-20-19.999c0-11.045,8.955-20.001,20.001-20.001c11.044,0,19.999,8.955,19.999,20.002'+
    				'C456.031,268.295,447.078,277.249,436.031,277.249z M115.97,257.251c-0.001-16.57-13.433-30.001-30.001-30.002'+
    				'c-16.568,0.001-29.999,13.432-30,30.002c0.001,16.566,13.433,29.998,30.001,30C102.538,287.249,115.969,273.817,115.97,257.251z'+
    				' M401.333,364.248c-10.759-6.212-14.446-19.97-8.234-30.73c6.212-10.759,19.971-14.446,30.731-8.233'+
    				'c10.759,6.211,14.445,19.971,8.232,30.73C425.852,366.774,412.094,370.46,401.333,364.248z M135.398,184.736'+
    				'c8.285-14.352,3.368-32.698-10.98-40.983c-14.349-8.283-32.695-3.367-40.981,10.982c-8.282,14.348-3.366,32.696,10.981,40.981'+
    				'C108.768,204,127.115,199.082,135.398,184.736z M326.869,421.328c-6.902-11.953-2.807-27.242,9.148-34.145'+
    				's27.243-2.806,34.146,9.149c6.902,11.954,2.806,27.243-9.15,34.145C349.059,437.381,333.771,433.284,326.869,421.328z'+
    				' M188.482,131.649c14.352-8.286,19.266-26.633,10.982-40.982c-8.285-14.348-26.631-19.264-40.982-10.98'+
    				'c-14.346,8.285-19.264,26.633-10.98,40.982C155.787,135.017,174.137,139.932,188.482,131.649z">'+
    			'</svg></div></div><div class="ez-loadinig-shade"></div>';
                $('body').append(loadHtml);
                //$('body').append('<div class="page-loading"><img src="' + this.getGlobalImgPath() + 'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>' + (options && options.message ? options.message : 'Loading...') + '</span></div>');
            
        },
        //加载动画
        stopLoading: function() {
          setTimeout(function(){
            $('.ez-loading').remove();
            $('.ez-loadinig-shade').remove();
          },250);
        },

        alert: function(options) {

            options = $.extend(true, {
                container: "", // alerts parent container(by default placed after the page breadcrumbs)
                place: "append", // "append" or "prepend" in container 
                type: 'success', // alert's type
                message: "", // alert's message
                close: true, // make alert closable
                reset: true, // close all previouse alerts first
                focus: true, // auto scroll to the alert after shown
                closeInSeconds: 0, // auto close after defined seconds
                icon: "" // put icon before the message
            }, options);

            var id = EzuiApp.getUniqueID("App_alert");

            var html = '<div id="' + id + '" class="custom-alerts alert alert-' + options.type + ' fade in">' + (options.close ? '<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>' : '') + (options.icon !== "" ? '<i class="fa-lg fa fa-' + options.icon + '"></i>  ' : '') + options.message + '</div>';

            if (options.reset) {
                $('.custom-alerts').remove();
            }

            if (!options.container) {
                if ($('.page-fixed-main-content').size() === 1) {
                    $('.page-fixed-main-content').prepend(html);
                } else if (($('body').hasClass("page-container-bg-solid") || $('body').hasClass("page-content-white")) && $('.page-head').size() === 0) {
                    $('.page-title').after(html);
                } else {
                    if ($('.page-bar').size() > 0) {
                        $('.page-bar').after(html);
                    } else {
                        $('.page-breadcrumb, .breadcrumbs').after(html);
                    }
                }
            } else {
                if (options.place == "append") {
                    $(options.container).append(html);
                } else {
                    $(options.container).prepend(html);
                }
            }

            if (options.focus) {
                EzuiApp.scrollTo($('#' + id));
            }

            if (options.closeInSeconds > 0) {
                setTimeout(function() {
                    $('#' + id).remove();
                }, options.closeInSeconds * 1000);
            }

            return id;
        },

        //public function to initialize the fancybox plugin
        initFancybox: function() {
           // handleFancybox();
        },

        //public helper function to get actual input value(used in IE9 and IE8 due to placeholder attribute not supported)
        getActualVal: function(el) {
            el = $(el);
            if (el.val() === el.attr("placeholder")) {
                return "";
            }
            return el.val();
        },

        //public function to get a paremeter by name from URL
        getURLParameter: function(paramName) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");

            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == paramName) {
                    return unescape(val[1]);
                }
            }
            return null;
        },

        // check for device touch support
        isTouchDevice: function() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        },

        // To get the correct viewport width based on  http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
        getViewPort: function() {
            var e = window,
                a = 'inner';
            if (!('innerWidth' in window)) {
                a = 'client';
                e = document.documentElement || document.body;
            }

            return {
                width: e[a + 'Width'],
                height: e[a + 'Height']
            };
        },

        getUniqueID: function(prefix) {
            return 'prefix_' + Math.floor(Math.random() * (new Date()).getTime());
        },

        // check IE8 mode
        isIE8: function() {
            return isIE8;
        },

        // check IE9 mode
        isIE9: function() {
            return isIE9;
        },

        //check RTL mode
        isRTL: function() {
            return isRTL;
        },

        // // check IE8 mode
        // isAngularJsApp: function() {
        //     return (typeof angular == 'undefined') ? false : true;
        // },

        getAssetsPath: function() {
            return assetsPath;
        },

        setAssetsPath: function(path) {
            assetsPath = path;
        },

        setGlobalImgPath: function(path) {
            globalImgPath = path;
        },

        getGlobalImgPath: function() {
            return assetsPath + globalImgPath;
        },

        setGlobalPluginsPath: function(path) {
            globalPluginsPath = path;
        },

        getGlobalPluginsPath: function() {
            return assetsPath + globalPluginsPath;
        },

        getGlobalCssPath: function() {
            return assetsPath + globalCssPath;
        },

        // get layout color code by color name
        getBrandColor: function(name) {
            if (brandColors[name]) {
                return brandColors[name];
            } else {
                return '';
            }
        },

        getResponsiveBreakpoint: function(size) {
            // bootstrap responsive breakpoints
            var sizes = {
                'xs' : 480,     // extra small
                'sm' : 768,     // small
                'md' : 992,     // medium
                'lg' : 1200     // large
            };

            return sizes[size] ? sizes[size] : 0; 
        }
    };
}();
/**********************************************框架theme结束********************************************/

/**********************************************弹出框开始********************************************/
/**
 * bootbox.js [v4.4.0]
 *
 * http://bootboxjs.com/license.txt
 */

// @see https://github.com/makeusabrew/bootbox/issues/180
// @see https://github.com/makeusabrew/bootbox/issues/186
(function (root, factory) {

  "use strict";
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    // Browser globals (root is window)
    root.bootbox = factory(root.jQuery);
  }

}(this, function init($, undefined) {

  "use strict";

  // the base DOM structure needed to create a modal
  var templates = {
    dialog:
      "<div class='bootbox modal' tabindex='-1' role='dialog'>" +
        "<div class='modal-dialog'>" +
          "<div class='modal-content'>" +
            "<div class='modal-body'><div class='bootbox-body'></div></div>" +
          "</div>" +
        "</div>" +
      "</div>",
    header:
      "<div class='modal-header'>" +
        "<h4 class='modal-title'></h4>" +
      "</div>",
    footer:
      "<div class='modal-footer'></div>",
    closeButton:
      "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'><i class='fa fa-remove'></i></button>",
    form:
      "<form class='bootbox-form'></form>",
    inputs: {
      text:
        "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
      textarea:
        "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
      email:
        "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
      select:
        "<select class='bootbox-input bootbox-input-select form-control'></select>",
      checkbox:
        "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
      date:
        "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
      time:
        "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
      number:
        "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
      password:
        "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
    }
  };

  var defaults = {
    // default language
    locale: "en",
    // show backdrop or not. Default to static so user has to interact with dialog
    backdrop: "static",
    // animate the modal in/out
    animate: true,
    // additional class string applied to the top level dialog
    className: null,
    // whether or not to include a close button
    closeButton: true,
    // show the dialog immediately by default
    show: true,
    // dialog container
    container: "body"//mark
  };

  // our public object; augmented after our private API
  var exports = {};

  /**
   * @private
   */
  function _t(key) {
    var locale = locales[defaults.locale];
    return locale ? locale[key] : locales.zh_CN[key];
  }

  function processCallback(e, dialog, callback) {
    e.stopPropagation();
    e.preventDefault();

    // by default we assume a callback will get rid of the dialog,
    // although it is given the opportunity to override this

    // so, if the callback can be invoked and it *explicitly returns false*
    // then we'll set a flag to keep the dialog active...
    var preserveDialog = $.isFunction(callback) && callback.call(dialog, e) === false;

    // ... otherwise we'll bin it
    if (!preserveDialog) {
      dialog.modal("hide");
    }
  }

  function getKeyLength(obj) {
    // @TODO defer to Object.keys(x).length if available?
    var k, t = 0;
    for (k in obj) {
      t ++;
    }
    return t;
  }

  function each(collection, iterator) {
    var index = 0;
    $.each(collection, function(key, value) {
      iterator(key, value, index++);
    });
  }

  function sanitize(options) {
    var buttons;
    var total;

    if (typeof options !== "object") {
      throw new Error("Please supply an object of options");
    }

    if (!options.message) {
      throw new Error("Please specify a message");
    }

    // make sure any supplied options take precedence over defaults
    options = $.extend({}, defaults, options);

    if (!options.buttons) {
      options.buttons = {};
    }

    buttons = options.buttons;

    total = getKeyLength(buttons);

    each(buttons, function(key, button, index) {

      if ($.isFunction(button)) {
        // short form, assume value is our callback. Since button
        // isn't an object it isn't a reference either so re-assign it
        button = buttons[key] = {
          callback: button
        };
      }

      // before any further checks make sure by now button is the correct type
      if ($.type(button) !== "object") {
        throw new Error("button with key " + key + " must be an object");
      }

      if (!button.label) {
        // the lack of an explicit label means we'll assume the key is good enough
        button.label = key;
      }

      if (!button.className) {
        if (total <= 2 && index === total-1) {
          // always add a primary to the main option in a two-button dialog
          button.className = "btn-primary";
        } else {
          button.className = "btn-default";
        }
      }
    });

    return options;
  }

  /**
   * map a flexible set of arguments into a single returned object
   * if args.length is already one just return it, otherwise
   * use the properties argument to map the unnamed args to
   * object properties
   * so in the latter case:
   * mapArguments(["foo", $.noop], ["message", "callback"])
   * -> { message: "foo", callback: $.noop }
   */
  function mapArguments(args, properties) {
    var argn = args.length;
    var options = {};

    if (argn < 1 || argn > 2) {
      throw new Error("Invalid argument length");
    }

    if (argn === 2 || typeof args[0] === "string") {
      options[properties[0]] = args[0];
      options[properties[1]] = args[1];
    } else {
      options = args[0];
    }

    return options;
  }

  /**
   * merge a set of default dialog options with user supplied arguments
   */
  function mergeArguments(defaults, args, properties) {
    return $.extend(
      // deep merge
      true,
      // ensure the target is an empty, unreferenced object
      {},
      // the base options object for this type of dialog (often just buttons)
      defaults,
      // args could be an object or array; if it's an array properties will
      // map it to a proper options object
      mapArguments(
        args,
        properties
      )
    );
  }

  /**
   * this entry-level method makes heavy use of composition to take a simple
   * range of inputs and return valid options suitable for passing to bootbox.dialog
   */
  function mergeDialogOptions(className, labels, properties, args) {
    //  build up a base set of dialog properties
    var baseOptions = {
      className: "bootbox-" + className,
      buttons: createLabels.apply(null, labels)
    };

    // ensure the buttons properties generated, *after* merging
    // with user args are still valid against the supplied labels
    return validateButtons(
      // merge the generated base properties with user supplied arguments
      mergeArguments(
        baseOptions,
        args,
        // if args.length > 1, properties specify how each arg maps to an object key
        properties
      ),
      labels
    );
  }

  /**
   * from a given list of arguments return a suitable object of button labels
   * all this does is normalise the given labels and translate them where possible
   * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }
   */
  function createLabels() {
    var buttons = {};

    for (var i = 0, j = arguments.length; i < j; i++) {
      var argument = arguments[i];
      var key = argument.toLowerCase();
      var value = argument.toUpperCase();

      buttons[key] = {
        label: _t(value)
      };
    }

    return buttons;
  }

  function validateButtons(options, buttons) {
    var allowedButtons = {};
    each(buttons, function(key, value) {
      allowedButtons[value] = true;
    });

    each(options.buttons, function(key) {
      if (allowedButtons[key] === undefined) {
        throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");
      }
    });

    return options;
  }

  exports.alert = function() {
    var options;

    options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);

    if (options.callback && !$.isFunction(options.callback)) {
      throw new Error("alert requires callback property to be a function when provided");
    }

    /**
     * overrides
     */
    options.buttons.ok.callback = options.onEscape = function() {
      if ($.isFunction(options.callback)) {
        return options.callback.call(this);
      }
      return true;
    };

    return exports.dialog(options);
  };

  exports.confirm = function() {
    var options;

    options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);

    /**
     * overrides; undo anything the user tried to set they shouldn't have
     */
    options.buttons.cancel.callback = options.onEscape = function() {
      return options.callback.call(this, false);
    };

    options.buttons.confirm.callback = function() {
      return options.callback.call(this, true);
    };

    // confirm specific validation
    if (!$.isFunction(options.callback)) {
      throw new Error("confirm requires a callback");
    }

    return exports.dialog(options);
  };

  exports.prompt = function() {
    var options;
    var defaults;
    var dialog;
    var form;
    var input;
    var shouldShow;
    var inputOptions;

    // we have to create our form first otherwise
    // its value is undefined when gearing up our options
    // @TODO this could be solved by allowing message to
    // be a function instead...
    form = $(templates.form);

    // prompt defaults are more complex than others in that
    // users can override more defaults
    // @TODO I don't like that prompt has to do a lot of heavy
    // lifting which mergeDialogOptions can *almost* support already
    // just because of 'value' and 'inputType' - can we refactor?
    defaults = {
      className: "bootbox-prompt",
      buttons: createLabels("cancel", "confirm"),
      value: "",
      inputType: "text"
    };

    options = validateButtons(
      mergeArguments(defaults, arguments, ["title", "callback"]),
      ["cancel", "confirm"]
    );

    // capture the user's show value; we always set this to false before
    // spawning the dialog to give us a chance to attach some handlers to
    // it, but we need to make sure we respect a preference not to show it
    shouldShow = (options.show === undefined) ? true : options.show;

    /**
     * overrides; undo anything the user tried to set they shouldn't have
     */
    options.message = form;

    options.buttons.cancel.callback = options.onEscape = function() {
      return options.callback.call(this, null);
    };

    options.buttons.confirm.callback = function() {
      var value;

      switch (options.inputType) {
        case "text":
        case "textarea":
        case "email":
        case "select":
        case "date":
        case "time":
        case "number":
        case "password":
          value = input.val();
          break;

        case "checkbox":
          var checkedItems = input.find("input:checked");

          // we assume that checkboxes are always multiple,
          // hence we default to an empty array
          value = [];

          each(checkedItems, function(_, item) {
            value.push($(item).val());
          });
          break;
      }

      return options.callback.call(this, value);
    };

    options.show = false;

    // prompt specific validation
    if (!options.title) {
      throw new Error("prompt requires a title");
    }

    if (!$.isFunction(options.callback)) {
      throw new Error("prompt requires a callback");
    }

    if (!templates.inputs[options.inputType]) {
      throw new Error("invalid prompt type");
    }

    // create the input based on the supplied type
    input = $(templates.inputs[options.inputType]);

    switch (options.inputType) {
      case "text":
      case "textarea":
      case "email":
      case "date":
      case "time":
      case "number":
      case "password":
        input.val(options.value);
        break;

      case "select":
        var groups = {};
        inputOptions = options.inputOptions || [];

        if (!$.isArray(inputOptions)) {
          throw new Error("Please pass an array of input options");
        }

        if (!inputOptions.length) {
          throw new Error("prompt with select requires options");
        }

        each(inputOptions, function(_, option) {

          // assume the element to attach to is the input...
          var elem = input;

          if (option.value === undefined || option.text === undefined) {
            throw new Error("given options in wrong format");
          }

          // ... but override that element if this option sits in a group

          if (option.group) {
            // initialise group if necessary
            if (!groups[option.group]) {
              groups[option.group] = $("<optgroup/>").attr("label", option.group);
            }

            elem = groups[option.group];
          }

          elem.append("<option value='" + option.value + "'>" + option.text + "</option>");
        });

        each(groups, function(_, group) {
          input.append(group);
        });

        // safe to set a select's value as per a normal input
        input.val(options.value);
        break;

      case "checkbox":
        var values   = $.isArray(options.value) ? options.value : [options.value];
        inputOptions = options.inputOptions || [];

        if (!inputOptions.length) {
          throw new Error("prompt with checkbox requires options");
        }

        if (!inputOptions[0].value || !inputOptions[0].text) {
          throw new Error("given options in wrong format");
        }

        // checkboxes have to nest within a containing element, so
        // they break the rules a bit and we end up re-assigning
        // our 'input' element to this container instead
        input = $("<div/>");

        each(inputOptions, function(_, option) {
          var checkbox = $(templates.inputs[options.inputType]);

          checkbox.find("input").attr("value", option.value);
          checkbox.find("label").append(option.text);

          // we've ensured values is an array so we can always iterate over it
          each(values, function(_, value) {
            if (value === option.value) {
              checkbox.find("input").prop("checked", true);
            }
          });

          input.append(checkbox);
        });
        break;
    }

    // @TODO provide an attributes option instead
    // and simply map that as keys: vals
    if (options.placeholder) {
      input.attr("placeholder", options.placeholder);
    }

    if (options.pattern) {
      input.attr("pattern", options.pattern);
    }

    if (options.maxlength) {
      input.attr("maxlength", options.maxlength);
    }

    // now place it in our form
    form.append(input);

    form.on("submit", function(e) {
      e.preventDefault();
      // Fix for SammyJS (or similar JS routing library) hijacking the form post.
      e.stopPropagation();
      // @TODO can we actually click *the* button object instead?
      // e.g. buttons.confirm.click() or similar
      dialog.find(".btn-primary").click();
    });

    dialog = exports.dialog(options);

    // clear the existing handler focusing the submit button...
    dialog.off("shown.bs.modal");

    // ...and replace it with one focusing our input, if possible
    dialog.on("shown.bs.modal", function() {
      // need the closure here since input isn't
      // an object otherwise
      input.focus();
    });

    if (shouldShow === true) {
      dialog.modal("show");
    }

    return dialog;
  };

  exports.dialog = function(options) {
    options = sanitize(options);

    var dialog = $(templates.dialog);
    var innerDialog = dialog.find(".modal-dialog");
    var body = dialog.find(".modal-body");
    var buttons = options.buttons;
    var buttonStr = "";
    var callbacks = {
      onEscape: options.onEscape
    };

    if ($.fn.modal === undefined) {
      throw new Error(
        "$.fn.modal is not defined; please double check you have included " +
        "the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ " +
        "for more details."
      );
    }

    each(buttons, function(key, button) {

      // @TODO I don't like this string appending to itself; bit dirty. Needs reworking
      // can we just build up button elements instead? slower but neater. Then button
      // can just become a template too
      buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
      callbacks[key] = button.callback;
    });

    body.find(".bootbox-body").html(options.message);

    if (options.animate === true) {
      dialog.addClass("fade");
    }

    if (options.className) {
      dialog.addClass(options.className);
    }

    if (options.size === "large") {
      innerDialog.addClass("modal-lg");
    } else if (options.size === "small") {
      innerDialog.addClass("modal-sm");
    }

    if (options.title) {
      body.before(templates.header);
    }

    if (options.closeButton) {
      var closeButton = $(templates.closeButton);

      if (options.title) {
        dialog.find(".modal-header").prepend(closeButton);
      } else {
        closeButton.css("margin-top", "-10px").prependTo(body);
      }
    }

    if (options.title) {
      dialog.find(".modal-title").html(options.title);
    }

    if (buttonStr.length) {
      body.after(templates.footer);
      dialog.find(".modal-footer").html(buttonStr);
    }


    /**
     * Bootstrap event listeners; used handle extra
     * setup & teardown required after the underlying
     * modal has performed certain actions
     */

    dialog.on("hidden.bs.modal", function(e) {
      // ensure we don't accidentally intercept hidden events triggered
      // by children of the current dialog. We shouldn't anymore now BS
      // namespaces its events; but still worth doing
      if (e.target === this) {
        dialog.remove();
      }
    });

    /*
    dialog.on("show.bs.modal", function() {
      // sadly this doesn't work; show is called *just* before
      // the backdrop is added so we'd need a setTimeout hack or
      // otherwise... leaving in as would be nice
      if (options.backdrop) {
        dialog.next(".modal-backdrop").addClass("bootbox-backdrop");
      }
    });
    */

    dialog.on("shown.bs.modal", function() {
      dialog.find(".btn-primary:first").focus();
    });

    /**
     * Bootbox event listeners; experimental and may not last
     * just an attempt to decouple some behaviours from their
     * respective triggers
     */

    if (options.backdrop !== "static") {
      // A boolean true/false according to the Bootstrap docs
      // should show a dialog the user can dismiss by clicking on
      // the background.
      // We always only ever pass static/false to the actual
      // $.modal function because with `true` we can't trap
      // this event (the .modal-backdrop swallows it)
      // However, we still want to sort of respect true
      // and invoke the escape mechanism instead
      dialog.on("click.dismiss.bs.modal", function(e) {
        // @NOTE: the target varies in >= 3.3.x releases since the modal backdrop
        // moved *inside* the outer dialog rather than *alongside* it
        if (dialog.children(".modal-backdrop").length) {
          e.currentTarget = dialog.children(".modal-backdrop").get(0);
        }

        if (e.target !== e.currentTarget) {
          return;
        }

        dialog.trigger("escape.close.bb");
      });
    }

    dialog.on("escape.close.bb", function(e) {
      if (callbacks.onEscape) {
        processCallback(e, dialog, callbacks.onEscape);
      }
    });

    /**
     * Standard jQuery event listeners; used to handle user
     * interaction with our dialog
     */

    dialog.on("click", ".modal-footer button", function(e) {
      var callbackKey = $(this).data("bb-handler");

      processCallback(e, dialog, callbacks[callbackKey]);
    });

    dialog.on("click", ".bootbox-close-button", function(e) {
      // onEscape might be falsy but that's fine; the fact is
      // if the user has managed to click the close button we
      // have to close the dialog, callback or not
      processCallback(e, dialog, callbacks.onEscape);
    });

    dialog.on("keyup", function(e) {
      if (e.which === 27) {
        dialog.trigger("escape.close.bb");
      }
    });

    // the remainder of this method simply deals with adding our
    // dialogent to the DOM, augmenting it with Bootstrap's modal
    // functionality and then giving the resulting object back
    // to our caller

    $(options.container).append(dialog);
    dialog.modal({
      backdrop: options.backdrop ? "static": false,
      keyboard: false,
      show: false
    });

    if (options.show) {
      dialog.modal("show");
    }

    // @TODO should we return the raw element here or should
    // we wrap it in an object on which we can expose some neater
    // methods, e.g. var d = bootbox.alert(); d.hide(); instead
    // of d.modal("hide");

   /*
    function BBDialog(elem) {
      this.elem = elem;
    }

    BBDialog.prototype = {
      hide: function() {
        return this.elem.modal("hide");
      },
      show: function() {
        return this.elem.modal("show");
      }
    };
    */
    
 //   alert("documentElement::"+document.documentElement.clientHeight+"   body:::"+document.body.clientHeight+"    dialogH:::"+dialogH +"  marginH:::"+marginH);


    return dialog;

  };

  exports.setDefaults = function() {
    var values = {};

    if (arguments.length === 2) {
      // allow passing of single key/value...
      values[arguments[0]] = arguments[1];
    } else {
      // ... and as an object too
      values = arguments[0];
    }

    $.extend(defaults, values);
  };

  exports.hideAll = function() {
    $(".bootbox").modal("hide");

    return exports;
  };


  /**
   * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are
   * unlikely to be required. If this gets too large it can be split out into separate JS files.
   */
  var locales = {
    zh_CN : {
      OK      : "OK",
      CANCEL  : "取消",
      CONFIRM : "确认"
    }
  };

  exports.addLocale = function(name, values) {
    $.each(["OK", "CANCEL", "CONFIRM"], function(_, v) {
      if (!values[v]) {
        throw new Error("Please supply a translation for '" + v + "'");
      }
    });

    locales[name] = {
      OK: values.OK,
      CANCEL: values.CANCEL,
      CONFIRM: values.CONFIRM
    };

    return exports;
  };

  exports.removeLocale = function(name) {
    delete locales[name];

    return exports;
  };

  exports.setLocale = function(name) {
    return exports.setDefaults("locale", name);
  };

  exports.init = function(_$) {
    return init(_$ || $);
  };

  return exports;
}));

// 基本弹出框
function EzuiModal(mark,content,timeout,modalName,drag,showCancelButton,url,id,title,size,okEVent,cancelEvent ,shownFun,okButtonLable,cancleButtonLable){
    this.modalName=modalName;
    this.drag=drag;
    this.mark=mark;
    this.content=content;
    this.timeout=timeout;
    this.showCancelButton=showCancelButton;
    this.url=url;
    this.id=id;
    this.title=title;
    this.size=size;
    this.okEVent=okEVent;
    this.cancelEvent=cancelEvent;
    this.shownFun=shownFun;
    this.okButtonLable=okButtonLable;
    this.cancleButtonLable=cancleButtonLable;
};

EzuiModal.prototype.showHtml = function() {
	var str = $('#' + this.id).html();
	// $('#'+this.id).html('');
	str = String(str);
	var obj = {
		title : this.title,
		// backdrop:false,
		// animate:true,
		className : this.modalName,
		message : str,
        buttons: {} 
	}
	if (this.showOkButton != "false"  && this.showOkButton != false) {
		obj.buttons.success= {
			label : this.okButtonLable || "确定",
			className : "btn-primary",
			callback : this.okEvent
		}
	}
	if (this.showCancelButton == "true" || this.showCancelButton == true) {
    	obj.buttons.danger={
  			label : this.cancleButtonLable || "取消",
  			className : "btn-primary",
  			callback : this.cancelEvent
  		}
  	}
	obj.size = this.size;

	var dialog = bootbox.dialog(obj);
	if (this.drag == "true") {
		/*
		$("." + this.modalName).draggable({
			handle : ".modal-header"
		});
		*/
		new EzuiDialogDrag($(dialog).find(".modal-header"), $(dialog.find(".modal-dialog")));
	}
	if(this.timeout>0){
		setTimeout(function(){
			dialog.modal("hide");
		}, timeout);
	}
};

EzuiModal.prototype.showPage = function() {
	var obj = {
		className : this.modalName,
		title : this.title,
        buttons: {} 
	}
	if (this.showOkButton != "false" && this.showOkButton != false ) {
		obj.buttons.success = {
			label : this.okButtonLable || "确定",
			className : "btn-primary",
			callback : this.okEvent
		}
	}
	if (this.showCancelButton == "true"  || this.showCancelButton == true) {
		obj.buttons.danger={
			label : this.cancleButtonLable || "取消",
			className : "btn-primary",
			callback : this.cancelEvent
  		}
  	}
	obj.size = this.size;
	var dialog;
	$.ajax({
		url : this.url,
		async : false,
		type : 'GET',
		success : function(data) {
			obj.message = data;
			dialog = bootbox.dialog(obj);
		}
	});
	if (this.drag == "true") {
		/*
		$("." + this.modalName).draggable({
			handle : ".modal-header"
		});
		*/
		new EzuiDialogDrag($(dialog).find(".modal-header"), $(dialog.find(".modal-dialog")));
	}
	var that = this;
	var timeout = this.timeout;
	if(timeout>0){
		setTimeout(function(){
			dialog.modal("hide");
		}, timeout);
	}
	//dialog.on("shown.bs.modal", that.shownFun);
}

EzuiModal.prototype.showIcon = function() {
	this.show();
}

EzuiModal.prototype.close = function() {
	$(".modal-header").find(".bootbox-close-button").click();
}

EzuiModal.prototype.show = function() {
	var obj = {
		className : this.modalName,
		size : this.size || 'small',
		buttons : {}
	};
	if (this.showOkButton != "false" && this.showOkButton != false) {
		obj.buttons.success= {
			label : this.okButtonLable || "确定",
			className : "btn-primary",
			callback : this.okEvent
		}
	}
	if (this.showCancelButton == "true" || this.showCancelButton == true  || this.mark=="warning") {
		obj.buttons.danger = {
			label : this.cancleButtonLable || "取消",
			className : "btn-primary",
			callback : this.cancelEvent
		}
	}
	obj.title = this.title || '提示';
	switch(this.mark){
		case "success":{
			content=this.content||'成功';
			obj.message="<div class='sweet-alert sweet-alert-content' style='display: block;'>"
							+ "<div class='sa-icon sa-success animate' style='display: block;'>"
								+ "<span class='sa-line sa-tip animateSuccessTip'></span>"
								+ "<span class='sa-line sa-long animateSuccessLong'></span>"
								+ "<div class='sa-placeholder'></div>"
								+ "<div class='sa-fix'></div>"
							+ "</div>"
							+ "<label style='padding-top:8px;'>" + content + "</label>"
						+ "</div>";
		};
        break;
		case "warning":{
			content=this.content||'警告';
			obj.message="<div class='sweet-alert sweet-alert-content' style='display: block;'>"
							+ "<div class='sa-icon sa-warning pulseWarning' style='display: block;'>"
								+ "<span class='sa-body pulseWarningIns'></span>"
								+ "<span class='sa-dot pulseWarningIns'></span>"
								+ "<div class='sa-placeholder'></div>"
								+ "<div class='sa-fix'></div>"
							+ "</div>"
							+ "<label>" + content + "</label>"
						+ "</div>";
		}
		break;
		case "info":{
			content=this.content||'提示';
			obj.message="<div class='sweet-alert sweet-alert-content' style='display: block;'>"
							+ "<div class='sa-icon sa-info' style='display: block;'></div>"        
							+ "<label>" + content + "</label>"
						+ "</div>";
		}
		break;
		case "danger":{
			content=this.content||'错误';
			obj.message="<div class='sweet-alert sweet-alert-content' style='display: block;'>"
							+ "<div class='sa-icon sa-error animateErrorIcon' style='display: block;'>"
								+ "<span class='sa-x-mark animateXMark'>"
									+ "<span class='sa-line sa-left'></span>"
									+ "<span class='sa-line sa-right'></span>"
								+ "</span>"
							+ "</div>"
							+ "<label>" + content + "</label>"
						+ "</div>"; 
		}
		break;
		default:{
			content=this.content||'提示';
			obj.message="<div class='sweet-alert sweet-alert-content' style='display: block;'>"
							+ "<div class='sa-icon sa-info' style='display: block;'></div>"        
							+ "<label>" + content + "</label>"
						+ "</div>";
		}
	};
	var dialog = bootbox.dialog(obj);
	if (this.drag == "true") {
		/*
		$("." + this.modalName).draggable({
			handle : ".modal-header"
		});
		*/
		new EzuiDialogDrag($(dialog).find(".modal-header"), $(dialog.find(".modal-dialog")));
	}
	var timeout=this.timeout;
	if(timeout>0){
		setTimeout(function(){
			dialog.modal("hide");
		},timeout);
	}
}

/**********************************************弹出框结束********************************************/

/**********************************************弹出框拖动开始********************************************/

function EzuiDialogDrag(listenerNode, moveNode){
	if(listenerNode == null || listenerNode.length == 0){
		console.log("function EzuiDialogDrag(listenerNode,moveNode) : parame listenerNode is null");
		return false;
	}
	if(moveNode == null || moveNode.length == 0){
		moveNode = listenerNode;
	}
	moveNode.option = {
		width:0,// 节点宽度
		height:0,// 节点高度
		startX:0,// 鼠标移动开始X轴
		startY:0,// 鼠标移动开始Y轴
		moveX:0,// 鼠标移动X轴距离
		moveY:0,// 鼠标移动Y轴距离
		offsetLeft:0,// 内部偏移(左)
		offsetRight:0,// 内部偏移(右)
		offsetTop:0,// 内部偏移(上)
		offsetBottom:0,// 内部偏移(下)
		clientX:0,// 鼠标相对Z轴距离
		clientY:0,// 鼠标相对Y轴距离
		isDrag:false// 当前是否是拖拽移动
	}
	$(moveNode).css("position","relative");
	$(listenerNode).off("mousedown").on("mousedown", function(e){
		if(e.target.className.indexOf('bootbox-close-button') < 0 && $(".bootbox-close-button").find(e.target).length <= 0){
			moveNode.option.isDrag = true;
			moveNode.option.width = moveNode.get(0).clientWidth;
			moveNode.option.height = moveNode.get(0).clientHeight;
			moveNode.option.startX = e.clientX - moveNode.option.moveX;
			moveNode.option.startY = e.clientY - moveNode.option.moveY;
			moveNode.option.offsetLeft = e.offsetX + e.target.offsetTop;
			moveNode.option.offsetRight = moveNode.option.width - moveNode.option.offsetLeft;
			moveNode.option.offsetTop = e.offsetY + e.target.offsetLeft;
			moveNode.option.offsetBottom = moveNode.option.height - moveNode.option.offsetTop;
		}
	});
	$(document).off("mousemove").on("mousemove", function(e){
		// e.buttons [1]l [2]r [3]l+r [4]m [5]l+m [6]r+m [7]l+r+m
		if(e.buttons == 1 && moveNode.option.isDrag === true){
			moveNode.option.clientX = e.clientX;
			moveNode.option.clientY = e.clientY;
			if((moveNode.option.clientX - moveNode.option.offsetLeft) <  0){
				moveNode.option.clientX = moveNode.option.offsetLeft;// 左侧边界
			}else if((document.body.clientWidth - moveNode.option.clientX - moveNode.option.offsetRight) < 0){
				moveNode.option.clientX = document.body.clientWidth - moveNode.option.width + moveNode.option.offsetLeft;// 右侧边界
			}
			if((moveNode.option.clientY - moveNode.option.offsetTop) < 0){
				moveNode.option.clientY = moveNode.option.offsetTop;// 顶部边界
			}else if((document.body.scrollHeight - moveNode.option.clientY + document.body.offsetTop) < moveNode.option.offsetBottom){
				moveNode.option.clientY = document.body.scrollHeight - moveNode.option.height + moveNode.option.offsetTop;// 底部边界
			}
			moveNode.option.moveX = moveNode.option.clientX - moveNode.option.startX;
			moveNode.option.moveY = moveNode.option.clientY - moveNode.option.startY;
			$(moveNode).css('left', moveNode.option.moveX + 'px');
			$(moveNode).css('top', moveNode.option.moveY + 'px');
			e.preventDefault();
		}
	});
	$(document).off("mouseup").on("mouseup", function(e){
		moveNode.option.isDrag = false;
	});
}

/**********************************************弹出框拖动结束********************************************/

/**********************************************进度条开始********************************************/
  var progressBar={
          stillBar:function(val,id){
                       var percent= val+'%';
                       $('#'+id).css(
                        'width', percent
                        )
                       var colorBar=$('#'+id);
                       if( val<30){
                    colorBar.css({'width': percent}); 
                colorBar.children('.number').text(percent);
                } else if( val<=60){
                    colorBar.removeClass("progress-bar-info");
                    colorBar.addClass("progress-bar-success");
                     colorBar.css({ 'width': percent});
                  colorBar.children('.number').text(percent);
                }else if( val<=80){
                    colorBar.removeClass("progress-bar-success");
                    colorBar.addClass("progress-bar-warning");
                     colorBar.css({'width': percent});
                  colorBar.children('.number').text(percent);
                } else if( val<101){
                    colorBar.removeClass("progress-bar-warning");
                    colorBar.addClass("progress-bar-danger");
                     colorBar.css({'width': percent});
                  colorBar.children('.number').text(percent);
                }else{
                    window.alert("输入的值过大")
                } ;
                    },
           progress:function(val,id){
                         var colorBar=$('#'+id);
                             colorBar.css(
                               'width',val+'%'
                             );
                          var timerColor=setInterval(function(){
                              val++;
                             var percent1=val+'%';
                if( val<30){
                    colorBar.css({'width': percent1}); 
                colorBar.children('.number').text(percent1);
                } else if( val<=60){
                    colorBar.removeClass("progress-bar-info");
                    colorBar.addClass("progress-bar-success");
                     colorBar.css({'width': percent1});
                  colorBar.children('.number').text(percent1);
                }else if( val<=80){
                    colorBar.removeClass("progress-bar-success");
                    colorBar.addClass("progress-bar-warning");
                     colorBar.css({'width': percent1 });
                  colorBar.children('.number').text(percent1);
                } else if( val<101){
                    colorBar.removeClass("progress-bar-warning");
                    colorBar.addClass("progress-bar-danger");
                     colorBar.css({'width': percent1});
                  colorBar.children('.number').text(percent1);
                } else{
                    clearInterval(timerColor);
                }      
                            
                         },100); 
          }
        };
/**********************************************进度条结束********************************************/

/**********************************************ezuiForm表单开始********************************************/
var ezuiForm = function() {
	// Handle textarea autosize
	var handleTextareaAutosize = function() {
		if (typeof (autosize) == "function") {
			autosize(document.querySelectorAll('textarea.autosizeme'));
		}
	}
	// Handles Bootstrap Dropdowns下拉
	var handleDropdowns = function() {
		// Hold dropdown on click
		$('body').on('click', '.dropdown-menu.hold-on-click', function(e) {
			e.stopPropagation();
		});
	}
	// select2的初始化
	// Handle Select2 Dropdowns
	var handleSelect2 = function() {
		if ($().select2) {
			$.fn.select2.defaults.set("theme", "bootstrap");
			$('.select2me').select2({
				placeholder : "Select",
				width : 'auto',
				allowClear : true
			});
		}
	}
    // 渲染checkbox 和radio
	var handleCheckboxRadio = function() {
		// 2019-06-24 gjz 修复弹出框页面重复加载ezui.js导致复选框被重复渲染问题 
		$('.md-checkbox-group input:checkbox:not(.md-checkbox > input:checkbox)').each(function(i, x) {
		// $('.md-checkbox-group').find('input:checkbox').each(function(i, x) {
			var checkboxText = $(x).attr('text');
			if (checkboxText == null || checkboxText == undefined) {
				checkboxText = "";
			}
			var id = $(x).attr('id');
			var checkboxHtml = '<div class="md-checkbox">'
								+ '<label for="' + id + '">'
									+ '<span class="inc"></span>'
									+ '<span class="check"></span>'
									+ '<span class="box"></span>'
									+ checkboxText
								+ '</label>'
							+ '</div>';
			var $content = $(checkboxHtml);
			var $bigbox = $('<div class="temp"></div>')
			$content.prepend($(x).clone(true));
			$bigbox.append($content);
			var htmlstr = $bigbox.html();
			$(x).replaceWith(htmlstr);
		});
		// 2019-06-24 gjz 修复弹出框页面重复加载ezui.js导致单选按钮被重复渲染问题 
		$('.md-radio-group input:radio:not(.md-radio > input:radio)').each(function(i, x) {
		// $('.md-radio-group').find('input:radio').each(function(i, x) {
			var radioText = $(x).attr('text');
			if (radioText == null || radioText == undefined) {
				radioText = "";
			}
			var id = $(x).attr('id');
			var radioHtml = '<div class="md-radio">'
							+ '<label for="' + id + '">'
								+ '<span></span>'
								+ '<span class="check"></span>'
								+ '<span class="box"></span>'
								+ radioText
							+ '</label>'
						+ '</div>';
			var $content = $(radioHtml);
			var $bigbox = $('<div class="temp"></div>')
			$content.prepend($(x).clone(true));
			$bigbox.append($content);
			var htmlstr = $bigbox.html();
			$(x).replaceWith(htmlstr);
		});
	}
	return {
		init : function() {
			handleSelect2();
			handleCheckboxRadio();
			handleDropdowns();
			handleTextareaAutosize();// handle autosize textareas
		},
		fillForm : function(id, data) {
			$.each($('#' + id).find('[name]'), function(i, x) {
				var $x = $(x);
				// 标签
				var tagName = $x.prop('tagName');
				// 标签的类型
				var type = $x.prop('type');
				// 标签的name
				var name = $x.prop('name') || $x.attr('name');
				// 具体的数据
				var value = data[name];
				if (value !== null && value !== undefined) {
					if (tagName === 'INPUT') {
						if (type === 'text' || type === 'hidden' || type === 'password' || type === 'email' || type === 'url' || type === "number" || type === "range") {
							$x.val(value);
						} else if (type === 'radio') {
							var radioValue = $x.prop('value');
							if (value == radioValue) {
								$x.prop('checked', 'checked');
							}
						} else if (type === 'checkbox') {
							var checkboxValue = $x.prop('value');
							if (value.indexOf(checkboxValue) !== -1) {
								$x.prop('checked', 'checked');
							}
						}
					} else if (tagName === 'SELECT') {
						var multiple = $x.prop('multiple');
						if (multiple === true) {
							$(x).find('option').each(function(i, x) {
								var curValue = $(x).prop('value');
								if (value.indexOf(curValue) !== -1) {
									$(x).prop('selected', 'selected');
								}
							});
							$(x).trigger("change");
						} else {
							$(x).find('option').each(function(i, x) {
								var curValue = $(x).prop('value');
								if (curValue === value) {
									$(x).prop('selected', 'selected');
									$(x).trigger("change");
									return false;
								}
							});
						}
					} else if (tagName === 'IMG') {
						$x.prop('src', value)
					} else {
						$x.text(value);
					}
				}
			});
		},
		reverseCheckbox : function(name) {
			var sel = 'input:checkbox[name=' + name + ']';
			var checkobj = $(sel);
			if (checkobj != undefined && checkobj != null && checkobj != "") {
				$(checkobj).each(function() {
					this.checked = !this.checked;
				});
			}
		},
		clearAllCheckbox : function(name) {
			var sel = 'input:checkbox[name=' + name + ']';
			var checkobj = $(sel);
			if (checkobj != undefined && checkobj != null && checkobj != "") {
				$(checkobj).each(function() {
					$(this).prop("checked", false)
				});
			}
		},
		selectAllCheckbox : function(name) {
			var sel = 'input:checkbox[name=' + name + ']';
			var checkobj = $(sel);
			if (checkobj != undefined && checkobj != null && checkobj != "") {
				$(checkobj).each(function() {
					$(this).prop("checked", true)
				});
			}
		},
		getCheckRadioValue : function(name) {
			var obj = new Array();
			var sel = 'input:checkbox[name=' + name + ']';
			var checkobj = $(sel);
			if (checkobj != undefined && checkobj != null && checkobj != "") {
				for (var i = 0; i < checkobj.length; i++) {
					var checked = $(checkobj[i]).prop("checked");
					if (checked) {
						obj.push($(checkobj[i]).val());
					}
				}
			}
			return obj;
		},
		createCheckboxRadio : function(options) {
			if (options.text == null || options.text == undefined) {
				options.text = "";
			}
			var checkboxStr = "";
			try {
				if (options.type == "radio") {
					if (options.items != undefined && options.items != null && options.items.length > 0) {
						for (var i = 0; i < options.items.length; i++) {
							var item = options.items[i];
							if (item != undefined) {
								var checkstr = "";
								if (item.checked == true || item.checked == "true") {
									checkstr = " checked=true";
								}
								var itemStr = '<div class="md-radio">'
												+ '<input type="radio" class="md-radio" id="radio_' + item.id + '" name="' + options.name + '" value="' + item.value + '"' + checkstr + ' />'
												+ '<label for="radio_' + item.id + '">'
													+ '<span class="inc"></span>'
													+ '<span class="check"></span>'
													+ '<span class="box"></span>'
													+ item.text
												+ '</label>'
											+ '</div>';
								checkboxStr += itemStr;
							}
						}
					}
				} else {
					if (options.items != undefined && options.items != null && options.items.length > 0) {
						for (var i = 0; i < options.items.length; i++) {
							var item = options.items[i];
							if (item != undefined) {
								var checkstr = "";
								if (item.checked == true || item.checked == "true") {
									checkstr = " checked=true";
								}
								var itemStr = '<div class="md-checkbox ">'
												+ '<input type="checkbox" class="md-check" id="checkbox_' + item.id + '" name="' + options.name + '" value="' + item.value + '"' + checkstr + ' />'
												+ '<label for="checkbox_' + item.id + '">'
													+ '<span class="inc"></span>'
													+ '<span class="check"></span>'
													+ '<span class="box"></span>'
													+ item.text
												+ '</label>'
											+ '</div>';
								checkboxStr += itemStr;
							}
						}
					}
				}
			} catch (e) {
				console.log("生成自定义checkbox,radio失败");
			}
			return checkboxStr;
		},
	};
}();

/**********************************************ezuiForm表单结束********************************************/
jQuery(document).ready(function() {    
  EzuiApp.init(); // init metronic core componets
  ezuiForm.init();
});
