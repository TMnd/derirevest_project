import {version, name} from '../../../package.json';

export default {
    name: "Footer",
    data: function () {
        return {
            currentDate: new Date().getFullYear(),
            autor: "João Luís Amaral",
            appVersion: version,
            appName: name
        }
    }
}