function mainLoop() {
    // Calculate diff and usableDiff
    if(data.lastTick === 0) data.lastTick = Date.now()
    let diff = data.offline ? Math.max((Date.now() - data.lastTick), 0) : 50
    // Used for Offline Progress
    let uDiff = diff/1000

    if(data.dy.gain > 0 && data.dy.level < data.dy.cap) data.dy.level = Math.min(data.dy.cap, data.dy.level+uDiff*dyGain())
    if(data.boost.hasBUP[9]) data.markup.powers += bup9Effect()*uDiff
    if(data.chal.active[7]) data.chal.decrementy += decrementyGain(data.chal.decrementy*50)

    if(data.ord.isPsi && data.boost.unlocks[1]) data.incrementy.amt += uDiff*incrementyGain()
    if(data.boost.unlocks[3]) {
        data.overflow.bp += getOverflowGain(0)*uDiff
        data.overflow.oc += getOverflowGain(1)*uDiff
    }

    // Run the tick() function to calculate things that rely on normal diff
    tick(diff)

    // Update lastTick
    data.lastTick = Date.now()

    // Check for hotkey usage
    if (controls["s"].pressed) successor(1, true);
    if (controls["m"].pressed) maximize();
    if (controls["i"].pressed) markup();
    if (controls["f"].pressed) { buyMaxFactor(); buyMaxAuto(); }

    // Update Achievements
    checkAchs()

    // Update HTML
    uHTML.update()
}


window.onload = function () {
    let extra = false
    try { extra = load() } catch(e){ console.log('New Save!\nIf you\'re seeing this, welcome :)') }

    uHTML.load()

    if(extra) fixOldSavesP2()
}

window.setInterval(function () {
    mainLoop()
}, 50);