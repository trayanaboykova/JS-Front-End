function solve() {
  const publishBtn = document.getElementById("publish-btn");
  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  publishBtn.addEventListener("click", () => {
    const titleInput = document.getElementById("task-title");
    const categoryInput = document.getElementById("task-category");
    const contentInput = document.getElementById("task-content");

    const title = titleInput.value.trim();
    const category = categoryInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" || category === "" || content === "") {
      return;
    }

    const li = document.createElement("li");
    li.className = "rpost";

    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    const p1 = document.createElement("p");
    p1.textContent = `Category: ${category}`;
    const p2 = document.createElement("p");
    p2.textContent = `Content: ${content}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "action";
    editBtn.className += " edit";

    const postBtn = document.createElement("button");
    postBtn.textContent = "Delete";
    postBtn.className = "action";
    postBtn.className += " delete";

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(postBtn);

    reviewList.appendChild(li);

    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    editBtn.addEventListener("click", () => {
      titleInput.value = title;
      categoryInput.value = category;
      contentInput.value = content;

      li.remove();
    });

    postBtn.addEventListener("click", () => {
      const newLi = li.cloneNode(true);
      const newEditBtn = newLi.querySelector(".edit");
      const newPostBtn = newLi.querySelector(".delete");

      newEditBtn.addEventListener("click", () => {
        titleInput.value = title;
        categoryInput.value = category;
        contentInput.value = content;

        newLi.remove();
      });

      newPostBtn.addEventListener("click", () => {
        newLi.remove();
      });

      li.removeChild(editBtn);
      li.removeChild(postBtn);

      publishedList.appendChild(newLi);
    });
  });
}
