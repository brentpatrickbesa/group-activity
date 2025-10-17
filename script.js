<!DOCTYPE html>
<html>
<head>
  <title>Basic JavaScript Example</title>
</head>
<body>

  <h1>Welcome to JavaScript!</h1>
  <p id="message">Click the button to see something happen:</p>

  <button id="myButton">Click Me</button>

  <script>
    function showMessage() {
      let name = "Vincent";
      document.getElementById("message").innerHTML = "Hello, " + name + "! Welcome to JavaScript!";
      alert("Button clicked!");
    }

    document.getElementById("myButton").addEventListener("click", showMessage);
  </script>

</body>
</html>
