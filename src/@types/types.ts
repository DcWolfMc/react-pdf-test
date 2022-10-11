
export interface FormData {
    city: string;
    created: string
    data: {
      driverIncidenteDetails: DriverIncidenteDetailsType;
      driverVia: Street[];
      driverVitima: Victim[];
      driverVeiculo: Vehicle[];
      driverAgentsAndVehicles: {
        agents: Agent[];
        missionCars: MissionCar[];
        'Serviços Acionados': TriggeredServices[];
        _localId: string;
      };
    };
    geom: Geom;
    location_text: string;
    occurred_from: string;
    occurred_to: string;
    road: string;
    schema: string;
    record_type?: string;
    state: string;
  
    id?: string;
    files?: attFile[];
  }

export interface Geom{
    coordinates: number[];
    type: "Point"
}

export interface Vehicle {
    index?: number;
    Categoria: string;
    Cor: string;
    'Código Veículo': string;
    Espécie: string;
    Manobra: string;
    Danificado: string;
    "Formulario de Dano": damageFormData
    'Tipo Veículo': string;
    Aluguel: string;
    Marca: string;
    'Número do Ônibus': string;
    Placa: string;
    'Ano Fabricação': string;
    Legalizado: string;
    _localId: string;
    'Linha do Ônibus': string;
    'Outra manobra': string;
    'Via de Acesso': string;
}
  export interface damageItem{
    label: string;
    answer:string;
  }

  export interface damageFormData{
    DamageType: string;
    structure:string;
    DamageFormDetails: damageItem[];
  }

  export interface danoVeiculo{
      index?: number;
      gValue: number;
      mValue: number;
      damageValue: number;
  }

export interface Street {
    index?:number;
    'Condição da Calçada': string;
    Nome: string;
    'Sinalização Vertical': string;
    'Condição da Pista': string;
    'Sinalização Horizontal': string;
    'Faixa para Sentido': string;
    'Alinhamento Vertical': string;
    'Obra de Arte': string;
    'Tipo do Pavimento': string;
    _localId?: string;
    'Alinhamento Horizontal': string;
    'Separação Central': string;
    'Tipo da Pista': string;
    'Obras na Pista': string;
}

export interface Victim {
    index? :number
    'Categoria do Condutor': string;
    'Perfil do Usuário': string;
    'Custo Geral': string;
    'Código Veículo': string;
    'Data de Alta': string;
    'Data de Internação': string;
    'Data do Óbito': string;
    'Data de Nascimento': string;
    Dosagem: string;
    Encaminhamento: string;
    'Evolução de caso': string;
    'Exame de alcoolemia': string;
    'Fim da Reabilitação': string;
    'Gravidade da Lesão': string;
    Idade: number | string;
    'Início de Reabilitação': string;
    Lesões: string[];
    Nome: string;
    'Número Documento': string;
    'Número da CNH': string;
    'Número do cartão de saúde cidadão': string;
    Observações: string;
    'Posição do passageiro': string;
    'Procedimentos realizados': string;
    Sexo: string;
    'Situação do Condutor': string;
    'Tipo Documento': string;
    'Tipo de Morte': string;
    'Tipo de Pessoa': string;
    'Usava Cinto ou Capacete': string;
    _localId?: string;
}
export interface IncidentDetails {
    'Superfície da Pista': string;
    Local: string;
    Natureza: string;
    Jurisdição: string;
    Tempo: string;
    'Hora informada': string;
    Severidade: string;
    'Endereço 1': string;
    'Controle de Tráfego': string;
    Interseção: string;
    Iluminação: string;
    'Endereço 2': string;
}

export interface stepDetailsData {
    Natureza: string;
    Jurisdição: string;
    Interseção: string;
    Severidade: string;
    'Elementos Atingidos': string;
    'Primeira fonte de informação': string;
    'Código do Acidente': string;
    'Hora informada': string;
    Iluminação: string;
    Tempo: string;
    Local: string;
    'Superfície da Pista': string;
    'Tipo de Cruzamento': string;
    'Controle de Tráfego': string;
    codAMC: string;
    codPRE: string;
    codPRF: string;
    codSAMU: string;
    codPEFOCE: string;
    codSIM: string;
    occuredDate: string,
}

interface IncidentImages {
    path: string;
    uuid: string;
    description: string;
}

export interface attFile {
    index: number,
    uri: string,
    fileName: string,
    type: string,
    description: string,
    photo: boolean,
}

export interface GeomType {
    type: string;
    coordinates: [number, number];
}

export interface DriverIncidenteDetailsType {
    Bairro?: string;
    'Controle de Tráfego': string;
    'Código AMC'?: string;
    'Código PEFOCE'?: string;
    'Código PRE'?: string;
    'Código PRF'?: string;
    'Código SAMU'?: string;
    'Código SIM'?: string;
    'Código do Acidente': string;
    'Elementos Atingidas': string;
    'Endereço 1': string;
    'Endereço 2': string;
    'Hora informada': string;
    Iluminação: string;
    Interseção: string;
    Jurisdição: string;
    Local: string;
    Natureza: string;
    'Ocorrido ao Longo da Via/Cruzamento': string;
    'Primeira Fonte de Informação': string;
    Severidade: string;
    'Superfície da Pista': string;
    Tempo: string;
    'Tipo de Cruzamento': string;
    'Notas Gerais': string;
    _localId?: string;
}

export interface VeiculoType {
    Aluguel: string;
    Categoria: string;
    Cor: string;
    'Código Veículo': string;
    Danificado: string;
    "Formulario de Dano": damageFormData;
    Espécie: string;
    Legalizado: string;
    'Linha do Ônibus': string;
    Manobra: string;
    Marca: string;
    'Número do Ônibus': string | number;
    'Outra manobra': string;
    Placa: string;
    'Ano Fabricação': string;
    'Tipo Veículo': string;
    'Via de Acesso': string;
    _localId?: string;
}

export interface ViaType {
    index? : number;
    'Alinhamento Horizontal': string;
    'Alinhamento Vertical': string;
    'Condição da Calçada': string;
    'Condição da Pista': string;
    'Faixa para Sentido': string;
    Nome: string;
    'Obra de Arte': string;
    'Obras na Pista': string;
    'Separação Central': string;
    'Sinalização Horizontal': string;
    'Sinalização Vertical': string;
    'Tipo da Pista': string;
    'Tipo do Pavimento': string;
    _localId?: string;
}

export interface VitimaType {
    'Categoria do Condutor': string;
    'Perfil do Usuário': string;
    'Custo Geral': string;
    'Código Veículo': string;
    'Data de Alta': string;
    'Data de Internação': string;
    'Data do Óbito': string;
    'Data de Nascimento': string;
    Dosagem: string;
    Encaminhamento: string;
    'Evolução de caso': string;
    'Exame de alcoolemia': string;
    'Fim da Reabilitação': string;
    'Gravidade da Lesão': string;
    Idade: number | string;
    'Início de Reabilitação': string;
    Lesões: string[];
    Nome: string;
    'Número Documento': string;
    'Número da CNH': string;
    'Número do cartão de saúde cidadão': string;
    Observações: string;
    'Posição do passageiro': string;
    'Procedimentos realizados': string;
    Sexo: string;
    'Situação do Condutor': string;
    'Tipo Documento': string;
    'Tipo de Morte': string;
    'Tipo de Pessoa': string;
    'Usava Cinto ou Capacete': string;
    _localId?: string;
}

export interface stepLocate {
    'Endereço 1': string;
    'Endereço 2': string;
    latitude: string;
    longitude: string;
    'Número ou Referência': string;
    location_text: string;
    cidade: string;
    estado: string;
}
export interface RecordType {
    uuid: string;
    archived?: boolean;
    city: string;
    city_district: string;
    county: string;
    created_by: string;
    created: string;
    data: {
        driverIncidenteDetails: DriverIncidenteDetailsType;
        driverVeiculo: VeiculoType[];
        driverVia: ViaType[];
        driverVitima: VitimaType[];
    };
    geom: string;
    light: string | null;
    location_text: string;
    modified: string;
    modified_by: string;
    neighborhood: string;
    occurred_from: string;
    occurred_to: string;
    road: string;
    schema: string;
    state: string;
    weather: string;
}

export interface RecordsResponseType {
    count: number;
    next: string | null;
    previous: string | null;
    results: RecordType[];
}

export interface IntervencaoType {
    Tipo: string;
    Especificação: string;
    _localId: string;
}
export interface SolicitacaoType {
    'Nome da Intervenção': string;
    'Data de Solicitação': string;
    'Nome do Solicitante': string;
    'Número do Protocolo': number | string;
    _localId: string;
    'Protocolo Informado': boolean;
    'Descrição da Intervenção': string;
}
export interface ProjetoType {
    'Projeto com mais de uma Intervenção': boolean;
    Deferido: string;
    Status: String;
    'Projeto Dependente': boolean;
    'Identificador do Projeto Dependente': string;
    'Identificador do Projeto': string;
    'Data de Elaboração do Projeto': string;
    Responsável: string;
}
export interface ExecucaoType {
    'Sem GEENG': boolean;
    'Data de Conclusão': string;
    'Data de Envio': string;
    'Sem Projeto': boolean;
    'Identificador da Execução da Intervenção': string;
    'Data de Desativação': string;
    _localId: string;
    'Nome do Responsável pela Execução': string;
    'Data de Início': string;
}
export interface EnvolvidosType {
    'Data Dois Depois': string;
    'Data Dois Antes': string;
    'Data Um Antes': string;
    'Data Um Depois': string;
    _localId: string;
    bufferAntes: number;
    bufferDepois: number;
}

export interface Tests {
    Alcoolsensor: string;
    Passivos: string;
    _localId: string;
}

export interface Positive {
    'Total de Positivos Masculino': string;
    'Total de Positivos Feminino': string;
    _localId: string;
}
export interface CarsMoto {
    Número: string;
    _localId: string;
}
export interface MissionDetails {
    'Quantidade de Veículos 4+ Rodas Removidos (Pela AMC ou pelo Proprietário)': string;
    'Quantidade de Motocicletas, Ciclomotores e Triciclos Abordados': string;
    'Quantidade de Veículos de 2 ou 3 Rodas Removidos (Pela AMC ou pelo Proprietário)': string;
    'Quantidade de Habilitações Recolhidas': string;
    'Total de Veículos Abordados': string;
    'Equipe de Apoio': string;
    'Quantidade de Veículos com mais de 3 Rodas Abordados': string;
    _localId: string;
    'Quantidade de CRLVs Recolhidos': string;
}
export interface NoticeDetails {
    Enquadramento: string;
    Quantidade: string;
    _localId: string;
}
export interface InfractionsVehicles {
    'Total de Infrações': string;
    'Total de Veículos Autuados': string;
    _localId: string;
}
export interface Comment {
    Observações: string;
    _localId: string;
}
export interface SurveillanceMission {
    'Descrição do tipo da Missão': string;
    'Descrição do Foco da Missão': string;
    'Foco da Missão': string;
    'Tipo da Missão': string;
    _localId: string;
}
export interface Agent {
    Matrícula: string;
    _localId: string;
}
export interface TriggeredServices{
    service: string,
    designatedPerson: string,
}

export interface MissionCar {
    id: string;
    _localId: string;
}
export interface Refusa {
    'Total de Recusas Feminino': string;
    'Total de Recusas Masculino': string;
    _localId: string;
}

export interface ViaDetails {
    Referência: string;
    'Nome da Via': string;
    Número: string;
    'Tipo do Logradouro': string;
    _localId: string;
}
export interface DRV {
    Número: string;
    _localId: string;
}
export interface Coordinator {
    Matrícula: string;
    _localId: string;
}
export interface AutuacaoDetails {
    enquadramento: string;
    quantidade: number;
}

export interface FiscalizacaoType {
    uuid?: string;
    data: {
        testsPerformedOrStartedCount: Tests;
        positiveAmount: Positive;
        carsOrMotocycles: CarsMoto[];
        surveillanceMissionDetails: MissionDetails;
        noticesDetails: NoticeDetails[];
        infractionsAndNoticedVehiclesAmount: InfractionsVehicles;
        comments: Comment;
        driverSurveillanceMission: SurveillanceMission;
        agentRegisters: Agent[];
        refusalAmount: Refusa;
        viaDetails: ViaDetails[];
        DRVsNumber: DRV[];
        missionCoordinator: Coordinator[];
    };
    modified_by: string;
    created: string;
    modified: string;
    archived?: boolean;
    occurred_from: string;
    occurred_to: string;
    geom: GeomType;
    location_text: string;
    weather: string;
    light: string;
    city: string;
    city_district: string;
    county: string;
    neighborhood: string;
    road: string;
    state: string;
    schema: string;
}

export interface FiscalizacaoResponseType {
    count: number;
    next: string | null;
    previous: string | null;
    results: FiscalizacaoType[];
}

export interface FlagsType {
    uuid?: string;
    archived?: boolean;
    dataset_id: null | string;
    record_uuid: string;
    description: string;
    address_1: string;
    address_2: string;
    record_date: string;
    datetime: string;
    record: string;
}

export interface FlagsResponseType {
    count: number;
    next: string | null;
    previous: string | null;
    results: FlagsType[];
}