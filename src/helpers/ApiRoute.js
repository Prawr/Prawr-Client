import Config from '../config';
import SessionHelper from './SessionHelper';

export default function(routeName, attachToken = false) {
    if(!routeName[0] === "/") {
        routeName = "/" + routeName;
    }
    let url = Config.protocol + "//" + Config.host.split(":")[0] + ":" + Config.port + routeName;
    if (attachToken) {
        url += SessionHelper.getCookie("token");
    }
    return url;
}