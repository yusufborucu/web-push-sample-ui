window.addEventListener('load', async () => {
  const subscribeButton = document.querySelector('#subscribeButton')

  await navigator.serviceWorker.register('./sw.js')

  subscribeButton.addEventListener('click', async () => {
    const serviceWorker = await navigator.serviceWorker.ready
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: "BGT1K64Oe63PRFhWMpj6fsXb7kkVZCr9LjNEs954d1tzMgWg7F2YJm7YJhHhJbsG1aBBFwLRdmyFmRSWEMr_cSs"
    })

    console.log(clientID)
    console.log(JSON.stringify(clientID))
  })
})