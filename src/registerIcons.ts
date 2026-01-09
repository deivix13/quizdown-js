import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowLeft,
    faArrowRight,
    faRedo,
    faCheckDouble,
    faCog,
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faLightbulb } from '@fortawesome/free-regular-svg-icons';

export default function () {
    config.autoAddCss = false;
    library.add(
        faArrowLeft,
        faArrowRight,
        faRedo,
        faLightbulb,
        faCheckDouble,
        faCircleNotch,
        faBookmark
    );
}
