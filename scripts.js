getCodes()

function getCodes() {
fetch('http://209.182.239.212:1060/api/hs-codes/98d3726fc001005a60db').then(response => {
    if (!response.ok) {
        throw error("ERROR")
    }
    return response.json()
}).then(data => {
    console.log(data.HSCodes)
    var neededData = data.HSCodes
    if(neededData.length > 0) {
        var temp = "";

        neededData.forEach((e) => {
            temp += "<tr>";
            temp += "<td>"+e.TaxRate+"</td>";
            temp += "<td>"+e.HSCode+"</td>";
            temp += "<td>"+e.HSDesc+"</td>";
            temp += "<td>"+e.FullDescription+"</td>";

        });
        document.getElementById('hscodes').innerHTML = temp
    }
   
}).catch(error => {
    console.log(error)
})
};



