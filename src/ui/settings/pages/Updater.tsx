import { ReactNative as RN, NavigationNative, url } from "@metro/common";
import { DISCORD_SERVER, GITHUB } from "@lib/constants";
import { setSafeMode } from "@lib/debug";
import { useProxy } from "@lib/storage";
import { plugins } from "@lib/plugins";
import { themes } from "@lib/themes";
import { showToast } from "@ui/toasts";
import { getAssetIDByName } from "@ui/assets";
import { Tabs, ErrorBoundary } from "@ui/components";
import settings from "@lib/settings";
import Developer from "@ui/settings/pages/Developer";
import Secret from "@ui/settings/pages/Secret";

const { Stack, TableRow, TableRowIcon, TableSwitchRow, TableRowGroup } = Tabs;

export default function Updater() {
    
}