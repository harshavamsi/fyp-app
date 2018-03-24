var observable = require("data/observable");
var observableArray = require("data/observable-array") ;
var pages = require("ui/page");
var SelectedIndexChangedEventData = require("nativescript-drop-down");

var viewModel = observable.Observable;

exports.pageLoaded = function(args) {
    var page = args.object;
    var items = new observableArray.ObservableArray();

    viewModel = new observable.Observable();

    for (var loop = 0; loop < 20; loop++) {
        items.push("Item " + loop.toString());
    }

    viewModel.set("items", items);
    viewModel.set("selectedIndex", 15);

    page.bindingContext = viewModel;
}

exports.dropDownOpened = function(args) {
    console.log("Drop Down opened");
}

exports.dropDownClosed = function(args) {
    console.log("Drop Down closed");
}

exports.dropDownSelectedIndexChanged = function(args) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
}

