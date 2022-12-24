import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";

export const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FormProvider>
  );
};
