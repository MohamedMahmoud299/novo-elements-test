
export interface UserType {

  id?: number;
  name?: string;
  enabled?: boolean;
  description?: string;

}

export interface ClientCorporation {

  id: number;
  name: string;

}

export interface CorporateUser {

  id?: number;
  name?: string;

}


export interface CustomObjectInstance {

  id?: number;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  text9?: string;
  text10?: string;
  text11?: string;
  text12?: string;
  text13?: string;
  text14?: string;
  text15?: string;
  text16?: string;
  text17?: string;
  text18?: string;
  text19?: string;
  text20?: string;
  int1?: number;
  int2?: number;
  int3?: number;
  int4?: number;
  int5?: number;
  int6?: number;
  int7?: number;
  int8?: number;
  int9?: number;
  int10?: number;
  float1?: number;
  float2?: number;
  float3?: number;
  float4?: number;
  float5?: number;
  float6?: number;
  float7?: number;
  float8?: number;
  float9?: number;
  float10?: number;
  textBlock1?: string;
  textBlock2?: string;
  textBlock3?: string;
  textBlock4?: string;
  textBlock5?: string;
  date1?: number;
  date2?: number;
  date3?: number;
  date4?: number;
  date5?: number;
  date6?: number;
  date7?: number;
  date8?: number;
  date9?: number;
  date10?: number;
  dateAdded?: number;
  dateLastModified?: number;

}

export interface ClientCorporationCustomObjectInstance extends CustomObjectInstance {

  clientCorporation?: ClientCorporation;

}

export interface Sendout {
  id?: number;
  candidate?: any;
  clientContact?: any;
  clientCorporation?: any;
  dateAdded?: number;
  email?: string;
  isRead?: boolean;
  jobOrder?: any;
  jobSubmission?: any;
  numTimesRead?: number;
  user?: any;
  userMessage?: any;
}
