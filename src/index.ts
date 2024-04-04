import { ReactNative as RN, NavigationNative } from "@metro/common";
import { connectToDebugger, connectToRDT, patchLogHook } from "@lib/debug";
import { awaitSyncWrapper } from "@lib/storage";
import { patchCommands } from "@lib/commands";
import { initPlugins } from "@lib/plugins";
import { patchChatBackground } from "@lib/themes";
import { patchAssets } from "@ui/assets";
import initQuickInstall from "@ui/quickInstall";
import initSafeMode from "@ui/safeMode";
import initSettings from "@ui/settings";
import initFixes from "@lib/fixes";
import logger from "@lib/logger";
import windowObject from "@lib/windowObject";
import settings from "@lib/settings";
import { loaderConfig } from "@lib/settings";
import { getAssetIDByName } from "@ui/assets";
import { showToast } from "@ui/toasts";
import devpage from "@ui/settings/pages/Developer"
import { findByProps } from "@metro/filters";
import { Forms, Tabs, ErrorBoundary } from "@ui/components";
import { BundleUpdaterManager } from "./lib/native";

const { Stack, TableRow, TableRowIcon, TableSwitchRow, TableRowGroup, TextInput, Slider } = Tabs;
const { hideActionSheet } = findByProps("openLazy", "hideActionSheet");
const { showSimpleActionSheet } = findByProps("showSimpleActionSheet");

export default async () => {

    // Load everything in parallel
    const unloads = await Promise.all([
        patchLogHook(),
        patchAssets(),
        patchCommands(),
        patchChatBackground(),
        initFixes(),
        initSafeMode(),
        initSettings(),
        initQuickInstall(),
    ]);

    // Wait for our settings proxy shit to be ready
    await awaitSyncWrapper(settings);

    // Assign window object
    window.vendetta = await windowObject(unloads);

    // Init developer tools
    if (settings.debugBridgeEnabled) connectToDebugger(settings.debuggerUrl);
    if (settings.rdtEnabled) connectToRDT();

    // Once done, load plugins
    unloads.push(await initPlugins());

    // Do the funny
    await RN.Image.prefetch("https://bound-mod.github.io/assets/images/fools.png");

    // We good :)
    logger.log("Strife has been injected into your discord app successfully!");
    if (settings.betaBranch == true) {
        showToast("Strife (BETA) Loaded", getAssetIDByName("toast_copy_link"));
        setTimeout(function(){
            showSimpleActionSheet({
                key: "betaWarn",
                header: {
                    title: "ALERT",
                    description: "You are on the BETA branch of Strife. I, 5xdf, am not responsible for any leaks that happen. You chose to do this.",
                    onClose: () => hideActionSheet(),
                },
                options: [
                    { label: "OK", isDestructive: true, onPress: () => hideActionSheet()},
                    { label: "Return back to the Main Branch",onPress: ()=> {
                        showToast("Returning back to Main", 200)
                        settings.betaBranch = false
                        loaderConfig.customLoadUrl.url = "https://raw.githubusercontent.com/5xdf/Strife/main/strifemod/strife.js"
                        setTimeout(BundleUpdaterManager.reload(),1000)
                    }}
                ]
            })
        },5000)
    } else {
        showToast("Strife Loaded", getAssetIDByName("toast_copy_link"));
    }
    
    
    // if (settings.startingPage == "Dev") {
    //     NavigationNative.useNavigation().push("VendettaCustomPage", {
    //         title: "Developer Settings",
    //         render: devpage,
    //     })
    //     settings.startingPage = "None"
    // }
}
