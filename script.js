// Function to handle drag start event
function dragStart(event) {
    // Set the data being dragged
    event.dataTransfer.setData("text/plain", event.target.id);
    // Add dragging class to the item being dragged
    event.target.classList.add("dragging");
  }
  
  // Function to handle drag end event
  function dragEnd(event) {
    // Remove dragging class from the item
    event.target.classList.remove("dragging");
  }
  
  // Function to handle drop event
  function drop(event) {
    // Prevent default behavior
    event.preventDefault();
    // Get the data being dropped
    var data = event.dataTransfer.getData("text/plain");
    // Get the dragged item element
    var item = document.getElementById(data);
    // Remove dragging class from the item
    item.classList.remove("dragging");
    // Append the item to the drop container
    event.target.appendChild(item);
    // Show success message
    showMessage();
  }
  
  // Function to show success message
  function showMessage() {
    var message = document.getElementById("message");
    // Display the message
    message.style.display = "block";
    // Hide the message after 2 seconds
    setTimeout(function() {
      message.style.display = "none";
    }, 2000);
  }
  
  // Function to reset the containers
  function reset() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    
    // Move all items from container 2 to container 1
    while (container2.firstChild) {
      container1.appendChild(container2.firstChild);
    }
  }
  
  // Add event listeners to the draggable items
  var items = document.querySelectorAll(".item");
  items.forEach(function(item) {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });
  