/* ========================================
   INFLUZY — GLOBAL JS V3
   ======================================== */

// THEME
function togT(){
 const d=document.documentElement,isL=d.getAttribute('data-t')==='light';
 if(isL){d.removeAttribute('data-t');document.getElementById('tBtn').textContent='☀'}
 else{d.setAttribute('data-t','light');document.getElementById('tBtn').textContent='☾'}
 try{localStorage.setItem('iz-t',isL?'dark':'light')}catch(e){}
}
try{if(localStorage.getItem('iz-t')==='light'){document.documentElement.setAttribute('data-t','light');document.addEventListener('DOMContentLoaded',()=>{const b=document.getElementById('tBtn');if(b)b.textContent='☾'})}}catch(e){}

// NAV SCROLL
window.addEventListener('scroll',()=>{const n=document.getElementById('nav');if(n)n.classList.toggle('scrolled',scrollY>50)});
function toggleMenu(){const m=document.getElementById('nm');if(m)m.classList.toggle('open')}

// MODALS
function openM(t){const id=t==='brand'?'mB':'mC';const e=document.getElementById(id);if(e){e.classList.add('open');document.body.style.overflow='hidden'}}
function closeM(t){const id=t==='brand'?'mB':'mC';const e=document.getElementById(id);if(e){e.classList.remove('open');document.body.style.overflow=''}}
document.addEventListener('click',e=>{if(e.target.classList.contains('mo-bg')){e.target.classList.remove('open');document.body.style.overflow=''}});

// COUNTER
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target,t=+el.dataset.v;let c=0;const s=Math.ceil(t/50);const tm=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(tm)}el.textContent=c},25);io.unobserve(el)}})},{threshold:.5});
 document.querySelectorAll('.ctr').forEach(c=>io.observe(c));
}

// HOW IT WORKS TABS
const howData=[
 [{t:'Create Account',d:'Sign up quickly with your email or social login.'},{t:'Add Personal Info',d:'Complete your profile with interests, social links and skills.'},{t:'Browse Campaigns',d:'Explore campaigns that fit your niche and audience.'},{t:'Apply & Get Paid',d:'Submit applications, create content, and receive payment.'}],
 [{t:'Create Account',d:'Register your company profile on the platform.'},{t:'Add Company Info',d:'Provide business details and campaign goals.'},{t:'Create Campaigns',d:'Launch campaigns tailored to your marketing objectives.'},{t:'Choose Creators',d:'Review applications and select creators to collaborate with.'}]
];
function howTab(btn,i){
 document.querySelectorAll('.how-tab').forEach(b=>b.classList.remove('on'));
 btn.classList.add('on');
 const c=document.getElementById('howSteps');
 if(c)c.innerHTML=howData[i].map((s,j)=>`<div class="how-step"><div class="how-num">0${j+1}</div><h4>${s.t}</h4><p>${s.d}</p></div>`).join('');
}

// CATALOG FILTER
function fil(btn,cat){
 document.querySelectorAll('.cfb').forEach(b=>b.classList.remove('on'));
 btn.classList.add('on');
 document.querySelectorAll('.cr-card[data-cat]').forEach(c=>{
  c.style.display=cat==='all'||c.dataset.cat===cat?'':'none';
 });
}

// FAQ ACCORDION
document.addEventListener('click',e=>{
 const q=e.target.closest('.faq-q');if(!q)return;
 const it=q.parentElement,a=it.querySelector('.faq-a'),inn=a.querySelector('.faq-a-in'),isO=it.classList.contains('open');
 document.querySelectorAll('.faq-i.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight='0'});
 if(!isO){it.classList.add('open');a.style.maxHeight=inn.scrollHeight+'px'}
});

// FORM SUBMIT
function subF(btn){
 const box=btn.closest('.mo-box')||btn.closest('.ct-form')||btn.closest('.join-form')||btn.closest('.step-panel');
 if(!box)return;
 const fs=box.querySelectorAll('input,select,textarea');
 let ok=true;
 fs.forEach(f=>{
  if(f.hasAttribute('required')&&!f.value){f.classList.add('fd-err');ok=false}
  else f.classList.remove('fd-err');
 });
 if(ok){
  alert('Thank you! Your request has been sent successfully. We\'ll get back to you within 24h.');
  const m=box.closest('.mo-bg');
  if(m){m.classList.remove('open');document.body.style.overflow=''}
  fs.forEach(f=>f.value='');
 }
}

// CAMPAIGN STEPPER
let currentStep=1;
function stepTo(n){
 if(n<1||n>4)return;
 // validate current step
 if(n>currentStep){
  const panel=document.querySelector('.step-panel.active');
  if(panel){
   const fs=panel.querySelectorAll('input[required],select[required],textarea[required]');
   let ok=true;
   fs.forEach(f=>{if(!f.value){f.classList.add('fd-err');ok=false}else f.classList.remove('fd-err')});
   if(!ok)return;
  }
 }
 currentStep=n;
 // update dots
 document.querySelectorAll('.stepper-dot').forEach((d,i)=>{
  d.classList.remove('active','done');
  if(i+1<n)d.classList.add('done');
  if(i+1===n)d.classList.add('active');
 });
 document.querySelectorAll('.stepper-line').forEach((l,i)=>{
  l.classList.toggle('done',i+1<n);
 });
 // show panel
 document.querySelectorAll('.step-panel').forEach(p=>p.classList.remove('active'));
 const target=document.getElementById('step'+n);
 if(target)target.classList.add('active');
}
