var fdb = new ForerunnerDB();
var db = fdb.db("accounting");
var accountionCollection = db.collection('accounting');

accountionCollection.load();

function Submit() {
    var date = $("#date").val()
    var category = $("#category").val()
    var item = $("#item").val()
    var dcost = $("#cost").val()
    var newAccounting = {
        date: date,
        category: category,
        item: item,
        cost: dcost,
    }

    alert(date);
    alert(category);
    alert(item);
    alert(dcost);
    accountionCollection.insert(newAccounting);
    accountionCollection.save();

    $("#date").val("");
    $("#category").val("");
    $("#item").val("");
    $("#cost").val("");
    alert('儲存成功');
}