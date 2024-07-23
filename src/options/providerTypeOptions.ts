import { IOptions } from "domain/contract/base/iOptions";

export const PROVIDER_TYPE_OPTIONS = [    
    { value: '1', description: 'Médico(a)' },
    { value: '2', description: 'Fisioterapeuta' },
    { value: '3', description: 'Nutricionista' },
    { value: '4', description: 'Psicólogo(a)' },
    { value: '5', description: 'Terapia Ocupacional' },
    { value: '6', description: 'Outros' }
] as IOptions[];