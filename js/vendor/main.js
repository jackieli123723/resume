$(function() {

    window.onscroll = function() {
        var scrollTop = document.body.scrollTop;
        var he = 100;
        if (scrollTop >= 100) {
            $(".toTop").show();
        } else {
            $(".toTop").hide();
        }

        if (scrollTop >= 100) {
            $('.navbar-default').addClass('is-hide');
        } else {
            $('.navbar-default').removeClass('is-hide');
        }

    }
    $(".toTop").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    })

    $(".nav li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
    })

    function htmlLoadOver() {
        $(".loading-overlay").addClass("loaded");
    }

    function complete() {
        if (document.readyState == "complete") {
            htmlLoadOver();
        } else {
            document.onreadystatechange = function() {
                if (document.readyState == "complete") {
                    htmlLoadOver();
                }
            }
        }
    }
    complete();

 $('body').niceScroll({
        cursorcolor: "#ccc",//#CC0071 光标颜色
        cursoropacitymax: 0.5, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", //   游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: false //是否隐藏滚动条
    });


})


var drawBG = function() {
    particlesJS("particles", {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 1800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "none",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 4
                }
            },
            "opacity": {
                "value": 0.05,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.2,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#ffffff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 180,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 0.3,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

}
window.onload = window.onresize = function() {
    drawBG();

}
