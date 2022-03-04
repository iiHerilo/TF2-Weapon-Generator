const prim = ["mel", "shot", "rfl", "pis", "smg", "min", "rkt", "grd", "stk", "lch", "jar", "ban", "thn", "bow", "bkp", "pda", "lsr", "flt", "flg", "med", "clk", "chr", "sap", "kit", "col", /*"weap", "gun", "prj"*/];
const subs = ["gun", "via", "exp", "edb", "weap", "prj", "thr", "jar", "ice", "gold", "nuk", "flm", "bak", "knf", "wrn", "heal", "hum", "bar", "boot"];
const weapons = {d:[
    {pfix: {txt:"Scatter", att:"via"}, mfix: "'s ", sfix: {txt:"Scattergun", att:"shot,gun,weap,dmg"}},
    {pfix: {txt:"Force", att:"via"}, mfix: "-A-", sfix: {txt:"Nature", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Short", att:"via"}, mfix: " ", sfix: {txt:"Stop", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Soda", att:"via"}, mfix: " ", sfix: {txt:"Popper", att:"shot,gun,weap,dmg,bar"}},
    {pfix: {txt:"Baby Face", att:"via"}, mfix: "'s ", sfix: {txt:"Blaster", att:"shot,gun,weap,dmg"}},
    {pfix: {txt:"Back", att:"via,bak"}, mfix: "", sfix: {txt:"Scatter", att:"shot,gun,weap,dmg"}},
    {pfix: {txt:"Pistol", att:"gun,weap,dmg,pis"}, mfix: "'s Pocket ", sfix: {txt:"Pistol", att:"pis,gun,weap,dmg"}},
    {pfix: {txt:"Luger", att:"gun,weap,dmg,pis"}, mfix: "", sfix: {txt:"Morph", att:"via"}},
    {pfix: {txt:"Wing", att:"gun,weap,dmg,pis,via"}, mfix: " ", sfix: {txt:"Winger", att:"gun,weap,dmg,pis,via"}},
    {pfix: {txt:"Pretty Boy", att:"via"}, mfix: "'s Pocket ", sfix: {txt:"Pistol", att:"pis,gun,weap,dmg"}},
    {pfix: {txt:"Flying", att:"via"}, mfix: " ", sfix: {txt:"Guillotine", att:"thn,weap,dmg,con,thr,mel,weap,dmg"}},
    {pfix: {txt:"Bonk", att:"via,bar,nuk,col"}, mfix: "! Atomic ", sfix: {txt:"Punch", att:"con,edb,mel,weap,dmg,bar,col"}},
    {pfix: {txt:"Crit", att:"via,bar,nuk,col"}, mfix: "-a-", sfix: {txt:"Cola", att:"con,edb,nuk,bar,col"}},
    {pfix: {txt:"Mad", att:"via"}, mfix: " ", sfix: {txt:"Milk", att:"edb,con,thr,jar,prj,bar"}},
    {pfix: {txt:"Mutated", att:"via"}, mfix: " ", sfix: {txt:"Milk", att:"con,thr,jar,edb,prj,bar"}},
    {pfix: {txt:"Bat", att:"mel,weap,dmg"}, mfix: "", sfix: {txt:"Bat", att:"mel,weap,dmg"}},
    {pfix: {txt:"Holy", att:"via"}, mfix: " ", sfix: {txt:"Mackerel", att:"mel,weap,dmg,hum"}},
    {pfix: {txt:"Unarmed", att:"via"}, mfix: " ", sfix: {txt:"Combat", att:"mel,weap,dmg,via,hum"}},
    {pfix: {txt:"Bat", att:"mel,weap,dmg"}, mfix: "", sfix: {txt:"Saber", att:"mel,weap,dmg,nuk"}},
    {pfix: {txt:"Sand", att:"via"}, mfix: "", sfix: {txt:"Man", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Candy", att:"via,pyr"}, mfix: " ", sfix: {txt:"Cane", att:"mel,weap,dmg"}},
    {pfix: {txt:"Boston", att:"via"}, mfix: " ", sfix: {txt:"Basher", att:"mel,weap,dmg"}},
    {pfix: {txt:"Three-Rune", att:"via"}, mfix: "-Rune ", sfix: {txt:"Blade", att:"mel,weap,dmg"}},
    {pfix: {txt:"Sun", att:"via"}, mfix: "-on-a-", sfix: {txt:"Stick", att:"mel,weap,dmg"}},
    {pfix: {txt:"Fan", att:"via"}, mfix: " O'", sfix: {txt:"War", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Atomic", att:"via"}, mfix: "'s ", sfix: {txt:"Atomizer", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Wrap", att:"via"}, mfix: " ", sfix: {txt:"Assassin", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Rocket", att:"exp,rkt,weap,dmg"}, mfix: " ", sfix: {txt:"Launcher", att:"rkt,weap,dmg,gun,weap,dmg,prj,"}},
    {pfix: {txt:"Original", att:"via,rkt,weap,dmg"}, mfix: "'s Original ", sfix: {txt:"Original", att:"gun,weap,dmg,rkt,weap,dmg,prj,via"}},
    {pfix: {txt:"Direct", att:"gun,weap,dmg,rkt,weap,dmg,via"}, mfix: " ", sfix: {txt:"Hit", att:"gun,weap,dmg,rkt,weap,dmg,prj,via"}},
    {pfix: {txt:"Black", att:"via,rkt,weap,dmg"}, mfix: " ", sfix: {txt:"Box", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Rocket", att:"exp,rkt,weap,dmg"}, mfix: " ", sfix: {txt:"Jumper", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Liberty", att:"via,rkt,weap,dmg"}, mfix: " ", sfix: {txt:"Launcher", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Cow", att:"via,rkt,weap,dmg"}, mfix: " ", sfix: {txt:"Mangler", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj,via,nuk"}},
    {pfix: {txt:"Cow", att:"via,rkt,weap,dmg"}, mfix: "'s ", sfix: {txt:"Mangler 5000", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj,nuk"}},
    {pfix: {txt:"Beggar", att:"via"}, mfix: "'s ", sfix: {txt:"Bazooka", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Air", att:"via"}, mfix: " ", sfix: {txt:"Strike", att:"exp,rkt,weap,dmg,gun,weap,dmg,prj,via"}},
    {pfix: {txt:"Shotgun", att:"shot,gun,weap,dmg"}, mfix: "", sfix: {txt:"Gun", att:"prj,gun,weap,dmg"}},
    {pfix: {txt:"Reserve", att:"via"}, mfix: " ", sfix: {txt:"Shooter", att:"shot,gun,weap,dmg"}},
    {pfix: {txt:"Buff", att:"via,ban,bar"}, mfix: " ", sfix: {txt:"Banner", att:"ban,via,bar"}},
    {pfix: {txt:"Gun", att:"via,gun,weap,dmg"}, mfix: "", sfix: {txt:"Boats", att:"bkp,boot"}},
    {pfix: {txt:"Battalion", att:"via,ban,bar"}, mfix: "'s ", sfix: {txt:"Backup", att:"ban,via,bar"}},
    {pfix: {txt:"Seashell", att:"via,ban,bar"}, mfix: "", sfix: {txt:"Concheror", att:"ban,via,bar"}},
    {pfix: {txt:"Man", att:"via"}, mfix: "", sfix: {txt:"Treads", att:"bkp,boot"}},
    {pfix: {txt:"Righteous", att:"via"}, mfix: " ", sfix: {txt:"Bison", att:"via,gun,weap,dmg,nuk,shot,prj"}},
    {pfix: {txt:"B.A.S.E.", att:"bkp"}, mfix: " ", sfix: {txt:"Jumper", att:"bkp"}},
    {pfix: {txt:"Panic", att:"via"}, mfix: " ", sfix: {txt:"Attack", att:"shot,gun,weap,dmg,"}},
    {pfix: {txt:"Shovel", att:"mel,weap,dmg"}, mfix: "", sfix: {txt:"Shovel", att:"mel,weap,dmg"}},
    {pfix: {txt:"Equalizer", att:"mel,weap,dmg"}, mfix: "", sfix: {txt:"Pickaxe", att:"mel,weap,dmg"}},
    {pfix: {txt:"Full", att:"via"}, mfix: " ", sfix: {txt:"Equalizer", att:"mel,weap,dmg"}},
    {pfix: {txt:"Half", att:"via"}, mfix: "-", sfix: {txt:"Zatoichi", att:"mel,weap,dmg"}},
    {pfix: {txt:"Disciplinary", att:"via"}, mfix: " ", sfix: {txt:"Action", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Escape", att:"via"}, mfix: " ", sfix: {txt:"Plan", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Flame", att:"flt,via,flm"}, mfix: " ", sfix: {txt:"Thrower", att:"flm,flt"}},
    {pfix: {txt:"Rain", att:"flt,via,pyr"}, mfix: "", sfix: {txt:"Blower", att:"pyr,flt"}},
    {pfix: {txt:"Nostromo", att:"flt,via"}, mfix: " ", sfix: {txt:"Napalmer", att:"flm,flt"}},
    {pfix: {txt:"Back", att:"flt,via,bak"}, mfix: "", sfix: {txt:"Burner", att:"flt,flm"}},
    {pfix: {txt:"De", att:"flt,via,neg"}, mfix: "", sfix: {txt:"Greaser", att:"flt,flm,via"}},
    {pfix: {txt:"Phlogiston", att:"flt,bar,via,flm,nuk"}, mfix: " ", sfix: {txt:"Degreaser", att:"flt,flm"}},
    {pfix: {txt:"Dragon", att:"via,flm,flt"}, mfix: "'s ", sfix: {txt:"Fury", att:"via,flt"}},
    {pfix: {txt:"Shot", att:"shot,gun,weap,dmg"}, mfix: "", sfix: {txt:"Gun", att:"gun,weap,dmg"}},
    {pfix: {txt:"Reserve", att:"via"}, mfix: " ", sfix: {txt:"Shooter", att:"gun,weap,dmg"}},
    {pfix: {txt:"Flare", att:"flg,flm,gun,weap,dmg,prj"}, mfix: " ", sfix: {txt:"Gun", att:"flg,gun,weap,dmg"}},
    {pfix: {txt:"Flame", att:"flm,via,flg"}, mfix: " ", sfix: {txt:"Detonator", att:"flg,prj,flm,gun,weap,dmg,exp"}},
    {pfix: {txt:"Man", att:"via"}, mfix: "", sfix: {txt:"Melter", att:"prj,gun,weap,dmg,flm,nuk,via"}},
    {pfix: {txt:"Scorch", att:"flg,flm"}, mfix: " ", sfix: {txt:"Shot", att:"prj,gun,weap,dmg,flm"}},
    {pfix: {txt:"Panic", att:"via"}, mfix: " ", sfix: {txt:"Attack", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Thermal", att:"flm,via,bar"}, mfix: " ", sfix: {txt:"Thruster", att:"bkp,bar,flm,bar"}},
    {pfix: {txt:"Gas", att:"jar,thr"}, mfix: " ", sfix: {txt:"Passer", att:"prj,thr,flm,via,bar"}},
    {pfix: {txt:"Fire", att:"flm"}, mfix: "", sfix: {txt:"Axe", att:"mel,weap,dmg"}},
    {pfix: {txt:"Lolli", att:"pyr,via"}, mfix: "", sfix: {txt:"Chop", att:"mel,weap,dmg,pyr"}},
    {pfix: {txt:"Lollipop", att:"pyr,via"}, mfix: "", sfix: {txt:"Extinguisher", att:"via"}},
    {pfix: {txt:"Postal", att:"via"}, mfix: " ", sfix: {txt:"Pummeler", att:"mel,weap,dmg"}},
    {pfix: {txt:"Home", att:"via"}, mfix: "", sfix: {txt:"Wrecker", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Solar", att:"via"}, mfix: "'s ", sfix: {txt:"Maul", att:"mel,weap,dmg"}},
    {pfix: {txt:"Power", att:"via"}, mfix: "", sfix: {txt:"Jack", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Back", att:"via,bak"}, mfix: " ", sfix: {txt:"Scratcher", att:"mel,weap,dmg"}},
    {pfix: {txt:"Sharpened Volcano", att:"mel,weap,dmg,flm"}, mfix: " ", sfix: {txt:"Fragment", att:"mel,weap,dmg,flm,via"}},
    {pfix: {txt:"Scorcher", att:"flm,via"}, mfix: "'s ", sfix: {txt:"Volcano Fragment", att:"mel,weap,dmg,flm"}},
    {pfix: {txt:"Third", att:"via"}, mfix: " ", sfix: {txt:"Degree", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Neon", att:"via"}, mfix: " ", sfix: {txt:"Annihilator", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Hot", att:"via,flm,hum"}, mfix: " ", sfix: {txt:"Hand", att:"hum,mel,weap,dmg"}},
    {pfix: {txt:"Grenade", att:"via,exp,grd,weap,dmg"}, mfix: " ", sfix: {txt:"Launcher", att:"exp,grd,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Loch", att:"via,grd,weap,dmg"}, mfix: "-n-", sfix: {txt:"Load", att:"exp,grd,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Ali Baba", att:"via"}, mfix: "'s ", sfix: {txt:"Wee Booties", att:"bkp,boot"}},
    {pfix: {txt:"Scotland", att:"via"}, mfix: "'s Wee ", sfix: {txt:"Booties", att:"bkp,boot"}},
    {pfix: {txt:"Boot", att:"boot"}, mfix: "", sfix: {txt:"Legger", att:"bkp,boot"}},
    {pfix: {txt:"B.A.S.E.", att:"bkp,bar"}, mfix: " ", sfix: {txt:"Jumper", att:"bkp,bar"}},
    {pfix: {txt:"Loose", att:"via,grd,weap,dmg"}, mfix: " ", sfix: {txt:"Cannon", att:"exp,grd,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Iron", att:"via,grd,weap,dmg"}, mfix: " ", sfix: {txt:"Bomber", att:"exp,grd,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Stickybomb", att:"exp,stk,weap,dmg"}, mfix: " ", sfix: {txt:"Launcher", att:"exp,stk,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Quickie", att:"via,stk,weap,dmg"}, mfix: "", sfix: {txt:"Bomb", att:"exp,stk,weap,dmg,gun,weap,dmg,prj,via"}},
    {pfix: {txt:"Scottish", att:"via,stk,weap,dmg"}, mfix: " ", sfix: {txt:"Resistance", att:"exp,stk,weap,dmg,gun,weap,dmg,prj,via"}},
    {pfix: {txt:"Chargin'", att:"chr"}, mfix: " ", sfix: {txt:"Targe", att:"bkp,bar,chr"}},
    {pfix: {txt:"Sticky", att:"via,stk,weap,dmg"}, mfix: " ", sfix: {txt:"Jumper", att:"exp,stk,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Splendid", att:"via"}, mfix: " ", sfix: {txt:"Screen", att:"bkp,bar,chr"}},
    {pfix: {txt:"Tide", att:"via"}, mfix: " ", sfix: {txt:"Turner", att:"bkp,bar,chr"}},
    {pfix: {txt:"Quickiebomb", att:"exp,stk,weap,dmg,prj"}, mfix: " ", sfix: {txt:"Launcher", att:"exp,stk,weap,dmg,gun,weap,dmg,prj"}},
    {pfix: {txt:"Bottle", att:"mel,weap,dmg"}, mfix: " ", sfix: {txt:"Bottle", att:"mel,weap,dmg"}},
    {pfix: {txt:"Scottish", att:"via"}, mfix: " ", sfix: {txt:"Handshake", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Hand", att:"mel,weap,dmg,via"}, mfix: "'s ", sfix: {txt:"Shake", att:"mel,weap,dmg,via,con,edb"}},
    {pfix: {txt:"Long", att:"via"}, mfix: "", sfix: {txt:"Sword", att:"mel,weap,dmg"}},
    {pfix: {txt:"Eye", att:"via"}, mfix: "", sfix: {txt:"Lander", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Horsemann", att:"via"}, mfix: "'s ", sfix: {txt:"Headtaker", att:"mel,weap,dmg"}},
    {pfix: {txt:"Nessie", att:"via"}, mfix: "'s Nine ", sfix: {txt:"Iron", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Scottsman", att:"via"}, mfix: "'s ", sfix: {txt:"Skullcutter", att:"mel,weap,dmg"}},
    {pfix: {txt:"Skull", att:"via"}, mfix: "", sfix: {txt:"Cutter", att:"mel,weap,dmg"}},
    {pfix: {txt:"Pain", att:"via"}, mfix: " ", sfix: {txt:"Train", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Ullapool", att:"via"}, mfix: " ", sfix: {txt:"Caber", att:"mel,weap,dmg"}},
    {pfix: {txt:"Claidheamh", att:"via"}, mfix: " ", sfix: {txt:"Mòr", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Half", att:"via"}, mfix: "-", sfix: {txt:"Zatoichi", att:"mel,weap,dmg"}},
    {pfix: {txt:"Persian", att:"via"}, mfix: " ", sfix: {txt:"Persuader", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Mini", att:"via,min"}, mfix: "", sfix: {txt:"Gun", att:"gun,weap,dmg,min"}},
    {pfix: {txt:"Iron", att:"via,min"}, mfix: " ", sfix: {txt:"Curtain", att:"gun,weap,dmg,min,via"}},
    {pfix: {txt:"Natascha", att:"via"}, mfix: "'s ", sfix: {txt:"Natascha", att:"gun,weap,dmg,min"}},
    {pfix: {txt:"Brass", att:"via"}, mfix: " ", sfix: {txt:"Beast", att:"via,min"}},
    {pfix: {txt:"Tomi", att:"via,min"}, mfix: "", sfix: {txt:"Slav", att:"via,min"}},
    {pfix: {txt:"Huo-Long", att:"via,gun,weap,dmg,min"}, mfix: " ", sfix: {txt:"Heater", att:"via,min,flm"}},
    {pfix: {txt:"Shotgun", att:"shot,gun,weap,dmg"}, mfix: " ", sfix: {txt:"Shotgun", att:"shot,gun,weap,dmg"}},
    {pfix: {txt:"Family", att:"via"}, mfix: " ", sfix: {txt:"Business", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Robo", att:"via,bar"}, mfix: "-", sfix: {txt:"Sandvich", att:"thr,bar,con,edb,lch,heal"}},
    {pfix: {txt:"Fresh", att:"via,bar"}, mfix: " ", sfix: {txt:"Sandvich", att:"thr,con,edb,bar,lch,heal"}},
    {pfix: {txt:"Buffalo Steak", att:"via,edb,bar"}, mfix: " ", sfix: {txt:"Sandvich", att:"thr,bar,con,edb,lch"}},
    {pfix: {txt:"Dalokohs", att:"edb,bar"}, mfix: " ", sfix: {txt:"Bar", att:"thr,con,edb,lch,mel,weap,dmg,bar,heal"}},
    {pfix: {txt:"Fish", att:"edb,bar"}, mfix: "", sfix: {txt:"Cake", att:"thr,bar,con,edb,lch,heal"}},
    {pfix: {txt:"Panic", att:"via"}, mfix: " ", sfix: {txt:"Attack", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Second", att:"via,bar"}, mfix: " ", sfix: {txt:"Banana", att:"thr,con,bar,edb,lch,heal"}},
    {pfix: {txt:"Apoco", att:"via"}, mfix: "-", sfix: {txt:"Fists", att:"mel,weap,dmg,fst"}},
    {pfix: {txt:"Killing", att:"via"}, mfix: " Gloves of ", sfix: {txt:"Boxing", att:"mel,weap,dmg,fst"}},
    {pfix: {txt:"Gloves", att:"mel,weap,dmg"}, mfix: " of ", sfix: {txt:"Running Urgently", att:"mel,weap,dmg,fst"}},
    {pfix: {txt:"Bread", att:"via,edb"}, mfix: " ", sfix: {txt:"Bite", att:"mel,weap,dmg,fst"}},
    {pfix: {txt:"Warrior", att:"via"}, mfix: "'s ", sfix: {txt:"Spirit", att:"mel,weap,dmg,fst,via"}},
    {pfix: {txt:"Fists", att:"mel,weap,dmg"}, mfix: " of ", sfix: {txt:"Steel", att:"mel,weap,dmg,fst,via,MP"}},
    {pfix: {txt:"Eviction", att:"via"}, mfix: " ", sfix: {txt:"Notice", att:"mel,weap,dmg,fst,via"}},
    {pfix: {txt:"Holiday", att:"via"}, mfix: " ", sfix: {txt:"Punch", att:"mel,weap,dmg,fst,edb"}},
    {pfix: {txt:"Shot", att:"shot"}, mfix: "", sfix: {txt:"Gun", att:"gun,weap,dmg"}},
    {pfix: {txt:"Frontier", att:"via"}, mfix: " ", sfix: {txt:"Justice", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Widow", att:"via"}, mfix: "", sfix: {txt:"Maker", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Pomson", att:"nuk,gun,weap,dmg,shot,prj"}, mfix: "", sfix: {txt:"Pomson", att:"shot,gun,weap,dmg,nuk,prj"}},
    {pfix: {txt:"Shotgun", att:"shot,gun,weap,dmg"}, mfix: "", sfix: {txt:"6000", att:"nuk,prj,via"}},
    {pfix: {txt:"Rescue", att:"via,heal"}, mfix: " ", sfix: {txt:"Ranger", att:"shot,gun,weap,dmg,prj"}},
    {pfix: {txt:"Panic", att:"via"}, mfix: " ", sfix: {txt:"Attack", att:"shot,gun,weap,dmg,via"}},
    {pfix: {txt:"Pistol", att:"pis,gun,weap,dmg"}, mfix: "'s ", sfix: {txt:"Pistol", att:"pis,gun,weap,dmg"}},
    {pfix: {txt:"Luger", att:"pis,gun,weap,dmg"}, mfix: "", sfix: {txt:"Morph", att:"via"}},
    {pfix: {txt:"Wrangling", att:"lsr,via"}, mfix: " ", sfix: {txt:"Wrangler", att:"lsr,via"}},
    {pfix: {txt:"Laser", att:"lsr,via,nuk"}, mfix: " ", sfix: {txt:"Pointer", att:"lsr"}},
    {pfix: {txt:"Giger", att:"nuk,via"}, mfix: " ", sfix: {txt:"Counter", att:"lsr,via"}},
    {pfix: {txt:"Short", att:"via"}, mfix: " ", sfix: {txt:"Circuit", att:"gun,weap,dmg,nuk,sec"}},
    {pfix: {txt:"Golden", att:"gold,via"}, mfix: " ", sfix: {txt:"Wrench", att:"mel,weap,dmg,wrn"}},
    {pfix: {txt:"Gun", att:"gun,weap,dmg,wrn"}, mfix: "", sfix: {txt:"Slinger", att:"mel,weap,dmg,wrn,via"}},
    {pfix: {txt:"Southern", att:"via"}, mfix: " ", sfix: {txt:"Hospitality", att:"mel,weap,dmg,wrn,via"}},
    {pfix: {txt:"Fast", att:"via"}, mfix: " ", sfix: {txt:"Jag", att:"mel,weap,dmg,wrn"}},
    {pfix: {txt:"Eureka", att:"nuk,wrn,via"}, mfix: " ", sfix: {txt:"Effect", att:"wrn,mel,weap,dmg,nuk,via"}},
    {pfix: {txt:"Construction", att:"via,pda"}, mfix: " ", sfix: {txt:"PDA", att:"pda"}},
    {pfix: {txt:"Destruction", att:"via,pda"}, mfix: " ", sfix: {txt:"PDA", att:"pda"}},
    {pfix: {txt:"Syringe", att:"via,heal,prj"}, mfix: " ", sfix: {txt:"Gun", att:"gun,weap,dmg,prj"}},
    {pfix: {txt:"Blutsauger", att:"gun,weap,dmg,prj"}, mfix: "", sfix: {txt:"Blutsauger", att:"gun,weap,dmg,prj"}},
    {pfix: {txt:"Crusader", att:"bow,via"}, mfix: "'s ", sfix: {txt:"Crossbow", att:"prj,heal,bow"}},
    {pfix: {txt:"Over", att:"via,bar"}, mfix: "", sfix: {txt:"Dose", att:"heal,gun,weap,dmg,prj,via"}},
    {pfix: {txt:"Medi", att:"heal,med,bar"}, mfix: " ", sfix: {txt:"Gun", att:"heal,med,gun,weap,dmg,bar"}},
    {pfix: {txt:"Kritz", att:"via,bar"}, mfix: "", sfix: {txt:"Krieg", att:"heal,gun,weap,dmg,via,bar"}},
    {pfix: {txt:"Quick", att:"via,bar"}, mfix: "-", sfix: {txt:"Fix", att:"heal,med,gun,weap,dmg,via,bar"}},
    {pfix: {txt:"Vaccinating", att:"heal,med"}, mfix: " ", sfix: {txt:"Vaccinator", att:"heal,med,bar,gun,weap,dmg"}},
    {pfix: {txt:"Bone", att:"via"}, mfix: "", sfix: {txt:"Saw", att:"mel,weap,dmg"}},
    {pfix: {txt:"Uber", att:"via,heal,bar"}, mfix: "", sfix: {txt:"Saw", att:"mel,weap,dmg"}},
    {pfix: {txt:"Vita", att:"via,heal"}, mfix: "-", sfix: {txt:"Saw", att:"mel,weap,dmg"}},
    {pfix: {txt:"Amputating", att:"mel,weap,dmg"}, mfix: " ", sfix: {txt:"Amputator", att:"mel,weap,dmg"}},
    {pfix: {txt:"Solemn", att:"via"}, mfix: " ", sfix: {txt:"Vow", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Sniper", att:"rfl,gun,weap,dmg"}, mfix: " ", sfix: {txt:"Rifle", att:"rfl,gun,weap,dmg"}},
    {pfix: {txt:"AWPer", att:"rfl,gun,weap,dmg"}, mfix: " ", sfix: {txt:"Hand", att:"rfl,gun,weap,dmg,via"}},
    {pfix: {txt:"Hunt", att:"via"}, mfix: "s", sfix: {txt:"Man", att:"prj,bow,via"}},
    {pfix: {txt:"Fortified", att:"via"}, mfix: " ", sfix: {txt:"Compound", att:"prj,bow,via"}},
    {pfix: {txt:"Sydney", att:"via"}, mfix: " ", sfix: {txt:"Sleeper", att:"rfl,jar,via,gun,weap,dmg"}},
    {pfix: {txt:"Bazaar", att:"via"}, mfix: " ", sfix: {txt:"Bargain", att:"rfl,gun,weap,dmg,via"}},
    {pfix: {txt:"Sniper", att:"via,gun,weap,dmg"}, mfix: "'s ", sfix: {txt:"Machina", att:"rfl,gun,weap,dmg"}},
    {pfix: {txt:"Shooting", att:"gun,weap,dmg"}, mfix: " ", sfix: {txt:"Star", att:"rfl,gun,weap,dmg,nuk"}},
    {pfix: {txt:"Classic", att:"via"}, mfix: " ", sfix: {txt:"Classic", att:"rfl,gun,weap,dmg"}},
    {pfix: {txt:"Submachine", att:"smg,gun,weap,dmg"}, mfix: " ", sfix: {txt:"SMG", att:"smg,gun,weap,dmg"}},
    {pfix: {txt:"Cleaner", att:"via,smg"}, mfix: "'s ", sfix: {txt:"Carbine", att:"smg,gun,weap,dmg,via"}},
    {pfix: {txt:"Jarate", att:"jar,thr,con,bar,prj"}, mfix: " ", sfix: {txt:"Jarate", att:"jar,bar,thr,con,prj"}},
    {pfix: {txt:"Jar", att:"jar,bar,thr"}, mfix: "-Based ", sfix: {txt:"Karate", att:"jar,bar,thr,con,prj,via,thn,weap,dmg"}},
    {pfix: {txt:"Self-Aware", att:"via,bar"}, mfix: " ", sfix: {txt:"Beauty Mark", att:"jar,bar,thr,con,prj,via"}},
    {pfix: {txt:"Beauty", att:"via,bar"}, mfix: " ", sfix: {txt:"Mark", att:"edb,bar,via"}},
    {pfix: {txt:"Razor", att:"via,mel,weap,dmg"}, mfix: "", sfix: {txt:"Back", att:"bkp,via"}},
    {pfix: {txt:"Darwin", att:"via"}, mfix: "'s ", sfix: {txt:"Danger Shield", att:"bkp"}},
    {pfix: {txt:"Cozy", att:"via"}, mfix: " ", sfix: {txt:"Camper", att:"bkp"}},
    {pfix: {txt:"Kukri", att:"mel,weap,dmg"}, mfix: " ", sfix: {txt:"Kukri", att:"mel,weap,dmg"}},
    {pfix: {txt:"Tribalman", att:"via"}, mfix: "'s ", sfix: {txt:"Shiv", att:"mel,weap,dmg"}},
    {pfix: {txt:"Bush", att:"via"}, mfix: "", sfix: {txt:"Wacka", att:"mel,weap,dmg"}},
    {pfix: {txt:"Bleeding", att:"via,neg"}, mfix: " ", sfix: {txt:"Shahanshah", att:"mel,weap,dmg"}},
    {pfix: {txt:"Disguise", att:"kit"}, mfix: " ", sfix: {txt:"Kit", att:"pda,kit"}},
    {pfix: {txt:"Revolving", att:"via,pis"}, mfix: " ", sfix: {txt:"Revolver", att:"gun,weap,dmg,pis"}},
    {pfix: {txt:"Big", att:"via"}, mfix: " ", sfix: {txt:"Kill", att:"gun,weap,dmg,via,pis"}},
    {pfix: {txt:"Your", att:"via"}, mfix: " Eternal ", sfix: {txt:"Ambassador", att:"gun,weap,dmg,via,pis"}},
    {pfix: {txt:"L'Et", att:"via,pis"}, mfix: "", sfix: {txt:"Ranger", att:"gun,weap,dmg"}},
    {pfix: {txt:"Enforcing", att:"via"}, mfix: " ", sfix: {txt:"Enforcer", att:"gun,weap,dmg,via,pis"}},
    {pfix: {txt:"Diamond", att:"via"}, mfix: "", sfix: {txt:"Back", att:"gun,weap,dmg,via,pis"}},
    {pfix: {txt:"Butterfly", att:"via,bak,knf"}, mfix: " ", sfix: {txt:"Knife", att:"mel,weap,dmg,bak,knf"}},
    {pfix: {txt:"Sharp", att:"mel,weap,dmg,knf"}, mfix: " ", sfix: {txt:"Dresser", att:"mel,weap,dmg,knf"}},
    {pfix: {txt:"Black", att:"via,bak,knf"}, mfix: " ", sfix: {txt:"Rose", att:"mel,weap,dmg,via,knf"}},
    {pfix: {txt:"Your Eternal", att:"via,knf"}, mfix: " ", sfix: {txt:"Reward", att:"mel,weap,dmg,via,knf"}},
    {pfix: {txt:"Wanga", att:"via,knf"}, mfix: " ", sfix: {txt:"Prick", att:"mel,weap,dmg,knf"}},
    {pfix: {txt:"Conniver", att:"via,knf"}, mfix: "'s ", sfix: {txt:"Kunai", att:"mel,weap,dmg,knf"}},
    {pfix: {txt:"Big", att:"via"}, mfix: " ", sfix: {txt:"Earner", att:"mel,weap,dmg,via,knf"}},
    {pfix: {txt:"Spy", att:"via,knf"}, mfix: "-", sfix: {txt:"Cicle", att:"mel,weap,dmg,ice,knf"}},
    {pfix: {txt:"Sentry", att:"pda,gun,weap,dmg"}, mfix: " ", sfix: {txt:"Sapper", att:"pda,sap"}},
    {pfix: {txt:"Snack", att:"edb"}, mfix: " ", sfix: {txt:"Attack", att:"pda,sap,edb,via"}},
    {pfix: {txt:"Red-Tape", att:"pda,sap"}, mfix: " ", sfix: {txt:"Recorder", att:"pda,sap"}},
    {pfix: {txt:"Red", att:"via"}, mfix: "-Tape ", sfix: {txt:"Recorder", att:"pda,sap"}},
    {pfix: {txt:"Ap", att:"via"}, mfix: "-", sfix: {txt:"Sap", att:"pda,sap"}},
    {pfix: {txt:"Invis", att:"clk,bar,via"}, mfix: " ", sfix: {txt:"Watch", att:"clk,bar"}},
    {pfix: {txt:"Enthusiast", att:"via,bar"}, mfix: "'s ", sfix: {txt:"Timepiece", att:"clk,bar"}},
    {pfix: {txt:"Quacken", att:"clk,via,bar"}, mfix: "", sfix: {txt:"Birdt", att:"clk,via,bar"}},
    {pfix: {txt:"Cloak", att:"clk,bar"}, mfix: " and ", sfix: {txt:"Dagger", att:"clk,via,mel,weap,dmg,bar"}},
    {pfix: {txt:"Dead", att:"via,clk,bar"}, mfix: " ", sfix: {txt:"Ringer", att:"clk,bar"}},
    {pfix: {txt:"Golden", att:"gold,via"}, mfix: " ", sfix: {txt:"Saxton", att:"mel,weap,dmg,gold,via"}},
    {pfix: {txt:"Saxxy", att:"mel,weap,dmg,gold,via"}, mfix: " of ", sfix: {txt:"Gold", att:"gold,via"}},
    {pfix: {txt:"Frying", att:"via,mel,weap,dmg"}, mfix: " ", sfix: {txt:"Pan", att:"mel,weap,dmg"}},
    {pfix: {txt:"Conscientious", att:"via"}, mfix: " ", sfix: {txt:"Objector", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Freedom", att:"via"}, mfix: " ", sfix: {txt:"Staff", att:"mel,weap,dmg"}},
    {pfix: {txt:"Bat", att:"mel,weap,dmg"}, mfix: " Outta ", sfix: {txt:"Hell", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Hell", att:"via"}, mfix: " ", sfix: {txt:"Outta Hell", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Memory", att:"via"}, mfix: " ", sfix: {txt:"Maker", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Ham", att:"edb,via"}, mfix: " ", sfix: {txt:"Shank", att:"mel,weap,dmg"}},
    {pfix: {txt:"Necro", att:"via"}, mfix: " ", sfix: {txt:"Smasher", att:"mel,weap,dmg"}},
    {pfix: {txt:"Crossing", att:"via"}, mfix: " ", sfix: {txt:"Guard", att:"mel,weap,dmg,via"}},
    {pfix: {txt:"Prinny", att:"via"}, mfix: " ", sfix: {txt:"Machete", att:"mel,weap,dmg"}},
    {pfix: {txt:"Fox", att:"via"}, mfix: "", sfix: {txt:"Fire", att:"flm,via"}}, // friend requested 'fox' to be in here
    {pfix: {txt:"Fire", att:"flm,via"}, mfix: "", sfix: {txt:"Fox", att:"via"}},
    {pfix: {txt:"Short-Term", att:"via"}, mfix: " ", sfix: {txt:"Solution", att:"via,weap"}},
    {pfix: {txt:"Solid", att:"via"}, mfix: " ", sfix: {txt:"Slugger", att:"via,weap"}},
    {pfix: {txt:"Shotgun", att:"via,shot,gun,weap"}, mfix: " ", sfix: {txt:"Bride", att:"via,weap"}},
    {pfix: {txt:"Nail", att:"weap,nail,gun"}, mfix: "", sfix: {txt:"Gun", att:"nail,gun"}},
    {pfix: {txt:"Pseudo", att:"via"}, mfix: "", sfix: {txt:"Nailgun", att:"nail,gun,weap"}},
    {pfix: {txt:"Six Point", att:"weap"}, mfix: " ", sfix: {txt:"Shuriken", att:"thn,thr,weap,dmg"}},
    {pfix: {txt:"Six", att:"via"}, mfix: " Point ", sfix: {txt:"Shuriken", att:"thn,thr,weap,dmg"}},
    {pfix: {txt:"Tiki", att:"via,col"}, mfix: " ", sfix: {txt:"Tonic", att:"col,edb,con,nuk,bar"}},
    {pfix: {txt:"Silent", att:"via"}, mfix: " ", sfix: {txt:"Slicer", att:"mel,weap,dmg"}},
    {pfix: {txt:"Slugger", att:"via,mel,weap"}, mfix: "'s ", sfix: {txt:"Face-Off", att:"weap,dmg"}},
    {pfix: {txt:"Lead", att:"via"}, mfix: " ", sfix: {txt:"Pipe", att:"mel,weap"}},
    {pfix: {txt:"Battering", att:"weap,dmg"}, mfix: " ", sfix: {txt:"Cannon", att:"rkt,gun,weap,exp"}},
    {pfix: {txt:"Following", att:"via"}, mfix: " ", sfix: {txt:"Follower", att:"via"}},
    {pfix: {txt:"Dragon", att:"via"}, mfix: " ", sfix: {txt:"Hunter", att:"weap,via"}},
    {pfix: {txt:"Trench", att:"via"}, mfix: " ", sfix: {txt:"Buster", att:"weap,via"}},
    {pfix: {txt:"Chains", att:"shot,gun,weap"}, mfix: " of ", sfix: {txt:"Command", att:"via"}},
    {pfix: {txt:"Firkin", att:"via"}, mfix: " ", sfix: {txt:"Flamer", att:"flt,flm,weap"}},
    {pfix: {txt:"Cale", att:"via,flt,weap"}, mfix: "", sfix: {txt:"Factor", att:"via,flt,weap"}},
    {pfix: {txt:"Brittle", att:"via,flg,gun,weap,flm"}, mfix: " ", sfix: {txt:"Pistol", att:"via,flg,pis,weap,flm"}},
    {pfix: {txt:"Split", att:"via,flg,gun,weap,flm"}, mfix: "", sfix: {txt:"Fire", att:"via,flg,pis,weap,flm"}},
    {pfix: {txt:"Sharp", att:"mel,weap"}, mfix: " ", sfix: {txt:"Shooter", att:"shot,gun,weap"}},
    {pfix: {txt:"Baleful", att:"via,mel,weap"}, mfix: " ", sfix: {txt:"Beacon", att:"via,mel,weap"}},
    {pfix: {txt:"Ice", att:"ice,via"}, mfix: " ", sfix: {txt:"Breaker", att:"via,mel,weap"}},
    {pfix: {txt:"Battering", att:"mel,weap"}, mfix: " ", sfix: {txt:"Bronco", att:"via"}},
    {pfix: {txt:"Endless", att:"via"}, mfix: " ", sfix: {txt:"Carnage", att:"weap"}},
    {pfix: {txt:"Glasgow", att:"via"}, mfix: " ", sfix: {txt:"Greaves", att:"boot"}},
    {pfix: {txt:"Drunkard", att:"via"}, mfix: "'s ", sfix: {txt:"Wrath", att:"weap,via"}},
    {pfix: {txt:"Iron", att:"via"}, mfix: " ", sfix: {txt:"Boarder", att:"via,grd,weap,exp"}},
    {pfix: {txt:"Steadfast", att:"via"}, mfix: " ", sfix: {txt:"Blast", att:"exp"}},
    {pfix: {txt:"Hand-Held", att:"via"}, mfix: " ", sfix: {txt:"Howitzer", att:"grd,gun,exp,weap"}},
    {pfix: {txt:"Mine", att:"stk,exp,weap,gun"}, mfix: " ", sfix: {txt:"Layer", att:"stk,exp,weap,gun"}},
    {pfix: {txt:"Big", att:"via"}, mfix: " ", sfix: {txt:"Man", att:"via,stk,exp,weap,gun"}},
    {pfix: {txt:"Ground", att:"via"}, mfix: "", sfix: {txt:"Breaker", att:"via,stk,exp,weap,gun,mel"}},
    {pfix: {txt:"Scottish", att:"via"}, mfix: " ", sfix: {txt:"Wargear", att:"chr,bar"}},
    {pfix: {txt:"Vanguard", att:"via,chr,bar"}, mfix: " ", sfix: {txt:"Vanguard", att:"via,chr,bar"}},
    {pfix: {txt:"Assault", att:"weap,via"}, mfix: " ", sfix: {txt:"Ram", att:"weap,via,chr,bar,mel"}},
    {pfix: {txt:"Battering", att:"weap,mel"}, mfix: " ", sfix: {txt:"Ram", att:"weap,via,chr,bar,mel"}},
    {pfix: {txt:"Landlubber", att:"via,chr"}, mfix: "'s ", sfix: {txt:"Landmine", att:"chr,exp,dmg,bar"}},
    {pfix: {txt:"Dual", att:"via"}, mfix: " ", sfix: {txt:"Dullahan", att:"mel"}},
    {pfix: {txt:"Bio", att:"via"}, mfix: " ", sfix: {txt:"Breaker", att:"min,via,gun,mel,weap"}},
    {pfix: {txt:"Graphite", att:"via"}, mfix: " ", sfix: {txt:"Perisher", att:"min,via,gun,mel,weap"}},
    {pfix: {txt:"Ququmannz", att:"via,min"}, mfix: "'s ", sfix: {txt:"Wrath", att:"min,via,gun,mel,weap"}},
    {pfix: {txt:"Gingerbread", att:"lch,con,thr,bar"}, mfix: " ", sfix: {txt:"Mann", att:"via,lch,con,thr,bar"}},
    {pfix: {txt:"Cosmic", att:"lch,con,thr,bar,nuk,via"}, mfix: " ", sfix: {txt:"Cuisine", att:"lch,con,thr,bar"}},
    {pfix: {txt:"Full", att:"via,shot"}, mfix: " ", sfix: {txt:"Throttle", att:"via,shot,weap"}},
    {pfix: {txt:"Sub", att:"via,shot"}, mfix: "-", sfix: {txt:"Sandvich", att:"lch,con,thr,bar"}},
    {pfix: {txt:"Hydraulic", att:"via,mel"}, mfix: " ", sfix: {txt:"Hammer", att:"mel,weap"}},
    {pfix: {txt:"Jaws", att:"via,mel"}, mfix: " of ", sfix: {txt:"Steel", att:"via,mel"}},
    {pfix: {txt:"Terminal", att:"via,mel"}, mfix: " ", sfix: {txt:"Killocity", att:"via,mel"}},
    {pfix: {txt:"Lakeside", att:"via,shot"}, mfix: " ", sfix: {txt:"Pride", att:"via,shot,gun,weap"}},
    {pfix: {txt:"Signal", att:"lsr"}, mfix: " ", sfix: {txt:"Booster", att:"via,lsr"}},
    {pfix: {txt:"Swifty", att:"via,lsr"}, mfix: " ", sfix: {txt:"Swiper", att:"via,lsr"}},
    {pfix: {txt:"Gamma", att:"via,lsr,nuk"}, mfix: " ", sfix: {txt:"Gazer", att:"via,lsr"}},
    {pfix: {txt:"Welder", att:"via,weap"}, mfix: "'s ", sfix: {txt:"Gun", att:"gun,weap,pis"}},
    {pfix: {txt:"Jupiter", att:"via"}, mfix: "'s ", sfix: {txt:"Jupiter", att:"via,gun,weap"}},
    {pfix: {txt:"Magnetic", att:"via,wrn,mel"}, mfix: " ", sfix: {txt:"Horseshoe", att:"via,wrn,mel"}},
    {pfix: {txt:"Master", att:"via,wrn,mel"}, mfix: "", sfix: {txt:"Key", att:"via,wrn,mel"}},
    {pfix: {txt:"Medical", att:"via,heal"}, mfix: " ", sfix: {txt:"Lancer", att:"mel,weap"}},
    {pfix: {txt:"Diagnostic", att:"via,heal"}, mfix: " ", sfix: {txt:"Killer", att:"weap,gun,mel"}},
    {pfix: {txt:"Maniac", att:"via"}, mfix: "'s ", sfix: {txt:"Interfector", att:"weap,gun,mel"}},
    {pfix: {txt:"Maschienen", att:"via"}, mfix: "", sfix: {txt:"Pistole", att:"gun,pis,weap"}},
    {pfix: {txt:"Geneva", att:"via,pis,gun,weap"}, mfix: " ", sfix: {txt:"Protokill", att:"gun,pis,weap"}},
    {pfix: {txt:"Booster", att:"via,heal,med"}, mfix: " ", sfix: {txt:"Shot", att:"med,heal"}},
    {pfix: {txt:"Blitz", att:"via,heal,med"}, mfix: "", sfix: {txt:"Storm", att:"med,heal,via"}},
    {pfix: {txt:"Hydro", att:"via,heal,med"}, mfix: " ", sfix: {txt:"Pump", att:"med,heal,via"}},
    {pfix: {txt:"Hypodermic", att:"via,mel"}, mfix: " ", sfix: {txt:"Injector", att:"mel,heal,via"}},
    {pfix: {txt:"Astral", att:"via,bow,nuk"}, mfix: " ", sfix: {txt:"Assassin", att:"weap,bow,nuk"}},
    {pfix: {txt:"Care", att:"via,gun,rfl,weap,heal"}, mfix: "", sfix: {txt:"Taker", att:"via,gun,rfl,weap"}},
    {pfix: {txt:"Didgerido", att:"via,gun,rfl,weap"}, mfix: "", sfix: {txt:"Doom", att:"via,gun,rfl,weap"}},
    {pfix: {txt:"Urine", att:"jar,bkp,buff"}, mfix: " ", sfix: {txt:"Trouble", att:"jar,bkp,buff,via"}},
    {pfix: {txt:"Brief", att:"via,smg,gun,weap"}, mfix: " ", sfix: {txt:"Negotiator", att:"via,smg,gun,weap"}},
    {pfix: {txt:"Lil'", att:"via,smg,gun,weap"}, mfix: " ", sfix: {txt:"Mate", att:"via,smg,gun,weap"}},
    {pfix: {txt:"Melf", att:"jar,via,thr"}, mfix: "'s Magic ", sfix: {txt:"Potion", att:"jar,thr"}},
    {pfix: {txt:"Heat", att:"mel,flm,via"}, mfix: " ", sfix: {txt:"Wave", att:"mel,flm,via"}},
    {pfix: {txt:"Hewer", att:"mel,via"}, mfix: "'s ", sfix: {txt:"Hatchet", att:"mel,via"}},
    {pfix: {txt:"French", att:"pis,gun,weap,via"}, mfix: " ", sfix: {txt:"Resolution", att:"pis,gun,weap,via"}},
    {pfix: {txt:"Victor", att:"pis,gun,weap,via,nuk"}, mfix: "-", sfix: {txt:"Ion", att:"pis,gun,weap,via,nuk"}},
    {pfix: {txt:"Infectious", att:"knf,weap,mel,via"}, mfix: "-", sfix: {txt:"Infection", att:"knf,weap,mel,via"}},
    {pfix: {txt:"Inside", att:"knf,weap,mel,via"}, mfix: " ", sfix: {txt:"Jab", att:"knf,weap,mel"}},
    {pfix: {txt:"Mann", att:"knf,weap,mel,via"}, mfix: "-", sfix: {txt:"Slaugher", att:"knf,weap,mel,via"}},
    {pfix: {txt:"Intermission", att:"via,sap"}, mfix: " ", sfix: {txt:"Intermission", att:"via,sap"}},
    {pfix: {txt:"Timely", att:"via,sap"}, mfix: " ", sfix: {txt:"Demise", att:"weap,sap"}},
    {pfix: {txt:"Subjugated", att:"via,sap"}, mfix: " ", sfix: {txt:"Sabotuer", att:"sap"}},
    {pfix: {txt:"Raiding", att:"via,shot,gun,weap"}, mfix: " ", sfix: {txt:"Aid", att:"via,shot,gun,heal,weap"}},
    {pfix: {txt:"Short", att:"via,shot,gun,weap"}, mfix: " ", sfix: {txt:"Round", att:"via,shot,gun,weap"}},
    {pfix: {txt:"Pump", att:"via,shot,gun,weap"}, mfix: " ", sfix: {txt:"Shot", att:"via,shot,gun,weap"}},
    {pfix: {txt:"Crate", att:"mel"}, mfix: " ", sfix: {txt:"Smasher", att:"mel"}},
    {pfix: {txt:"Merasmus", att:"mel,via"}, mfix: "'s ", sfix: {txt:"Staff", att:"mel"}},
    {pfix: {txt:"Jackal", att:"mel,via"}, mfix: "'s ", sfix: {txt:"Beating Stick", att:"mel"}},


    
]};
/* legend
 * **r: random of 2 choices
 * **fx: random effect
 * **st: state(on wearer, while active, etc.)
 * **key: keybind
 */
const stats = {
    d: [
        {tx: "+#% faster firing speed", id: 1, rq: "weap", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% slower firing speed", id: 1, rq: "weap", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+#% bullets per shot", id: 2, rq: "shot", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% bullets per shot", id: 2, rq: "shot", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% damage penalty", id: 3, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+#% damage bonus", id: 3, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% clip size", id: 4, rq: "gun", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% clip size", id: 4, rq: "gun", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+#% push force taken from damage and airblast", id: 5, rq: "", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% push force taken from damage and airblast", id: 5, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "#% faster reload time", id: 6, rq: "gun", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "#% slower reload time", id: 6, rq: "gun", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "#% faster move speed **st", id: 7, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"pos"},
        {tx: "#% slower move speed **st", id: 7, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"neg"},
        {tx: "#% less accurate", id: 8, rq: "shot", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "#% more accurate", id: 8, rq: "shot", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% greater jump height", id: 9, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% smaller jump height", id: 9, rq: "", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Gain up to +# health", id: 10, rq: "", ad: "NUM,HEAL,EVNT", cl:"pos"},
        {tx: "+#% max health **st", id: 11, rq: "", ad: "NUM,BUFF,STAT", cl:"pos"},
        {tx: "-#% max health **st", id: 11, rq: "", ad: "NUM,BUFF,STAT", cl:"neg"},
        {tx: "A small health pack is dropped", id: 12, rq: "via", ad: "HEAL,EVNT", cl:"pos"},
        {tx: "+#% explosive damage vulnerability", id: 13, rq: "via", ad: "NUM,BUF,UNI", cl:"neg"},
        {tx: "+#% explosive damage resistance", id: 13, rq: "via", ad: "NUM,BUF,UNI", cl:"pos"},
        {tx: "**fxp for #T seconds", id: 14, rq: "", ad: "EVNT", cl:"?"},
        {tx: "Hit yourself. Idiot.", id: 15, rq: "mel", ad: "EVNT", cl:"neg"},
        {tx: "100% critical hits vs burning players", id: 16, rq: "", ad: "BUFF,UNI", cl:"pos"},
        {tx: "100% mini-crits vs burning players", id: 16, rq: "", ad: "BUFF,UNI", cl:"pos"},
        {tx: "+#% fire damage resistance", id: 17, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% fire damage vulnerability", id: 17, rq: "", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "One target at a time is Marked-For-Death, causing all damage taken to be mini-crits", id: 18, rq: "weap", ad: "EVNT", cl:"neu"},
        {tx: "+#% crit chance", id: 19, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% crit chance", id: 19, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Deploys #% faster", id: 20, rq: "weap", ad: "NUM,WEAP,UNI", cl:"pos"},
        {tx: "Deploys #% slower", id: 20, rq: "weap", ad: "NUM,WEAP,UNI", cl:"neg"},
        {tx: "+#% damage vs players", id: 21, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% damage vs players", id: 21, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "#% increase in meter recharge rate", id: 22, rq: "bar", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "#% decrease in meter recharge rate", id: 22, rq: "bar", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+#% projectile speed", id: 23, rq: "prj", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% explosion radius", id: 24, rq: "exp", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% projectile speed", id: 23, rq: "prj", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% explosion radius", id: 24, rq: "exp", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Gain up to +# health per attack", id: 25, rq: "dmg", ad: "NUM,EVNT,UNI", cl:"pos"},
        {tx: "Lose up to -# health per attack", id: 25, rq: "dmg", ad: "NUM,EVNT,UNI", cl:"neg"},
        {tx: "+#% max primary ammo", id: 26, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% max primary ammo", id: 26, rq: "", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+##% max primary ammo", id: 26, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "No self-inflicted blast damage taken", id: 27, rq: "exp", ad: "UNI", cl:"pos"},
        {tx: "+#% self-inflicted blast damage", id: 28, rq: "exp", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% self-inflicted blast damage", id: 28, rq: "exp", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "Does not require ammo", id: 29, rq: "nuk,gun", ad: "UNI", cl:"pos"},
        {tx: "Deals only #% damage to buildings", id: 30, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Mini-crits whenever it would normally crit", id: 31, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neu"},
        {tx: "Crits whenever it would normally mini-crit", id: 32, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "+# degrees random projectile deviation", id: 33, rq: "prj", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "No ammo from dispensers **st", id: 34, rq: "", ad: "STAT", cl:"neg"},
        {tx: "Clip size increased", id: 35, rq: "gun", ad: "EVNT", cl:"pos"},
        {tx: "Mini-crits airborne targets", id: 36, rq: "weap", ad: "STAT", cl:"pos"},
        {tx: "Crits airborne targets", id: 36, rq: "weap", ad: "STAT", cl:"pos"},
        {tx: "+## max health **st", id: 11, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"pos"},
        {tx: "+# health regenerated per second **st", id: 38, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"pos"},
        {tx: "##% increased movement control while airborne", id: 38, rq: "", ad: "NUM,STAT,UNI", cl:"pos"},
        {tx: "##% decreased movement control while airborne", id: 38, rq: "", ad: "NUM,STAT,UNI", cl:"neg"},
        {tx: "Deals #x falling damage to the player you land on", id: 39, rq: "boot", ad: "NUM,UNI", cl:"pos"},
        {tx: "Projectile penetrates enemy targets", id: 40, rq: "prj", ad: "UNI", cl:"pos"},
        {tx: "Projectile cannot be deflected", id: 41, rq: "prj", ad: "UNI", cl:"pos"},
        {tx: "Press **key key midair to deploy a parachute, slowing your descent.", id: 42, rq: "bkp", ad: "UNI", cl:"neu"},
        {tx: "Fires a fixed shot pattern", id: 43, rq: "shot", ad: "UNI", cl:"neu"},
        {tx: "Successive shots become less accurate", id: 44, rq: "shot", ad: "UNI", cl:"neg"},
        {tx: "Damage increases as the user becomes injured", id: 45, rq: "weap", ad: "STAT,UNI", cl:"pos"},
        {tx: "Damage decreases as the user becomes injured", id: 45, rq: "weap", ad: "STAT,UNI", cl:"neg"},
        {tx: "-#% less healing from Medic sources", id: 46, rq: "", ad: "STAT,UNI", cl:"neg"},
        {tx: "+#% more healing from Medic sources", id: 46, rq: "", ad: "STAT,UNI", cl:"pos"},
        {tx: "+# capture rate **st", id: 47, rq: "", ad: "STAT,UNI", cl:"pos"},
        {tx: "User canot capture the objective", id:47, rq:"", ad:"STAT,UNI", cl:"neg"},
        {tx: "+#% bullet damage vulnerability **st", id: 48, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"neg"},
        {tx: "+#% bullet damage resistance **st", id: 48, rq: "", ad: "NUM,BUFF,STAT,UNI", cl:"pos"},
        {tx: "This weapon has a large melee range and deploys and holsters slower", id: 49, rq: "mel", ad: "UNI", cl:"neu"},
        {tx: "Gain #% of base health", id: 50, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "Lose #% of base health", id: 50, rq: "", ad: "EVNT", cl:"neg"},
        {tx: "No random critical hits", id: 51, rq: "", ad: "UNI", cl:"neg"},
        {tx: "Honorbound: Once drawn, sheathing deals ## damage to yourself unless it kills", id: 52, rq: "mel", ad: "UNI", cl:"neg"},
        {tx: "Move speed increases as the user becomes injured", id: 53, rq: "weap", ad: "UNI", cl:"pos"},
        {tx: "Move speed decreases as the user becomes injured", id: 53, rq: "weap", ad: "UNI", cl:"neg"},
        {tx: "Afterburn reduces Medi Gun healing and resists shield effects", id: 54, rq: "flm", ad: "UNI", cl:"pos"},
        {tx: "Restore #% max health", id: 55, rq: "", ad: "NUM,EVNT,UNI", cl:"pos"},
        {tx: "100% critical hits from behind", id: 56, rq: "weap", ad: "BUFF,UNI", cl:"pos"},
        {tx: "+##% airblast cost", id: 57, rq: "flt", ad: "NUM,UNI", cl:"neg"},
        {tx: "-##% airblast cost", id: 57, rq: "flt", ad: "NUM,UNI", cl:"pos"},
        {tx: "No airblast", id: 57, rq: "flt", ad: "NUM,UNI", cl:"neg"},
        {tx: "Holsters #% faster", id: 58, rq: "weap", ad: "NUM,WEAP", cl:"pos"},
        {tx: "Holsters #% slower", id: 58, rq: "weap", ad: "NUM,WEAP", cl:"neg"},
        {tx: "-#% afterburn damage penalty", id: 59, rq: "flm", ad: "NUM,BUFF", cl:"neg"},
        {tx: "+#% afterburn damage bonus", id: 59, rq: "flm", ad: "NUM,BUFF", cl:"pos"},
        {tx: "Deals ##% damage to burning players", id: 60, rq: "weap", ad: "NUM,BUFF", cl:"pos"},
        {tx: "Deals ##% damage to burning players", id: 60, rq: "flg", ad: "NUM,BUFF", cl:"pos"},
        {tx: "+#% damage to self", id: 61, rq: "flg", ad: "NUM,BUFF", cl:"neg"},
        {tx: "-#% damage to self", id: 61, rq: "flg", ad: "NUM,BUFF", cl:"pos"},
        {tx: "Extinguish teammates to gain garunteed critical hits", id: 62, rq: "", ad: "ALTFIRE", cl:"pos"},
        {tx: "Flare knocks back target on hit and explodes when it hits the ground", id: 63, rq: "flg", ad: "", cl:"neu"},
        {tx: "+#% self-damage force", id: 64, rq: "flg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% self-damage force", id: 64, rq: "flg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Launches user in the direction they are aiming", id: 65, rq: "bkp", ad: "JETPACK,ACT", cl:"neu"},
        {tx: "Spawning and resupply do not affect recharge bar", id: 66, rq: "bar", ad: "UNI", cl:"neu"},
        {tx: "Visit Pyroland", id: 67, rq: "", ad: "EVNT,STAT", cl:"pos"},
        {tx: "Mini-crits burning targets and extinguishes them", id: 68, rq: "weap", ad: "UNI", cl:"pos"},
        {tx: "Killing blows on burning players grant a speed boost", id: 69, rq: "weap", ad: "UNI", cl:"pos"},
        {tx: "+#% damage vs buildings", id: 30, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% damage vs buildings", id: 30, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Damage removes sappers", id: 70, rq: "dmg", ad: "UNI", cl:"pos"},
        {tx: "+## health restored", id: 71, rq: "", ad: "NUM,EVNT", cl:"pos"},
        {tx: "+#% health from packs **st", id: 73, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"pos"},
        {tx: "-#% health from packs **st", id: 73, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"neg"},
        {tx: "+#% health from healers **st", id: 74, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"pos"},
        {tx: "-#% health from healers **st", id: 74, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"neg"},
        {tx: "Target is engulfed in flames", id: 75, rq: "flm", ad: "EVNT", cl:"pos"},
        {tx: "All players connected via medigun are hit", id: 76, rq: "dmg", ad: "UNI", cl:"pos"},
        {tx: "100% critical hits vs wet players", id: 77, rq: "dmg", ad: "BUFF,UNI", cl:"pos"},
        {tx: "Gain a speed boost", id: 78, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "Humiliates opponents", id: 79, rq: "hum", ad: "EVNT", cl:"pos"},
        {tx: "Launched bombs shatter on surface", id: 80, rq: "grd", ad: "UNI", cl:"neg"},
        {tx: "+##% increase in turning control while charging", id: 81, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "Cannot turn while charging", id: 81, rq: "chr", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Melee kills refill #% of your charge meter", id: 82, rq: "chr", ad: "NUM,UNI", cl:"pos"},
        {tx: "Grenades will explode # second(s) after launched", id: 83, rq: "grd", ad: "NUM,UNI", cl:"neu"},
        {tx: "Projectiles push players back on impact", id: 84, rq: "prj", ad: "UNI", cl:"pos"},
        {tx: "Grenades do not explode on impact", id: 85, rq: "grd", ad: "UNI", cl:"neg"},
        {tx: "All projectiles will explode on impact", id: 86, rq: "prj", ad: "UNI", cl:"pos"},
        {tx: "Grenades have very little bounce and roll", id: 86, rq: "grd", ad: "UNI", cl:"neg"},
        {tx: "+#% fuse time on grenades", id: 87, rq: "grd", ad: "NUM,UNI", cl:"?"},
        {tx: "-#% fuse time on grenades", id: 87, rq: "grd", ad: "NUM,UNI", cl:"?"},
        {tx: "+#% max secondary ammo on wearer", id: 88, rq: "", ad: "NUM,UNI", cl:"pos"},
        {tx: "-#% max secondary ammo on wearer", id: 88, rq: "", ad: "NUM,UNI", cl:"neg"},
        {tx: "+# max primary clip capacity", id: 89, rq: "", ad: "NUM,UNI", cl:"pos"},
        {tx: "-# max primary clip capacity", id: 89, rq: "", ad: "NUM,UNI", cl:"neg"},
        {tx: "0.# second slower bomb arm time", id: 90, rq: "stk", ad: "NUM,UNI", cl:"neg"},
        {tx: "0.# second faster bomb arm time", id: 90, rq: "stk", ad: "NUM,UNI", cl:"pos"},
        {tx: "Gain a critical melee strike after impacting an enemy at distance", id: 91, rq: "chr", ad: "UNI", cl:"pos"},
        {tx: "+# max stickybomb(s) out", id: 92, rq: "stk", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-# max stickybomb(s) out", id: 92, rq: "stk", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Wearer cannot carry the intelligence briefcase or PASS Time JACK", id: 93, rq: "", ad: "STAT", cl:"neg"},
        {tx: "+#% charge impact damage", id: 94, rq: "chr", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% charge impact damage", id: 94, rq: "chr", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "+#% recharge rate", id: 95, rq: "bar", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "-#% recharge rate", id: 95, rq: "bar", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Full turning control while charging", id: 81, rq: "chr", ad: "BUFF,STAT,UNI", cl:"pos"},
        {tx: "Melee kills refill #% of your recharge meter", id: 96, rq: "bar", ad: "UNI", cl:"pos"},
        {tx: "Able to destroy enemy stickybombs", id: 97, rq: "stk", ad: "UNI", cl:"pos"},
        {tx: "Max charge time increased by #%", id: 98, rq: "stk", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "Max charge time decreased by #%", id: 98, rq: "stk", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Permanantly increase your speed and max health", id: 99, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "The first # hit(s) will cause an explosion", id: 100, rq: "mel,exp", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "The first # hit(s) will cause an explosion", id: 100, rq: "exp", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "Ammo boxes refill any active meters", id: 101, rq: "", ad: "BUFF,UNI", cl:"pos"},
        {tx: "100% chance to slow down target", id: 102, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "+#% damage resistance when below #% health", id: 103, rq: "", ad: "STAT,UNI", cl:"pos"},
        {tx: "+#% damage resistance when above #% health", id: 103, rq: "", ad: "STAT,UNI", cl:"pos"},
        {tx: "+#% damage vulnerability when below #% health", id: 103, rq: "", ad: "STAT,UNI", cl:"neg"},
        {tx: "+#% damage vulnerability when above #% health", id: 103, rq: "", ad: "STAT,UNI", cl:"neg"},
        {tx: "+#% damage resistance when below #% health and spun up", id: 103, rq: "min", ad: "STAT,UNI", cl:"pos"},
        {tx: "+#% damage resistance when above #% health and spun up", id: 103, rq: "min", ad: "STAT,UNI", cl:"pos"},
        {tx: "+#% damage vulnerability when below #% health and spun up", id: 103, rq: "min", ad: "STAT,UNI", cl:"neg"},
        {tx: "+#% damage vulnerability when above #% health and spun up", id: 103, rq: "min", ad: "STAT,UNI", cl:"neg"},
        {tx: "#% slower spin up time", id: 104, rq: "min", ad: "BUFF,UNI", cl:"neg"},
        {tx: "#% faster spin up time", id: 104, rq: "min", ad: "BUFF,UNI", cl:"pos"},
        {tx: "+#% faster move speed **st", id: 105, rq: "weap", ad: "STAT,NUM", cl:"pos"},
        {tx: "+#% slower move speed **st", id: 105, rq: "weap", ad: "STAT,NUM", cl:"neg"},
        {tx: "Silent Killer: No barrel spin sound", id: 106, rq: "min", ad: "UNI", cl:"pos"},
        {tx: "Creates a ring of flames while spun up", id: 107, rq: "min,flm", ad: "UNI", cl:"pos"},
        {tx: "Consumes an additional # ammo per second while spun up", id: 108, rq: "min", ad: "NUM,UNI", cl:"neg"},
        {tx: "Eat to regain up to ### health", id: 109, rq: "lch", ad: "UNI", cl:"neu"},
        {tx: "Add +## max health for ## seconds", id: 110, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "Move speed is increased", id: 111, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "Attacks Mini-Crit", id: 112, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "User may only us melee weapons", id: 113, rq: "", ad: "EVNT", cl:"neg"},
        {tx: "+#% healing effect", id: 114, rq: "heal", ad: "NUM,BUFF", cl:"pos"},
        {tx: "-#% healing effect", id: 114, rq: "heal", ad: "NUM,BUFF", cl:"neg"},
        {tx: "# seconds of 100% critical chance", id: 115, rq: "", ad: "EVNT", cl:"pos"},
        {tx: "Maximum health is drained **st", id: 116, rq: "", ad: "STAT", cl:"neg"},
        {tx: "+#% damage from ranged sources **st", id: 117, rq: "", ad: "STAT,NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% damage from ranged sources **st", id: 117, rq: "", ad: "STAT,NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% damage from melee sources **st", id: 118, rq: "", ad: "STAT,NUM,BUFF,UNI", cl:"neg"},
        {tx: "-#% damage from melee sources **st", id: 118, rq: "", ad: "STAT,NUM,BUFF,UNI", cl:"pos"},
        {tx: "+#% maximum overheal **st", id: 119, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"pos"},
        {tx: "-#% maximum overheal **st", id: 119, rq: "", ad: "NUM,STAT,BUFF,UNI", cl:"neg"},
        {tx: "Critical hit forces victim to laugh", id: 120, rq: "dmg", ad: "UNI", cl:"pos"},
        {tx: "Critical hits deal no damage", id: 121, rq: "dmg", ad: "UNI", cl:"neg"},
        {tx: "Gain # garunteed crits for each sentry kill and # for each sentry assist when your sentry is destroyed", id: 122, rq: "dmg", ad: "UNI,STAT", cl:"pos"},
        {tx: "Damage dealt is returned as ammo", id: 123, rq: "gun", ad: "EVNT", cl:"pos"},
        {tx: "No reload necessary", id: 124, rq: "gun", ad: "UNI", cl:"pos"},
        {tx: "#% increased damage to sentry targets", id: 125, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "#% decreased damage to sentry targets", id: 125, rq: "dmg", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Uses metal for ammo", id: 126, rq: "gun", ad: "BUFF,UNI", cl:"neg"},
        {tx: "Target loses up to #% Medigun charge", id: 127, rq: "dmg", ad: "EVNT", cl:"pos"},
        {tx: "Target loses up to #% cloak", id: 128, rq: "dmg", ad: "EVNT", cl:"pos"},
        {tx: "Fires a special bolt that can repair friendly buildings", id: 129, rq: "gun", ad: "UNI", cl:"pos"},
        {tx: "Projectile repairs friendly buildings", id: 129, rq: "prj", ad: "UNI", cl:"pos"},
        {tx: "Take manual control over your sentry gun", id: 130, rq: "lsr", ad: "UNI", cl:"pos"},
        {tx: "Burns out your victims' retinas", id: 131, rq: "lsr", ad: "UNI", cl:"pos"},
        {tx: "Attracts nearby cats", id: 132, rq: "lsr", ad: "UNI", cl:"pos"},
        {tx: "Upgrades, repairs and speeds up construction of friendly buildings", id: 133, rq: "", ad: "EVNT", cl:"neu"},
        {tx: "Upgrades, repairs and speeds up construction of friendly buildings on hit", id: 133, rq: "wrn", ad: "UNI", cl:"neu"},
        {tx: "Imbued with an ancient power", id: 134, rq: "gold", ad: "UNI", cl:"pos"},
        {tx: "Replaces the sentry with a mini-sentry", id: 135, rq: "", ad: "ENG,UNI", cl:"neg"},
        {tx: "Sentry build speed increased by ##%", id: 136, rq: "", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "Sentry build speed decreased by ##%", id: 136, rq: "", ad: "NUM,BUFF,UNI", cl:"neg"},
        {tx: "Replaces the dispenser with a mini-dispenser", id: 137, rq: "", ad: "ENG,UNI", cl:"neg"},
        {tx: "Replaces the teleporter with a mini-teleporter", id: 138, rq: "", ad: "ENG,UNI", cl:"neg"},
        {tx: "Every # hits is a garunteed crit", id: 139, rq: "mel", ad: "UNI", cl:"pos"},
        {tx: "#% faster repair rate", id: 140, rq: "wrn", ad: "NUM,BUFF,UNI", cl:"pos"},
        {tx: "#% slower repair rate", id: 140, rq: "wrn", ad: "NUM,BUFF,UNI", cl:"neg"},
        /*
        {tx: "", id: 141, rq: "", ad: "", cl:""},
        {tx: "", id: 142, rq: "", ad: "", cl:""},
        {tx: "", id: 143, rq: "", ad: "", cl:""},
        {tx: "", id: 144, rq: "", ad: "", cl:""},
        {tx: "", id: 145, rq: "", ad: "", cl:""},
        {tx: "", id: 146, rq: "", ad: "", cl:""},
        {tx: "", id: 147, rq: "", ad: "", cl:""},
        {tx: "", id: 148, rq: "", ad: "", cl:""},
        {tx: "", id: 149, rq: "", ad: "", cl:""},
        {tx: "", id: 150, rq: "", ad: "", cl:""},
        {tx: "", id: 151, rq: "", ad: "", cl:""},
        {tx: "", id: 152, rq: "", ad: "", cl:""},
        {tx: "", id: 153, rq: "", ad: "", cl:""},
        {tx: "", id: 154, rq: "", ad: "", cl:""},
        {tx: "", id: 155, rq: "", ad: "", cl:""},
        {tx: "", id: 156, rq: "", ad: "", cl:""},
        {tx: "", id: 157, rq: "", ad: "", cl:""},
        {tx: "", id: 158, rq: "", ad: "", cl:""},
        {tx: "", id: 159, rq: "", ad: "", cl:""},
        {tx: "", id: 160, rq: "", ad: "", cl:""},
        {tx: "", id: 161, rq: "", ad: "", cl:""},
        {tx: "", id: 162, rq: "", ad: "", cl:""},
        {tx: "", id: 163, rq: "", ad: "", cl:""},
        {tx: "", id: 164, rq: "", ad: "", cl:""},
        {tx: "", id: 165, rq: "", ad: "", cl:""},
        {tx: "", id: 166, rq: "", ad: "", cl:""},
        {tx: "", id: 167, rq: "", ad: "", cl:""},
        {tx: "", id: 168, rq: "", ad: "", cl:""},
        {tx: "", id: 169, rq: "", ad: "", cl:""},
        {tx: "", id: 170, rq: "", ad: "", cl:""},
        {tx: "", id: 171, rq: "", ad: "", cl:""},
        {tx: "", id: 172, rq: "", ad: "", cl:""},
        {tx: "", id: 173, rq: "", ad: "", cl:""},
        {tx: "", id: 174, rq: "", ad: "", cl:""},
        {tx: "", id: 175, rq: "", ad: "", cl:""},
        {tx: "", id: 176, rq: "", ad: "", cl:""},
        {tx: "", id: 177, rq: "", ad: "", cl:""},
        {tx: "", id: 178, rq: "", ad: "", cl:""},
        {tx: "", id: 179, rq: "", ad: "", cl:""},
        {tx: "", id: 180, rq: "", ad: "", cl:""},
        {tx: "", id: 181, rq: "", ad: "", cl:""},
        {tx: "", id: 182, rq: "", ad: "", cl:""},
        {tx: "", id: 183, rq: "", ad: "", cl:""},
        {tx: "", id: 184, rq: "", ad: "", cl:""},
        {tx: "", id: 185, rq: "", ad: "", cl:""},
        {tx: "", id: 186, rq: "", ad: "", cl:""},
        {tx: "", id: 187, rq: "", ad: "", cl:""},
        {tx: "", id: 188, rq: "", ad: "", cl:""},
        {tx: "", id: 189, rq: "", ad: "", cl:""},
        {tx: "", id: 190, rq: "", ad: "", cl:""},
        {tx: "", id: 191, rq: "", ad: "", cl:""},
        {tx: "", id: 192, rq: "", ad: "", cl:""},
        {tx: "", id: 193, rq: "", ad: "", cl:""},
        {tx: "", id: 194, rq: "", ad: "", cl:""},
        {tx: "", id: 195, rq: "", ad: "", cl:""},
        {tx: "", id: 196, rq: "", ad: "", cl:""},
        {tx: "", id: 197, rq: "", ad: "", cl:""},
        {tx: "", id: 198, rq: "", ad: "", cl:""},
        {tx: "", id: 199, rq: "", ad: "", cl:""},
        {tx: "", id: 200, rq: "", ad: "", cl:""},
        {tx: "", id: 201, rq: "", ad: "", cl:""},
        {tx: "", id: 202, rq: "", ad: "", cl:""},
        {tx: "", id: 203, rq: "", ad: "", cl:""},
        {tx: "", id: 204, rq: "", ad: "", cl:""},
        {tx: "", id: 205, rq: "", ad: "", cl:""},
        {tx: "", id: 206, rq: "", ad: "", cl:""},
        {tx: "", id: 207, rq: "", ad: "", cl:""},
        {tx: "", id: 208, rq: "", ad: "", cl:""},
        {tx: "", id: 209, rq: "", ad: "", cl:""},
        {tx: "", id: 210, rq: "", ad: "", cl:""},
        {tx: "", id: 211, rq: "", ad: "", cl:""},
        {tx: "", id: 212, rq: "", ad: "", cl:""},
        {tx: "", id: 213, rq: "", ad: "", cl:""},
        {tx: "", id: 214, rq: "", ad: "", cl:""},
        {tx: "", id: 215, rq: "", ad: "", cl:""},
        {tx: "", id: 216, rq: "", ad: "", cl:""},
        {tx: "", id: 217, rq: "", ad: "", cl:""},
        {tx: "", id: 218, rq: "", ad: "", cl:""},
        {tx: "", id: 219, rq: "", ad: "", cl:""},
        {tx: "", id: 220, rq: "", ad: "", cl:""},
        {tx: "", id: 221, rq: "", ad: "", cl:""},
        {tx: "", id: 222, rq: "", ad: "", cl:""},
        {tx: "", id: 223, rq: "", ad: "", cl:""},
        {tx: "", id: 224, rq: "", ad: "", cl:""},
        {tx: "", id: 225, rq: "", ad: "", cl:""},
        {tx: "", id: 226, rq: "", ad: "", cl:""},
        {tx: "", id: 227, rq: "", ad: "", cl:""},
        {tx: "", id: 228, rq: "", ad: "", cl:""},
        {tx: "", id: 229, rq: "", ad: "", cl:""},
        {tx: "", id: 230, rq: "", ad: "", cl:""},
        {tx: "", id: 231, rq: "", ad: "", cl:""},
        {tx: "", id: 232, rq: "", ad: "", cl:""},
        {tx: "", id: 233, rq: "", ad: "", cl:""},
        {tx: "", id: 234, rq: "", ad: "", cl:""},
        {tx: "", id: 235, rq: "", ad: "", cl:""},
        {tx: "", id: 236, rq: "", ad: "", cl:""},
        {tx: "", id: 237, rq: "", ad: "", cl:""},
        {tx: "", id: 238, rq: "", ad: "", cl:""},
        {tx: "", id: 239, rq: "", ad: "", cl:""},
        {tx: "", id: 240, rq: "", ad: "", cl:""},
        {tx: "", id: 241, rq: "", ad: "", cl:""},
        {tx: "", id: 242, rq: "", ad: "", cl:""},
        {tx: "", id: 243, rq: "", ad: "", cl:""},
        {tx: "", id: 244, rq: "", ad: "", cl:""},
        {tx: "", id: 245, rq: "", ad: "", cl:""},
        {tx: "", id: 246, rq: "", ad: "", cl:""},
        {tx: "", id: 247, rq: "", ad: "", cl:""},
        {tx: "", id: 248, rq: "", ad: "", cl:""},
        {tx: "", id: 249, rq: "", ad: "", cl:""},
        {tx: "", id: 250, rq: "", ad: "", cl:""},
        {tx: "", id: 251, rq: "", ad: "", cl:""},
        {tx: "", id: 252, rq: "", ad: "", cl:""},
        {tx: "", id: 253, rq: "", ad: "", cl:""},
        {tx: "", id: 254, rq: "", ad: "", cl:""},
        {tx: "", id: 255, rq: "", ad: "", cl:""},
        {tx: "", id: 256, rq: "", ad: "", cl:""},
        {tx: "", id: 257, rq: "", ad: "", cl:""},
        {tx: "", id: 258, rq: "", ad: "", cl:""},
        {tx: "", id: 259, rq: "", ad: "", cl:""},
        {tx: "", id: 260, rq: "", ad: "", cl:""},
        {tx: "", id: 261, rq: "", ad: "", cl:""},
        {tx: "", id: 262, rq: "", ad: "", cl:""},
        {tx: "", id: 263, rq: "", ad: "", cl:""},
        {tx: "", id: 264, rq: "", ad: "", cl:""},
        {tx: "", id: 265, rq: "", ad: "", cl:""},
        {tx: "", id: 266, rq: "", ad: "", cl:""},
        {tx: "", id: 267, rq: "", ad: "", cl:""},
        {tx: "", id: 268, rq: "", ad: "", cl:""},
        {tx: "", id: 269, rq: "", ad: "", cl:""},
        {tx: "", id: 270, rq: "", ad: "", cl:""},
        {tx: "", id: 271, rq: "", ad: "", cl:""},
        {tx: "", id: 272, rq: "", ad: "", cl:""},
        {tx: "", id: 273, rq: "", ad: "", cl:""},
        {tx: "", id: 274, rq: "", ad: "", cl:""},
        {tx: "", id: 275, rq: "", ad: "", cl:""},
        {tx: "", id: 276, rq: "", ad: "", cl:""},
        {tx: "", id: 277, rq: "", ad: "", cl:""},
        {tx: "", id: 278, rq: "", ad: "", cl:""},
        {tx: "", id: 279, rq: "", ad: "", cl:""},
        {tx: "", id: 280, rq: "", ad: "", cl:""},
        {tx: "", id: 281, rq: "", ad: "", cl:""},
        {tx: "", id: 282, rq: "", ad: "", cl:""},
        {tx: "", id: 283, rq: "", ad: "", cl:""},
        {tx: "", id: 284, rq: "", ad: "", cl:""},
        {tx: "", id: 285, rq: "", ad: "", cl:""},
        {tx: "", id: 286, rq: "", ad: "", cl:""},
        {tx: "", id: 287, rq: "", ad: "", cl:""},
        {tx: "", id: 288, rq: "", ad: "", cl:""},
        {tx: "", id: 289, rq: "", ad: "", cl:""},
        {tx: "", id: 290, rq: "", ad: "", cl:""},
        {tx: "", id: 291, rq: "", ad: "", cl:""},
        {tx: "", id: 292, rq: "", ad: "", cl:""},
        {tx: "", id: 293, rq: "", ad: "", cl:""},
        {tx: "", id: 294, rq: "", ad: "", cl:""},
        {tx: "", id: 295, rq: "", ad: "", cl:""},
        {tx: "", id: 296, rq: "", ad: "", cl:""},
        {tx: "", id: 297, rq: "", ad: "", cl:""},
        {tx: "", id: 298, rq: "", ad: "", cl:""},
        {tx: "", id: 299, rq: "", ad: "", cl:""},*/
    ]
};
const effects = {
    d:[
        "On fire",
        "Marked-For-Death",
        "Stunned",
        "Bleed",
        "Scared"
    ]
}


function loadNew() {
    try {
    var pre = rng(weapons.d),
        mid = rng(weapons.d),
        suf = rng(weapons.d);

    var prid = getCommonPrim(pre, suf)
    if(prid.length === 0) {
        loadNew();
        return;
    }
    prid = rng(prid);
    var sec = getCommonSubs(pre,suf,getBlacklist(prid));
    var s = [];
    var statist = processStats(sortByGoodness(getWeaponStats(prid,sec)));
    
    /* GET THE NAME */
    var n = getName(pre, mid, suf);
    domText("name", n);
    domText("lvl", randomInteger(1,100));
    domText("type", getAttString(prid));
    domText("stats", statist);
    domText("debug", 
        nToBr(`"${pre.pfix.txt}" from "${getName(pre,pre,pre)
        }"\n"${   mid.mfix    }" from "${getName(mid,mid,mid)
        }"\n"${   suf.sfix.txt}" from "${getName(suf,suf,suf)
        }"\n\nPrimary Tag:\n[${prid}] / ${getAttString(prid)
        }\nSecondary Tags:\n[${sec.join(', ')}]\n${getAllAttStrings(sec)}\n`));
    
    //console.log(`${i}: ${n}\n Primary: ${getAttString(prid)}\n Sec/Alt: ${sec}\n ${statstr}`);
    }
    catch(e) {
        console.error(e);
        console.log("Retrying...");
        loadNew();
    }
}

function processStats(stats) {
    var out = "";
    stats.forEach(nex => {
        out += `<span class="att_${nex.cl}">${parseAll(nex.tx)}</span>\n<br>\n`;
    });
    return out;
}

function nToBr(str) {
    var out = "";
    for(let i = 0; i < str.length; i++) 
        out += str[i] === "\n" ? "<br>" : str[i];
    return out;
}

function domText(id, txt) {
    /*for(let i = 0; i < txt.length; i++) 
        if(txt[i] === '\n') 
            txt = `${txt.substring(0, i)}<br>${txt.substring(i+1, txt.length)}`;*/
    document.getElementById(id).innerHTML = txt;
}
function toggleDebug() {
    document.getElementById("debug").style.display = document.getElementById("debug").style.display === "none" ? "block" : "none";
}
function rng(arr) {
    return arr[randomInteger(0, arr.length)];
}
function getName(oP, oM, oS, the = true) {
    function isNumeric(n) {return !isNaN(parseFloat(n)) && isFinite(n);}
    var p = oP.pfix.txt,
        m = oM.mfix,
        s = oS.sfix.txt;
    if(m === "" || p === "De") 
        m = "",
        s = s.toLowerCase();
    if(isNumeric(s) && m === "") m = " ";
    if(s === "Birdt" && m !== "" && p !== "Quacken") s = "Bird";
    if(m.includes("'s") && p.includes("Your")) m = m.substring(3);
    var f = `${the ? "The " : ""}${p+m+s}`;
    
    return f;
}
function parseAll(str) {
    return parseNumbers(parseStatus(str));
    // will implement more parse stuff later
}
function parseStatus(str) {
    var out = "";
    var idex = 0;
    var token = "**st";
    var states = [
        "on wearer",
        "while active"
    ];
    while(str.substring(idex, str.length).includes(token)) {
        out += str.substring(idex, str.indexOf(token)) + rng(states);
        idex = str.indexOf(token) + token.length;
    }
    out += str.substring(idex, str.length);
    return out;
}
function parseNumbers(str) {
    var fin = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "#") {
            var tNum = 1;
            // Look through the next couple characters for more #s, multiplying the result by a random integer for each # found
            while(str[i] === '#') {
                // If the next digit is a percent, multiply it by a number 10-100
                // Otherwise, multipy it by a random number 2-10
                tNum *= (str[i+1] === '%') ? randomInteger(10, 100) : randomInteger(2, 10);
                i++;
            }
            i--;
            fin += tNum;
        }
        else {
            fin += str[i];
        }
    }
    return fin;
}
function randomInteger(lower,higher) {
    return Math.floor(Math.random()*(higher-lower) + lower);
}

function getWeaponStats(prid, sec) {
    var applied = [];
    var complete = [];
    var tags = `${prid},${sec.join(",")}`;
    var fulfillers = [];
    for(let i = 0; i < stats.d.length; i++) {
        if(!stats.d[i].ad.includes("UNI")) continue;
        var subject = stats.d[i];
        if(subject.rq === "") {
            subject.rq = "via";
            fulfillers.push(subject);
        }
        // If all attributes in the current stat are shared with the weapon...
        else if(sploot(subject.rq).every((tag) => tags.includes(tag))) {
            fulfillers.push(subject);
        }
        
    }
    var need = sploot("gold,wrn,flm,pyr");
    need.push(prid);
    if(need.some(e => tags.includes(e))) {
        for(let i = 0; i < need.length; i++) {
            if(!tags.includes(need[i])) continue;
            var nug = [];
            console.log(need[i]);
            for(let j = 0; j < stats.d.length; j++) 
                if(sploot(stats.d[j].rq).every((tag) => need[i] === (tag))) {
                    nug.push(stats.d[j]);
                    console.log(`\tstats.d[${j}]`);
                }
            var out;
            if(nug.length === 1) {
                out = nug[0];
            }
            else if (nug.length !== 0) {
                out = rng(nug);
            }
            if(nug.length !== 0) {
                complete.push(out);
                applied.push(out.id);
            }
        }
    }
    
    var quality = ["pos","neg","neu"];
    var limits = [0, 0, 0];
    var avali = [[], [], []];
    limits[0] = randomInteger(3-complete.length, 5-complete.length);
    limits[2] = randomInteger(-1, 2);
    if(limits[2] < 0) limits[2] = 0;
    limits[1] = randomInteger(2-complete.length, 8-(limits[0]-limits[2])-complete.length);
    
    for(let i = 0; i < avali.length; i++) 
        for(let j = 0; j < fulfillers.length; j++) 
            if(fulfillers[j].cl === quality[i]) {
                avali[i].push(fulfillers[j]);
                fulfillers.splice(j,1);
            }
   
    for(let i = 0; i < quality.length; i++) {
        for(let j = 0; j < limits[i]; j++) {
            var nex = rng(avali[i]);
            //if(nex == null) {j--; continue;}
            if(!applied.includes(nex.id)) {
                applied.push(nex.id);
                complete.push(nex);
            }
            else {
                avali[i].splice(avali[i].indexOf(nex));
            }
        }
    }
    fulfillers = avali[0].concat(avali[1],avali[2]);
    return complete;
}

function sortByGoodness(stuff) {
    var pos = [], neg = [], neu = [];
    stuff.forEach(nex => {
        switch(nex.cl) {
            case "pos": pos.push(nex); break;
            case "neg": neg.push(nex); break;
            case "neu": neu.push(nex); break;
        }
    });
    return pos.concat(neg, neu);
}
function getCommonPrim(P,S) {
    var common = [];
    // Add all primary tags that both prefix and suffix have in common to the common array
    for(let i = 0; i < prim.length; i++) 
        if(P.pfix.att.includes(prim[i]) && S.sfix.att.includes(prim[i])) 
            common.push(prim[i]);
    // If nothing is in common...
    if(common.length === 0) {
        // Get an array that will hold all of the available tags
        var splitted = [];
        // Get some booleans that determine whether either contains the via tag
        var a = P.pfix.att.includes("via") || P.pfix.att === "via", b = S.sfix.att.includes("via") || S.sfix.att === "via";
        // Parse the attribute tags to a combined array
        if(a)
            splitted = sploot(S.sfix.att + "," + P.pfix.att);
        else if(b)
            splitted = sploot(P.pfix.att + "," + S.sfix.att);
        // Look through each tag.
        // If the splitted array is empty, there are no primary tags.
        // If the currently selected attribute is primary, add it to the common array
        for(let i = 0; i < splitted.length; i++)
            for(let j = 0; j < prim.length; j++) 
                if(splitted[i] === prim[j])
                    common.push(prim[j]);
        // If both have a via tag but no primary tags, simply make it a weapon
        if(common.length === 0 && a && b) 
            common.push("weap");
        // List of certain tags, and a list of tags that should cause their removal
        var lists = [
            {flag:"weap", blist:sploot("mel,gun,flg,flt,bow,thn,stk,grd,rkt,min,smg,pis,rfl,shot")},
            {flag:"gun",  blist:sploot("med,flg,rkt,min,smg,pis,rfl,shot")},
            {flag:"prj",  blist:sploot("bow,thn,jar,flg,flt,gun,rkt,grd,stk")},
        ];
        // Iterate through the list, removing weapon, gun, etc flags if nuanced ones exist.
        lists.forEach(f => {
            f.blist.forEach(g => {
                while(common.includes(f.flag) && common.includes(g)) {
                    var c = common.shift();
                    if (c !== f.flag) common.push(c);
                }
            });
        });
    }
    // If there are absolutely no primary tags, warn about it in the console.
    if(common.length === 0) 
        console.warn(`"${P.pfix.txt}" and "${S.sfix.txt}" have no primary attributes!\n Compare ${P.pfix.att} : ${S.sfix.att}`);
    return common;
}
function getCommonSubs(P,S, blacklist = []) {
    var common = [];
    for(let i = 0; i < subs.length; i++) 
        if((P.pfix.att.includes(subs[i]) || S.sfix.att.includes(subs[i])) && !blacklist.includes(subs[i])) 
            common.push(subs[i]);
    if(P.pfix.att.includes("via")) {
        sploot(S.sfix.att).forEach(at => {
            if(!blacklist.includes(at)) common.push(at);
        });
    }
    if(S.sfix.att.includes("via")) {
        sploot(P.pfix.att).forEach(at => {
            if(!blacklist.includes(at)) common.push(at);
        })
    }
    return common;
}

function getBlacklist(att) {
    switch(att) {
        case "mel":
            return "gun,pis,prj,sap,edb,min,smg,boot";
        case "ban":
            return "gun,pis,exp,prj,thr,jar,ice,sap,bak,min,smg,wrn,boot,knf";
        case "pda":
            return "gun,pis,exp,edb,prj,thr,jar,ice,gold,bak,min,smg,arn,boot,bar,flm,knf";
        case "bkp":
            return "gun,pis,edb,exp,prj,thr,jar,ice,gold,sap,smg,min,knf,wrn";
        case "lsr":
            return "";
        case "clk":
            return "gun,pis,exp,edb,prj,thr,jar,ice,gold,sap,flm,bak,min,smg,knf,wrn,hum,boot";
        case "lch":
            return "gun,pis,prj,sap,boot,exp,wrn,min,smg,knf,flm";
        case "rfl":
            return "thr,edb,wrn,boot";
        case "smg":
            return "thr,sap,boot,edb,wrn";
        case "min":
            return "thr,sap,boot,edb,wrn";
        case "exp":
            return "sap,edb,wrn,boot";
        case "rkt":
            return "sap,wrn,edb,thr,boot";
        case "grd":
            return "sap,edb,thr,wrn,boot";
        case "stk":
            return "edb,thr,sap,bak,auto,wrn,heal,boot";
        case "jar":
            return "gun,edb,ice,gold,sap,bak,min,pis,smg,knf,wrn,boot";
        case "thn":
            return "gun,edb,sap,min,smg,pis,wrn,boot";
        case "bow":
            return "gun,thr,sap,nuk,bak,smg,min,edb,wrn,boot";
        case "flt":
            return "ice,smg,min,pis,gun,exp,edb,prj,thr,jar,gold,sap,wrn,boot";
        case "flg":
            return "edb,min,thr,jar,ice,gold,sap,wrn,boot";
        case "med":
            return "gun,exp,edb,prj,thr,jar,ice,gold,sap,flm,bak,min,smg,wrn,hum,boot";
        case "chr":
            return "gun,exp,edb,prj,thr,jar,sap,nuk,flm,min,smg,wrn,heal,boot";
        case "pis":
            return "edb,thr,sap,wrn,boot,min";
        case "shot":
            return "edb,thr,sap,wrn,boot";
            break;
    }
}
// cutting down on repetition: splits a string with ',' as the delimiter
function sploot(string) {
    //console.log(string);
    //console.log(`EVAC to ${string.split(",")}`);
    return string.split(",");
}

function getAllAttStrings(arr) {
    if(arr.includes(','))
        arr = sploot(arr);
    var s = "";
    arr.forEach(x => {
        s += `${getAttString(x)},${" "}`;
    });
    return s.substring(0, s.length-2);
}

function getAttString(a) {
    switch(a) {
            case "gun":  return "Gun";
            case "mel":  return "Melee";
            case "via":  return "Any/Misc";
            case "exp":  return "Explosive";
            case "edb":  return "Edible";
            case "thr":  return "Throwable";
            case "thn":  return "Thrown Weapon";
            case "lch":  return "Lunchbox";
            case "ban":  return "Banner";
            case "bow":  return "Bow";
            case "bkp":  return "Backpack";
            case "boot": return "Footwear";
            case "pda":  return "PDA";
            case "lsr":  return "Laser Pointer";
            case "flt":  return "Flamethrower";
            case "flg":  return "Flare Gun";
            case "heal": return "Healing";
            case "prj":  return "Projectile";
            case "jar":  return "Jar";
            case "shot": return "Shotgun";
            case "rfl":  return "Sniper Rifle";
            case "ice":  return "Ice";
            case "gold": return "Golden";
            case "sap":  return "Sapper";
            case "nuk":  return "Nuclear";
            case "flm":  return "Fire-based";
            case "bak":  return "Crits From Behind";
            case "auto": return "Automatic Gun";
            case "min":  return "Mini Gun";
            case "smg":  return "SMG";
            case "wrn":  return "Wrench";
            case "hum":  return "Humiliating";
            case "clk":  return "Cloak/Watch";
            case "chr":  return "Shield";
            case "bar":  return "Has Recharge Bar";
            case "rkt":  return "Rocket Launcher";
            case "grd":  return "Grenade Launcher";
            case "stk":  return "Stickybomb Launcher";
            case "pis":  return "Pistol";
            case "med":  return "Medi-Gun";
            case "weap": return "Weapon";
            case "ads":  return "Aim Down Sights/Scope";
            case "col":  return "Soda";
            case "dmg":  return "Deals Damage";
            case "kit":  return "Disguise Kit";
            default:     return "Unknown";
        }
}
