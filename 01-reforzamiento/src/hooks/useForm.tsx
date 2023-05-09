import { useState } from "react"

export const useForm = (formulario: any) => {
    const [state, setState] = useState(formulario)

    const onChange = (value: string, campo:string) => {
        setState({
            ...formulario,
            [campo]: value
        })
    }

    return {
        ...state,
        state,
        onChange
    }
  
}
