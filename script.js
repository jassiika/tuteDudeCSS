const PRICE = 1334;
const TAX_RATE = 0.18;
const COUPON = "THALA7"; // 10% off

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const inr = n => "₹" + Math.round(n).toLocaleString("en-IN");

// Cart is saved in localStorage so it survives a refresh
let cart = JSON.parse(localStorage.getItem("thala7-cart") || "0") || 0; // quantity of the one product
let coupon = localStorage.getItem("thala7-coupon") || "";
const save = () => {
  localStorage.setItem("thala7-cart", JSON.stringify(cart));
  localStorage.setItem("thala7-coupon", coupon);
};

/* ---------- Page switching (hash based) ---------- */
function showPage() {
  const id = (location.hash || "#home").slice(1);
  const target = document.getElementById(id) ? id : "home";
  $$(".page").forEach(p => p.classList.toggle("active", p.id === target));
  if (target === "checkout") {
    $("#success").classList.add("hidden");
    $(".checkout").classList.remove("hidden");
  }
  window.scrollTo(0, 0);
  render();
}
window.addEventListener("hashchange", showPage);

/* ---------- Totals ---------- */
function totals() {
  const sub = cart * PRICE;
  const tax = sub * TAX_RATE;
  const disc = coupon === COUPON ? sub * 0.1 : 0;
  return { sub, tax, disc, total: sub + tax - disc };
}

function render() {
  const t = totals();
  $("#cartCount").textContent = cart;

  // Cart table
  const body = $("#cartBody");
  body.innerHTML = cart
    ? `<tr>
        <td>Seven By M.S.Dhoni W…</td>
        <td><span class="qty">
          <button data-q="-1" aria-label="Decrease">−</button>${cart}<button data-q="1" aria-label="Increase">+</button>
        </span></td>
        <td>${inr(t.sub)}</td>
        <td><button class="remove" data-remove aria-label="Remove item">✕</button></td>
      </tr>`
    : "";
  $("#emptyMsg").classList.toggle("hidden", cart > 0);

  // Summary cards (cart page + payment page)
  $$("[data-sub]").forEach(e => (e.textContent = inr(t.sub)));
  $$("[data-tax]").forEach(e => (e.textContent = inr(t.tax)));
  $$("[data-disc]").forEach(e => (e.textContent = t.disc ? "−" + inr(t.disc) : "₹0"));
  $$("[data-total]").forEach(e => (e.textContent = inr(t.total)));
  $$("[data-pay]").forEach(e => {
    e.textContent = "Pay Now " + inr(t.total);
    e.style.opacity = cart ? 1 : 0.5;
  });
  $$("#cartCoupon, #coCoupon").forEach(i => (i.value = coupon));
  $$(".coupon-msg").forEach(m => {
    m.textContent = coupon === COUPON ? "THALA7 applied: 10% off" : "";
    m.className = "coupon-msg" + (coupon === COUPON ? " ok" : "");
  });
}

/* ---------- Product page ---------- */
$("#addBtn").addEventListener("click", () => {
  cart += Number($("#qtySelect").value);
  save();
  location.hash = "#cart";
});

// Gallery: clicking a thumbnail changes the main image
$$(".thumb").forEach(btn =>
  btn.addEventListener("click", () => {
    $$(".thumb").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    $("#mainImg").style.transform = btn.dataset.style === "none" ? "" : btn.dataset.style;
  })
);

/* ---------- Cart page ---------- */
$("#cartBody").addEventListener("click", e => {
  if (e.target.dataset.q) cart = Math.max(1, cart + Number(e.target.dataset.q));
  if ("remove" in e.target.dataset) { cart = 0; coupon = ""; }
  save(); render();
});

// Coupon buttons (cart + payment page)
$$("[data-apply]").forEach(btn =>
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector("input");
    const code = input.value.trim().toUpperCase();
    coupon = code === COUPON ? code : "";
    save(); render();
    if (!coupon) {
      const msg = btn.closest(".card").querySelector(".coupon-msg");
      msg.textContent = "Invalid code. Try THALA7.";
      msg.className = "coupon-msg err";
    }
  })
);

// Cart "Pay Now" only works when the cart has items
$("a[data-pay]").addEventListener("click", e => { if (!cart) e.preventDefault(); });

/* ---------- Payment page ---------- */
$$(".tab").forEach(tab =>
  tab.addEventListener("click", () => {
    $$(".tab").forEach(t => t.classList.toggle("active", t === tab));
    $$(".tab-body").forEach(b => b.classList.toggle("hidden", b.id !== "tab-" + tab.dataset.tab));
  })
);

$("#payNow").addEventListener("click", () => {
  const email = $("#email");
  if (!cart) return;
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    email.style.borderColor = "#e5484d";
    email.focus();
    return;
  }
  email.style.borderColor = "";
  cart = 0; coupon = ""; save(); render();
  $(".checkout").classList.add("hidden");
  $("#success").classList.remove("hidden");
});

showPage();