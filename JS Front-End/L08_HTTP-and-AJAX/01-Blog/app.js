const loadPostsButton = document.getElementById("btnLoadPosts");
const postsSelect = document.getElementById("posts");
const viewPostButton = document.getElementById("btnViewPost");
const postTitleElement = document.getElementById("post-title");
const postBodyElement = document.getElementById("post-body");
const postCommentsElement = document.getElementById("post-comments");

let posts = {};

// Load posts
loadPostsButton.addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    posts = data;

    // Populate select element with post options
    postsSelect.innerHTML = "";
    for (const id in posts) {
      const post = posts[id];
      const option = document.createElement("option");
      option.value = id;
      option.textContent = post.title;
      postsSelect.appendChild(option);
    }
  } catch (error) {
    console.error(error);
  }
});

// View post
viewPostButton.addEventListener("click", async () => {
  const postId = postsSelect.value;
  const post = posts[postId];
  if (!post) {
    return;
  }

  // Clear previous post content
  postTitleElement.textContent = "";
  postBodyElement.textContent = "";
  postCommentsElement.innerHTML = "";

  // Set post title and body
  postTitleElement.textContent = post.title;
  postBodyElement.textContent = post.body;

  // Load comments
  try {
    const response = await fetch("http://localhost:3030/jsonstore/blog/comments");
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    // Filter comments for current post
    const comments = Object.values(data).filter((comment) => comment.postId === postId);

    // Add comments to list
    comments.forEach((comment) => {
      const li = document.createElement("li");
      li.textContent = comment.text;
      postCommentsElement.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
});
