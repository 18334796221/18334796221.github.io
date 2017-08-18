var obj=$(".one");
var div=document.querySelector(".one");
$("div").css({
    width:100,
    height:100,
    background:"red",
    float:"left",
    marginLeft:20
})
    .filter(function (index) {
        if(index%3===0){
            return true;
        }
    })
    // .filter(".one")
    // .filter(obj)
    // .filter(div)
    .css({background:"blue",height:200})
    $("div").click(function () {
        $("div").css("background","red").filter(this).css("background","blue")
    })
