export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statusText);

export const log = param => {
    console.log(param);
    return param;
}

export const timeoutPromise = (ms, promise) => {
    const timeout = new Promise((resolve, reject) => 
        setTimeout(() => reject(`Limite de promise excedido (limite: ${ms} ms)`), ms)
    );
    return Promise.race([
        timeout, promise
    ])
}

export const delay = ms => data =>
    new Promise((resolve, reject) => 
        setTimeout(() => resolve(data), ms));

export const retry = (retries, ms, fn) => 
    fn().catch(async err => {
        console.log(retries);
        return delay(ms)().then(() => 
            retries > 1 
            ? retry(--retries, ms, fn) 
            : Promise.reject(err))
    });
