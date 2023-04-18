interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Nestor',
        edad: 36,
        direccion:{
            pais: 'Argentina',
            casaNo: 920
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>  
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
