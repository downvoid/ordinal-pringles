// Used for Veblen Ordinals up to W_2
const ordMarksVeblen = [
    "&phi;(1,x)", //"ε<sub>x</sub>"
    "&phi;(2,x)", //"ζ<sub>x</sub>"
    "&phi;(y,0)",
    "&phi;(1,0,x)", //"Γ<sub>x</sub>"
    "&phi;(1,1,x)",
    "&phi;(1,2,x)",
    "&phi;(1,y,0)",
    "&phi;(2,0,x)",
    "&phi;(2,1,x)",
    "&phi;(2,2,x)",
    "&phi;(2,y,0)",
    "&phi;(y,0,0)",
    "&phi;(1,0,0,x)",
    "&phi;(1,0,1,x)",
    "&phi;(1,0,2,x)",
    "&phi;(1,0,y,0)",
    "&phi;(1,1,0,x)",
    "&phi;(1,1,1,x)",
    "&phi;(1,1,2,x)",
    "&phi;(1,1,y,0)",
    "&phi;(1,2,0,x)",
    "&phi;(1,2,1,x)",
    "&phi;(1,2,2,x)",
    "&phi;(1,2,y,0)",
    "&phi;(1,y,0,0)",
    "&phi;(2,0,0,x)",
    "&phi;(2,0,1,x)",
    "&phi;(2,0,2,x)",
    "&phi;(2,0,y,0)",
    "&phi;(2,1,0,x)",
    "&phi;(2,1,1,x)",
    "&phi;(2,1,2,x)",
    "&phi;(2,1,y,0)",
    "&phi;(2,2,0,x)",
    "&phi;(2,2,1,x)",
    "&phi;(2,2,2,x)",
    "&phi;(2,2,y,0)",
    "&phi;(2,y,0,0)",
    "&phi;(y,0,0,0)",
    "&phi;(1@y)",
    "&phi;(1@[1,0],x)", //"&phi;(1{x:0}0)" //"&psi;(&phi;(1,Ω+1)) / "&psi;(ε<sub>Ω+1</sub>)"
]

// Misc. Veblen Ordinals used for various purposes
const extraOrdMarksVeblen = ["","&phi;(1)","&phi;(&phi;(1))","&phi;(&phi;(2))"]

const excessOrdMarksVeblen = [
    "x",
    "1,x",
    "2,x",
    "y,0",
    "1@(1,0),x",
    "1@(1,1),x",
    "1@(1,2),x",
    "1@(1,y)",
    "1@(2,0),x",
    "1@(2,1),x",
    "1@(2,2),x",
    "1@(2,y)",
    "1@(y,0)",
    "1@(1,0,0),x",
    "1@(1,0,1),x",
    "1@(1,0,2),x",
    "1@(1,0,y)",
    "1@(1,1,0),x",
    "1@(1,1,1),x",
    "1@(1,1,2),x",
    "1@(1,1,y)",
    "1@(1,2,0),x",
    "1@(1,2,1),x",
    "1@(1,2,2),x",
    "1@(1,2,y)",
    "1@(1,y,0)",
    "1@(2,0,0),x",
    "1@(2,0,1),x",
    "1@(2,0,2),x",
    "1@(2,0,y)",
    "1@(2,1,0),x",
    "1@(2,1,1),x",
    "1@(2,1,2),x",
    "1@(2,1,y)",
    "1@(2,2,0),x",
    "1@(2,2,1),x",
    "1@(2,2,2),x",
    "1@(2,2,y)",
    "1@(2,y,0)",
    "1@(y,0,0)",
    "1@(1@y)",
]

// Adds OrdMarksVeblen up to BHO*3^616 to the ordMarksVeblen Array
function makeExcessOrdMarksVeblen(){
    const length = excessOrdMarksVeblen.length

    // Generates OrdMarksVeblen up to BHO*3^41
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,0],"+excessOrdMarksVeblen[i]+")")
    }
    ordMarksVeblen.push("&phi;(1@[1,0],1@(1@[1,0],x))")

    // Generates OrdMarksVeblen up to BHO*3^82
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+"))")
    }
    ordMarksVeblen.push("&phi;(1@[1,0],1@(1@[1,0],1@(1@[1,0],x)))")

    // Generates OrdMarksVeblen up to BHO*3^123
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,0],1@(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+")))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],x)")

    // Generates OrdMarksVeblen up to BHO*3^164
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],"+excessOrdMarksVeblen[i]+")")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(1@[1,0],x))")

    // Generates OrdMarksVeblen up to BHO*3^205
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+"))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(1@[1,0],1@(1@[1,0],x)))")

    // Generates OrdMarksVeblen up to BHO*3^246
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+")))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],x))")

    // Generates OrdMarksVeblen up to BHO*3^287
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],"+excessOrdMarksVeblen[i]+"))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(1@[1,0],x)))")

    // Generates OrdMarksVeblen up to BHO*3^328
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+")))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(1@[1,0],1@(1@[1,0],x))))")

    // Generates OrdMarksVeblen up to BHO*3^369
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+"))))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],x)))")

    // Generates OrdMarksVeblen up to BHO*3^410
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],"+excessOrdMarksVeblen[i]+")))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],1@(1@[1,0],x))))")

    // Generates OrdMarksVeblen up to BHO*3^451
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+"))))")
    }
    ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],1@(1@[1,0],1@(1@[1,0],x)))))")

    // Generates OrdMarksVeblen up to BHO*3^493
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(2@[1,0],1@(2@[1,0],1@(2@[1,0],1@(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+")))))")
    }
    ordMarksVeblen.push("&phi;(y@[1,0])")
    ordMarksVeblen.push("&phi;(1@[1,1],x)")

    // Generates OrdMarksVeblen up to BHO*3^534
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,1],"+excessOrdMarksVeblen[i]+")")
    }
    ordMarksVeblen.push("&phi;(1@[1,1],1@(1@[1,0],x))")

    // Generates OrdMarksVeblen up to BHO*3^575
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,1],1@(1@[1,0],"+excessOrdMarksVeblen[i]+"))")
    }
    ordMarksVeblen.push("&phi;(1@[1,1],1@(1@[1,0],1@(1@[1,0],x)))")

    // Generates OrdMarksVeblen up to BHO*3^616
    for (let i = 1; i < length; i++) {
        ordMarksVeblen.push("&phi;(1@[1,1],1@(1@[1,0],1@(1@[1,0],"+excessOrdMarksVeblen[i]+")))")
    }
    ordMarksVeblen.push("&phi;(1@[1,1],1@(2@[1,0],x))")
}

// CREDIT TO https://ordinal-pringles-dark-mode.glitch.me/

// An extension of OrdMarksVeblen, goes up to FB156,765,267,918,903
const ordMarksXVeblen = [
    "1@[1,0],x", // 1{ - :0}0
    "2@[1,0],x", // 1{ - :0:0}0
    "y@[1,0]",
    "1@[1,1],x", // 1{ - {1,0:}0}0
    "1@[1,1],1@[1,0],x",
    "1@[1,1],2@[1,0],x",
    "1@[1,1],y@[1,0]",
    "2@[1,1],x",
    "2@[1,1],1@[1,0],x",
    "2@[1,1],2@[1,0],x",
    "2@[1,1],y@[1,0]",
    "y@[1,1]",
    "1@[1,2],x",
    "1@[1,2],1@[1,0],x",
    "1@[1,2],2@[1,0],x",
    "1@[1,2],y@[1,0]",
    "1@[1,2],1@[1,1],x",
    "1@[1,2],1@[1,1],1@[1,0],x",
    "1@[1,2],1@[1,1],2@[1,0],x",
    "1@[1,2],1@[1,1],y@[1,0]",
    "1@[1,2],2@[1,1],x",
    "1@[1,2],2@[1,1],1@[1,0],x",
    "1@[1,2],2@[1,1],2@[1,0],x",
    "1@[1,2],2@[1,1],y@[1,0]",
    "1@[1,2],y@[1,1]",
    "2@[1,2],x",
    "2@[1,2],1@[1,0],x",
    "2@[1,2],2@[1,0],x",
    "2@[1,2],y@[1,0]",
    "2@[1,2],1@[1,1],x",
    "2@[1,2],1@[1,1],1@[1,0],x",
    "2@[1,2],1@[1,1],2@[1,0],x",
    "2@[1,2],1@[1,1],y@[1,0]",
    "2@[1,2],2@[1,1],x",
    "2@[1,2],2@[1,1],1@[1,0],x",
    "2@[1,2],2@[1,1],2@[1,0],x",
    "2@[1,2],2@[1,1],y@[1,0]",
    "2@[1,2],y@[1,1]",
    "y@[1,2]",
    "1@[1,y]",
    "1@[1,(1,0)],x",
    "1@[1,(1,0)],1@[1,0],x", // 1{ - :0}0
    "1@[1,(1,0)],2@[1,0],x", // 1{ - :0:0}0
    "1@[1,(1,0)],y@[1,0]",
    "1@[1,(1,0)],1@[1,1],x", // 1{ - {1,0:}0}0
    "1@[1,(1,0)],1@[1,1],1@[1,0],x",
    "1@[1,(1,0)],1@[1,1],2@[1,0],x",
    "1@[1,(1,0)],1@[1,1],y@[1,0]",
    "1@[1,(1,0)],2@[1,1],x",
    "1@[1,(1,0)],2@[1,1],1@[1,0],x",
    "1@[1,(1,0)],2@[1,1],2@[1,0],x",
    "1@[1,(1,0)],2@[1,1],y@[1,0]",
    "1@[1,(1,0)],y@[1,1]",
    "1@[1,(1,0)],1@[1,2],x",
    "1@[1,(1,0)],1@[1,2],1@[1,0],x",
    "1@[1,(1,0)],1@[1,2],2@[1,0],x",
    "1@[1,(1,0)],1@[1,2],y@[1,0]",
    "1@[1,(1,0)],1@[1,2],1@[1,1],x",
    "1@[1,(1,0)],1@[1,2],1@[1,1],1@[1,0],x",
    "1@[1,(1,0)],1@[1,2],1@[1,1],2@[1,0],x",
    "1@[1,(1,0)],1@[1,2],1@[1,1],y@[1,0]",
    "1@[1,(1,0)],1@[1,2],2@[1,1],x",
    "1@[1,(1,0)],1@[1,2],2@[1,1],1@[1,0],x",
    "1@[1,(1,0)],1@[1,2],2@[1,1],2@[1,0],x",
    "1@[1,(1,0)],1@[1,2],2@[1,1],y@[1,0]",
    "1@[1,(1,0)],1@[1,2],y@[1,1]",
    "1@[1,(1,0)],2@[1,2],x",
    "1@[1,(1,0)],2@[1,2],1@[1,0],x",
    "1@[1,(1,0)],2@[1,2],2@[1,0],x",
    "1@[1,(1,0)],2@[1,2],y@[1,0]",
    "1@[1,(1,0)],2@[1,2],1@[1,1],x",
    "1@[1,(1,0)],2@[1,2],1@[1,1],1@[1,0],x",
    "1@[1,(1,0)],2@[1,2],1@[1,1],2@[1,0],x",
    "1@[1,(1,0)],2@[1,2],1@[1,1],y@[1,0]",
    "1@[1,(1,0)],2@[1,2],2@[1,1],x",
    "1@[1,(1,0)],2@[1,2],2@[1,1],1@[1,0],x",
    "1@[1,(1,0)],2@[1,2],2@[1,1],2@[1,0],x",
    "1@[1,(1,0)],2@[1,2],2@[1,1],y@[1,0]",
    "1@[1,(1,0)],2@[1,2],y@[1,1]",
    "1@[1,(1,0)],y@[1,2]",
    "1@[1,(1,0)],1@[1,y]",
    "2@[1,(1,0)],x",
    "2@[1,(1,0)],1@[1,0],x", // 1{ - :0}0
    "2@[1,(1,0)],2@[1,0],x", // 1{ - :0:0}0
    "2@[1,(1,0)],y@[1,0]",
    "2@[1,(1,0)],1@[1,1],x", // 1{ - {1,0:}0}0
    "2@[1,(1,0)],1@[1,1],1@[1,0],x",
    "2@[1,(1,0)],1@[1,1],2@[1,0],x",
    "2@[1,(1,0)],1@[1,1],y@[1,0]",
    "2@[1,(1,0)],2@[1,1],x",
    "2@[1,(1,0)],2@[1,1],1@[1,0],x",
    "2@[1,(1,0)],2@[1,1],2@[1,0],x",
    "2@[1,(1,0)],2@[1,1],y@[1,0]",
    "2@[1,(1,0)],y@[1,1]",
    "2@[1,(1,0)],1@[1,2],x",
    "2@[1,(1,0)],1@[1,2],1@[1,0],x",
    "2@[1,(1,0)],1@[1,2],2@[1,0],x",
    "2@[1,(1,0)],1@[1,2],y@[1,0]",
    "2@[1,(1,0)],1@[1,2],1@[1,1],x",
    "2@[1,(1,0)],1@[1,2],1@[1,1],1@[1,0],x",
    "2@[1,(1,0)],1@[1,2],1@[1,1],2@[1,0],x",
    "2@[1,(1,0)],1@[1,2],1@[1,1],y@[1,0]",
    "2@[1,(1,0)],1@[1,2],2@[1,1],x",
    "2@[1,(1,0)],1@[1,2],2@[1,1],1@[1,0],x",
    "2@[1,(1,0)],1@[1,2],2@[1,1],2@[1,0],x",
    "2@[1,(1,0)],1@[1,2],2@[1,1],y@[1,0]",
    "2@[1,(1,0)],1@[1,2],y@[1,1]",
    "2@[1,(1,0)],2@[1,2],x",
    "2@[1,(1,0)],2@[1,2],1@[1,0],x",
    "2@[1,(1,0)],2@[1,2],2@[1,0],x",
    "2@[1,(1,0)],2@[1,2],y@[1,0]",
    "2@[1,(1,0)],2@[1,2],1@[1,1],x",
    "2@[1,(1,0)],2@[1,2],1@[1,1],1@[1,0],x",
    "2@[1,(1,0)],2@[1,2],1@[1,1],2@[1,0],x",
    "2@[1,(1,0)],2@[1,2],1@[1,1],y@[1,0]",
    "2@[1,(1,0)],2@[1,2],2@[1,1],x",
    "2@[1,(1,0)],2@[1,2],2@[1,1],1@[1,0],x",
    "2@[1,(1,0)],2@[1,2],2@[1,1],2@[1,0],x",
    "2@[1,(1,0)],2@[1,2],2@[1,1],y@[1,0]",
    "2@[1,(1,0)],2@[1,2],y@[1,1]",
    "2@[1,(1,0)],y@[1,2]",
    "2@[1,(1,0)],1@[1,y]",
    "y@[1,(1,0)]",
    "1@[1,(1,1)],x",
];

// Generates OrdMarksVeblen up to the ordMarksXVeblen limit (Ω₂^(Ω^(Ω+1))) ON DEMAND
function infiniteOrdMarksVeblen(magnitude, layer = 0) {
    if (layer >= data.ord.trim) return "..."
    //if (D(magnitude).gte(ordMarksXStart[ordMarksXStart.length - 1])) return ordMarksXVeblen[ordMarksX.length - 1];
    if (D(magnitude).gte(ordMarksXStart[ordMarksXStart.length - 1])) return infiniteOrdMarks1Veblen(magnitude, layer);
    if (D(magnitude).floor().lt(ordMarks.length - 1) && !layer) return ordMarksVeblen[D(magnitude).floor().toNumber()];
    magnitude = D(magnitude).add(0.000000000001).floor()
    //console.log(magnitude + " " + layer)
    if (!layer) {
        let i = 0
        while (i < ordMarksX.length - 1 && magnitude.add(0.000000000001).gte(ordMarksXStart[i + 1])) i++
        let finalOutput = ordMarksXVeblen[i].replaceAll("x", infiniteOrdMarksVeblen(magnitude.sub(ordMarksXStart[i]), layer+1))
        return `&phi;(${finalOutput.replaceAll('undefined', '')})`
    } else {
        if (magnitude.lt(1)) return "x"
        if (magnitude.lt(41)) return excessOrdMarksVeblen[Decimal.floor(magnitude.add(0.000000000001)).toNumber()]
        let i = 0
        while (i < ordMarksX.length - 1 && magnitude.add(0.000000000001).gte(ordMarksXLength[i + 1])) i++
        let finalOutput = ordMarksXVeblen[i].replaceAll("x", infiniteOrdMarksVeblen(magnitude.sub(ordMarksXLength[i]), layer+1))
        return `1@(${finalOutput.replaceAll('undefined', '')})`
    }
    return "gwa"; // you've been gwa-ed
}

const powerOrdMarksVeblen = [
    "0",
    "1",
    "2",
    "(1,0)",
    "(1,1)",
    "(1,2)",
    "(2,0)",
    "(2,1)",
    "(2,2)",
    "(1,0,0)",
    "(1,0,1)",
    "(1,0,2)",
    "(1,1,0)",
    "(1,1,1)",
    "(1,1,2)",
    "(1,2,0)",
    "(1,2,1)",
    "(1,2,2)",
    "(2,0,0)",
    "(2,0,1)",
    "(2,0,2)",
    "(2,1,0)",
    "(2,1,1)",
    "(2,1,2)",
    "(2,2,0)",
    "(2,2,1)",
    "(2,2,2)",
]

function pow2Veblen(ord, final=1) {
    ord = Math.floor(ord)
    if (ord < 3) return ord+final
    if (ord < 27) return powerOrdMarksVeblen[ord]
    const magnitude = Math.floor(Math.log(ord)/Math.log(3)+1e-14)
    const magnitudeAmount = 3**magnitude
    const amount = Math.floor(ord/magnitudeAmount)
    let finalOutput = amount + "@" + powerOrdMarksVeblen[magnitude]
    const firstAmount = amount*magnitudeAmount
    if(ord-firstAmount > 0) finalOutput += ("," + pow2Veblen(ord-firstAmount,0))
    return finalOutput
}

function powerOfOmegaVeblen(ord,pow2=0,trim = data.ord.trim) {
    ord = Math.floor(ord)
    if(!ord) return ""
    if(trim <= 0) return `...`
    if(ord>=PSI_VALUE) return "1@[1,(1@[1,0],x)]"
    const magnitude = Math.floor(Math.log(ord)/Math.log(3)+1e-14)
    const magnitudeAmount = 3**magnitude
    const amount = Math.floor(ord/magnitudeAmount)
    let finalOutput = amount + "@[" + pow2Veblen(pow2) + "," + powerOrdMarksVeblen[magnitude] + "]"
    const firstAmount = amount*magnitudeAmount
    if(ord-firstAmount > 0) finalOutput += ("," + powerOfOmegaVeblen(ord-firstAmount, pow2, trim - 1))
    return finalOutput
}

function ordMarksX1Veblen(index) {
    index = D(index).add(0.000000000001).floor()
    if (index.eq(PSI_VALUE)) {
        return "1@[1,(1@[1,0],x)]";
    }
    let pow1 = powerOfOmegaVeblen(index)
    //console.log(index+" "+pow1)
    return pow1 + (pow1.includes("...") ? "" : ",x");
}

// Generates OrdMarksVeblen above the ordMarksXVeblen limit ψ(Ω₂^(Ω^(Ω+1))) up to ψ(Ω₂^Ω₂) ON DEMAND
function infiniteOrdMarks1Veblen(magnitude, layer = 0) {
    if (layer >= data.ord.trim) return "..."
    magnitude = D(magnitude).add(0.000000000001).floor()
    if (magnitude.lt(ordMarksXStart1)) return infiniteOrdMarksVeblen(magnitude, layer)
    if (magnitude.gte(ordMarksXStart2)) return infiniteOrdMarks2Veblen(magnitude, layer)
    let i = Decimal.floor(Decimal.ln(magnitude.div(ordMarksXStart1)).div(Decimal.ln(3))).add(ordMarksXIndex1)
    let finalOutput = "gwa";
    if (!layer) {
        finalOutput = ordMarksX1Veblen(i).replaceAll("x", infiniteOrdMarks1Veblen(magnitude.sub(ordMarksXStart1.mul(D(3).pow(i.sub(ordMarksXIndex1)))), layer+1))
        return `&phi;(${finalOutput.replaceAll('undefined', '')})`
    } else {
        finalOutput = ordMarksX1Veblen(i).replaceAll("x", infiniteOrdMarks1Veblen(magnitude.sub(ordMarksXLength1.mul(D(3).pow(i.sub(ordMarksXIndex1)))), layer+1))
        return `1@(${finalOutput.replaceAll('undefined', '')})`
    }
    return "gwa"; // you've been gwa-ed
}

function ordMarksX2Veblen(index, layer = 0) {
    if (layer >= data.ord.trim) return ""
    index = D(index).add(0.000000000001).floor()
    if (!layer && index.lte(PSI_VALUE)) return ordMarksX1Veblen(index)
    if (layer && index.lte(0)) return ""
    let indexPow = Decimal.floor(Decimal.ln(index.div(PSI_VALUE+1)).div(Decimal.ln(PSI_VALUE))).add(1)
    if (index.lt(PSI_VALUE+1)) indexPow = D(0)
    let indexPow1 = D(1)
    if (indexPow.gt(0)) indexPow1 = D(PSI_VALUE+1).mul(Decimal.pow(PSI_VALUE,indexPow.sub(1)))
    let indexMul = index.div(indexPow1).floor()
    if (indexPow.gte(PSI_VALUE)) {
        if (indexMul.gte(2)) return "1@[1@[1@[1,0],x]]"
        return "1@[1@[1,0],x]"
    }
    let indexRem = index.sub(indexPow1.mul(indexMul))
    let finalOutput = "";
    if (indexMul.gt(0) && layer) finalOutput = ","
    if (indexPow.gte(0)) finalOutput += powerOfOmegaVeblen(indexMul,indexPow);
    if (indexRem.eq(index) && indexMul.eq(0)) finalOutput += powerOfOmegaVeblen(1,indexPow);
    if (!indexRem.eq(index) && !finalOutput.includes("...")) finalOutput += ordMarksX2Veblen(indexRem, layer+1)
    //console.log("pow="+indexPow.toString()+" pow1="+indexPow1.toString()+" mul="+indexMul.toString()+" rem="+indexRem.toString()+" index="+index.toString()+" layer="+layer.toString())
    return `${finalOutput.replaceAll('undefined', '')}`
}

// Generates OrdMarksVeblen above ψ(Ω₂^Ω₂) up to ψ(Ω_ω) ON DEMAND
function infiniteOrdMarks2Veblen(magnitude, layer = 0) {
    if (layer >= data.ord.trim) return ""
    magnitude = D(magnitude).add(0.000000000001).floor()
    if (magnitude.lt(ordMarksXStart2)) return infiniteOrdMarks1Veblen(magnitude, layer)
    if (magnitude.gte(ordMarksBO) || D(magnitude.layer).gt(ordMarksBO.layer)) return infiniteOrdMarksBOVeblen(magnitude, layer)
    let i1 = magnitude.div(ordMarksXStart2).mul(2).plus(1).div(3)
    let i = Decimal.floor(Decimal.ln(i1).div(Decimal.ln(3))).add(ordMarksXIndex2)
    let finalOutput = "gwa";
    if (!layer) {
        let nextMagnitude = magnitude.sub(ordMarksXStart2.mul(D(3).pow(i.sub(ordMarksXIndex2))))
        finalOutput = ordMarksX2Veblen(i).replaceAll("x", (nextMagnitude.eq(magnitude) ? "0" : infiniteOrdMarks2Veblen(nextMagnitude, layer+1)))
        return `&phi;(${finalOutput.replaceAll('undefined', '')})`
    } else {
        let nextMagnitude = magnitude.sub(ordMarksXLength2.mul(D(3).pow(i.sub(ordMarksXIndex2))))
        finalOutput = ordMarksX2Veblen(i).replaceAll("x", (nextMagnitude.eq(magnitude) ? "0" : infiniteOrdMarks2Veblen(nextMagnitude, layer+1)))
        return `1{${finalOutput.replaceAll('undefined', '')}`
    }
    return "gwa"; // you've been gwa-ed
}

function powerOfOmega2Veblen(index, layer = 0) {
    if (layer >= data.ord.trim) return ""
    index = D(index).add(0.000000000001).floor()
    if (layer && index.lte(0)) return ""
    if (index.lt(PSI_VALUE)) return (layer ? "," : "") + pow2Veblen(index.toNumber(), 0)
    let indexPow = Decimal.floor(Decimal.ln(index).div(Decimal.ln(PSI_VALUE)))
    let indexPow1 = D(PSI_VALUE).pow(indexPow)
    let indexMul = index.div(indexPow1).floor()
    let indexRem = index.sub(indexPow1.mul(indexMul))
    let finalOutput = "";
    if (indexPow.gt(0) && indexPow.lt(3)) finalOutput += powerOfOmegaVeblen(indexMul, indexPow.sub(1))
    if (indexPow.gte(3) && indexPow.lt(PSI_VALUE*Infinity)) finalOutput += powerOfOmegaVeblen(indexMul, indexPow)
    if (indexRem.eq(index) && indexMul.eq(0)) indexMul = D(1)
    if (indexPow.gte(PSI_VALUE)) finalOutput += powerOfOmegaVeblen(indexMul, 2).replaceAll("3", powerOfOmega2Veblen(indexPow))
    if (!indexRem.eq(index) && !finalOutput.includes("...")) finalOutput += powerOfOmega2Veblen(indexRem, layer+1)
    //console.log("pow="+indexPow.toString()+" pow1="+indexPow1.toString()+" mul="+indexMul.toString()+" rem="+indexRem.toString()+" index="+index.toString()+" layer="+layer.toString())
    return `${finalOutput.replaceAll('undefined', '')}`
}

// Generates OrdMarksVeblen at (or above) ψ(Ω_ω) ON DEMAND
function infiniteOrdMarksBOVeblen(magnitude, layer = 0)
{
    if (layer >= data.ord.trim) return ""
    magnitude = D(magnitude).add(0.000000000001).floor()
    if (magnitude.lt(ordMarksBO) && D(magnitude.layer).lte(ordMarksBO.layer)) return infiniteOrdMarks2Veblen(magnitude, layer)
    if ((magnitude.gt(ordMarksBO) || D(magnitude.layer).gt(ordMarksBO.layer)) && !capOrdinalAtBO) {
        let magnitudeLayer = D(magnitude.layer).plus(D(magnitude.mag).gte(ordMarksBO.mag) ? 1 : 0)
        let omegaSubscript = magnitudeLayer.div(3).add(2).floor()
        if (omegaSubscript.gte(Decimal.tetrate(PSI_VALUE,3))) return "&phi;(1@(1,0)<sub>I</sub>)";;
        return "&phi;(1@(1,0)<sub>"+powerOfOmega2Veblen(omegaSubscript)+"</sub>)";
    }
    return "&phi;(1@(1,0)<sub>&phi;(1)</sub>)";
}

// End Credit
