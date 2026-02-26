// ===============================
// LISTA DE PRODUTOS
// ===============================
const produtos = [

  // ===============================
  // ROUPAS EM JPG
  // ===============================
  { img: "imagenspdt/roupa/JPG/foto (1).JPG", nome: "FATOSSSSS", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (2).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (3).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (4).JPG", nome: "T-SHIRT DO BARÇA", preco: "Negociável", categoria: "roupas", publico: "unissex" },
  { img: "imagenspdt/roupa/JPG/foto (5).JPG", nome: "JACKET PRETA", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (6).JPG", nome: "FATO BRANCO", preco: "Negociável", categoria: "roupas", publico: "femenino" },
  { img: "imagenspdt/roupa/JPG/foto (7).JPG", nome: "FATO", preco: "Negociável", categoria: "roupas", publico: "femenino" },
  { img: "imagenspdt/roupa/JPG/foto (8).JPG", nome: "JACKET PRETA", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (9).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (10).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (11).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (12).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (13).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (14).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (15).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (16).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (17).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (18).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (19).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (20).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (21).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (22).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (23).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (24).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/JPG/foto (25).JPG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },

  // ===============================
  // ROUPAS EM PNG
  // ===============================
  { img: "imagenspdt/roupa/PNG/foto (1).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (2).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (3).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (4).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (5).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (6).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (7).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (8).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (9).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (10).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (11).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (12).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (13).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (14).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (15).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (16).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (17).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (18).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (19).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (20).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (21).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (22).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (23).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  { img: "imagenspdt/roupa/PNG/foto (24).PNG", nome: "BLASE", preco: "Negociável", categoria: "roupas", publico: "masculino" },
  // ===============================

  // ACESSÓRIOS JPG
  // ===============================
  { img: "imagenspdt/acessorios/JPG/foto (1).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (2).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (3).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (4).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (5).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (6).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (7).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/JPG/foto (8).JPG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },
  // ===============================

  // ACESSÓRIOS PNG
  // ===============================
  { img: "imagenspdt/acessorios/PNG/foto (1).PNG", nome: "Relógio", preco: "25TT.000 Kz", categoria: "acessorios", publico: "unissex" },
  { img: "imagenspdt/acessorios/PNG/foto (2).PNG", nome: "Relógio", preco: "25.000 Kz", categoria: "acessorios", publico: "unissex" },

  // ===============================
  // CALÇADOS JPG
  // ===============================
  { img: "imagenspdt/calcados/JPG/foto (1).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (2).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (3).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (4).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (5).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (6).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (7).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (8).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (9).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (10).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (11).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (12).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (13).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (14).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (15).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (16).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (17).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (18).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (19).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/JPG/foto (20).JPG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },



  // ===============================
  // CALÇADOS
  // ===============================
  { img: "imagenspdt/calcados/foto (1).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (2).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (3).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (4).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (5).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (6).PNG", nome: "Sapato Unissex", preco: 0, categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (7).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (8).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (9).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (10).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (11).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (12).PNG", nome: "Sapato Unissex", preco: 0, categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (13).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (14).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (15).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (16).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (17).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (18).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (19).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (20).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (21).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (22).PNG", nome: "Tênis Masculino", preco: 0, categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (23).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (24).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (25).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (26).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (27).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (28).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (29).PNG", nome: "Sandália Feminina", preco: "Negociável", categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (30).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },
  { img: "imagenspdt/calcados/foto (31).PNG", nome: "Tênis Masculino", preco: "Negociável", categoria: "calcados", publico: "masculino" },
  { img: "imagenspdt/calcados/foto (32).PNG", nome: "Sandália Feminina", preco: 0, categoria: "calcados", publico: "feminino" },
  { img: "imagenspdt/calcados/foto (33).PNG", nome: "Sapato Unissex", preco: "Negociável", categoria: "calcados", publico: "unissex" },





  // ...adicione os outros produtos até 53 seguindo o mesmo padrão
];

// ===============================
// FUNÇÃO PARA MOSTRAR PRODUTOS
// ===============================
const lista = document.getElementById("lista-produtos");

function mostrarProdutos(filtroCategoria = "todos", filtroPublico = "todos", termoBusca = "") {
  lista.innerHTML = "";
  const termo = (termoBusca || '').toLowerCase();

  produtos.forEach((p, index) => {
    const categoriaBate = filtroCategoria.toLowerCase() === "todos" || p.categoria.toLowerCase() === filtroCategoria.toLowerCase();
    const publicoBate = filtroPublico.toLowerCase() === "todos" || filtroPublico.toLowerCase() === "unissex" || p.publico.toLowerCase() === filtroPublico.toLowerCase();
    const buscaBate = !termo || (p.nome && p.nome.toLowerCase().includes(termo)) || (p.descricao && p.descricao.toLowerCase().includes(termo));

    if (categoriaBate && publicoBate && buscaBate) {
      const card = document.createElement("div");
      card.className = "produto";

      card.innerHTML = `
        <img src="${p.img}" alt="${p.nome}" loading="lazy">
        <h3>${p.nome}</h3>
        <p class="preco">${p.preco}</p>
        <div class="produto-actions">
          <button style=" background: #D4AF37;" class="btn add-cart" data-index="${index}">Adicionar ao carrinho</button>
          <a style=" background: #D4AF37; color: black" class="btn whatsapp-buy"
             href="https:wa.me/244932563665?text=Quero%20comprar%20${encodeURIComponent(p.nome)}" target="_blank">
             Comprar no WhatsApp
          </a>
        </div>
        <a class="details-link" href="products/product-${index + 1}.html">Ver detalhes</a>
      `;
      lista.appendChild(card);
      // listener para adicionar ao carrinho
      const addBtn = card.querySelector('.add-cart');
      if (addBtn) addBtn.addEventListener('click', () => addToCart(index));
      // abrir modal ao clicar na imagem
      const imgEl = card.querySelector('img');
      if (imgEl) imgEl.addEventListener('click', () => openProductModal(index));
    }
  });
}

// Mostrar todos produtos ao carregar a página
mostrarProdutos();

// ===============================
// CARRINHO (localStorage)
// ===============================
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function addToCart(prodIndex) {
  const p = produtos[prodIndex];
  if (!p) return;
  const cart = getCart();
  const found = cart.find(i => i.index === prodIndex);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ index: prodIndex, nome: p.nome, preco: p.preco, img: p.img, qty: 1 });
  }
  saveCart(cart);
  alert('Adicionado ao carrinho: ' + p.nome);
}

function removeFromCart(itemIndex) {
  let cart = getCart();
  cart = cart.filter((c, i) => i !== itemIndex);
  saveCart(cart);
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + (i.qty || 0), 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function renderCart() {
  updateCartCount();
  const cart = getCart();
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;
  container.innerHTML = '';
  if (cart.length === 0) {
    container.innerHTML = '<p>Seu carrinho está vazio.</p>';
    if (totalEl) totalEl.textContent = '--';
    return;
  }
  cart.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.nome}">
      <div class="ci-info">
        <strong>${item.nome}</strong>
        <span>${item.preco}</span>
        <span>Qt: ${item.qty}</span>
        <button class="remove-item" data-i="${i}">Remover</button>
      </div>
    `;
    container.appendChild(div);
  });
  if (totalEl) {
    totalEl.textContent = cart.length + ' item(s)';
  }
  // attach remove listeners
  const removes = container.querySelectorAll('.remove-item');
  removes.forEach(btn => btn.addEventListener('click', e => {
    const idx = parseInt(btn.getAttribute('data-i'));
    removeFromCart(idx);
  }));
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;
  const hidden = sidebar.getAttribute('aria-hidden') === 'true';
  if (hidden) {
    sidebar.setAttribute('aria-hidden', 'false');
    sidebar.style.width = '320px';
  } else {
    sidebar.setAttribute('aria-hidden', 'true');
    sidebar.style.width = '0';
  }
}

// ===============================
// MODAL DE PRODUTO
// ===============================
function openProductModal(index) {
  const p = produtos[index];
  if (!p) return;
  const modal = document.getElementById('productModal');
  const img = document.getElementById('pm-img');
  const name = document.getElementById('pm-name');
  const price = document.getElementById('pm-price');
  const desc = document.getElementById('pm-desc');
  const add = document.getElementById('pm-add');
  const wa = document.getElementById('pm-whatsapp');
  if (img) img.src = p.img;
  if (name) name.textContent = p.nome;
  if (price) price.textContent = p.preco;
  if (desc) desc.textContent = p.descricao || 'Descrição não disponível.';
  if (add) {
    add.onclick = () => { addToCart(index); closeProductModal(); };
  }
  if (wa) wa.href = `https://wa.me/244932563665?text=${encodeURIComponent('Quero comprar ' + p.nome)}`;
  if (modal) {
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.setAttribute('aria-hidden', 'true');
}

// fechar com ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeProductModal();
});

// Checkout pelo WhatsApp: lista itens
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  const checkoutBtn = document.getElementById('checkout-btn');
  const clearBtn = document.getElementById('clear-cart');
  if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
    const cart = getCart();
    if (!cart || cart.length === 0) return alert('Carrinho vazio');
    let text = 'Olá, gostaria de comprar:%0A';
    cart.forEach(i => {
      text += `- ${i.nome} (qt ${i.qty}) - ${i.preco}%0A`;
    });
    const link = `https://wa.me/244932563665?text=${text}`;
    window.open(link, '_blank');
  });
  if (clearBtn) clearBtn.addEventListener('click', () => {
    localStorage.removeItem('cart');
    renderCart();
  });
  // ====== Busca e filtros na página ======
  const searchInput = document.getElementById('search-input');
  const selectCategoria = document.getElementById('filter-categoria');
  const selectPublico = document.getElementById('filter-publico');
  const clearFilters = document.getElementById('clear-filters');

  function aplicarFiltros() {
    const termo = searchInput ? searchInput.value.trim() : '';
    const cat = selectCategoria ? selectCategoria.value : 'todos';
    const pub = selectPublico ? selectPublico.value : 'todos';
    mostrarProdutos(cat, pub, termo);
  }

  if (searchInput) searchInput.addEventListener('input', aplicarFiltros);
  if (selectCategoria) selectCategoria.addEventListener('change', aplicarFiltros);
  if (selectPublico) selectPublico.addEventListener('change', aplicarFiltros);
  if (clearFilters) clearFilters.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (selectCategoria) selectCategoria.value = 'todos';
    if (selectPublico) selectPublico.value = 'todos';
    mostrarProdutos();
  });

  // aplica filtros iniciais
  aplicarFiltros();
});

// ===============================
// FILTRO PELO SIDEBAR
// ===============================
const linksSidebar = document.querySelectorAll(".sidebar a");

linksSidebar.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const categoria = link.closest("fieldset").querySelector("h2").textContent.toLowerCase();
    let publico = link.textContent.toLowerCase();

    // Ajuste dos nomes
    if (publico === "ambos") publico = "unissex";
    else if (publico === "masculinas" || publico === "masculinos") publico = "masculino";
    else if (publico === "femeninas" || publico === "femininos") publico = "femenino";

    mostrarProdutos(categoria, publico);
    closeNav();
  });
});

// ===============================
// BOTÃO HOME
// ===============================
const btnHome = document.querySelector("header a[href='#']"); // assumindo que o HOME é esse link
if (btnHome) {
  btnHome.addEventListener("click", e => {
    e.preventDefault();
    mostrarProdutos(); // mostra todos
  });
}

// ===============================
// ABRIR E FECHAR SIDEBAR
// ===============================
function openNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "250px";
}

function closeNav() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar) sidebar.style.width = "0";
}






