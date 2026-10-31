const PRIO = {1:"Niski",2:"Średni",3:"Wysoki",4:"Krytyczny"};
const Z5_TPL = "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";
const DEF_CATS = ["Praca","Studia","Trening","Dom","Zdrowie","Inne"];
const TX_CATS = ["Jedzenie","Transport","Rachunki","Rozrywka","Sport","Zakupy","Zdrowie","Edukacja","Wynagrodzenie","Inne"];
const CAT_TO_EXP = {Trening:"Sport",Studia:"Edukacja",Dom:"Rachunki",Zdrowie:"Zdrowie"};
const KEY = "questlog-v1";
const d0 = new Date(); d0.setHours(0,0,0,0);
const iso = d => { const x=new Date(d); return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0"); };
const addDays = n => { const x=new Date(d0); x.setDate(x.getDate()+n); return iso(x); };
const plusDays = (s,n) => { const x=new Date(s+"T00:00"); x.setDate(x.getDate()+n); return iso(x); };
const TODAY = iso(d0);
const uid = () => Math.random().toString(36).slice(2,10);
const zl = v => (v<0?"−":"") + Math.abs(v).toLocaleString("pl-PL",{minimumFractionDigits:2,maximumFractionDigits:2}) + " zł";
const fmtDate = s => new Date(s+"T00:00").toLocaleDateString("pl-PL",{day:"numeric",month:"short"});
const fmtDur = m => { const h=Math.floor(m/60), r=m%60; return (h?h+" h":"")+(h&&r?" ":"")+(r?r+" min":""); };
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const toMin = t => { const [h,m]=t.split(":").map(Number); return h*60+m; };
const hhmm = m => String(Math.floor(m/60)%24).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
const parseAmt = v => parseFloat(String(v).replace(/\s/g,"").replace(",","."));
const round2 = v => Math.round(v*100)/100;

function sample(){
  return { demo:true, v7:true, v8:true,
    me:{name:""},
    jobs:[{id:"j-marc",name:"Marcovia Marki",rateType:"unit",rate:85,matchRate:0,place:"Marki",subs:[{id:"s-2015b",name:"2015B",rate:85,matchRate:170,contract:"",docGroup:"2015b"},{id:"s-2020",name:"2020",rate:90,matchRate:null,contract:"",docGroup:"2020"}]},
          {id:"j-sgm",name:"SG Motoryka",rateType:"unit",rate:150,matchRate:0,place:"",subs:[]}],
    workLog:[{id:uid(),work:"j-marc|s-2015b",date:addDays(-5),time:"10:00",dur:180,note:"Zastępstwo",kind:"T",place:"Marki"}],
    travels:[{id:"tr1",from:"Warszawa",to:"Kraków",mode:"train",date:addDays(0),dep:"13:05",arr:"15:32",cost:89,method:"card",paid:true,paidDate:addDays(-5),note:"IC 5310, wagon 8, miejsce 45",pair:"tr2"},
             {id:"tr2",from:"Kraków",to:"Warszawa",mode:"train",date:addDays(1),dep:"18:10",arr:"20:40",cost:79,method:"card",paid:false,note:"",pair:"tr1"}],
    routines:[
      {id:"r1",title:"Witamina D3 + K2",pora:"rano",days:[1,2,3,4,5,6,7],time:"",note:"do śniadania",from:addDays(-14)},
      {id:"r2",title:"Kreatyna 5 g",pora:"rano",days:[1,2,3,4,5,6,7],time:"",note:"",from:addDays(-14)},
      {id:"r3",title:"2 l wody",pora:"poludnie",days:[1,2,3,4,5,6,7],time:"",note:"",from:addDays(-14)},
      {id:"r4",title:"Rozciąganie 10 min",pora:"wieczor",days:[1,3,5],time:"21:30",note:"",from:addDays(-14)},
      {id:"r5",title:"Magnez",pora:"wieczor",days:[1,2,3,4,5,6,7],time:"",note:"przed snem",from:addDays(-14)}
    ],
    routineLog:(()=>{ const l={}; for(let i=1;i<=6;i++) l[addDays(-i)]=["r1","r2","r5"].concat(i%2?["r3"]:[]); l[addDays(0)]=["r1"]; return l; })(),
    shop:{lists:DEF_LISTS(), items:[
      {id:uid(),name:"Mleko 3,2%",qty:2,prio:4,list:"l-super",bought:false},
      {id:uid(),name:"Chleb razowy",qty:1,prio:3,list:"l-super",bought:false},
      {id:uid(),name:"Banany",qty:1,prio:2,list:"l-super",bought:false},
      {id:uid(),name:"Pasta do zębów",qty:1,prio:3,list:"l-drog",bought:false},
      {id:uid(),name:"Szampon",qty:1,prio:2,list:"l-drog",bought:false},
      {id:uid(),name:"Kabel USB-C",qty:1,prio:1,list:"l-elek",price:35,bought:false},
      {id:uid(),name:"Taśma kinezjologiczna",qty:2,prio:2,list:"l-hobby",bought:false},
      {id:uid(),name:"Baterie AA",qty:1,prio:1,list:"",bought:false},
      {id:uid(),name:"Kurczak filet",qty:1,prio:3,list:"l-super",bought:true,boughtAt:addDays(-4),paid:21.99}
    ]},
    prices:{"mleko":[{p:3.49,d:addDays(-4),s:"Biedronka"},{p:3.29,d:addDays(-11),s:"Lidl"}],"chleb razowy":[{p:5.99,d:addDays(-4),s:"Biedronka"}],"banany":[{p:5.94,d:addDays(-4),s:"Biedronka"}],"pasta do zebow":[{p:9.49,d:addDays(-20),s:"Rossmann"}],"szampon":[{p:14.99,d:addDays(-20),s:"Rossmann"}],"kurczak filet":[{p:21.99,d:addDays(-4),s:"Biedronka"}],"tasma kinezjologiczna":[{p:24.9,d:addDays(-40),s:"Decathlon"}]}, cats:[...DEF_CATS],
    quests:[
      {id:uid(),title:"Oddać rozdział pracy o lądowaniu CMJ",cat:"Studia",prio:4,deadline:addDays(3),date:"",done:false,dur:240},
      {id:uid(),title:"Wysłać ofertę do klubu",cat:"Praca",prio:3,deadline:addDays(1),date:addDays(0),time:"10:30",done:false,dur:45},
      {id:uid(),title:"Siłownia",cat:"Zdrowie",prio:2,deadline:"",date:addDays(0),time:"19:30",done:false,dur:60},
      {id:uid(),title:"Przeczytać 2 artykuły do pracy",cat:"Studia",prio:2,deadline:addDays(2),date:"",done:false,dur:60},
      {id:uid(),title:"Rozpisać mikrocykl dla grupy pływackiej",cat:"Trening",prio:3,deadline:addDays(-1),date:"",done:false,dur:90},
      {id:uid(),title:"Zapłacić za internet",cat:"Dom",prio:2,deadline:addDays(-2),date:"",done:false,cost:60,method:"card",expCat:"Rachunki"},
      {id:uid(),title:"Kupić nowe okularki pływackie",cat:"Trening",prio:2,deadline:addDays(6),date:"",done:false,cost:79,method:"cash",expCat:"Sport",dur:30},
      {id:uid(),title:"Przegląd auta",cat:"Inne",prio:3,deadline:addDays(14),date:addDays(11),time:"08:00",done:false,cost:250,method:"card",expCat:"Transport",dur:120},
      {id:uid(),title:"Prezent urodzinowy dla mamy",cat:"Inne",prio:2,deadline:addDays(9),date:"",done:false,cost:150,method:"card",expCat:"Zakupy",dur:60},
      {id:uid(),title:"Zrobić zakupy na tydzień",cat:"Dom",prio:2,deadline:"",date:addDays(-2),done:true,doneAt:addDays(-2),dur:60},
      {id:uid(),title:"Diagnostyka motoryczna – klub",cat:"Praca",prio:3,deadline:"",date:addDays(-3),time:"10:00",done:true,doneAt:addDays(-3),dur:120,work:"j-sgm|"}
    ],
    tx:[
      {id:uid(),type:"inc",amount:3200,method:"card",cat:"Wynagrodzenie",note:"Wypłata",date:addDays(-12)},
      {id:uid(),type:"trf",amount:200,dir:"toCash",cat:"",note:"Bankomat",date:addDays(-8)},
      {id:uid(),type:"inc",amount:400,method:"cash",cat:"Inne",note:"Treningi indywidualne",date:addDays(-6)},
      {id:uid(),type:"exp",amount:186.4,method:"card",cat:"Jedzenie",note:"Biedronka",date:addDays(-4)},
      {id:uid(),type:"exp",amount:45,method:"cash",cat:"Transport",note:"Paliwo dolewka",date:addDays(-3)},
      {id:uid(),type:"exp",amount:129,method:"card",cat:"Sport",note:"Karnet basen",date:addDays(-1)}
    ],
    events:[
      {id:uid(),title:"Trening grupy pływackiej",cat:"Trening",days:[1,3,5],time:"17:00",dur:90,place:"Basen",from:addDays(-30),to:"",every:1,skip:[],over:{}},
      {id:uid(),title:"Biomechanika – wykład",cat:"Studia",days:[2],time:"10:00",dur:90,place:"Sala 112",from:addDays(-20),to:"2027-01-31",every:1,skip:[],over:{}},
      {id:uid(),title:"Fizjologia wysiłku – ćwiczenia",cat:"Studia",days:[4],time:"12:15",dur:90,place:"Lab. 3",from:addDays(-19),to:"2027-01-31",every:2,skip:[],over:{}},
      {id:uid(),title:"Zajęcia sportowe – praca",cat:"Praca",days:[6],time:"09:00",dur:180,place:"Hala",from:addDays(-30),to:"",every:1,skip:[],over:{}},
      {id:uid(),title:"Trening 2015B",cat:"Praca",days:[2,4],time:"16:30",dur:90,place:"Marki",from:addDays(-60),to:"",every:1,skip:[addDays(-9)],over:{},work:"j-marc|s-2015b"},
      {id:uid(),title:"Trening 2020",cat:"Praca",days:[1,3],time:"15:30",dur:60,place:"Marki",from:addDays(-60),to:"",every:1,skip:[],over:{},work:"j-marc|s-2020"},
      {id:uid(),title:"Mecz 2015B",cat:"Praca",days:[(new Date(addDays(-7)+"T00:00").getDay()+6)%7+1],time:"10:00",dur:90,place:"Marki",from:addDays(-7),to:addDays(-7),every:1,skip:[],over:{},work:"j-marc|s-2015b",kind:"M",opponent:"KS Ząbki",once:true},
      {id:uid(),title:"Mecz 2015B",cat:"Praca",days:[(new Date(addDays(1)+"T00:00").getDay()+6)%7+1],time:"11:00",dur:90,place:"wyjazd",from:addDays(1),to:addDays(1),every:1,skip:[],over:{},work:"j-marc|s-2015b",kind:"M",opponent:"Escola Varsovia",once:true}
    ],
    plan:[
      {id:uid(),type:"inc",amount:600,method:"cash",cat:"Inne",note:"Obóz – zaliczka",date:addDays(14)}
    ],
    recur:[
      {id:uid(),type:"exp",amount:1500,method:"card",cat:"Rachunki",note:"Czynsz",next:addDays(5),freq:"month",to:""},
      {id:uid(),type:"exp",amount:89,method:"card",cat:"Rachunki",note:"Telefon + internet",next:addDays(8),freq:"month",to:""},
      {id:uid(),type:"exp",amount:129,method:"card",cat:"Sport",note:"Karnet basen",next:addDays(29),freq:"month",to:""},
      {id:uid(),type:"inc",amount:3200,method:"card",cat:"Wynagrodzenie",note:"Wypłata",next:addDays(18),freq:"month",to:""}
    ]};
}
const DEF_LISTS = () => [{id:"l-super",name:"Supermarket",exp:"Jedzenie"},{id:"l-drog",name:"Drogeria",exp:"Zakupy"},{id:"l-elek",name:"Elektronika",exp:"Zakupy"},{id:"l-hobby",name:"Hobby",exp:"Rozrywka"}];
const emptyState = () => ({demo:false,v7:true,v8:true,me:{name:""},jobs:[],workLog:[],travels:[],routines:[],routineLog:{},cats:[...DEF_CATS],quests:[],tx:[],plan:[],events:[],recur:[],shop:{items:[],lists:DEF_LISTS()},prices:{}});
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || sample(); } catch(e){ S = sample(); }
// Aktualizacja NIGDY nie nadpisuje danych. Do starszych danych dokładamy tylko brakujące części.
if(S.demo && !S.v7 && !(S.shop && S.shop.items)){ const smp=sample(); S.shop=smp.shop; S.prices={...smp.prices,...(S.prices||{})}; }
S.v7 = true; S.v8 = true; S.jobs ||= []; S.me ||= {name:""}; S.jobs.forEach(j=>{ if(j.rateType==="session") j.rateType="unit"; j.subs ||= []; }); S.workLog ||= []; S.travels ||= []; S.routines ||= []; S.routineLog ||= {}; S.shop ||= {items:[],lists:DEF_LISTS()}; S.shop.items ||= []; S.shop.lists ||= DEF_LISTS(); S.prices ||= {}; S.events ||= []; S.recur ||= []; S.plan ||= []; S.tx ||= []; S.quests ||= [];
S.events.forEach(e=>{ e.skip ||= []; e.over ||= {}; });
// migracja: stare "due" -> dzień w planie (gdy jest godzina) albo deadline
S.quests.forEach(q=>{ if("due" in q){ if(q.time){ q.date ||= q.due; } else { q.deadline ||= q.due; } delete q.due; } q.date ||= ""; q.deadline ||= ""; });
const isLate = q => !q.done && ((q.date && q.date<TODAY) || (!q.date && q.deadline && q.deadline<TODAY));
const byDeadline = (a,b) => (a.deadline||"9999").localeCompare(b.deadline||"9999") || b.prio-a.prio;
const save = () => { try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} };

let tab = "day", filter = "Wszystkie";
queueMicrotask(()=>{ let ch=false; S.travels.forEach(t=>{ if(t.cost>0 && !t.txId && !t.planId){ syncTravelMoney(t); ch=true; } }); if(ch){ save(); render(); } });
document.getElementById("today").textContent = d0.toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});

let toastT;
function toast(msg){ const t=document.getElementById("toast"); t.textContent=msg; t.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true,3200); }

/* ---------- pieniądze ---------- */
const methodLabel = t => t.type==="trf" ? (t.dir==="toCard"?"gotówka → konto":"konto → gotówka") : (t.method==="cash"?"gotówka":"karta/przelew");
const txTitle = t => t.type==="trf" ? (t.dir==="toCard"?"Wpłata na konto":"Wypłata z konta")+(t.note?` · ${t.note}`:"") : (t.note||t.cat);
const totalDelta = t => t.type==="inc"?t.amount : t.type==="exp"?-t.amount : 0;
function cashDelta(t){
  if(t.type==="trf") return t.dir==="toCash"?t.amount:-t.amount;
  return t.method==="cash" ? totalDelta(t) : 0;
}
const balances = list => { const total=list.reduce((s,t)=>s+totalDelta(t),0), cash=list.reduce((s,t)=>s+cashDelta(t),0); return {total,cash,card:total-cash}; };
const amtHTML = t => t.type==="trf" ? `<span class="amt num trf">⇄ ${zl(t.amount)}</span>` : `<span class="amt num ${t.type}">${t.type==="inc"?"+":"−"}${zl(t.amount)}</span>`;

function advance(r, s){
  if(r.freq==="week") return plusDays(s,7);
  const x=new Date(s+"T00:00"), day=r.day||x.getDate();
  const y=x.getFullYear(), m=x.getMonth()+1, last=new Date(y,m+1,0).getDate();
  return iso(new Date(y,m,Math.min(day,last)));
}
function occurrences(r, until){
  const out=[]; let d=r.next;
  for(let i=0;i<500 && d<=until && (!r.to || d<=r.to); i++){ out.push(d); d=advance(r,d); }
  return out;
}
const freqLabel = r => r.freq==="week"?"co tydzień":"co miesiąc";
function opsOn(date){
  return [...S.plan.filter(t=>t.date===date).map(t=>({...t,list:"plan"})),
          ...S.recur.filter(r=>occurrences(r,date).includes(date)).map(r=>({...r,date,list:"recur"}))];
}

/* prognoza salda */
function forecast(date){
  const now = balances(S.tx);
  const plans = S.plan.filter(t=>t.date<=date).map(t=>({...t,k:"plan"}));
  const recs = S.recur.flatMap(r=>occurrences(r,date).map(d=>({...r,date:d,k:"recur"})));
  const ops = [...plans,...recs];
  const when = q => q.date || q.deadline;
  const qs = S.quests.filter(q=>!q.done && q.cost>0 && when(q) && when(q)<=date);
  const nodue = S.quests.filter(q=>!q.done && q.cost>0 && !when(q));
  const pInc = ops.filter(t=>t.type==="inc").reduce((s,t)=>s+t.amount,0);
  const pExp = ops.filter(t=>t.type==="exp").reduce((s,t)=>s+t.amount,0);
  const qExp = qs.reduce((s,q)=>s+q.cost,0);
  const total = now.total + pInc - pExp - qExp;
  const cash = now.cash + ops.reduce((s,t)=>s+cashDelta(t),0) - qs.filter(q=>q.method==="cash").reduce((s,q)=>s+q.cost,0);
  const items = [...ops.filter(t=>t.type!=="trf").map(t=>({d:t.date,n:t.note||t.cat,v:totalDelta(t),k:t.k})),
                 ...qs.map(q=>({d:when(q),n:q.title,v:-q.cost,k:"quest",late:when(q)<TODAY}))].sort((a,b)=>a.d.localeCompare(b.d));
  return {date, cur:now.total, pInc, pExp, qExp, total, cash, card:total-cash, items, nodue};
}
function breakdownHTML(f, withSplit){
  return `<div class="brk">
      <span>Saldo dziś</span><span class="num">${zl(f.cur)}</span>
      ${f.pInc?`<span>Wpływy po drodze</span><span class="num" style="color:var(--inc)">+${zl(f.pInc)}</span>`:""}
      ${f.pExp?`<span>Wydatki i rachunki</span><span class="num" style="color:var(--exp)">−${zl(f.pExp)}</span>`:""}
      ${f.qExp?`<span>Koszty questów</span><span class="num" style="color:var(--exp)">−${zl(f.qExp)}</span>`:""}
      ${withSplit?`<span>w tym gotówka</span><span class="num">${zl(f.cash)}</span><span>w tym konto</span><span class="num">${zl(f.card)}</span>`:""}
    </div>${f.total<0?`<div class="warn" style="margin-top:6px">Saldo zejdzie poniżej zera.</div>`:""}`;
}
function itemsHTML(f){
  if(!f.items.length) return "";
  return `<details><summary>Co po drodze (${f.items.length})</summary><div class="items" style="margin-top:6px">${
    f.items.map(i=>`<div><span class="num">${fmtDate(i.d)}</span><span>${i.k==="quest"?"Quest: ":i.k==="recur"?"⟳ ":""}${esc(i.n)}${i.late?' <span class="dl late">zaległy</span>':""}</span><span class="num" style="color:${i.v<0?"var(--exp)":"var(--inc)"}">${i.v<0?"−":"+"}${zl(Math.abs(i.v))}</span></div>`).join("")
  }</div></details>`;
}
let peekDate = addDays(30);
function quickDate(k){ if(k==="eom"){ return iso(new Date(d0.getFullYear(),d0.getMonth()+1,0)); } return addDays(+k); }
function renderPeek(){
  const inp = document.getElementById("peek-date");
  inp.value = peekDate; inp.min = TODAY;
  const f = forecast(peekDate);
  const v = document.getElementById("peek-val");
  v.textContent = zl(f.total); v.classList.toggle("neg", f.total<0);
  const nd = f.nodue.length ? `<div class="hint" style="margin:0">Nie wliczone: ${f.nodue.length} quest(y) z kosztem bez dnia i deadline'u (${zl(f.nodue.reduce((s,q)=>s+q.cost,0))}).</div>` : "";
  document.getElementById("peek-body").innerHTML = breakdownHTML(f,true) + itemsHTML(f) + nd;
  document.querySelectorAll("#peek-quick button").forEach(b=>b.setAttribute("aria-pressed", quickDate(b.dataset.peek)===peekDate));
}

/* ---------- questy ---------- */
const relDay = s => { const diff=Math.round((new Date(s+"T00:00")-d0)/864e5); return {diff, txt: diff===0?"dziś":diff===1?"jutro":diff===-1?"wczoraj":diff<0?`${-diff} dn. temu`:`za ${diff} dn.`}; };
function dueInfo(q){
  let out = "";
  if(q.date){ const r=relDay(q.date); out += `<span class="dl ${!q.done&&r.diff<0?"late":""}">📅 ${r.diff===0?"dziś":r.diff===1?"jutro":fmtDate(q.date)}${q.time?" "+q.time:""}</span>`; }
  if(q.deadline){ const r=relDay(q.deadline); const cls=q.done?"":r.diff<0?"late":r.diff<=2?"soon":"";
    out += `<span class="dl ${cls}">⚑ deadline ${fmtDate(q.deadline)} · ${r.diff<0&&!q.done?`${-r.diff} dn. po terminie`:r.txt}</span>`; }
  return out;
}
function prioBars(p){
  let b=""; for(let i=1;i<=4;i++) b+=`<i style="${i<=p?`background:var(--p${p})`:""}"></i>`;
  return `<span class="prio" style="color:var(--p${p})">${b}&nbsp;${PRIO[p]}</span>`;
}
function questCard(q, extra=""){
  return `<div class="quest ${q.done?"done":""}">
      <button class="check" data-toggle="${q.id}" aria-label="${q.done?"Przywróć":"Ukończ"} quest">${q.done?"✓":""}</button>
      <div style="min-width:0" data-editq="${q.id}"><div class="qt">${esc(q.title)}</div>
        <div class="meta">${prioBars(q.prio)}<span>${esc(q.cat)}</span>${q.shopList?`<span>🛒 ${shopOpen(q.shopList).length} do kupienia</span>`:""}${q.dur?`<span class="num">⏳ ${fmtDur(q.dur)}</span>`:""}${q.cost?`<span class="cost num">−${zl(q.cost)}${q.method==="cash"?" · gotówka":""}${q.expCat?" · "+esc(q.expCat):""}</span>`:""}${dueInfo(q)}${extra}</div></div>
      <button class="del" data-delq="${q.id}" aria-label="Usuń quest">×</button></div>`;
}
const dragCard = (q,extra) => questCard(q,extra).replace('<div class="quest ',`<div data-drag="${q.id}" class="quest drag `).replace('<button class="del"','<span class="grip" aria-hidden="true">⋮⋮</span><button class="del"');

function syncQuestTx(q){
  if(q.done && q.cost>0){
    let t = q.txId && S.tx.find(x=>x.id===q.txId);
    if(!t){ t={id:uid(),type:"exp",date:TODAY,fromQuest:q.id}; S.tx.push(t); q.txId=t.id; }
    Object.assign(t,{amount:q.cost,method:q.method||"card",cat:q.expCat||"Inne",note:q.title});
  } else if(q.txId){ S.tx=S.tx.filter(t=>t.id!==q.txId); delete q.txId; }
}

/* kolizje */
function clashes(date, time, dur, exceptQ, exceptT){
  if(!date||!time) return [];
  const a=toMin(time), b=a+(dur||30);
  return [...eventsOn(date).filter(e=>{const s=toMin(e.time);return a<s+e.dur && b>s;}).map(e=>e.title),
          ...S.travels.filter(t=>t.id!==exceptT && t.date===date && t.dep && a<tEnd(t) && b>toMin(t.dep)).map(t=>tLabel(t)),
          ...S.quests.filter(q=>q.id!==exceptQ && !q.done && q.date===date && q.time && a<toMin(q.time)+(q.dur||30) && b>toMin(q.time)).map(q=>q.title)];
}

/* ---------- stałe wydarzenia ---------- */
const WD = ["Pn","Wt","Śr","Cz","Pt","So","Nd"];
const wdOf = s => (new Date(s+"T00:00").getDay()+6)%7+1;
const mondayOf = s => { const x=new Date(s+"T00:00"); x.setDate(x.getDate()-((x.getDay()+6)%7)); return x; };
function occursOn(e,s){
  if(e.from && s<e.from) return false;
  if(e.to && s>e.to) return false;
  if(!e.days.includes(wdOf(s))) return false;
  if(e.every===2 && e.from){ const w=Math.round((mondayOf(s)-mondayOf(e.from))/(7*864e5)); if(w%2) return false; }
  return true;
}
function eventsOn(s, withSkipped){
  const out=[];
  for(const e of S.events){
    const ovs=e.over||{}, skip=e.skip||[];
    if(occursOn(e,s)){
      const ov=ovs[s], skipped=skip.includes(s);
      if((!skipped||withSkipped) && !(ov && ov.date && ov.date!==s)) out.push({...e,...(ov||{}),id:e.id,orig:s,edited:!!ov,skipped});
    }
    for(const [k,ov] of Object.entries(ovs)) if(k!==s && ov.date===s && occursOn(e,k) && !skip.includes(k)) out.push({...e,...ov,id:e.id,orig:k,edited:true,moved:true});
  }
  return out.sort((a,b)=>a.time.localeCompare(b.time));
}
const evSummary = e => `${e.days.map(d=>WD[d-1]).join(", ")} · ${e.time}–${hhmm(toMin(e.time)+e.dur)}${e.place?" · "+esc(e.place):""} · ${e.every===2?"co 2 tyg.":"co tydzień"}${e.to?" · do "+fmtDate(e.to):""}${e.work&&workName(e.work)?" · 💼 "+esc(workName(e.work)):""}`;
const instLine = i => `${i.kind==="M"?"⚽ ":""}${i.time}–${hhmm(toMin(i.time)+i.dur)}${i.opponent?" · vs "+esc(i.opponent):""}${i.place?" · "+esc(i.place):""} · ${esc(i.cat)}${i.moved?` · <span class="evtag">przeniesione z ${fmtDate(i.orig)}</span>`:i.edited?' · <span class="evtag">zmienione</span>':""}`;

function eventSheet(id, pre={}){
  const e = id ? S.events.find(x=>x.id===id) : {title:"",cat:"Trening",days:[wdOf(tab==="day"?dayDate:selDay)],time:(pre&&pre.time)||"17:00",dur:60,place:"",from:TODAY,to:"",every:1,work:""};
  const h=Math.floor(e.dur/60), m=e.dur%60;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Stałe wydarzenie"><h3>${id?"Edytuj całą serię":"Nowe stałe wydarzenie"}</h3><form id="f">
    <div class="field"><label class="label" for="e-title">Nazwa</label><input id="e-title" required value="${esc(e.title)}" placeholder="np. Trening U12, Anatomia – ćwiczenia"></div>
    <div class="row">
      <div class="field"><label class="label" for="e-cat">Kategoria</label><select id="e-cat">${S.cats.map(c=>`<option ${c===e.cat?"selected":""}>${esc(c)}</option>`).join("")}</select></div>
      <div class="field"><label class="label" for="e-place">Miejsce</label><input id="e-place" value="${esc(e.place||"")}" placeholder="np. Sala 112"></div>
    </div>
    ${workField("e-work", e.work)}
    ${S.jobs.length?`<div class="field"><span class="label">Rodzaj jednostki</span>${seg("ekind",[["T","Trening (T)"],["M","Mecz (M)"]],e.kind||"T")}</div>`:""}
    <div class="field"><span class="label">Dni tygodnia</span><div class="seg dayseg" id="e-days" role="group" aria-label="Dni tygodnia">${WD.map((w,i)=>`<button type="button" data-d="${i+1}" aria-pressed="${e.days.includes(i+1)}">${w}</button>`).join("")}</div></div>
    <div class="field"><label class="label" for="e-time">Godzina startu</label><input id="e-time" type="time" step="300" value="${e.time}" required></div>
    <div class="field"><span class="label">Czas trwania</span><div class="durrow"><input id="e-h" type="number" min="0" max="23" inputmode="numeric" value="${h||""}" placeholder="0" aria-label="Godziny"><span>h</span><input id="e-m" type="number" min="0" max="59" step="5" inputmode="numeric" value="${m||""}" placeholder="0" aria-label="Minuty"><span>min</span></div></div>
    <div class="quick" id="e-durq"><button type="button" data-dur="45">45 min</button><button type="button" data-dur="60">1 h</button><button type="button" data-dur="90">1,5 h</button><button type="button" data-dur="120">2 h</button><button type="button" data-dur="180">3 h</button></div>
    <div class="field"><span class="label">Powtarzanie</span>${seg("every",[[1,"Co tydzień"],[2,"Co 2 tygodnie"]],e.every)}</div>
    <div class="row">
      <div class="field"><label class="label" for="e-from">Od</label><input id="e-from" type="date" value="${e.from||TODAY}"></div>
      <div class="field"><label class="label" for="e-to">Do (opcjonalnie)</label><input id="e-to" type="date" value="${e.to||""}"></div>
    </div>
    <p class="hint" style="margin:0">„Co 2 tygodnie” liczy od tygodnia z datą „Od”. Zmiany pojedynczych terminów zostają zachowane.</p>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="e-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Dodaj"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  ov.querySelector("#e-days").onclick=ev=>{const b=ev.target.closest("button");if(b)b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");};
  ov.querySelector("#e-durq").onclick=ev=>{const b=ev.target.closest("button");if(!b)return;const d=+b.dataset.dur;ov.querySelector("#e-h").value=Math.floor(d/60)||"";ov.querySelector("#e-m").value=d%60||"";};
  ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#e-del"),()=>{ S.events=S.events.filter(x=>x.id!==id); save();close();render(); });
  ov.querySelector("#f").onsubmit=ev=>{ev.preventDefault();
    const err=ov.querySelector("#err");
    const title=ov.querySelector("#e-title").value.trim(); if(!title){err.textContent="Wpisz nazwę wydarzenia.";return;}
    const days=[...ov.querySelectorAll("#e-days button[aria-pressed=true]")].map(b=>+b.dataset.d); if(!days.length){err.textContent="Zaznacz przynajmniej jeden dzień tygodnia.";return;}
    const dur=(parseInt(ov.querySelector("#e-h").value)||0)*60+(parseInt(ov.querySelector("#e-m").value)||0); if(dur<5){err.textContent="Podaj czas trwania, np. 1 h 30 min.";return;}
    const from=ov.querySelector("#e-from").value||TODAY, to=ov.querySelector("#e-to").value;
    if(to && to<from){err.textContent="Data „Do” musi być po dacie „Od”.";return;}
    const data={title,cat:ov.querySelector("#e-cat").value,place:ov.querySelector("#e-place").value.trim(),days,time:ov.querySelector("#e-time").value,dur,every:+segVal(ov,"every"),from,to,work:ov.querySelector("#e-work")?.value ?? (e.work||""),kind:ov.querySelector('[data-seg="ekind"]')?segVal(ov,"ekind"):(e.kind||"T")};
    if(id) Object.assign(e,data); else S.events.push({id:uid(),skip:[],over:{},...data});
    save();close();render();};
}
function eventDaySheet(id, orig){
  const e=S.events.find(x=>x.id===id); if(!e) return;
  if(e.once){ matchSheet(id); return; }
  const inst = eventsOn((e.over[orig]&&e.over[orig].date)||orig, true).find(i=>i.id===id && i.orig===orig) || {...e,orig};
  const when = new Date((inst.date||orig)+"T00:00").toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${esc(e.title)}"><h3>${esc(inst.title)}</h3>
    <div class="meta" style="margin:-6px 0 14px;font-size:.9rem"><span style="text-transform:capitalize">${when}</span> · ${instLine(inst)}</div>
    <div class="stack">
      <button class="btn primary" id="ed-one">Zmień tylko ten termin</button>
      <button class="btn ghost" id="ed-skip">Odwołaj tylko ten termin</button>
      ${e.over[orig]?`<button class="btn ghost" id="ed-reset">Przywróć ustawienia serii</button>`:""}
      <button class="btn ghost" id="ed-edit">Edytuj całą serię</button>
      <button class="btn ghost" id="ed-close">Zamknij</button>
    </div></div>`;
  ov.hidden=false;
  ov.querySelector("#ed-close").onclick=close;
  ov.querySelector("#ed-edit").onclick=()=>eventSheet(id);
  ov.querySelector("#ed-one").onclick=()=>occSheet(id,orig);
  ov.querySelector("#ed-skip").onclick=()=>{ if(!e.skip.includes(orig)) e.skip.push(orig); delete e.over[orig]; save();close();render(); toast("Odwołano ten termin. Przywrócisz go w planie dnia."); };
  const rs=ov.querySelector("#ed-reset"); if(rs) rs.onclick=()=>{ delete e.over[orig]; save();close();render(); };
}
function occSheet(id, orig){
  const e=S.events.find(x=>x.id===id), o=e.over[orig]||{};
  const date=o.date||orig, time=o.time||e.time, dur=o.dur||e.dur, place=o.place??e.place;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Zmień termin"><h3>Zmień tylko ten termin</h3>
    <p class="hint" style="margin:-6px 0 12px">${esc(e.title)} · zgodnie z serią: ${fmtDate(orig)}, ${e.time}. Reszta serii zostaje bez zmian.</p><form id="f">
    <div class="row">
      <div class="field"><label class="label" for="o-date">Dzień</label><input id="o-date" type="date" value="${date}" required></div>
      <div class="field"><label class="label" for="o-time">Godzina</label><input id="o-time" type="time" step="300" value="${time}" required></div>
    </div>
    <div class="row">
      <div class="field"><label class="label" for="o-dur">Czas (min)</label><input id="o-dur" type="number" min="5" step="5" inputmode="numeric" value="${dur}"></div>
      <div class="field"><label class="label" for="o-place">Miejsce</label><input id="o-place" value="${esc(place||"")}"></div>
    </div>
    <div class="err" id="err"></div>
    <div class="actions"><button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">Zapisz termin</button></div></form></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  ov.querySelector("#f").onsubmit=ev=>{ev.preventDefault();
    const nd=ov.querySelector("#o-date").value, nt=ov.querySelector("#o-time").value, du=parseInt(ov.querySelector("#o-dur").value)||e.dur;
    if(!nd||!nt){ov.querySelector("#err").textContent="Podaj dzień i godzinę.";return;}
    e.over[orig]={date:nd,time:nt,dur:du,place:ov.querySelector("#o-place").value.trim()};
    e.skip=e.skip.filter(d=>d!==orig);
    save();close();render(); toast(nd!==orig?`Przeniesiono na ${fmtDate(nd)}, ${nt}.`:`Zmieniono termin na ${nt}.`);
  };
}
function renderEventsList(){
  document.getElementById("c-week").innerHTML = WD.map((w,i)=>`<div><span class="wd" style="background:none;padding:0;font-size:.66rem;text-align:center">${w}</span>${
    S.events.filter(e=>!e.once && e.days.includes(i+1) && (!e.to || e.to>=TODAY)).sort((a,b)=>a.time.localeCompare(b.time)).map(e=>`<span><b>${e.time}</b>${esc(e.title)}${e.every===2?" (co 2 tyg.)":""}</span>`).join("")}</div>`).join("");
  const series=S.events.filter(e=>!e.once);
  document.getElementById("c-week").hidden = !series.length;
  document.getElementById("c-events").innerHTML = series.length ? series.map(e=>`<div class="evrow"><div style="min-width:0"><strong>${esc(e.title)}</strong><span class="meta" style="margin:2px 0 0">${evSummary(e)} · ${esc(e.cat)}${e.to&&e.to<TODAY?' · <span class="dl late">zakończone</span>':""}</span></div><button class="mini" data-editev="${e.id}">Edytuj</button></div>`).join("")
    : `<div class="empty">Dodaj stałe rzeczy, które powtarzają się co tydzień: treningi, pracę, plan zajęć. Same pojawią się w planie dnia i kalendarzu.</div>`;
}
const evRow = i => `<div class="evrow"><div style="min-width:0"><strong>${esc(i.title)}</strong><span class="meta" style="margin:2px 0 0">${instLine(i)}</span></div><button class="mini" data-evday="${i.id}" data-orig="${i.orig}">Opcje</button></div>`;
const opRow = t => `<div class="tx" data-edittx="${t.id}" data-list="${t.list}"><div class="t"><strong>${t.list==="recur"?"⟳ ":""}${esc(txTitle(t))}</strong><span class="meta" style="margin:0">${t.type==="trf"?"":esc(t.cat)+" · "}${methodLabel(t)}${t.list==="recur"?" · "+freqLabel(t):""}</span></div>${amtHTML(t)}<span></span></div>`;

/* ---------- plan dnia ---------- */
let dayDate = TODAY;
function shiftDay(n){ dayDate=plusDays(dayDate,n); renderDay(); }
function renderDay(){
  renderRoutines();
  const dt = new Date(dayDate+"T00:00");
  const rel = dayDate===TODAY?"Dziś":dayDate===addDays(1)?"Jutro":dayDate===addDays(-1)?"Wczoraj":"";
  const wd = dt.toLocaleDateString("pl-PL",{weekday:"long"});
  document.getElementById("d-title").innerHTML = `${rel||wd.replace(/^./,c=>c.toUpperCase())}<span>${rel?wd+", ":""}${dt.toLocaleDateString("pl-PL",{day:"numeric",month:"long"})}</span>`;
  const qs = S.quests.filter(q=>q.date===dayDate);
  const timed = qs.filter(q=>q.time).sort((a,b)=>a.time.localeCompare(b.time));
  const untimed = qs.filter(q=>!q.time).sort((a,b)=>a.done-b.done||b.prio-a.prio);
  const ops = opsOn(dayDate).filter(t=>!t.travelId);
  const open = qs.filter(q=>!q.done);
  const dur = open.reduce((s,q)=>s+(q.dur||0),0), cost = open.reduce((s,q)=>s+(q.cost||0),0);
  const evs = eventsOn(dayDate), skipped = eventsOn(dayDate,true).filter(e=>e.skipped);
  const trs = travelsOn(dayDate), tCost = trs.filter(t=>!t.paid).reduce((s,t)=>s+(t.cost||0),0);
  const f = forecast(dayDate);
  document.getElementById("d-sum").innerHTML = `
    <div><span class="label">Zrobione</span><b class="num">${qs.length-open.length}/${qs.length}</b></div>
    <div><span class="label">Czas questów</span><b class="num">${dur?fmtDur(dur):"—"}</b></div>
    <div><span class="label">Stałe</span><b class="num">${evs.length?evs.length+" · "+fmtDur(evs.reduce((s,e)=>s+e.dur,0)):"—"}</b></div>
    ${trs.length?`<div><span class="label">Podróże</span><b class="num">${trs.length} · ${fmtDur(trs.reduce((s,t)=>s+tDur(t),0))||"—"}</b></div>`:""}
    <div><span class="label">Koszty</span><b class="num" style="color:${cost+tCost?"var(--exp)":"inherit"}">${cost+tCost?"−"+zl(round2(cost+tCost)):"—"}</b></div>
    <div><span class="label">Saldo na koniec dnia</span><b class="num" style="color:${f.total<0?"var(--exp)":"inherit"}">${zl(f.total)}</b></div>`;
  document.getElementById("d-cancel").innerHTML = skipped.map(e=>`<div class="demo" style="margin-top:8px"><span>Odwołane: ${esc(e.title)} (${e.time})</span><button class="mini" data-unskip="${e.id}" data-orig="${e.orig}">Przywróć</button></div>`).join("");

  // zaległe (tylko w widoku dzisiejszym)
  const late = dayDate===TODAY ? S.quests.filter(isLate).sort((a,b)=>b.prio-a.prio||(a.date||a.deadline).localeCompare(b.date||b.deadline)) : [];
  const dls = S.quests.filter(q=>!q.done && q.deadline===dayDate);
  document.getElementById("d-cancel").insertAdjacentHTML("beforeend", dls.map(q=>`<div class="demo" style="margin-top:8px;border-color:var(--gold)"><span>⚑ Deadline ${dayDate===TODAY?"dziś":"tego dnia"}: <b>${esc(q.title)}</b>${q.date&&q.date!==dayDate?` · w planie na ${fmtDate(q.date)}`:q.date?"":" · jeszcze nie w planie"}</span>${!q.date?`<button class="mini" data-plan="${q.id}">Wrzuć w plan</button>`:""}</div>`).join(""));
  document.getElementById("d-lateh").hidden = !late.length;
  document.getElementById("d-late").innerHTML = late.map(q=>dragCard(q,`<button class="mini" data-totoday="${q.id}">Przenieś na dziś</button>`)).join("");

  let sH = 6, eH = 23;
  evs.forEach(e=>{ const st=toMin(e.time); sH=Math.min(sH,Math.floor(st/60)); eH=Math.max(eH,Math.ceil((st+e.dur)/60)); });
  timed.forEach(q=>{ const st=toMin(q.time); sH=Math.min(sH,Math.floor(st/60)); eH=Math.max(eH,Math.ceil((st+(q.dur||30))/60)); });
  trs.forEach(t=>{ sH=Math.min(sH,Math.floor(toMin(t.dep)/60)); eH=Math.max(eH,Math.ceil(tEnd(t)/60)); });
  eH = Math.min(eH,24);
  const H = 60; dayRange = {sH,eH,H};
  let rows = "";
  for(let h=sH; h<eH; h++){ const l=String(h).padStart(2,"0")+":00"; rows += `<div class="hour"><span class="num">${l}</span><button class="slot" data-slot="${l}" aria-label="Dodaj quest o ${l}"></button></div>`; }
  const ev = [...evs.map(e=>({e,st:toMin(e.time),en:toMin(e.time)+e.dur})), ...timed.map(q=>({q,st:toMin(q.time),en:toMin(q.time)+Math.max(q.dur||30,20)})), ...trs.map(t=>({t,st:toMin(t.dep),en:Math.max(tEnd(t),toMin(t.dep)+20)}))].sort((a,b)=>a.st-b.st);
  const laneEnd = []; ev.forEach(e=>{ let l=laneEnd.findIndex(x=>x<=e.st); if(l<0){l=laneEnd.length;laneEnd.push(0);} laneEnd[l]=e.en; e.lane=l; });
  ev.forEach(e=>{ e.cols = Math.max(1, ...ev.filter(o=>o.st<e.en&&o.en>e.st).map(o=>o.lane+1)); });
  const blocks = ev.map(e=>{
    const top=(e.st-sH*60)/60*H, hgt=Math.max((e.en-e.st)/60*H-2,22), w=100/e.cols;
    const pos=`top:${top+1}px;height:${hgt}px;left:calc(${e.lane*w}% + 2px);width:calc(${w}% - 4px)`;
    if(e.t){ const x=e.t;
      return `<button class="blk travel" data-travel="${x.id}" style="${pos}" aria-label="Podróż ${esc(x.from)} – ${esc(x.to)}, ${x.dep}"><span class="bt">${esc(tLabel(x))}</span><span class="bm num">${x.dep}${x.arr?"–"+x.arr+(tOvernight(x)?" (+1)":""):""}${x.cost?` · ${zl(x.cost)}${x.paid?" ✓":""}`:""}${x.note?" · "+esc(x.note):""}</span></button>`; }
    if(e.e){ const x=e.e;
      return `<button class="blk event${x.kind==="M"?" match":""}" data-evday="${x.id}" data-orig="${x.orig}" style="${pos}" aria-label="${esc(x.title)}, ${x.time}"><span class="bt">${esc(x.title)}</span><span class="bm num">${instLine(x)}</span></button>`; }
    const q=e.q, clash=!q.done && clashes(q.date,q.time,q.dur,q.id).length;
    return `<div class="blk ${q.done?"done":""} ${clash?"clash":""}" ${q.done?"":`data-drag="${q.id}"`} style="--pc:var(--p${q.prio});${pos}">
      <button class="check" data-toggle="${q.id}" aria-label="${q.done?"Przywróć":"Ukończ"} quest">${q.done?"✓":""}</button>
      <div style="min-width:0;flex:1;align-self:stretch" data-editq="${q.id}"><div class="bt">${esc(q.title)}</div><div class="bm num">${q.time}–${hhmm(toMin(q.time)+(q.dur||30))}${q.cost?" · −"+zl(q.cost):""} · ${esc(q.cat)}</div></div></div>`;
  }).join("");
  let now = "";
  if(dayDate===TODAY){ const n=new Date(), m=n.getHours()*60+n.getMinutes(); if(m>=sH*60&&m<=eH*60) now=`<div class="now" style="top:${(m-sH*60)/60*H}px"></div>`; }
  document.getElementById("d-tl").innerHTML = rows + `<div class="blocks">${blocks}</div>` + now;
  const loose = S.quests.filter(q=>!q.done && !q.date && !isLate(q)).sort(byDeadline);
  document.getElementById("d-looseh").hidden = !loose.length;
  document.getElementById("d-loose").innerHTML = loose.map(q=>dragCard(q,`<button class="mini" data-plan="${q.id}">Wrzuć w plan</button>`)).join("");
  document.getElementById("d-unh").hidden = !(untimed.length||ops.length);
  document.getElementById("d-un").innerHTML = untimed.map(q=>(q.done?questCard:dragCard)(q,`<button class="mini" data-settime="${q.id}">Ustaw godzinę</button>`)).join("") + ops.map(opRow).join("");
}
function suggestTime(){
  const busy = [...S.quests.filter(q=>q.date===dayDate&&q.time&&!q.done).map(q=>[toMin(q.time),toMin(q.time)+(q.dur||30)]), ...eventsOn(dayDate).map(e=>[toMin(e.time),toMin(e.time)+e.dur]), ...travelsOn(dayDate).map(t=>[toMin(t.dep),tEnd(t)])];
  let m = dayDate===TODAY ? Math.ceil((new Date().getHours()*60+new Date().getMinutes()+1)/30)*30 : 9*60;
  for(let i=0;i<40 && busy.some(([a,b])=>m<b&&m+30>a);i++) m+=30;
  return hhmm(Math.min(m,23*60+30));
}
function timeSheet(id, plan){
  const q=S.quests.find(x=>x.id===id);
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Ustaw godzinę"><h3>${esc(q.title)}</h3>${plan?`<p class="hint" style="margin:-6px 0 12px">Wrzucasz do planu na ${new Date(dayDate+"T00:00").toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"})}</p>`:""}<form id="f">
    <div class="row"><div class="field"><label class="label" for="ts-time">Godzina startu</label><input id="ts-time" type="time" step="900" value="${q.time||suggestTime()}" required></div>
    <div class="field"><label class="label" for="ts-dur">Czas (min)</label><input id="ts-dur" type="number" min="5" step="5" inputmode="numeric" value="${q.dur||30}"></div></div>
    <div class="err" id="err"></div>
    <div class="actions"><button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary" id="ts-ok">Wstaw do planu</button></div></form></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  let warned=false;
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const due=(plan||!q.date)?dayDate:q.date, time=ov.querySelector("#ts-time").value, dur=parseInt(ov.querySelector("#ts-dur").value)||q.dur||30;
    const c=clashes(due,time,dur,q.id);
    if(c.length && !warned){ warned=true; const er=ov.querySelector("#err"); er.className="err warn-soft"; er.textContent=`⚠ Koliduje z: ${c.join(", ")}.`; ov.querySelector("#ts-ok").textContent="Wstaw mimo kolizji"; return; }
    q.date=due; q.time=time; q.dur=dur; save();close();render();
    if(q.deadline && due>q.deadline) toast(`⚠ Zaplanowane po deadlinie (${fmtDate(q.deadline)}).`);};
}
/* przeciąganie questów na oś czasu */
let dayRange = {sH:6,eH:23,H:60}, pend=null, drag=null;
function previewAt(y){
  const tl=document.getElementById("d-tl"), r=tl.getBoundingClientRect();
  if(y<r.top-20 || y>r.bottom+20) return null;
  const {sH,eH,H}=dayRange;
  let m = sH*60 + (y-drag.off-r.top)/H*60;
  m = Math.round(m/15)*15;
  return Math.max(sH*60, Math.min(m, eH*60-15));
}
function beginDrag(el,x,y){
  const q=S.quests.find(t=>t.id===el.dataset.drag); if(!q) return;
  el.classList.remove("pressing"); el.classList.add("lifted");
  const g=document.createElement("div"); g.className="dragghost"; g.textContent=q.title; document.body.appendChild(g);
  const pv=document.createElement("div"); pv.className="blk preview"; pv.hidden=true;
  document.querySelector("#d-tl .blocks").appendChild(pv);
  document.getElementById("d-tl").classList.add("droptarget");
  document.body.classList.add("dragmode");
  try{ navigator.vibrate && navigator.vibrate(15); }catch(e){}
  const isBlk = el.classList.contains("blk");
  const off = isBlk ? Math.max(0, y - el.getBoundingClientRect().top) : 15;
  drag={q,el,g,pv,dur:q.dur||30,x,y,m:null,raf:0,off,moved:isBlk};
  moveDrag(x,y); autoScroll();
}
function moveDrag(x,y){
  drag.x=x; drag.y=y;
  drag.g.style.transform=`translate(${x-30}px,${y-48}px)`;
  const m=previewAt(y); drag.m=m;
  if(m===null){ drag.pv.hidden=true; return; }
  const {sH,H}=dayRange, c=clashes(dayDate,hhmm(m),drag.dur,drag.q.id);
  drag.pv.hidden=false;
  drag.pv.style.cssText=`top:${(m-sH*60)/60*H+1}px;height:${Math.max(drag.dur/60*H-2,22)}px;left:2px;width:calc(100% - 4px);${c.length?"--pc:var(--exp)":""}`;
  drag.pv.innerHTML=`<span>${hhmm(m)}–${hhmm(m+drag.dur)}${c.length?" ⚠":""}</span><span class="num" style="font-weight:500;color:var(--muted)">${c.length?"kolizja":fmtDur(drag.dur)}</span>`;
}
function autoScroll(){
  if(!drag) return;
  const edge=90, bottomBar=150; let v=0;
  if(drag.y<edge) v=-Math.ceil((edge-drag.y)/8);
  else if(drag.y>innerHeight-bottomBar) v=Math.ceil((drag.y-(innerHeight-bottomBar))/8);
  if(v){ scrollBy(0,v); moveDrag(drag.x,drag.y); }
  drag.raf=requestAnimationFrame(autoScroll);
}
function endDrag(){
  const d=drag; drag=null; cancelAnimationFrame(d.raf);
  d.g.remove(); document.body.classList.remove("dragmode");
  if(d.m!==null){
    d.q.date=dayDate; d.q.time=hhmm(d.m); d.q.dur=d.dur; save();
    const c=clashes(dayDate,d.q.time,d.dur,d.q.id);
    if(c.length) toast(`⚠ ${d.q.time} koliduje z: ${c.join(", ")}`);
    else if(d.q.deadline && dayDate>d.q.deadline) toast(`⚠ Zaplanowane po deadlinie (${fmtDate(d.q.deadline)}).`);
  }
  justDropped=true; setTimeout(()=>justDropped=false,400);
  render();
}
let justDropped=false;
document.addEventListener("click",e=>{ if(justDropped){ e.stopPropagation(); e.preventDefault(); justDropped=false; } },true);
function pressStart(e,x,y){
  const el=e.target.closest("[data-drag]"); if(!el || e.target.closest("button")) return false;
  el.classList.add("pressing");
  pend={el,x,y,t:setTimeout(()=>{ const p=pend; pend=null; beginDrag(p.el,p.x,p.y); },380)};
  return true;
}
function pressCancel(){ if(pend){ clearTimeout(pend.t); pend.el.classList.remove("pressing"); pend=null; } }
const dayView=document.getElementById("v-day");
dayView.addEventListener("touchstart",e=>{ const t=e.touches[0]; if(e.touches.length===1) pressStart(e,t.clientX,t.clientY); },{passive:true});
document.addEventListener("touchmove",e=>{
  const t=e.touches[0];
  if(pend && Math.hypot(t.clientX-pend.x,t.clientY-pend.y)>10) pressCancel();
  if(drag){ e.preventDefault(); moveDrag(t.clientX,t.clientY); }
},{passive:false});
document.addEventListener("touchend",()=>{ pressCancel(); if(drag) endDrag(); });
document.addEventListener("touchcancel",()=>{ pressCancel(); if(drag){ drag.m=null; endDrag(); } });
dayView.addEventListener("mousedown",e=>{ if(e.button===0) pressStart(e,e.clientX,e.clientY); });
document.addEventListener("mousemove",e=>{
  if(pend && Math.hypot(e.clientX-pend.x,e.clientY-pend.y)>6){ const p=pend; clearTimeout(p.t); pend=null; beginDrag(p.el,e.clientX,e.clientY); }
  if(drag) moveDrag(e.clientX,e.clientY);
});
document.addEventListener("mouseup",()=>{ pressCancel(); if(drag) endDrag(); });
dayView.addEventListener("contextmenu",e=>{ if(e.target.closest("[data-drag]")) e.preventDefault(); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape" && drag){ drag.m=null; endDrag(); } });

function addSwipe(el, onPrev, onNext){
  let x0=null,y0=null;
  el.addEventListener("touchstart",e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
  el.addEventListener("touchend",e=>{ if(x0===null||document.body.classList.contains("dragmode")){x0=null;return;} const dx=e.changedTouches[0].clientX-x0, dy=e.changedTouches[0].clientY-y0; x0=null;
    if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.5){ (dx<0?onNext:onPrev)();
      if(el.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) el.animate([{transform:`translateX(${dx<0?24:-24}px)`,opacity:.4},{transform:"none",opacity:1}],{duration:200,easing:"ease-out"}); } },{passive:true});
}

/* ---------- kalendarz ---------- */
let calY = d0.getFullYear(), calM = d0.getMonth(), selDay = TODAY;
function renderCal(){
  const first = new Date(calY, calM, 1);
  document.getElementById("c-title").textContent = first.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});
  const start = new Date(first); start.setDate(1 - ((first.getDay()+6)%7));
  const gridEnd = plusDays(iso(start),41);
  const byDay = {};
  const dlByDay = {};
  S.quests.forEach(q=>{ if(q.date) (byDay[q.date] ||= []).push(q); if(q.deadline && !q.done) (dlByDay[q.deadline] ||= []).push(q); });
  const opDays = new Set([...S.plan.filter(t=>!t.travelId).map(t=>t.date), ...S.recur.flatMap(r=>occurrences(r,gridEnd))]);
  const trDays = new Set(S.travels.map(t=>t.date));
  let h = WD.map(w=>`<div class="wd">${w}</div>`).join("");
  for(let i=0;i<42;i++){
    const d = new Date(start); d.setDate(start.getDate()+i);
    if(i===35 && d.getMonth()!==calM) break;
    const s = iso(d), qs = (byDay[s]||[]).sort((a,b)=>a.done-b.done||b.prio-a.prio);
    const late = qs.some(q=>!q.done && s<TODAY);
    let dots = qs.slice(0,4).map(q=>`<i class="${q.done?"dn":""}" style="background:var(--p${q.prio})"></i>`).join("");
    if(qs.length>4) dots += `<em class="more">+${qs.length-4}</em>`;
    if(dlByDay[s]) dots = `<em class="dlm" aria-hidden="true">⚑</em>` + dots;
    const ne = eventsOn(s).length; if(ne) dots += `<i class="ev"></i>`.repeat(Math.min(ne,2));
    if(trDays.has(s)) dots += `<i class="trv"></i>`;
    if(opDays.has(s)) dots += `<i style="background:transparent;border:1.5px solid var(--gold);width:6px;height:6px"></i>`;
    h += `<button class="day ${d.getMonth()!==calM?"out":""} ${s===TODAY?"today":""} ${late?"haslate":""}" data-day="${s}" aria-pressed="${s===selDay}" aria-label="${d.getDate()} ${d.toLocaleDateString("pl-PL",{month:"long"})}, questów: ${qs.length}${dlByDay[s]?", deadline'y: "+dlByDay[s].length:""}"><span class="n num">${d.getDate()}</span><span class="dots">${dots}</span></button>`;
  }
  document.getElementById("c-grid").innerHTML = h;

  const dl = new Date(selDay+"T00:00").toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"});
  const dq = (byDay[selDay]||[]);
  const left = dq.filter(q=>!q.done).reduce((s,q)=>s+(q.dur||0),0);
  document.getElementById("c-dayh").innerHTML = `<span style="text-transform:capitalize">${dl}</span><small>${dq.length?dq.length+" quest(y)":""}${left?` · ⏳ ${fmtDur(left)}`:""}</small>`;
  const cf = forecast(selDay);
  document.getElementById("c-peek").innerHTML = `<details class="peekline"><summary><span>Przewidywane saldo na ten dzień</span><b class="num ${cf.total<0?"neg":""}">${zl(cf.total)}</b></summary>${breakdownHTML(cf,false)}${itemsHTML(cf)}</details>`;
  renderEventsList();
  const de = eventsOn(selDay);
  const dd = dlByDay[selDay]||[];
  document.getElementById("c-day").innerHTML = (dd.length?`<div class="label" style="color:var(--gold)">⚑ Deadline'y tego dnia</div>`+dd.map(q=>questCard(q)).join("")+(dq.length||de.length?`<div class="label" style="margin-top:6px">W planie dnia</div>`:""):"")
    + travelsOn(selDay).map(trRow).join("") + de.map(evRow).join("") + (dq.length ? dq.map(q=>questCard(q)).join("")
    : (de.length||dd.length||travelsOn(selDay).length) ? "" : `<div class="empty">Nic na ten dzień. Kliknij +, żeby dodać quest z deadline'em na ten dzień.</div>`);
  const pl = opsOn(selDay).filter(t=>!t.travelId);
  document.getElementById("c-planh").hidden = !pl.length;
  document.getElementById("c-plan").innerHTML = pl.map(opRow).join("");
  const nd = S.quests.filter(q=>!q.done && !q.date).sort(byDeadline);
  document.getElementById("c-nodueh").hidden = !nd.length;
  document.getElementById("c-nodue").innerHTML = nd.map(q=>questCard(q,`<button class="mini" data-setdue="${q.id}">Zaplanuj na ${fmtDate(selDay)}</button>`)).join("");
}

/* ---------- lista questów ---------- */
function renderQuests(){
  document.getElementById("cat-filter").innerHTML = ["Wszystkie",...S.cats].map(c=>`<button class="chip" aria-pressed="${c===filter}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  const vis = S.quests.filter(q=>filter==="Wszystkie"||q.cat===filter);
  const open = vis.filter(q=>!q.done && q.date).sort((a,b)=> a.date.localeCompare(b.date) || (a.time||"99").localeCompare(b.time||"99") || b.prio-a.prio);
  const loose = vis.filter(q=>!q.done && !q.date).sort(byDeadline);
  document.getElementById("h-loose").hidden = !loose.length;
  document.getElementById("q-loose").innerHTML = loose.map(q=>questCard(q,`<button class="mini" data-plan="${q.id}">Wrzuć w plan dziś</button>`)).join("");
  const done = vis.filter(q=>q.done).sort((a,b)=>(b.doneAt||b.date||"").localeCompare(a.doneAt||a.date||""));
  document.getElementById("done-n").textContent = `(${done.length})`;
  document.getElementById("q-open").innerHTML = open.length?open.map(q=>questCard(q)).join(""):`<div class="empty">Nic jeszcze nie jest wrzucone w plan. Luźne questy zaplanujesz w zakładce Dziś.</div>`;
  document.getElementById("q-done").innerHTML = done.map(q=>questCard(q)).join("");
  document.getElementById("h-done").hidden = !done.length;
  const all = S.quests;
  document.getElementById("s-open").textContent = all.filter(q=>!q.done).length;
  document.getElementById("s-late").textContent = all.filter(isLate).length;
  document.getElementById("s-done").textContent = all.filter(q=>q.done).length;
}

/* ---------- portfel ---------- */
function renderWallet(){
  const b = balances(S.tx);
  document.getElementById("w-total").textContent = zl(b.total);
  document.getElementById("w-cash").textContent = zl(b.cash);
  document.getElementById("w-card").textContent = zl(b.card);
  renderPeek();
  const ym = TODAY.slice(0,7);
  const mt = S.tx.filter(t=>t.date.startsWith(ym));
  document.getElementById("w-month").textContent = d0.toLocaleDateString("pl-PL",{month:"long",year:"numeric"});
  document.getElementById("m-inc").textContent = zl(mt.filter(t=>t.type==="inc").reduce((s,t)=>s+t.amount,0));
  document.getElementById("m-exp").textContent = zl(mt.filter(t=>t.type==="exp").reduce((s,t)=>s+t.amount,0));
  const planned = [...S.plan.map(t=>({...t,list:"plan"})), ...S.recur.map(r=>({...r,date:r.next,list:"recur"}))].sort((a,b)=>a.date.localeCompare(b.date));
  document.getElementById("w-plan").innerHTML = planned.length ? planned.map(t=>{
    const overdue = t.date<=TODAY;
    return `<div class="tx"><div class="t" data-edittx="${t.id}" data-list="${t.list}"><strong>${t.list==="recur"?"⟳ ":""}${esc(txTitle(t))}</strong>
      <span class="meta" style="margin:0">${fmtDate(t.date)} · ${t.type==="trf"?"":esc(t.cat)+" · "}${methodLabel(t)}${t.list==="recur"?" · "+freqLabel(t):""}${overdue?' · <span class="dl soon">termin minął</span>':""}</span></div>
      ${amtHTML(t)}
      <span style="display:flex;flex-direction:column;gap:4px"><button class="mini" data-real="${t.id}" data-list="${t.list}">Zrealizuj</button>${t.list==="recur"?`<button class="mini" data-skiprec="${t.id}" style="color:var(--muted)">Pomiń</button>`:""}</span></div>`;
  }).join("") : `<div class="empty">Nic nie zaplanowane. Dodaj przyszły wydatek albo rachunek co miesiąc, np. czynsz.</div>`;
  const hist = [...S.tx].sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById("w-hist").innerHTML = hist.length ? hist.slice(0,4).map(txRow).join("") : `<div class="empty">Brak transakcji.</div>`;
  document.getElementById("w-allhist").textContent = hist.length>4 ? `Cała historia (${hist.length}) →` : "Szukaj i filtruj →";
}
function render(){
  document.getElementById("v-quests").hidden = tab!=="quests";
  document.getElementById("v-wallet").hidden = tab!=="wallet";
  document.getElementById("v-cal").hidden = tab!=="cal";
  document.getElementById("v-day").hidden = tab!=="day";
  ["day","quests","cal","work","shop","wallet"].forEach(t=>document.getElementById("t-"+t).setAttribute("aria-selected",tab===t));
  document.getElementById("demo").hidden = !S.demo;
  document.getElementById("v-shop").hidden = tab!=="shop";
  document.getElementById("v-hist").hidden = tab!=="hist";
  if(tab==="hist") document.getElementById("t-wallet").setAttribute("aria-selected","true");
  document.getElementById("v-work").hidden = tab!=="work";
  document.getElementById("v-workd").hidden = tab!=="workd";
  if(tab==="workd") document.getElementById("t-work").setAttribute("aria-selected","true");
  renderDay(); renderQuests(); renderWallet(); renderCal(); renderShop(); renderHist(); renderWork(); renderWorkDetail();
}

/* ---------- zakupy ---------- */
const SHOP_PRIO = {4:"Na cito",3:"Ważne",2:"Potrzebne za jakiś czas",1:"Może poczekać"};
const SHOP_PRIO_SHORT = {4:"Na cito",3:"Ważne",2:"Za jakiś czas",1:"Może poczekać"};
let shopFilter = "all";
const shopItem = id => S.shop.items.find(i=>i.id===id);
const shopList = id => S.shop.lists.find(l=>l.id===id);
const shopOpen = listId => S.shop.items.filter(i=>!i.bought && (i.list||"")===(listId||""));
const normName = s => String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l")
  .replace(/[^a-z0-9 ]/g," ").replace(/\b\d+([.,]\d+)?\s*(l|ml|g|kg|dag|szt|op|x)?\b/g," ").replace(/\s+/g," ").trim();
function recordPrice(name, price, src){
  const k=normName(name); price=Number(price);
  if(!k || k.length<2 || !(price>0) || price>100000) return;
  (S.prices[k] ||= []).unshift({p:round2(price),d:TODAY,s:String(src||"").slice(0,30)});
  S.prices[k] = S.prices[k].slice(0,8);
}
function priceHistory(name){
  const k=normName(name); if(!k) return null;
  if(S.prices[k]) return S.prices[k];
  const kt=k.split(" ");
  let best=null, score=0;
  for(const [key,arr] of Object.entries(S.prices)){
    const t=key.split(" "); const common=kt.filter(w=>w.length>2 && t.includes(w)).length;
    const sc = common/Math.max(kt.length,t.length) + (t[0]===kt[0]&&kt[0].length>3?0.3:0);
    if(sc>score && sc>=0.5){ score=sc; best=arr; }
  }
  return best;
}
const median = a => { const b=[...a].sort((x,y)=>x-y); const m=Math.floor(b.length/2); return b.length%2?b[m]:(b[m-1]+b[m])/2; };
function estimate(it){
  const q=it.qty||1;
  if(it.price>0) return {v:round2(it.price*q), src:"Twoja cena"};
  const h=priceHistory(it.name);
  if(h && h.length){ const v=median(h.slice(0,5).map(x=>x.p)); return {v:round2(v*q), src:h[0].s?`ostatnio ${h[0].s}, ${fmtDate(h[0].d)}`:`z historii, ${fmtDate(h[0].d)}`}; }
  return null;
}
function listEstimate(items){
  let sum=0, unknown=0; items.forEach(i=>{ const e=estimate(i); if(e) sum+=e.v; else unknown++; });
  return {sum:round2(sum), unknown};
}
const estLine = ({sum,unknown}) => sum? `≈ ${zl(sum)}${unknown?` + ${unknown} bez ceny`:""}` : unknown? `${unknown} bez ceny` : "";

function syncShopQuest(listId){
  const l=shopList(listId); if(!l || !l.questId) return;
  const q=S.quests.find(x=>x.id===l.questId);
  if(!q){ delete l.questId; return; }
  if(q.done) return;
  const items=shopOpen(listId), est=listEstimate(items);
  q.cost=est.sum; q.title=`Zakupy: ${l.name}`; q.prio=Math.max(1,...items.map(i=>i.prio));
  save();
}
function listToQuest(listId){
  const l=shopList(listId), items=shopOpen(listId);
  if(!items.length){ toast("Ta lista jest pusta. Dodaj produkty, zanim zrobisz z niej questa."); return; }
  if(l.questId){ const q=S.quests.find(x=>x.id===l.questId); if(q && !q.done){ questSheet({id:q.id}); return; } }
  if(!S.cats.includes("Zakupy")) S.cats.push("Zakupy");
  const prio=Math.max(...items.map(i=>i.prio)), est=listEstimate(items);
  const q={id:uid(),title:`Zakupy: ${l.name}`,cat:"Zakupy",prio,date:"",time:"",deadline:prio===4?TODAY:prio===3?addDays(3):"",done:false,cost:est.sum,method:"card",expCat:l.exp||"Zakupy",dur:items.length>6?60:30,shopList:l.id};
  S.quests.push(q); l.questId=q.id; save(); render();
  toast("Dodano jako luźny quest. Wrzucisz go w plan w zakładce Dziś.");
}

function shopRow(it){
  const e=estimate(it);
  return `<div class="sitem${it.bought?" bought":""}">
    <button class="check" data-${it.bought?"unbuy":"buy"}="${it.id}" aria-label="${it.bought?"Cofnij kupione":"Oznacz jako kupione"}">${it.bought?"✓":""}</button>
    <div style="min-width:0" data-editshop="${it.id}"><div class="qt">${esc(it.name)}${(it.qty||1)>1?` <span class="qty">×${it.qty}</span>`:""}</div>
      <div class="meta"><span class="spr spr${it.prio}">${SHOP_PRIO_SHORT[it.prio]}</span>${it.bought?`<span>kupione ${fmtDate(it.boughtAt||TODAY)}</span>`:e?`<span class="num">≈ ${zl(e.v)} · ${esc(e.src)}</span>`:`<span>brak ceny</span>`}</div></div>
    ${it.bought?`<label class="paid"><span class="label">zapłacone</span><input data-paid="${it.id}" inputmode="decimal" value="${it.paid?String(it.paid).replace(".",","):""}" placeholder="zł" aria-label="Zapłacona kwota"></label>`:""}
  </div>`;
}
function renderShop(){
  const open=S.shop.items.filter(i=>!i.bought);
  const total=listEstimate(open), urgent=open.filter(i=>i.prio===4).length;
  document.getElementById("sh-sum").innerHTML = `
    <div><span class="label">Do kupienia</span><b class="num">${open.length}</b></div>
    <div><span class="label">Szacowany koszt</span><b class="num">${total.sum?"≈ "+zl(total.sum):"—"}</b></div>
    <div><span class="label">Na cito</span><b class="num" style="color:${urgent?"var(--exp)":"inherit"}">${urgent}</b></div>`;
  const lists=S.shop.lists;
  document.getElementById("sh-filter").innerHTML = [["all","Wszystkie"],...lists.map(l=>[l.id,l.name]),["none","Bez listy"]]
    .map(([id,n])=>`<button class="chip" data-shopf="${id}" aria-pressed="${shopFilter===id}">${esc(n)}</button>`).join("") + `<button class="chip" data-newlist="">+ Nowa lista</button>`;
  const sel=document.getElementById("sh-list"), cur=sel.value;
  sel.innerHTML = `<option value="">Bez listy</option>`+lists.map(l=>`<option value="${l.id}">${esc(l.name)}</option>`).join("");
  sel.value = shopFilter!=="all"&&shopFilter!=="none" ? shopFilter : (lists.some(l=>l.id===cur)?cur:"");
  const groups = [...lists.map(l=>({l,id:l.id,name:l.name})), {l:null,id:"",name:"Bez listy"}]
    .filter(g=> shopFilter==="all" || (shopFilter==="none"? g.id==="" : g.id===shopFilter));
  const sortP=(a,b)=>b.prio-a.prio || a.name.localeCompare(b.name,"pl");
  document.getElementById("sh-lists").innerHTML = groups.map(g=>{
    const items=open.filter(i=>(i.list||"")===g.id).sort(sortP);
    if(!items.length && (shopFilter==="all" || !g.l)) return shopFilter==="all"?"":`<div class="empty">Ta lista jest pusta.</div>`;
    const q = g.l && g.l.questId ? S.quests.find(x=>x.id===g.l.questId && !x.done) : null;
    return `<section class="slist">
      <div class="slhead"><div style="min-width:0"><b>${esc(g.name)}</b><span class="meta" style="margin:2px 0 0">${items.length} ${items.length===1?"produkt":"produkty"} · ${estLine(listEstimate(items))||"pusta"}</span></div>
        <div class="slbtns">${g.l?(q?`<button class="mini" data-openquest="${q.id}">W queście ✓</button>`:`<button class="mini" data-shopquest="${g.id}">Jako quest</button>`)+`<button class="mini" data-editlist="${g.id}" aria-label="Edytuj listę ${esc(g.name)}" style="color:var(--muted)">⋯</button>`:""}</div></div>
      <div class="list">${items.map(shopRow).join("")||`<div class="empty">Pusto. Dodaj produkt powyżej.</div>`}</div></section>`;
  }).join("") || `<div class="empty">Lista zakupów jest pusta. Wpisz produkt powyżej i wybierz, na ile jest pilny.</div>`;
  const bought=S.shop.items.filter(i=>i.bought).sort((a,b)=>(b.boughtAt||"").localeCompare(a.boughtAt||"")).slice(0,30);
  document.getElementById("sh-bought").innerHTML = bought.length ? `<details><summary>Kupione (${bought.length})</summary><div class="list" style="margin-top:8px">${bought.map(shopRow).join("")}</div><button class="btn ghost" data-clearbought="" style="width:100%;margin-top:8px">Usuń kupione z listy</button></details>` : "";
}
function addShopQuick(){
  const inp=document.getElementById("sh-name"), name=inp.value.trim(); if(!name){ inp.focus(); return; }
  const m=name.match(/^(.*?)\s*(?:x|×)\s*(\d{1,3})$/i);
  const it={id:uid(),name:m?m[1]:name,qty:m?+m[2]:1,prio:+document.querySelector("#sh-prio [aria-pressed=true]").dataset.v,list:document.getElementById("sh-list").value,bought:false};
  S.shop.items.push(it); inp.value=""; save(); syncShopQuest(it.list); renderShop(); renderQuests(); inp.focus();
}
function shopItemSheet(id){
  const it = id ? shopItem(id) : {name:"",qty:1,prio:2,list:shopFilter!=="all"&&shopFilter!=="none"?shopFilter:"",price:0};
  const h = it.name ? priceHistory(it.name) : null;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${id?"Edytuj produkt":"Nowy produkt"}"><h3>${id?"Edytuj produkt":"Nowy produkt"}</h3><form id="f">
    <div class="row">
      <div class="field" style="grid-column:span 1"><label class="label" for="si-name">Produkt</label><input id="si-name" required value="${esc(it.name)}" placeholder="np. Mleko"></div>
      <div class="field"><label class="label" for="si-qty">Ilość</label><input id="si-qty" type="number" min="1" max="999" inputmode="numeric" value="${it.qty||1}"></div>
    </div>
    <div class="field"><span class="label">Jak pilne?</span>${seg("sprio",[[4,"Na cito"],[3,"Ważne"],[2,"Za jakiś czas"],[1,"Może poczekać"]],it.prio)}</div>
    <div class="row">
      <div class="field"><label class="label" for="si-list">Lista</label><select id="si-list"><option value="">Bez listy</option>${S.shop.lists.map(l=>`<option value="${l.id}" ${l.id===it.list?"selected":""}>${esc(l.name)}</option>`).join("")}</select></div>
      <div class="field"><label class="label" for="si-price">Cena za szt. (opcj.)</label><input id="si-price" inputmode="decimal" value="${it.price?String(it.price).replace(".",","):""}" placeholder="${h?String(median(h.slice(0,5).map(x=>x.p))).replace(".",","):"0,00"}"></div>
    </div>
    <p class="hint" style="margin:0">${h?`Historia cen: ${h.slice(0,4).map(x=>`${zl(x.p)}${x.s?" ("+esc(x.s)+")":""}`).join(", ")}. Puste pole = apka szacuje z historii.`:"Brak historii cen. Apka uczy się z kwot wpisanych przy kupionych produktach i z pozycji na zeskanowanych paragonach."}</p>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="si-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Dodaj"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#si-del"),()=>{ const l=it.list; S.shop.items=S.shop.items.filter(x=>x.id!==id); save(); syncShopQuest(l); close(); render(); });
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const name=ov.querySelector("#si-name").value.trim(); if(!name){ ov.querySelector("#err").textContent="Wpisz nazwę produktu."; return; }
    const pr=ov.querySelector("#si-price").value.trim(), price=pr?parseAmt(pr):0;
    if(pr && !(price>0)){ ov.querySelector("#err").textContent="Cena musi być liczbą, np. 4,99."; return; }
    const oldList=it.list;
    const data={name,qty:Math.max(1,parseInt(ov.querySelector("#si-qty").value)||1),prio:+segVal(ov,"sprio"),list:ov.querySelector("#si-list").value,price:round2(price)};
    if(id) Object.assign(it,data); else S.shop.items.push({id:uid(),bought:false,...data});
    save(); syncShopQuest(oldList); syncShopQuest(data.list); close(); render();
  };
  if(!id) setTimeout(()=>ov.querySelector("#si-name")?.focus(),50);
}
function listSheet(id){
  const l = id ? shopList(id) : {name:"",exp:"Zakupy"};
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Lista zakupów"><h3>${id?"Edytuj listę":"Nowa lista zakupów"}</h3><form id="f">
    <div class="field"><label class="label" for="sl-name">Nazwa</label><input id="sl-name" required value="${esc(l.name)}" placeholder="np. Apteka, Budowlany"></div>
    <div class="field"><label class="label" for="sl-exp">Kategoria wydatku (dla questa i portfela)</label><select id="sl-exp">${TX_CATS.filter(c=>c!=="Wynagrodzenie").map(c=>`<option ${c===l.exp?"selected":""}>${c}</option>`).join("")}</select></div>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="sl-del" style="color:var(--exp)">Usuń listę</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Utwórz"}</button></div>
  </form>${id?`<p class="hint" style="margin:10px 0 0">Po usunięciu listy jej produkty trafią do „Bez listy”.</p>`:""}</div>`;
  ov.hidden=false;
  ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#sl-del"),()=>{ S.shop.items.forEach(i=>{ if(i.list===id) i.list=""; }); const q=l.questId&&S.quests.find(x=>x.id===l.questId); if(q) delete q.shopList; S.shop.lists=S.shop.lists.filter(x=>x.id!==id); if(shopFilter===id) shopFilter="all"; save(); close(); render(); });
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const name=ov.querySelector("#sl-name").value.trim(); if(!name){ ov.querySelector("#err").textContent="Wpisz nazwę listy."; return; }
    if(id){ l.name=name; l.exp=ov.querySelector("#sl-exp").value; syncShopQuest(id); }
    else { const nl={id:"l-"+uid(),name,exp:ov.querySelector("#sl-exp").value}; S.shop.lists.push(nl); shopFilter=nl.id; }
    save(); close(); render();
  };
}
document.getElementById("sh-add").onsubmit=e=>{ e.preventDefault(); addShopQuick(); };
document.getElementById("sh-prio").onclick=e=>{ const b=e.target.closest("button"); if(!b) return; document.querySelectorAll("#sh-prio button").forEach(x=>x.setAttribute("aria-pressed",x===b)); };
document.getElementById("v-shop").addEventListener("change",e=>{
  const inp=e.target.closest("[data-paid]"); if(!inp) return;
  const it=shopItem(inp.dataset.paid), v=parseAmt(inp.value);
  if(inp.value.trim()==="" ){ delete it.paid; save(); return; }
  if(!(v>0)){ toast("Wpisz kwotę, np. 4,99."); return; }
  it.paid=round2(v); recordPrice(it.name, v/(it.qty||1), shopList(it.list)?.name||""); save(); toast("Zapisano cenę. Następnym razem apka oszacuje ją sama.");
});

/* ---------- rutyny dnia ---------- */
const PORY = [["rano","Rano"],["poludnie","W ciągu dnia"],["wieczor","Wieczór"],["any","Kiedykolwiek"]];
const poraLabel = k => (PORY.find(p=>p[0]===k)||PORY[3])[1];
const routinesOn = s => S.routines.filter(r=>r.days.includes(wdOf(s)) && (!r.from || s>=r.from));
const doneOn = s => S.routineLog[s] || [];
function streak(r){
  let n=0, d=TODAY;
  if(!doneOn(d).includes(r.id)) d=plusDays(d,-1);           // dzisiejsza jeszcze nie odhaczona nie zrywa serii
  for(let i=0;i<400;i++){
    if(r.from && d<r.from) break;
    if(r.days.includes(wdOf(d))){ if(doneOn(d).includes(r.id)) n++; else break; }
    d=plusDays(d,-1);
  }
  return n;
}
function toggleRoutine(id, s){
  const arr = S.routineLog[s] ||= [];
  const i = arr.indexOf(id); if(i>=0) arr.splice(i,1); else arr.push(id);
  if(!arr.length) delete S.routineLog[s];
  // sprzątanie: trzymamy ~13 miesięcy historii
  const cut = plusDays(TODAY,-400); for(const k of Object.keys(S.routineLog)) if(k<cut) delete S.routineLog[k];
  save();
}
function renderRoutines(){
  const box=document.getElementById("d-rout");
  const list=routinesOn(dayDate), done=doneOn(dayDate);
  const future = dayDate>TODAY;
  if(!S.routines.length){
    box.innerHTML=`<div class="rcard"><div class="rhead"><b>Rutyny dnia</b><button class="mini" data-newrout="">+ Rutyna</button></div><p class="hint" style="margin:0">Dodaj codzienne czynności, np. suplementy, rozciąganie czy 2 l wody, i odhaczaj je każdego dnia.</p></div>`;
    return;
  }
  if(!list.length){ box.innerHTML=`<div class="rcard"><div class="rhead"><b>Rutyny dnia</b><button class="mini" data-newrout="">+ Rutyna</button></div><p class="hint" style="margin:0">Na ten dzień tygodnia nie masz rutyn.</p></div>`; return; }
  const n=list.filter(r=>done.includes(r.id)).length, pct=Math.round(n/list.length*100);
  const groups=PORY.map(([k,l])=>[l,list.filter(r=>(r.pora||"any")===k).sort((a,b)=>(a.time||"99").localeCompare(b.time||"99")||a.title.localeCompare(b.title,"pl"))]).filter(g=>g[1].length);
  const open = routOpen ?? (dayDate===TODAY ? n<list.length : true);
  box.innerHTML=`<details class="rcard" ${open?"open":""} id="rout-det"><summary class="rhead"><span><b>Rutyny dnia</b> <span class="rprog num">${n}/${list.length}</span></span><span class="rbar" aria-hidden="true"><i style="width:${pct}%"></i></span></summary>
    ${future?`<p class="hint" style="margin:0 0 6px">To przyszły dzień, odhaczysz je, kiedy przyjdzie.</p>`:""}
    ${groups.map(([l,rs])=>`<div class="rgroup"><span class="label">${l}</span>${rs.map(r=>{ const ok=done.includes(r.id), st=streak(r);
      return `<div class="ritem ${ok?"done":""}"><button class="check" data-rout="${r.id}" ${future?"disabled":""} aria-label="${ok?"Cofnij":"Odhacz"} ${esc(r.title)}">${ok?"✓":""}</button>
        <div style="min-width:0" data-editrout="${r.id}"><span class="rt">${esc(r.title)}</span>${r.time||r.note?`<span class="meta" style="margin:0">${r.time?r.time:""}${r.time&&r.note?" · ":""}${esc(r.note||"")}</span>`:""}</div>
        ${st>=2?`<span class="streak num" title="Seria dni z rzędu">🔥 ${st}</span>`:""}</div>`; }).join("")}</div>`).join("")}
    <button class="mini" data-newrout="" style="align-self:flex-start">+ Rutyna</button>
  </details>`;
  document.getElementById("rout-det").addEventListener("toggle",e=>{ routOpen=e.target.open; });
}
let routOpen = null;
function routineSheet(id){
  const r = id ? S.routines.find(x=>x.id===id) : {title:"",pora:"rano",days:[1,2,3,4,5,6,7],time:"",note:""};
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Rutyna"><h3>${id?"Edytuj rutynę":"Nowa rutyna"}</h3><form id="f">
    <div class="field"><label class="label" for="r-title">Czynność</label><input id="r-title" required value="${esc(r.title)}" placeholder="np. Kreatyna 5 g, Witamina D, Rozciąganie"></div>
    <div class="field"><span class="label">Pora dnia</span>${seg("pora",PORY,r.pora||"any")}</div>
    <div class="field"><span class="label">Dni tygodnia</span><div class="seg dayseg" id="r-days" role="group" aria-label="Dni tygodnia">${WD.map((w,i)=>`<button type="button" data-d="${i+1}" aria-pressed="${r.days.includes(i+1)}">${w}</button>`).join("")}</div>
      <div class="quick" id="r-dq"><button type="button" data-set="1234567">Codziennie</button><button type="button" data-set="12345">Pn–Pt</button><button type="button" data-set="67">Weekend</button></div></div>
    <div class="row">
      <div class="field"><label class="label" for="r-time">Godzina (opcj.)</label><input id="r-time" type="time" step="300" value="${r.time||""}"></div>
      <div class="field"><label class="label" for="r-note">Notatka (opcj.)</label><input id="r-note" value="${esc(r.note||"")}" placeholder="np. po śniadaniu"></div>
    </div>
    ${id?`<p class="hint" style="margin:0">Seria: ${streak(r)} dni z rzędu. Usunięcie rutyny kasuje też jej historię odhaczeń.</p>`:""}
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="r-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Dodaj"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  ov.querySelector("#r-days").onclick=e=>{const b=e.target.closest("button");if(b)b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");};
  ov.querySelector("#r-dq").onclick=e=>{const b=e.target.closest("button");if(!b)return;ov.querySelectorAll("#r-days button").forEach(x=>x.setAttribute("aria-pressed",b.dataset.set.includes(x.dataset.d)));};
  ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#r-del"),()=>{ S.routines=S.routines.filter(x=>x.id!==id); for(const k of Object.keys(S.routineLog)){ S.routineLog[k]=S.routineLog[k].filter(x=>x!==id); if(!S.routineLog[k].length) delete S.routineLog[k]; } save(); close(); render(); });
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const err=ov.querySelector("#err");
    const title=ov.querySelector("#r-title").value.trim(); if(!title){err.textContent="Wpisz nazwę czynności.";return;}
    const days=[...ov.querySelectorAll("#r-days button[aria-pressed=true]")].map(b=>+b.dataset.d); if(!days.length){err.textContent="Zaznacz przynajmniej jeden dzień.";return;}
    const data={title,pora:segVal(ov,"pora"),days,time:ov.querySelector("#r-time").value,note:ov.querySelector("#r-note").value.trim()};
    if(id) Object.assign(r,data); else S.routines.push({id:uid(),from:TODAY,...data});
    routOpen=true; save(); close(); render();
  };
  if(!id) setTimeout(()=>ov.querySelector("#r-title")?.focus(),50);
}

/* ---------- historia transakcji ---------- */
const HF = {q:"",type:"all",method:"all",cat:"all",period:"month",from:"",to:""};
const txRow = t => `<div class="tx"><div class="t" data-edittx="${t.id}" data-list="tx"><strong>${esc(txTitle(t))}</strong>
      <span class="meta" style="margin:0">${fmtDate(t.date)} · ${t.type==="trf"?"":esc(t.cat)+" · "}${methodLabel(t)}${t.fromQuest?" · z questa":""}</span></div>
      ${amtHTML(t)}<button class="del" data-delt="${t.id}" aria-label="Usuń transakcję">×</button></div>`;
function periodRange(){
  const y=d0.getFullYear(), m=d0.getMonth();
  switch(HF.period){
    case "month": return [iso(new Date(y,m,1)), TODAY];
    case "prev": return [iso(new Date(y,m-1,1)), iso(new Date(y,m,0))];
    case "3m": return [iso(new Date(y,m-2,1)), TODAY];
    case "year": return [`${y}-01-01`, TODAY];
    case "custom": return [HF.from||"0000-01-01", HF.to||"9999-12-31"];
    default: return ["0000-01-01","9999-12-31"];
  }
}
function filteredTx(){
  const [a,b]=periodRange();
  const q=normName(HF.q), qAmt=parseAmt(HF.q);
  return S.tx.filter(t=>{
    if(t.date<a || t.date>b) return false;
    if(HF.type!=="all" && t.type!==HF.type) return false;
    if(HF.method!=="all"){ if(t.type==="trf") return false; if(t.method!==HF.method) return false; }
    if(HF.cat!=="all" && t.cat!==HF.cat) return false;
    if(HF.q){
      const hay=normName(`${t.note||""} ${t.cat||""} ${txTitle(t)}`);
      const textHit = !!q && hay.includes(q);
      const amtHit = qAmt>0 && Math.abs(t.amount-qAmt)<0.005;
      if(!textHit && !amtHit) return false;
    }
    return true;
  }).sort((x,y)=>y.date.localeCompare(x.date));
}
function renderHist(){
  const list=filteredTx();
  const inc=list.filter(t=>t.type==="inc").reduce((s,t)=>s+t.amount,0), exp=list.filter(t=>t.type==="exp").reduce((s,t)=>s+t.amount,0);
  document.getElementById("h-sum").innerHTML=`
    <div><span class="label">Transakcje</span><b class="num">${list.length}</b></div>
    <div><span class="label">Wpływy</span><b class="num" style="color:var(--inc)">+${zl(inc)}</b></div>
    <div><span class="label">Wydatki</span><b class="num" style="color:var(--exp)">−${zl(exp)}</b></div>
    <div><span class="label">Bilans</span><b class="num">${zl(inc-exp)}</b></div>`;
  // kategorie wydatków (top) jako szybki podgląd
  const byCat={}; list.filter(t=>t.type==="exp").forEach(t=>byCat[t.cat]=(byCat[t.cat]||0)+t.amount);
  const top=Object.entries(byCat).sort((a,b)=>b[1]-a[1]).slice(0,5);
  document.getElementById("h-cats").innerHTML = top.length>1 ? top.map(([c,v])=>`<button class="hcat" data-hcat="${esc(c)}" aria-pressed="${HF.cat===c}"><span>${esc(c)}</span><span class="hbar"><i style="width:${Math.round(v/top[0][1]*100)}%"></i></span><b class="num">${zl(v)}</b></button>`).join("") : "";
  let html="", cur="";
  for(const t of list){
    if(t.date!==cur){ cur=t.date; const dayTot=list.filter(x=>x.date===cur).reduce((s,x)=>s+totalDelta(x),0);
      html+=`<div class="hday"><span>${new Date(cur+"T00:00").toLocaleDateString("pl-PL",{weekday:"short",day:"numeric",month:"long",year:cur.slice(0,4)!==TODAY.slice(0,4)?"numeric":undefined})}</span><span class="num">${dayTot?(dayTot>0?"+":"")+zl(dayTot):""}</span></div>`; }
    html+=txRow(t);
  }
  document.getElementById("h-list").innerHTML = html || `<div class="empty">Brak transakcji dla tych filtrów. ${S.tx.length?"Zmień okres albo wyczyść filtry.":"Dodaj pierwszą przyciskiem +."}</div>`;
  const active = HF.q||HF.type!=="all"||HF.method!=="all"||HF.cat!=="all"||HF.period!=="month";
  document.getElementById("h-reset").hidden=!active;
  document.getElementById("h-custom").hidden = HF.period!=="custom";
}
function syncHistControls(){
  document.getElementById("h-q").value=HF.q;
  document.getElementById("h-period").value=HF.period;
  document.getElementById("h-from").value=HF.from; document.getElementById("h-to").value=HF.to;
  const cs=document.getElementById("h-cat");
  cs.innerHTML=`<option value="all">Każda kategoria</option>`+[...new Set([...TX_CATS,...S.tx.map(t=>t.cat).filter(Boolean)])].map(c=>`<option ${c===HF.cat?"selected":""}>${esc(c)}</option>`).join("");
  document.querySelectorAll("#h-type button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===HF.type));
  document.querySelectorAll("#h-method button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.v===HF.method));
}
function openHist(){ tab="hist"; syncHistControls(); render(); scrollTo(0,0); }
(function wireHist(){
  let t;
  document.getElementById("h-q").addEventListener("input",e=>{ clearTimeout(t); t=setTimeout(()=>{ HF.q=e.target.value.trim(); renderHist(); },150); });
  document.getElementById("h-period").onchange=e=>{ HF.period=e.target.value; renderHist(); };
  document.getElementById("h-from").onchange=e=>{ HF.from=e.target.value; renderHist(); };
  document.getElementById("h-to").onchange=e=>{ HF.to=e.target.value; renderHist(); };
  document.getElementById("h-cat").onchange=e=>{ HF.cat=e.target.value; renderHist(); };
  document.getElementById("h-type").onclick=e=>{ const b=e.target.closest("button"); if(!b) return; HF.type=b.dataset.v; syncHistControls(); renderHist(); };
  document.getElementById("h-method").onclick=e=>{ const b=e.target.closest("button"); if(!b) return; HF.method=b.dataset.v; syncHistControls(); renderHist(); };
  document.getElementById("h-reset").onclick=()=>{ Object.assign(HF,{q:"",type:"all",method:"all",cat:"all",period:"month",from:"",to:""}); syncHistControls(); renderHist(); };
  document.getElementById("h-back").onclick=()=>{ tab="wallet"; render(); scrollTo(0,0); };
  document.getElementById("w-allhist").onclick=openHist;
})();

/* ---------- podróże ---------- */
const TMODES = [["train","🚆","Pociąg"],["bus","🚌","Autobus"],["car","🚗","Samochód"],["share","🚙","Wspólny przejazd"],["plane","✈️","Samolot"],["other","🧳","Inne"]];
const tmode = k => TMODES.find(m=>m[0]===k) || TMODES[5];
const travelsOn = s => S.travels.filter(t=>t.date===s).sort((a,b)=>(a.dep||"99").localeCompare(b.dep||"99"));
const tOvernight = t => !!(t.arr && toMin(t.arr) <= toMin(t.dep));
const tEnd = t => { const a=toMin(t.dep); if(!t.arr) return a+60; const b=toMin(t.arr); return b>a ? b : 24*60; };
const tDur = t => { if(!t.arr) return 0; const a=toMin(t.dep), b=toMin(t.arr); return b>a ? b-a : b+24*60-a; };
const tLabel = t => `${tmode(t.mode)[1]} ${t.from} → ${t.to}`;
const PL_CITIES = ["Warszawa","Kraków","Łódź","Wrocław","Poznań","Gdańsk","Gdynia","Szczecin","Katowice","Lublin","Białystok","Bydgoszcz","Toruń","Rzeszów","Kielce","Olsztyn","Opole","Częstochowa","Radom","Zakopane"];
function syncTravelMoney(t){
  const rmTx = ()=>{ if(t.txId){ S.tx=S.tx.filter(x=>x.id!==t.txId); delete t.txId; } };
  const rmPlan = ()=>{ if(t.planId){ S.plan=S.plan.filter(x=>x.id!==t.planId); delete t.planId; } };
  if(!(t.cost>0)){ rmTx(); rmPlan(); return; }
  const base = {type:"exp",amount:t.cost,method:t.method||"card",cat:"Transport",note:`${tmode(t.mode)[2]}: ${t.from} → ${t.to}`,travelId:t.id};
  if(t.paid){
    rmPlan();
    let x = t.txId && S.tx.find(y=>y.id===t.txId);
    if(!x){ x={id:uid(),date:t.paidDate||TODAY}; S.tx.push(x); t.txId=x.id; }
    Object.assign(x, base);
  } else {
    rmTx();
    let x = t.planId && S.plan.find(y=>y.id===t.planId);
    if(!x){ x={id:uid()}; S.plan.push(x); t.planId=x.id; }
    Object.assign(x, base, {date:t.date});
  }
}
const trRow = t => { const m=tmode(t.mode);
  return `<div class="evrow"><div style="min-width:0"><strong class="trvt">${esc(tLabel(t))}</strong><span class="meta" style="margin:2px 0 0">${t.dep}${t.arr?`–${t.arr}${tOvernight(t)?" (+1 dzień)":""}`:""} · ${m[2]}${t.cost?` · ${zl(t.cost)} ${t.paid?"opłacone ✓":"do zapłaty"}`:""}${t.note?" · "+esc(t.note):""}</span></div><button class="mini" data-travel="${t.id}">Edytuj</button></div>`; };

function travelSheet(id, pre={}){
  const known = [...new Set([...S.travels.flatMap(t=>[t.to,t.from]), ...PL_CITIES])];
  const last = [...S.travels].sort((a,b)=>b.date.localeCompare(a.date))[0];
  const t = id ? S.travels.find(x=>x.id===id) : {from:last?last.to:"",to:"",mode:last?last.mode:"train",date:pre.date||TODAY,dep:pre.dep||"",arr:"",cost:0,method:"card",paid:false,note:""};
  if(!t) return;
  const fuel = S.fuel || {l:6.5,p:6.2};
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${id?"Edytuj podróż":"Nowa podróż"}"><h3>${id?"Edytuj podróż":"Nowa podróż"}</h3><form id="f">
    <datalist id="cities">${known.map(c=>`<option value="${esc(c)}">`).join("")}</datalist>
    <div class="trvcities">
      <div class="field"><label class="label" for="tr-from">Skąd</label><input id="tr-from" list="cities" required value="${esc(t.from)}" placeholder="np. Warszawa" autocomplete="off"></div>
      <button type="button" class="iconbtn" id="tr-swap" aria-label="Zamień skąd i dokąd">⇄</button>
      <div class="field"><label class="label" for="tr-to">Dokąd</label><input id="tr-to" list="cities" required value="${esc(t.to)}" placeholder="np. Kraków" autocomplete="off"></div>
    </div>
    <div class="field"><span class="label">Czym</span><div class="quick" id="tr-mode">${TMODES.map(m=>`<button type="button" data-v="${m[0]}" aria-pressed="${m[0]===t.mode}">${m[1]} ${m[2]}</button>`).join("")}</div></div>
    <div class="field"><label class="label" for="tr-date">Dzień</label><input id="tr-date" type="date" required value="${t.date}"></div>
    <div class="row">
      <div class="field"><label class="label" for="tr-dep">Wyjazd</label><input id="tr-dep" type="time" step="300" required value="${t.dep||""}"></div>
      <div class="field"><label class="label" for="tr-arr">Przyjazd</label><input id="tr-arr" type="time" step="300" value="${t.arr||""}"></div>
    </div>
    <p class="hint" id="tr-durhint" style="margin:0"></p>
    <div class="row">
      <div class="field"><label class="label" for="tr-cost">Koszt (zł)</label><input id="tr-cost" inputmode="decimal" value="${t.cost?String(t.cost).replace(".",","):""}" placeholder="np. 89,00"></div>
      <div class="field"><span class="label">Bilet / koszt</span>${seg("trpaid",[["0","Do zapłaty"],["1","Opłacone"]],t.paid?"1":"0")}</div>
    </div>
    <details id="tr-fuel" class="fuel" ${t.mode==="car"?"":"hidden"}><summary>⛽ Policz koszt paliwa</summary>
      <div class="fuelrow">
        <div class="field"><label class="label" for="fu-km">Km</label><input id="fu-km" inputmode="decimal" placeholder="300"></div>
        <div class="field"><label class="label" for="fu-l">l/100 km</label><input id="fu-l" inputmode="decimal" value="${String(fuel.l).replace(".",",")}"></div>
        <div class="field"><label class="label" for="fu-p">zł/l</label><input id="fu-p" inputmode="decimal" value="${String(fuel.p).replace(".",",")}"></div>
      </div>
      <button type="button" class="mini" id="fu-go" style="margin-top:8px">Wpisz wyliczony koszt</button>
    </details>
    <div class="field"><span class="label">Płatność</span>${seg("trmethod",[["card","Karta / przelew"],["cash","Gotówka"]],t.method||"card")}</div>
    <div class="field"><label class="label" for="tr-note">Notatka (opcj.)</label><input id="tr-note" value="${esc(t.note||"")}" placeholder="np. IC 5310, wagon 8, miejsce 45"></div>
    ${id?"":`<div class="field"><span class="label">Powrót</span>${seg("trret",[["0","Bez powrotu"],["1","Dodaj powrót"]],"0")}</div>
    <div id="tr-retbox" class="retbox" hidden>
      <div class="field"><label class="label" for="rt-date">Dzień powrotu</label><input id="rt-date" type="date" value="${t.date}"></div>
      <div class="row">
        <div class="field"><label class="label" for="rt-dep">Wyjazd</label><input id="rt-dep" type="time" step="300"></div>
        <div class="field"><label class="label" for="rt-arr">Przyjazd</label><input id="rt-arr" type="time" step="300"></div>
      </div>
      <div class="field"><label class="label" for="rt-cost">Koszt powrotu (zł)</label><input id="rt-cost" inputmode="decimal" placeholder="taki sam jak w tamtą stronę"></div>
    </div>`}
    <p class="hint" style="margin:0">Opłacony koszt trafia do historii Portfela (Transport). Nieopłacony liczy się w prognozie salda na dzień podróży.</p>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="tr-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary" id="tr-ok">${id?"Zapisz":"Dodaj podróż"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  const $=sel=>ov.querySelector(sel);
  let mode=t.mode;
  $("#tr-mode").onclick=e=>{ const b=e.target.closest("button"); if(!b) return; mode=b.dataset.v; ov.querySelectorAll("#tr-mode button").forEach(x=>x.setAttribute("aria-pressed",x===b)); $("#tr-fuel").hidden = mode!=="car"; };
  $("#tr-swap").onclick=()=>{ const a=$("#tr-from").value; $("#tr-from").value=$("#tr-to").value; $("#tr-to").value=a; };
  const durHint=()=>{ const d=$("#tr-dep").value, a=$("#tr-arr").value; const h=$("#tr-durhint");
    if(!d||!a){ h.textContent=""; return; } const x={dep:d,arr:a}; h.textContent=`Czas podróży: ${fmtDur(tDur(x))}${tOvernight(x)?" · przyjazd następnego dnia":""}`; };
  $("#tr-dep").oninput=durHint; $("#tr-arr").oninput=durHint; durHint();
  $("#fu-go").onclick=()=>{ const km=parseAmt($("#fu-km").value), l=parseAmt($("#fu-l").value), p=parseAmt($("#fu-p").value);
    if(!(km>0&&l>0&&p>0)){ $("#err").textContent="Wpisz kilometry, spalanie i cenę paliwa."; return; }
    $("#tr-cost").value=String(round2(km*l/100*p)).replace(".",","); S.fuel={l,p}; $("#err").textContent=""; };
  const rs=ov.querySelector('[data-seg="trret"]'); if(rs) rs.addEventListener("segchange",()=>{ $("#tr-retbox").hidden = segVal(ov,"trret")!=="1"; if(!$("#tr-retbox").hidden) $("#rt-date").value=$("#tr-date").value; });
  $("#cancel").onclick=close;
  if(id) confirmBtn($("#tr-del"),()=>{
    if(t.planId) S.plan=S.plan.filter(x=>x.id!==t.planId);
    if(t.txId){ const x=S.tx.find(y=>y.id===t.txId); if(x) delete x.travelId; }
    S.travels=S.travels.filter(x=>x.id!==id); save(); close(); render();
    toast(t.txId?"Usunięto podróż. Opłacony bilet został w historii Portfela.":"Usunięto podróż.");
  });
  let warned=false;
  $("#f").onsubmit=e=>{ e.preventDefault();
    const err=$("#err"); err.className="err";
    const from=$("#tr-from").value.trim(), to=$("#tr-to").value.trim(), date=$("#tr-date").value, dep=$("#tr-dep").value, arr=$("#tr-arr").value;
    if(!from||!to){ err.textContent="Wpisz, skąd i dokąd jedziesz."; return; }
    if(!date||!dep){ err.textContent="Podaj dzień i godzinę wyjazdu."; return; }
    const cr=$("#tr-cost").value.trim(), cost=cr?parseAmt(cr):0;
    if(cr && !(cost>0)){ err.textContent="Koszt musi być liczbą, np. 89,00."; return; }
    const c = clashes(date, dep, (tEnd({dep,arr})-toMin(dep)), null, id);
    if(c.length && !warned){ warned=true; err.className="err warn-soft"; err.textContent=`⚠ W tym czasie masz: ${c.join(", ")}. Zapisz jeszcze raz, jeśli tak ma być.`; $("#tr-ok").textContent="Zapisz mimo to"; return; }
    const paid = segVal(ov,"trpaid")==="1";
    const data = {from,to,mode,date,dep,arr,cost:round2(cost),method:segVal(ov,"trmethod"),paid,note:$("#tr-note").value.trim()};
    if(paid && !(id && t.paid)) data.paidDate = TODAY;
    let main;
    if(id){ Object.assign(t,data); main=t; } else { main={id:uid(),...data}; S.travels.push(main); }
    syncTravelMoney(main);
    if(!id && segVal(ov,"trret")==="1"){
      const rd=$("#rt-date").value||date, rdep=$("#rt-dep").value;
      if(!rdep){ err.className="err"; err.textContent="Podaj godzinę wyjazdu w drodze powrotnej albo wybierz „Bez powrotu”."; S.travels=S.travels.filter(x=>x!==main); if(main.planId) S.plan=S.plan.filter(x=>x.id!==main.planId); if(main.txId) S.tx=S.tx.filter(x=>x.id!==main.txId); return; }
      const rcr=$("#rt-cost").value.trim(), rcost=rcr?parseAmt(rcr):cost;
      const back={id:uid(),from:to,to:from,mode,date:rd,dep:rdep,arr:$("#rt-arr").value,cost:round2(rcost>0?rcost:0),method:data.method,paid,note:"",pair:main.id};
      if(paid) back.paidDate=TODAY;
      main.pair=back.id; S.travels.push(back); syncTravelMoney(back);
    }
    save(); close(); render();
    if(data.date>TODAY && !id) toast(`Dodano podróż na ${fmtDate(data.date)}.`);
  };
  if(!id) setTimeout(()=>{ (t.from?$("#tr-to"):$("#tr-from"))?.focus(); },50);
}

/* ---------- wybór: co dodać ---------- */
function addChooser(o={}){
  const where = o.date ? new Date(o.date+"T00:00").toLocaleDateString("pl-PL",{weekday:"long",day:"numeric",month:"long"}) : "";
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Dodaj"><h3>Dodaj${o.time?` o ${o.time}`:""}</h3>${where?`<p class="hint" style="margin:-6px 0 12px;text-transform:none">${where}</p>`:""}
    <div class="choose">
      <button type="button" class="chbtn" data-chq="quest"><span aria-hidden="true">✓</span><b>Quest</b><small>zadanie do zrobienia</small></button>
      <button type="button" class="chbtn" data-chq="travel"><span aria-hidden="true">🚆</span><b>Podróż</b><small>przejazd między miastami</small></button>
      <button type="button" class="chbtn" data-chq="event"><span aria-hidden="true">⟳</span><b>Stałe wydarzenie</b><small>trening, praca, zajęcia</small></button>
      <button type="button" class="chbtn" data-chq="rout"><span aria-hidden="true">☀</span><b>Rutyna</b><small>codzienna czynność</small></button>
    </div>
    <div class="actions"><button type="button" class="btn ghost" id="cancel">Anuluj</button></div></div>`;
  ov.hidden=false;
  ov.querySelector("#cancel").onclick=close;
  ov.querySelector(".choose").onclick=e=>{ const b=e.target.closest("button"); if(!b) return; e.stopPropagation();
    const k=b.dataset.chq;
    if(k==="quest") questSheet(o.cal?{deadline:o.date}:{date:o.date,time:o.time||""});
    else if(k==="travel") travelSheet(null,{date:o.date,dep:o.time||""});
    else if(k==="event") eventSheet(null,{time:o.time});
    else routineSheet();
  };
}

/* ---------- praca i ewidencja ---------- */
let wkY=d0.getFullYear(), wkM=d0.getMonth(), wkSel=null;
const jobOf = id => S.jobs.find(j=>j.id===id);
const splitW = w => { const [a,b]=(w||"").split("|"); return [a||"", b||""]; };
function workName(w){ const [a,b]=splitW(w); const j=jobOf(a); if(!j) return ""; const s=b&&j.subs.find(x=>x.id===b); return s?`${j.name} › ${s.name}`:j.name; }
const matcher = (jid,sid) => w => { const [a,b]=splitW(w); return a===jid && (sid==="*" || b===sid); };
function rateFor(w){ const [a,b]=splitW(w); const j=jobOf(a); if(!j) return {type:"hour",rate:0,match:0}; const s=b&&j.subs.find(x=>x.id===b);
  return {type:j.rateType==="hour"?"hour":"unit", rate:(s&&s.rate>0)?s.rate:(j.rate||0), match:(s&&s.matchRate>0)?s.matchRate:(j.matchRate||0)}; }
const entryPay = en => { const r=rateFor(en.work); if(en.kind==="M" && r.match>0) return r.match; return r.type==="hour" ? round2(en.dur/60*r.rate) : r.rate; };
const entryUnits = en => { if(en.kind!=="M") return 1; const r=rateFor(en.work); return r.match>0 && r.rate>0 ? Math.round(r.match/r.rate*100)/100 : 1; };
const fmtNum = v => (Math.round(v*100)/100).toLocaleString("pl-PL",{maximumFractionDigits:2});
const fmtH = m => (Math.round(m/60*100)/100).toLocaleString("pl-PL",{maximumFractionDigits:2})+" h";
const rateLabel = (type,rate,match) => (rate>0 ? (type==="hour"?`${zl(rate)}/h`:`${zl(rate)} za jednostkę`) : "bez stawki") + (match>0?` · mecz ${zl(match)}`:"");
const wkKey = () => `${wkY}-${String(wkM+1).padStart(2,"0")}`;
const wkName = () => new Date(wkY,wkM,1).toLocaleDateString("pl-PL",{month:"long",year:"numeric"});
function entryStatus(date,time,dur){
  if(date<TODAY) return "done"; if(date>TODAY) return "plan";
  if(!time) return "plan";
  const n=new Date(); return toMin(time)+dur <= n.getHours()*60+n.getMinutes() ? "done" : "plan";
}
function workEntries(match){
  const ym=wkKey(), last=new Date(wkY,wkM+1,0).getDate(), out=[];
  for(let d=1; d<=last; d++){
    const s=`${ym}-${String(d).padStart(2,"0")}`;
    for(const e of eventsOn(s,true)) if(e.work && match(e.work))
      out.push({date:s,time:e.time,dur:e.dur,title:e.title,src:"event",id:e.id,orig:e.orig,work:e.work,kind:e.kind||"T",where:e.kind==="M"?(e.opponent||e.place||""):(e.place||jobOf(splitW(e.work)[0])?.place||""),status:e.skipped?"skip":entryStatus(s,e.time,e.dur)});
  }
  for(const q of S.quests) if(q.work && match(q.work) && q.date && q.date.slice(0,7)===ym)
    out.push({date:q.date,time:q.time||"",dur:q.dur||0,title:q.title,src:"quest",id:q.id,work:q.work,kind:"T",where:jobOf(splitW(q.work)[0])?.place||"",status:q.done?"done":(q.date<TODAY?"miss":"plan")});
  for(const w of S.workLog) if(match(w.work) && w.date.slice(0,7)===ym)
    out.push({date:w.date,time:w.time||"",dur:w.dur||0,title:w.note||(w.kind==="M"?"Mecz":"Wpis ręczny"),src:"manual",id:w.id,work:w.work,kind:w.kind||"T",where:w.place||jobOf(splitW(w.work)[0])?.place||"",status:"done"});
  return out.sort((a,b)=>a.date.localeCompare(b.date)||(a.time||"99").localeCompare(b.time||"99"));
}
function summarize(list){
  const r={doneN:0,doneMin:0,donePay:0,doneUnits:0,doneM:0,planN:0,planMin:0,planPay:0,skipN:0,missN:0};
  for(const en of list){ const p=entryPay(en);
    if(en.status==="done"){ r.doneN++; r.doneMin+=en.dur; r.donePay+=p; r.doneUnits+=entryUnits(en); if(en.kind==="M") r.doneM++; }
    else if(en.status==="plan"){ r.planN++; r.planMin+=en.dur; r.planPay+=p; }
    else if(en.status==="skip") r.skipN++; else r.missN++; }
  r.donePay=round2(r.donePay); r.planPay=round2(r.planPay); r.doneUnits=Math.round(r.doneUnits*100)/100; return r;
}
function workOptions(sel, allowNone=true){
  return (allowNone?`<option value="">— nie liczy się do ewidencji —</option>`:"") + S.jobs.map(j=>
    `<option value="${j.id}|" ${sel===j.id+"|"?"selected":""}>${esc(j.name)}${j.subs.length?" (ogólnie)":""}</option>` +
    j.subs.map(s=>`<option value="${j.id}|${s.id}" ${sel===j.id+"|"+s.id?"selected":""}>${esc(j.name)} › ${esc(s.name)}</option>`).join("")).join("");
}
const workField = (id, sel) => S.jobs.length
  ? `<div class="field"><label class="label" for="${id}">💼 Ewidencja pracy</label><select id="${id}">${workOptions(sel||"")}</select></div>`
  : "";

function renderWork(){
  document.getElementById("wk-title").textContent = wkName();
  const all = workEntries(w=>!!jobOf(splitW(w)[0])), tot=summarize(all);
  document.getElementById("wk-sum").innerHTML = S.jobs.length ? `
    <div><span class="label">Przepracowane</span><b class="num">${fmtH(tot.doneMin)}</b></div>
    <div><span class="label">Zajęcia</span><b class="num">${tot.doneN}${tot.doneM?` <small style="font-weight:500;color:var(--muted)">(${tot.doneM} M)</small>`:""}</b></div>
    <div><span class="label">Zarobione</span><b class="num" style="color:var(--inc)">${zl(tot.donePay)}</b></div>
    ${tot.planN?`<div><span class="label">Jeszcze w planie</span><b class="num" style="color:var(--muted)">+${fmtH(tot.planMin)} · +${zl(tot.planPay)}</b></div>`:""}` : "";
  document.getElementById("wk-jobs").innerHTML = S.jobs.length ? S.jobs.map(j=>{
    const js=all.filter(en=>splitW(en.work)[0]===j.id), sm=summarize(js);
    const subRow=(sid,name,rate)=>{ const ss=summarize(js.filter(en=>splitW(en.work)[1]===sid));
      return `<button class="jsub" data-wd="${j.id}|${sid}"><span>${esc(name)}${rate>0?`<small> · ${rateLabel(j.rateType,rate)}</small>`:""}</span><span class="num">${j.rateType==="hour"?`${ss.doneN} zaj. · ${fmtH(ss.doneMin)}`:`${fmtNum(ss.doneUnits)} jedn.${ss.doneM?` · ${ss.doneM} M`:""}`}</span><b class="num">${zl(ss.donePay)}</b><span class="chev" aria-hidden="true">›</span></button>`; };
    const general = js.some(en=>!splitW(en.work)[1]);
    return `<div class="jcard"><div class="jhead"><button class="jname" data-wd="${j.id}|*"><b>${esc(j.name)}</b><span class="meta" style="margin:0">${rateLabel(j.rateType,j.rate,j.matchRate)} · ${j.rateType==="hour"?fmtH(sm.doneMin):fmtNum(sm.doneUnits)+" jedn."} · <b class="num" style="font-family:var(--body);font-size:.85rem;color:var(--inc)">${zl(sm.donePay)}</b>${sm.planN?` · +${fmtH(sm.planMin)} w planie`:""}</span></button><button class="mini" data-editjob="${j.id}" aria-label="Edytuj pracę ${esc(j.name)}">⋯</button></div>
      ${j.subs.map(s=>subRow(s.id,s.name,s.rate)).join("")}${j.subs.length&&general?subRow("","Ogólnie (bez podgrupy)",0):""}
      ${!js.length?`<p class="hint" style="margin:4px 0 0">Nic w tym miesiącu. Przypisz do tej pracy stałe wydarzenie albo dodaj wpis ręczny.</p>`:""}</div>`;
  }).join("") : `<div class="rcard"><b style="font-family:var(--display);font-size:1.05rem">Ewidencja pracy</b><p class="hint" style="margin:0">Dodaj pracę, np. klub albo firmę, jej podgrupy (np. roczniki) i stawkę. Potem przypisz do niej stałe wydarzenia, a apka sama policzy godziny i zarobek w każdym miesiącu.</p></div>`;
  const un = S.jobs.length ? S.events.filter(e=>e.cat==="Praca" && !e.work && (!e.to||e.to>=TODAY)) : [];
  document.getElementById("wk-un").innerHTML = un.length ? `<div class="demo" style="flex-direction:column;align-items:stretch;gap:6px;margin-top:12px"><span>Te stałe wydarzenia z kategorii Praca nie liczą się do żadnej ewidencji:</span>${un.map(e=>`<span style="display:flex;justify-content:space-between;align-items:center;gap:8px"><b style="min-width:0">${esc(e.title)}</b><button class="mini" data-editev="${e.id}">Przypisz</button></span>`).join("")}</div>` : "";
}
function wdTitle(){ const j=jobOf(wkSel.jid); if(!j) return ""; if(wkSel.sid==="*") return j.name; if(!wkSel.sid) return `${j.name} · ogólnie`; const s=j.subs.find(x=>x.id===wkSel.sid); return s?`${j.name} › ${s.name}`:j.name; }
function renderWorkDetail(){
  if(!wkSel) return;
  const j=jobOf(wkSel.jid); if(!j){ wkSel=null; return; }
  document.getElementById("wd-title").textContent = wdTitle();
  document.getElementById("wd-month").textContent = wkName();
  const list=workEntries(matcher(wkSel.jid,wkSel.sid)), sm=summarize(list);
  const r = wkSel.sid && wkSel.sid!=="*" ? rateFor(`${j.id}|${wkSel.sid}`) : rateFor(`${j.id}|`);
  document.getElementById("wd-sum").innerHTML = `
    ${r.type==="hour"?`<div><span class="label">Przepracowane</span><b class="num">${fmtH(sm.doneMin)}</b></div>`:`<div><span class="label">Jednostki</span><b class="num">${fmtNum(sm.doneUnits)}</b></div>`}
    <div><span class="label">Zajęcia</span><b class="num">${sm.doneN-sm.doneM} T${sm.doneM?` + ${sm.doneM} M`:""}</b></div>
    <div><span class="label">Kwota</span><b class="num" style="color:var(--inc)">${zl(sm.donePay)}</b></div>
    <div><span class="label">Stawka</span><b class="num" style="font-size:.9rem">${rateLabel(r.type,r.rate,r.match)}</b></div>
    ${sm.planN?`<div><span class="label">Do końca miesiąca</span><b class="num" style="color:var(--muted)">+${sm.planN} zaj. · +${fmtH(sm.planMin)} · +${zl(sm.planPay)}</b></div>`:""}
    ${sm.skipN?`<div><span class="label">Odwołane</span><b class="num" style="color:var(--muted)">${sm.skipN}</b></div>`:""}`;
  document.getElementById("wd-pay").textContent = sm.donePay+sm.planPay>0 ? `Zaplanuj wypłatę ${zl(round2(sm.donePay+sm.planPay))}` : "Zaplanuj wypłatę";
  document.getElementById("wd-pay").disabled = !(sm.donePay+sm.planPay>0);
  const docOk = r.type!=="hour" && (wkSel.sid!=="*" || !j.subs.length) && !(wkSel.sid==="" && j.subs.length);
  const db=document.getElementById("wd-doc"); db.hidden = r.type==="hour"; db.disabled=!docOk;
  db.title = docOk ? "" : "Wybierz podgrupę, żeby wygenerować zestawienie";
  document.getElementById("wd-dochint").hidden = r.type==="hour" || docOk;
  const subName = w => { const [,b]=splitW(w); const s=b&&j.subs.find(x=>x.id===b); return s?s.name:""; };
  document.getElementById("wd-list").innerHTML = list.length ? list.map(en=>{
    const st = en.status==="plan"?" · zaplanowane":en.status==="skip"?" · odwołane":en.status==="miss"?" · nieodhaczony quest":"";
    return `<button class="wrow st-${en.status}" data-went="${en.src}|${en.id}|${en.orig||en.date}">
      <span class="wdate num">${new Date(en.date+"T00:00").toLocaleDateString("pl-PL",{weekday:"short",day:"numeric",month:"numeric"})}</span>
      <span class="wt"><b><span class="kind k${en.kind}">${en.kind}</span> ${esc(en.title)}</b><small>${en.time?`${en.time}–${hhmm(toMin(en.time)+en.dur)}`:"bez godziny"}${en.where?" · "+esc(en.where):""} · ${en.src==="event"?(en.kind==="M"?"mecz":"⟳ stałe"):en.src==="quest"?"quest":"wpis ręczny"}${wkSel.sid==="*"&&subName(en.work)?" · "+esc(subName(en.work)):""}${st}</small></span>
      <span class="wh num">${r.type==="hour"?(en.dur?fmtH(en.dur):"—"):"×"+fmtNum(entryUnits(en))}</span>
      <span class="wz num">${en.status==="done"?zl(entryPay(en)):""}</span></button>`; }).join("")
    : `<div class="empty" style="margin:12px 0">Brak wpisów w tym miesiącu.</div>`;
}
function openWorkDetail(jid,sid){ wkSel={jid,sid}; tab="workd"; render(); scrollTo(0,0); }
function exportWork(){
  const j=jobOf(wkSel.jid), list=workEntries(matcher(wkSel.jid,wkSel.sid)).filter(en=>en.status==="done"), sm=summarize(list);
  const r = wkSel.sid && wkSel.sid!=="*" ? rateFor(`${j.id}|${wkSel.sid}`) : rateFor(`${j.id}|`);
  const lines=[`Ewidencja godzin – ${wdTitle()}`, wkName().replace(/^./,c=>c.toUpperCase()), ""];
  lines.push(`Data         T/M Godziny      ${r.type==="hour"?"Czas":"Jedn."}   Opis`);
  for(const en of list){
    const d=new Date(en.date+"T00:00"), ds=`${String(d.getDate()).padStart(2,"0")}.${String(d.getMonth()+1).padStart(2,"0")} (${d.toLocaleDateString("pl-PL",{weekday:"short"})})`;
    lines.push(`${ds.padEnd(13)}${en.kind}  ${(en.time?`${en.time}–${hhmm(toMin(en.time)+en.dur)}`:"—").padEnd(13)}${(r.type==="hour"?fmtH(en.dur):"×"+fmtNum(entryUnits(en))).padEnd(8)}${en.title}${en.where?" ("+en.where+")":""}`);
  }
  lines.push("", r.type==="hour" ? `Razem: ${sm.doneN} ${sm.doneN===1?"wpis":"wpisów"}, ${fmtH(sm.doneMin)}` : `Suma jednostek zajęć: ${fmtNum(sm.doneUnits)} (${sm.doneN-sm.doneM} T, ${sm.doneM} M)`);
  if(r.rate>0) lines.push(`Stawka: ${rateLabel(r.type,r.rate,r.match)}`, `Do wypłaty: ${zl(sm.donePay)}`);
  if(wkSel.sid==="*" && j.subs.length){ lines.push("", "Podział na podgrupy:");
    for(const s of [...j.subs,{id:"",name:"ogólnie"}]){ const ss=summarize(list.filter(en=>splitW(en.work)[1]===s.id)); if(ss.doneN) lines.push(`• ${s.name}: ${ss.doneN} wpisów, ${fmtH(ss.doneMin)}, ${zl(ss.donePay)}`); } }
  const txt=lines.join("\n");
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Ewidencja do wysłania"><h3>Ewidencja do wysłania</h3>
    <p class="hint" style="margin:-6px 0 10px">Tylko odbyte zajęcia i wpisy. Skopiuj i wklej do maila, SMS-a albo dokumentu.</p>
    <textarea id="ex-txt" readonly rows="12" class="extxt">${esc(txt)}</textarea>
    <div class="actions"><button type="button" class="btn ghost" id="cancel">Zamknij</button><button type="button" class="btn primary" id="ex-copy">Kopiuj</button></div></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  ov.querySelector("#ex-copy").onclick=async()=>{ const ta=ov.querySelector("#ex-txt"); let ok=false; try{ await navigator.clipboard.writeText(txt); ok=true; }catch(e){} if(ok) toast("Skopiowano ewidencję."); else { ta.focus(); ta.select(); toast("Zaznaczyłem tekst. Skopiuj go z menu."); } };
}
function planPayout(){
  const j=jobOf(wkSel.jid), sm=summarize(workEntries(matcher(wkSel.jid,wkSel.sid))), amount=round2(sm.donePay+sm.planPay);
  if(!(amount>0)) return;
  let date=iso(new Date(wkY,wkM+1,10)); if(date<TODAY) date=TODAY;
  txSheet(null,null,{type:"inc",amount,method:"card",cat:"Wynagrodzenie",note:`${wdTitle()} – ${new Date(wkY,wkM,1).toLocaleDateString("pl-PL",{month:"long"})}`.slice(0,60),date});
}
function manualSheet(id){
  if(!S.jobs.length){ jobSheet(); return; }
  const w = id ? S.workLog.find(x=>x.id===id) : {work: wkSel ? `${wkSel.jid}|${wkSel.sid==="*"?"":wkSel.sid}` : `${S.jobs[0].id}|`, date: wkKey()===TODAY.slice(0,7)?TODAY:`${wkKey()}-01`, time:"", dur:60, note:""};
  if(!w) return;
  const h=Math.floor(w.dur/60), m=w.dur%60;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Wpis do ewidencji"><h3>${id?"Edytuj wpis":"Wpis ręczny do ewidencji"}</h3><form id="f">
    <div class="field"><label class="label" for="m-work">Praca</label><select id="m-work">${workOptions(w.work,false)}</select></div>
    <div class="field"><span class="label">Rodzaj</span>${seg("mkind",[["T","Trening"],["M","Mecz / turniej"]],w.kind||"T")}</div>
    <div class="row">
      <div class="field"><label class="label" for="m-date">Dzień</label><input id="m-date" type="date" required value="${w.date}"></div>
      <div class="field"><label class="label" for="m-time">Od (opcj.)</label><input id="m-time" type="time" step="300" value="${w.time||""}"></div>
    </div>
    <div class="field"><span class="label">Czas trwania</span><div class="durrow"><input id="m-h" type="number" min="0" max="23" inputmode="numeric" value="${h||""}" placeholder="0" aria-label="Godziny"><span>h</span><input id="m-m" type="number" min="0" max="59" step="5" inputmode="numeric" value="${m||""}" placeholder="0" aria-label="Minuty"><span>min</span></div></div>
    <div class="row">
      <div class="field"><label class="label" for="m-note">Opis</label><input id="m-note" value="${esc(w.note||"")}" placeholder="np. zastępstwo"></div>
      <div class="field"><label class="label" for="m-place">Miejsce / przeciwnik</label><input id="m-place" value="${esc(w.place||"")}" placeholder="np. Marki"></div>
    </div>
    <p class="hint" style="margin:0">Wpis ręczny liczy się jako odbyty. Przydaje się na zastępstwa i jednorazowe zlecenia.</p>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="m-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Dodaj"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov); ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#m-del"),()=>{ S.workLog=S.workLog.filter(x=>x.id!==id); save(); close(); render(); });
  ov.querySelector("#f").onsubmit=e=>{ e.preventDefault();
    const dur=(parseInt(ov.querySelector("#m-h").value)||0)*60+(parseInt(ov.querySelector("#m-m").value)||0);
    const date=ov.querySelector("#m-date").value;
    if(!date){ ov.querySelector("#err").textContent="Wybierz dzień."; return; }
    if(dur<5 && rateFor(ov.querySelector("#m-work").value).type==="hour"){ ov.querySelector("#err").textContent="Podaj czas trwania, np. 1 h 30 min."; return; }
    const data={work:ov.querySelector("#m-work").value,date,time:ov.querySelector("#m-time").value,dur,note:ov.querySelector("#m-note").value.trim(),kind:segVal(ov,"mkind"),place:ov.querySelector("#m-place").value.trim()};
    if(id) Object.assign(w,data); else S.workLog.push({id:uid(),...data});
    save(); close(); render();
  };
}
/* mecze: jednorazowe wydarzenia rozliczane stawką meczową */
function matchSheet(id, pre={}){
  if(!S.jobs.length){ jobSheet(); return; }
  const e = id ? S.events.find(x=>x.id===id) : null;
  const defW = pre.work || (wkSel ? `${wkSel.jid}|${wkSel.sid==="*"?(jobOf(wkSel.jid)?.subs[0]?.id||""):wkSel.sid}` : `${S.jobs[0].id}|${S.jobs[0].subs[0]?.id||""}`);
  const v = e ? {...e, date:e.from} : {work:defW, date:pre.date||TODAY, time:"10:00", dur:90, opponent:"", place:"", title:""};
  const sname = w => { const [a,b]=splitW(w); const j=jobOf(a); const s=b&&j&&j.subs.find(x=>x.id===b); return s?s.name:(j?j.name:""); };
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Mecz"><h3>${e?"Edytuj mecz":"Nowy mecz"}</h3><form id="f">
    <div class="field"><label class="label" for="mt-work">Drużyna / praca</label><select id="mt-work">${workOptions(v.work,false)}</select></div>
    <div class="field"><label class="label" for="mt-opp">Przeciwnik / wydarzenie</label><input id="mt-opp" value="${esc(v.opponent||"")}" placeholder="np. KS Ząbki, turniej w Wołominie"></div>
    <div class="row">
      <div class="field"><label class="label" for="mt-date">Dzień</label><input id="mt-date" type="date" required value="${v.date}"></div>
      <div class="field"><label class="label" for="mt-time">Godzina</label><input id="mt-time" type="time" step="300" required value="${v.time}"></div>
    </div>
    <div class="row">
      <div class="field"><label class="label" for="mt-dur">Czas (min)</label><input id="mt-dur" type="number" min="15" step="15" inputmode="numeric" value="${v.dur}"></div>
      <div class="field"><label class="label" for="mt-place">Miejsce</label><input id="mt-place" value="${esc(v.place||"")}" placeholder="np. Marki / wyjazd"></div>
    </div>
    <div class="field"><label class="label" for="mt-title">Nazwa w planie</label><input id="mt-title" value="${esc(v.title||"")}" placeholder="Mecz ${esc(sname(v.work))}"></div>
    <p class="hint" style="margin:0" id="mt-rate"></p>
    <div class="err" id="err"></div>
    <div class="actions">${e?`<button type="button" class="btn ghost" id="mt-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${e?"Zapisz":"Dodaj mecz"}</button></div>
  </form></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  const rateHint=()=>{ const w=ov.querySelector("#mt-work").value, r=rateFor(w); ov.querySelector("#mt-title").placeholder=`Mecz ${sname(w)}`;
    ov.querySelector("#mt-rate").textContent = r.match>0 ? `Stawka meczowa: ${zl(r.match)}${r.type!=="hour"&&r.rate>0?` (w zestawieniu przelicznik ×${fmtNum(r.match/r.rate)})`:""}.` : `Brak stawki meczowej, mecz liczy się jak ${r.type==="hour"?"zwykłe godziny":"1 jednostka"}. Ustawisz ją w ⋯ przy pracy.`; };
  ov.querySelector("#mt-work").onchange=rateHint; rateHint();
  if(e) confirmBtn(ov.querySelector("#mt-del"),()=>{ S.events=S.events.filter(x=>x.id!==id); save(); close(); render(); });
  ov.querySelector("#f").onsubmit=ev=>{ ev.preventDefault();
    const date=ov.querySelector("#mt-date").value, time=ov.querySelector("#mt-time").value;
    if(!date||!time){ ov.querySelector("#err").textContent="Podaj dzień i godzinę meczu."; return; }
    const work=ov.querySelector("#mt-work").value;
    const data={title:ov.querySelector("#mt-title").value.trim()||`Mecz ${sname(work)}`,cat:"Praca",days:[wdOf(date)],time,dur:parseInt(ov.querySelector("#mt-dur").value)||90,
      place:ov.querySelector("#mt-place").value.trim(),from:date,to:date,every:1,work,kind:"M",opponent:ov.querySelector("#mt-opp").value.trim(),once:true};
    if(e){ Object.assign(e,data); e.over={}; e.skip=[]; } else S.events.push({id:uid(),skip:[],over:{},...data});
    save(); close(); render(); if(!e) toast(`Dodano mecz na ${fmtDate(date)}. Jest też w planie dnia i kalendarzu.`);
  };
}

/* zestawienie Word (Załącznik nr 5) */
let zipLoading=null;
function loadZip(){
  if(window.JSZip) return Promise.resolve();
  return zipLoading ||= new Promise((res,rej)=>{ const sc=document.createElement("script");
    sc.src = window.__PWA__ ? "jszip.min.js" : "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    sc.onload=res; sc.onerror=()=>{ zipLoading=null; rej(new Error("load")); }; document.head.appendChild(sc); });
}
const xe = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const plainNum = v => Number.isInteger(round2(v)) ? String(round2(v)) : round2(v).toFixed(2).replace(".",",");
const asciiName = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ł/g,"l").replace(/Ł/g,"L").replace(/[^A-Za-z0-9]+/g,"_").replace(/^_|_$/g,"");
function docTarget(){ const j=jobOf(wkSel.jid); const s=wkSel.sid&&wkSel.sid!=="*" ? j.subs.find(x=>x.id===wkSel.sid) : null; return {j,s,o:s||j}; }
async function buildZ5(info){
  const {j,s}=docTarget(), w=`${j.id}|${s?s.id:""}`, r=rateFor(w);
  const list=workEntries(matcher(wkSel.jid, s?s.id:"")).filter(en=>en.status==="done");
  const sm=summarize(list);
  await loadZip();
  const zip=await JSZip.loadAsync(Z5_TPL, {base64:true});
  let x=await zip.file("word/document.xml").async("string");
  const k=x.indexOf("{{LP}}"); let st=-1; const re=/<w:tr[ >]/g; let m; while((m=re.exec(x)) && m.index<k) st=m.index;
  const en=x.indexOf("</w:tr>",k)+7, rowT=x.slice(st,en);
  const n=Math.max(15,list.length); let rows="";
  for(let i=0;i<n;i++){ const e=list[i]; const d=e?new Date(e.date+"T00:00"):null;
    rows += rowT.replace("{{LP}}",`${i+1}.`).replace("{{DATA}}", d?`${d.getDate()}.${String(d.getMonth()+1).padStart(2,"0")}.${d.getFullYear()}`:"")
      .replace("{{RODZ}}", e?e.kind:"").replace("{{MIEJSCE}}", e?xe(e.where):"").replace("{{PRZEL}}", e?plainNum(entryUnits(e)):""); }
  x = x.slice(0,st)+rows+x.slice(en);
  const month = new Date(wkY,wkM,1).toLocaleDateString("pl-PL",{month:"long"}).toUpperCase()+" "+wkY;
  x = x.replace("{{UMOWA}}",xe(info.contract)).replace("{{IMIE}}",xe(info.name)).replace("{{MIESIAC}}",xe(month))
       .replace("{{STAWKA}}",xe(plainNum(r.rate))).replace("{{GRUPA}}",xe(info.group))
       .replace("{{SUMA}}",xe(plainNum(sm.doneUnits))).replace("{{WYNAGR}}",xe(plainNum(sm.donePay)));
  zip.file("word/document.xml",x);
  const blob=await zip.generateAsync({type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",compression:"DEFLATE"});
  const surname=(info.name.trim().split(/\s+/).pop()||"Zestawienie");
  return {blob, filename:`${asciiName(surname)}_${asciiName(info.group)}_${String(wkM+1).padStart(2,"0")}_${wkY}.docx`, sm};
}
async function saveFile(blob, filename){
  if(!window.__PWA__ && window.claude){
    const dl = await claude.use("downloads").catch(()=>null);
    if(dl){ try{ await dl.save({filename, data:blob}); return "saved"; }catch(e){ if(e && e.code==="declined") return "declined"; throw e; } }
    throw new Error("unavailable");
  }
  const file=new File([blob],filename,{type:blob.type});
  try{ if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:filename}); return "saved"; } }
  catch(e){ if(e && e.name==="AbortError") return "declined"; }
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},3000); return "saved";
}
function docSheet(){
  const {j,s,o}=docTarget();
  const list=workEntries(matcher(wkSel.jid, s?s.id:"")), sm=summarize(list.filter(e=>e.status==="done")), r=rateFor(`${j.id}|${s?s.id:""}`);
  const plan=list.filter(e=>e.status==="plan").length, miss=list.filter(e=>e.status==="miss").length;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Zestawienie"><h3>Zestawienie jednostek zajęć</h3>
    <p class="hint" style="margin:-6px 0 12px">Załącznik nr 5 do umowy zlecenia · ${esc(wdTitle())} · <span style="text-transform:capitalize">${wkName()}</span></p>
    <div class="daysum" style="margin:0 0 12px"><div><span class="label">Jednostki</span><b class="num">${fmtNum(sm.doneUnits)}</b></div><div><span class="label">T / M</span><b class="num">${sm.doneN-sm.doneM} / ${sm.doneM}</b></div><div><span class="label">Wynagrodzenie</span><b class="num" style="color:var(--inc)">${zl(sm.donePay)}</b></div></div>
    ${plan||miss?`<p class="hint" style="margin:0 0 10px;color:var(--gold)">${plan?`${plan} zaplanowanych zajęć jeszcze się nie odbyło, więc nie ma ich w zestawieniu. `:""}${miss?`${miss} questów pracy nie jest odhaczonych.`:""}</p>`:""}
    <form id="f">
      <div class="field"><label class="label" for="z-name">Zleceniobiorca (trener)</label><input id="z-name" required value="${esc(S.me.name||"")}" placeholder="Imię i nazwisko"></div>
      <div class="field"><label class="label" for="z-contract">Nr umowy zlecenia</label><input id="z-contract" required value="${esc(o.contract||"")}" placeholder="np. 190/502-3 MKS MM/09/2026"></div>
      <div class="field"><label class="label" for="z-group">Grupa (jak w dokumencie)</label><input id="z-group" required value="${esc(o.docGroup||(s?s.name:j.name))}"></div>
      <p class="hint" style="margin:0">Stawka w dokumencie: ${plainNum(r.rate)} zł brutto za jednostkę${r.match>0&&r.rate>0?`. Mecz liczy się z przelicznikiem ×${fmtNum(r.match/r.rate)}`:""}. Dane zapamiętam na kolejne miesiące.</p>
      <div class="err" id="err"></div>
      <div class="actions"><button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary" id="z-go">📄 Pobierz .docx</button></div>
    </form></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  ov.querySelector("#f").onsubmit=async ev=>{ ev.preventDefault();
    const err=ov.querySelector("#err"), btn=ov.querySelector("#z-go");
    const info={name:ov.querySelector("#z-name").value.trim(),contract:ov.querySelector("#z-contract").value.trim(),group:ov.querySelector("#z-group").value.trim()};
    if(!info.name||!info.contract||!info.group){ err.textContent="Uzupełnij imię i nazwisko, numer umowy i grupę."; return; }
    if(!sm.doneN){ err.textContent="W tym miesiącu nie ma jeszcze odbytych zajęć."; return; }
    S.me.name=info.name; o.contract=info.contract; o.docGroup=info.group; save();
    btn.disabled=true; btn.textContent="Tworzę dokument…";
    try{
      const {blob,filename}=await buildZ5(info);
      const st=await saveFile(blob,filename);
      if(st==="saved"){ close(); toast(`Gotowe: ${filename}`); } else { btn.disabled=false; btn.textContent="📄 Pobierz .docx"; }
    }catch(e){ btn.disabled=false; btn.textContent="📄 Pobierz .docx";
      err.textContent = !window.JSZip ? "Nie udało się wczytać modułu dokumentów. Sprawdź internet i spróbuj ponownie." : "Nie udało się zapisać pliku w tym widoku. Spróbuj w aplikacji na telefonie albo skopiuj ewidencję jako tekst."; }
  };
}

function jobSheet(id){
  const j = id ? jobOf(id) : {name:"",rateType:"unit",rate:0,matchRate:0,place:"",subs:[]};
  if(!j) return;
  let subs = j.subs.map(s=>({...s}));
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Praca"><h3>${id?"Edytuj pracę":"Nowa praca"}</h3><form id="f">
    <div class="field"><label class="label" for="j-name">Nazwa</label><input id="j-name" required value="${esc(j.name)}" placeholder="np. Marcovia Marki, SG Motoryka"></div>
    <div class="field"><span class="label">Rozliczenie</span>${seg("jrt",[["unit","Za jednostkę treningową"],["hour","Za godzinę"]],j.rateType==="hour"?"hour":"unit")}</div>
    <div class="row">
      <div class="field"><label class="label" for="j-rate" id="j-ratel">Stawka (zł)</label><input id="j-rate" inputmode="decimal" value="${j.rate?String(j.rate).replace(".",","):""}" placeholder="np. 85"></div>
      <div class="field"><label class="label" for="j-match">Stawka meczowa (opcj.)</label><input id="j-match" inputmode="decimal" value="${j.matchRate?String(j.matchRate).replace(".",","):""}" placeholder="jak trening"></div>
    </div>
    <div class="field"><label class="label" for="j-place">Miejsce treningów (domyślne)</label><input id="j-place" value="${esc(j.place||"")}" placeholder="np. Marki"></div>
    <div class="field"><span class="label">Podgrupy (opcj.)</span><div id="j-subs" class="subs"></div>
      <button type="button" class="mini" id="j-addsub" style="align-self:flex-start">+ Podgrupa</button>
      <p class="hint" style="margin:0">Np. roczniki: 2015B, 2020. Każda podgrupa ma osobną ewidencję. Kolumny: nazwa, stawka, stawka meczowa (puste = jak dla całej pracy).</p></div>
    <div class="err" id="err"></div>
    <div class="actions">${id?`<button type="button" class="btn ghost" id="j-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">${id?"Zapisz":"Dodaj pracę"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  const box=ov.querySelector("#j-subs");
  const read=()=>{ box.querySelectorAll(".subrow").forEach((row,i)=>{ subs[i].name=row.querySelector(".sn").value; subs[i].rateStr=row.querySelector(".sr").value; subs[i].matchStr=row.querySelector(".sm").value; }); };
  const nv=(str,v)=>esc(str!=null?str:(v?String(v).replace(".",","):""));
  const draw=()=>{ box.innerHTML = subs.map((s,i)=>`<div class="subrow"><input class="sn" value="${esc(s.name)}" placeholder="np. 2015B" aria-label="Nazwa podgrupy"><input class="sr" inputmode="decimal" value="${nv(s.rateStr,s.rate)}" placeholder="stawka" aria-label="Stawka podgrupy"><input class="sm" inputmode="decimal" value="${nv(s.matchStr,s.matchRate)}" placeholder="mecz" aria-label="Stawka meczowa podgrupy"><button type="button" class="del" data-i="${i}" aria-label="Usuń podgrupę">×</button></div>`).join(""); };
  draw();
  box.onclick=e=>{ const b=e.target.closest("button[data-i]"); if(!b) return; read(); subs.splice(+b.dataset.i,1); draw(); };
  ov.querySelector("#j-addsub").onclick=()=>{ read(); subs.push({id:uid(),name:"",rate:null}); draw(); box.querySelector(".subrow:last-child .sn")?.focus(); };
  ov.querySelector("#cancel").onclick=close;
  if(id) confirmBtn(ov.querySelector("#j-del"),()=>{
    S.events.forEach(e=>{ if(splitW(e.work)[0]===id) delete e.work; }); S.quests.forEach(q=>{ if(splitW(q.work)[0]===id) delete q.work; });
    S.workLog=S.workLog.filter(w=>splitW(w.work)[0]!==id); S.jobs=S.jobs.filter(x=>x.id!==id);
    save(); close(); if(tab==="workd") tab="work"; render(); toast("Usunięto pracę i jej wpisy ręczne. Stałe wydarzenia zostały, tylko bez ewidencji.");
  });
  ov.querySelector("#f").onsubmit=e=>{ e.preventDefault(); read();
    const err=ov.querySelector("#err");
    const name=ov.querySelector("#j-name").value.trim(); if(!name){ err.textContent="Wpisz nazwę pracy."; return; }
    const rr=ov.querySelector("#j-rate").value.trim(), rate=rr?parseAmt(rr):0;
    if(rr && !(rate>=0)){ err.textContent="Stawka musi być liczbą, np. 50."; return; }
    const mr=ov.querySelector("#j-match").value.trim(), matchRate=mr?parseAmt(mr):0;
    if(mr && !(matchRate>=0)){ err.textContent="Stawka meczowa musi być liczbą, np. 120."; return; }
    const clean=[]; for(const s of subs){ const n=(s.name||"").trim(); if(!n) continue;
      const sr=(s.rateStr!=null?s.rateStr:(s.rate?String(s.rate):"")).trim(), v=sr?parseAmt(sr):null;
      const sm=(s.matchStr!=null?s.matchStr:(s.matchRate?String(s.matchRate):"")).trim(), mv=sm?parseAmt(sm):null;
      if((sr && !(v>=0)) || (sm && !(mv>=0))){ err.textContent=`Stawki podgrupy „${n}” muszą być liczbami.`; return; }
      clean.push({id:s.id||uid(),name:n,rate:v>0?round2(v):null,matchRate:mv>0?round2(mv):null,contract:s.contract||"",docGroup:s.docGroup||""}); }
    const data={name,rateType:segVal(ov,"jrt"),rate:round2(rate||0),matchRate:round2(matchRate||0),place:ov.querySelector("#j-place").value.trim(),subs:clean};
    if(id){
      const keep=new Set(clean.map(s=>s.id));
      const retag=x=>{ const [a,b]=splitW(x.work); if(a===id && b && !keep.has(b)) x.work=`${id}|`; };
      S.events.forEach(retag); S.quests.forEach(retag); S.workLog.forEach(retag);
      if(wkSel && wkSel.jid===id && wkSel.sid && wkSel.sid!=="*" && !keep.has(wkSel.sid)) wkSel.sid="*";
      Object.assign(j,data);
    } else S.jobs.push({id:"j-"+uid(),...data});
    save(); close(); render();
  };
  if(!id) setTimeout(()=>ov.querySelector("#j-name")?.focus(),50);
}
(function wireWork(){
  const shift=n=>{ wkM+=n; if(wkM<0){wkM=11;wkY--;} if(wkM>11){wkM=0;wkY++;} renderWork(); renderWorkDetail(); };
  document.getElementById("wk-prev").onclick=()=>shift(-1);
  document.getElementById("wk-next").onclick=()=>shift(1);
  document.getElementById("wk-now").onclick=()=>{ wkY=d0.getFullYear(); wkM=d0.getMonth(); renderWork(); };
  document.getElementById("wd-prev").onclick=()=>shift(-1);
  document.getElementById("wd-next").onclick=()=>shift(1);
  document.getElementById("wk-addjob").onclick=()=>jobSheet();
  document.getElementById("wd-back").onclick=()=>{ tab="work"; render(); scrollTo(0,0); };
  document.getElementById("wd-export").onclick=exportWork;
  document.getElementById("wd-pay").onclick=planPayout;
  document.getElementById("wd-add").onclick=()=>manualSheet();
  document.getElementById("wd-match").onclick=()=>matchSheet();
  document.getElementById("wd-doc").onclick=docSheet;
  addSwipe(document.getElementById("v-work"),()=>shift(-1),()=>shift(1));
  addSwipe(document.getElementById("wd-sum"),()=>shift(-1),()=>shift(1));
})();

function addWorkChooser(){
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Dodaj do ewidencji"><h3>Dodaj do ewidencji</h3>
    <div class="choose"><button type="button" class="chbtn" id="cw-m"><span aria-hidden="true">⚽</span><b>Mecz</b><small>trafi też do planu dnia</small></button>
    <button type="button" class="chbtn" id="cw-t"><span aria-hidden="true">✎</span><b>Wpis ręczny</b><small>zastępstwo, turniej</small></button></div>
    <div class="actions"><button type="button" class="btn ghost" id="cancel">Anuluj</button></div></div>`;
  ov.hidden=false; ov.querySelector("#cancel").onclick=close;
  ov.querySelector("#cw-m").onclick=e=>{ e.stopPropagation(); matchSheet(); };
  ov.querySelector("#cw-t").onclick=e=>{ e.stopPropagation(); manualSheet(); };
}
/* ---------- arkusze ---------- */
const ov = document.getElementById("overlay");
function close(){ ov.hidden=true; ov.innerHTML=""; }
ov.addEventListener("click",e=>{ if(e.target===ov) close(); });
function seg(name,opts,val){ return `<div class="seg" data-seg="${name}">${opts.map(([v,l])=>`<button type="button" data-v="${v}" aria-pressed="${v==val}">${l}</button>`).join("")}</div>`; }
function bindSeg(root){ root.querySelectorAll(".seg[data-seg]").forEach(s=>s.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;s.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));s.dataset.val=b.dataset.v;s.dispatchEvent(new Event("segchange"));})); }
const segVal = (root,n) => { const s=root.querySelector(`[data-seg="${n}"]`); return s.dataset.val || s.querySelector('[aria-pressed="true"]').dataset.v; };
function confirmBtn(btn, fn){ let armed=false; btn.onclick=()=>{ if(!armed){ armed=true; btn.textContent="Na pewno?"; return; } fn(); }; }

function questSheet(o={}){
  const q = o.id ? S.quests.find(x=>x.id===o.id) : null;
  const v = q || {title:"",prio:2,cat:filter!=="Wszystkie"?filter:"Praca",date:o.date||"",deadline:o.deadline||"",time:o.time||"",cost:0,method:"card",expCat:"",dur:0};
  const dh=Math.floor((v.dur||0)/60), dm=(v.dur||0)%60;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${q?"Edytuj quest":"Nowy quest"}"><h3>${q?"Edytuj quest":"Nowy quest"}</h3><form id="f">
    <div class="field"><label class="label" for="q-title">Co trzeba zrobić</label><input id="q-title" required value="${esc(v.title)}" placeholder="np. Oddać sprawozdanie"></div>
    <div class="field"><span class="label">Priorytet</span>${seg("prio",[[1,"Niski"],[2,"Średni"],[3,"Wysoki"],[4,"Krytyczny"]],v.prio)}</div>
    <div class="row">
      <div class="field"><label class="label" for="q-cat">Kategoria</label><select id="q-cat">${S.cats.map(c=>`<option ${c===v.cat?"selected":""}>${esc(c)}</option>`).join("")}<option value="__new">+ Nowa kategoria…</option></select></div>
      <div class="field"><label class="label" for="q-deadline">⚑ Deadline</label><input id="q-deadline" type="date" value="${v.deadline||""}"></div>
    </div>
    <div class="field" id="newcat" hidden><label class="label" for="q-newcat">Nazwa nowej kategorii</label><input id="q-newcat" placeholder="np. Obóz"></div>
    ${workField("q-work", v.work)}
    <p class="hint" style="margin:0">Deadline to przypomnienie w kalendarzu. Quest bez ustalonego dnia jest luźny: wrzucasz go w plan dowolnego dnia w zakładce Dziś.</p>
    <div class="row">
      <div class="field"><label class="label" for="q-date">📅 Ustalony dzień (opcj.)</label><input id="q-date" type="date" value="${v.date||""}"></div>
      <div class="field"><label class="label" for="q-time">Godzina (opcj.)</label><input id="q-time" type="time" step="900" value="${v.time||""}"></div>
    </div>
    <div class="field"><span class="label">Czas trwania (opcjonalnie)</span>
      <div class="durrow"><input id="q-h" type="number" min="0" max="99" inputmode="numeric" value="${dh||""}" placeholder="0" aria-label="Godziny"><span>h</span><input id="q-m" type="number" min="0" max="59" step="5" inputmode="numeric" value="${dm||""}" placeholder="0" aria-label="Minuty"><span>min</span></div>
      <div class="quick" id="dur-quick"><button type="button" data-dur="15">15 min</button><button type="button" data-dur="30">30 min</button><button type="button" data-dur="60">1 h</button><button type="button" data-dur="120">2 h</button><button type="button" data-dur="240">4 h</button></div>
    </div>
    <div class="row">
      <div class="field"><label class="label" for="q-cost">Koszt (zł, opcjonalnie)</label><input id="q-cost" inputmode="decimal" value="${v.cost?String(v.cost).replace(".",","):""}" placeholder="0,00"></div>
      <div class="field"><label class="label" for="q-expcat">Kategoria wydatku</label><select id="q-expcat">${TX_CATS.filter(c=>c!=="Wynagrodzenie").map(c=>`<option ${c===(v.expCat||CAT_TO_EXP[v.cat]||"Inne")?"selected":""}>${c}</option>`).join("")}</select></div>
    </div>
    <div class="field"><span class="label">Płatność</span>${seg("qmethod",[["card","Karta / przelew"],["cash","Gotówka"]],v.method||"card")}</div>
    <p class="hint" style="margin:0">Koszt liczy się w prognozie od ustalonego dnia, a jeśli go nie ma, od deadline'u. Po odhaczeniu questa wydatek trafia do historii w Portfelu z wybraną kategorią.</p>
    <div class="err" id="err"></div>
    <div class="actions">${q?`<button type="button" class="btn ghost" id="q-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary" id="q-ok">${q?"Zapisz":"Dodaj quest"}</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  ov.querySelector("#dur-quick").onclick=e=>{const b=e.target.closest("button");if(!b)return;const m=+b.dataset.dur;ov.querySelector("#q-h").value=Math.floor(m/60)||"";ov.querySelector("#q-m").value=m%60||"";};
  const sel=ov.querySelector("#q-cat"), expSel=ov.querySelector("#q-expcat");
  let expTouched = !!(q && q.expCat);
  expSel.onchange=()=>expTouched=true;
  sel.onchange=()=>{ ov.querySelector("#newcat").hidden=sel.value!=="__new"; if(!expTouched && CAT_TO_EXP[sel.value]) expSel.value=CAT_TO_EXP[sel.value]; };
  ov.querySelector("#cancel").onclick=close;
  if(q) confirmBtn(ov.querySelector("#q-del"),()=>{ S.quests=S.quests.filter(x=>x.id!==q.id); save();close();render(); });
  let warned=false;
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const err=ov.querySelector("#err"); err.className="err";
    const title=ov.querySelector("#q-title").value.trim(); if(!title){err.textContent="Wpisz nazwę questa.";return;}
    let cat=sel.value; if(cat==="__new"){cat=ov.querySelector("#q-newcat").value.trim(); if(!cat){err.textContent="Wpisz nazwę nowej kategorii.";return;}}
    const costRaw=ov.querySelector("#q-cost").value.trim(); const cost=costRaw?parseAmt(costRaw):0;
    if(costRaw && !(cost>0)){err.textContent="Koszt musi być liczbą większą od zera, np. 79,90.";return;}
    const dur=(parseInt(ov.querySelector("#q-h").value)||0)*60+(parseInt(ov.querySelector("#q-m").value)||0);
    const time=ov.querySelector("#q-time").value, deadline=ov.querySelector("#q-deadline").value;
    const date=ov.querySelector("#q-date").value||(time?(o.date||TODAY):"");
    const c=clashes(date,time,dur||30,q&&q.id), afterDl = date && deadline && date>deadline;
    if((c.length||afterDl) && !warned){ warned=true; err.className="err warn-soft";
      err.textContent=[c.length?`⚠ Koliduje z: ${c.join(", ")}.`:"", afterDl?`⚠ Ustalony dzień wypada po deadlinie.`:""].filter(Boolean).join(" ")+" Zapisz jeszcze raz, jeśli tak ma być.";
      ov.querySelector("#q-ok").textContent="Zapisz mimo to"; return; }
    if(!S.cats.includes(cat)) S.cats.push(cat);
    const data={title,cat,prio:+segVal(ov,"prio"),date,deadline,time:date?time:"",cost:round2(cost),method:segVal(ov,"qmethod"),expCat:expSel.value,dur,work:ov.querySelector("#q-work")?.value ?? (q&&q.work||"")};
    if(q){ Object.assign(q,data); syncQuestTx(q); } else S.quests.push({id:uid(),done:false,...data});
    save();close();render();};
  if(!q) setTimeout(()=>ov.querySelector("#q-title")?.focus(),50);
}

function txSheet(id, list, pre){
  const src = id ? (list==="recur"?S.recur:list==="plan"?S.plan:S.tx).find(x=>x.id===id) : null;
  const v = src ? {...src, date: src.next||src.date, freq: list==="recur"?src.freq:"none"} : {type:"exp",amount:"",method:"card",dir:"toCash",cat:"Jedzenie",note:"",date:TODAY,freq:"none",to:"",...(pre||{})};
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${src?"Edytuj operację":"Nowa operacja"}"><h3>${src?"Edytuj operację":pre&&pre.receiptInfo?"Sprawdź odczyt paragonu":"Nowa operacja"}</h3>
    ${!src&&!pre&&SCAN?`<button type="button" class="btn ghost" id="t-scan" style="width:100%;margin-bottom:12px">📷 Uzupełnij ze zdjęcia paragonu</button>`:""}
    ${pre&&pre.receiptInfo?`<div class="receipt-info">${pre.receiptInfo}</div>`:""}<form id="f">
    ${seg("type",[["exp","Wydatek"],["inc","Wpływ"],["trf","Transfer"]],v.type)}
    <div class="row">
      <div class="field"><label class="label" for="t-amt">Kwota (zł)</label><input id="t-amt" inputmode="decimal" value="${v.amount!==""?String(v.amount).replace(".",","):""}" placeholder="0,00"></div>
      <div class="field"><label class="label" for="t-date">${list==="recur"?"Najbliższy termin":"Data"}</label><input id="t-date" type="date" value="${v.date}"></div>
    </div>
    <div class="field" id="g-dir"><span class="label">Kierunek</span>${seg("dir",[["toCash","Wypłata z konta"],["toCard","Wpłata na konto"]],v.dir||"toCash")}<span class="hint" id="dir-hint" style="margin:0"></span></div>
    <div class="field" id="g-method"><span class="label">Forma płatności</span>${seg("method",[["card","Karta / przelew"],["cash","Gotówka"]],v.method||"card")}</div>
    <div class="row">
      <div class="field" id="g-cat"><label class="label" for="t-cat">Kategoria</label><select id="t-cat">${TX_CATS.map(c=>`<option ${c===v.cat?"selected":""}>${c}</option>`).join("")}</select></div>
      <div class="field"><label class="label" for="t-note">Opis</label><input id="t-note" value="${esc(v.note||"")}" placeholder="np. Lidl"></div>
    </div>
    <div class="field"><span class="label">Powtarzaj</span>${seg("freq",[["none","Jednorazowo"],["week","Co tydzień"],["month","Co miesiąc"]],v.freq)}</div>
    <div class="field" id="g-to"><label class="label" for="t-to">Powtarzaj do (opcjonalnie)</label><input id="t-to" type="date" value="${v.to||""}"></div>
    <p class="hint" style="margin:0" id="t-hint"></p>
    <div class="err" id="err"></div>
    <div class="actions">${src?`<button type="button" class="btn ghost" id="t-del" style="color:var(--exp)">Usuń</button>`:""}<button type="button" class="btn ghost" id="cancel">Anuluj</button><button class="btn primary">Zapisz</button></div>
  </form></div>`;
  ov.hidden=false; bindSeg(ov);
  const upd=()=>{
    const t=segVal(ov,"type"), f=segVal(ov,"freq");
    ov.querySelector("#g-dir").hidden = t!=="trf";
    ov.querySelector("#g-method").hidden = t==="trf";
    ov.querySelector("#g-cat").hidden = t==="trf";
    ov.querySelector("#g-to").hidden = f==="none";
    ov.querySelector("#dir-hint").textContent = segVal(ov,"dir")==="toCash" ? "Pieniądze z konta lądują w gotówce, np. bankomat. Saldo łączne się nie zmienia." : "Gotówka trafia na konto, np. wpłatomat. Saldo łączne się nie zmienia.";
    ov.querySelector("#t-hint").textContent = f!=="none" ? "Operacja cykliczna: widać ją w „Zaplanowane” i w prognozie salda. „Zrealizuj” księguje ją i przesuwa na kolejny termin." : "Data w przyszłości = operacja trafi do „Zaplanowane” i nie zmieni salda, dopóki jej nie zrealizujesz.";
  };
  ov.querySelectorAll(".seg[data-seg]").forEach(s=>s.addEventListener("segchange",upd)); upd();
  const sb=ov.querySelector("#t-scan"); if(sb) sb.onclick=pickReceipt;
  ov.querySelector("#cancel").onclick=close;
  const removeSrc=()=>{ if(!src) return; if(list==="recur") S.recur=S.recur.filter(x=>x.id!==id); else if(list==="plan") S.plan=S.plan.filter(x=>x.id!==id); else S.tx=S.tx.filter(x=>x.id!==id); };
  if(src) confirmBtn(ov.querySelector("#t-del"),()=>{ removeSrc(); save();close();render(); });
  ov.querySelector("#f").onsubmit=e=>{e.preventDefault();
    const amount=parseAmt(ov.querySelector("#t-amt").value);
    if(!(amount>0)){ov.querySelector("#err").textContent="Podaj kwotę większą od zera, np. 49,99.";return;}
    const type=segVal(ov,"type"), freq=segVal(ov,"freq"), date=ov.querySelector("#t-date").value||TODAY;
    const base={id:src?src.id:uid(),type,amount:round2(amount),note:ov.querySelector("#t-note").value.trim()};
    if(type==="trf"){ base.dir=segVal(ov,"dir"); base.cat=""; } else { base.method=segVal(ov,"method"); base.cat=ov.querySelector("#t-cat").value; }
    if(src && src.fromQuest) base.fromQuest=src.fromQuest;
    if(pre && Array.isArray(pre.items)) pre.items.forEach(i=>recordPrice(i.name,i.price,pre.store||base.note));
    removeSrc();
    if(freq!=="none"){ const to=ov.querySelector("#t-to").value; S.recur.push({...base,next:date,freq,day:new Date(date+"T00:00").getDate(),to}); }
    else (date>TODAY?S.plan:S.tx).push({...base,date});
    save();close();render();};
  if(!src) setTimeout(()=>ov.querySelector("#t-amt")?.focus(),50);
}

/* parser paragonu: tekst OCR -> {store,date,total,payment,category,items} */
const STORES = [
  [/BIEDRONK|JERONIMO/,"Biedronka","Jedzenie"],[/\bLIDL/,"Lidl","Jedzenie"],[/[ZŻ]ABK/,"Żabka","Jedzenie"],
  [/KAUFLAND/,"Kaufland","Jedzenie"],[/CARREFOUR/,"Carrefour","Jedzenie"],[/AUCHAN/,"Auchan","Jedzenie"],
  [/\bNETTO\b/,"Netto","Jedzenie"],[/\bDINO\b/,"Dino","Jedzenie"],[/LEWIATAN/,"Lewiatan","Jedzenie"],
  [/STOKROTK/,"Stokrotka","Jedzenie"],[/FRISCO/,"Frisco","Jedzenie"],[/ALDI/,"Aldi","Jedzenie"],[/POLOMARKET|POLO ?MARKET/,"POLOmarket","Jedzenie"],
  [/MCDONALD/,"McDonald's","Jedzenie"],[/\bKFC\b/,"KFC","Jedzenie"],[/STARBUCKS/,"Starbucks","Jedzenie"],[/COSTA/,"Costa Coffee","Jedzenie"],
  [/ORLEN/,"Orlen","Transport"],[/\bBP\b/,"BP","Transport"],[/SHELL/,"Shell","Transport"],[/CIRCLE ?K/,"Circle K","Transport"],[/\bMOYA\b/,"Moya","Transport"],[/AMIC/,"Amic","Transport"],
  [/ROSSMANN/,"Rossmann","Zakupy"],[/\bHEBE\b/,"Hebe","Zakupy"],[/PEPCO/,"Pepco","Zakupy"],[/\bACTION\b/,"Action","Zakupy"],
  [/IKEA/,"IKEA","Zakupy"],[/CASTORAMA/,"Castorama","Zakupy"],[/LEROY/,"Leroy Merlin","Zakupy"],[/\bOBI\b/,"OBI","Zakupy"],
  [/MEDIA ?EXPERT/,"Media Expert","Zakupy"],[/MEDIA ?MARKT/,"MediaMarkt","Zakupy"],[/EMPIK/,"Empik","Edukacja"],
  [/DECATHLON/,"Decathlon","Sport"],[/SPORTISIMO/,"Sportisimo","Sport"],[/INTERSPORT/,"Intersport","Sport"],
  [/APTEK|DOZ\b|SUPER-?PHARM/,"Apteka","Zdrowie"],
];
const AMT = String.raw`(\d{1,5}(?:[ .]\d{3})*[.,]\s?\d{2})`;
const toNum = s => parseFloat(s.replace(/\s/g,"").replace(/\.(?=\d{3}\b)/g,"").replace(",","."));
function fixOcr(line){
  // typowe pomyłki OCR w kwotach: O->0, l/I->1, S->5 obok cyfr
  return line.replace(/(?<=\d)[Oo](?=[\d,.])|(?<=[\d,.])[Oo]/g,"0").replace(/(?<=\d[,.]\d?)[lI]/g,"1");
}
function parseReceipt(raw, today){
  const lines = raw.split(/\r?\n/).map(l=>fixOcr(l.trim())).filter(Boolean);
  const U = lines.map(l=>l.toUpperCase());
  const all = U.join("\n");
  let total=null, totalLine=-1;
  const totalRx = [
    new RegExp(String.raw`SUMA\s*:?\s*P[LŁ1I]N\s*:?\s*${AMT}`),
    new RegExp(String.raw`DO\s+ZAP[LŁ]ATY\s*:?\s*(?:P[LŁ]N)?\s*${AMT}`),
    new RegExp(String.raw`RAZEM\s*:?\s*(?:P[LŁ]N)?\s*${AMT}`),
    new RegExp(String.raw`(?<!PTU\s)SUMA\s*:?\s*${AMT}`),
    new RegExp(String.raw`TOTAL\s*:?\s*(?:P[LŁ]N)?\s*${AMT}`),
  ];
  outer: for(const rx of totalRx){
    for(let i=0;i<U.length;i++){
      if(/PTU|VAT|OPODATK/.test(U[i]) && !/P[LŁ]N/.test(U[i])) continue;
      const m=U[i].match(rx); if(m){ total=toNum(m[1]); totalLine=i; break outer; }
    }
  }
  // płatność
  let payment=null, payAmt=null;
  for(const l of U){
    const m=l.match(new RegExp(AMT));
    if(/KART|VISA|MASTERCARD|MAESTRO|BLIK|ZBLI[ZŻ]|P[LŁ]ATNO[SŚ][CĆ] BEZGOT/.test(l)){ payment="card"; if(m) payAmt=toNum(m[1]); break; }
    if(/GOT[OÓ0]WK/.test(l)){ payment="cash"; if(m) payAmt=toNum(m[1]); break; }
  }
  if(total===null && payAmt) total=payAmt;
  if(total===null){
    // największa kwota w dolnej połowie paragonu
    const cands=[]; U.forEach((l,i)=>{ if(i<U.length*0.4 || /PTU|VAT|RESZTA|NIP/.test(l)) return; for(const m of l.matchAll(new RegExp(AMT,"g"))) cands.push(toNum(m[1])); });
    if(cands.length) total=Math.max(...cands);
  }
  // data
  let date=null;
  const dm = all.match(/\b(20\d{2})[-.\/](\d{2})[-.\/](\d{2})\b/) || null;
  if(dm) date=`${dm[1]}-${dm[2]}-${dm[3]}`;
  else { const d2=all.match(/\b(\d{2})[-.\/](\d{2})[-.\/](20\d{2})\b/); if(d2) date=`${d2[3]}-${d2[2]}-${d2[1]}`; }
  if(date){ const [y,m,d]=date.split("-").map(Number); if(m<1||m>12||d<1||d>31||date>today) date=null; }
  // sklep
  let store=null, category="Inne";
  for(const [rx,name,cat] of STORES){ if(rx.test(all)){ store=name; category=cat; break; } }
  if(!store){
    const cand = lines.slice(0,5).find(l=>/[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż]{3}/.test(l) && !/PARAGON|NIP|UL\.|FISKALN/i.test(l));
    if(cand) store=cand.replace(/\s+(SP\.\s*Z\s*O\.?\s*O\.?|S\.A\.|SP\.\s*[JK]\.).*$/i,"").slice(0,30);
  }
  // pozycje: linie z "x cena" albo kończące się kwotą + literą PTU, przed sumą
  const items=[];
  const end = totalLine>0?totalLine:U.length;
  for(let i=0;i<end;i++){
    if(/SUMA|PTU|OPODATK|RABAT|NIP|PARAGON|RESZTA|SPRZEDA/.test(U[i])) continue;
    const m=lines[i].match(new RegExp(String.raw`^(.{2,}?)\s+(?:\d+(?:[.,]\d+)?\s*[xX*]\s*${AMT}\s+)?${AMT}\s*[A-G]?\s*$`));
    if(m && /[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]{2}/.test(m[1])) items.push({name:m[1].replace(/\s+\d+(?:[.,]\d+)?\s*[xX*]?\s*$/,"").trim().slice(0,30), price:toNum(m[3])});
  }
  return {store, date, total: total&&total>0?Math.round(total*100)/100:null, payment, category, items:items.slice(0,15), readable: !!(total&&total>0)};
}


/* ---------- paragon ze zdjęcia: OCR na telefonie ---------- */
const SCAN = true;
let ocrLoading = null;
function loadTesseract(){
  if(window.Tesseract) return Promise.resolve();
  if(ocrLoading) return ocrLoading;
  ocrLoading = new Promise((res,rej)=>{ const sc=document.createElement("script"); sc.src="tesseract.min.js"; sc.onload=res; sc.onerror=()=>{ocrLoading=null;rej(new Error("load"));}; document.head.appendChild(sc); });
  return ocrLoading;
}
function pickReceipt(){ const fi=document.getElementById("w-file"); fi.value=""; fi.click(); }
async function prepCanvas(file){
  const bmp = await createImageBitmap(file);
  const k = Math.min(1, 2200/Math.max(bmp.width,bmp.height));
  const c=document.createElement("canvas"); c.width=Math.round(bmp.width*k); c.height=Math.round(bmp.height*k);
  const g=c.getContext("2d",{willReadFrequently:true}); g.drawImage(bmp,0,0,c.width,c.height); bmp.close && bmp.close();
  // skala szarości + lekkie podbicie kontrastu
  const im=g.getImageData(0,0,c.width,c.height), p=im.data;
  for(let i=0;i<p.length;i+=4){ let v=0.299*p[i]+0.587*p[i+1]+0.114*p[i+2]; v=Math.max(0,Math.min(255,(v-128)*1.35+128)); p[i]=p[i+1]=p[i+2]=v; }
  g.putImageData(im,0,0);
  return c;
}
let scanAbort=false;
async function scanReceipt(file){
  scanAbort=false;
  const firstTime = !localStorage.getItem("questlog-ocr-ready");
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Czytam paragon"><h3>Czytam paragon…</h3>
    <div class="scanbox"><div class="spinner" aria-hidden="true"></div><p id="scan-msg">${firstTime?"Pierwszy raz pobieram pakiet rozpoznawania tekstu (ok. 10 MB). Kolejne skany działają bez internetu.":"Rozpoznaję tekst na zdjęciu…"}</p></div>
    <div class="bar"><i id="scan-bar"></i></div>
    <p class="hint" style="margin:8px 0 0">Zdjęcie zostaje tylko na czas odczytu i nie jest nigdzie zapisywane.</p>
    <div class="actions"><button type="button" class="btn ghost" id="scan-stop">Przerwij</button></div></div>`;
  ov.hidden=false;
  let worker=null;
  ov.querySelector("#scan-stop").onclick=()=>{ scanAbort=true; worker && worker.terminate(); close(); };
  const msg=t=>{ const m=document.getElementById("scan-msg"); if(m) m.textContent=t; };
  const bar=v=>{ const b=document.getElementById("scan-bar"); if(b) b.style.width=Math.round(v*100)+"%"; };
  let canvas=null;
  try{
    await loadTesseract();
    canvas = await prepCanvas(file);
    file = null;                                   // zdjęcie nie jest już potrzebne
    const base = new URL("./", location.href).href;
    worker = await Tesseract.createWorker("pol", 1, {
      workerPath: base+"worker.min.js", corePath: base, langPath: base, workerBlobURL:false, gzip:true,
      logger: m=>{ if(m.status==="recognizing text"){ msg("Rozpoznaję tekst na zdjęciu…"); bar(0.25+m.progress*0.75); } else if(typeof m.progress==="number") bar(m.progress*0.25); }
    });
    if(scanAbort) return;
    try{ localStorage.setItem("questlog-ocr-ready","1"); }catch(e){}
    const { data:{ text } } = await worker.recognize(canvas);
    await worker.terminate(); worker=null;
    canvas.width=canvas.height=0; canvas=null;      // zwolnij obraz z pamięci
    if(scanAbort) return;
    const r = parseReceipt(text, TODAY);
    if(!r.readable){ close(); toast("Nie znalazłem kwoty. Zrób zdjęcie całego paragonu, płasko i w dobrym świetle."); return; }
    const cat = EXP_CATS.includes(r.category) ? r.category : "Inne";
    const date = r.date || TODAY;
    const sumItems = round2(r.items.reduce((a,i)=>a+(i.price||0),0));
    const info = `<b>Odczytano:</b> ${esc(r.store||"sklep nieznany")} · ${r.date?fmtDate(r.date):"data nieczytelna, wpisałem dziś"} · ${zl(r.total)}${r.payment?` · ${r.payment==="cash"?"gotówka":"karta"}`:" · forma płatności nieczytelna"}
      ${r.items.length?`<details><summary>Pozycje (${r.items.length})</summary><div class="items" style="margin-top:6px">${r.items.map(i=>`<div><span></span><span>${esc(i.name)}</span><span class="num">${zl(i.price)}</span></div>`).join("")}</div></details>`:""}
      <details><summary>Odczytany tekst</summary><pre style="white-space:pre-wrap;font:11px ui-monospace,monospace;margin:6px 0 0;color:var(--muted)">${esc(text.slice(0,3000))}</pre></details>
      ${r.items.length>2 && r.items.length<15 && Math.abs(sumItems-r.total)>0.05 ? `<div class="hint" style="margin:4px 0 0">Suma pozycji (${zl(sumItems)}) różni się od kwoty. Rabaty potrafią to tłumaczyć, ale sprawdź kwotę.</div>`:""}
      <div class="hint" style="margin:4px 0 0">Odczyt na telefonie bywa niedokładny. Sprawdź kwotę i datę przed zapisem.</div>`;
    txSheet(null,null,{type:"exp",amount:r.total,method:r.payment==="cash"?"cash":"card",cat,note:String(r.store||"").slice(0,40),date,receiptInfo:info,items:r.items,store:r.store||""});
  }catch(e){
    if(worker) try{ await worker.terminate(); }catch(_){}
    if(scanAbort) return;
    close();
    toast(navigator.onLine===false && firstTime ? "Pierwszy skan potrzebuje internetu, żeby pobrać pakiet rozpoznawania tekstu." : "Nie udało się odczytać zdjęcia. Spróbuj jeszcze raz albo zrób nowe zdjęcie.");
  }
}
const EXP_CATS = TX_CATS.filter(c=>c!=="Wynagrodzenie");
document.getElementById("w-file").addEventListener("change",e=>{ const f=e.target.files&&e.target.files[0]; if(f) scanReceipt(f); e.target.value=""; });
document.getElementById("w-scan").hidden=false;
document.getElementById("w-scan").onclick=pickReceipt;

/* ---------- ustawienia i kopia zapasowa ---------- */
const IS_PWA = !!window.__PWA__;
const counts = () => `${S.quests.length} questów · ${S.tx.length} transakcji · ${S.plan.length+S.recur.length} zaplanowanych · ${S.events.length} stałych wydarzeń`;
function exportJSON(){ return JSON.stringify({app:"questlog", exported:new Date().toISOString(), data:S}); }
async function copyText(txt){
  try{ await navigator.clipboard.writeText(txt); return true; }catch(e){ return false; }
}
function settingsSheet(){
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Ustawienia"><h3>Dane i kopia zapasowa</h3>
    <p class="hint" style="margin:-6px 0 14px">Masz teraz: ${counts()}. Dane są zapisane tylko na tym urządzeniu, w tej ${IS_PWA?"aplikacji":"przeglądarce"}.</p>
    <div class="stack">
      <button class="btn primary" id="s-export">${IS_PWA?"Eksportuj kopię do pliku":"Kopiuj dane do przeniesienia"}</button>
      ${IS_PWA?`<button class="btn ghost" id="s-copy">Kopiuj kopię jako tekst</button>`:""}
      <button class="btn ghost" id="s-import">Importuj kopię</button>
      <button class="btn ghost" id="s-wipe" style="color:var(--exp)">Wyczyść wszystkie dane</button>
      <button class="btn ghost" id="s-close">Zamknij</button>
    </div>
    <div id="s-out" style="margin-top:12px"></div></div>`;
  ov.hidden=false;
  const out=ov.querySelector("#s-out");
  ov.querySelector("#s-close").onclick=close;
  const showText = (msg) => { out.innerHTML=`<p class="hint" style="margin:0 0 6px">${msg}</p><textarea id="s-txt" readonly rows="5" style="width:100%;font:12px ui-monospace,monospace;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);padding:8px"></textarea>`; const ta=out.querySelector("#s-txt"); ta.value=exportJSON(); ta.focus(); ta.select(); };
  ov.querySelector("#s-export").onclick=async()=>{
    if(!IS_PWA){
      const ok=await copyText(exportJSON());
      showText(ok?"✓ Skopiowano do schowka. Otwórz aplikację Questlog na ekranie początkowym → ⚙ → Importuj kopię → Wklej. Na wszelki wypadek tekst jest też tutaj:":"Zaznacz i skopiuj cały tekst poniżej, a potem wklej go w aplikacji: ⚙ → Importuj kopię.");
      return;
    }
    const name=`questlog-kopia-${TODAY}.json`, file=new File([exportJSON()],name,{type:"application/json"});
    try{
      if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file],title:"Kopia Questlog"}); out.innerHTML=`<p class="hint">Zapisz plik np. w aplikacji Pliki (iCloud Drive), żeby kopia przetrwała zmianę telefonu.</p>`; return; }
    }catch(e){ if(e && e.name==="AbortError") return; }
    const a=document.createElement("a"); a.href=URL.createObjectURL(file); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},2000);
  };
  const cp=ov.querySelector("#s-copy"); if(cp) cp.onclick=async()=>{ const ok=await copyText(exportJSON()); if(ok) toast("Skopiowano kopię do schowka."); else showText("Zaznacz i skopiuj tekst:"); };
  ov.querySelector("#s-import").onclick=()=>{
    out.innerHTML=`<p class="hint" style="margin:0 0 6px">Wklej skopiowane dane albo wybierz plik kopii. Import zastąpi wszystko, co jest teraz w apce.</p>
      <textarea id="s-in" rows="5" placeholder="Wklej tutaj…" style="width:100%;font:12px ui-monospace,monospace;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink);padding:8px"></textarea>
      <div class="actions" style="margin-top:8px"><label class="btn ghost" style="text-align:center;cursor:pointer">Wybierz plik<input type="file" id="s-file" accept=".json,application/json,text/plain" hidden></label><button class="btn primary" id="s-do">Importuj</button></div>
      <div class="err" id="s-err"></div>`;
    const run=(txt)=>{
      const er=out.querySelector("#s-err");
      let obj; try{ obj=JSON.parse(txt.trim()); }catch(e){ er.textContent="To nie wygląda na kopię Questlog. Skopiuj cały tekst, od { do }."; return; }
      const d=obj && obj.data ? obj.data : obj;
      if(!d || !Array.isArray(d.quests) || !Array.isArray(d.tx)){ er.textContent="W tej kopii brakuje questów albo transakcji. Sprawdź, czy wkleiłeś całość."; return; }
      d.demo=false;
      try{ localStorage.setItem(KEY, JSON.stringify(d)); }catch(e){ er.textContent="Nie udało się zapisać danych na tym urządzeniu."; return; }
      location.reload();
    };
    out.querySelector("#s-do").onclick=()=>{ const v=out.querySelector("#s-in").value; if(!v.trim()){ out.querySelector("#s-err").textContent="Najpierw wklej dane albo wybierz plik."; return; } run(v); };
    out.querySelector("#s-file").onchange=e=>{ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>run(String(r.result)); r.readAsText(f); };
  };
  confirmBtn(ov.querySelector("#s-wipe"),()=>{ S=emptyState(); save(); close(); render(); toast("Wyczyszczono dane."); });
}
document.getElementById("settings").onclick=settingsSheet;
if(IS_PWA && navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(()=>{});

/* ---------- zdarzenia ---------- */
document.getElementById("fab").onclick=()=> tab==="work"?(S.jobs.length?manualSheet():jobSheet()):tab==="workd"?addWorkChooser():tab==="day"?addChooser({date:dayDate}):tab==="cal"?addChooser({date:selDay,cal:true}):tab==="hist"?txSheet():tab==="shop"?shopItemSheet():tab==="quests"?questSheet():tab==="cal"?questSheet({deadline:selDay}):tab==="day"?questSheet({date:dayDate}):txSheet();
document.getElementById("t-quests").onclick=()=>{tab="quests";render();};
document.getElementById("t-cal").onclick=()=>{tab="cal";render();};
document.getElementById("t-day").onclick=()=>{tab="day";render();};
document.getElementById("t-wallet").onclick=()=>{tab="wallet";render();};
document.getElementById("t-work").onclick=()=>{tab="work";render();};
(function(){ const dc=document.getElementById("done-clear"); let armed=false, t;
  dc.onclick=()=>{ if(!armed){ armed=true; dc.textContent="Na pewno? Stuknij jeszcze raz"; t=setTimeout(()=>{armed=false;dc.textContent="Usuń ukończone starsze niż 30 dni";},4000); return; }
    clearTimeout(t); armed=false; dc.textContent="Usuń ukończone starsze niż 30 dni";
    const cut=addDays(-30), before=S.quests.length; S.quests=S.quests.filter(q=>!(q.done && (q.doneAt||q.date||"9999")<cut)); save(); render(); toast(`Usunięto ${before-S.quests.length} starych questów.`); };
})();
document.getElementById("t-shop").onclick=()=>{tab="shop";render();};
document.getElementById("c-addev").onclick=()=>eventSheet();
document.getElementById("d-addev").onclick=()=>eventSheet();
document.getElementById("d-prev").onclick=()=>shiftDay(-1);
document.getElementById("d-next").onclick=()=>shiftDay(1);
document.getElementById("d-today").onclick=()=>{dayDate=TODAY;renderDay();};
document.getElementById("c-openday").onclick=()=>{dayDate=selDay;tab="day";render();scrollTo(0,0);};
const calPrev=()=>{calM--; if(calM<0){calM=11;calY--;} renderCal();};
const calNext=()=>{calM++; if(calM>11){calM=0;calY++;} renderCal();};
addSwipe(document.getElementById("c-grid"),calPrev,calNext);
addSwipe(document.getElementById("d-tl"),()=>shiftDay(-1),()=>shiftDay(1));
document.getElementById("c-prev").onclick=calPrev;
document.getElementById("c-next").onclick=calNext;
document.getElementById("c-today").onclick=()=>{calY=d0.getFullYear();calM=d0.getMonth();selDay=TODAY;renderCal();};
document.getElementById("peek-date").onchange=e=>{if(e.target.value){peekDate=e.target.value;renderPeek();}};
document.getElementById("peek-quick").onclick=e=>{const b=e.target.closest("button");if(!b)return;peekDate=quickDate(b.dataset.peek);renderPeek();};
document.getElementById("clear-demo").onclick=()=>{S=emptyState();filter="Wszystkie";save();render();};
document.addEventListener("click",e=>{
  const b=e.target.closest("button");
  if(!b){
    const eq=e.target.closest("[data-editq]"); if(eq){ questSheet({id:eq.dataset.editq}); return; }
    const et=e.target.closest("[data-edittx]"); if(et){ const it=[...S.tx,...S.plan].find(x=>x.id===et.dataset.edittx); if(it && it.travelId && S.travels.some(t=>t.id===it.travelId)){ travelSheet(it.travelId); return; } txSheet(et.dataset.edittx, et.dataset.list); return; }
    const es=e.target.closest("[data-editshop]"); if(es){ shopItemSheet(es.dataset.editshop); return; }
    const er=e.target.closest("[data-editrout]"); if(er){ routineSheet(er.dataset.editrout); return; }
    return;
  }
  const d=b.dataset;
  if(d.c){filter=d.c;renderQuests();}
  if(d.day){selDay=d.day;const x=new Date(selDay+"T00:00");if(x.getMonth()!==calM){calM=x.getMonth();calY=x.getFullYear();}renderCal();}
  if(d.slot){addChooser({date:dayDate,time:d.slot});}
  if(d.travel){travelSheet(d.travel);}
  if(d.wd){ const [a,b]=d.wd.split("|"); openWorkDetail(a,b); }
  if(d.editjob){ jobSheet(d.editjob); }
  if(d.went){ const [src,id,orig]=d.went.split("|"); if(src==="event") eventDaySheet(id,orig); else if(src==="quest") questSheet({id}); else manualSheet(id); }
  if(d.settime){timeSheet(d.settime);}
  if(d.evday){eventDaySheet(d.evday, d.orig);}
  if(d.editev){eventSheet(d.editev);}
  if(d.unskip){const ev=S.events.find(x=>x.id===d.unskip);ev.skip=ev.skip.filter(x=>x!==d.orig);save();render();}
  if(d.plan){ if(tab!=="day") dayDate=TODAY; timeSheet(d.plan,true);}
  if(d.totoday){const q=S.quests.find(x=>x.id===d.totoday);q.date=TODAY;q.time="";save();render();toast("Przeniesiono na dziś. Przeciągnij na godzinę, jeśli chcesz.");}
  if(d.setdue){const q=S.quests.find(x=>x.id===d.setdue);q.date=selDay;save();render();}
  if(d.rout){ toggleRoutine(d.rout, dayDate); renderRoutines(); const r=S.routines.find(x=>x.id===d.rout); if(doneOn(dayDate).includes(d.rout)){ const st=streak(r); if(dayDate===TODAY && st>=3) toast(`🔥 ${r.title}: ${st} dni z rzędu!`); if(routinesOn(dayDate).every(x=>doneOn(dayDate).includes(x.id))) toast("Wszystkie rutyny na dziś odhaczone 💪"); } }
  if(d.newrout!==undefined){ routineSheet(); }
  if(d.hcat){ HF.cat = HF.cat===d.hcat ? "all" : d.hcat; syncHistControls(); renderHist(); }
  if(d.buy){ const it=shopItem(d.buy); it.bought=true; it.boughtAt=TODAY; delete it.viaQuest; save(); syncShopQuest(it.list); renderShop(); renderQuests(); renderDay(); toast("Kupione ✓ Wpisz cenę na liście „Kupione”, żeby apka lepiej szacowała."); }
  if(d.unbuy){ const it=shopItem(d.unbuy); it.bought=false; delete it.boughtAt; delete it.paid; delete it.viaQuest; save(); syncShopQuest(it.list); renderShop(); renderQuests(); renderDay(); }
  if(d.shopf){ shopFilter=d.shopf; renderShop(); }
  if(d.newlist!==undefined){ listSheet(); }
  if(d.editlist){ listSheet(d.editlist); }
  if(d.shopquest){ listToQuest(d.shopquest); }
  if(d.openquest){ questSheet({id:d.openquest}); }
  if(d.clearbought!==undefined){ S.shop.items=S.shop.items.filter(i=>!i.bought); save(); renderShop(); }
  if(d.toggle){const q=S.quests.find(x=>x.id===d.toggle);q.done=!q.done; if(q.done) q.doneAt=TODAY; else delete q.doneAt;
    if(q.shopList){ if(q.done){ shopOpen(q.shopList).forEach(it=>{it.bought=true;it.boughtAt=TODAY;it.viaQuest=q.id;}); } else { S.shop.items.forEach(it=>{ if(it.viaQuest===q.id){ it.bought=false; delete it.viaQuest; delete it.boughtAt; } }); } }
    syncQuestTx(q);save();render(); if(q.done&&q.shopList) toast("Produkty z listy oznaczone jako kupione. Kwotę wydatku możesz poprawić w Portfelu.");}
  if(d.delq){S.quests=S.quests.filter(x=>x.id!==d.delq);save();render();}
  if(d.delt){ const x=S.tx.find(y=>y.id===d.delt); S.tx=S.tx.filter(y=>y.id!==d.delt);
    const tr = x && x.travelId && S.travels.find(t=>t.id===x.travelId);
    if(tr){ tr.paid=false; delete tr.txId; delete tr.paidDate; syncTravelMoney(tr); save(); render(); toast("Koszt podróży wrócił do zaplanowanych wydatków."); }
    else { save(); render(); } }
  if(d.real){
    if(d.list==="recur"){ const r=S.recur.find(x=>x.id===d.real); const {next,freq,day,to,...rest}=r; S.tx.push({...rest,id:uid(),date:TODAY}); r.next=advance(r,r.next); if(r.to && r.next>r.to) S.recur=S.recur.filter(x=>x!==r); toast(`Zaksięgowano. Następny termin: ${fmtDate(r.next)}.`); }
    else { const i=S.plan.findIndex(x=>x.id===d.real); const t=S.plan.splice(i,1)[0]; t.date=TODAY; S.tx.push(t);
      const tr=t.travelId && S.travels.find(x=>x.id===t.travelId); if(tr){ tr.paid=true; tr.paidDate=TODAY; tr.txId=t.id; delete tr.planId; } }
    save();render();
  }
  if(d.skiprec){ const r=S.recur.find(x=>x.id===d.skiprec); r.next=advance(r,r.next); if(r.to && r.next>r.to) S.recur=S.recur.filter(x=>x!==r); save();render(); toast(`Pominięto. Następny termin: ${fmtDate(r.next)}.`); }
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!ov.hidden)close();});
render();
