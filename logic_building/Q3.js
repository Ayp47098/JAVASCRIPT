async function delayedMessage() {
    await new Promise(resolve=>setTimeout(resolve,2000))
    return "Hello after 2 seconds"
}
delayedMessage().then(console.log);
