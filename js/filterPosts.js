const filterButtons = document.querySelectorAll(".filter__tag");
const posts = document.querySelectorAll(".post");

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", function (e) {
    let chosenTag = e.currentTarget.textContent.toLowerCase();
    showPostsByTag(chosenTag);
    setButtonAsActive(e.currentTarget);
  });
});

function showPostsByTag(tag) {
  posts.forEach((post) => {
    if (tag == post.dataset.tag || tag == "all") {
      post.classList.remove("post_hidden");
    } else {
      post.classList.add("post_hidden");
    }
  });
}

function setButtonAsActive(button) {
  filterButtons.forEach((filterButton) => {
    if (filterButton == button) {
      button.classList.add("filter__tag_active");
    } else {
      filterButton.classList.remove("filter__tag_active");
    }
  });
}