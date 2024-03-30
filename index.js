const contentLetterSrart_actived = "HAPPY BIRTH DAY Min Phương." //Lời mở đầu cho bức thư
const mainContentLetter = "Cái tội đi ngủ trước, đã thế để gần qua ngày mới thì mới chúc mừng sinh nhật cho bõ tức, Chúc em Phương sinh nhật zui zẻ hay ăn chóng lớn, đã xinh lại xinh thêm đặc biệt là sang Nhật gặp nhiều điều may mắn cầu gì được lấy nửa, Happy birth dayyy Min Phươnggggg ♥"  //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/428700504_122118596696218557_6519219149742196704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPVynKS5Sx-eHU9LrzCp1xGDcqGFbJQ6cYNyoYVslDpwQt2sJrvBVlQcJtn6FQhpCh-QAuYE3_9s8sP34ldbUW&_nc_ohc=C6EyDeNBIfkAX9gAHAH&_nc_oc=AdhnRqaNahCgDe28IeTve-LbvnuxVon6noytJrTzUNGXtxcwiKdPEI9UuxfKh1oR8X4&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC1DsB6sjCzw1iJNTvPUdDFZaKVoFtlBq1d6f0aJ9MBLA&oe=660E2235";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/428700504_122118596696218557_6519219149742196704_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPVynKS5Sx-eHU9LrzCp1xGDcqGFbJQ6cYNyoYVslDpwQt2sJrvBVlQcJtn6FQhpCh-QAuYE3_9s8sP34ldbUW&_nc_ohc=C6EyDeNBIfkAX9gAHAH&_nc_oc=AdhnRqaNahCgDe28IeTve-LbvnuxVon6noytJrTzUNGXtxcwiKdPEI9UuxfKh1oR8X4&_nc_ht=scontent.fhan18-1.fna&oh=00_AfC1DsB6sjCzw1iJNTvPUdDFZaKVoFtlBq1d6f0aJ9MBLA&oe=660E2235"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}