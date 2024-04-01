import { contextBridge } from "electron";
import * as driver from "drivelist";
import { getLogoLabel } from "./services/logo-label-service";
import { getDrives, storeDrives } from "./services/database-service";

contextBridge.exposeInMainWorld("myAPI", {
  getDrives: async () => {
    const drives = await driver.list();
    await storeDrives(drives);
    const retrievedDrives = await getDrives();
    const drivesWithLogos = await labelWithLogos(retrievedDrives);

    return drivesWithLogos;
  },
});

async function labelWithLogos(drives) {
  const result = [];

  for (const drive of drives) {
    const logo = await getLogoLabel();
    result.push({
      name: drive,
      logo,
    });
  }
  return result;
}
