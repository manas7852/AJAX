function loadXMLDoc(){
    const xhttp = new XMLHttpRequest ();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const cd = xml.getElementByTagName("CD");
        myFunction (cd)
    }
    xhttp.open("GET", "/catlog.xml");
    xhttp.send();
}
function myFunction (cd) {
    let table = "<tr><th> ARTIST </th><th>Title</th></tr>";
    for (let i =0;  i < cd.length; i++) {
        table += "<tr><td>" +
        cd[i].getElementByTagName("ARTIST") [0].childNodes[0].nodeValue + "</td><td>"; 
        cd[i].getElementByTagName("TITLE")[0].childNodes.nodeValue + "</td></tr>"
    }
    document.getElementById("manas").innerHTML = table  
}
