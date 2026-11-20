const PRODUCTS = {
  // Prices are display prices in BDT; product photos load from public online image CDNs.
  nova: { name: 'Apple iPhone 16', category: 'Smartphones', filter: 'smartphones', price: 89499, label: 'PHONE', variant: '', detail: '128 GB · Black', image: 'https://s13emagst.akamaized.net/products/76828/76827218/images/res_9d20df90bc9766027b5c2d05cc873bef.jpg' },
  s25: { name: 'Samsung Galaxy S25', category: 'Smartphones', filter: 'smartphones', price: 72999, label: 'PHONE', variant: '', detail: '12 GB · 128 GB', image: 'https://media2.nbb-cdn.de/images/products/Samsung-S25-Silver-Shadow-Front_4b4d.jpg' },
  pixel9: { name: 'Google Pixel 9', category: 'Smartphones', filter: 'smartphones', price: 89999, label: 'PHONE', variant: '', detail: '12 GB · 128 GB', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85' },
  oneplus13: { name: 'OnePlus 13', category: 'Smartphones', filter: 'smartphones', price: 84999, label: 'PHONE', variant: '', detail: '12 GB · 256 GB', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85' },
  galaxya36: { name: 'Samsung Galaxy A36 5G', category: 'Smartphones', filter: 'smartphones', price: 39999, label: 'PHONE', variant: '', detail: '8 GB · 256 GB', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=900&q=85' },
  redminote14: { name: 'Redmi Note 14 Pro', category: 'Smartphones', filter: 'smartphones', price: 34999, label: 'PHONE', variant: '', detail: '8 GB · 256 GB', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85' },

  aero: { name: 'MacBook Air M4 13-inch', category: 'Laptops', filter: 'laptops', price: 138499, label: 'LAPTOP', variant: 'lilac', detail: '16 GB · 256 GB · Sky Blue', image: 'https://phucanhcdn.com/media/product/58276_laptop_apple_macbook_air_m4_sky_blue_4.jpg' },
  vivobook: { name: 'ASUS Vivobook 15 OLED', category: 'Laptops', filter: 'laptops', price: 84900, label: 'LAPTOP', variant: 'lilac', detail: 'Core i5 · 16 GB · 512 GB', image: 'https://down-th.img.susercontent.com/file/th-11134207-7r98s-lzzowegqhlkx09' },
  acer_lite: { name: 'Acer Aspire Lite AL15-41', category: 'Laptops', filter: 'laptops', price: 61990, label: 'LAPTOP', variant: 'lilac', detail: 'Ryzen 3 · 8 GB · 512 GB', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85' },
  hp15: { name: 'HP 15-fc0623AU', category: 'Laptops', filter: 'laptops', price: 74500, label: 'LAPTOP', variant: 'lilac', detail: 'Ryzen 3 · 8 GB · 512 GB', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85' },
  lenovo_slim: { name: 'Lenovo IdeaPad Slim 3', category: 'Laptops', filter: 'laptops', price: 76500, label: 'LAPTOP', variant: 'lilac', detail: 'Ryzen 3 · 8 GB · 512 GB', image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=85' },
  legion5: { name: 'Lenovo Legion 5 15AKP10', category: 'Laptops', filter: 'laptops', price: 240000, label: 'LAPTOP', variant: 'lilac', detail: 'Ryzen AI 7 · RTX 5060', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=85' },

  buds: { name: 'Samsung Galaxy Buds3 Pro', category: 'Audio', filter: 'audio', price: 21990, label: 'AUDIO', variant: 'mint', detail: 'True wireless · Silver', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85' },
  airpods4: { name: 'Apple AirPods 4', category: 'Audio', filter: 'audio', price: 19990, label: 'AUDIO', variant: 'mint', detail: 'USB-C charging case', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85' },
  sonyxm5: { name: 'Sony WH-1000XM5', category: 'Audio', filter: 'audio', price: 42990, label: 'AUDIO', variant: 'mint', detail: 'Wireless noise cancelling', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85' },
  jbl720: { name: 'JBL Tune 720BT', category: 'Audio', filter: 'audio', price: 9490, label: 'AUDIO', variant: 'mint', detail: 'Wireless over-ear', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85' },
  soundcore: { name: 'Soundcore Q20i', category: 'Audio', filter: 'audio', price: 5990, label: 'AUDIO', variant: 'mint', detail: 'Hybrid ANC headphones', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=85' },
  marshall: { name: 'Marshall Major V', category: 'Audio', filter: 'audio', price: 17990, label: 'AUDIO', variant: 'mint', detail: 'Bluetooth on-ear', image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=900&q=85' },

  watch: { name: 'Samsung Galaxy Watch7', category: 'Wearables', filter: 'wearables', price: 29990, label: 'WATCH', variant: 'yellow', detail: '44 mm · Bluetooth', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85' },
  applewatch: { name: 'Apple Watch Series 10', category: 'Wearables', filter: 'wearables', price: 52990, label: 'WATCH', variant: 'yellow', detail: '42 mm · GPS', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=900&q=85' },
  garmin: { name: 'Garmin Venu 3', category: 'Wearables', filter: 'wearables', price: 54990, label: 'WATCH', variant: 'yellow', detail: '45 mm · GPS', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=85' },
  amazfit: { name: 'Amazfit Balance', category: 'Wearables', filter: 'wearables', price: 27990, label: 'WATCH', variant: 'yellow', detail: '46 mm · AMOLED', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=900&q=85' },
  fitbit: { name: 'Fitbit Charge 6', category: 'Wearables', filter: 'wearables', price: 19990, label: 'WATCH', variant: 'yellow', detail: 'Fitness tracker · GPS', image: 'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=900&q=85' },
  huaweiwatch: { name: 'Huawei Watch GT 5', category: 'Wearables', filter: 'wearables', price: 24990, label: 'WATCH', variant: 'yellow', detail: '46 mm · GPS', image: 'https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&w=900&q=85' },

  power: { name: 'UGREEN Nexode 65W', category: 'Accessories', filter: 'accessories', price: 4990, label: 'POWER', variant: 'blue', detail: 'GaN USB-C charger', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=85' },
  keyboard: { name: 'Logitech K380s', category: 'Accessories', filter: 'accessories', price: 4990, label: 'KEYS', variant: 'pink', detail: 'Bluetooth keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85' },
  mxmaster: { name: 'Logitech MX Master 3S', category: 'Accessories', filter: 'accessories', price: 12990, label: 'MOUSE', variant: 'blue', detail: 'Wireless performance mouse', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=85' },
  powerbank: { name: 'Anker PowerCore 20K', category: 'Accessories', filter: 'accessories', price: 6990, label: 'POWER', variant: 'blue', detail: '20,000 mAh power bank', image: 'https://images.unsplash.com/photo-1609592806596-b7dcb373546d?auto=format&fit=crop&w=900&q=85' },
  smarttag: { name: 'Samsung Galaxy SmartTag2', category: 'Accessories', filter: 'accessories', price: 3490, label: 'TRACK', variant: 'blue', detail: 'Bluetooth item tracker', image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=85' },
  ssd: { name: 'Samsung T7 Shield 1TB', category: 'Accessories', filter: 'accessories', price: 14990, label: 'SSD', variant: 'blue', detail: 'Portable SSD · 1 TB', image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=900&q=85' }
};

const DEFAULT_CART = [{ id: 'nova', quantity: 1 }, { id: 'buds', quantity: 1 }, { id: 'watch', quantity: 1 }];
const ORDER_STORE_KEY = 'gadgethub-orders-v2';
const CURRENT_ORDER_KEY = 'gadgethub-current-order-v2';
const money = value => `৳ ${Number(value).toLocaleString('en-US')}`;
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}
function orderList() {
  try {
    const saved = JSON.parse(localStorage.getItem(ORDER_STORE_KEY) || '[]');
    return Array.isArray(saved) ? saved.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];
  } catch { return []; }
}
function saveOrderList(orders) { localStorage.setItem(ORDER_STORE_KEY, JSON.stringify(orders)); }
function formatOrderDate(value, includeTime = false) {
  const date = new Date(value);
  const options = includeTime
    ? { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }
    : { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleString('en-US', options);
}
function statusInfo(status) {
  if (status === 'cancelled') return { label: 'Cancelled', className: 'cancelled' };
  if (status === 'delivered') return { label: 'Delivered', className: 'delivered' };
  return { label: 'In progress', className: '' };
}
function statusPill(status) {
  const meta = statusInfo(status);
  return `<span class="status ${meta.className}">${meta.label}</span>`;
}
function uniqueOrderId() {
  const existing = new Set(orderList().map(order => order.id));
  let id;
  do { id = `GH-${Math.floor(100000 + Math.random() * 900000)}`; } while (existing.has(id));
  return id;
}
function createOrder(formValues) {
  const now = new Date();
  const estimatedDelivery = new Date(now); estimatedDelivery.setDate(now.getDate() + 4);
  const items = cart().map(item => {
    const product = PRODUCTS[item.id];
    return { id: item.id, name: product.name, detail: product.detail, price: product.price, quantity: item.quantity };
  });
  const totals = cartTotals();
  return {
    id: uniqueOrderId(),
    createdAt: now.toISOString(),
    estimatedDelivery: estimatedDelivery.toISOString(),
    status: 'working',
    items,
    totals,
    customer: { name: formValues.name, email: formValues.email, phone: formValues.phone, area: formValues.area, address: formValues.address, note: formValues.note || '' },
    payment: $('input[name="payment"]:checked')?.value || 'Cash on Delivery',
    courier: 'GadgetHub Express',
    trackingNumber: `GHX-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`
  };
}
function selectedOrder() {
  const urlOrderId = new URLSearchParams(window.location.search).get('order');
  const currentOrderId = localStorage.getItem(CURRENT_ORDER_KEY);
  const orders = orderList();
  return orders.find(order => order.id === urlOrderId) || orders.find(order => order.id === currentOrderId) || orders[0] || null;
}

function cart() {
  try {
    const saved = localStorage.getItem('gadgethub-cart');
    const savedCart = saved === null ? structuredClone(DEFAULT_CART) : JSON.parse(saved);
    const legacyIds = { earbuds: 'airpods4', monitor: 'sonyxm5' };
    return savedCart.map(item => ({ ...item, id: legacyIds[item.id] || item.id })).filter(item => PRODUCTS[item.id]);
  } catch { return structuredClone(DEFAULT_CART); }
}
function saveCart(next) { localStorage.setItem('gadgethub-cart', JSON.stringify(next)); updateCartCount(); }
function cartSubtotal() { return cart().reduce((total, item) => total + (PRODUCTS[item.id]?.price || 0) * item.quantity, 0); }
function cartTotals() {
  const subtotal = cartSubtotal();
  const delivery = subtotal ? 120 : 0;
  const discount = subtotal ? 1000 : 0;
  return { subtotal, delivery, discount, total: Math.max(0, subtotal + delivery - discount) };
}
function notify(message) {
  const node = $('.notice');
  if (!node) return;
  node.textContent = message; node.classList.add('show');
  clearTimeout(window.noticeTimer); window.noticeTimer = setTimeout(() => node.classList.remove('show'), 2600);
}
function updateCartCount() {
  const count = cart().reduce((total, item) => total + item.quantity, 0);
  $$('.cart-count').forEach(node => { node.textContent = count ? `(${count})` : ''; });
  const label = $('.cart-items-label'); if (label) label.textContent = `${count} item${count === 1 ? '' : 's'}`;
}
function imageClass(product) { return product.variant ? ` ${product.variant}` : ''; }
function productImage(id, product) { return `<img src="assets/products/${id}.jpg" alt="${product.name}">`; }

function setNav() {
  const page = document.body.dataset.page;
  $$('[data-nav]').forEach(link => link.classList.toggle('active', link.dataset.nav === page));
}

function addToCart(id) {
  const next = cart(); const line = next.find(item => item.id === id);
  if (line) line.quantity += 1; else next.push({ id, quantity: 1 });
  saveCart(next); renderCart(); renderCheckout(); notify(`${PRODUCTS[id].name} was added to your cart.`);
}

function updateQuantity(id, delta) {
  const next = cart().map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item).filter(item => item.quantity > 0);
  saveCart(next); renderCart(); renderCheckout();
}

function removeFromCart(id) {
  saveCart(cart().filter(item => item.id !== id)); renderCart(); renderCheckout(); notify('Item removed from your cart.');
}

function cartRow(item) {
  const product = PRODUCTS[item.id];
  return `<article class="card cart-row"><span class="cart-thumb${imageClass(product)}">${productImage(item.id, product)}</span><div class="cart-details"><h3>${product.name}</h3><p>${product.detail}</p><span class="price">${money(product.price)}</span></div><div class="quantity" aria-label="Quantity for ${product.name}"><button data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-action="increase" data-id="${item.id}" aria-label="Increase quantity">+</button></div><button class="remove" data-action="remove" data-id="${item.id}" aria-label="Remove ${product.name}">×</button></article>`;
}

function renderCart() {
  const container = $('#cart-items'); const summary = $('#cart-summary');
  if (!container || !summary) return;
  const current = cart(); const totals = cartTotals();
  container.innerHTML = current.length ? current.map(cartRow).join('') : `<article class="card form-card"><h3>Your cart is empty</h3><p class="page-subtitle">Browse our products and add something you love.</p><br><a class="btn" href="products.html">Browse products</a></article>`;
  summary.innerHTML = `<h2>Order summary</h2><hr><div class="summary-line"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div><div class="summary-line"><span>Delivery</span><strong>${money(totals.delivery)}</strong></div><div class="summary-line discount"><span>Discount</span><strong>− ${money(totals.discount)}</strong></div><div class="summary-total"><span>Total</span><strong>${money(totals.total)}</strong></div><a class="btn full${current.length ? '' : ' disabled'}" ${current.length ? 'href="checkout.html"' : 'aria-disabled="true"'}>Proceed to checkout</a>`;
  updateCartCount();
}

function renderCheckout() {
  const summary = $('#checkout-summary'); if (!summary) return;
  const current = cart(); const totals = cartTotals();
  const lines = current.length ? current.map(item => {
    const product = PRODUCTS[item.id];
    return `<div class="summary-product"><span class="summary-thumb${imageClass(product)}">${productImage(item.id, product)}</span><span><strong>${product.name} ${item.quantity > 1 ? `× ${item.quantity}` : ''}</strong><span>${product.detail}</span></span><b>${money(product.price * item.quantity)}</b></div>`;
  }).join('') : '<p class="page-subtitle">Your cart is empty.</p>';
  summary.innerHTML = `<h2>Order summary</h2><hr>${lines}<div class="summary-line"><span>Subtotal</span><strong>${money(totals.subtotal)}</strong></div><div class="summary-line"><span>Delivery fee</span><strong>${money(totals.delivery)}</strong></div><div class="summary-line discount"><span>Discount</span><strong>− ${money(totals.discount)}</strong></div><div class="summary-total"><span>Total payable</span><strong>${money(totals.total)}</strong></div><div class="discount-box"><input id="discount-code" placeholder="Discount code"><button id="apply-discount" type="button">Apply</button></div><button class="btn full" id="place-order" ${current.length ? '' : 'disabled'}>Place order</button>`;
}

function renderProductCatalog(items = Object.entries(PRODUCTS)) {
  const grid = $('#product-grid');
  if (!grid) return;
  grid.innerHTML = items.length ? items.map(([id, product]) => `
    <article class="card product-card" data-id="${id}" data-category="${product.filter}">
      <div class="product-image ${product.variant}">
        <img src="assets/products/${id}.jpg" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info"><span class="product-name">${product.name}</span><span class="product-category">${product.category}</span></div>
      <div class="product-bottom"><span class="price">${money(product.price)}</span><button class="btn small add-cart" data-id="${id}">Add to cart</button></div>
    </article>`).join('') : '<p class="empty-catalog">No products found. Try another product name or category.</p>';
}

function setupProductFilters() {
  const search = $('#product-search'), category = $('#category-filter'); if (!search || !category) return;
  const filter = () => {
    const term = search.value.trim().toLowerCase();
    const selected = category.value;
    const matches = Object.entries(PRODUCTS).filter(([id, product]) => {
      const searchableText = `${id} ${product.name} ${product.category} ${product.detail} ${product.label}`.toLowerCase();
      return searchableText.includes(term) && (selected === 'all' || product.filter === selected);
    });
    renderProductCatalog(matches);
    const result = $('#product-results');
    if (result) result.textContent = `${matches.length} product${matches.length === 1 ? '' : 's'} found`;
  };
  search.addEventListener('input', filter);
  search.addEventListener('search', filter);
  category.addEventListener('change', filter);
  filter();
}

function setupOrderFilters() {
  const search = $('#order-search'), status = $('#order-status-filter'); if (!search || !status) return;
  const filter = () => {
    const term = search.value.trim().toLowerCase();
    $$('#orders-body tr').forEach(row => row.hidden = !(row.textContent.toLowerCase().includes(term) && (status.value === 'all' || row.dataset.status === status.value)));
  };
  search.addEventListener('input', filter); status.addEventListener('change', filter);
}

function renderOrderHistory() {
  const tbody = $('#orders-body');
  if (!tbody) return;
  const orders = orderList();
  const count = (status) => orders.filter(order => order.status === status).length;
  const all = $('#order-count-all'); if (all) all.textContent = orders.length;
  const progress = $('#order-count-progress'); if (progress) progress.textContent = count('working');
  const delivered = $('#order-count-delivered'); if (delivered) delivered.textContent = count('delivered');
  const cancelled = $('#order-count-cancelled'); if (cancelled) cancelled.textContent = count('cancelled');

  if (!orders.length) {
    tbody.innerHTML = '<tr class="empty-order-row"><td colspan="6">No orders yet. Products you place from My cart will appear here.</td></tr>';
  } else {
    tbody.innerHTML = orders.map(order => {
      const firstItem = order.items[0];
      const productName = order.items.length > 1 ? `${firstItem.name} +${order.items.length - 1} more` : firstItem.name;
      return `<tr data-status="${order.status}"><td><strong>${escapeHTML(order.id)}</strong></td><td>${escapeHTML(productName)}</td><td>${formatOrderDate(order.createdAt)}</td><td>${statusPill(order.status)}</td><td>${money(order.totals.total)}</td><td><a class="text-link" href="order-status.html?order=${encodeURIComponent(order.id)}">View details</a></td></tr>`;
    }).join('');
  }

  const note = $('#order-history-note');
  if (note) note.textContent = orders.length ? `Showing ${orders.length} order${orders.length === 1 ? '' : 's'}.` : 'No orders yet.';
}

function renderDashboardOrders() {
  const tbody = $('#dashboard-orders-body');
  if (!tbody) return;
  const orders = orderList();
  const progressCount = orders.filter(order => order.status === 'working').length;
  const deliveredCount = orders.filter(order => order.status === 'delivered').length;
  const total = $('#dashboard-total-orders'); if (total) total.textContent = orders.length;
  const totalNote = $('#dashboard-total-note'); if (totalNote) totalNote.textContent = progressCount ? `${progressCount} in progress` : 'No orders yet';
  const progress = $('#dashboard-progress-orders'); if (progress) progress.textContent = progressCount;
  const delivered = $('#dashboard-delivered-orders'); if (delivered) delivered.textContent = deliveredCount;
  const recentOrders = orders.slice(0, 3);
  tbody.innerHTML = recentOrders.length ? recentOrders.map(order => {
    const firstItem = order.items[0];
    const productName = order.items.length > 1 ? `${firstItem.name} +${order.items.length - 1} more` : firstItem.name;
    return `<tr><td><strong>${escapeHTML(order.id)}</strong></td><td>${escapeHTML(productName)}</td><td>${formatOrderDate(order.createdAt)}</td><td><a class="status ${statusInfo(order.status).className}" href="order-status.html?order=${encodeURIComponent(order.id)}">${statusInfo(order.status).label}</a></td><td>${money(order.totals.total)}</td></tr>`;
  }).join('') : '<tr class="empty-order-row"><td colspan="5">No recent orders yet.</td></tr>';
}

function orderSummaryLines(order) {
  return order.items.map(item => `<div class="summary-product"><span class="summary-thumb"><img src="assets/products/${escapeHTML(item.id)}.jpg" alt="${escapeHTML(item.name)}"></span><span><strong>${escapeHTML(item.name)}${item.quantity > 1 ? ` × ${item.quantity}` : ''}</strong><span>${escapeHTML(item.detail)}</span></span><b>${money(item.price * item.quantity)}</b></div>`).join('');
}

function progressMarkup(order) {
  if (order.status === 'cancelled') {
    return `<section class="card cancelled-order-message"><h2>Order cancelled</h2><p>This order was cancelled on ${formatOrderDate(order.cancelledAt || new Date().toISOString(), true)}. It remains in your order history for reference.</p></section>`;
  }
  const shippedSteps = order.status === 'delivered' ? 5 : 2;
  const progressPercent = order.status === 'delivered' ? '100%' : '38%';
  const stepData = [
    ['Order placed', formatOrderDate(order.createdAt, true)],
    [order.payment === 'Cash on Delivery' ? 'Order confirmed' : 'Payment confirmed', formatOrderDate(order.createdAt, true)],
    ['Packed & dispatched', 'Preparing your order'],
    ['Out for delivery', `Expected ${formatOrderDate(order.estimatedDelivery)}`],
    ['Delivered', `Expected ${formatOrderDate(order.estimatedDelivery)}`]
  ];
  return `<section class="card progress-card"><h2>Delivery progress</h2><div class="progress" style="--progress: ${progressPercent}">${stepData.map(([name, note], index) => `<div class="step ${index < shippedSteps ? 'done' : ''}"><span class="step-mark">${index < shippedSteps ? '✓' : index + 1}</span><strong>${name}</strong><small>${note}</small></div>`).join('')}</div></section>`;
}

function renderOrderStatus() {
  const container = $('#order-status-content');
  if (!container) return;
  const order = selectedOrder();
  if (!order) {
    container.innerHTML = `<section class="card empty-order-state"><h2>No order selected</h2><p>Your current order will appear here after you place it from My cart.</p><a class="btn" href="cart.html">Go to My cart</a></section>`;
    return;
  }
  const meta = statusInfo(order.status);
  const firstItem = order.items[0];
  const itemDescription = order.items.length === 1
    ? `${firstItem.name} · ${firstItem.detail} · Quantity ${firstItem.quantity}`
    : `${firstItem.name} + ${order.items.length - 1} more item${order.items.length > 2 ? 's' : ''}`;
  const paymentLabel = order.payment === 'Cash on Delivery' ? 'Cash on Delivery' : `Paid · ${order.payment}`;
  container.innerHTML = `
    <section class="card status-order">
      <div><h2>Order ${escapeHTML(order.id)}</h2><p>Placed ${formatOrderDate(order.createdAt)} • Estimated delivery ${formatOrderDate(order.estimatedDelivery)}</p><strong>${escapeHTML(itemDescription)}</strong></div>
      <div class="status-actions">${statusPill(order.status)}${order.status === 'working' ? `<button class="btn cancel-order" type="button" data-cancel-order="${escapeHTML(order.id)}">Cancel order</button>` : ''}</div>
    </section>
    ${progressMarkup(order)}
    <div class="status-layout">
      <section class="card shipment"><h2>Shipment details</h2><div class="details-list"><span>Courier partner</span><strong>${escapeHTML(order.courier)}</strong><span>Tracking number</span><strong>${escapeHTML(order.trackingNumber)}</strong><span>Delivery address</span><div><strong>${escapeHTML(order.customer.name)}</strong><br>${escapeHTML(order.customer.address)}<br>${escapeHTML(order.customer.area)}</div></div></section>
      <aside class="card summary"><h2>Order summary</h2>${orderSummaryLines(order)}<div class="summary-line"><span>Payment</span><strong class="payment-state">${escapeHTML(paymentLabel)}</strong></div><div class="summary-line"><span>Delivery fee</span><strong>${money(order.totals.delivery)}</strong></div><div class="summary-total"><span>Order total</span><strong>${money(order.totals.total)}</strong></div><a class="btn subtle help-button" href="support.html">Get help with order</a></aside>
    </div>`;
}

function cancelOrder(orderId) {
  const orders = orderList();
  const order = orders.find(entry => entry.id === orderId);
  if (!order || order.status !== 'working') return;
  order.status = 'cancelled';
  order.cancelledAt = new Date().toISOString();
  saveOrderList(orders);
  localStorage.setItem(CURRENT_ORDER_KEY, order.id);
  renderOrderHistory();
  renderDashboardOrders();
  renderOrderStatus();
  notify(`Order ${order.id} has been cancelled.`);
}

function setCheckoutFieldError(field, message = '') {
  const error = $(`#${field.id}-error`);
  field.setCustomValidity(message);
  field.classList.toggle('is-invalid', Boolean(message));
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (error) error.textContent = message;
  return !message;
}

function validateCheckoutField(field) {
  const value = field.value.trim();
  const label = field.closest('.field')?.querySelector('label')?.textContent || 'This field';
  if (!value) return setCheckoutFieldError(field, `${label} is required.`);

  if (field.dataset.checkoutRule === 'name') {
    const lettersOnly = /^[\p{L}\p{M}]+(?:\s+[\p{L}\p{M}]+)*$/u;
    return setCheckoutFieldError(field, lettersOnly.test(value) ? '' : 'Name cannot contain numbers or symbols.');
  }

  if (field.dataset.checkoutRule === 'phone') {
    if (!value.startsWith('01')) return setCheckoutFieldError(field, 'Phone number must start with 01.');
    return setCheckoutFieldError(field, /^01\d{9}$/.test(value) ? '' : 'Enter an 11-digit mobile number using digits only.');
  }

  if (field.dataset.checkoutRule === 'email') {
    const standardEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return setCheckoutFieldError(field, standardEmail.test(value) ? '' : 'Enter a valid email address, for example name@example.com.');
  }

  return setCheckoutFieldError(field);
}

function setupCheckout() {
  const form = $('#checkout-form'); if (!form) return;
  const checkoutFields = $$('[data-checkout-rule]', form);
  checkoutFields.forEach(field => {
    const validateWhenTouched = () => {
      if (field.dataset.touched === 'true') validateCheckoutField(field);
    };
    field.addEventListener('blur', () => { field.dataset.touched = 'true'; validateCheckoutField(field); });
    field.addEventListener('input', validateWhenTouched);
    field.addEventListener('change', validateWhenTouched);
  });
  $('#place-order')?.addEventListener('click', () => {
    if (!cart().length) return;
    checkoutFields.forEach(field => { field.dataset.touched = 'true'; validateCheckoutField(field); });
    const firstInvalidField = checkoutFields.find(field => !field.validity.valid);
    if (firstInvalidField) { firstInvalidField.focus(); return; }
    const profile = Object.fromEntries(new FormData(form));
    profile.name = profile.name.trim(); profile.email = profile.email.trim(); profile.phone = profile.phone.trim();
    const order = createOrder(profile);
    const orders = orderList(); orders.unshift(order); saveOrderList(orders);
    localStorage.setItem(CURRENT_ORDER_KEY, order.id);
    saveCart([]); notify('Order placed successfully.');
    setTimeout(() => { window.location.href = `order-status.html?order=${encodeURIComponent(order.id)}`; }, 700);
  });
  $('#apply-discount')?.addEventListener('click', () => {
    const field = $('#discount-code');
    notify(field.value.trim().toUpperCase() === 'WELCOME' ? 'WELCOME discount applied.' : 'Try code WELCOME for this demo.');
  });
}

function profileData() {
  try { return JSON.parse(localStorage.getItem('gadgethub-profile')) || {}; } catch { return {}; }
}
function populateProfileIdentity() {
  const profile = profileData(); const name = [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'Name';
  $$('[data-user-name], [data-profile-title]').forEach(node => node.textContent = name);
  $$('[data-profile-email]').forEach(node => node.textContent = profile.email || 'email@example.com');
}

function setProfileFieldError(field, message = '') {
  const error = $(`#${field.id}-error`);
  field.setCustomValidity(message);
  field.classList.toggle('is-invalid', Boolean(message));
  field.setAttribute('aria-invalid', String(Boolean(message)));
  if (error) error.textContent = message;
  return !message;
}

function validateProfileField(field) {
  const value = field.value.trim();
  const label = field.closest('.field')?.querySelector('label')?.textContent || 'This field';

  if (!value) return setProfileFieldError(field, `${label} is required.`);

  if (field.dataset.profileRule === 'name') {
    const lettersOnly = /^[\p{L}\p{M}]+(?:\s+[\p{L}\p{M}]+)*$/u;
    return setProfileFieldError(field, lettersOnly.test(value) ? '' : 'Name cannot contain numbers or symbols.');
  }

  if (field.dataset.profileRule === 'phone') {
    if (!value.startsWith('01')) return setProfileFieldError(field, 'Phone number must start with 01.');
    return setProfileFieldError(field, /^01\d{9}$/.test(value) ? '' : 'Enter an 11-digit mobile number using digits only.');
  }

  if (field.dataset.profileRule === 'email') {
    const standardEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return setProfileFieldError(field, standardEmail.test(value) ? '' : 'Enter a valid email address, for example name@example.com.');
  }

  return setProfileFieldError(field);
}

function setupProfile() {
  const form = $('#profile-form'); if (!form) return;
  const profile = profileData();
  Object.entries(profile).forEach(([key, value]) => { const field = form.elements[key]; if (field) field.value = value; });
  $('#address-value').textContent = profile.address || $('#address-value').textContent;
  const profileFields = $$('[data-profile-rule]', form);
  profileFields.forEach(field => {
    field.addEventListener('blur', () => { field.dataset.touched = 'true'; validateProfileField(field); });
    field.addEventListener('input', () => {
      if (field.dataset.touched === 'true') validateProfileField(field);
    });
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    profileFields.forEach(field => { field.dataset.touched = 'true'; validateProfileField(field); });
    const firstInvalidField = profileFields.find(field => !field.validity.valid);
    if (firstInvalidField) { firstInvalidField.focus(); return; }
    const data = Object.fromEntries(new FormData(form));
    data.firstName = data.firstName.trim(); data.lastName = data.lastName.trim();
    data.email = data.email.trim(); data.phone = data.phone.trim(); data.address = $('#address-input').value;
    localStorage.setItem('gadgethub-profile', JSON.stringify(data)); populateProfileIdentity(); notify('Your profile changes have been saved.');
  });
  $('#edit-address')?.addEventListener('click', () => {
    const input = $('#address-input'); input.hidden = !input.hidden;
    if (!input.hidden) { input.focus(); input.select(); }
    input.addEventListener('input', () => $('#address-value').textContent = input.value, { once: false });
  });
  $('#photo-input')?.addEventListener('change', event => {
    const file = event.target.files?.[0]; if (!file) return;
    const reader = new FileReader(); reader.onload = () => { $('.profile-avatar').style.background = `center/cover no-repeat url("${reader.result}")`; notify('Photo preview updated.'); }; reader.readAsDataURL(file);
  });
}

function setupSupport() {
  const form = $('#support-form'); if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault(); if (!form.reportValidity()) return;
    const topic = $('#topic').value;
    const id = Math.floor(1050 + Math.random() * 900);
    $('#tickets').insertAdjacentHTML('afterbegin', `<article class="ticket"><div><strong>#SUP-${id} · ${topic}</strong><p>Just now</p></div><span class="status">In progress</span></article>`);
    form.reset(); notify('Your support request has been sent.');
  });
}

document.addEventListener('click', event => {
  const add = event.target.closest('.add-cart'); if (add) { addToCart(add.dataset.id); return; }
  const cancel = event.target.closest('[data-cancel-order]'); if (cancel) { cancelOrder(cancel.dataset.cancelOrder); return; }
  const control = event.target.closest('[data-action]'); if (!control) return;
  const { action, id } = control.dataset;
  if (action === 'increase') updateQuantity(id, 1);
  if (action === 'decrease') updateQuantity(id, -1);
  if (action === 'remove') removeFromCart(id);
});

document.addEventListener('DOMContentLoaded', () => {
  setNav(); updateCartCount(); populateProfileIdentity(); renderCart(); renderCheckout(); renderProductCatalog(); renderOrderHistory(); renderDashboardOrders(); renderOrderStatus();
  setupProductFilters(); setupOrderFilters(); setupCheckout(); setupProfile(); setupSupport();
});
