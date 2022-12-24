import { createContext, useContext, ReactNode, useReducer } from "react";

type State = {
  currentStep: Number;
  name: string;
  password: string;
  cpassword: string;
  email: string;
  dateNasc: Date;
  cep: number;
  street: string;
  houseNumber: number;
  district: string;
  town: string;
  refPoint: string;
  aboutU: string;
};

type Action = {
  type: FormActions;
  payload: any;
};

type FormProviderProps = {
  children: ReactNode;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

const initialData = {
  currentStep: 0,
  name: "",
  password: "",
  cpassword: "",
  email: "",
  dateNasc: Date,
  cep: 0,
  street: "",
  houseNumber: 0,
  district: "",
  town: "",
  refPoint: "",
  aboutU: "",
};

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setEmail,
  setPassword,
  setCPassword,
  setDateNasc,
  setCep,
  setStreet,
  setHouseNumber,
  setDistrict,
  setTown,
  setRefPoint,
  setAboutU,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPassword:
      return { ...state, password: action.payload };
    case FormActions.setDateNasc:
      return { ...state, dateNasc: action.payload };
    case FormActions.setCep:
      return { ...state, cep: action.payload };
    case FormActions.setStreet:
      return { ...state, street: action.payload };
    case FormActions.setHouseNumber:
      return { ...state, houseNumber: action.payload };
    case FormActions.setDistrict:
      return { ...state, district: action.payload };
    case FormActions.setTown:
      return { ...state, town: action.payload };
    case FormActions.setRefPoint:
      return { ...state, refPoint: action.payload };
    case FormActions.setAboutU:
      return { ...state, aboutU: action.payload };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used inside FormProvider");
  }
  return context;
};
