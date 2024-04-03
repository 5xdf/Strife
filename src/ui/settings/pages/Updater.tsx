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
import { showConfirmationAlert, showCustomAlert } from "@/ui/alerts";
import { findByProps } from "@metro/filters";

const { Stack, TableRow, TableRowIcon, TableSwitchRow, TableRowGroup } = Tabs;
const { showSimpleActionSheet } = findByProps("showSimpleActionSheet");
const { hideActionSheet } = findByProps("openLazy", "hideActionSheet");
export default function Updater() {
    
    return (
        <ErrorBoundary>
            <RN.ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, alignItems: "center" }}>
                <Stack spacing={16}>
                    <TableRowGroup>
                        <TableRow
                            label="Check for updates"
                            icon={<TableRowIcon source={getAssetIDByName("ic_notification_settings")} />}
                            onPress={() => showSimpleActionSheet({
                                // label: "There are no updates avaliable"
                                key: "noUpdAvaliable",
                                header: {
                                    title: "There are no updates avaliable",
                                    icon: <TableRowIcon style={{ marginRight: 8 }} source={getAssetIDByName("ic_lock")} />,
                                    onClose: () => hideActionSheet(),
                                },
                                options: [
                                    { label: "Okay", onPress: () => hideActionSheet()}
                                ]
                            })}
                            arrow
                        />
                    </TableRowGroup>
                </Stack>
            </RN.ScrollView>
        </ErrorBoundary>
    )
}