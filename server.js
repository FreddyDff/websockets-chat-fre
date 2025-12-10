// dependeceies
// ----------------------------------------------------------------------------------------------



// minimal express server applikation
import express from 'express';


// miljövariabler /inställningar
// ----------------------------------------------------------------------------------------------
const app = express();
import http from 'http';



// ange en mapp som express kan använda för att leverera statiska filer
app.use(express.static('public'));


// uppgift:
// ange port
// starta servern




// middleware
// ----------------------------------------------------------------------------------------------



// routes
// ----------------------------------------------------------------------------------------------


// lyssna på event
// ----------------------------------------------------------------------------------------------





// starta servern
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


