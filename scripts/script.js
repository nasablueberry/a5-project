// ==========================
// Spinner Utilities
// ==========================
const showSpinner = () => {
  const spinnerEl = document.getElementById("loading-spinner");
  if (!spinnerEl) return;
  spinnerEl.classList.remove("hidden");
  spinnerEl.classList.add("flex");
};

const hideSpinner = () => {
  const spinnerEl = document.getElementById("loading-spinner");
  if (!spinnerEl) return;
  spinnerEl.classList.add("hidden");
  spinnerEl.classList.remove("flex");
};

// ==========================
// Plant Details Modal
// ==========================
const openPlantModal = async (plantId) => {
  try {
    showSpinner();
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`);
    const json = await res.json();
    const plant = json.plants;

    const modalEl = document.getElementById("plant-modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
      <div class="modal-box max-w-5xl">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="lg:w-1/2">
            <img src="${plant.image}" alt="${plant.name}" class="w-full h-96 object-cover rounded-lg shadow-lg">
          </div>
          <div class="lg:w-1/2 space-y-4">
            <div>
              <h3 class="font-bold text-3xl text-[#15803D] mb-2">${plant.name}</h3>
              <div class="badge bg-[#DCFCE7] text-[#15803D] py-3 px-4 text-sm font-semibold rounded-full">${plant.category}</div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-lg text-gray-800 mb-2">🌿 Description</h4>
              <p class="text-gray-600 leading-relaxed">${plant.description}</p>
            </div>
            <div class="bg-[#CFF0DC] p-4 rounded-lg">
              <h4 class="font-semibold text-lg text-[#15803D] mb-2">💰 Pricing Information</h4>
              <p class="font-bold text-3xl text-[#15803D]">৳${plant.price}</p>
              <p class="text-sm text-gray-600 mt-1">Per tree (including planting support)</p>
            </div>
            <div class="bg-[#15803D] text-white p-4 rounded-lg">
              <h4 class="font-semibold text-lg mb-2">🌱 Why Plant This Tree?</h4>
              <ul class="text-sm space-y-1">
                <li>• Contributes to environmental conservation</li>
                <li>• Helps combat climate change</li>
                <li>• Supports local ecosystems</li>
                <li>• Creates a greener future for generations</li>
              </ul>
            </div>
            <button onclick="addToCart('plant-id-${plant.id}')" class="btn bg-[#15803D] text-white w-full rounded-full text-lg py-3 hover:bg-[#3C8A5A] transition-all duration-300">
              🛒 Add to Cart - Make a Difference!
            </button>
          </div>
        </div>
      </div>
    `;
    modalEl.showModal();
  } catch (err) {
    console.error("Failed to load plant details:", err);
  } finally {
    hideSpinner();
  }
};

// ==========================
// Categories
// ==========================
const fetchCategories = async () => {
  try {
    showSpinner();
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    displayCategories(data.categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
  } finally {
    hideSpinner();
  }
};

const displayCategories = (categories) => {
  const listEl = document.getElementById("categories-list");
  listEl.innerHTML = `<p id="category-0" class="text-white bg-[#15803D] rounded-sm p-2 cursor-pointer transition-all duration-300 hover:bg-[#3C8A5A] hover:scale-105">All Trees</p>`;
  categories.forEach(cat => {
    listEl.innerHTML += `
      <p id="category-${cat.id}" class="d-sm p-2 rounded-sm cursor-pointer transition-all duration-300 hover:bg-[#15803D] hover:text-white hover:scale-105">
        ${cat.category_name}
      </p>
    `;
  });
};

// ==========================
// Plants
// ==========================
const fetchAllPlants = async () => {
  try {
    showSpinner();
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    displayPlants(data.plants);
  } catch (err) {
    console.error("Error fetching plants:", err);
  } finally {
    hideSpinner();
  }
};

const displayPlants = (plants) => {
  const container = document.getElementById("single-plant-card");
  container.innerHTML = "";

  plants.forEach(plant => {
    container.innerHTML += `
      <div class="card bg-base-100 shadow-sm">
        <figure>
          <img src="${plant.image}" alt="${plant.name}" class="w-[316px] h-[180px] object-cover rounded-sm" loading="lazy"/>
        </figure>
        <div class="card-body gap-2">
          <h2 class="card-title cursor-pointer hover:text-[#15803D]" onclick="openPlantModal(${plant.id})">${plant.name}</h2>
          <p class="text-[#00000080] overflow-hidden h-10">${plant.description}</p>
          <div class="flex items-center justify-between">
            <div class="badge bg-[#DCFCE7] text-[#15803D] py-2 px-3">${plant.category}</div>
            <div><p class="font-bold">৳${plant.price}</p></div>
          </div>
          <div class="card-actions justify-end">
            <button id="plant-id-${plant.id}" class="btn bg-[#15803D] text-white w-full rounded-full mt-4 hover:bg-[#3C8A5A] add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });

  [...document.getElementsByClassName("add-to-cart")].forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      addToCart(btn.id);
    });
  });
};

// ==========================
// Load by Category
// ==========================
const fetchPlantsByCategory = async (catId) => {
  try {
    showSpinner();
    if (catId === "0") {
      fetchAllPlants();
    } else {
      const res = await fetch(`https://openapi.programming-hero.com/api/category/${catId}`);
      const data = await res.json();
      displayPlants(data.plants);
    }
  } catch (err) {
    console.error("Error loading plants by category:", err);
  } finally {
    hideSpinner();
  }
};

// ==========================
// Category Click Handler
// ==========================
document.getElementById("categories-list").addEventListener("click", e => {
  if (e.target.tagName !== "P") return;

  const allCats = document.querySelectorAll("#categories-list p");
  allCats.forEach(p => {
    p.classList.remove("text-white", "bg-[#15803D]", "rounded-sm");
    p.classList.add("d-sm");
  });

  e.target.classList.add("text-white", "bg-[#15803D]", "rounded-sm");
  e.target.classList.remove("d-sm");

  const catId = e.target.id.split("-")[1];
  fetchPlantsByCategory(catId);
});

// ==========================
// Add to Cart
// ==========================
const addToCart = async (btnId) => {
  try {
    showSpinner();
    const plantId = btnId.split("-")[2];
    const res = await fetch(`https://openapi.programming-hero.com/api/plant/${plantId}`);
    const json = await res.json();
    const plant = json.plants;

    const cart = document.getElementById("cart-container");
    const existingItem = document.getElementById(`cart-item-${plant.id}`);

    if (existingItem) {
      const div = existingItem.closest(".flex.items-center.justify-between");
      const qtySpan = div.querySelector("p span:nth-child(2)");
      const newQty = parseInt(qtySpan.textContent) + 1;
      qtySpan.textContent = newQty;

      const totalEl = document.getElementById("cart-total-price");
      totalEl.textContent = parseFloat(totalEl.textContent || 0) + plant.price;

      alert(`🌱 "${plant.name}" quantity updated! New Quantity: ${newQty}`);
    } else {
      cart.innerHTML += `
        <div class="flex items-center justify-between bg-[#DCFCE790] p-4 rounded-sm">
          <div class="gap-y-1 flex flex-col">
            <h4 class="font-semibold">${plant.name}</h4>
            <p class="text-[#00000080]">৳<span>${plant.price}</span>x<span>1</span></p>
          </div>
          <div><span id="cart-item-${plant.id}"><i class="fa-solid fa-xmark"></i></span></div>
        </div>
      `;
      const totalEl = document.getElementById("cart-total-price");
      totalEl.textContent = parseFloat(totalEl.textContent || 0) + plant.price;

      alert(`🌿 "${plant.name}" added to cart! Total Cart Value: ৳${totalEl.textContent}`);
    }
  } catch (err) {
    console.error("Add to cart error:", err);
    alert("❌ Failed to add item. Try again.");
  } finally {
    hideSpinner();
  }
};

// ==========================
// Remove from Cart
// ==========================
document.getElementById("cart-container").addEventListener("click", e => {
  const span = e.target.closest('span[id^="cart-item-"]');
  if (!span) return;

  const div = span.closest(".flex.items-center.justify-between");
  const price = parseFloat(div.querySelector("span")?.textContent || 0);
  const qty = parseInt(div.querySelector("p span:nth-child(2)")?.textContent || 1);
  const total = price * qty;

  const totalEl = document.getElementById("cart-total-price");
  totalEl.textContent = (parseFloat(totalEl.textContent || 0) - total).toFixed(2);

  div.remove();
  setTimeout(() => alert(`🗑️ Item removed from cart! Refunded: ৳${total.toFixed(2)}`), 200);
});

// ==========================
// Initialize
// ==========================
fetchCategories();
fetchAllPlants();
