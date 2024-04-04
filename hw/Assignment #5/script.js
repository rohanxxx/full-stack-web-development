fetch("https://randomuser.me/api/?results=5").then((data)=>{
    // console.log(data);
    return data.json(); //converted the json response to an object
}).then((objectData)=>{
    console.log(objectData.results[0].name.first);
    let tableData="";
    objectData.results.map((values, row)=>{
        // tableData+=`<h1>${values.name.first}</h1>`;
        tableData += `<tr>
                        <th scope="row">${row+1}</th>
                        <td>${values.name.first}</td>
                        <td>${values.location.city}</td> 
                    </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData;
})