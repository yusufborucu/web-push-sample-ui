self.addEventListener('push', (e) => {
  const config = {
    body: e.data.text() || "Mesaj içeriği",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "3"
    },
    icon: "images/logo.png",
    vibrate: [100, 50, 100]
  }

  e.waitUntil(self.registration.showNotification("Yeni makale eklendi", config))
})