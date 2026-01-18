function detectDevice(userAgent) {
    let device = "不明なデバイス";
    // **Windows Detection**
    if (/Windows/.test(userAgent)) {
        if (/Windows Phone/.test(userAgent)) device = "Windows Phone";
        else if (/Windows 10/.test(userAgent)) device = "Windows 10";
        else if (/Windows 8.1/.test(userAgent)) device = "Windows 8.1";
        else if (/Windows 8/.test(userAgent)) device = "Windows 8";
        else if (/Windows 7/.test(userAgent)) device = "Windows 7";
        else if (/Windows NT 6.0/.test(userAgent)) device = "Windows Vista";
        else if (/Windows NT 5.1/.test(userAgent)) device = "Windows XP";
        else if (/Windows NT 5.0/.test(userAgent)) device = "Windows 2000";
        else if (/Windows NT 4.0/.test(userAgent)) device = "Windows NT 4.0";
        else if (/Windows NT 3.51/.test(userAgent)) device = "Windows NT 3.51";
        else if (/Windows 98/.test(userAgent)) device = "Windows 98";
        else if (/Windows 95/.test(userAgent)) device = "Windows 95";
        else if (/Windows NT 3.5/.test(userAgent)) device = "Windows NT 3.5";
        else if (/Windows 3.1/.test(userAgent)) device = "Windows 3.1";
        else if (/Windows 2.x/.test(userAgent)) device = "Windows 2.x";
        else if (/Windows 1.x/.test(userAgent)) device = "Windows 1.x";
        else if (/Xbox/.test(userAgent)) device = "Xbox";
        else if (/Surface Duo/.test(userAgent)) device = "Surface Duo";
        else device = "Windowsデバイス";
    }
    // **Mac Detection**
    else if (/Mac/.test(userAgent)) {
        let macModel = userAgent.match(/\(Macintosh;.*?;\s(.*?)\)/);
        if (/Mac OS X/.test(userAgent)) {
            let macOSVersion = userAgent.match(/Mac OS X (\d+[\._]\d+)/);
            device = macOSVersion
                ? `Macデバイス (${macOSVersion[1]})`
                : "Macデバイス";
        } else {
            device = macModel ? `Macデバイス (${macModel[1]})` : "Macデバイス";
        }
    }
    // **Linux Detection**
    else if (/Linux/.test(userAgent)) {
        if (/Ubuntu/.test(userAgent)) device = "Ubuntu Linux デバイス";
        else if (/Debian/.test(userAgent)) device = "Debian Linux デバイス";
        else if (/Fedora/.test(userAgent)) device = "Fedora Linux デバイス";
        else if (/CentOS/.test(userAgent)) device = "CentOS Linux デバイス";
        else if (/Red Hat/.test(userAgent)) device = "Red Hat Linux デバイス";
        else if (/Raspberry/.test(userAgent)) {
            device = /Pico/.test(userAgent) ? "Raspberry Pi Pico" : "Raspberry Pi";
        } else if (/PinePhone/.test(userAgent)) device = "PinePhone";
        else if (/Librem/.test(userAgent)) device = "Librem 5";
        else if (/Android/.test(userAgent)) {
            let androidModel = userAgent.match(/Android\s\d+;\s(.*?)(?:\sBuild)?/);
            device = androidModel
                ? `Androidデバイス (${androidModel[1]})`
                : "Androidデバイス";
        } else device = "Linux デバイス";
    }
    // **iOS Detection**
    else if (/iPhone|iPad|iPod/.test(userAgent)) {
        let iosModel = userAgent.match(/\((iPhone|iPad|iPod);/);
        device = iosModel ? `${iosModel[1]}OS` : "iOSデバイス";
    }
    // **ChromeOS Detection**
    else if (/CrOS/.test(userAgent)) {
        device = "ChromeOSデバイス";
    }
    // **Android Detection**
    else if (/Android/.test(userAgent)) {
        let androidModel = userAgent.match(/Android\s\d+;\s(.*?)(?:\sBuild)?/);
        device = androidModel
            ? `Androidデバイス (${androidModel[1]})`
            : "Androidデバイス";
    }
    // **BlackBerry Detection**
    else if (/BlackBerry/.test(userAgent) || /BB10/.test(userAgent)) {
        device = "BlackBerryデバイス";
    }
    // **webOS Detection**
    else if (/webOS/.test(userAgent)) {
        device = "webOS デバイス";
    }
    // **Gaming Devices**
    else if (/Nintendo Switch/.test(userAgent)) device = "Nintendo Switch";
    else if (/Steam/.test(userAgent)) device = "Steam デバイス";
    else if (/Nintendo DS/.test(userAgent)) device = "Nintendo DS";
    else if (/PlayStation Vita/.test(userAgent)) device = "PlayStation Vita";
    else if (/GameCube/.test(userAgent)) device = "Nintendo GameCube";
    else if (/Wii/.test(userAgent)) device = "Nintendo Wii";
    else if (/Atari/.test(userAgent)) device = "Atari VCS";
    else if (/Ouya/.test(userAgent)) device = "Ouya";
    else if (/Stadia/.test(userAgent)) device = "Google Stadia";
    else if (/GeForce/.test(userAgent)) device = "NVIDIA GeForce NOW";
    // **Wearable Devices**
    else if (/Glass/.test(userAgent)) device = "Google Glass";
    else if (/Microsoft Band/.test(userAgent)) device = "Microsoft Band";
    else if (/Fitbit/.test(userAgent)) device = "Fitbitデバイス";
    else if (/Withings/.test(userAgent)) device = "Withingsデバイス";
    else if (/Galaxy Watch/.test(userAgent)) device = "Samsung Galaxy Watch";
    else if (/Garmin/.test(userAgent)) device = "Garminデバイス";
    // **Smart Home Devices**
    else if (/Nest Cam/.test(userAgent)) device = "Nest Cam";
    else if (/Arlo/.test(userAgent)) device = "Arlo";
    else if (/Ring/.test(userAgent)) device = "Ringデバイス";
    else if (/SimpliSafe/.test(userAgent)) device = "SimpliSafeデバイス";
    // **Car Infotainment Systems**
    else if (/Ford SYNC/.test(userAgent)) device = "Ford SYNC";
    else if (/iDrive/.test(userAgent)) device = "BMW iDrive";
    else if (/MMI/.test(userAgent)) device = "Audi MMI";
    else if (/MBUX/.test(userAgent)) device = "Mercedes-Benz MBUX";
    else if (/Apple CarPlay/.test(userAgent)) device = "Apple CarPlay";
    else if (/Android Auto/.test(userAgent)) device = "Android Auto";
    // **Specialized Devices**
    else if (/HoloLens/.test(userAgent)) device = "Microsoft HoloLens 2";
    else if (/Zebra/.test(userAgent)) device = "Zebraデバイス";
    else if (/E Ink/.test(userAgent)) device = "E Inkデバイス";
    else if (/Kobo/.test(userAgent)) device = "Kobo E-Reader";
    else if (/Kindle/.test(userAgent)) device = "Amazon Kindle";
    // **Legacy Devices**
    else if (/Palm/.test(userAgent)) device = "Palmデバイス";
    else if (/Symbian/.test(userAgent)) device = "Symbian OSデバイス";
    else if (/Tizen/.test(userAgent)) device = "Tizenデバイス";
    else if (/Amiga/.test(userAgent)) device = "Amiga";
    else if (/Commodore/.test(userAgent)) device = "Commodore";
    else device = "その他のデバイス";

    // **Output device information**
    console.log("Detected Device: " + device);
    return device;
}

// OS を抽出する関数
function extractOS(userAgent) {
    let os = "不明なOS";

    // **Windows OS detection**
    if (/Windows/.test(userAgent)) {
        os = /Windows (NT [\d.]+)/.test(userAgent)
            ? "Windows " + RegExp.$1
            : "Windows";
    }
    // **macOS detection**
    else if (/Mac/.test(userAgent)) {
        os = /Mac OS X (\d+[\._]\d+)/.test(userAgent)
            ? "Mac OS X " + RegExp.$1
            : "Mac OS";
    }
    // **Linux OS detection**
    else if (/Linux/.test(userAgent)) {
        if (/Ubuntu/.test(userAgent)) os = "Ubuntu";
        else if (/Debian/.test(userAgent)) os = "Debian";
        else if (/Fedora/.test(userAgent)) os = "Fedora";
        else if (/CentOS/.test(userAgent)) os = "CentOS";
        else if (/Red Hat/.test(userAgent)) os = "Red Hat";
        else os = "Linux";
    }
    // **iOS detection**
    else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = "iOS";
    }
    // **ChromeOS detection**
    else if (/CrOS/.test(userAgent)) {
        os = "Chrome OS";
    }
    // **Android OS detection**
    else if (/Android/.test(userAgent)) {
        os = /Android (\d+[\._]\d+)/.test(userAgent)
            ? "Android " + RegExp.$1
            : "Android";
    }
    // **Other OS detection**
    else if (/BlackBerry/.test(userAgent) || /BB10/.test(userAgent)) {
        os = "BlackBerry OS";
    } else if (/webOS/.test(userAgent)) {
        os = "webOS";
    } else {
        os = "その他のOS";
    }

    if (device && os) {
        console.log(`Device: ${device}, OS: ${os}`);
        return { device, os }; // オブジェクトを返す
    } else {
        console.error("Device or OS could not be detected");
    }
}


// Function to get device information
function getDeviceInfo() {
    let userAgent = navigator.userAgent; // Properly define userAgent here
    let device = detectDevice(userAgent);
    let os = extractOS(userAgent);
    let browserName = "不明なブラウザ";
    let browserVersion = "不明なバージョン";
    // Browser detection logic
    if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
        if (/Mobile/.test(userAgent)) {
            browserName = "Google Chrome Mobile";
        } else {
            browserName = "Google Chrome";
        }
        browserVersion = userAgent.match(/Chrome\/([^\s]+)/)[1];
    } else if (/Firefox/.test(userAgent)) {
        browserName = "Firefox";
        browserVersion = userAgent.match(/Firefox\/([^\s]+)/)[1];
    } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
        browserName = "Safari";
        browserVersion = userAgent.match(/Safari\/([^\s]+)/)[1];
    } else if (/Edge/.test(userAgent)) {
        browserName = "Edge";
        browserVersion = userAgent.match(/Edge\/([^\s]+)/)[1];
    } else if (/MSIE/.test(userAgent) || /Trident/.test(userAgent)) {
        browserName = "Internet Explorer";
        browserVersion = userAgent.match(/(MSIE [^\s]+|rv:[^\s]+)/)[1];
    } else if (/Opera/.test(userAgent) || /OPR/.test(userAgent)) {
        browserName = "Opera";
        browserVersion = userAgent.match(/(Opera|OPR)\/([^\s]+)/)[2];
    } else if (/Brave/.test(userAgent)) {
        browserName = "Brave";
        browserVersion = userAgent.match(/Brave\/([^\s]+)/)[1];
    } else if (/Canary/.test(userAgent)) {
        browserName = "Google Chrome Canary";
        browserVersion = userAgent.match(/Canary\/([^\s]+)/)[1];
    } else if (/Arc/.test(userAgent)) {
        browserName = "Arc";
        browserVersion = userAgent.match(/Arc\/([^\s]+)/)[1];
    } else if (/Vivaldi/.test(userAgent)) {
        browserName = "Vivaldi";
        browserVersion = userAgent.match(/Vivaldi\/([^\s]+)/)[1];
    } else if (/Falkon/.test(userAgent)) {
        browserName = "Falkon";
        browserVersion = userAgent.match(/Falkon\/([^\s]+)/)[1];
    } else if (/QuteBrowser/.test(userAgent)) {
        browserName = "QuteBrowser";
        browserVersion = userAgent.match(/QuteBrowser\/([^\s]+)/)[1];
    } else if (/QtWebEngine/.test(userAgent)) {
        browserName = "QtWebEngine";
        browserVersion = userAgent.match(/QtWebEngine\/([^\s]+)/)[1];
    } else if (/Opera Developer/.test(userAgent)) {
        browserName = "Opera Developer";
        browserVersion = userAgent.match(/Opera Developer\/([^\s]+)/)[1];
    }

    // Function to get currency based on user's location
    function getCurrencyFromLocation() {
        fetch("https://ipapi.co/currency/")
            .then((response) => response.text())
            .then((currency) => {
                document.getElementById("currency").textContent =
                    "Currency: " + currency;
            })
            .catch((error) => {
                console.error("Error fetching currency:", error);
                document.getElementById("currency").textContent =
                    "Currency: Not available";
            });
    }
}
// Example usage
window.onload = function () {
    var deviceInfo = getDeviceInfo();
    document.getElementById("os").textContent = "OS: " + deviceInfo.os;
    document.getElementById("device").textContent =
        "Device: " + deviceInfo.device;
    document.getElementById("browser").textContent =
        "Browser: " + deviceInfo.browserName + " " + deviceInfo.browserVersion;
    document.getElementById("language").textContent =
        "Language: " + deviceInfo.language;

    getCurrencyFromLocation(); // Fetch and display the currency based on the user's location
};
