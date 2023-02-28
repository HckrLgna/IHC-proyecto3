const horario = `
{
    "semestres": [
        {
        "materias": [
            {
                "nombre": "Calculo I",
                "sigla": "MAT101",
                "grupos": 
                    [
                        {
                            "grupo": "F1",
                            "docente": "Avedaño Gonzales Eudal",
                            "cupos": 10,
                            "cargahoraria": {
                                "dias": ["martes", "jueves"],
                                "hIni": ["18:15", "18:15"],
                                "hFin": ["20:30", "20:30"]
                            },
                            "codex": [2,4],
                            "codeyIni": [10,10],
                            "codeyFin": [11,11]
                        
                        },
                        {
                            "grupo": "H",
                            "docente": "Tejerina Guerra Julio",
                            "cupos": 10,
                            "cargahoraria": {
                                "dias": ["Miercoles", "Viernes"],
                                "hIni": ["07:00", "07:00"],
                                "hFin": ["09:15", "09:15"]
                            },
                            "codex": [3,5],
                            "codeyIni": [1,1],
                            "codeyFin": [2,2]
                        }
                    ]   
            },
            {
                "nombre": "Estructuras Discretas ",
                "sigla": "INF119",
                "grupos": 
                    [
                        {
                            "grupo": "SE",
                            "docente": "Vargas Castillo Ciro Edgar",
                            "cupos": 50,
                            "cargahoraria": {
                                "dias": ["martes", "jueves"],
                                "hIni": ["18:15", "18:15"],
                                "hFin": ["20:30", "20:30"]
                            },
                            "codex": [2,4],
                            "codeyIni": [10,10],
                            "codeyFin": [11,11]
                        
                        },
                        {
                            "grupo": "SF",
                            "docente": "Martinez Cardona Sara Mirna",
                            "cupos": 10,
                            "cargahoraria": {
                                "dias": ["Lunes","Miercoles", "Viernes"],
                                "hIni": ["07:00", "07:00","07:00"],
                                "hFin": ["08:30", "08:30","08:30"]
                            },
                            "codex": [1,3,5],
                            "codeyIni": [1,1,1],
                            "codeyFin": [1,1,1]
                        }
                    ]   
            }
        ]
        },    
        {
            "materias": [
                {
                        "nombre": "Algebra Lineal",
                        "sigla": "MAT103",
                        "grupos": 
                            [
                                {
                                    "grupo": "SA",
                                    "docente": "Cortez Uzeda Julio Martin ",
                                    "cupos": 10,
                                    "cargahoraria": {
                                        "dias": ["Lunes", "Miercoles","Viernes"],
                                        "hIni": ["08:30", "08:30","08:30"],
                                        "hFin": ["10:00", "10:00","10:00"]
                                    },
                                    "codex": [1,3,5],
                                    "codeyIni": [2,2,2],
                                    "codeyFin": [3,3,3]
                                
                                },
                                {
                                    "grupo": "SB",
                                    "docente": "Cortez Uzeda Julio Martin ",
                                    "cupos": 15,
                                    "cargahoraria": {
                                        "dias": ["Lunes", "Miercoles","Viernes"],
                                        "hIni": ["10:00", "10:00","10:00"],
                                        "hFin": ["11:30", "11:30","11:30"]
                                    },
                                    "codex": [1,3,5],
                                    "codeyIni": [4,4,4],
                                    "codeyFin": [4,4,4]
                                }
                            ]   
                    
                },
                {
                    
                        "nombre": "Calculo II",
                        "sigla": "MAT102",
                        "grupos": 
                            [
                                {
                                    "grupo": "SB",
                                    "docente": "Lazo Arteaga Carlos Roberto",
                                    "cupos": 10,
                                    "cargahoraria": {
                                        "dias": ["martes", "jueves"],
                                        "hIni": ["20:30", "20:30"],
                                        "hFin": ["22:45", "22:45"]
                                    },
                                    "codex": [2,4],
                                    "codeyIni": [12,12],
                                    "codeyFin": [13,13]
                                
                                },
                                {
                                    "grupo": "Y1",
                                    "docente": "Morales Mendez Magali",
                                    "cupos": 19,
                                    "cargahoraria": {
                                        "dias": ["Miercoles", "Viernes"],
                                        "hIni": ["09:15", "07:00"],
                                        "hFin": ["11:30", "09:15"]
                                    },
                                    "codex": [3,5],
                                    "codeyIni": [3,1],
                                    "codeyFin": [4,2]
                                }
                            ]   
                        
                
                }
            ]
        }
    ]
}
`
 
const jsonData  = JSON.parse(horario)
const cantSemestres = jsonData['semestres'].length;
 


window.onload = function(){ 

        let fila;
        let segFila;
        let columna;
        let materia;
        let grupo;
        let cantMaterias=0;
        document.getElementById('submit').onclick = function() {
        var radios = document.getElementsByName("flexRadioDefault");
        
        for (var radio of radios)
        {
            if (radio.checked) {
                cantMaterias++;
                console.log(radio.id);
                for(var d=0; d< jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['grupos'][radio.id[2]]['cargahoraria']['dias'].length; d++){
                    
                    fila = jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['grupos'][radio.id[2]]['codeyIni'][d];
                    segFila = jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['grupos'][radio.id[2]]['codeyFin'][d];
                    columna = jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['grupos'][radio.id[2]]['codex'][d];
                    
                    console.log(columna);
                    materia = jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['nombre'];
                    
                    grupo = jsonData['semestres'][radio.id[0]]['materias'][radio.id[1]]['grupos'][radio.id[2]]['grupo'] ;
                    console.log(cantMaterias);
                    let contenedor = document.getElementById('tabHorario').rows[fila].cells;
                    contenedor[columna].innerHTML = materia +"<br> Grupo: "+ grupo;
                    contenedor[columna].classList.toggle("selected"+cantMaterias);
                    if(segFila > fila){
                        let contenedor = document.getElementById('tabHorario').rows[segFila].cells;
                        contenedor[columna].innerHTML = materia +"<br> Grupo: "+ grupo ;
                        contenedor[columna].classList.toggle("selected"+cantMaterias);
                    } 
                }
            }
        }
    }
    
};

