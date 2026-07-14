const samples={
  English:["I want to practice explaining a product idea clearly.","Let’s work through it. Start with the problem your product solves and who experiences it most often."],
  "Simplified Chinese":["我想练习清楚地介绍一个产品想法。","我们可以从产品解决的问题，以及最常遇到这个问题的人群开始。"],
  Japanese:["プロダクトのアイデアを明確に説明する練習がしたいです。","まず、そのプロダクトが解決する問題と、誰がその問題を抱えているかを整理しましょう。"],
  Spanish:["Quiero practicar cómo explicar una idea de producto.","Empecemos por el problema que resuelve y por las personas que lo experimentan."],
  French:["Je veux apprendre à présenter clairement une idée de produit.","Commençons par le problème résolu et les personnes qui le rencontrent."]
};
const button=document.querySelector("#demo-button");
button.addEventListener("click",()=>{
  window.location.href="https://saylive.lat/";
});
document.querySelector("#language").addEventListener("change",()=>{button.innerHTML="<span>♩</span> Start interface demo";document.querySelector("#voice-text").textContent="Waiting for speech...";document.querySelector("#response-text").textContent="Your live response will appear here."});
const cases={
  practice:["01 / PRACTICE","Practice a language with natural back-and-forth.","Interrupt, ask for a slower explanation, or pause to find a word. Spoken answers and visible text help you hear and review the same response.","> use_case: language practice<br>> interaction: full duplex<br>> response: voice + text<br>> status: ready"],
  ideas:["02 / IDEAS","Think out loud without waiting for rigid turns.","Explore an early idea conversationally. GPT Live can keep listening through pauses and delegate deeper questions without ending the exchange.","> use_case: idea development<br>> pauses: respected<br>> deeper_work: delegated<br>> status: active"],
  access:["03 / ACCESS","Get hands-free help while staying in context.","Use voice for everyday questions, planning, or moments when typing is inconvenient. Add text or images to the same chat when supported.","> use_case: hands-free help<br>> input: voice + context<br>> output: spoken + visual<br>> status: ready"],
  review:["04 / TRANSLATE","Move between languages in real time.","Use continuous conversation for language practice or live translation, while keeping important answers visible for review.","> use_case: live translation<br>> conversation: continuous<br>> transcript: reviewable<br>> status: ready"]
};
document.querySelectorAll(".case-tab").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll(".case-tab").forEach(item=>item.classList.remove("active"));
  tab.classList.add("active");
  const data=cases[tab.dataset.case];
  ["#case-index","#case-title","#case-copy","#case-log"].forEach((id,index)=>document.querySelector(id).innerHTML=data[index]);
}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(element=>observer.observe(element));
const menu=document.querySelector(".menu-toggle");
const mobileNav=document.querySelector(".mobile-nav");
menu.addEventListener("click",()=>{const open=mobileNav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
mobileNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{mobileNav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
window.addEventListener("scroll",()=>document.querySelector(".site-header").classList.toggle("scrolled",window.scrollY>20),{passive:true});
document.querySelector("#year").textContent=new Date().getFullYear();
