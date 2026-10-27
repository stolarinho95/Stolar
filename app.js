const PRIO = {1:"Niski",2:"Średni",3:"Wysoki",4:"Krytyczny"};
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
  return { demo:true, v6:true, cats:[...DEF_CATS],
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
      {id:uid(),title:"Zrobić zakupy na tydzień",cat:"Dom",prio:2,deadline:"",date:addDays(-2),done:true,dur:60}
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
      {id:uid(),title:"Zajęcia sportowe – praca",cat:"Praca",days:[6],time:"09:00",dur:180,place:"Hala",from:addDays(-30),to:"",every:1,skip:[],over:{}}
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
const emptyState = () => ({demo:false,v6:true,cats:[...DEF_CATS],quests:[],tx:[],plan:[],events:[],recur:[]});
let S;
try { S = JSON.parse(localStorage.getItem(KEY)) || sample(); } catch(e){ S = sample(); }
if(S.demo && !S.v6) S = sample();
S.v6 = true; S.events ||= []; S.recur ||= []; S.plan ||= []; S.tx ||= []; S.quests ||= [];
S.events.forEach(e=>{ e.skip ||= []; e.over ||= {}; });
// migracja: stare "due" -> dzień w planie (gdy jest godzina) albo deadline
S.quests.forEach(q=>{ if("due" in q){ if(q.time){ q.date ||= q.due; } else { q.deadline ||= q.due; } delete q.due; } q.date ||= ""; q.deadline ||= ""; });
const isLate = q => !q.done && ((q.date && q.date<TODAY) || (!q.date && q.deadline && q.deadline<TODAY));
const byDeadline = (a,b) => (a.deadline||"9999").localeCompare(b.deadline||"9999") || b.prio-a.prio;
const save = () => { try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} };

let tab = "day", filter = "Wszystkie";
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
        <div class="meta">${prioBars(q.prio)}<span>${esc(q.cat)}</span>${q.dur?`<span class="num">⏳ ${fmtDur(q.dur)}</span>`:""}${q.cost?`<span class="cost num">−${zl(q.cost)}${q.method==="cash"?" · gotówka":""}${q.expCat?" · "+esc(q.expCat):""}</span>`:""}${dueInfo(q)}${extra}</div></div>
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
function clashes(date, time, dur, exceptQ){
  if(!date||!time) return [];
  const a=toMin(time), b=a+(dur||30);
  return [...eventsOn(date).filter(e=>{const s=toMin(e.time);return a<s+e.dur && b>s;}).map(e=>e.title),
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
const evSummary = e => `${e.days.map(d=>WD[d-1]).join(", ")} · ${e.time}–${hhmm(toMin(e.time)+e.dur)}${e.place?" · "+esc(e.place):""} · ${e.every===2?"co 2 tyg.":"co tydzień"}${e.to?" · do "+fmtDate(e.to):""}`;
const instLine = i => `${i.time}–${hhmm(toMin(i.time)+i.dur)}${i.place?" · "+esc(i.place):""} · ${esc(i.cat)}${i.moved?` · <span class="evtag">przeniesione z ${fmtDate(i.orig)}</span>`:i.edited?' · <span class="evtag">zmienione</span>':""}`;

function eventSheet(id){
  const e = id ? S.events.find(x=>x.id===id) : {title:"",cat:"Trening",days:[wdOf(tab==="day"?dayDate:selDay)],time:"17:00",dur:60,place:"",from:TODAY,to:"",every:1};
  const h=Math.floor(e.dur/60), m=e.dur%60;
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="Stałe wydarzenie"><h3>${id?"Edytuj całą serię":"Nowe stałe wydarzenie"}</h3><form id="f">
    <div class="field"><label class="label" for="e-title">Nazwa</label><input id="e-title" required value="${esc(e.title)}" placeholder="np. Trening U12, Anatomia – ćwiczenia"></div>
    <div class="row">
      <div class="field"><label class="label" for="e-cat">Kategoria</label><select id="e-cat">${S.cats.map(c=>`<option ${c===e.cat?"selected":""}>${esc(c)}</option>`).join("")}</select></div>
      <div class="field"><label class="label" for="e-place">Miejsce</label><input id="e-place" value="${esc(e.place||"")}" placeholder="np. Sala 112"></div>
    </div>
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
    const data={title,cat:ov.querySelector("#e-cat").value,place:ov.querySelector("#e-place").value.trim(),days,time:ov.querySelector("#e-time").value,dur,every:+segVal(ov,"every"),from,to};
    if(id) Object.assign(e,data); else S.events.push({id:uid(),skip:[],over:{},...data});
    save();close();render();};
}
function eventDaySheet(id, orig){
  const e=S.events.find(x=>x.id===id); if(!e) return;
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
    S.events.filter(e=>e.days.includes(i+1) && (!e.to || e.to>=TODAY)).sort((a,b)=>a.time.localeCompare(b.time)).map(e=>`<span><b>${e.time}</b>${esc(e.title)}${e.every===2?" (co 2 tyg.)":""}</span>`).join("")}</div>`).join("");
  document.getElementById("c-week").hidden = !S.events.length;
  document.getElementById("c-events").innerHTML = S.events.length ? S.events.map(e=>`<div class="evrow"><div style="min-width:0"><strong>${esc(e.title)}</strong><span class="meta" style="margin:2px 0 0">${evSummary(e)} · ${esc(e.cat)}${e.to&&e.to<TODAY?' · <span class="dl late">zakończone</span>':""}</span></div><button class="mini" data-editev="${e.id}">Edytuj</button></div>`).join("")
    : `<div class="empty">Dodaj stałe rzeczy, które powtarzają się co tydzień: treningi, pracę, plan zajęć. Same pojawią się w planie dnia i kalendarzu.</div>`;
}
const evRow = i => `<div class="evrow"><div style="min-width:0"><strong>${esc(i.title)}</strong><span class="meta" style="margin:2px 0 0">${instLine(i)}</span></div><button class="mini" data-evday="${i.id}" data-orig="${i.orig}">Opcje</button></div>`;
const opRow = t => `<div class="tx" data-edittx="${t.id}" data-list="${t.list}"><div class="t"><strong>${t.list==="recur"?"⟳ ":""}${esc(txTitle(t))}</strong><span class="meta" style="margin:0">${t.type==="trf"?"":esc(t.cat)+" · "}${methodLabel(t)}${t.list==="recur"?" · "+freqLabel(t):""}</span></div>${amtHTML(t)}<span></span></div>`;

/* ---------- plan dnia ---------- */
let dayDate = TODAY;
function shiftDay(n){ dayDate=plusDays(dayDate,n); renderDay(); }
function renderDay(){
  const dt = new Date(dayDate+"T00:00");
  const rel = dayDate===TODAY?"Dziś":dayDate===addDays(1)?"Jutro":dayDate===addDays(-1)?"Wczoraj":"";
  const wd = dt.toLocaleDateString("pl-PL",{weekday:"long"});
  document.getElementById("d-title").innerHTML = `${rel||wd.replace(/^./,c=>c.toUpperCase())}<span>${rel?wd+", ":""}${dt.toLocaleDateString("pl-PL",{day:"numeric",month:"long"})}</span>`;
  const qs = S.quests.filter(q=>q.date===dayDate);
  const timed = qs.filter(q=>q.time).sort((a,b)=>a.time.localeCompare(b.time));
  const untimed = qs.filter(q=>!q.time).sort((a,b)=>a.done-b.done||b.prio-a.prio);
  const ops = opsOn(dayDate);
  const open = qs.filter(q=>!q.done);
  const dur = open.reduce((s,q)=>s+(q.dur||0),0), cost = open.reduce((s,q)=>s+(q.cost||0),0);
  const evs = eventsOn(dayDate), skipped = eventsOn(dayDate,true).filter(e=>e.skipped);
  const f = forecast(dayDate);
  document.getElementById("d-sum").innerHTML = `
    <div><span class="label">Zrobione</span><b class="num">${qs.length-open.length}/${qs.length}</b></div>
    <div><span class="label">Czas questów</span><b class="num">${dur?fmtDur(dur):"—"}</b></div>
    <div><span class="label">Stałe</span><b class="num">${evs.length?evs.length+" · "+fmtDur(evs.reduce((s,e)=>s+e.dur,0)):"—"}</b></div>
    <div><span class="label">Koszty</span><b class="num" style="color:${cost?"var(--exp)":"inherit"}">${cost?"−"+zl(cost):"—"}</b></div>
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
  eH = Math.min(eH,24);
  const H = 60; dayRange = {sH,eH,H};
  let rows = "";
  for(let h=sH; h<eH; h++){ const l=String(h).padStart(2,"0")+":00"; rows += `<div class="hour"><span class="num">${l}</span><button class="slot" data-slot="${l}" aria-label="Dodaj quest o ${l}"></button></div>`; }
  const ev = [...evs.map(e=>({e,st:toMin(e.time),en:toMin(e.time)+e.dur})), ...timed.map(q=>({q,st:toMin(q.time),en:toMin(q.time)+Math.max(q.dur||30,20)}))].sort((a,b)=>a.st-b.st);
  const laneEnd = []; ev.forEach(e=>{ let l=laneEnd.findIndex(x=>x<=e.st); if(l<0){l=laneEnd.length;laneEnd.push(0);} laneEnd[l]=e.en; e.lane=l; });
  ev.forEach(e=>{ e.cols = Math.max(1, ...ev.filter(o=>o.st<e.en&&o.en>e.st).map(o=>o.lane+1)); });
  const blocks = ev.map(e=>{
    const top=(e.st-sH*60)/60*H, hgt=Math.max((e.en-e.st)/60*H-2,22), w=100/e.cols;
    const pos=`top:${top+1}px;height:${hgt}px;left:calc(${e.lane*w}% + 2px);width:calc(${w}% - 4px)`;
    if(e.e){ const x=e.e;
      return `<button class="blk event" data-evday="${x.id}" data-orig="${x.orig}" style="${pos}" aria-label="${esc(x.title)}, ${x.time}"><span class="bt">${esc(x.title)}</span><span class="bm num">${instLine(x)}</span></button>`; }
    const q=e.q, clash=!q.done && clashes(q.date,q.time,q.dur,q.id).length;
    return `<div class="blk ${q.done?"done":""} ${clash?"clash":""}" style="--pc:var(--p${q.prio});${pos}">
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
  const busy = [...S.quests.filter(q=>q.date===dayDate&&q.time&&!q.done).map(q=>[toMin(q.time),toMin(q.time)+(q.dur||30)]), ...eventsOn(dayDate).map(e=>[toMin(e.time),toMin(e.time)+e.dur])];
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
  let m = sH*60 + (y-r.top)/H*60 - 15;
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
  drag={q,el,g,pv,dur:q.dur||30,x,y,m:null,raf:0};
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
  const opDays = new Set([...S.plan.map(t=>t.date), ...S.recur.flatMap(r=>occurrences(r,gridEnd))]);
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
    + de.map(evRow).join("") + (dq.length ? dq.map(q=>questCard(q)).join("")
    : (de.length||dd.length) ? "" : `<div class="empty">Nic na ten dzień. Kliknij +, żeby dodać quest z deadline'em na ten dzień.</div>`);
  const pl = opsOn(selDay);
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
  const done = vis.filter(q=>q.done);
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
  document.getElementById("w-hist").innerHTML = hist.length ? hist.map(t=>`<div class="tx"><div class="t" data-edittx="${t.id}" data-list="tx"><strong>${esc(txTitle(t))}</strong>
      <span class="meta" style="margin:0">${fmtDate(t.date)} · ${t.type==="trf"?"":esc(t.cat)+" · "}${methodLabel(t)}${t.fromQuest?" · z questa":""}</span></div>
      ${amtHTML(t)}<button class="del" data-delt="${t.id}" aria-label="Usuń transakcję">×</button></div>`).join("") : `<div class="empty">Brak transakcji.</div>`;
}
function render(){
  document.getElementById("v-quests").hidden = tab!=="quests";
  document.getElementById("v-wallet").hidden = tab!=="wallet";
  document.getElementById("v-cal").hidden = tab!=="cal";
  document.getElementById("v-day").hidden = tab!=="day";
  ["day","quests","cal","wallet"].forEach(t=>document.getElementById("t-"+t).setAttribute("aria-selected",tab===t));
  document.getElementById("demo").hidden = !S.demo;
  renderDay(); renderQuests(); renderWallet(); renderCal();
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
    const data={title,cat,prio:+segVal(ov,"prio"),date,deadline,time:date?time:"",cost:round2(cost),method:segVal(ov,"qmethod"),expCat:expSel.value,dur};
    if(q){ Object.assign(q,data); syncQuestTx(q); } else S.quests.push({id:uid(),done:false,...data});
    save();close();render();};
  if(!q) setTimeout(()=>ov.querySelector("#q-title")?.focus(),50);
}

function txSheet(id, list, pre){
  const src = id ? (list==="recur"?S.recur:list==="plan"?S.plan:S.tx).find(x=>x.id===id) : null;
  const v = src ? {...src, date: src.next||src.date, freq: list==="recur"?src.freq:"none"} : {type:"exp",amount:"",method:"card",dir:"toCash",cat:"Jedzenie",note:"",date:TODAY,freq:"none",to:"",...(pre||{})};
  ov.innerHTML = `<div class="sheet" role="dialog" aria-label="${src?"Edytuj operację":"Nowa operacja"}"><h3>${src?"Edytuj operację":pre?"Sprawdź odczyt paragonu":"Nowa operacja"}</h3>
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
    txSheet(null,null,{type:"exp",amount:r.total,method:r.payment==="cash"?"cash":"card",cat,note:String(r.store||"").slice(0,40),date,receiptInfo:info});
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
document.getElementById("fab").onclick=()=> tab==="quests"?questSheet():tab==="cal"?questSheet({deadline:selDay}):tab==="day"?questSheet({date:dayDate}):txSheet();
document.getElementById("t-quests").onclick=()=>{tab="quests";render();};
document.getElementById("t-cal").onclick=()=>{tab="cal";render();};
document.getElementById("t-day").onclick=()=>{tab="day";render();};
document.getElementById("t-wallet").onclick=()=>{tab="wallet";render();};
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
    const et=e.target.closest("[data-edittx]"); if(et){ txSheet(et.dataset.edittx, et.dataset.list); return; }
    return;
  }
  const d=b.dataset;
  if(d.c){filter=d.c;renderQuests();}
  if(d.day){selDay=d.day;const x=new Date(selDay+"T00:00");if(x.getMonth()!==calM){calM=x.getMonth();calY=x.getFullYear();}renderCal();}
  if(d.slot){questSheet({date:dayDate,time:d.slot});}
  if(d.settime){timeSheet(d.settime);}
  if(d.evday){eventDaySheet(d.evday, d.orig);}
  if(d.editev){eventSheet(d.editev);}
  if(d.unskip){const ev=S.events.find(x=>x.id===d.unskip);ev.skip=ev.skip.filter(x=>x!==d.orig);save();render();}
  if(d.plan){ if(tab!=="day") dayDate=TODAY; timeSheet(d.plan,true);}
  if(d.totoday){const q=S.quests.find(x=>x.id===d.totoday);q.date=TODAY;q.time="";save();render();toast("Przeniesiono na dziś. Przeciągnij na godzinę, jeśli chcesz.");}
  if(d.setdue){const q=S.quests.find(x=>x.id===d.setdue);q.date=selDay;save();render();}
  if(d.toggle){const q=S.quests.find(x=>x.id===d.toggle);q.done=!q.done;syncQuestTx(q);save();render();}
  if(d.delq){S.quests=S.quests.filter(x=>x.id!==d.delq);save();render();}
  if(d.delt){S.tx=S.tx.filter(x=>x.id!==d.delt);save();render();}
  if(d.real){
    if(d.list==="recur"){ const r=S.recur.find(x=>x.id===d.real); const {next,freq,day,to,...rest}=r; S.tx.push({...rest,id:uid(),date:TODAY}); r.next=advance(r,r.next); if(r.to && r.next>r.to) S.recur=S.recur.filter(x=>x!==r); toast(`Zaksięgowano. Następny termin: ${fmtDate(r.next)}.`); }
    else { const i=S.plan.findIndex(x=>x.id===d.real); const t=S.plan.splice(i,1)[0]; t.date=TODAY; S.tx.push(t); }
    save();render();
  }
  if(d.skiprec){ const r=S.recur.find(x=>x.id===d.skiprec); r.next=advance(r,r.next); if(r.to && r.next>r.to) S.recur=S.recur.filter(x=>x!==r); save();render(); toast(`Pominięto. Następny termin: ${fmtDate(r.next)}.`); }
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!ov.hidden)close();});
render();
