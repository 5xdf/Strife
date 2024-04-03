import { ClientInfoManager } from "@lib/native";
import devpage from "@ui/settings/pages/Developer"
import settings from "@lib/settings";
import { ReactNative as RN, NavigationNative } from "@metro/common";
// This logs in the native logging implementation, e.g. logcat
console.log("Loading Strife....");

// Make 'freeze' and 'seal' do nothing
Object.freeze = Object;
Object.seal = Object;

// Prevent Discord from assigning the broken toString polyfill, so the app loads on 221.6+
const origToString = Function.prototype.toString;
Object.defineProperty(Function.prototype, "toString", {
    value: origToString,
    configurable: true,
    writable: false,
});

import(".").then((m) => m.default()).catch((e) => {
    console.log(e?.stack ?? e.toString());
    alert([
        "Failed to inject Strife!\n",
        `Build Number: ${ClientInfoManager.Build}`,
        `Strife: ${__vendettaVersion}`,
        e?.stack || e.toString(),
    ].join("\n-\n"));
});
// const navigation = NavigationNative.useNavigation();
// if (settings.startingPage == "Dev") {
//     NavigationNative.useNavigation().push("VendettaCustomPage", {
//         title: "Developer Settings",
//         render: devpage,
//     })
//     settings.startingPage = "None"
// }