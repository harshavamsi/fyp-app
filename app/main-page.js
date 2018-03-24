var observable = require("data/observable");
var observableArray = require("data/observable-array");
import pages = require("ui/page");
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

var viewModel: observable.Observable;

export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    var items = new observableArray.ObservableArray();

    viewModel = new observable.Observable();

    for (var loop = 0; loop < 20; loop++) {
        items.push("Item " + loop.toString());
    }

    viewModel.set("items", items);
    viewModel.set("selectedIndex", 15);

    page.bindingContext = viewModel;
}

export function dropDownOpened(args: EventData) {
    console.log("Drop Down opened");
}

export function dropDownClosed(args: EventData) {
    console.log("Drop Down closed");
}

export function dropDownSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
}
exports.pageLoaded = function() {

};
