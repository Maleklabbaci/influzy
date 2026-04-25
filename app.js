/* =======================================
   INFLUZY — GLOBAL JS
   ======================================= */

// === THEME TOGGLE ===
function initTheme(){
  const saved=localStorage.getItem('influzy-theme');
  if(saved)document.documentElement.setAttribute('data-theme',saved);
}
function toggleTheme(){
  const current=document.documentElement.getAttribute('data-theme');
  const next=current==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next==='light'?'':'dark');
  if(next==='light')document.documentElement.removeAttribute('data-theme');
  localStorage.setItem('influzy-theme',next);
}
initTheme();

// === NAV SCROLL ===
window.addEventListener('scroll',()=>{
  const nav=document.getElementById('nav');
  if(nav)nav.classList.toggle('scrolled',scrollY>50);
});

// === MOBILE MENU ===
function toggleNav(){
  const m=document.getElementById('navMenu');
  if(m)m.classList.toggle('open');
}

// === MODALS ===
function openM(t){
  const id=t==='brand'?'mBrand':'mCreator';
  const el=document.getElementById(id);
  if(el){el.classList.add('open');document.body.style.overflow='hidden'}
}
function closeM(t){
  const id=t==='brand'?'mBrand':'mCreator';
  const el=document.getElementById(id);
  if(el){el.classList.remove('open');document.body.style.overflow=''}
}
document.addEventListener('click',e=>{
  if(e.target.classList.contains('modal-bg')){
    e.target.classList.remove('open');
    document.body.style.overflow='';
  }
});

// === CATALOG FILTER ===
function fil(btn,cat){
  document.querySelectorAll('.cat-filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.inf-card').forEach(c=>{
    c.style.display=cat==='all'||c.dataset.cat===cat?'':'none';
  });
}

// === COUNTER ANIMATION ===
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target, t=+el.dataset.val;
        let c=0;const s=Math.ceil(t/50);
        const timer=setInterval(()=>{
          c+=s;if(c>=t){c=t;clearInterval(timer)}
          el.textContent=c;
        },25);
        io.unobserve(el);
      }
    });
  },{threshold:.5});
  document.querySelectorAll('.counter').forEach(c=>io.observe(c));
}

// === LANGUAGE ===
let lang='fr';
function setLang(l,btn){
  lang=l;
  document.querySelectorAll('.lang-bar button').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  document.documentElement.dir=l==='ar'?'rtl':'ltr';
  document.documentElement.lang=l==='ar'?'ar':l==='en'?'en':'fr';
  document.querySelectorAll('[data-'+l+']').forEach(el=>{
    const v=el.getAttribute('data-'+l);
    if(v){
      if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')el.placeholder=v;
      else el.innerHTML=v;
    }
  });
}

// === FORM SUBMIT ===
function submitForm(btn){
  const box=btn.closest('.modal-box')||btn.closest('.contact-form');
  if(!box)return;
  const fields=box.querySelectorAll('input,select,textarea');
  let ok=true;
  fields.forEach(f=>{
    if(!f.value){f.style.borderColor='#EF4444';ok=false}
    else f.style.borderColor='';
  });
  if(ok){
    const msg={
      fr:'Merci ! Votre demande a été envoyée. On vous recontacte très vite.',
      ar:'شكرًا! تم إرسال طلبك. سنتواصل معك قريبًا.',
      en:"Thanks! Your request has been sent. We'll get back to you soon."
    };
    alert(msg[lang]||msg.fr);
    const modal=box.closest('.modal-bg');
    if(modal){modal.classList.remove('open');document.body.style.overflow='';}
    fields.forEach(f=>f.value='');
  }
}

// === FAQ ACCORDION ===
document.addEventListener('click',e=>{
  const q=e.target.closest('.faq-q');
  if(!q)return;
  const item=q.parentElement;
  const a=item.querySelector('.faq-a');
  const inner=a.querySelector('.faq-a-inner');
  const isOpen=item.classList.contains('open');
  // close all
  document.querySelectorAll('.faq-item.open').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-a').style.maxHeight='0';
  });
  if(!isOpen){
    item.classList.add('open');
    a.style.maxHeight=inner.scrollHeight+'px';
  }
});
