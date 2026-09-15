document
.getElementById("orderForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const order = {
        customer: document.getElementById("customer").value,
        email: document.getElementById("email").value,
        product: document.getElementById("product").value,
        quantity: document.getElementById("quantity").value
    };

    try{

        const response = await fetch(
            "https://6sqhmgg0pf.execute-api.us-east-2.amazonaws.com/prod/orders",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(order)
            }
        );

        const result = await response.json();

        document.getElementById("message").innerHTML =
            result.message;

        document.getElementById("orderForm").reset();

    }

    catch(error){

        document.getElementById("message").innerHTML =
            "Unable to submit order.";

        console.error(error);

    }

});