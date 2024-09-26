function toggleCitation() {
    var citation = document.getElementById("citationContainer");
    var button = event.target;
    if (citation.style.display === "none" || citationContainer.style.display === "") {
      citation.style.display = "block";
      button.innerText = "Hide Bibtex";
    } else {
      citation.style.display = "none";
      button.innerText = "Show Bibtex";
    }
  }

  function copyCitation() {
      // Retrieve the raw citation text, preserving formatting
      var citationText = document.getElementById("citation").innerText; 
      
      // Use Clipboard API to copy the text
      navigator.clipboard.writeText(citationText).then(function() {
        // Change button text to confirm the copy
        var copyButton = document.getElementById("copyButton");
        copyButton.innerText = "Copied!";
        
        // Revert the button text after 2 seconds
        setTimeout(function() {
          copyButton.innerText = "Copy Bibtex";
        }, 2000);
      }, function(err) {
        console.error('Failed to copy text: ', err);
      });
    }
