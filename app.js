// ==========================================
// GALAXY COMPUTERS
// PREMIUM DIGITAL SHOWROOM
// ==========================================


// ==========================================
// CONFIGURATION
// ==========================================

const WHATSAPP_NUMBER = "255624057652";


// ==========================================
// PRODUCT DATABASE
// ==========================================

const products = [

    // LAPTOPS
   {
    id: 1,
    name: "Acer Laptop 1",
    category: "Laptops",

    description: "Acer laptop suitable for business, study and everyday computing.",

    price: "Available in showroom",

    specs: {
        processor: "—",
        ram: "—",
        storage: "—",
        display: "—",
        graphics: "—",
        os: "—"
    },

    image: "pictures/acer-laptop-1.jpg",
    icon: "💻"
},
    {
        id: 2,
        name: "Acer Laptop 2",
        category: "Laptops",
        description: "Reliable Acer laptop with a modern design and dependable performance.",
        price: "Available in showroom",
        image: "pictures/acer-laptop-2.jpg",
        icon: "💻"
    },
    {
        id: 3,
        name: "Acer Aspire 3",
        category: "Laptops",
        description: "Acer Aspire laptop designed for everyday productivity and study.",
        price: "Available in showroom",
        image: "pictures/acer-laptop-3.jpg",
        icon: "💻"
    },
    {
        id: 4,
        name: "Acer Laptop 4",
        category: "Laptops",
        description: "Slim Acer laptop for professional and everyday use.",
        price: "Available in showroom",
        image: "pictures/acer-laptop-4.jpg",
        icon: "💻"
    },
    {
        id: 5,
        name: "Dell Laptop",
        category: "Laptops",
        description: "Professional Dell laptop for business and productivity.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-2.jpg",
        icon: "💻"
    },
    {
        id: 6,
        name: "Dell Laptop 2",
        category: "Laptops",
        description: "Reliable Dell laptop suitable for office and everyday computing.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-9.jpg",
        icon: "💻"
    },
    {
        id: 7,
        name: "Dell Laptop 3",
        category: "Laptops",
        description: "Modern Dell laptop designed for professional productivity.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-3.jpg",
        icon: "💻"
    },
    {
        id: 8,
        name: "Dell Laptop 4",
        category: "Laptops",
        description: "Premium Dell laptop for work, study and everyday use.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-4.jpg",
        icon: "💻"
    },
    {
        id: 9,
        name: "HP Laptop",
        category: "Laptops",
        description: "HP laptop suitable for office work, study and everyday computing.",
        price: "Available in showroom",
        image: "pictures/hp-laptop-1.jpg",
        icon: "💻"
    },
    {
        id: 10,
        name: "HP Laptop 2",
        category: "Laptops",
        description: "Modern HP laptop designed for productivity and business.",
        price: "Available in showroom",
        image: "pictures/hp-laptop-2.jpg",
        icon: "💻"
    },

    // DESKTOPS
    {
        id: 11,
        name: "Professional Desktop PC",
        category: "Desktops",
        description: "Reliable desktop solution for offices and businesses.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-1.jpg",
        icon: "🖥️"
    },
    {
        id: 12,
        name: "Business Desktop",
        category: "Desktops",
        description: "Desktop computer designed for professional office environments.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-2.jpg",
        icon: "🖥️"
    },
    {
        id: 13,
        name: "Office Desktop PC",
        category: "Desktops",
        description: "Dependable desktop solution for everyday business operations.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-3.jpg",
        icon: "🖥️"
    },
    {
        id: 14,
        name: "POS Computer",
        category: "Desktops",
        description: "Reliable computer solution for point-of-sale environments.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-1.jpg",
        icon: "🖥️"
    },
    {
        id: 15,
        name: "Professional POS",
        category: "Desktops",
        description: "Business-ready POS computer for shops and organizations.",
        price: "Available in showroom",
        image: "pictures/dell-laptop-2.jpg",
        icon: "🖥️"
    },

    // PRINTERS
    {
        id: 16,
        name: "Epson Printer 1",
        category: "Printers",
        description: "Efficient Epson printer for home, school and business use.",
        price: "Available in showroom",
        image: "pictures/epson-printer-1.jpg",
        icon: "🖨️"
    },
    {
        id: 17,
        name: "Epson Printer 2",
        category: "Printers",
        description: "Reliable Epson printing solution with quality output.",
        price: "Available in showroom",
        image: "pictures/epson-printer-2.jpg",
        icon: "🖨️"
    },
    {
        id: 18,
        name: "Epson Printer 3",
        category: "Printers",
        description: "Professional Epson printer for everyday business printing.",
        price: "Available in showroom",
        image: "pictures/epson-printer-3.jpg",
        icon: "🖨️"
    },
    {
        id: 19,
        name: "Business Printer",
        category: "Printers",
        description: "Professional printer solution for offices and businesses.",
        price: "Available in showroom",
        image: "pictures/epson-printer-1.jpg",
        icon: "🖨️"
    },
    {
        id: 20,
        name: "Office Printer",
        category: "Printers",
        description: "Reliable printing solution for daily office requirements.",
        price: "Available in showroom",
        image: "pictures/epson-printer-2.jpg",
        icon: "🖨️"
    },

    // PHOTOCOPIERS
    {
        id: 21,
        name: "Canon Photocopier",
        category: "Photocopiers",
        description: "Professional photocopier for offices, schools and organizations.",
        price: "Available in showroom",
        image: "pictures/epson-printer-3.jpg",
        icon: "▣"
    },
    {
        id: 22,
        name: "Business Photocopier",
        category: "Photocopiers",
        description: "High-performance photocopying solution for business use.",
        price: "Available in showroom",
        image: "pictures/epson-printer-1.jpg",
        icon: "▣"
    },
    {
        id: 23,
        name: "Office Photocopier",
        category: "Photocopiers",
        description: "Reliable photocopying machine for everyday document work.",
        price: "Available in showroom",
        image: "pictures/epson-printer-2.jpg",
        icon: "▣"
    },
    {
        id: 24,
        name: "Professional Copier",
        category: "Photocopiers",
        description: "Professional copier designed for high-volume document workflows.",
        price: "Available in showroom",
        image: "pictures/epson-printer-3.jpg",
        icon: "▣"
    },
    {
        id: 25,
        name: "Multifunction Copier",
        category: "Photocopiers",
        description: "Multifunction document solution for modern offices.",
        price: "Available in showroom",
        image: "pictures/epson-printer-1.jpg",
        icon: "▣"
    },

    // TONERS
    {
        id: 26,
        name: "Anycolor Toner 1",
        category: "Toners",
        description: "Anycolor toner cartridge for reliable document printing.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-1.jpg",
        icon: "◈"
    },
    {
        id: 27,
        name: "Anycolor Toner 2",
        category: "Toners",
        description: "Quality Anycolor toner cartridge for professional printing.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-2.jpg",
        icon: "◈"
    },
    {
        id: 28,
        name: "Anycolor Toner 3",
        category: "Toners",
        description: "Reliable Anycolor toner available for different printer models.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-3.jpg",
        icon: "◈"
    },
    {
        id: 29,
        name: "Anycolor Toner 4",
        category: "Toners",
        description: "Professional Anycolor toner cartridge for quality printing.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-4.jpg",
        icon: "◈"
    },
    {
        id: 30,
        name: "G-Print Toner",
        category: "Toners",
        description: "Quality G-Print toner cartridge for reliable printing.",
        price: "Available in showroom",
        image: "pictures/gprint-toner-1.jpg",
        icon: "◈"
    },

    // ACCESSORIES
    {
        id: 31,
        name: "Epson Ink",
        category: "Accessories",
        description: "Epson ink bottles for compatible EcoTank printers.",
        price: "Available in showroom",
        image: "pictures/epson-ink-1.jpg",
        icon: "🧴"
    },
    {
        id: 32,
        name: "Epson Ink Set",
        category: "Accessories",
        description: "Epson ink bottles available for compatible printer models.",
        price: "Available in showroom",
        image: "pictures/epson-ink-2.jpg",
        icon: "🧴"
    },
    {
        id: 33,
        name: "Computer Accessories",
        category: "Accessories",
        description: "Keyboards, mice, bags, power banks and other computer accessories.",
        price: "Available in showroom",
        image: "pictures/epson-ink-1.jpg",
        icon: "🎧"
    },
    {
        id: 34,
        name: "Laptop Accessories",
        category: "Accessories",
        description: "Essential accessories for laptops and computers.",
        price: "Available in showroom",
        image: "pictures/epson-ink-2.jpg",
        icon: "💼"
    },
    {
        id: 35,
        name: "Computer Essentials",
        category: "Accessories",
        description: "Useful computer accessories for home, office and business.",
        price: "Available in showroom",
        image: "pictures/epson-ink-1.jpg",
        icon: "⌨️"
    },

    // NETWORKING
    {
        id: 36,
        name: "Wireless Router",
        category: "Networking",
        description: "Reliable wireless networking solution for home and office.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-1.jpg",
        icon: "◉"
    },
    {
        id: 37,
        name: "Network Switch",
        category: "Networking",
        description: "Professional network switch for connecting multiple devices.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-2.jpg",
        icon: "◉"
    },
    {
        id: 38,
        name: "Wi-Fi Adapter",
        category: "Networking",
        description: "Wireless adapter for convenient computer connectivity.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-3.jpg",
        icon: "◉"
    },
    {
        id: 39,
        name: "Networking Kit",
        category: "Networking",
        description: "Networking equipment for offices and business environments.",
        price: "Available in showroom",
        image: "pictures/anycolor-toner-4.jpg",
        icon: "◉"
    },
    {
        id: 40,
        name: "Network Solution",
        category: "Networking",
        description: "Professional networking equipment and connectivity solutions.",
        price: "Available in showroom",
        image: "pictures/gprint-toner-1.jpg",
        icon: "◉"
    }
];


// ==========================================
// APPLICATION STATE
// ==========================================

let currentProduct = null;
let heroIndex = 0;
let favorites = new Set();
let cartCount = 0;


// ==========================================
// ELEMENTS
// ==========================================

const productGrid = document.getElementById("productGrid");
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const modalFavorite = document.getElementById("modalFavorite");
const modalPrice = document.getElementById("modalPrice");
const modalCategory = document.getElementById("modalCategory");
const modalStatus = document.getElementById("modalStatus");

const specProcessor = document.getElementById("specProcessor");
const specRam = document.getElementById("specRam");
const specStorage = document.getElementById("specStorage");
const specDisplay = document.getElementById("specDisplay");
const specGraphics = document.getElementById("specGraphics");
const specOs = document.getElementById("specOs");

const productCounter = document.getElementById("productCounter");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const heroName = document.getElementById("heroProductName");
const heroDescription = document.getElementById("heroProductDesc");


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    let toast = document.getElementById("galaxyToast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "galaxyToast";

        Object.assign(toast.style, {
            position: "fixed",
            left: "50%",
            bottom: "30px",
            transform: "translateX(-50%) translateY(20px)",
            padding: "13px 22px",
            borderRadius: "30px",
            background: "rgba(255,255,255,.94)",
            border: "1px solid rgba(201,161,90,.35)",
            backdropFilter: "blur(20px)",
            webkitBackdropFilter: "blur(20px)",
            boxShadow: "0 15px 40px rgba(50,40,25,.14)",
            color: "#202020",
            fontSize: "13px",
            fontWeight: "600",
            zIndex: "9999",
            opacity: "0",
            transition: "all .3s ease"
        });

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateX(-50%) translateY(0)";
    });

    clearTimeout(toast.hideTimer);

    toast.hideTimer = setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform =
            "translateX(-50%) translateY(20px)";
    }, 2500);
}


// ==========================================
// PRODUCT IMAGE
// ==========================================

function getProductImage(product) {

    if (!product.image) {

        return `
            <div class="product-image-fallback">
                ${product.icon}
            </div>
        `;
    }

    return `
        <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            style="
                width:100%;
                height:100%;
                object-fit:contain;
                display:block;
                border-radius:18px;
            "
            onerror="
                this.style.display='none';
                this.parentElement
                    .querySelector('.image-fallback')
                    .style.display='flex';
            "
        >

        <span
            class="image-fallback"
            style="
                display:none;
                width:100%;
                height:100%;
                align-items:center;
                justify-content:center;
                font-size:48px;
            "
        >
            ${product.icon}
        </span>
    `;
}


// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(list = products) {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (list.length === 0) {

        productGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:40px;
                text-align:center;
                color:#77746d;
            ">
                No products found.
            </div>
        `;

        return;
    }

    list.forEach(product => {

        const card = document.createElement("article");

        card.className = "product-card";

        const isFavorite = favorites.has(product.id);

        card.innerHTML = `
            <div
                class="product-image"
                style="
                    position:relative;
                    overflow:hidden;
                "
            >
                ${getProductImage(product)}
            </div>

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <div class="product-bottom">

                <span class="product-price">
                    ${product.price}
                </span>

                <button
                    class="product-view"
                    type="button"
                >
                    View →
                </button>

            </div>

            <button
                type="button"
                class="card-favorite"
                aria-label="Favourite ${product.name}"
                style="
                    position:absolute;
                    top:22px;
                    right:22px;
                    width:32px;
                    height:32px;
                    border-radius:50%;
                    border:1px solid rgba(255,255,255,.8);
                    background:rgba(255,255,255,.7);
                    cursor:pointer;
                    color:${isFavorite ? "#c9a15a" : "#777"};
                    font-size:17px;
                    z-index:5;
                "
            >
                ${isFavorite ? "♥" : "♡"}
            </button>
        `;

        card.style.position = "relative";

        card.addEventListener("click", event => {

            if (event.target.closest(".card-favorite")) {
                return;
            }

            openProduct(product);
        });

        const favoriteButton =
            card.querySelector(".card-favorite");

        favoriteButton.addEventListener("click", event => {

            event.stopPropagation();

            toggleFavorite(product);

            renderProducts(list);
        });

        productGrid.appendChild(card);
    });
}


// ==========================================
// PRODUCT MODAL
// ==========================================

function openProduct(product, navigationList = products) {

   if (!product) return;

currentProduct = product;
productNavigationList = navigationList;

    if (modalTitle) {
        modalTitle.textContent = product.name;
    }

    if (modalDescription) {
        modalDescription.textContent = product.description;
    }
    // PRODUCT DETAILS
if (modalPrice) {
    modalPrice.textContent = product.price || "Price on request";
}

if (modalCategory) {
    modalCategory.textContent = (product.category || "PRODUCT").toUpperCase();
}

if (modalStatus) {
    modalStatus.textContent = product.status || "AVAILABLE";
}

// SPECIFICATIONS
const specs = product.specs || {};

if (specProcessor) {
    specProcessor.textContent = specs.processor || "—";
}

if (specRam) {
    specRam.textContent = specs.ram || "—";
}

if (specStorage) {
    specStorage.textContent = specs.storage || "—";
}

if (specDisplay) {
    specDisplay.textContent = specs.display || "—";
}

if (specGraphics) {
    specGraphics.textContent = specs.graphics || "—";
}

if (specOs) {
    specOs.textContent = specs.os || "—";
}

    if (modalImage) {

        if (product.image) {

            modalImage.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    style="
                        width:100%;
                        height:100%;
                        object-fit:contain;
                        border-radius:18px;
                    "
                >
            `;

        } else {

            modalImage.textContent = product.icon;
        }
    }

    updateFavoriteButton();

    if (productModal) {

        productModal.classList.add("open");

        productModal.setAttribute(
            "aria-hidden",
            "false"
        );
    }
}


function closeProduct() {

    if (!productModal) return;

    productModal.classList.remove("open");

    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

    currentProduct = null;
}


// ==========================================
// FAVOURITES
// ==========================================

function toggleFavorite(product) {

    if (!product) return;

    if (favorites.has(product.id)) {

        favorites.delete(product.id);

        showToast("Removed from favourites");

    } else {

        favorites.add(product.id);

        showToast("Added to favourites ♥");
    }

    updateFavoriteButton();
}


function updateFavoriteButton() {

    if (!modalFavorite || !currentProduct) {
        return;
    }

    const saved =
        favorites.has(currentProduct.id);

    modalFavorite.innerHTML =
        saved
            ? "♥ Remove favourite"
            : "♡ Add to favourites";
}


// ==========================================
// MODAL BUTTONS
// ==========================================

const modalClose =
    document.getElementById("modalClose");

if (modalClose) {
    modalClose.addEventListener(
        "click",
        closeProduct
    );
}

const modalBackdrop =
    document.querySelector(".modal-backdrop");

if (modalBackdrop) {
    modalBackdrop.addEventListener(
        "click",
        closeProduct
    );
}

if (modalFavorite) {

    modalFavorite.addEventListener(
        "click",
        () => {

            if (!currentProduct) return;

            toggleFavorite(currentProduct);

            renderProducts(products);
        }
    );
}


// ==========================================
// EXPLORE / CATEGORY REAL IMAGES
// ==========================================

function setupCategoryImages() {

    const categoryImages = {

        "Laptops":
            "pictures/acer-laptop-1.jpg",

        "Desktops":
            "pictures/dell-laptop-1.jpg",

        "Printers":
            "pictures/epson-printer-1.jpg",

        "Photocopiers":
            "pictures/epson-printer-3.jpg",

        "Toners":
            "pictures/anycolor-toner-1.jpg",

        "Accessories":
            "pictures/epson-ink-1.jpg",

        "Networking":
            "pictures/anycolor-toner-2.jpg",

        "Services":
            "pictures/dell-laptop-22.jpg"
    };

    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            const category =
                card.dataset.category;

            const image =
                categoryImages[category];

            if (!image) return;

            // Find existing icon area
            let visual =
                card.querySelector(
                    ".category-icon"
                );

            if (!visual) {

                visual =
                    card.querySelector(
                        ".icon"
                    );
            }

            // If no known icon container exists,
            // create our own visual area.
            if (!visual) {

                visual =
                    document.createElement("div");

                visual.className =
                    "galaxy-category-image";

                card.prepend(visual);

            } else {

                visual.classList.add(
                    "galaxy-category-image"
                );
            }

            visual.innerHTML = `
                <img
                    src="${image}"
                    alt="${category}"
                    draggable="false"
                >
            `;

            // Premium inline styling
            Object.assign(visual.style, {

                width: "100%",
                height: "150px",
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "18px",
                background:
                    "linear-gradient(145deg, rgba(255,255,255,.9), rgba(238,242,248,.65))",
                border:
                    "1px solid rgba(255,255,255,.85)",
                boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,.95)"
            });

            const img =
                visual.querySelector("img");

            if (img) {

                Object.assign(img.style, {

                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: "12px",
                    display: "block",
                    transition:
                        "transform .45s cubic-bezier(.2,.7,.2,1)"
                });

                img.addEventListener(
                    "mouseenter",
                    () => {
                        img.style.transform =
                            "scale(1.06)";
                    }
                );

                img.addEventListener(
                    "mouseleave",
                    () => {
                        img.style.transform =
                            "scale(1)";
                    }
                );
            }

            // Hide old emoji/icon text
            const possibleIcon =
                card.querySelector(
                    ".category-icon"
                );

            if (
                possibleIcon &&
                possibleIcon !== visual
            ) {
                possibleIcon
                    .querySelectorAll("span")
                    .forEach(el => {
                        el.style.display = "none";
                    });
            }
        });
}


// ==========================================
// CATEGORY FILTER
// ==========================================

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                if (category === "Services") {

                    const services =
                        document.getElementById(
                            "services"
                        );

                    if (services) {

                        services.scrollIntoView({
                            behavior: "smooth"
                        });
                    }

                    return;
                }

                const filtered =
                    products.filter(
                        product =>
                            product.category ===
                            category
                    );

                renderProducts(filtered);

                const productsSection =
                    document.getElementById(
                        "products"
                    );

                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }

                showToast(
                    `${category} selected`
                );
            }
        );
    });


// ==========================================
// SEARCH
// ==========================================

const searchBtn =
    document.getElementById("searchBtn");

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        () => {

            if (!searchOverlay) return;

            searchOverlay.classList.add("open");

            searchOverlay.setAttribute(
                "aria-hidden",
                "false"
            );

            searchInput.value = "";

            renderSearchResults(products);

            setTimeout(
                () => searchInput.focus(),
                100
            );
        }
    );
}


const searchClose =
    document.getElementById("searchClose");

if (searchClose) {

    searchClose.addEventListener(
        "click",
        closeSearch
    );
}


function closeSearch() {

    if (!searchOverlay) return;

    searchOverlay.classList.remove("open");

    searchOverlay.setAttribute(
        "aria-hidden",
        "true"
    );
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        () => {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();

            if (!query) {

                renderSearchResults(products);

                return;
            }

            const results =
                products.filter(
                    product => {

                        const text = `
                            ${product.name}
                            ${product.category}
                            ${product.description}
                        `.toLowerCase();

                        return text.includes(query);
                    }
                );

            renderSearchResults(results);
        }
    );
}


// ==========================================
// SEARCH RESULTS
// ==========================================

function renderSearchResults(list) {

    if (!searchResults) return;

    searchResults.innerHTML = "";

    if (list.length === 0) {

        searchResults.innerHTML = `
            <div class="search-result">
                <span>No products found.</span>
            </div>
        `;

        return;
    }

    list.forEach(product => {

        const item =
            document.createElement("button");

        item.type = "button";

        item.className = "search-result";

        item.innerHTML = `
            <strong>
                ${
                    product.image
                        ? `
                            <img
                                src="${product.image}"
                                alt=""
                                style="
                                    width:42px;
                                    height:42px;
                                    object-fit:contain;
                                    border-radius:8px;
                                    vertical-align:middle;
                                    margin-right:10px;
                                "
                            >
                        `
                        : product.icon
                }

                ${product.name}
            </strong>

            <small>
                ${product.category}
            </small>
        `;

        item.addEventListener(
            "click",
            () => {

                closeSearch();

                openProduct(product);
            }
        );

        searchResults.appendChild(item);
    });
}


// ==========================================
// HERO PRODUCT
// ==========================================

function changeHeroProduct() {

    if (!heroName || !heroDescription) {
        return;
    }

    // Only rotate products that actually
    // have a real image.
    const heroProducts =
        products.filter(
            product => product.image
        );

    if (!heroProducts.length) return;

    const product =
        heroProducts[
            heroIndex % heroProducts.length
        ];

    heroName.textContent =
        product.name;

    heroDescription.textContent =
        product.description;

    const heroStage =
        document.querySelector(
            ".product-stage"
        );

    if (!heroStage) return;


    // Remove/disable old CSS laptop pieces.
    const oldScreen =
        heroStage.querySelector(
            ".laptop-screen"
        );

    const oldBase =
        heroStage.querySelector(
            ".laptop-base"
        );

    if (oldScreen) {
        oldScreen.style.opacity = "0";
    }

    if (oldBase) {
        oldBase.style.opacity = "0";
    }


    // Create image once.
    let heroImage =
        document.getElementById(
            "heroProductImage"
        );

    if (!heroImage) {

        heroImage =
            document.createElement("img");

        heroImage.id =
            "heroProductImage";

        heroStage.appendChild(
            heroImage
        );

        Object.assign(heroImage.style, {

            position: "absolute",

            left: "50%",

            top: "50%",

            width: "68%",

            height: "68%",

            transform:
                "translate(-50%, -50%) scale(.96)",

            objectFit: "contain",

            zIndex: "10",

            opacity: "0",

            filter:
                "drop-shadow(0 28px 35px rgba(0,0,0,.18))",

            transition:
                "opacity .75s ease, transform 1s cubic-bezier(.2,.7,.2,1)",

            pointerEvents: "none"
        });
    }


    // Keep hero contained.
    heroStage.style.overflow = "hidden";

    heroStage.style.position = "relative";


    // Smooth exit.
    heroImage.style.opacity = "0";

    heroImage.style.transform =
        "translate(-50%, -50%) scale(.96)";


    setTimeout(() => {

        heroImage.src =
            product.image;

        heroImage.alt =
            product.name;

        heroImage.onload = () => {

            requestAnimationFrame(() => {

                heroImage.style.opacity = "1";

                heroImage.style.transform =
                    "translate(-50%, -50%) scale(1)";
            });
        };

    }, 250);


    heroIndex++;

    if (
        heroIndex >=
        heroProducts.length
    ) {
        heroIndex = 0;
    }
}


// Start hero
changeHeroProduct();


// Change every 6 seconds
setInterval(
    changeHeroProduct,
    6000
);


// ==========================================
// HERO PRODUCT BUTTON
// ==========================================

const heroProductBtn =
    document.getElementById(
        "heroProductBtn"
    );

if (heroProductBtn) {

    heroProductBtn.addEventListener(
        "click",
        () => {

            const heroProducts =
                products.filter(
                    product => product.image
                );

            const index =
                heroIndex === 0
                    ? heroProducts.length - 1
                    : heroIndex - 1;

            openProduct(
                heroProducts[index]
            );
        }
    );
}


// ==========================================
// EXPLORE PRODUCTS
// ==========================================

const exploreBtn =
    document.getElementById(
        "exploreBtn"
    );

if (exploreBtn) {

    exploreBtn.addEventListener(
        "click",
        () => {

            const categories =
                document.getElementById(
                    "categories"
                );

            if (categories) {

                categories.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    );
}


// ==========================================
// ENTER SHOWROOM
// ==========================================

const showroomBtn =
    document.getElementById(
        "showroomBtn"
    );

if (showroomBtn) {

    showroomBtn.addEventListener(
        "click",
        () => {

            const productsSection =
                document.getElementById(
                    "products"
                );

            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    );
}


// ==========================================
// VIEW ALL
// ==========================================

const viewAllBtn =
    document.getElementById(
        "viewAllBtn"
    );

if (viewAllBtn) {

    viewAllBtn.addEventListener(
        "click",
        () => {

            renderProducts(products);

            const productsSection =
                document.getElementById(
                    "products"
                );

            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    );
}


// ==========================================
// FAVOURITES HEADER
// ==========================================

const favoriteBtn =
    document.getElementById(
        "favoriteBtn"
    );

if (favoriteBtn) {

    favoriteBtn.addEventListener(
        "click",
        () => {

            if (favorites.size === 0) {

                showToast(
                    "You have no favourites yet"
                );

                return;
            }

            const favouriteProducts =
                products.filter(
                    product =>
                        favorites.has(
                            product.id
                        )
                );

            renderProducts(
                favouriteProducts
            );

            const productsSection =
                document.getElementById(
                    "products"
                );

            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

            showToast(
                `${favorites.size} favourite product(s)`
            );
        }
    );
}


// ==========================================
// CART
// ==========================================

const cartBtn =
    document.querySelector(
        ".icon-btn:nth-child(3)"
    );

if (cartBtn) {

    cartBtn.addEventListener(
        "click",
        () => {

            if (cartCount === 0) {

                showToast(
                    "Your showroom cart is empty"
                );

            } else {

                showToast(
                    `${cartCount} item(s) in cart`
                );
            }
        }
    );
}


// ==========================================
// WHATSAPP
// ==========================================

function openWhatsApp(product = null) {

    let message =
        "Hello Galaxy Computers, ";

    if (product) {

        message +=
            `I am interested in ${product.name}.`;

    } else {

        message +=
            "I would like to enquire about your products.";
    }

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(message);

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


const whatsappBtn =
    document.getElementById(
        "whatsappBtn"
    );

if (whatsappBtn) {

    whatsappBtn.addEventListener(
        "click",
        () => openWhatsApp()
    );
}


const modalWhatsapp =
    document.getElementById(
        "modalWhatsapp"
    );

if (modalWhatsapp) {

    modalWhatsapp.addEventListener(
        "click",
        () => {

            openWhatsApp(
                currentProduct
            );
        }
    );
}


// ==========================================
// NAVIGATION
// ==========================================

document
    .querySelectorAll("[data-scroll]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const targetId =
                    button.dataset.scroll;

                const target =
                    document.getElementById(
                        targetId
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    });


// ==========================================
// HOME
// ==========================================

const homeButton =
    document.querySelector(
        ".nav-link.active"
    );

if (homeButton) {

    homeButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    );
}


// ==========================================
// ESC
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProduct();

            closeSearch();
        }
    }
);


// ==========================================
// INITIAL RENDER
// ==========================================

renderProducts(products);


// ==========================================
// CATEGORY IMAGES
// ==========================================

setupCategoryImages();


// ==========================================
// READY
// ==========================================

console.log(
    "Galaxy Computers Digital Showroom is ready."
);
// ==========================================
// GALAXY SHOWROOM - REAL CATEGORY IMAGES
// ==========================================

// PHOTOCOPIERS
products.find(p => p.id === 21).image = "pictures/photocopier-1.jpg";
products.find(p => p.id === 22).image = "pictures/photocopier-2.jpg";
products.find(p => p.id === 23).image = "pictures/photocopier-3.jpg";
products.find(p => p.id === 24).image = "pictures/photocopier-4.jpg";
products.find(p => p.id === 25).image = "pictures/photocopier-5.jpg";

// ACCESSORIES
products.find(p => p.id === 33).image = "pictures/accessory-1.jpg";
products.find(p => p.id === 34).image = "pictures/accessory-2.jpg";
products.find(p => p.id === 35).image = "pictures/accessory-3.jpg";

// NETWORKING / WIFI
products.find(p => p.id === 36).image = "pictures/wifi-1.jpg";
products.find(p => p.id === 37).image = "pictures/wifi-2.jpg";
products.find(p => p.id === 38).image = "pictures/wifi-3.jpg";
products.find(p => p.id === 39).image = "pictures/wifi-4.jpg";
products.find(p => p.id === 40).image = "pictures/wifi-5.jpg";


// ==========================================
// CATEGORY CARD IMAGES
// ==========================================

function setupRealCategoryImages() {

    const categoryImages = {
        "Photocopiers": "pictures/photocopier-3.jpg",
        "Desktops": "pictures/desktop-1.jpg",
        "Accessories": "pictures/accessory-1.jpg",
        "Networking": "pictures/wifi-1.jpg"

    };

    document.querySelectorAll(".category-card").forEach(card => {

        const category = card.dataset.category;
        const imagePath = categoryImages[category];

        if (!imagePath) return;

        // Remove old category image if one exists
        const oldImage = card.querySelector(".galaxy-category-image");

        if (oldImage) {
            oldImage.remove();
        }

        // Create image frame
        const imageBox = document.createElement("div");

        imageBox.className = "galaxy-category-image";

        imageBox.innerHTML = `
            <img
                src="${imagePath}"
                alt="${category}"
            >
        `;

        // Put image at the top of the card
        card.prepend(imageBox);

    });
}


// Run category images
setupRealCategoryImages();
// REAL PRODUCT IMAGES

// Desktops
products.find(p => p.id === 11).image = "pictures/desktop-3.jpg";
products.find(p => p.id === 12).image = "pictures/desktop-2.jpg";
products.find(p => p.id === 13).image = "pictures/desktop-4.jpg";

// POS
products.find(p => p.id === 14).image = "pictures/pos-1.jpg";
products.find(p => p.id === 15).image = "pictures/pos-2.jpg";

// Epson Ink
products.find(p => p.id === 31).image = "pictures/epson-ink-1.jpg";                                                                                                     
// Re-render products so the new images appear
renderProducts(products);
// ==========================================
// HOT PRODUCTS PROMO SYSTEM
// ==========================================

const hotProducts = [
    {
        title: "TYPE-C USB HUB",
        description: "10 Ports • Modern Connectivity",
        image: "pictures/hot-usbhub.jpg"
    },
    {
        title: "SMARTWATCH",
        description: "Smart Watches for Kids & Adults",
        image: "pictures/hot-smartwatch.jpg"
    },
    {
        title: "POWER BANK",
        description: "Reliable Power • Stay Connected",
        image: "pictures/hot-powerbank.jpg"
    },
    {
        title: "WIRELESS MOUSE",
        description: "Smooth • Comfortable • Reliable",
        image: "pictures/hot-mouse.jpg"
    },
    {
        title: "KEYBOARD",
        description: "Perfect for Work & Everyday Use",
        image: "pictures/hot-keyboard.jpg"
    },
    {
        title: "HEADSET",
        description: "Gaming & Entertainment",
        image: "pictures/hot-headset.jpg"
    },
    {
        title: "FLASH DISK",
        description: "Portable Storage • Ready to Go",
        image: "pictures/hot-flashdisk.jpg"
    },
    {
        title: "GAMING SET",
        description: "Upgrade Your Gaming Setup",
        image: "pictures/hot-gamingset.jpg"
    },
    {
        title: "SMARTWATCH BRACELET",
        description: "Kids • iPad & Smart Accessories",
        image: "pictures/hot-bracelet.jpg"
    }
];

let hotPromoIndex = 0;
let hotPromoTimer = null;

function showHotPromo() {

    const promo = document.getElementById("hotPromo");

    if (!promo) return;

    const image = document.getElementById("hotPromoImage");
    const title = document.getElementById("hotPromoTitle");
    const description = document.getElementById("hotPromoDescription");
    const dots = document.getElementById("hotPromoDots");

    const product = hotProducts[hotPromoIndex];

    image.src = product.image;
    image.alt = product.title;

    title.textContent = product.title;
    description.textContent = product.description;

    dots.innerHTML = hotProducts.map((_, index) => `
        <span class="hot-promo-dot ${index === hotPromoIndex ? "active" : ""}"></span>
    `).join("");

    promo.classList.add("active");

    clearTimeout(hotPromoTimer);

    hotPromoTimer = setTimeout(() => {
        closeHotPromo();
    }, 7000);
}


function closeHotPromo() {

    const promo = document.getElementById("hotPromo");

    if (!promo) return;

    promo.classList.remove("active");

    clearTimeout(hotPromoTimer);

    hotPromoTimer = setTimeout(() => {

        hotPromoIndex++;

        if (hotPromoIndex >= hotProducts.length) {
            hotPromoIndex = 0;
        }

        showHotPromo();

    }, 35000);
}


// Start the first promotion
setTimeout(() => {
    showHotPromo();
}, 15000);  
// ==========================================
// PRODUCT PREVIOUS / NEXT NAVIGATION
// ==========================================

let productNavigationList = products;

function getCurrentProductIndex() {
    if (!currentProduct) return -1;

    return productNavigationList.findIndex(
        product => product.id === currentProduct.id
    );
}

function showNextProduct() {
    if (!currentProduct || !productNavigationList.length) return;

    const currentIndex = getCurrentProductIndex();

    if (currentIndex === -1) return;

    const nextIndex =
        (currentIndex + 1) % productNavigationList.length;

    openProduct(productNavigationList[nextIndex]);
}

function showPreviousProduct() {
    if (!currentProduct || !productNavigationList.length) return;

    const currentIndex = getCurrentProductIndex();

    if (currentIndex === -1) return;

    const previousIndex =
        (currentIndex - 1 + productNavigationList.length) %
        productNavigationList.length;

    openProduct(productNavigationList[previousIndex]);
}


// BUTTONS
const prevProductBtn =
    document.getElementById("prevProduct");

const nextProductBtn =
    document.getElementById("nextProduct");

if (prevProductBtn) {
    prevProductBtn.addEventListener(
        "click",
        event => {
            event.stopPropagation();
            showPreviousProduct();
        }
    );
}

if (nextProductBtn) {
    nextProductBtn.addEventListener(
        "click",
        event => {
            event.stopPropagation();
            showNextProduct();
        }
    );
}
console.log("GALAXY NEXT/PREV CODE IS LOADED");
/* =========================================================
   SCHOOL & KIDS — PRODUCT ORBIT
   ========================================================= */

(function initKidsOrbit() {

    const orbitProducts = [
        ...document.querySelectorAll(".orbit-product")
    ];

    const orbitDots = [
        ...document.querySelectorAll(".orbit-dot")
    ];

    const prevButton = document.querySelector(".orbit-prev");
    const nextButton = document.querySelector(".orbit-next");

    if (!orbitProducts.length) return;

    let currentOrbit = 0;

    const positions = [

        {
            left: "50%",
            top: "52%",
            scale: 1
        },

        {
            left: "75%",
            top: "42%",
            scale: .72
        },

        {
            left: "87%",
            top: "64%",
            scale: .62
        },

        {
            left: "25%",
            top: "42%",
            scale: .72
        },

        {
            left: "13%",
            top: "64%",
            scale: .62
        }

    ];


    function updateOrbit() {

        orbitProducts.forEach((product, index) => {

            const positionIndex =
                (index - currentOrbit + orbitProducts.length)
                % orbitProducts.length;

            const position =
                positions[positionIndex];

            product.style.left =
                position.left;

            product.style.top =
                position.top;

            product.style.transform =
                `translate(-50%, -50%) scale(${position.scale})`;

            product.classList.toggle(
                "active",
                positionIndex === 0
            );

        });


        orbitDots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentOrbit
            );

        });

    }


    function nextOrbit() {

        currentOrbit =
            (currentOrbit + 1)
            % orbitProducts.length;

        updateOrbit();

    }


    function previousOrbit() {

        currentOrbit =
            (currentOrbit - 1 + orbitProducts.length)
            % orbitProducts.length;

        updateOrbit();

    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextOrbit
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousOrbit
        );

    }


    /* AUTO ROTATION */

    let orbitTimer =
        setInterval(
            nextOrbit,
            4200
        );


    /* PAUSE WHEN MOUSE IS OVER */

    const orbitArea =
        document.querySelector(
            ".kids-orbit-area"
        );

    if (orbitArea) {

        orbitArea.addEventListener(
            "mouseenter",
            () => {
                clearInterval(orbitTimer);
            }
        );

        orbitArea.addEventListener(
            "mouseleave",
            () => {

                orbitTimer =
                    setInterval(
                        nextOrbit,
                        4200
                    );

            }
        );

    }


    updateOrbit();

})();
/* =========================================================
   GALAXY LAPTOP ORBIT ENGINE
   ========================================================= */

(function initLaptopOrbit() {

  const orbitArea = document.querySelector(".laptop-orbit-area");
  const laptopItems = document.querySelectorAll(".laptop-orbit-product");
  const dots = document.querySelectorAll(".laptop-dot");
  const nextBtn = document.querySelector(".laptop-orbit-next");
  const prevBtn = document.querySelector(".laptop-orbit-prev");

  if (!orbitArea || !laptopItems.length) return;

  const total = laptopItems.length;

  let current = 0;
  let timer = null;
  let paused = false;

  /*
   * Positions around the orbit.
   * Each position has:
   * x = horizontal movement
   * y = vertical movement
   * scale = product size
   * opacity = visibility
   * z = layer depth
   */

  const positions = [
    {
      x: 0,
      y: -235,
      scale: 0.72,
      opacity: 0.28,
      z: 2
    },
    {
      x: 205,
      y: -110,
      scale: 0.82,
      opacity: 0.48,
      z: 3
    },
    {
      x: 225,
      y: 90,
      scale: 0.82,
      opacity: 0.48,
      z: 3
    },
    {
      x: 0,
      y: 220,
      scale: 1,
      opacity: 1,
      z: 8
    },
    {
      x: -225,
      y: 90,
      scale: 0.82,
      opacity: 0.48,
      z: 3
    },
    {
      x: -205,
      y: -110,
      scale: 0.82,
      opacity: 0.48,
      z: 3
    }
  ];


  function updateOrbit() {

    laptopItems.forEach((item, index) => {

      /*
       * Calculate where this laptop should be
       * relative to the current active laptop.
       */

      let relativePosition =
        (index - current + total) % total;

      const position =
        positions[relativePosition];

      if (!position) return;


      /*
       * Active laptop
       */

      if (relativePosition === 3) {

        item.classList.add("active");

      } else {

        item.classList.remove("active");

      }


      /*
       * Apply position
       */

      item.style.transform = `
        translate(-50%, -50%)
        translate(${position.x}px, ${position.y}px)
        scale(${position.scale})
      `;

      item.style.opacity = position.opacity;
      item.style.zIndex = position.z;


      /*
       * Blur background laptops slightly.
       */

      if (relativePosition === 3) {

        item.style.filter = "none";

      } else {

        item.style.filter = "blur(0.2px)";

      }

    });


    /*
     * Update dots
     */

    dots.forEach((dot, index) => {

      dot.classList.toggle(
        "active",
        index === current
      );

    });

  }


  /* =========================================================
     NEXT
     ========================================================= */

  function nextLaptop() {

    current++;

    if (current >= total) {
      current = 0;
    }

    updateOrbit();

  }


  /* =========================================================
     PREVIOUS
     ========================================================= */

  function previousLaptop() {

    current--;

    if (current < 0) {
      current = total - 1;
    }

    updateOrbit();

  }


  /* =========================================================
     AUTO ROTATION
     ========================================================= */

  function startAutoOrbit() {

    clearInterval(timer);

    timer = setInterval(() => {

      if (!paused) {
        nextLaptop();
      }

    }, 4500);

  }


  /* =========================================================
     BUTTONS
     ========================================================= */

  if (nextBtn) {

    nextBtn.addEventListener("click", () => {

      nextLaptop();

      startAutoOrbit();

    });

  }


  if (prevBtn) {

    prevBtn.addEventListener("click", () => {

      previousLaptop();

      startAutoOrbit();

    });

  }


  /* =========================================================
     DOT NAVIGATION
     ========================================================= */

  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      current = index;

      updateOrbit();

      startAutoOrbit();

    });

  });


  /* =========================================================
     PAUSE WHEN MOUSE IS OVER SHOWCASE
     ========================================================= */

  orbitArea.addEventListener("mouseenter", () => {

    paused = true;

  });


  orbitArea.addEventListener("mouseleave", () => {

    paused = false;

  });


  /* =========================================================
     INITIALIZE
     ========================================================= */

  updateOrbit();

  startAutoOrbit();

})();
/* =========================================================
   CONNECT LAPTOP ORBIT TO REAL PRODUCTS
   ========================================================= */
/* =========================================================
   LAPTOP ORBIT — CLICK TO OPEN REAL PRODUCT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const laptopItems = document.querySelectorAll(
        ".laptop-orbit-product"
    );

    const laptopProductIds = [
        1,
        2,
        3,
        4,
        5,
        9
    ];

    laptopItems.forEach(function (laptop, index) {

        laptop.style.cursor = "pointer";

        laptop.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const productId =
                laptopProductIds[index];

            const product =
                products.find(function (item) {
                    return item.id === productId;
                });

            if (!product) {
                console.log(
                    "Laptop product not found:",
                    productId
                );
                return;
            }

            console.log(
                "Opening laptop:",
                product.name
            );

            openProduct(product, products);

        });

    });

});
/* =========================================================
   GALAXY LAPTOP — DIRECT CLICK TEST
   ========================================================= */
/* =========================================================
   GALAXY LAPTOP ORBIT — REAL PRODUCT CLICK
   ========================================================= */

document.addEventListener("click", function (event) {

    const laptop = event.target.closest(".laptop-orbit-product");

    if (!laptop) return;

    console.log("🔥 LAPTOP CLICKED");

    const index = Number(laptop.dataset.laptopIndex);

    const laptopProductIds = [1, 2, 3, 4, 5, 9];

    const productId = laptopProductIds[index];

    console.log("Laptop index:", index);
    console.log("Product ID:", productId);

    const product = products.find(function (item) {
        return Number(item.id) === Number(productId);
    });

    if (!product) {
        console.error("❌ PRODUCT NOT FOUND:", productId);
        return;
    }

    console.log("✅ PRODUCT FOUND:", product);

    openProduct(product, products);

});
document.addEventListener("click", function (event) {
    console.log("CLICKED ELEMENT:", event.target);
    console.log("LAPTOP UNDER CLICK:", event.target.closest(".laptop-orbit-product"));
});
/* =========================================
   CINEMATIC PRINTER SHOWCASE
========================================= */

const printerData = [
    {
        image: "pictures/epson-printer-1.jpg",
        name: "Epson Printer",
        description: "Reliable Epson printing solution for home, school and everyday business needs."
    },
    {
        image: "pictures/epson-printer-2.jpg",
        name: "Epson Printer",
        description: "Efficient printing performance designed for smooth everyday productivity."
    },
    {
        image: "pictures/epson-printer-3.jpg",
        name: "Epson Printer",
        description: "A practical Epson solution for quality printing and dependable performance."
    },
    {
        image: "pictures/pantum-printer-1.jpg",
        name: "Pantum Printer",
        description: "Compact and efficient printing solution for modern business environments."
    },
    {
        image: "pictures/pantum-printer-2.jpg",
        name: "Pantum Printer",
        description: "Reliable Pantum printing technology for everyday office productivity."
    }
];

const printerImage = document.getElementById("featuredPrinterImage");
const printerName = document.getElementById("printerName");
const printerDescription = document.getElementById("printerDescription");
const printerNumber = document.getElementById("printerNumber");

const printerThumbs = document.querySelectorAll(".printer-thumb");


function showPrinter(index) {

    const printer = printerData[index];

    if (!printer) return;

    if (printerImage) {

        printerImage.style.opacity = "0";
        printerImage.style.transform = "translateY(8px) scale(0.98)";

        setTimeout(() => {

            printerImage.src = printer.image;
            printerImage.alt = printer.name;

            printerImage.style.opacity = "1";
            printerImage.style.transform = "translateY(-8px) scale(1)";

        }, 180);
    }

    if (printerName) {
        printerName.textContent = printer.name;
    }

    if (printerDescription) {
        printerDescription.textContent = printer.description;
    }

    if (printerNumber) {
        printerNumber.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(printerData.length).padStart(2, "0")}`;
    }

    printerThumbs.forEach((thumb, thumbIndex) => {

        thumb.classList.toggle(
            "active",
            thumbIndex === index
        );

    });
}


printerThumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {
        showPrinter(index);
    });

});


showPrinter(0);

/* =========================================================
   GALAXY CINEMATIC SHOWROOM
   HERO → SCHOOL → LAPTOPS → PRINTERS
========================================================= */

   const cinematicScenes = [
    {
        id: "hero",
        duration: 40000
    },
    {
        id: "schoolSolutions",
        duration: 40000
    },
    {
        id: "laptopShowcase",
        duration: 40000
    },
    {
        id: "printerShowcase",
        duration: 10000
    },
    {
        id: "desktopShowcase",
        duration: 40000
    },
    {
        id: "copierShowcase",
        duration: 40000
    },
    {
        id: "tonerShowcase",
         duration: 50000 
    },
    { id: "accessoriesShowcase",
         duration: 60000 
    }
];

let cinematicIndex = 0;
let cinematicTimer = null;
let cinematicRunning = true;


/* ---------- CINEMATIC INDICATOR ---------- */

const cinematicIndicator = document.createElement("div");

cinematicIndicator.className = "cinematic-indicator";

cinematicScenes.forEach((scene, index) => {

    const dot = document.createElement("span");

    dot.dataset.scene = index;

    cinematicIndicator.appendChild(dot);

});

document.body.appendChild(cinematicIndicator);


/* ---------- TOUCH HINT ---------- */

const cinematicHint = document.createElement("div");

cinematicHint.className = "cinematic-touch-hint";

cinematicHint.textContent = "TOUCH TO EXPLORE";

document.body.appendChild(cinematicHint);


/* ---------- GET SCENE ---------- */

function getCinematicScene(index) {

    const scene = cinematicScenes[index];

    if (!scene) return null;

    return document.getElementById(scene.id);

}


/* ---------- SHOW SCENE ---------- */

function showCinematicScene(index) {

    const nextScene = getCinematicScene(index);

    /*
       Safety check:
       If the section does not exist,
       don't break the showroom.
    */

    if (!nextScene) {

        console.warn(
            "Cinematic scene not found:",
            cinematicScenes[index]?.id
        );

        return;

    }


    /* Remove active state from all scenes */

    cinematicScenes.forEach(scene => {

        const element = document.getElementById(scene.id);

        if (element) {

            element.classList.remove("cinematic-active");

        }

    });


    /* Set current scene */

    cinematicIndex = index;

    nextScene.classList.add("cinematic-active");
// Reset the scene timer whenever a new cinematic scene starts
clearTimeout(cinematicTimer);

    /* Update dots */

    const dots =
        cinematicIndicator.querySelectorAll("span");

    dots.forEach((dot, dotIndex) => {

        dot.classList.toggle(
            "active",
            dotIndex === cinematicIndex
        );

    });


    /* Restart timer */

    clearTimeout(cinematicTimer);


    if (cinematicRunning) {

        cinematicTimer = setTimeout(() => {

            nextCinematicScene();

        }, cinematicScenes[cinematicIndex].duration);

    }

}


/* ---------- NEXT SCENE ---------- */

function nextCinematicScene() {

    const nextIndex =
        (cinematicIndex + 1) %
        cinematicScenes.length;

    showCinematicScene(nextIndex);

}


/* ---------- START SHOWROOM ---------- */

function startCinematicShowroom() {

    document.body.classList.add("cinematic-mode");

    cinematicRunning = true;

    showCinematicScene(0);

}


/* ---------- STOP SHOWROOM ---------- */

function stopCinematicShowroom() {

    cinematicRunning = false;

    clearTimeout(cinematicTimer);

    document.body.classList.remove("cinematic-mode");

    cinematicIndicator.style.display = "none";

    cinematicHint.style.display = "none";

}


/* ---------- START ---------- */

cinematicIndicator.style.display = "flex";

cinematicHint.style.display = "flex";

startCinematicShowroom();
/* =========================================================
   DESKTOP & POS SHOWCASE CONTROLLER
========================================================= */

const desktopProducts = document.querySelectorAll(
    ".desktop-orbit-product"
);

const desktopDots = document.querySelectorAll(
    ".desktop-dot"
);

const desktopPrev = document.querySelector(
    ".desktop-orbit-prev"
);

const desktopNext = document.querySelector(
    ".desktop-orbit-next"
);

let desktopCurrent = 0;
let desktopTimer = null;


/* ---------- SHOW PRODUCT ---------- */

function showDesktopProduct(index) {

    if (!desktopProducts.length) return;

    desktopCurrent =
        (index + desktopProducts.length) %
        desktopProducts.length;


    desktopProducts.forEach((product, i) => {

        product.classList.toggle(
            "active",
            i === desktopCurrent
        );

    });


    desktopDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === desktopCurrent
        );

    });

}


/* ---------- NEXT ---------- */

function nextDesktopProduct() {

    showDesktopProduct(desktopCurrent + 1);

}


/* ---------- PREVIOUS ---------- */

function previousDesktopProduct() {

    showDesktopProduct(desktopCurrent - 1);

}


/* ---------- BUTTONS ---------- */

if (desktopNext) {

    desktopNext.addEventListener(
        "click",
        nextDesktopProduct
    );

}

if (desktopPrev) {

    desktopPrev.addEventListener(
        "click",
        previousDesktopProduct
    );
}


/* ---------- DOTS ---------- */

desktopDots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => showDesktopProduct(index)
    );

});


/* ---------- AUTOMATIC ROTATION ---------- */

function startDesktopRotation() {

    clearInterval(desktopTimer);

    desktopTimer = setInterval(() => {

        nextDesktopProduct();

    }, 6500);

}


/* ---------- INITIALIZE ---------- */

showDesktopProduct(0);

startDesktopRotation();

/* =========================================================
   PHOTOCOPIER SHOWCASE CONTROLLER
========================================================= */

const copierProducts = document.querySelectorAll(
    ".copier-orbit-product"
);

const copierDots = document.querySelectorAll(
    ".copier-dot"
);

const copierPrev = document.querySelector(
    ".copier-orbit-prev"
);

const copierNext = document.querySelector(
    ".copier-orbit-next"
);

let copierCurrent = 0;
let copierTimer = null;


/* ---------- SHOW COPIER ---------- */

function showCopierProduct(index) {

    if (!copierProducts.length) return;

    copierCurrent =
        (index + copierProducts.length) %
        copierProducts.length;


    copierProducts.forEach((product, i) => {

        product.classList.toggle(
            "active",
            i === copierCurrent
        );

    });


    copierDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === copierCurrent
        );

    });

}


/* ---------- NEXT ---------- */

function nextCopierProduct() {

    showCopierProduct(copierCurrent + 1);

}


/* ---------- PREVIOUS ---------- */

function previousCopierProduct() {

    showCopierProduct(copierCurrent - 1);

}


/* ---------- BUTTONS ---------- */

if (copierNext) {

    copierNext.addEventListener(
        "click",
        nextCopierProduct
    );

}

if (copierPrev) {

    copierPrev.addEventListener(
        "click",
        previousCopierProduct
    );

}


/* ---------- DOTS ---------- */

copierDots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => showCopierProduct(index)
    );

});


/* ---------- AUTOMATIC ROTATION ---------- */

function startCopierRotation() {

    clearInterval(copierTimer);

    copierTimer = setInterval(() => {

        nextCopierProduct();

    }, 6500);

}


/* ---------- INITIALIZE ---------- */

showCopierProduct(0);

startCopierRotation();
/* =========================================================
   GALAXY TONERS & INKS — AUTO ROTATION
========================================================= */

const tonerProducts = document.querySelectorAll(
    ".toner-orbit-product"
);

const tonerDots = document.querySelectorAll(
    ".toner-dot"
);

const tonerPrev = document.querySelector(
    ".toner-orbit-prev"
);

const tonerNext = document.querySelector(
    ".toner-orbit-next"
);

let tonerCurrent = 0;
let tonerTimer = null;


/* SHOW TONER */

function showTonerProduct(index) {

    if (!tonerProducts.length) return;

    tonerCurrent =
        (index + tonerProducts.length) %
        tonerProducts.length;


    tonerProducts.forEach((product, i) => {

        product.classList.toggle(
            "active",
            i === tonerCurrent
        );

    });


    tonerDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === tonerCurrent
        );

    });

}


/* NEXT */

function nextTonerProduct() {

    showTonerProduct(
        tonerCurrent + 1
    );

}


/* PREVIOUS */

function previousTonerProduct() {

    showTonerProduct(
        tonerCurrent - 1
    );

}


/* NEXT BUTTON */

if (tonerNext) {

    tonerNext.addEventListener(
        "click",
        nextTonerProduct
    );

}


/* PREVIOUS BUTTON */

if (tonerPrev) {

    tonerPrev.addEventListener(
        "click",
        previousTonerProduct
    );

}


/* DOTS */

tonerDots.forEach((dot, index) => {

    dot.addEventListener(
        "click",
        () => {

            showTonerProduct(index);

            startTonerRotation();

        }
    );

});


/* AUTO ROTATION */

function startTonerRotation() {

    clearInterval(tonerTimer);

    tonerTimer = setInterval(() => {

        nextTonerProduct();

    }, 5000);

}


/* START */

showTonerProduct(0);

startTonerRotation();

console.log(
    "🔥 GALAXY TONER ROTATION LOADED:",
    tonerProducts.length
);
/* =========================================================
   GALAXY ACCESSORIES — FULL PRODUCT ROTATION
========================================================= */

const accessoryProducts = [
    {
        image: "pictures/hot-gamingset.jpg",
        name: "GAMING SET"
    },
    {
        image: "pictures/hot-headset.jpg",
        name: "GAMING HEADSET"
    },
    {
        image: "pictures/hot-headset.jpg",
        name: "GAMING HEADSET"
    },
    {
        image: "pictures/hot-headset1.jpg",
        name: "PODS"
    },
    {
        image: "pictures/hot-keyboard.jpg",
        name: "GAMING KEYBOARD"
    },
    {
        image: "pictures/hot-mouse.jpg",
        name: "WIRELESS MOUSE"
    },
    {
        image: "pictures/hot-powerbank.jpg",
        name: "POWER BANK"
    },
    {
        image: "pictures/hot-powerbank1.jpg",
        name: "POWER BANK"
    },
    {
        image: "pictures/hot-powerbank2.jpg",
        name: "POWER BANK"
    },
    {
        image: "pictures/hot-flashdisk.jpg",
        name: "FLASH DISK"
    },
    {
        image: "pictures/hot-smartwatch1.jpg",
        name: "SMART WATCH"
    },
    {
        image: "pictures/hot-smartwatch2.jpg",
        name: "SMART WATCH"
    },
    {
        image: "pictures/hot-usbhub.jpg",
        name: "USB HUB"
    },
    {
        image: "pictures/hot-bracelet -1.jpg",
        name: "SMART BRACELET"
    },
    {
        image: "pictures/hot-bracelet.jpg",
        name: "SMART BRACELET"
    },
    {
        image: "pictures/hot-laptop stand -1.jpg",
        name: "LAPTOP STAND"
    },
    {
        image: "pictures/hot-laptop stand -2.jpg",
        name: "LAPTOP STAND"
    },
    {
        image: "pictures/hot-laptop stand -3.jpg",
        name: "LAPTOP STAND"
    },
    {
        image: "pictures/hot-laptop stand -4.jpg",
        name: "LAPTOP STAND"
    },
    {
        image: "pictures/hot-laptop stand -5.jpg",
        name: "LAPTOP STAND"
    },
    {
        image: "pictures/accessory-1.jpg",
        name: "TECH ACCESSORY"
    },
    {
        image: "pictures/accessory-2.jpg",
        name: "TECH ACCESSORY"
    },
    {
        image: "pictures/accessory-3.jpg",
        name: "TECH ACCESSORY"
    },
    {
        image: "pictures/accessory-4.jpg",
        name: "TECH ACCESSORY"
    }
];

const accessoryArea = document.querySelector(
    ".accessories-orbit-area"
);

let accessoryCurrent = 0;
let accessoryTimer = null;


/* CREATE PRODUCT DISPLAY */

function showAccessoryProduct(index) {

    if (!accessoryArea) return;

    accessoryCurrent =
        (index + accessoryProducts.length) %
        accessoryProducts.length;

    const product = accessoryProducts[accessoryCurrent];

    accessoryArea.innerHTML = `
        <div class="accessories-orbit-product active">

            <div class="accessories-product-glow"></div>

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="accessories-product-name">
                <span>${product.name}</span>
            </div>

        </div>
    `;
}


/* NEXT PRODUCT */

function nextAccessoryProduct() {

    showAccessoryProduct(
        accessoryCurrent + 1
    );

}


/* START ROTATION */

function startAccessoryRotation() {

    clearInterval(accessoryTimer);

    accessoryTimer = setInterval(() => {

        nextAccessoryProduct();

    }, 8000);

}


/* INITIAL PRODUCT */

if (accessoryArea && accessoryProducts.length) {

    showAccessoryProduct(0);

    startAccessoryRotation();

}


console.log(
    "🔥 GALAXY ACCESSORIES LOADED:",
    accessoryProducts.length
);
/* =========================================================
   USER INTERACTION CONTROL
   Pause cinematic when customer interacts
   Resume after 60 seconds of inactivity
========================================================= */

let showroomIdleTimer = null;
const SHOWROOM_IDLE_TIME = 60000; // 60 seconds

function pauseShowroomCinematic() {
    if (!cinematicRunning) return;

    cinematicRunning = false;
    clearTimeout(cinematicTimer);

    console.log("👆 Customer interaction detected — cinematic paused.");
}

function resumeShowroomCinematic() {
    cinematicRunning = true;

    clearTimeout(cinematicTimer);

    const currentScene = cinematicScenes[cinematicIndex];

    if (currentScene) {
        cinematicTimer = setTimeout(() => {
            nextCinematicScene();
        }, currentScene.duration);
    }

    console.log("💤 Showroom idle — cinematic resumed.");
}

function resetShowroomIdleTimer() {
    pauseShowroomCinematic();

    clearTimeout(showroomIdleTimer);

    showroomIdleTimer = setTimeout(() => {
        resumeShowroomCinematic();
    }, SHOWROOM_IDLE_TIME);
}

/* Customer interaction */
[
    "click",
    "touchstart",
    "mousemove",
    "keydown",
    "wheel"
].forEach(eventName => {
    document.addEventListener(eventName, resetShowroomIdleTimer, {
        passive: true
    });
});

/* Start idle timer */
showroomIdleTimer = setTimeout(() => {
    resumeShowroomCinematic();
}, SHOWROOM_IDLE_TIME);