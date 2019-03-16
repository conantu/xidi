export class Getdata{
    constructor(){
        this.init();
        this.addEvent();
    }
    init(){
        var that = this;
        $.ajax({
            url:"/api/goods?dataName=goods",
            success:function(res){
                console.log(res)
                that.res = res;
                that.display()
            }
        })
    }
    display(){
        var str = "";
        for(var i = 0; i < this.res.data.data.length;i++){
            str += `<li data-id="${this.res.data.data[i].id}">
                <div class="pic">
                    <a>
                        <img src="${this.res.data.data[i].src}" alt="">
                    </a>
                </div>
                <div class="article">
                    <div class="title">
                        <h4><a>${this.res.data.data[i].name}</a></h4>
                    </div>
                    <div class="price">
                        <span>${this.res.data.data[i].price}</span>
                    </div>
                    <div class="flag clear">
                        <img src="${this.res.data.data[i].flag}" alt="">
                        <span>${this.res.data.data[i].country}</span>
                    </div>
                </div>
            </li>`
        }
        
        $(".list-goods").children("ul").html(str);
        
    }
    addEvent(){
        $(".list-goods").children("ul").on("click","a",function(){
            // console.log($(this).parents("li").attr("data-id"))
            location.href = `details.html?${$(this).parents("li").attr("data-id")}`
        })
    }
}