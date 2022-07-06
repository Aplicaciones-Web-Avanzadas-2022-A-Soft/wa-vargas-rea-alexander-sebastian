import Layout from "../react-nextjs/components/Layout";
import {useEffect, useState} from"react";


export interface EstudiantesInterface{
    id:number;
    nombre:string;
}

export default function Estudiantes{
    const [arregloEstudiantes, setArregloEstudiantes] = useState ([] as EstudiantesInterface)
    useEffect(//iniciar el componente
        ()=> {
            //consulta API...

            const url =
            const consultarTodos = async () => {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setArregloEstudiantes([...arregloEstudiantes, ...resultado])
            }
            consultarTodos();
        },
        []

    )
    return (
        <Layout title = {'Estudiantes'}>
            <ul>
                (arregloEstudiantes.map(
                    (estudiante: )=>{
                        return (<li key ={estudiante.id}>
                            {estudiante.id} -
                            <a href={'/estudiantes/'+estudiante.id}>
                                {}
                </li>)
            }
            </ul>
        </Layout>
    )
}
