import * as yup from "yup";
import descriptions from "./description";
import { cpf, cnpj } from "cpf-cnpj-validator";
import { regexPhone } from "./regex";

const VALIDATE_FORM = {
  document: function validate(requiredText = "Documento não é válido") {
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
  email: function () {
    return yup.string().email("O email não é válido");
  },
  phone: function () {
    return yup.string().matches(regexPhone, "Número de telefone inválido");
  },
};

export default VALIDATE_FORM;
