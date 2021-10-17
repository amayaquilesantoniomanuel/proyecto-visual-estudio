/*jugadores que tengan un porcentaje de tiros de campo por debajo del 48%*/
db.jugadores.find(
    {
        tiros_de_campo: { $lte: "48" }
    }
).pretty();

/*jugadores cuya nacionalidad empiece por la letra E*/
db.jugadores.find(
    {
        nacionalidad: { $regex: /^E/ }
    }
).pretty();
/*jugadores cuya nacionalidad empiece por la letra E*/
/*jugadores con altura igual o mayor a 200 cms y que su porventaje de tiros libres sea menor de 76*/
db.jugadores.find(
    {
        $and:
            [
                { tiros_libres: { $lt: "76" } },
                { altura: { $gte: "200" } }
            ]
    }
).pretty();

/*jugadores que su posicion en el campo de sea base*/
db.jugadores.find(
    {
        $and:
            [
                { posicion: { $ne: "base" } }
            ]
    }
).pretty();

/*jugadores que su nacionalidad no empiece por E y que no tengan una altura menor o igual de 202 cms*/
db.jugadores.find(
    {
        $and: [
            {
                nacionalidad: { $not: { $regex: /^E/ } },
                $nor: [
                    { altura: { $lte: "202" } }
                ]
            }
        ]
    }).pretty();
/*jugadores que hayan ganado un trofeo de mvp y que no tengan mas de 10 trofeos en su carrera*/
    db.jugadores.find(
        {
            $and: [
                {
                    mvp: { $eq: true },
                    $nor: [
                        { trofeos: { $gt: 10 } }
                    ]
                }
            ]
        }).pretty();
