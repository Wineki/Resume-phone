var now = 0;
var jobs = $(".pos").length;

var $c = {

  init: function() {


    // 首页走马灯

    $(".nav_list").find(".circle").hover(function() {
      
      $(this).addClass("circle_firstpage");
    }, function() {
      
      $(this).removeClass("circle_firstpage");
    });


    $(".footertab").find(".circle").mouseover(function(){
        $(".footertab").find(".phone_hover").removeClass("hide");
    }).mouseout(function(){
        $(".footertab").find(".phone_hover").addClass("hide");
    })


    


    // 关于去哪儿 - tab

    var $content_list = $(".content_list").not(".part5_list");
    $content_list.find("a").on("click", function() {

      var $this = $(this),
        index = $this.attr("rel"),
        $tab = $(this).closest(".content_list"),
        $content = $this.closest(".part2_screenBox"),
        $bro_circle = $(".brocken_circle"),
        $tabcon = $content.find(".tab_con");

      $(this).parent().addClass({
        "cursor": "pointer"
      });
      $bro_circle.hide().eq(index).show();
      $tabcon.hide().eq(index).show();
    });


    // 关于去哪儿 - 部门介绍-tab
    $(".s_tab a").on("click", function() {

      var $this = $(this),
        index = $this.attr("rel"),
        $subtab = $(this).closest(".subtab"),
        $sub_con = $subtab.find(".s-con");


      $subtab.find(".s_tab  a").removeClass("cur");
      $this.addClass("cur");
      // $(this.)
      $sub_con.hide().eq(index).show();

    });


    // 关于去哪儿 - 办公地点 map

    $(".map").on("click", ".s-tab a", function() {

      var $this = $(this),
          $p = $this.closest(".address_wrap"),
          index = $this.attr("rel");

          $p.find(".s-tab a").removeClass("cur");
          $this.addClass("cur");
          $p.find(".address-con").hide().eq(index).show();
    });

    // 校招路线
    $(".p_tab").on("click", "a", function() {
      var $this = $(this),
          index = $this.attr("rel"),
          $subtab = $this.closest(".subtab"),
          $subcontent = $subtab.find(".s_con_bg .part3_scon");

          $subtab.find(".p_tab  a").removeClass("cur");
          $this.addClass("cur");
          $subcontent.addClass("hide").eq(index).removeClass("hide");
    })

    // 职位申请



    $(".fp-slidesNav").on("click", "li a", function() {

      var $this = $(this),
          $ul = $this.closest("ul"),
          index = $this.attr("rel");

          $(this).parent().addClass({
            "cursor": "pointer"
          });
          $ul.find(".screen li").addClass("hide").eq(index).removeClass("hide");
          $ul.find(".brocken_circle2").hide().eq(index).show();
    });

    // 人物介绍


    var $part5_list = $(".part5_list");
    $part5_list.find("li a").on("click", function() {

      var $this = $(this),
          index = $this.attr("rel"),
          $content = $this.closest(".zp_content"),
          $bro_circle = $(".brocken_circle2"),
          $tabcon = $content.find(".img_list");

          $(this).parent().addClass({
            "cursor": "pointer"
          });
          $bro_circle.hide().eq(index).show();
          $tabcon.addClass("hide").eq(index).removeClass("hide");

    });

    var $tab_con_list_4 = $(".tab_con_list_4");
    $tab_con_list_4.find(".pepple_list a").on("click", function() {

      var $this = $(this),
          index = $(this).attr("anchor"),
          $content = $(this).closest(".img_list"),
          $tabcon = $content.find(".people_into .people_intr");

          $tabcon.addClass("hide").eq(index).removeClass("hide");
    });


    // slideshare
    var $sidearea = $(".sidearea");
    var $sidearea_tab1 = $sidearea.find(".e_li_1");
    var $sidearea_tab2 = $sidearea.find(".e_li_2");
    $sidearea_tab2.mouseover(function() {
      var $this = $(this);
      $this.find("img").attr("src", "web_images/weibo_hover.png");
    }).mouseout(function() {
      var $this = $(this);
      $this.find("img").attr("src", "web_images/weibo_default.png")
    });

    $sidearea_tab1.mouseover(function() {
      var $this = $(this);
      $this.find("img").attr("src", "web_images/2d_hover_small.png");
      $this.closest("ul").find(".e_2d_show").show();
    }).mouseout(function() {
      var $this = $(this);
      $this.find("img").attr("src", "web_images/2d_default.png");
      $this.closest("ul").find(".e_2d_show").hide();
    });


    // 去哪儿生活

    var $life_tab = $(".life_tab");
    $life_tab.on("click", ".video_tab a ", function() {
      var $this = $(this);
      var $content = $this.closest(".part6_screenBox");
      var $video = $content.find(".tab_video");
      var $picture = $content.find(".tab_picture");
      $video.removeClass("hide");
      $picture.addClass("hide");
    });

    $life_tab.on("click", ".picture_tab a", function() {
      var $this = $(this);
      var $content = $this.closest(".part6_screenBox");
      var $picture = $content.find(".tab_picture");
      var $video = $content.find(".tab_video");
      $video.addClass("hide");
      $picture.removeClass("hide");
    });

    

  }

};


$c.init();
$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors: ['firstPage', 'aboutus', '3rdPage', 'forthPage', 'fifthPage', 'sixPage', 'sevenPage'],
    slidesNavigation: true,
    menu: "#menu",
    resize: true,
    scrollingSpeed: 700,
    onLeave: hideScroll,
    // easing: 'easeOutBack'
  });


  $(".zp_part_2").on("click", ".s_tab a,.content_list a", function() {
    setTimeout(function() {
      hideScroll(void 0, 2, void 0, 0);
    }, 0)
  });

});

var scrollObj = {
  "7": $(".zp_part_7 .container"),
  "2": $(".zp_part_2  .container"),
  "s1": $(".zp_part_2 .s-con").eq(0),
  "s2": $(".zp_part_2 .s-con").eq(1),
  "s3": $(".zp_part_2 .s-con").eq(2),
  "s4": $(".zp_part_2 .s-con").eq(3),
  "s5": $(".zp_part_2 .s-con").eq(4),
  "s6": $(".zp_part_2 .s-con").eq(5),
  "s7": $(".zp_part_2 .s-con").eq(6),
  "s8": $(".zp_part_2 .s-con").eq(7),
  "s9": $(".zp_part_2 .s-con").eq(8)
}

function hideScroll(index, nextIndex, direction, time) {

  if (nextIndex === 2) {
    nextIndex = $(".zp_part_2 .circle_1").is(":visible") ? 2 : $(".zp_part_2 .s-con:visible").length ? "s" + $(".zp_part_2 .s-con:visible").index() : "zhiyan";
  }
  $.each(scrollObj, function(i, obj) {
    if (i != nextIndex) {
        obj.getNiceScroll().hide();
      }
  });
  setTimeout(function() {
    $.each(scrollObj, function(i, obj) {
      
      if (i != nextIndex) {
        obj.getNiceScroll().hide();
      } else {
        if (obj.getNiceScroll().length) {
          obj.getNiceScroll().show();
        } else {
          obj.niceScroll();
        }
      }
    })
  }, 1000);

}