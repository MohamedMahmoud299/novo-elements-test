import { AppBridge } from 'novo-elements';

declare const postRobot: any;

export class ClosableAppBridge extends AppBridge {

    close(packet?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (!packet) {
                packet = {
                    windowName: window.name
                };
            }

            postRobot.sendToParent('close', packet).then((event) => {
                if (event.data) {
                    resolve(true);
                } else {
                    reject(false);
                }
            }).catch((err) => {
                reject(false);
            });
        });
    }
}
