// TRENDING CAROUSEL 

const trendingPrevBtn = document.getElementById("trending-prev-btn");
const trendingNextBtn = document.getElementById("trending-next-btn");
const trendingItemList = document.getElementById("trending-item-list");
const trendingItemWidth = 150;
const trendingPadding = 10;

trendingPrevBtn.addEventListener("click", () => {
  trendingItemList.scrollLeft -= (trendingItemWidth + trendingPadding);
})

trendingNextBtn.addEventListener("click", () => {
  trendingItemList.scrollLeft += (trendingItemWidth + trendingPadding);
})

