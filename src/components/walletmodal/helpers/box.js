import { logMsg } from './dev';
const SPACE_ID = 'TEST_WEB3_APP';
const Box = typeof window !== 'undefined' && typeof window.Box !== 'undefined'
    ? window.Box
    : null;
let box = null;
export async function getProfile(address) {
    if (!Box) {
        throw new Error('Box library is not available in window');
    }
    const profile = await Box.getProfile(address);
    return profile;
}
export async function openBox(address, provider, syncCallback) {
    if (!Box) {
        throw new Error('Box library is not available in window');
    }
    box = await Box.openBox(address, provider);
    box.onSyncDone(() => {
        logMsg('SYNC DONE');
        syncCallback();
    });
}
export async function setPublic(key, value) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    await box.public.set(key, value);
}
export async function getPublic(key) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    let result = await box.public.get(key);
    try {
        result = JSON.parse(result);
    }
    catch (error) {
        // ignore error
    }
    return result;
}
export async function removePublic(key) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    await box.public.remove(key);
}
export async function setPrivate(key, value) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    await box.private.set(key, value);
}
export async function getPrivate(key) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    let result = await box.private.get(key);
    try {
        result = JSON.parse(result);
    }
    catch (error) {
        // ignore error
    }
    return result;
}
export async function removePrivate(key) {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    await box.private.remove(key);
}
let space = null;
export async function openSpace() {
    if (!box) {
        throw new Error('Box is not open yet');
    }
    space = await box.openSpace(SPACE_ID);
}
export async function setSpacePrivate(key, value) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    await space.private.set(key, value);
}
export async function getSpacePrivate(key) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    let result = await space.private.get(key);
    try {
        result = JSON.parse(result);
    }
    catch (error) {
        // ignore error
    }
    return result;
}
export async function removeSpacePrivate(key) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    await space.private.remove(key);
}
export async function setSpacePublic(key, value) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    await space.public.set(key, value);
}
export async function getSpacePublic(key) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    let result = await space.public.get(key);
    try {
        result = JSON.parse(result);
    }
    catch (error) {
        // ignore error
    }
    return result;
}
export async function removeSpacePublic(key) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    await space.public.remove(key);
}
let thread = null;
export async function joinThread(threadName) {
    if (!space) {
        throw new Error('Space is not open yet');
    }
    thread = await space.joinThread(threadName);
}
export async function getThreadPosts() {
    if (!thread) {
        throw new Error('Thread is not open yet');
    }
    const posts = await thread.getPosts();
    return posts;
}
export async function postToThread(message) {
    if (!thread) {
        throw new Error('Thread is not open yet');
    }
    if (typeof message !== 'string') {
        message = JSON.stringify(message);
    }
    await thread.post(message);
}
export async function subscribeToThread(callback) {
    if (!thread) {
        throw new Error('Thread is not open yet');
    }
    thread.onUpdate(() => {
        logMsg('THREAD UPDATE');
        callback();
    });
}
