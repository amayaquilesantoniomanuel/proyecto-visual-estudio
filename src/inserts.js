db.jugadores.drop();
db.jugadores.insert([
    {
        jugador: 
        {
            nombre:"Lebron",
            apellido:"james"
        },
        nacionalidad: "Estadounidense",
        posicion: ["alero", "base", "ala-pivot"],
        tiros_de_campo: "50,5",
        altura: "2.06",
        tiros_libres: "73,4",
        mvp:true,
        trofeos:31
    },
    {
        jugador: 
        {
            nombre:"Stephen",
            apellido:"Curry"
        },
        nacionalidad: "Estadounidense",
        posicion: ["base", "escolta"],
        tiros_de_campo: "40,2",
        altura: "191",
        tiros_libres: "90,6",
        mvp:true,
        trofeos:25
    },
    {
        jugador: 
        {
            nombre:"Kevin",
            apellido:"Durant"
        },
        nacionalidad: "Estadounidense",
        posicion: ["escolta", "alero", "ala-pivot"],
        tiros_de_campo: "52,1",
        altura: "208",
        tiros_libres: "88,3",
        mvp:true,
        trofeos:14
    },
    {
        jugador: 
        {
            nombre:"Giannis",
            apellido:"Amtetokoumpo"
        },
        nacionalidad: "Greco",
        posicion: ["base", "alero", "ala-pivot"],
        tiros_de_campo: "55,3",
        altura: "211",
        tiros_libres: "72,2",
        mvp:true,
        trofeos:7
    },
    {
        jugador: 
        {
            nombre:"Luka",
            apellido:"Doncic"
        },
        nacionalidad: "Esloveno",
        posicion: ["escolta", "alero"],
        tiros_de_campo: "46,3",
        altura: "201",
        tiros_libres: "73,7",
        mvp:false,
        trofeos:16
    },
    {
        jugador: 
        {
            nombre:"Rudy",
            apellido:"Gobert"
        },
        nacionalidad: "Frances",
        posicion: "pivot",
        tiros_de_campo: "69.3",
        altura: "216",
        tiros_libres: "63,1",
        mvp:false,
        trofeos:6
    },
])