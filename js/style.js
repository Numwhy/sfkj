$(function(){
    /**************头部滚动************/
    var header = $('.header-scroll-news'),
        headerP = header.children('p'),
        headerpH = headerP.eq(0).height(),
        _num = 0;
    header.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slideTop,3000);
    });
    var timer = setInterval(slideTop,3000);
    function slideTop(){
        _num++;
        if(_num > headerP.length - 1){
            _num = 0
        }
        header.animate({
            top : -headerpH * _num
        },1000)
    }
    /*************设为首页&加入收藏*************/
    var headerTLi = $('.header-top ul').children('li');
    headerTLi.eq(0).click(function(){
        SetHome(window.location)
    });
    headerTLi.eq(1).click(function(){
        AddFavorite(window.location,document.title)
    });
    //设为首页
    function SetHome(url){
        if(document.all){
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        }else{
            alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
    }
    //加入收藏
    function AddFavorite(sURL,sTitle){
        sURL = encodeURI(sURL);
        try{
            window.external.addFavorite(sURL,sTitle);
        }catch(e){
            try{
                window.sidebar.addPanel(sTitle,sURL,"");
            }catch(e){
                alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
            }
        }
    }
    /*************banner*************/
    var banner = $('.banner'),
        bannerLi = $('.banner ul').children('li'),
        bannerP = banner.children('p'),
        bannerSp = '',
        _num1 = 0;
    for(var i = 0;i < bannerLi.length;i++){
        bannerP.append('<span>' + i +'</span>');
        bannerSp = bannerP.children('span');
    }
    banner.hover(function(){
        clearInterval(timer1);
    },function(){
        timer1 = setInterval(fadeIO,3000);
    });
    var timer1 = setInterval(fadeIO,3000);
    bannerSp.hover(function(){
        var spIndex = $(this).index();
        $(this).css({
            borderColor : '#FF7B11',
            color : '#FF7B11'
        }).siblings().css({
            borderColor : '#000',
            color : '#fff'
        })
        bannerLi.eq(spIndex).fadeIn('slow').siblings().fadeOut('slow');
        bannerLi.stop(true,true);
    });
    function fadeIO(){
        _num1++;
        if(_num1 >　bannerLi.length - 1){
            _num1 = 0;
        }
        bannerLi.eq(_num1-1).fadeIn('slow').siblings().fadeOut('slow');
        bannerSp.eq(_num1).css({
            borderColor : '#FF7B11',
            color : '#FF7B11'
        }).siblings().css({
            borderColor : '#000',
            color : '#fff'
        })
    };
    /***********在线客服**********/
    var _onlineImg = $('.online').children('img'),
        zxkfUl = $('.zxkf-l').children('ul');
    _onlineImg.eq(0).click(function(){
        zxkfUl.show(500);
        $(this).addClass('dis').siblings().removeClass('dis');
    });
    _onlineImg.eq(1).click(function(){
        zxkfUl.hide(500);
        $(this).addClass('dis').siblings().removeClass('dis');
    });
    /************回到顶部************/
    $(window).scroll(function(){
        var ww = $(this).scrollTop();
        if(ww > 200){
            $('.goTop').show();
        }else{
            $('.goTop').hide();
        }
    })
    $('.goTop').click(function(){
        $('html,body').animate({
            scrollTop : '0'
        })
    })
    /****************contain****************/
    //清除右边框
    $('.con-box1 ul li:last-child').css('border','none');
    $('.frindlink ul:last-child').css('border','none');
    $('.cnav ul li:last-child a').css('border','none');
    //box3slide
    var box3Slide = $('.con-box3-slide'),
        box3SlideUl = box3Slide.children('ul');
    box3SlideUl[0].innerHTML += box3SlideUl[0].innerHTML;
    var box3SlideLi = box3SlideUl.children('li'),
        box3SlideLiW = box3SlideLi.eq(0).outerWidth(true);
    box3SlideUl.css('width',box3SlideLiW * box3SlideLi.length);
    var timer2 = setInterval(slideLeft,50);
    function slideLeft(){
        if(box3SlideUl[0].offsetLeft < -box3SlideUl[0].offsetWidth / 2){
            box3SlideUl[0].style.left = '0';
        }
        box3SlideUl.css('left',box3SlideUl[0].offsetLeft - 1);
    }
});
