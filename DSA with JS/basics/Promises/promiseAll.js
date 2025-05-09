function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Prabhat" });
      }, 1000);
    });
  }
  
  function fetchPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; // 50% chance of failure
        if (success) {
          resolve(["Post 1", "Post 2"]);
        } else {
          reject("❌ Failed to fetch posts");
        }
      }, 1500);
    });
  }
  
  function fetchComments() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Nice!", "Great!"]);
      }, 1200);
    });
  }
  
  Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(([user, posts, comments]) => {
      console.log({
        user,
        posts,
        comments,
      });
    })
    .catch((err) => {
      console.log("⚠️ Error fetching data:", err);
    });
  