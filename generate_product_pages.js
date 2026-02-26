const fs = require('fs');
const path = require('path');
const vm = require('vm');

const INDEX_JS = path.join(__dirname, 'Index.js');
const OUT_DIR = path.join(__dirname, 'products');
const DOMAIN = 'https://example.com'; // substitua pelo seu domínio

function readProdutos() {
  const content = fs.readFileSync(INDEX_JS, 'utf8');
  const m = content.match(/const\s+produtos\s*=\s*(\[[\s\S]*?\]);/m);
  if (!m) throw new Error('Array produtos não encontrado em Index.js');
  const arrCode = m[1];
  // Executa em VM para avaliar o array JS
  const script = new vm.Script('(' + arrCode + ')');
  const produtos = script.runInNewContext();
  return produtos;
}

function ensureDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);
}

function makeDescription(p, i) {
  if (p.descricao) return p.descricao;
  return `Produto ${p.nome} da categoria ${p.categoria}. Disponível para ${p.publico}. Preço: ${p.preco}.`;
}

function generate() {
  const produtos = readProdutos();
  ensureDir();
  const urls = [];

  produtos.forEach((p, i) => {
    const idx = i + 1;
    const filename = path.join(OUT_DIR, `product-${idx}.html`);
    const title = `${p.nome} — ${p.categoria}`;
    const desc = makeDescription(p, i);
    const img = p.img ? p.img.replace(/ /g, '%20') : '';
    const html = `<!doctype html>
<html lang="pt">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(desc)}">
  <link rel="canonical" href="${DOMAIN}/products/product-${idx}.html">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(desc)}">
  <meta property="og:image" content="${DOMAIN}/${img}">
  <meta property="og:type" content="product">
  <style>body{font-family:Arial,Helvetica,sans-serif;background:#f6f6f6;color:#111;padding:20px} .card{background:#fff;padding:20px;border-radius:8px;max-width:900px;margin:auto} img{max-width:300px}</style>
</head>
<body>
  <div class="card">
    <h1>${escapeHtml(p.nome)}</h1>
    <img src="${img}" alt="${escapeHtml(p.nome)}">
    <p><strong>Preço:</strong> ${escapeHtml(String(p.preco))}</p>
    <p><strong>Categoria:</strong> ${escapeHtml(p.categoria)}</p>
    <p><strong>Para:</strong> ${escapeHtml(p.publico)}</p>
    <p>${escapeHtml(desc)}</p>
    <p><a href="https://wa.me/244932563665?text=${encodeURIComponent('Quero comprar ' + p.nome)}" target="_blank">Comprar pelo WhatsApp</a></p>
    <p><a href="/">Voltar à loja</a></p>
  </div>
</body>
</html>`;

    fs.writeFileSync(filename, html, 'utf8');
    urls.push(`${DOMAIN}/products/product-${idx}.html`);
  });

  // atualizar sitemap.xml
  const sitemapPath = path.join(__dirname, 'sitemap.xml');
  const now = new Date().toISOString().slice(0, 10);
  const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  sitemap.push('  <url>');
  sitemap.push(`    <loc>${DOMAIN}/</loc>`);
  sitemap.push(`    <lastmod>${now}</lastmod>`);
  sitemap.push('    <priority>1.00</priority>');
  sitemap.push('  </url>');
  urls.forEach(u => {
    sitemap.push('  <url>');
    sitemap.push(`    <loc>${u}</loc>`);
    sitemap.push(`    <lastmod>${now}</lastmod>`);
    sitemap.push('    <priority>0.64</priority>');
    sitemap.push('  </url>');
  });
  sitemap.push('</urlset>');
  fs.writeFileSync(sitemapPath, sitemap.join('\n'), 'utf8');

  console.log('Geradas', produtos.length, 'páginas em', OUT_DIR);
  console.log('Sitemap atualizado em', sitemapPath);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

generate();
