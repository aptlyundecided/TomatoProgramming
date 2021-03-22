const signalR = require("@microsoft/signalr");

let connection = new signalR.HubConnectionBuilder()
    .withUrl("http://192.168.17.129:61920/clienthub")
    .build();


connection.start()
    .then(() => connection.invoke("GetWarehouse"))
    .catch((e) => {
        console.log(e);
    });


connection.on('warehouse', (data) => {
    console.log(data);
});