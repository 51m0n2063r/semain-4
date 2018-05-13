    $("button").on("click", function () {
        var pandas = $(this).attr("class");
        var couleur = $(this).attr("data-type");
        var sentiment = $(this).attr("data-tendance");
        
        if (couleur==undefined && sentiment ==undefined)
            {
                alert("Oui sa sert a rien, est alors!!");
            }else{
                alert("type: "+pandas+" data-type: "+couleur+" sentiment: "+sentiment);
            }
    });