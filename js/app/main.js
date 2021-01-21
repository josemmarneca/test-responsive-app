var hash = window.location.hash
    , url = document.getElementById("url")
    , go = document.getElementById("go")
    , form = document.forms[0]
    , iframes = document.querySelectorAll("iframe")
    , href = window.location.href
    , hrefOrigin = href.split('#')[0];
if (hash) url.value = hash.substr(1);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var src = url.value.trim();
    window.location.hash = "#" + src;
    if (src.search(/\\/i) !== -1)
        src = ("file:///" + src).replace(/\\/gi, "/");
    [].forEach.call(iframes, function (iframe) {
        iframe.src = src;
    });
});
go.click();

function showAndHidden(divId) {
    console.log('div id: ' + divId)
    var divId = document.getElementById(divId);
    console.log('hideen?:', divId.style.display);
    if (divId.style.display === "none") {
        divId.style.display = "flex";
    } else {
        divId.style.display = "none";
    }

}

function setIframe(iframeId) {
    var iframe = document.getElementById(iframeId + 'iframe');
    var src = url.value.trim();
    console.log('iframe', iframe.src)
    console.log(' url',hrefOrigin)
    this.showAndHidden(iframeId + 'article');

    if(iframe.src === hrefOrigin){
        console.log('show: ',src);
        iframe.src = src;
    }else{
        console.log('hide: ',src);
        iframe.src = '';

    }



}
