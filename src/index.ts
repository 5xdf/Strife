import { ReactNative as RN } from "@metro/common";
import { NavigationNative } from "@metro/common";
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
import { getAssetIDByName } from "@ui/assets";
import { showToast } from "@ui/toasts";
import Developer from "@ui/settings/pages/Developer"

export default async () => {
    const navigation = NavigationNative.useNavigation();
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
    showToast("Strife Loaded", getAssetIDByName("toast_copy_link"));
    if (settings.startingPage == "Dev") {
        navigation.push("VendettaCustomPage", {
            render: Developer,
        })
        settings.startingPage = "None"
    }
    // window.alert("You are on the BETA branch of Strife! By using this branch, you accept any data leakage, broken features, and any other possible risks. I am not responsible for these risks. You decided to turn on the beta branch switch in settings, so you are having to deal with this. Turn off the beta branch to minimize the risks.")
}
