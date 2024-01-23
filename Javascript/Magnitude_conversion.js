//5.5 × (10^13)J ... 広島原爆

function 換算(magnitude) {
  let Energie = 10**(magnitude*1.5+4.8)
  console.log("J= "+Energie)
  console.log("TNT換算トン= "+Energie/1000000000/4.184+"t")
  console.log("広島型原爆= "+Energie/(5.5*(10**13))+"個分")

}

換算(9)
