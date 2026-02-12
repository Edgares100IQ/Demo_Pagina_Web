const PRODUCTS = [
  {id:1,title:'Camiseta Básica Blanca',price:19.99,category:'shirts',img:'https://picsum.photos/400/400?random=1',desc:'Camiseta 100% algodón orgánico. Corte recto y versátil, perfecta para cualquier ocasión. Lavable a máquina y duradera.',rating:4.5,reviews:128,sizes:['XS','S','M','L','XL','XXL'],colors:['Blanco','Negro','Gris'],stock:45,measurements:'Pecho: 96-122cm | Largo: 71-76cm | Hombro: 44-52cm',material:'100% Algodón Orgánico',care:'Lavar a máquina 30°C, no usar lejía',origin:'Hecho en España'},
  {id:2,title:'Sudadera Logo Borrada',price:49.99,category:'hoodies',img:'https://picsum.photos/400/400?random=2',desc:'Sudadera con capucha y logo bordado premium. Material suave al tacto con forro interior cálido. Ideal para otoño e invierno.',rating:4.8,reviews:256,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro','Gris','Azul marino'],stock:67,measurements:'Pecho: 102-132cm | Largo: 68-74cm | Manga: 61-66cm',material:'80% Algodón, 20% Poliéster',care:'Lavar a máquina frío, secar al aire',origin:'Diseñado en Barcelona'},
  {id:3,title:'Gorra Minimal',price:14.99,category:'caps',img:'https://picsum.photos/400/400?random=3',desc:'Gorra de algodón 100% con visera curva. Diseño minimalista perfecto para un look casual. Ajustable con cierre trasero.',rating:4.3,reviews:89,sizes:['Única'],colors:['Blanco','Negro','Beige'],stock:78,measurements:'Circunferencia: 54-58cm | Visera: 7cm',material:'100% Algodón Denim',care:'Lavar a mano, secar a la sombra',origin:'Fabricado en Portugal'},
  {id:4,title:'Camiseta Vintage Lavada',price:24.99,category:'shirts',img:'https://picsum.photos/400/400?random=4',desc:'Camiseta con estampado vintage lavado para un look único y retro. Tela suave con acabado desgastado deliberado. Cómoda y moderna.',rating:4.6,reviews:142,sizes:['XS','S','M','L','XL','XXL'],colors:['Crema','Marrón','Rosa pálido'],stock:56,measurements:'Pecho: 98-124cm | Largo: 72-78cm | Hombro: 45-53cm',material:'100% Algodón Peinado',care:'Lavar del revés, secar en secadora baja',origin:'Producido en Valencia'},
  {id:5,title:'Sudadera Oversize Premium',price:59.99,category:'hoodies',img:'https://picsum.photos/400/400?random=5',desc:'Sudadera con corte oversize de tacto premium y suave. Material grueso y cálido, perfecto para layering. Diseño contemporáneo.',rating:4.7,reviews:203,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro','Gris oscuro','Burdeos'],stock:52,measurements:'Pecho: 108-138cm | Largo: 70-76cm | Manga: 64-70cm',material:'85% Algodón Francés, 15% Poliéster',care:'Lavar en frío, no planchar',origin:'Confeccionado en Madrid'},
  {id:6,title:'Bolsa Tote Resistente',price:9.99,category:'bags',img:'https://picsum.photos/400/400?random=6',desc:'Bolsa tote resistente hecha de lona. Perfecta para uso diario, compras o trabajo. Asas largas y construcción robusta.',rating:4.4,reviews:167,sizes:['Única'],colors:['Negro','Verde','Crema'],stock:89,measurements:'Alto: 38cm | Ancho: 42cm | Asa: 28cm',material:'100% Lona Reciclada',care:'Limpiar con paño húmedo',origin:'Hecho a mano en Sevilla'},
  {id:7,title:'Camiseta Negra Premium',price:22.99,category:'shirts',img:'https://picsum.photos/400/400?random=7',desc:'Camiseta de algodón premium con acabado superior en color negro intenso. Resistente y duradera, mantiene su forma y color.',rating:4.5,reviews:198,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro'],stock:74,measurements:'Pecho: 96-122cm | Largo: 71-76cm | Hombro: 44-52cm',material:'Algodón Pima de 160gsm',care:'Lavar del revés, secar a temperatura media',origin:'Tejido en Cataluña'},
  {id:8,title:'Pantalones Jogger Cómodos',price:44.99,category:'bottoms',img:'https://picsum.photos/400/400?random=8',desc:'Pantalones jogger confort con cintura elástica y bolsillos funcionales. Perfecto para descanso o entrenamientos ligeros.',rating:4.6,reviews:174,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro','Gris','Azul'],stock:61,measurements:'Cintura: 66-96cm | Largo: 98-104cm | Pierna: 68-74cm',material:'65% Algodón, 35% Elastano',care:'Lavar a máquina, secar al aire',origin:'Cortado en Bilbao'},
  {id:9,title:'Bufanda Lana 100%',price:34.99,category:'accessories',img:'https://picsum.photos/400/400?random=9',desc:'Bufanda 100% lana merino. Cálida, suave y transpirable, perfecta para invierno. Mantiene el calor sin agruparse.',rating:4.8,reviews:134,sizes:['Única'],colors:['Gris','Azul marino','Burdeos'],stock:43,measurements:'Largo: 180cm | Ancho: 25cm',material:'100% Lana Merino',care:'Lavar a mano, secar plano',origin:'Hilado en Galicia'},
  {id:10,title:'Cinturón Cuero Genuino',price:39.99,category:'accessories',img:'https://picsum.photos/400/400?random=10',desc:'Cinturón de cuero genuino con acabado clásico. Hebilla de metal resistente. Versátil para cualquier atuendo formal o casual.',rating:4.7,reviews:92,sizes:['Única'],colors:['Marrón','Negro','Cognac'],stock:38,measurements:'Largo: 110-125cm | Ancho: 3.5cm | Hebilla: 5cm',material:'Cuero Vacuno Full Grain',care:'Limpiar con crema específica',origin:'Curado en La Rioja'},
  {id:11,title:'Camiseta a Rayas Clásico',price:23.99,category:'shirts',img:'https://picsum.photos/400/400?random=11',desc:'Camiseta con diseño en rayas finas horizontales. Un clásico sofisticado que combina con todo. Algodón de calidad superior.',rating:4.5,reviews:145,sizes:['XS','S','M','L','XL','XXL'],colors:['Blanco/Azul','Blanco/Negro','Blanco/Rojo'],stock:66,measurements:'Pecho: 94-120cm | Largo: 70-75cm | Hombro: 43-51cm',material:'Algodón Combed de 180gsm',care:'Lavar con colores similares',origin:'Tejido en Alicante'},
  {id:12,title:'Sudadera con Cierre Frontal',price:55.99,category:'hoodies',img:'https://picsum.photos/400/400?random=12',desc:'Sudadera con cierre frontal completo. Cómoda y funcional con bolsillos internos. Material transpirable y resistente.',rating:4.7,reviews:187,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro','Gris','Verde bosque'],stock:55,measurements:'Pecho: 104-134cm | Largo: 69-75cm | Manga: 62-68cm',material:'75% Algodón, 25% Fleece Poliéster',care:'Lavar en frío, no usar suavizante',origin:'Confeccionado en Zaragoza'},
  {id:13,title:'Mochila Urbana Inteligente',price:64.99,category:'bags',img:'https://picsum.photos/400/400?random=13',desc:'Mochila urbana con múltiples compartimentos inteligentes. Carga USB integrada y correas ergonómicas. Perfecta para viajes.',rating:4.9,reviews:267,sizes:['Única'],colors:['Negro','Gris','Azul marino'],stock:31,measurements:'Alto: 45cm | Ancho: 30cm | Profundidad: 15cm',material:'Poliéster 600D Ripstop',care:'Limpiar con paño húmedo',origin:'Diseñado en San Sebastián'},
  {id:14,title:'Pack 3 Calcetines Premium',price:12.99,category:'accessories',img:'https://picsum.photos/400/400?random=14',desc:'Pack de 3 calcetines premium de algodón. Cómodos, transpirables y duraderos. Varios diseños en cada pack.',rating:4.4,reviews:74,sizes:['Única'],colors:['Multicolor','Negro','Blanco'],stock:127,measurements:'Talla: 39-46 | Largo: 23cm',material:'80% Algodón Egipcio, 20% Elastano',care:'Lavar a máquina 40°C',origin:'Producido en Málaga'},
  {id:15,title:'Chaqueta Parka Impermeable',price:89.99,category:'jackets',img:'https://picsum.photos/400/400?random=15',desc:'Chaqueta parka impermeable con capucha ajustable. Aislada para climas fríos. Diseño elegante y moderno con bolsillos funcionales.',rating:4.8,reviews:215,sizes:['XS','S','M','L','XL','XXL'],colors:['Negro','Azul marino','Verde bosque'],stock:42,measurements:'Pecho: 106-136cm | Largo: 72-78cm | Manga: 65-71cm',material:'Membrana Gore-Tex, Relleno Plumón 90/10',care:'Lavar en seco, no planchar',origin:'Diseñado en los Pirineos'}
];

let cart = JSON.parse(localStorage.getItem('cart')||'[]');

function buildVariantImage(productId, color){
  const safe = (color || 'default').toString().trim().toLowerCase().replace(/\s+/g,'-');
  return `https://picsum.photos/seed/${productId}-${safe}/800/800`;
}

function updateBodyScrollLock(){
  const anyModalOpen = !!document.querySelector('.modal:not(.hidden)');
  document.body.classList.toggle('modal-open', anyModalOpen);
}

function renderProducts(filters=['all']){
  const container = document.getElementById('products'); container.innerHTML='';
  
  // Si 'all' está en los filtros, mostrar todos los productos
  if(filters.includes('all')) {
    const list = PRODUCTS;
    list.forEach(p=>{
      const card = document.createElement('div'); card.className='card reveal';
      const thumb = document.createElement('div'); thumb.className='thumb'; thumb.style.backgroundImage=`url(${p.img})`;
      thumb.addEventListener('click',()=> openDetail(p));
      const h = document.createElement('h3'); h.textContent=p.title;
      const rating = document.createElement('div'); rating.style.fontSize='12px'; rating.style.color='#6b6b6b'; rating.style.marginTop='4px'; rating.innerHTML=`⭐ ${p.rating} (${p.reviews} opiniones)`;
      const price = document.createElement('div'); price.className='price'; price.textContent=`€${p.price.toFixed(2)}`;
      const actions = document.createElement('div'); actions.className='card-actions';
      const add = document.createElement('button'); add.className='btn primary'; add.textContent='Añadir';
      add.onclick=()=>{ addToCart(p); };
      const view = document.createElement('button'); view.className='btn ghost'; view.textContent='Ver'; view.onclick=()=> openDetail(p);
      actions.appendChild(price); actions.appendChild(view); actions.appendChild(add);
      card.appendChild(thumb); card.appendChild(h); card.appendChild(rating); card.appendChild(actions);
      container.appendChild(card);
    });
  } else {
    // Filtrar por múltiples categorías
    const list = PRODUCTS.filter(p=>filters.includes(p.category));
    list.forEach(p=>{
      const card = document.createElement('div'); card.className='card reveal';
      const thumb = document.createElement('div'); thumb.className='thumb'; thumb.style.backgroundImage=`url(${p.img})`;
      thumb.addEventListener('click',()=> openDetail(p));
      const h = document.createElement('h3'); h.textContent=p.title;
      const rating = document.createElement('div'); rating.style.fontSize='12px'; rating.style.color='#6b6b6b'; rating.style.marginTop='4px'; rating.innerHTML=`⭐ ${p.rating} (${p.reviews} opiniones)`;
      const price = document.createElement('div'); price.className='price'; price.textContent=`€${p.price.toFixed(2)}`;
      const actions = document.createElement('div'); actions.className='card-actions';
      const add = document.createElement('button'); add.className='btn primary'; add.textContent='Añadir';
      add.onclick=()=>{ addToCart(p); };
      const view = document.createElement('button'); view.className='btn ghost'; view.textContent='Ver'; view.onclick=()=> openDetail(p);
      actions.appendChild(price); actions.appendChild(view); actions.appendChild(add);
      card.appendChild(thumb); card.appendChild(h); card.appendChild(rating); card.appendChild(actions);
      container.appendChild(card);
    });
  }
  observeReveal();
}

function updateCartUI(){
  document.getElementById('cart-count').textContent = cart.reduce((s,i)=>s+i.qty,0);
  const items = document.getElementById('cart-items');
  items.innerHTML='';
  if(cart.length===0) items.textContent='Carrito vacío.';
  else cart.forEach(it=>{
    const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.padding='8px 0';
    row.textContent = `${it.title} x${it.qty} - €${(it.price*it.qty).toFixed(2)}`;
    items.appendChild(row);
  });
}

function addToCart(product, opts = {}){
  const variantKey = opts.variantKey || `${product.id}`;
  const found = cart.find(i=>i.variantKey===variantKey);
  if(found) found.qty++;
  else cart.push({
    ...product,
    qty:1,
    variantKey,
    selectedSize: opts.size || null,
    selectedColor: opts.color || null,
    selectedImg: opts.img || product.img
  });
  localStorage.setItem('cart',JSON.stringify(cart));
  updateCartUI();
}

function clearCart(){ cart=[]; localStorage.setItem('cart','[]'); updateCartUI(); }

function openDetail(product){
  document.getElementById('product-modal').classList.remove('hidden');
  updateBodyScrollLock();

  let selectedSize = product.sizes?.[0] || null;
  let selectedColor = product.colors?.[0] || null;
  let selectedImg = selectedColor ? buildVariantImage(product.id, selectedColor) : product.img;

  // Crear cabecera fija si no existe
  if (!document.getElementById('detail-header')) {
    const headerHtml = `
      <div id="detail-header" class="detail-header">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 15px;">
            <img src="astral-logo.svg" alt="Astral" style="width: 40px; height: auto; opacity: 0.95;">
            <h3 id="detail-title" style="margin: 0; font-size: 1.6rem;"></h3>
          </div>
          <button id="close-detail" class="btn ghost close-detail-btn" aria-label="Cerrar detalle" style="position: static; margin: 0;">×</button>
        </div>
      </div>
    `;
    
    const detailInfo = document.getElementById('detail-info');
    if (detailInfo) {
      detailInfo.insertAdjacentHTML('afterbegin', headerHtml);
    }
  }
  
  document.getElementById('detail-image').style.backgroundImage = `url(${selectedImg})`;
  document.getElementById('detail-title').textContent = product.title;
  document.getElementById('detail-desc').textContent = product.desc;
  document.getElementById('detail-price').textContent = `€${product.price.toFixed(2)}`;
  document.getElementById('detail-rating').innerHTML = `⭐ ${product.rating} (${product.reviews} opiniones)`;
  document.getElementById('detail-stock').textContent = product.stock + ' disponibles';
  
  // Añadir información detallada
  const detailInfo = document.getElementById('detail-info');
  
  // Crear sección de medidas y materiales si no existe
  if (!document.getElementById('detail-specs')) {
    const specsHtml = `
      <div id="detail-specs" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--line);">
        <h4 style="margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Especificaciones del Producto</h4>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; margin-bottom: 5px; color: var(--text);">Medidas:</strong>
          <p style="margin: 0; color: var(--muted); line-height: 1.5;">${product.measurements || 'No disponibles'}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; margin-bottom: 5px; color: var(--text);">Material:</strong>
          <p style="margin: 0; color: var(--muted); line-height: 1.5;">${product.material || 'No especificado'}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; margin-bottom: 5px; color: var(--text);">Cuidados:</strong>
          <p style="margin: 0; color: var(--muted); line-height: 1.5;">${product.care || 'No especificados'}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="display: block; margin-bottom: 5px; color: var(--text);">Origen:</strong>
          <p style="margin: 0; color: var(--muted); line-height: 1.5;">${product.origin || 'No especificado'}</p>
        </div>
      </div>
      
      <div id="detail-reviews-section" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--line);">
        <h4 style="margin: 0 0 15px 0; font-size: 1.1rem; font-weight: 600;">Valoraciones de Clientes</h4>
        <div style="background: var(--glass); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 1.2rem; font-weight: 600; margin-right: 10px;">${product.rating}</span>
            <span style="color: #ffa500;">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
          </div>
          <p style="margin: 0; color: var(--muted);">${product.reviews} valoraciones verificadas</p>
        </div>
        <div style="background: var(--glass); padding: 15px; border-radius: 8px; margin-bottom: 10px;">
          <p style="margin: 0; font-style: italic; color: var(--text);">"Excelente calidad, superó mis expectativas"</p>
          <p style="margin: 5px 0 0 0; color: var(--muted); font-size: 0.9rem;">- María G. (Comprador verificado)</p>
        </div>
        <div style="background: var(--glass); padding: 15px; border-radius: 8px;">
          <p style="margin: 0; font-style: italic; color: var(--text);">"El material es increíble y la talla perfecta"</p>
          <p style="margin: 5px 0 0 0; color: var(--muted); font-size: 0.9rem;">- Carlos R. (Comprador verificado)</p>
        </div>
      </div>
    `;
    
    // Insertar después de las opciones existentes
    const optionsDiv = document.getElementById('detail-options');
    if (optionsDiv && !document.getElementById('detail-specs')) {
      optionsDiv.insertAdjacentHTML('afterend', specsHtml);
    }
  }
  
  const sizesContainer = document.getElementById('detail-sizes');
  sizesContainer.innerHTML = '<label style="display:block; margin-bottom:8px; font-weight:600;">Talla:</label>';
  product.sizes.forEach(size => {
    const btn = document.createElement('button');
    btn.className = 'size-btn';
    btn.textContent = size;
    btn.onclick = () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = size;
    };
    sizesContainer.appendChild(btn);
  });
  if(product.sizes.length > 0) product.sizes[0] && document.querySelectorAll('.size-btn')[0]?.classList.add('active');
  
  const colorsContainer = document.getElementById('detail-colors');
  colorsContainer.innerHTML = '<label style="display:block; margin-bottom:8px; font-weight:600; margin-top:16px;">Color:</label>';
  product.colors.forEach(color => {
    const btn = document.createElement('button');
    btn.className = 'color-btn';
    btn.textContent = color;
    btn.onclick = () => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      selectedColor = color;
      selectedImg = buildVariantImage(product.id, selectedColor);
      document.getElementById('detail-image').style.backgroundImage = `url(${selectedImg})`;
    };
    colorsContainer.appendChild(btn);
  });
  if(product.colors.length > 0) product.colors[0] && document.querySelectorAll('.color-btn')[0]?.classList.add('active');
  
  document.getElementById('detail-qty').value = 1;
  document.getElementById('detail-add').onclick = () => { 
    const qty = parseInt(document.getElementById('detail-qty').value) || 1;

    const variantKey = `${product.id}|${selectedSize || ''}|${selectedColor || ''}`;
    for(let i=0; i<qty; i++){
      addToCart(product, { variantKey, size: selectedSize, color: selectedColor, img: selectedImg });
    }
    alert('Añadido al carrito');
  };
}

function closeDetail(){
  document.getElementById('product-modal').classList.add('hidden');
  updateBodyScrollLock();
}

function observeReveal(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries, o)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); o.unobserve(e.target); } });
  },{threshold:0.12});
  els.forEach(el=>obs.observe(el));
}

function updateLoginUI(){
  const isLoggedIn = sessionStorage.getItem('logged') === '1' || sessionStorage.getItem('logged') === 'guest';
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  
  if(loginBtn && logoutBtn){
    if(isLoggedIn){
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
    } else {
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  renderProducts(['all']); updateCartUI(); updateLoginUI();

  // Forzar que la sección reviews sea visible inmediatamente
  const reviewsSection = document.getElementById('reviews');
  if (reviewsSection) {
    reviewsSection.classList.add('visible');
  }

  const loginBtn = document.getElementById('login-btn');
  const loginModal = document.getElementById('login-modal');
  const closeLogin = document.getElementById('close-login');
  const guestBtn = document.getElementById('guest-btn');
  const loginForm = document.getElementById('login-form');

  function openLogin(){ if(loginModal) loginModal.classList.remove('hidden'); updateBodyScrollLock(); }
  function closeLoginModal(){ if(loginModal) loginModal.classList.add('hidden'); updateBodyScrollLock(); }

  if(loginBtn && loginModal){
    loginBtn.addEventListener('click', openLogin);
  }

  if(closeLogin){
    closeLogin.addEventListener('click', closeLoginModal);
  }

  if(loginModal){
    loginModal.addEventListener('click', (e)=>{
      if(e.target === loginModal) closeLoginModal();
    });
  }

  if(guestBtn){
    guestBtn.addEventListener('click', ()=>{
      sessionStorage.setItem('logged','guest');
      closeLoginModal();
      updateLoginUI();
    });
  }

  if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const u = document.getElementById('username')?.value?.trim() || '';
      const p = document.getElementById('password')?.value || '';

      if(u === 'user' && p === 'demo123'){
        sessionStorage.setItem('logged','1');
        closeLoginModal();
        updateLoginUI();
      }else{
        alert('Credenciales incorrectas');
      }
    });
  }

  // Animaciones globales: añade 'reveal' a la mayoría de bloques/secciones si no la tienen
  const autoRevealSelectors = [
    'main > section:not(.hero)',
    'footer.site-footer',
    '.promo',
    '.newsletter-section',
    '.socials-section',
    '.cat-card',
    '.feature',
    '.testimonials blockquote',
    '#reviews',
    '.reviews',
    '.look'
  ];

  document.querySelectorAll(autoRevealSelectors.join(',')).forEach(el=>{
    if(!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  document.querySelectorAll('.nav-btn[data-target]').forEach(b=>b.addEventListener('click',()=>{
    const t = b.getAttribute('data-target'); document.getElementById(t).scrollIntoView({behavior:'smooth'});
  }));

  document.getElementById('shop-now').addEventListener('click',()=>{ document.getElementById('collection').scrollIntoView({behavior:'smooth'}); });
  document.getElementById('see-more').addEventListener('click',()=>{ document.getElementById('about').scrollIntoView({behavior:'smooth'}); });

  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',(e)=>{
    // Si el click es en la ×, no hacer nada
    if(e.target.classList.contains('tab-close')) return;
    
    const filter = btn.getAttribute('data-filter');
    
    // Si es el botón "Todo", desmarcar todos los demás y marcar solo este
    if(filter === 'all') {
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(['all']);
    } else {
      // Desmarcar el botón "Todo" si está activo
      document.querySelector('.filter-btn[data-filter="all"]')?.classList.remove('active');
      
      // Alternar el estado del botón actual
      btn.classList.toggle('active');
      
      // Obtener todos los filtros activos
      const activeFilters = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(b => b.getAttribute('data-filter'));
      
      // Si no hay filtros activos, activar "Todo"
      if(activeFilters.length === 0) {
        document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
        renderProducts(['all']);
      } else {
        renderProducts(activeFilters);
      }
    }
  }));

  // Handle close button inside tabs (stop propagation and remove tab)
  document.querySelectorAll('.tab-close').forEach(x=>{
    x.addEventListener('click',e=>{
      e.stopPropagation();
      const parent = x.closest('.filter-btn');
      if(!parent) return;
      const wasActive = parent.classList.contains('active');
      parent.remove();
      // If removed tab was active, activate 'all' if present or first tab
      if(wasActive){
        const fallback = document.querySelector('.filter-btn[data-filter="all"]') || document.querySelector('.filter-btn');
        if(fallback){ fallback.classList.add('active'); renderProducts(fallback.getAttribute('data-filter')||'all'); }
      }
    });
  });

  document.getElementById('cart-btn').addEventListener('click',()=>{ document.getElementById('cart-modal').classList.remove('hidden'); updateCartUI(); updateBodyScrollLock(); });
  document.getElementById('close-cart').addEventListener('click',()=>{ document.getElementById('cart-modal').classList.add('hidden'); updateBodyScrollLock(); });
  document.getElementById('clear-cart').addEventListener('click',()=>{ clearCart(); });
  document.getElementById('checkout').addEventListener('click',()=>{ alert('Gracias por su compra (demo)'); clearCart(); document.getElementById('cart-modal').classList.add('hidden'); updateBodyScrollLock(); });

  document.getElementById('close-detail').addEventListener('click',closeDetail);
  document.getElementById('detail-add').addEventListener('click',()=>{});

  document.getElementById('promo-btn').addEventListener('click',()=>{ document.getElementById('collection').scrollIntoView({behavior:'smooth'}); });

  // Logout functionality
  const logoutBtn = document.getElementById('logout-btn');
  if(logoutBtn){
    logoutBtn.addEventListener('click', ()=>{
      sessionStorage.removeItem('logged');
      updateLoginUI();
      alert('Has cerrado sesión');
    });
  }

  // Manejo de menú dropdown
  document.querySelectorAll('.dropdown-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent;
      alert(`Seleccionaste: ${text}\n\nEsta es una demostración. En una tienda real, esto te llevaría a los productos.`);
    });
  });

  observeReveal();
  updateBodyScrollLock();
});

