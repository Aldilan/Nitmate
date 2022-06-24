//AOS
AOS.init();

//Menu pages
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
menuBtn.addEventListener('mouseover', function (e) {
    menu.classList.remove('scale-0')
    menu.classList.add('scale-100')
})
menuBtn.addEventListener('mouseout', function (e) {
    menu.classList.add('scale-0')
    menu.classList.remove('scale-100')
})

menu.addEventListener('mouseover', function (e) {
    menu.classList.remove('scale-0')
    menu.classList.add('scale-100')
})
menu.addEventListener('mouseout', function (e) {
    menu.classList.add('scale-0')
    menu.classList.remove('scale-100')
})


//Dark mode
const modeTgl = document.getElementById('modeTgl')
const modeTglCrl = document.getElementById('modeTglCrl')
const htmlTag = document.querySelector('html')
const sunIco = document.getElementById('sun')
const moonIco = document.getElementById('moon')

modeTgl.addEventListener('click', function (e) {
    modeTgl.classList.toggle("border-amber-400",)
    modeTgl.classList.toggle("bg-amber-400")
    modeTgl.classList.toggle("border-[#3686A0]",)
    modeTgl.classList.toggle("bg-[#3686A0]")
    modeTglCrl.classList.toggle('translate-x-0')
    modeTglCrl.classList.toggle('translate-x-full')
    htmlTag.classList.toggle('dark')
    sunIco.classList.toggle('text-amber-400')
    sunIco.classList.toggle('text-slate-200')
    moonIco.classList.toggle('text-slate-200')
    moonIco.classList.toggle('text-[#3686A0]')
})

//Format Function
const downFormats = document.querySelectorAll('#downFormat span')
const downVideo = document.getElementById('downVideo')
const downAudio = document.getElementById('downAudio')
const downBefore = document.getElementById('downBefore')
downFormats.forEach(function name(downFormat) {
    downFormat.addEventListener('click', function (e) {
        downFormats.forEach(function (downFormat) {
            downFormat.classList.remove('hover:text-black')
            downFormat.classList.add('hover:text-[#B20600]')
            downFormat.classList.remove('text-white')
        })
        downBefore.classList.remove('translate-x-0')
        downBefore.classList.add('-translate-x-full')
        downFormat.parentElement.classList.remove('before:-translate-x-full')
        e.target.classList.remove('hover:text-[#B20600]')
        e.target.classList.add('hover:text-black')
        e.target.classList.add('text-white')
        if (e.target.innerHTML == 'Video') {
            downFormat.parentElement.classList.add('before:translate-x-0')
            downFormat.parentElement.classList.remove('before:translate-x-full')
            downVideo.classList.remove('-translate-x-full')
            downAudio.classList.add('-translate-x-full')
        }else{
            downFormat.parentElement.classList.remove('before:translate-x-0')
            downFormat.parentElement.classList.add('before:translate-x-full')
            downAudio.classList.remove('-translate-x-full')
            downVideo.classList.add('-translate-x-full')
        }
    })
})

//Paste func
const pasteBtn = document.getElementById('pasteBtn')
const urlInput = document.getElementById('urlInput')
let pasteData
pasteBtn.addEventListener('click', async () => {
    pasteData = await navigator.clipboard.readText()
    urlInput.value = pasteData
})

//Download and info Function
const downOptions = document.querySelectorAll('.downOption')
const btnContainer = document.querySelector('#btnContainer')
const infoBtn = document.querySelector('#infoBtn div')
const exInfoBtn = document.getElementById('exInfoBtn')
let downLink, downFormatOption, exInfoBtnNow
downOptions.forEach(function (downOption){
    downOption.addEventListener('click',function () {
        downLink = urlInput.value
        if (downLink == '') {
            infoBtn.classList.remove('after:hidden')
            infoBtn.classList.remove('before:hidden')
            infoBtn.parentElement.classList.remove('scale-0')
            infoBtn.parentElement.classList.add('scale-100')
            btnContainer.classList.remove('scale-100')
            btnContainer.classList.add('scale-0')
        }else{
            downFormatOption = downOption.value
            downFunc(downLink, downFormatOption)
            infoBtn.classList.add('after:hidden')
            infoBtn.classList.add('before:hidden')
            btnContainer.classList.add('scale-100')
            btnContainer.classList.remove('scale-0')
        }
    })
})

infoBtn.parentElement.addEventListener('mouseover', function (e) {
    exInfoBtnNow = true
    setTimeout(() => {
        if (exInfoBtnNow == true) {
            exInfoBtn.classList.remove('invisible')
            exInfoBtn.classList.add('visible')
        }
    }, 1000);
})

infoBtn.parentElement.addEventListener('mouseout', function (e) {
    exInfoBtnNow = false
    exInfoBtn.classList.add('invisible')
    exInfoBtn.classList.remove('visible')
})

infoBtn.parentElement.addEventListener('click', function (e) {
    alert("Paste the youtube link first!");
    infoBtn.classList.add('after:hidden')
    infoBtn.classList.add('before:hidden')
})

function downFunc(link, format) {
    btnContainer.setAttribute('src','https://loader.to/api/button/?url='+link+'&f='+format)
}