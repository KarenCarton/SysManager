/**
Core script to handle the entire theme and core functions
**/
var Layout = function () {

    var layoutImgPath = 'layouts/layout/img/';  

    var layoutCssPath = 'layouts/layout/css/';

    var resBreakpointMd = EzuiApp.getResponsiveBreakpoint('md');//md:992

    var ajaxContentSuccessCallbacks = [];
    var ajaxContentErrorCallbacks = [];
    //初始化左侧点击右侧加载页面
    var handleInitSiderbarMenu =function (){
      //小屏幕的侧滑栏
      $(document).off("click", ".menu-list").on("click", ".menu-list", function(e){
        $(".page-sidebar-menu.page-header-fixed").addClass("active");
        $(".page-sidebar.navbar-collapse.collapse").addClass("active");
        var height = window.innerHeight - 50;
        $(".page-sidebar.navbar-collapse.collapse.active").css("height",height);
        $(".page-sidebar-menu.page-header-fixed.active").css("height",height);
        $("body").addClass("body-overflow");
      });
      $(document).off("click", ".page-sidebar.navbar-collapse.collapse").on("click", ".page-sidebar.navbar-collapse.collapse", function(e){
        var divMenu = $(".page-sidebar-menu.page-header-fixed.active");
        if(!divMenu.is(e.target)&&divMenu.has(e.target).length===0){
          $(".page-sidebar-menu.page-header-fixed").removeClass("active");
          $(".page-sidebar.navbar-collapse.collapse").removeClass("active");
          $("body").removeClass("body-overflow");
        }
      });
        $(document).off("click", "a").on("click", "a", function(e){
            //判断是否为sidebar
            if(!$(this).closest("li").hasClass("nav-item")){
              return;
            }
            el = $(this);
            // end: handle active state
            //如果没有子节点
            var menu = $('.page-sidebar-menu');
            
            menu.find('li.active').each(function(){
            	var menuActive=$(this);
            	var canRemove=true;
            	el.parents('li').each(function(){
            		if($(this).context==$(menuActive).context){
            			canRemove=false;
            			return false;
            		}
            	})
            	if(menuActive.context != el.context && canRemove==true){
            		menuActive.removeClass('open active');
            	}
            })
            
           el.parents('li').each(function () {
                if ($(this).children('ul.sub-menu').size() === 0) {
                      $(this).addClass('active');
                      $(this).find('> a > span.arrow').addClass('open active');
                      if ($(this).parent('ul.page-sidebar-menu').size() === 1) {
                           $(this).find('> a').append('<span class="selected"></span>');
                      }
               }
           });       
            var url = $(this).data("url");
            /*非页面a menu*/
            if(undefined == url || null == url || 0 == url.length){
              return;
            }
  
            /*加载进度遮罩*/
            EzuiApp.startLoading();
            $.ajaxSetup({cache:false});
            /*内容加载新内容*/
            EzuiApp.load('#page-content',url, function(result){
              handleSidebarAndContentHeight();
              EzuiApp.stopLoading();
            });
            /*
            $('#page-content').load(url,function(result){
                $(result).find("script").appendTo('#page-content');
                //ezuiLoader.hide();
                handleSidebarAndContentHeight();
                EzuiApp.stopLoading();
                
            });*/
            e.stopPropagation();
          });
    };
    // 侧边导航和内容的高度
    var handleSidebarAndContentHeight = function () {
        var content = $('.page-content');
        var sidebar = $('.page-sidebar');
        var body = $('body');
        var height;
        if (body.hasClass("page-footer-fixed") === true && body.hasClass("page-sidebar-fixed") === false) {
            var available_height = EzuiApp.getViewPort().height - $('.page-footer').outerHeight() - $('.page-header').outerHeight();
            var sidebar_height = sidebar.outerHeight();
             if($.browser.mozilla){
            	 //火狐浏览器
            	 available_height = EzuiApp.getViewPort().height - $('.page-footer').innerHeight() - $('.page-header').innerHeight();
                 sidebar_height = sidebar.innerHeight();
             }
            if (sidebar_height > available_height) {
                available_height = sidebar_height + $('.page-footer').outerHeight();
                if($.browser.mozilla){
               	 	//火狐浏览器
                	available_height = sidebar_height + $('.page-footer').innerHeight();
                }
            }
            if (content.height() < available_height) { 
                content.css('min-height', available_height);
            } 
        } else {
            if (body.hasClass('page-sidebar-fixed')) {
                height = _calculateFixedSidebarViewportHeight();
                if (body.hasClass('page-footer-fixed') === false) {
                    height = height - $('.page-footer').outerHeight();
                }
            } else {
                var headerHeight = $('.page-header').outerHeight();
                var footerHeight = $('.page-footer').outerHeight();

                if (EzuiApp.getViewPort().width < resBreakpointMd) {
                    height = EzuiApp.getViewPort().height - headerHeight - footerHeight;
                } else {
                    height = sidebar.height() + 20;
                }

                if ((height + headerHeight + footerHeight) <= EzuiApp.getViewPort().height) {
                    height = EzuiApp.getViewPort().height - headerHeight - footerHeight;
                }
            }
            content.css('min-height', height); 
        }
    };

    // 侧边栏链接------在单页打开时有效,跳转链接
    var handleSidebarMenuActiveLink = function (mode, el, $state) {
        var url = location.hash.toLowerCase();
        var menu = $('.page-sidebar-menu');
 
        if (mode === 'click' || mode === 'set') {
            el = $(el);
        } else if (mode === 'match') {
            menu.find('li > a').each(function () {
                var state = $(this).attr('ui-sref');
                if ($state && state) {
                    if ($state.is(state)) {
                        el = $(this);
                        return;
                    }
                } else {
                    var path = $(this).attr('href');
                    if (path) {
                        // url match condition         
                        path = path.toLowerCase();
                        if (path.length > 1 && url.substr(1, path.length - 1) == path.substr(1)) {
                            el = $(this);
                            return;
                        }
                    }
                }
            });
        }
 
        if (!el || el.size() == 0) {
            return;
        }
 
        if (el.attr('href') == 'javascript:;' ||
            el.attr('ui-sref') == 'javascript:;' ||
            el.attr('href') == '#' ||
            el.attr('ui-sref') == '#'
            ) {
            return;
        }
 
        var slideSpeed = parseInt(menu.data('slide-speed'));
        var keepExpand = menu.data('keep-expanded');
 
        // begin: handle active state
        if (menu.hasClass('page-sidebar-menu-hover-submenu') === false) {
            menu.find('li.nav-item.open').each(function () {
                var match = false;
                $(this).find('li').each(function () {
                    var state = $(this).attr('ui-sref');
                    if ($state && state) {
                        if ($state.is(state)) {
                            match = true;
                            return;
                        }
                    } else if ($(this).find(' > a').attr('href') === el.attr('href')) {
                        match = true;
                        return;
                    }
                });
 
                if (match === true) {
                    return;
                }
 
                $(this).removeClass('open active');
                $(this).find('> a > .arrow.open').removeClass('open active');
                $(this).find('> .sub-menu').slideUp();
            });
        } else {
            menu.find('li.open').removeClass('open active');
        }
 
        menu.find('li.active').removeClass('active');
        menu.find('li > a > .selected').remove();
        // end: handle active state
 
        

 
  
/*   $(document).on('click',$(".page-header-fixed").children(".nav-item"),function(){ 	 
      if($(this).hasClass("active")){
    	  $(this).siblings("li").removeClass('active');
       }else{
    	  $(this).addClass("active");
     }
 })
     */
        
       
        el.parents('li').each(function () {
            $(this).addClass('active');
            $(this).find('> a > span.arrow').addClass('open active');
            $(this).find('> a > span.arrow').addClass('active');
            if ($(this).parent('ul.page-sidebar-menu').size() === 1) {
                $(this).find('> a').append('<span class="selected"></span>');
            }
 
            if ($(this).children('ul.sub-menu').size() === 1) {
                $(this).addClass('open active');
            }
        });
 
        if (mode === 'click') {
            if (EzuiApp.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass('in')) { // close the menu on mobile view while laoding a page 
                $('.page-header .responsive-toggler').click();
            }
        }
    };

    var handleSidebarMenu = function () {
        // handle sidebar link click
        // sub-menu收缩
        $(document).off('click', '.page-sidebar-menu li > a.nav-toggle, li > a > span.nav-toggle').on('click', '.page-sidebar-menu li > a.nav-toggle, li > a > span.nav-toggle', function (e) {
            var that = $(this).closest('.nav-item').children('.nav-link');

            if (EzuiApp.getViewPort().width >= resBreakpointMd && !$('.page-sidebar-menu').attr("data-initialized") && $('body').hasClass('page-sidebar-closed') &&  that.parent('li').parent('.page-sidebar-menu').size() === 1) {
                return;
            }

            var hasSubMenu = that.next().hasClass('sub-menu');

            if (EzuiApp.getViewPort().width >= resBreakpointMd && that.parents('.page-sidebar-menu-hover-submenu').size() === 1) { // exit of hover sidebar menu
                return;
            }

            if (hasSubMenu === false) {
                if (EzuiApp.getViewPort().width < resBreakpointMd && $('.page-sidebar').hasClass("in")) { // close the menu on mobile view while laoding a page 
                    $('.page-header .responsive-toggler').click();
                }
                return;
            }

            var parent =that.parent().parent();
            var the = that;
            var menu = $('.page-sidebar-menu');
            var sub = that.next();
            var subVisible=sub.is(":visible");
            var autoScroll = menu.data("auto-scroll");
            var slideSpeed = parseInt(menu.data("slide-speed"));
            var keepExpand = menu.data("keep-expanded");
            
            if (!keepExpand) {
               parent.children('li.open').children('a').children('.arrow').removeClass('open active');
               parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
             //   parent.children('li.open').children('.sub-menu').slideUp(slideSpeed);
                parent.children('li.open').removeClass('open active');

            }

            var slideOffeset = -200;

            if (subVisible) {
                $('.arrow', the).removeClass("open active");
                the.parent().removeClass("open active");
                sub.slideUp(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            EzuiApp.scrollTo(the, 0);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            } else if (hasSubMenu) {
                $('.arrow', the).addClass("open active");
                the.parent().addClass("open active");
                sub.slideDown(slideSpeed, function () {
                    if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
                        if ($('body').hasClass('page-sidebar-fixed')) {
                            menu.slimScroll({
                                'scrollTo': (the.position()).top
                            });
                        } else {
                            EzuiApp.scrollTo(the, 0);
                        }
                    }
                    handleSidebarAndContentHeight();
                });
            }

            e.preventDefault();
        });

       
     
        // handle sidebar hover effect        
        handleFixedSidebarHoverEffect();
        
    };

    // 布局计算高度
    var _calculateFixedSidebarViewportHeight = function () {
        var sidebarHeight = EzuiApp.getViewPort().height - $('.page-header').outerHeight(true);
        if ($('body').hasClass("page-footer-fixed")) {
            sidebarHeight = sidebarHeight - $('.page-footer').outerHeight();
        }

        return sidebarHeight;
    };

    // Handles fixed sidebar侧边条固定
    var handleFixedSidebar = function () {
        var menu = $('.page-sidebar-menu');

        handleSidebarAndContentHeight();

        if ($('.page-sidebar-fixed').size() === 0) {
            EzuiApp.destroySlimScroll(menu);
            return;
        }

        if (EzuiApp.getViewPort().width >= resBreakpointMd && !$('body').hasClass('page-sidebar-menu-not-fixed')) {
            menu.attr("data-height", _calculateFixedSidebarViewportHeight());
            EzuiApp.destroySlimScroll(menu);
            EzuiApp.initSlimScroll(menu);
            handleSidebarAndContentHeight();
        } 
    };

    // 侧边栏收缩后的效果
    var handleFixedSidebarHoverEffect = function () {
        if ($('body').hasClass('page-sidebar-fixed')) {
            $('.page-sidebar').off('mouseenter').on('mouseenter', function () {
                if ($('body').hasClass('page-sidebar-closed')) {
                    $(this).find('.page-sidebar-menu').removeClass('page-sidebar-menu-closed');
                }
            });
            $('.page-sidebar').off('mouseleave').on('mouseleave', function () {
                if ($('body').hasClass('page-sidebar-closed')) {
                    $(this).find('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
                }
            });
        }
    };

    // 显示隐藏侧边栏
    var handleSidebarToggler = function () {       
        // handle sidebar show/hide
        $('body').off('click', '.sidebar-toggler').on('click', '.sidebar-toggler', function (e) {
            var body = $('body');
            var sidebar = $('.page-sidebar');
            var sidebarMenu = $('.page-sidebar-menu');

            if (body.hasClass("page-sidebar-closed")) {
                body.removeClass("page-sidebar-closed");
                sidebarMenu.removeClass("page-sidebar-menu-closed");
                if($(".menu-group").length != 0){
                	$(".menu-group").removeClass("page-sidebar-menu-group-closed");
                	var text = $(".menu-group .user-msg").html();
                	var togglerText = $(".menu-group .user-msg").attr("data-toggler-text");
                	if(togglerText != null && togglerText.length > 0){
                		$(".menu-group .user-msg").html(togglerText);
                		$(".menu-group .user-msg").attr("data-toggler-text", text);
                	}
                }
            } else {
                body.addClass("page-sidebar-closed");
                if($(".menu-group").length != 0){
                	$(".menu-group").addClass("page-sidebar-menu-group-closed");
                	var text = $(".menu-group .user-msg").html();
                	var togglerText = $(".menu-group .user-msg").attr("data-toggler-text");
                	if(togglerText != null && togglerText.length > 0){
                		$(".menu-group .user-msg").html(togglerText);
                		$(".menu-group .user-msg").attr("data-toggler-text", text);
                	}
                }
                sidebarMenu.addClass("page-sidebar-menu-closed");
                if (body.hasClass("page-sidebar-fixed")) {
                    sidebarMenu.trigger("mouseleave");
                }
            }

            $(window).trigger('resize');
        });
    };

    // Handles the horizontal menu水平菜单删
   

    // Handles Bootstrap Tabs.
    var handleTabs = function () {
        // fix content height on tab click
        $('body').off('shown.bs.tab', 'a[data-toggle="tab"]').on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
            handleSidebarAndContentHeight();
        });
    };
    // 走向顶部
    var handleGoTop = function () {
        var offset = 300;
        var duration = 500;

        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $(window).bind("touchend touchcancel touchleave", function(e){
               if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        } else {  // general 
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        }
        
        $(document).off('click','.scroll-to-top').on('click','.scroll-to-top',function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    };

    return {
        setSidebarMenuActiveLink: function(mode, el) {
            handleSidebarMenuActiveLink(mode, el, null);
        },

        setAngularJsSidebarMenuActiveLink: function(mode, el, $state) {
            handleSidebarMenuActiveLink(mode, el, $state);
        },

        initSidebar: function($state) {
            //layout handlers
            handleFixedSidebar(); 
            handleSidebarMenu(); // handles main menu
            handleSidebarToggler(); // handles sidebar hide/show
            EzuiApp.addResizeHandler(handleFixedSidebar); // reinitialize fixed sidebar on window resize
            handleInitSiderbarMenu();
        },

        initContent: function() {
            //handle100HeightContent(); // handles 100% height elements(block, portlet, etc)
            handleTabs(); // handle bootstrah tabs

            EzuiApp.addResizeHandler(handleSidebarAndContentHeight); // recalculate sidebar & content height on window resize
            //EzuiApp.addResizeHandler(handle100HeightContent); // reinitialize content height on window resize 
        },

        initFooter: function() {
            handleGoTop(); //handles scroll to top functionality in the footer
        },

        init: function () {            
            this.initSidebar(null);
            this.initContent();
            this.initFooter();
        },

        //public function to fix the sidebar and content height accordingly
        fixContentHeight: function () {
            handleSidebarAndContentHeight();
        },

        initFixedSidebarHoverEffect: function() {
            handleFixedSidebarHoverEffect();
        },
        initFixedSidebar: function() {
            handleFixedSidebar();
        }

    };

}();

    jQuery(document).ready(function() {    
       Layout.init(); // init metronic core componets
    });