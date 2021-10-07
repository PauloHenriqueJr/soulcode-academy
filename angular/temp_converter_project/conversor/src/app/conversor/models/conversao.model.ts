export interface IConversao {
    // unidadeDe?: 'celsius' |  'kelvin' | 'fahrenheit';
    // unidadePara?: 'celsius' |  'kelvin' | 'fahrenheit';
    tipo?: 'celsius-fahrenheit' | 'celsius-kelvin' | 'kelvin-fahrenheit' | 'kelvin-celsius' | 'fahrenheit-celsius' | 'fahrenheit-kelvin' | ''
    valor?: number
}
