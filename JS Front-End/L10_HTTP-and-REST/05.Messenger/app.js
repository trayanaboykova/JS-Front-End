function attachEvents() {
    const refreshBtn = document.getElementById("refresh");
    const submitBtn = document.getElementById("submit");
    const authorInput = document.querySelector("#controls input[name='author']");
    const contentInput = document.querySelector("#controls input[name='content']");
    const messagesTextarea = document.getElementById("messages");
  
    submitBtn.addEventListener("click", sendMessage);
    refreshBtn.addEventListener("click", loadMessages);
  
    async function loadMessages() {
      try {
        const response = await fetch(
          "http://localhost:3030/jsonstore/messenger"
        );
  
        if (response.ok === false) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        const data = await response.json();
        let messages = "";
        Object.values(data).forEach(
          (message) => (messages += `${message.author}: ${message.content}\n`)
        );
        messagesTextarea.textContent = messages.trim();
      } catch (error) {
        messagesTextarea.textContent = `Error: ${error.message}`;
      }
    }
  
    async function sendMessage() {
      const author = authorInput.value.trim();
      const content = contentInput.value.trim();
      if (author == "" || content == "") {
        return;
      }
  
      try {
        const response = await fetch(
          "http://localhost:3030/jsonstore/messenger",
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ author, content }),
          }
        );
  
        if (response.ok === false) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
  
        authorInput.value = "";
        contentInput.value = "";
        loadMessages();
      } catch (error) {
        messagesTextarea.textContent = `Error: ${error.message}`;
      }
    }
  }
  
  attachEvents();
  