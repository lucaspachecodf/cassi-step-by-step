import * as yup from "yup";
import descriptions from "./description";
import { cpf, cnpj } from "cpf-cnpj-validator";

export default {
  VALIDATE_FORM: {
    DOCUMENT: function validate(requiredText = "Documento não é válido") {
      return yup
        .string()
        .required(descriptions.REQUIRE.CPF_CNPJ)
        .test(
          "validacaoDocumento",
          requiredText,
          (value, context) =>
            value != null && (cpf.isValid(value) || cnpj.isValid(value))
        );
    },
  },
};
