import Layout from "../components/Layout";
import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {toast} from "react-hot-toast";
import {BlockTitle, List, ListInput} from "konsta/vue";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
}

export default function Formulario(){
    const [nombre, setNombre] = useState('Christian');

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>(
        {
            defaultValues:{
                nombre: 'Chris',
                estadoCivil: '',
            },
            mode: 'onTouched'
        }
    )

    const controlarSubmit = (eventoSubmit) => {
        eventoSubmit.preventDefault();
        console.log('Submit', eventoSubmit);
        console.log('nombre', nombre);
    }

    const controlarSubmitRHF = (data) => {
        console.log('data', data);
        toast('Good Job',{
            icon: '🖕'
        });
        toast.success('Bien');
        toast.error('Bien');

    }

    return(
        <>
            <Layout title="Formulario">
                <h1>Formulario con React Hook Form</h1>
                <form onSubmit={handleSubmit(controlarSubmitRHF)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Christian"
                               id="nombre"
                            {...register('nombre',{
                                required: {value: true, message: 'Requerido'},
                                maxLength: {value: 20, message: 'Longitud máxima 20'},
                                minLength: {value: 5, message: 'Longitud mínima 5'},
                                validate:{
                                    soloNumeros: (valorActual)=>{
                                        if(Number.isNaN(+valorActual)){
                                            return 'Ingrese solo números';
                                        }else{
                                            return true;
                                        }
                                    }
                                }
                            })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                        {errors.nombre &&
                            <div className="alert alert-warning" role="alert">
                                Errores: {errors.nombre.message}
                            </div>
                        }
                    </div>
                    <div className="mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="estadoCivilLabelId">Estado Civil</InputLabel>
                            <Controller
                                control={control}
                                rules={{required: {value: true, message: 'Estado C. requerido'}}}
                                name="estadoCivil"
                                render={({ field: { onChange, value, onBlur} }) => {
                                    return <Select
                                        labelId="estadoCivilLabelIdn<"
                                        id="estadoCivil"
                                        onBlur={onBlur}
                                        value={value}
                                        label="Estado Civil"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={''}>Seleccione uno</MenuItem>
                                        <MenuItem value={'casado'}>Casado</MenuItem>
                                        <MenuItem value={'soltero'}>Soltero</MenuItem>
                                    </Select>
                                }}
                            />
                        </FormControl>
                        <BlockTitle>Floating Labels</BlockTitle>
                        <List hairlines={hairlines}>
                            <ListInput
                                label="Name"
                                floatingLabel
                                type="text"
                                placeholder="Your name"
                                media={<DemoIcon />}
                            />

                            <ListInput
                                label="Password"
                                floatingLabel
                                type="password"
                                placeholder="Your password"
                                media={<DemoIcon />}
                            />

                            <ListInput
                                label="E-mail"
                                floatingLabel
                                type="email"
                                placeholder="Your e-mail"
                                media={<DemoIcon />}
                            />

                            <ListInput
                                label="URL"
                                floatingLabel
                                type="url"
                                placeholder="URL"
                                media={<DemoIcon />}
                            />

                            <ListInput
                                label="Phone"
                                floatingLabel
                                type="tel"
                                placeholder="Your phone number"
                                media={<DemoIcon />}
                            />
                        </List>
                    </div>
                    <button type="submit"
                            disabled={!isValid}
                            className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <br/>
                <h1>Formulario con React</h1>
                <form onSubmit={controlarSubmit}>
                    {/*<form onSubmit={controlarSubmit}>*/}
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNombre(e.target.value)}
                               placeholder="EJ: Christian"
                               value = {nombre}
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Layout>
        </>
    )
}