// BEST SELLERS CAROUSEL 

const bestSellersPrevBtn = document.getElementById("bestSellers-prev-btn");
const bestSellersNextBtn = document.getElementById("bestSellers-next-btn");
const bestSellersItemList = document.getElementById("bestSellers-item-list");
const bestSellersItemWidth = 150;
const bestSellersPadding = 10;

bestSellersPrevBtn.addEventListener("click", () => {
  bestSellersItemList.scrollLeft -= (bestSellersItemWidth + bestSellersPadding);
})

bestSellersNextBtn.addEventListener("click", () => {
  bestSellersItemList.scrollLeft += (bestSellersItemWidth + bestSellersPadding);
})
