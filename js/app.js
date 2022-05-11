const menu =  [ 
  {
    id: 1,
    title: "Flights to dubai",
    category: "MiddleEast",
    price: 200,
    img: "images/images/africa/Dubai.jpg",
    desc: `From Cairo to Abu Dhabi starting from EGP 200$
    One way, all inclusive`,
  },
  {
    id: 2,
    title: "Flights to Iraq",
    category: "africa",
    price: 150,
    img: "images/images/africa/iraq.jpg",
    desc: `From Cairo to Iraq starting from EGP 150$
    One way, all inclusive`,
  },
  {
    id: 3,
    title: "Flights to Lebanon",
    category: "europe",
    price: 100,
    img: "images/images/africa/lebanon.jpg",
    desc: `From Cairo to Lebanon starting from EGP 100$
    One way, all inclusive`,
  },
  {
    id: 4,
    title: "Flights to Qatar",
    category: "MiddleEast",
    price: 170,
    img: "images/images/africa/qatar.jpg",
    desc: `From Cairo to Qatar starting from EGP 170$
    One way, all inclusive`,
  },
  {
    id: 5,
    title: "Flights to Saudi Arabia",
    category: "africa",
    price: 160,
    img: "images/images/africa/saudiarabia.jpg",
    desc: `From Cairo to Saudi Arabia starting from EGP 160$
    One way, all inclusive`,
  },
  {
    id: 6,
    title: "Flights to Syria",
    category: "europe",
    price: 150,
    img: "images/images/africa/syria.jpg",
    desc: `From Cairo to Syria starting from EGP 150$
    One way, all inclusive`,
  },
  {
    id: 7,
    title: "Flights to Yemen",
    category: "MiddleEast",
    price: 140,
    img: "images/images/africa/yemen.jpg",
    desc: `From Cairo to Yemen starting from EGP 140$
    One way, all inclusive`,
  },
  {
    id: 8,
    title: "Flights to Cyprus",
    category: "africa",
    price: 130,
    img: "images/images/africa/cyprus.jpg",
    desc: `From Cairo to Cyprus starting from EGP 130$
    One way, all inclusive`,
  },
  {
    id: 9,
    title: "spain",
    category: "europe",
    price: 220,
    img: "images/images/africa/morocco.jpg",
    desc: `From Cairo to spain starting from EGP 220$
    One way, all inclusive`,
  },
  {
    id: 10,
    title: "Flights to Egypt",
    category: "Northamerica",
    price: 150,
    img: "images/images/africa/egypt.jpg",
    desc: `From Yemen to Cairo starting from EGP 150$
    One way, all inclusive`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
















function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );




  
  const categoryBtns = categories.map(function (category) {
      return `<button type="button" class="filter-btn" data-is=${category}>
          ${category}
        </button>`;
    }).join("");
    

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);




  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.is;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
  