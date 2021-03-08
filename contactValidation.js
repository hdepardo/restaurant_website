function clearErrors() 
{   
    //starts for loop, checking for all values put in a form
    for (var loopCounter = 0; 
        loopCounter < document.forms["contactForm"].elements.length; 
        loopCounter++) 
    { 
        // if the form inlcudes errors it will return -1 and the if statement will run
        if (document.forms["contactForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) 
        { 
            //changes class name back to "form-group"
            document.forms["contactForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function isValid(input)
{
    var isValid = true;
    
    if (input === "" || input.isUndefined || input === "null")
    {
        isValid = false;
    }
    
    return isValid;
}

function validateAllItems() 
{
    
    clearErrors();
 
    var allValid = true;
    
    //If name isn't valid
    if (!isValid(document.forms["contactForm"]["nameInput"].value))
    {
        alert("Name must be entered.");
        
        document.forms["contactForm"]["nameInput"]
           .parentElement.className = "form-group has-error";
        
        document.forms["contactForm"]["nameInput"].focus();
        
        allValid = false;
        
    }
    
    //If email isn't valid
    if (!isValid(document.forms["contactForm"]["emailInput"].value))
    {
        alert("Email must be entered.");
        
        document.forms["contactForm"]["emailInput"]
           .parentElement.className = "form-group has-error";
        
        document.forms["contactForm"]["emailInput"].focus();
        
        allValid = false;
        
    }
    
    //If phone number isn't valid 
    if (!isValid(document.forms["contactForm"]["phoneInput"].value))
    {
        
        alert("Phone Number must be entered.");
        
        document.forms["contactForm"]["phoneNumberInput"]
           .parentElement.className = "form-group has-error";
        
        document.forms["contactForm"]["phoneNumberInput"].focus();
        
        allValid = false;
        
    }
    
    //If everything is valid, display messages confirming the submission
    if (allValid)
    {
        alert("Your submission has been sent."); 
    }
      
}