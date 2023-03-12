let boostTab = "upgrades"
function switchBoostTab(t){
    DOM(`${boostTab}SubPage`).style.display = `none`
    DOM(`${t}SubPage`).style.display = `flex`
    boostTab = t
}

const bupDesc = ['Each Factor\'s effect is doubled', 'Boost OP gain by 5x', 'The Ordinal Base is always 5 in Challenges', 'Dynamic Gain is multiplied by your C5 completions in C1-C4',
    'Unlock Max All AutoBuyer', 'Boosters Boost Tier 1 and 2 automation', 'Gain 10x OP at Ordinal Base 5 or higher', 'The Ordinal Base boosts Factors (higher is better)',
    'Unlock Markup AutoBuyer', 'Gain 20 Free OP/s', 'Gain 3 free levels of each Factor', 'Boosters boost Dynamic gain if the Ordinal Base is less than 6']
const bupCosts = [1, 5, 72, 53,
    1, 4, 73, 74,
    1, 8, 16, 66]
function initBUPs(){
    let rows = [DOM('bupColumn0'), DOM('bupColumn1'), DOM('bupColumn2')]
    let total = 0
    for (let i = 0; i < rows.length; i++) {
        for (let n = 0; n < bupCosts.length/3; n++) {
            let bup = document.createElement('button')
            bup.className = 'bup'
            bup.id = `bup${total}`
            bup.innerText = `${bupDesc[total]}\n${bupCosts[total]} Boosters`
            rows[i].append(bup)
            ++total
        }
    }
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        DOM(`bup${i}`).addEventListener('click', ()=>buyBUP(i))
        DOM(`bup${i}`).style.backgroundColor = data.boost.hasBUP[i]?'#002480':'black'
    }
    for (let i = 0; i < data.boost.unlocks.length; i++) {
        DOM(`bu${i}`).style.backgroundColor = data.boost.unlocks[i]?'#002480':'black'
    }
}
const autoNames = ['Max All', 'Markup']
const autoRequirements = ['you can\'t Factor Shift', 'you\'re past Ψ(Ω)']
const autoUps = [4, 8]
function updateBoostersHTML(){
    DOM('boosterText').innerText = `You have ${format(data.boost.amt)} Boosters (${format(data.boost.total)} total)`
    DOM('bup3').innerText = `${bupDesc[3]}\n[${format(bup3Effect())}x]\n53 Boosters`
    DOM('bup5').innerText = `Boosters Boost Tier 1 and 2 Automation\n[${format(bup5Effect())}x]\n4 Boosters`
    DOM('bup7').innerText = `The Ordinal Base boosts Factors\n[${format(bup7Effect())}x]\n74 Boosters`
    DOM('bup11').innerText = `Boosters boost Dynamic gain if the Base is less than 6\n[${format(bup11Effect())}x]\n66 Boosters`
    for (let i = 0; i < data.autoStatus.enabled.length; i++) {
        DOM(`t2AutoText${i}`).innerText = `Your ${autoNames[i]} AutoBuyer is clicking the ${autoNames[i]} button ${format(1*bup5Effect()*chalEffectTotal()*incrementyMult())} times/second, but only if ${autoRequirements[i]}`
        DOM(`auto${i+2}`).innerText = data.boost.hasBUP[autoUps[i]]?`${autoNames[i]} AutoBuyer: ${boolToReadable(data.autoStatus.enabled[i], 'EDL')}`:`${autoNames[i]} AutoBuyer: LOCKED`
    
    }
    DOM("factorText2").innerText = `Your Challenges are multiplying AutoBuyer speed by a total of ${format(chalEffectTotal())}x`

    DOM("incrementyText").innerText = `You have ${format(data.incrementy.amt)} Incrementy [+${format(incrementyGain())}/s], multiplying AutoBuyer speed by ${format(incrementyMult())}\nYou gain Incrementy based on your Ordinal, but only above Ψ(Ω).`;
    DOM(`iup0`).innerText = `${iupDesc[0]} (${formatWhole(data.incrementy.rebuyableAmt[0])}+${iup7Effect()})\n${format(data.incrementy.rebuyableCosts[0])} Incrementy\nCurrently: ${format(iupEffects[0]())}x`
    DOM(`iup2`).innerText = `${iupDesc[2]} (${formatWhole(data.incrementy.rebuyableAmt[2])})\n${format(data.incrementy.rebuyableCosts[2])} Incrementy\nCurrently: ${format(iupEffects[2]())}x`
    DOM('chargeButton').innerText = `Sacrifice ${format(chargeReq())} Incrementy for 1 Charge\nYou have ${data.incrementy.charge} Charge (${data.incrementy.totalCharge} total)`
    
    DOM("chalTab").innerText = data.boost.total>=6?'Challenges':'???'
    DOM("incrementyTab").innerText = data.boost.total>=105?'Incrementy':'???'
    DOM(`chalIn`).innerText = data.chal.active[7]?`You are in Challenge 8 and there is ${format(data.chal.decrementy)} Decrementy`:`You are in Challenge ${data.chal.html+1}`
}

function boosterReset(){
    data.ord.ordinal = 0
    data.ord.over = 0
    data.ord.base = data.chal.active[2]?15:10
    data.ord.isPsi = false
    data.markup.powers = 0
    data.markup.shifts = 0
    data.dy.level = 1
    data.dy.gain = 0
    data.dy.cap = 40
    for (let i = 0; i < data.factors.length; i++) {
        data.factors[i] = 0
    }
    for (let i = 0; i < data.autoLevels.length; i++) {
        data.autoLevels[i] = 0
    }
    data.chal.decrementy = 1
    data.successorClicks = 0
}

function boost(f=false){
    if((!data.ord.isPsi || data.ord.ordinal < boostReq()) && !f) return createAlert("Failure", "Insufficient Ordinal", "Dang.")

    if(data.boost.times === 0){
        DOM('boostNav').style.display = 'block'
        DOM('factorBoostButton').style.display = 'inline-block'
    }

    for(let i=1;i<=getBulkBoostAmt();i++) {
        data.boost.amt += data.boost.times+1
        data.boost.total += data.boost.times+1
        ++data.boost.times
    }

    if(data.boost.total >= 6) DOM('chalTab').addEventListener('click', _=> switchBoostTab('chal'))
    if(data.boost.total >= 14) DOM('incrementyTab').addEventListener('click', _=> switchBoostTab('incrementy'))

    boosterReset()
}
function boostReq(){
    return (3 ** (data.boost.times+1) * 4 * 10)
}
function getBulkBoostAmt(){
    return 1
    //return Math.round(Math.log(data.ord.ordinal/40)/Math.log(3)) - data.boost.times
}
function buyBUP(i){
    if(data.boost.hasBUP[i] || data.boost.amt < bupCosts[i] || data.chal.active[6]) return
    if(i % 4 !== 0 && !data.boost.hasBUP[i-1]) return // Force you to buy them in order, but only in columns

    data.boost.hasBUP[i] = true
    data.boost.amt -= bupCosts[i]

    DOM(`bup${i}`).style.backgroundColor = '#002480'
}

let bup3Effect = () => data.boost.hasBUP[3]?Math.max(Math.pow(2, data.chal.completions[4]), 1):1
let bup5Effect = () => data.boost.hasBUP[5]?Math.max(Math.sqrt(data.boost.total), 1):1
let bup7Effect = () => data.boost.hasBUP[7]?data.ord.base-2:1
let bup11Effect = () => data.boost.hasBUP[11]?Math.max(Math.log2(data.boost.amt), 1):1

function boosterRefund(c=false){
    let indexes = []
    for (let i = 0; i < data.boost.hasBUP.length; i++) {
        if (data.boost.hasBUP[i]) indexes.push(i)
        data.boost.hasBUP[i] = false
        DOM(`bup${i}`).style.backgroundColor = 'black'
    }
    for (let i = 0; i < indexes.length; i++){
        data.boost.amt += bupCosts[indexes[i]]
    }
    c?boosterReset():chalExit()
}

function boosterUnlock(){
    if(data.boost.total>=6){ data.boost.unlocks[0] = true; DOM(`bu0`).style.backgroundColor = '#002480' }
    if(data.boost.total>=105){ data.boost.unlocks[1] = true; DOM(`bu0`).style.backgroundColor = '#002480' }
}

function toggleAuto(i){
    if(!data.boost.hasBUP[autoUps[i]]) return
    data.autoStatus.enabled[i] = !data.autoStatus.enabled[i]
}