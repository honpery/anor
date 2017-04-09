/**
 * main enpry.
 */
import { AppModule } from './modules/app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootloader } from '@angularclass/hmr';


export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule);
}

// boot on document ready
bootloader(main);