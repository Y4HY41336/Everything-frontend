$(function() {
    $('.lazy').lazy({
      effect: "fadeIn",
      effectTime: 2000,
      threshold: 10,
      visibleOnly:true,
      delay:1
    });
});