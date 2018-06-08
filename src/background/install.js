const APP_ID = "fcb76c68159788d0dcf01492c5ec7dfd88de843bc1cd3f00552f5910af925e77"

// Handle setting the environment up based off of if we're installed in
// temporary mode or node
async function afterInstall(details) {
  //console.log("Extension installed", details)
  const data = {
    appid: APP_ID
  }

  if(details.temporary) {
    Object.assign(data, {
      env: "DEV",
      endpoint: "http://localhost:3000",
      access_token: ""
    })

    //const redirectURL = browser.identity.getRedirectURL()
    //console.log(`Redirect URL ${redirectURL}`)
  } else {
    Object.assign(data, {
      env: "PROD",
      endpoint: "https://transientbug.ninja"
    })
  }

  browser.storage.local.set(data)
}

browser.runtime.onInstalled.addListener(afterInstall)
