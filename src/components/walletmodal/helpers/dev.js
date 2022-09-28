export function logRedux(action) {
    if (process.env.NODE_ENV === "development") {
        console.log("\n------------------------------------"); // tslint:disable-line
        console.log("action.type", action.type); // tslint:disable-line
        console.log("action.payload", action.payload); // tslint:disable-line
        console.log("------------------------------------\n"); // tslint:disable-line
    }
}
export function logMsg(...messages) {
    if (process.env.NODE_ENV === "development") {
        console.log(...messages); // tslint:disable-line
    }
}
export function assignToWindow(name, value) {
    if (process.env.NODE_ENV === "development") {
        window[name] = value;
    }
}
