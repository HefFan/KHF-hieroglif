document.getElementById("pg2").style.visibility="hidden";
var gotonum=document.getElementById("back").addEventListener('click', function(){
    document.getElementById("pg1").style.visibility="visible";
    document.getElementById("pg2").style.visibility="hidden";
});
var gotosym=document.getElementById("turn").addEventListener('click', function(){
    document.getElementById("pg2").style.visibility="visible";
    document.getElementById("pg1").style.visibility="hidden";
});
document.addEventListener('keydown',function backSpace(event){
    var backspace=event.keyCode;
    switch(backspace){
        case 8://backspace
            var list=document.getElementById("font");
            list.removeChild(list.lastChild);
        break;
        case 9://tab
            var li=document.createElement("li");
    var par=document.createElement("span");
    var t=document.createTextNode("");
    var img=document.createElement("img");
    var indent=document.createElement("div");
    indent.style.width="40px";
    indent.style.height="16px";
    indent.style.backgroundColor="lightGrey";
    indent.style.display="inline-block";
    img.src="font/lgsym/xx.png";
    par.appendChild(t);
    li.appendChild(indent);
            document.getElementById("font").appendChild(li).appendChild(img).appendChild(par);
            break;
        case 46://delete
            var list=document.getElementById("font").innerHTML="";
            break;
        case 13://enter
            var br=document.createElement("br");
            var li=document.createElement("li");
            var img=document.createElement("img");
            img.src="font/lgsym/xx.png";
            li.appendChild(img);
            document.getElementById("font").appendChild(br);
            document.getElementById("font").appendChild(li); 
        break;
        case 48://0
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/0.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
        case 49://1
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/1.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 50://2
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/2.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 51://3
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/3.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 52://4
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/4.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 53://5
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/5.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 54://6
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/6.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 55://7
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/7.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 56://8
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/8.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
    case 57://9
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/9.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
           break; 
        case 65://a
            var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/aa.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
            break;
    case 66://b
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/6_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 67://c
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/5.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 68://d
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/7_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 69://e
            var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/ee.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
    break;
    case 70://f
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/2.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 71://g
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/0_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 72://h
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/6.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 74://j
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/5_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 75://k
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/0.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 76://l
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/4.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 77://m
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/3_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 78://n
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/3.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    case 79://o
            var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/oo.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
    break;
    case 80://p
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/2_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 81://q
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    var img2=document.createElement("img");
            img2.src="font/lgsym/vv.png";
    par.appendChild(t);
    img.src="font/num/0.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par).appendChild(img2).appendChild(par);
    break;
            case 82://r
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/4_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 83://s
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/1.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 84://t
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/7.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 85://u
            var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/uu.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
    break;
            case 86://v
    break;
            case 87://w
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/8.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 88://x
             var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/ll.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
    break;
            case 89://y
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/9.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 90://z
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/1_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
        case 219://{
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/(.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 221://}
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/).png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
        case 186://;
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/;.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
        case 188://,
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/comma.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
        case 111://:
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/divd.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 189://-
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/--.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 190://.
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/xx.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 191:
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/qmark.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 220:
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/emark.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
    break;
            case 32:
            var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/spc_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
    break;
    }
});
document.getElementById("backsp").addEventListener('click', function(){
    var list=document.getElementById("font");
    list.removeChild(list.lastChild);
});
document.getElementById("clear").addEventListener('click', function(){
    var list=document.getElementById("font").innerHTML="";
});

document.getElementById("0").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/0.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("0_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/0_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("1").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/1.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("1_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/1_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("2").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/2.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("2_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/2_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("3").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/3.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("3_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/3_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("4").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/4.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("4_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/4_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("5").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/5.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("5_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/5_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("6").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/6.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("6_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/6_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("7").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/7.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("7_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/7_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("8").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/8.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("8_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/8_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("9").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/9.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("9_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/num/9_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("a_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/a.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("i_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/i.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("u_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/u.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("e_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/e.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("e__").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/e_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("o_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/o.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("open").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/(.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("close").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/).png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("openjg").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/(.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("closejg").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/).png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("comma").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/inside()/comma.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("dbldot").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/inside()/divd.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("dotcom").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/inside()/;.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("mult").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/mult.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("plus").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/plus.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("qmark").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/qmark.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("ng").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/ng.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("vv").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/vv.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("hh").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/hh.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("xx").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/lgsym/xx.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("min").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/--.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("emark").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/emark.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("q1open").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/q1(.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("q1close").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/q1).png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("q2open").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/q2(.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("q2close").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/inside()/q2).png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("spc_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/lgsym/spc_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("xxjg").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/lgsym/xx.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("ll").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    var par=document.createElement("span");
    var t=document.createTextNode(" ");
    par.appendChild(t);
    img.src="font/lgsym/ll.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li).appendChild(par);
});
document.getElementById("aa").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/aa.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("oo").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/oo.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("uu").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/uu.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("ee").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/ee.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("ee_").addEventListener('click', function(){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/smsym/ee_.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(li);
});
document.getElementById("enter").addEventListener('click',function(){
    var br=document.createElement("br");
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.src="font/lgsym/xx.png";
    li.appendChild(img);
    document.getElementById("font").appendChild(br);
    document.getElementById("font").appendChild(li);
});
document.getElementById("tab").addEventListener('click',function(){
     var li=document.createElement("li");
    var par=document.createElement("span");
    var t=document.createTextNode("");
    var img=document.createElement("img");
    var indent=document.createElement("div");
    indent.style.width="40px";
    indent.style.height="16px";
    indent.style.backgroundColor="lightGrey";
    indent.style.display="inline-block";
    img.src="font/lgsym/xx.png";
    par.appendChild(t);
    li.appendChild(indent);
 document.getElementById("font").appendChild(li).appendChild(img).appendChild(par);
});