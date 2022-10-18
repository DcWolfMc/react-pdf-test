export interface Location{
    text: "Natureza"
    |"Jurisdição"|
    "Severidade"|
    "Elementos Atingidas"|
    "Quantidade de Envolvidos"|
    "Quantidade de Veiculos"|
    "Tipo de Cruzamento"|
    "Superfície da Pista"|
    "Controle de Tráfego"|
    "Tempo"|
    "Local"|
    "Iluminação"|""
}

export const KEYS_LOCATION: string[] = [
    "Natureza",
    "Tipo de Cruzamento",
    "Jurisdição",
    "Superfície da Pista",
    "Severidade",
    "Controle de Tráfego",
    "Elementos Atingidas",
    "Tempo",
    "Quantidade de Envolvidos",
    "Local",
    "Quantidade de Veiculos",
    "Iluminação",
]


export const KEYS_VIA: string[] = [
    "Tipo Pavimento",
    "Obras na Pista",
    "Tipo de Pista",
    "Obras de Arte",
    "Faixa para Sentido",
    "Condições da Pista",
    "Condições da Calçada",
    "Alinhamento Vertical",
    "Alinhamento Horizontal",
    "Separação Central",
    "Sinalização Vertical",
    "Sinalização Horizontal"
]

export const KEYS_VICTIM: string[] = [
    "Data de Nascimento",
    "Sexo",
    "Número da CNH",
    "Categoria CNH",
    "Número Documento",
    "Tipo Documento",
    "Código Veículo",
    "Gravidade da Lesão",
    "Posição do Passageiro",
    "Situação do Condutor",
    "Exame de alcoolemia",
    "Usava Cinto ou Capacete"
]

export const KEYS_VEHICLE: string[] = [
    "Tipo de Veículo",
    "Espécie",
    "Cor",
    "Marca",
    "Categoria",
    "Legalizado",
    "Ano Fabricação",
    "Aluguel",
    "Manobra",
    "Danificado",
    "Estrutura"
]