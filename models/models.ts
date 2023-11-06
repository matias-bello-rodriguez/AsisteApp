export interface mensajess {
    profesor:{
    materia: string;
    seccion: number;
    mensaje: string;
    profesor: string,
    id: string}
} 
export interface UserI{
    nombre : string;
    correo: string;
    uid: string;
    password: string;
    perfil: 'estudiante'|'profesor'
}
export interface asistI{
    uid: string;
    user: UserI;
    fecha:any;
    asistentia:boolean;
} 

export interface ClaseI{
    asignatura: string;
    fechas: any[];
    asistencia: number;

}