function savetoDb(data, success, failure) {
    let internSpeed = Math.floor(Math.random() * 10) + 1;
    if (internSpeed > 4){
        success();
    }else {
        failure();
    }
}

savetoDb(
    "apna college", 
    () => {
        console.log("success : your data was saved ");
        savetoDb(
            "hello world", 
            () => {
            console.log("success 2: data2 saved");
            savetoDb("Raj", () =>{
                console.log("success3: data3 saved");
            }, () => {
                console.log("failure3: weak connection");
            })
        },
         () => {
            console.log("failure2 : weak connection");
        }
    );
    },
     () => {
        console.log(" failure : weak connection. data not saved");
     } 
);