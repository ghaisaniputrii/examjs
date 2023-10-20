const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express() //implementasi express
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended: true}))


app.use(cors())



app.get("/question1/:v/:t",(req, res) => {
    let v = req.params.s 
    let t = req.params.t
    let s = v * t

    



    let response = {
        s: s,
        t: t,
        v: v
        
    };
    res.json(response);

})

app.get("/question1/:s/:v",(req, res) => {
    let s = req.params.s 
    let v = req.params.t
    let t = s / t 

    



    let response = {
        s: s,
        t: t,
        v: v
        
    };
    res.json(response);

})

//remidi


app.get("/convert/mm/:panjang",(req, res) => {
    let mm = parseFloat(req.params.panjang);
    let cm = mm / 10;
    let dm = mm / 100;
    let m = mm / 1000;
    let dam = mm / 10000;
    let hm = mm / 100000;
    let km = mm / 1000000;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.get("/convert/cm/:panjang",(req, res) => {
    let cm = parseFloat(req.params.panjang);
    let mm = cm * 10;
    let dm = cm / 100;
    let m = cm / 1000;
    let dam = cm / 10000;
    let hm = cm / 100000;
    let km = cm / 1000000;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.get("/convert/dm/:panjang",(req, res) => {
    let dm = parseFloat(req.params.panjang);
    let mm = dm * 100;
    let cm = dm * 10;
    let m = dm / 10;
    let dam = dm / 100;
    let hm = dm / 1000;
    let km = dm / 10000;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.get("/convert/m/:panjang",(req, res) => {
    let m = parseFloat(req.params.panjang);
    let mm = m * 1000;
    let cm = m * 100;
    let dm = m * 10;
    let dam = m / 10;
    let hm = m / 100;
    let km = m / 1000;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.get("/convert/dam/:panjang",(req, res) => {
    let dam = parseFloat(req.params.panjang);
    let mm = dam * 10000;
    let cm = dam * 1000;
    let dm = dam * 100;
    let m = dam * 10;
    let hm = dam / 10;
    let km = dam / 100;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.get("/convert/hm/:panjang",(req, res) => {
    let hm = parseFloat(req.params.panjang);
    let mm = hm * 10000;
    let cm = hm * 1000;
    let dm = hm * 1000;
    let m = hm * 100;
    let dam = hm * 10;
    let km = hm / 10;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})
app.get("/convert/km/:panjang",(req, res) => {
    let km = parseFloat(req.params.panjang);
    let mm = km * 1000000;
    let cm = km * 100000;
    let dm = km * 10000;
    let m = km * 1000;
    let dam = km * 100;
    let hm = km * 10;

    let response = {
        mm : mm,
        cm : cm,
        dm : dm,
        m : m,
        dam : dam,
        hm : hm,
        km : km,
    };
    res.json(response);
})

app.post("/f",(req, res) => {
    let m = Number(req.body.m);
    let a = Number(req.body.a); 
    let f = m * a 
    



    let response = {
        f : f,
       m : m,
       a : a

        
    };
    res.json(response);

})

app.post("/m",(req, res) => {
    let f = Number(req.body.f);
    let a = Number(req.body.a); 
    let m = f / a 

    



    let response = {
        f : f,
       m : m,
       a : a
    
        
    };
    res.json(response);

})

app.post("/a",(req, res) => {
    let m = Number(req.body.m);
    let f = Number(req.body.f); 
    let a = f / m

    



    let response = {
        f : f,
       m : m,
       a : a
    
        
    };
    res.json(response);

})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})